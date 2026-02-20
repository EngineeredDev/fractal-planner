#!/usr/bin/env bash
set -euo pipefail

# PostToolUse hook wrapper for comment-checker.
# Reads tool_input from stdin, runs the comment-checker binary,
# and outputs a JSON systemMessage if unnecessary comments are detected.
#
# Exit 0 always — hooks must never block Claude Code.

# --- Read merged config (user + project, matching TypeScript loadConfig merge order) ---
eval "$(python3 << 'PYEOF'
import json, os, shlex
def rj(p):
    try:
        with open(p) as f: return json.load(f)
    except: return {}
xdg = os.environ.get('XDG_CONFIG_HOME', os.path.join(os.path.expanduser('~'), '.config'))
m = {**rj(os.path.join(xdg, 'fractal-planner', 'config.json')), **rj('.fractal-planner/config.json')}
cc = m.get('commentChecker', {})
print(f"CFG_ENABLED={shlex.quote(str(cc.get('enabled', True)).lower())}")
print(f"CFG_BINARY_PATH={shlex.quote(cc.get('binaryPath', ''))}")
print(f"CFG_CUSTOM_PROMPT={shlex.quote(cc.get('customPrompt', ''))}")
PYEOF
)" || { CFG_ENABLED="true"; CFG_BINARY_PATH=""; CFG_CUSTOM_PROMPT=""; }

# --- Check disabled ---
if [[ "$CFG_ENABLED" == "false" ]]; then
  exit 0
fi

# --- Locate binary (config > node_modules > PATH > cache dirs) ---
BINARY=""

if [[ -n "$CFG_BINARY_PATH" ]] && [[ -x "$CFG_BINARY_PATH" ]]; then
  BINARY="$CFG_BINARY_PATH"
else
  # Resolve plugin root (directory containing hooks/)
  PLUGIN_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
  CANDIDATE="$PLUGIN_ROOT/node_modules/.bin/comment-checker"
  if [[ -x "$CANDIDATE" ]]; then
    BINARY="$CANDIDATE"
  elif command -v comment-checker &>/dev/null; then
    BINARY="$(command -v comment-checker)"
  else
    # Check XDG cache directories
    XDG_CACHE="${XDG_CACHE_HOME:-$HOME/.cache}"
    for dir in "$XDG_CACHE/fractal-planner/bin" "$XDG_CACHE/oh-my-opencode/bin"; do
      if [[ -x "$dir/comment-checker" ]]; then
        BINARY="$dir/comment-checker"
        break
      fi
    done
  fi
fi

# Not found — silent skip
if [[ -z "$BINARY" ]]; then
  exit 0
fi

# --- Determine custom prompt ---
CUSTOM_PROMPT="$CFG_CUSTOM_PROMPT"

# --- Read stdin (PostToolUse hook input) ---
INPUT=$(cat)

# --- Build command args ---
CMD_ARGS=("$BINARY" "check")
if [[ -n "$CUSTOM_PROMPT" ]]; then
  CMD_ARGS+=("--prompt" "$CUSTOM_PROMPT")
fi

# --- Run binary and handle output ---
STDERR_FILE=$(mktemp)
trap 'rm -f "$STDERR_FILE"' EXIT

EXIT_CODE=0
echo "$INPUT" | "${CMD_ARGS[@]}" 2>"$STDERR_FILE" || EXIT_CODE=$?

if [[ $EXIT_CODE -eq 2 ]]; then
  # Comments detected — read warning from stderr
  WARNING=$(cat "$STDERR_FILE")
  if [[ -n "$WARNING" ]]; then
    # Escape for JSON: backslashes, quotes, newlines, tabs
    WARNING=$(echo "$WARNING" | sed 's/\\/\\\\/g; s/"/\\"/g' | tr '\n' ' ')
    echo "{\"systemMessage\":\"$WARNING\"}"
  fi
fi

# Always exit 0
exit 0
