#!/usr/bin/env bash
set -euo pipefail

# Resolves plugin root, CLI runner, CLI directory, and full merged config.
# Called via !`command` in SKILL.md at skill load time.
#
# Output format (key: value, one per line):
#   PLUGIN_ROOT: /path/to/fractal-planner
#   CLI_RUNNER: bun
#   CLI_DIR: /path/to/fractal-planner/src/cli
#   CONFIG_JSON: {"maxComplexity":3,...}

# --- Resolve plugin root ---
# $CLAUDE_PLUGIN_ROOT points to the plugin root (where .claude-plugin/ lives).
# Fallback: script-relative path (scripts/ -> fp/ -> skills/ -> repo root).
PLUGIN_ROOT="${CLAUDE_PLUGIN_ROOT:-$(cd "$(dirname "$0")/../../.." && pwd)}"

# --- Read cliRunner from config ---
CONFIG_FILE="$PLUGIN_ROOT/.fractal-planner/config.json"
CLI_RUNNER_SETTING="auto"

if [[ -f "$CONFIG_FILE" ]]; then
  CLI_RUNNER_SETTING=$(python3 -c "
import json,sys
try:
  c=json.load(open('$CONFIG_FILE'))
  print(c.get('cliRunner','auto'))
except: print('auto')
" 2>/dev/null || echo "auto")
fi

# --- Resolve CLI runner ---
case "$CLI_RUNNER_SETTING" in
  bun)  CLI_RUNNER="bun" ;;
  node) CLI_RUNNER="node" ;;
  *)
    if command -v bun >/dev/null 2>&1; then
      CLI_RUNNER="bun"
    else
      CLI_RUNNER="node"
    fi
    ;;
esac

# --- Resolve CLI directory ---
if [[ "$CLI_RUNNER" == "bun" ]] && [[ -f "$PLUGIN_ROOT/src/cli/classify-intent.ts" ]]; then
  CLI_DIR="$PLUGIN_ROOT/src/cli"
else
  CLI_DIR="$PLUGIN_ROOT/dist/cli"
fi

# --- Load full merged config via CLI helper ---
CONFIG_JSON=""
if [[ "$CLI_RUNNER" == "bun" ]] && [[ -f "$CLI_DIR/load-config.ts" ]]; then
  CONFIG_JSON=$("$CLI_RUNNER" "$CLI_DIR/load-config.ts" 2>/dev/null || echo '{"_error":"config load failed"}')
elif [[ -f "$CLI_DIR/load-config.js" ]]; then
  CONFIG_JSON=$("$CLI_RUNNER" "$CLI_DIR/load-config.js" 2>/dev/null || echo '{"_error":"config load failed"}')
else
  CONFIG_JSON='{"_error":"load-config not found — run bun run build or install bun (dist/cli/ is required for node)"}'
fi

# --- Output ---
echo "PLUGIN_ROOT: $PLUGIN_ROOT"
echo "CLI_RUNNER: $CLI_RUNNER"
echo "CLI_DIR: $CLI_DIR"
echo "CONFIG_JSON: $CONFIG_JSON"
