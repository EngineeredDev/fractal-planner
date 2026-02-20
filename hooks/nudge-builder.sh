#!/usr/bin/env bash
set -euo pipefail

# TeammateIdle hook: detects stalled builders and re-injects continuation prompts.
# Fires for all teammates; filters to builder-* on fp-impl-* teams only.
#
# Exit 0 = no action (hook passes through).
# Exit 2 + stderr = re-inject continuation prompt into the builder.

# --- Read stdin (TeammateIdle hook input) ---
INPUT=$(cat)

# --- Extract fields via python3 ---
TEAMMATE_NAME=$(echo "$INPUT" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('teammate_name',''))" 2>/dev/null || echo "")
TEAM_NAME=$(echo "$INPUT" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('team_name',''))" 2>/dev/null || echo "")
CWD=$(echo "$INPUT" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('cwd',''))" 2>/dev/null || echo "")

# --- Filter: only builder-* on fp-impl-* teams ---
if [[ "$TEAM_NAME" != fp-impl-* ]]; then
  exit 0
fi
if [[ "$TEAMMATE_NAME" != builder-* ]]; then
  exit 0
fi

# --- Check env var override ---
if [[ "${NUDGE_DISABLED:-}" == "1" ]]; then
  exit 0
fi

# --- Read config ---
CONFIG_FILE="${CWD:-.}/.fractal-planner/config.json"
NUDGE_ENABLED="true"
MAX_RETRIES=3

if [[ -f "$CONFIG_FILE" ]]; then
  NUDGE_ENABLED=$(python3 -c "
import json,sys
try:
  c=json.load(open('$CONFIG_FILE'))
  v=c.get('nudge',{}).get('enabled',True)
  print(str(v).lower())
except: print('true')
" 2>/dev/null || echo "true")

  MAX_RETRIES=$(python3 -c "
import json,sys
try:
  c=json.load(open('$CONFIG_FILE'))
  v=c.get('nudge',{}).get('maxRetries',3)
  print(int(v))
except: print('3')
" 2>/dev/null || echo "3")
fi

if [[ "$NUDGE_ENABLED" == "false" ]]; then
  exit 0
fi

# --- Scan native task files for in_progress tasks owned by this builder ---
TASKS_DIR="$HOME/.claude/tasks/${TEAM_NAME}"
if [[ ! -d "$TASKS_DIR" ]]; then
  exit 0
fi

MATCHED_TASK=""
MATCHED_NATIVE_ID=""
MATCHED_PLAN_TASK_ID=""

for TASK_FILE in "$TASKS_DIR"/*.json; do
  [[ -f "$TASK_FILE" ]] || continue

  TASK_INFO=$(python3 -c "
import json,sys
try:
  t=json.load(open('$TASK_FILE'))
  status=t.get('status','')
  owner=t.get('owner','')
  internal=t.get('metadata',{}).get('_internal',False)
  task_id=t.get('id','')
  subject=t.get('subject','')
  print(f'{status}|{owner}|{internal}|{task_id}|{subject}')
except: print('||||')
" 2>/dev/null || echo "||||")

  IFS='|' read -r T_STATUS T_OWNER T_INTERNAL T_ID T_SUBJECT <<< "$TASK_INFO"

  if [[ "$T_STATUS" == "in_progress" ]] && [[ "$T_OWNER" == "$TEAMMATE_NAME" ]] && [[ "$T_INTERNAL" != "True" ]]; then
    MATCHED_NATIVE_ID="$T_ID"
    # Extract plan task ID from subject: "[T1.1] description..." -> "T1.1"
    MATCHED_PLAN_TASK_ID=$(echo "$T_SUBJECT" | python3 -c "
import sys,re
s=sys.stdin.read().strip()
m=re.match(r'\[([^\]]+)\]',s)
print(m.group(1) if m else '')
" 2>/dev/null || echo "")
    MATCHED_TASK="$TASK_FILE"
    break
  fi
done

# --- No in_progress task? Legitimate idle — clean up state and exit ---
STATE_DIR="$HOME/.claude/teams/${TEAM_NAME}"
STATE_FILE="${STATE_DIR}/nudge-${TEAMMATE_NAME}.json"

if [[ -z "$MATCHED_TASK" ]]; then
  rm -f "$STATE_FILE"
  exit 0
fi

# --- Read or initialize state file ---
CURRENT_RETRIES=0
CURRENT_TASK_ID=""

if [[ -f "$STATE_FILE" ]]; then
  STATE_INFO=$(python3 -c "
import json,sys
try:
  s=json.load(open('$STATE_FILE'))
  print(f'{s.get(\"retries\",0)}|{s.get(\"taskId\",\"\")}')
except: print('0|')
" 2>/dev/null || echo "0|")

  IFS='|' read -r CURRENT_RETRIES CURRENT_TASK_ID <<< "$STATE_INFO"
fi

# --- Task changed? Reset retries ---
if [[ "$CURRENT_TASK_ID" != "$MATCHED_NATIVE_ID" ]]; then
  CURRENT_RETRIES=0
fi

# --- Check retry limit ---
if [[ "$CURRENT_RETRIES" -ge "$MAX_RETRIES" ]]; then
  rm -f "$STATE_FILE"
  exit 0
fi

# --- Increment retries and write state ---
CURRENT_RETRIES=$((CURRENT_RETRIES + 1))
mkdir -p "$STATE_DIR"

python3 -c "
import json
state = {
  'retries': $CURRENT_RETRIES,
  'lastRetryAt': __import__('datetime').datetime.now(__import__('datetime').timezone.utc).isoformat(),
  'taskId': '$MATCHED_NATIVE_ID'
}
with open('$STATE_FILE', 'w') as f:
  json.dump(state, f, indent=2)
" 2>/dev/null

# --- Write continuation prompt to stderr and exit 2 ---
cat >&2 <<PROMPT
You are ${TEAMMATE_NAME} and you have an in-progress task [${MATCHED_PLAN_TASK_ID}] that you have not completed.
You appear to have stalled (idle detection, attempt ${CURRENT_RETRIES}/${MAX_RETRIES}).

Resume your self-claiming work loop:
1. You already own task ${MATCHED_PLAN_TASK_ID} (native ID: ${MATCHED_NATIVE_ID}). Call TaskGet(${MATCHED_NATIVE_ID}) to re-read the task spec.
2. Continue implementing the task according to the spec.
3. When done, send "IMPLEMENTATION COMPLETE: ${MATCHED_PLAN_TASK_ID}" with FILES_MODIFIED to "team-lead".

If you previously sent IMPLEMENTATION COMPLETE and are waiting for verification, send the message again -- the lead may have missed it.
PROMPT

exit 2
