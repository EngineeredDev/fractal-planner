#!/usr/bin/env bash
set -euo pipefail

# TeammateIdle hook: detects stalled teammates and re-injects continuation prompts.
# Handles two teammate types:
#   - builder-* on fp-impl-* teams (task-based stall detection)
#   - interviewer on fp-interview-* teams (consecutive idle stall detection)
#
# Exit 0 = no action (hook passes through).
# Exit 2 + stderr = re-inject continuation prompt into the teammate.

# --- Read stdin (TeammateIdle hook input) ---
INPUT=$(cat)

# --- Extract fields via python3 ---
TEAMMATE_NAME=$(echo "$INPUT" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('teammate_name',''))" 2>/dev/null || echo "")
TEAM_NAME=$(echo "$INPUT" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('team_name',''))" 2>/dev/null || echo "")
CWD=$(echo "$INPUT" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('cwd',''))" 2>/dev/null || echo "")

# --- Determine teammate type ---
IS_BUILDER=false
IS_INTERVIEWER=false

if [[ "$TEAM_NAME" == fp-impl-* ]] && [[ "$TEAMMATE_NAME" == builder-* ]]; then
  IS_BUILDER=true
elif [[ "$TEAM_NAME" == fp-interview-* ]] && [[ "$TEAMMATE_NAME" == "interviewer" ]]; then
  IS_INTERVIEWER=true
else
  exit 0
fi

# --- Read merged config (user + project, matching TypeScript loadConfig merge order) ---
NUDGE_CFG=$(python3 << PYEOF
import json, os
def rj(p):
    try:
        with open(p) as f: return json.load(f)
    except: return {}
xdg = os.environ.get('XDG_CONFIG_HOME', os.path.join(os.path.expanduser('~'), '.config'))
cwd = "${CWD:-.}"
m = {**rj(os.path.join(xdg, 'fractal-planner', 'config.json')),
     **rj(os.path.join(cwd, '.fractal-planner', 'config.json'))}
n = m.get('nudge', {})
print(f"{str(n.get('enabled', True)).lower()}|{n.get('maxRetries', 3)}")
PYEOF
) || NUDGE_CFG="true|3"
IFS='|' read -r NUDGE_ENABLED MAX_RETRIES <<< "$NUDGE_CFG"

if [[ "$NUDGE_ENABLED" == "false" ]]; then
  exit 0
fi

# --- State directory and file ---
STATE_DIR="$HOME/.claude/teams/${TEAM_NAME}"
STATE_FILE="${STATE_DIR}/nudge-${TEAMMATE_NAME}.json"

# =============================================================================
# BUILDER PATH: task-based stall detection (unchanged logic)
# =============================================================================
if [[ "$IS_BUILDER" == true ]]; then
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
  fp_status=t.get('metadata',{}).get('fpStatus','')
  print(f'{status}|{owner}|{internal}|{task_id}|{subject}|{fp_status}')
except: print('|||||')
" 2>/dev/null || echo "|||||")

    IFS='|' read -r T_STATUS T_OWNER T_INTERNAL T_ID T_SUBJECT T_FP_STATUS <<< "$TASK_INFO"

    if [[ "$T_STATUS" == "in_progress" ]] && [[ "$T_OWNER" == "$TEAMMATE_NAME" ]] && [[ "$T_INTERNAL" != "True" ]]; then
      MATCHED_NATIVE_ID="$T_ID"
      MATCHED_PLAN_TASK_ID=$(echo "$T_SUBJECT" | python3 -c "
import sys,re
s=sys.stdin.read().strip()
m=re.match(r'\[([^\]]+)\]',s)
print(m.group(1) if m else '')
" 2>/dev/null || echo "")
      MATCHED_FP_STATUS="$T_FP_STATUS"
      MATCHED_TASK="$TASK_FILE"
      break
    fi
  done

  if [[ -z "$MATCHED_TASK" ]]; then
    rm -f "$STATE_FILE"
    exit 0
  fi

  # Builder is waiting for lead's verification response — not stalled
  if [[ "$MATCHED_FP_STATUS" == "AWAITING_VERIFICATION" ]]; then
    exit 0
  fi

  # Read or initialize state
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

  if [[ "$CURRENT_TASK_ID" != "$MATCHED_NATIVE_ID" ]]; then
    CURRENT_RETRIES=0
  fi

  if [[ "$CURRENT_RETRIES" -ge "$MAX_RETRIES" ]]; then
    rm -f "$STATE_FILE"
    exit 0
  fi

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
fi

# =============================================================================
# INTERVIEWER PATH: consecutive idle stall detection
# =============================================================================
if [[ "$IS_INTERVIEWER" == true ]]; then
  CURRENT_RETRIES=0

  if [[ -f "$STATE_FILE" ]]; then
    CURRENT_RETRIES=$(python3 -c "
import json,sys
try:
  s=json.load(open('$STATE_FILE'))
  print(s.get('retries',0))
except: print('0')
" 2>/dev/null || echo "0")
  fi

  if [[ "$CURRENT_RETRIES" -ge "$MAX_RETRIES" ]]; then
    rm -f "$STATE_FILE"
    exit 0
  fi

  CURRENT_RETRIES=$((CURRENT_RETRIES + 1))
  mkdir -p "$STATE_DIR"

  python3 -c "
import json
state = {
  'retries': $CURRENT_RETRIES,
  'lastRetryAt': __import__('datetime').datetime.now(__import__('datetime').timezone.utc).isoformat()
}
with open('$STATE_FILE', 'w') as f:
  json.dump(state, f, indent=2)
" 2>/dev/null

  cat >&2 <<PROMPT
You are the interviewer and you appear to have stalled (idle detection, attempt ${CURRENT_RETRIES}/${MAX_RETRIES}).

You MUST complete your mandatory draft update loop. Do one of the following:

1. If you have pending questions for the user, format and send them as a QUESTIONS message to the lead.
2. If you are evaluating clearance, finish the evaluation and send either:
   - "DRAFT UPDATED (Round N)" with clearance status, then follow up with QUESTIONS if gaps remain
   - "CLEARANCE ACHIEVED" if all 6 clearance criteria are met
3. If you already sent a message and are waiting for a response, send it again -- the lead may have missed it.

Do NOT go idle without sending a protocol message (QUESTIONS, DRAFT UPDATED, or CLEARANCE ACHIEVED).
PROMPT

  exit 2
fi
