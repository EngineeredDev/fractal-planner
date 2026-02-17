#!/usr/bin/env bash
set -euo pipefail

# Thin wrapper that resolves bun/node and runs classify-intent CLI.
# Called via !`command` in SKILL.md at skill load time with goal text as $1.

PLUGIN_ROOT="${CLAUDE_PLUGIN_ROOT:-$(cd "$(dirname "$0")/../../.." && pwd)}"

if command -v bun >/dev/null 2>&1 && [[ -f "$PLUGIN_ROOT/src/cli/classify-intent.ts" ]]; then
  exec bun "$PLUGIN_ROOT/src/cli/classify-intent.ts" "$@"
elif [[ -f "$PLUGIN_ROOT/dist/cli/classify-intent.js" ]]; then
  exec node "$PLUGIN_ROOT/dist/cli/classify-intent.js" "$@"
else
  echo '{"intent":"mid-sized","strategy":{"researchFirst":true,"focusAreas":[],"initialQuestions":[],"researchPrompts":[]}}'
fi
