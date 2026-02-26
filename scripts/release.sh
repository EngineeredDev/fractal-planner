#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

PACKAGE_JSON="$ROOT_DIR/package.json"
PLUGIN_JSON="$ROOT_DIR/.claude-plugin/plugin.json"
MARKETPLACE_JSON="$ROOT_DIR/.claude-plugin/marketplace.json"
CHANGELOG="$ROOT_DIR/CHANGELOG.md"

current_version=$(jq -r '.version' "$PACKAGE_JSON")

usage() {
  echo "Current version: $current_version"
  echo ""
  echo "Usage: $0 <version>"
  echo ""
  echo "Example: $0 0.2.0"
  exit 1
}

if [[ $# -lt 1 ]]; then
  usage
fi

VERSION="$1"

# Validate semver format
if ! [[ "$VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+(-[a-zA-Z0-9.]+)?$ ]]; then
  echo "Error: '$VERSION' is not a valid semver version"
  echo "Expected format: MAJOR.MINOR.PATCH (e.g., 0.2.0)"
  exit 1
fi

# Check for clean working tree
if ! git -C "$ROOT_DIR" diff --quiet || ! git -C "$ROOT_DIR" diff --cached --quiet; then
  echo "Error: working tree is not clean"
  echo "Commit or stash your changes before releasing."
  exit 1
fi

# Check for untracked files that matter
if [[ -n "$(git -C "$ROOT_DIR" ls-files --others --exclude-standard)" ]]; then
  echo "Error: there are untracked files"
  echo "Commit or remove them before releasing."
  exit 1
fi

# Check tag doesn't already exist
if git -C "$ROOT_DIR" tag -l "v$VERSION" | grep -q "v$VERSION"; then
  echo "Error: tag v$VERSION already exists"
  exit 1
fi

echo "Releasing v$VERSION (was $current_version)"
echo ""

# 1. Update version in package.json and plugin.json
jq --arg v "$VERSION" '.version = $v' "$PACKAGE_JSON" > "$PACKAGE_JSON.tmp" && mv "$PACKAGE_JSON.tmp" "$PACKAGE_JSON"
jq --arg v "$VERSION" '.version = $v' "$PLUGIN_JSON" > "$PLUGIN_JSON.tmp" && mv "$PLUGIN_JSON.tmp" "$PLUGIN_JSON"
jq --arg v "$VERSION" '.plugins[0].version = $v' "$MARKETPLACE_JSON" > "$MARKETPLACE_JSON.tmp" && mv "$MARKETPLACE_JSON.tmp" "$MARKETPLACE_JSON"

echo "Updated version in package.json, plugin.json, and marketplace.json"

# 2. Generate changelog entry
PREV_TAG=$(git -C "$ROOT_DIR" describe --tags --abbrev=0 2>/dev/null || echo "")
TODAY=$(date +%Y-%m-%d)

if [[ -n "$PREV_TAG" ]]; then
  LOG_RANGE="${PREV_TAG}..HEAD"
else
  LOG_RANGE="HEAD"
fi

FEATURES=""
FIXES=""
DOCS=""
REFACTORING=""
PERFORMANCE=""
TESTS=""
OTHER=""

# Regex patterns stored in variables to avoid bash parser issues with ) in [[ =~ ]]
re_feat='^feat(\([^)]*\))?:[[:space:]](.+)$'
re_fix='^fix(\([^)]*\))?:[[:space:]](.+)$'
re_docs='^docs(\([^)]*\))?:[[:space:]](.+)$'
re_refactor='^refactor(\([^)]*\))?:[[:space:]](.+)$'
re_perf='^perf(\([^)]*\))?:[[:space:]](.+)$'
re_test='^test(\([^)]*\))?:[[:space:]](.+)$'
re_skip='^(chore|build|ci)(\([^)]*\))?:[[:space:]](.+)$'

while IFS= read -r line; do
  [[ -z "$line" ]] && continue

  # Strip conventional commit prefix and optional scope
  if [[ "$line" =~ $re_feat ]]; then
    FEATURES+="- ${BASH_REMATCH[2]}"$'\n'
  elif [[ "$line" =~ $re_fix ]]; then
    FIXES+="- ${BASH_REMATCH[2]}"$'\n'
  elif [[ "$line" =~ $re_docs ]]; then
    DOCS+="- ${BASH_REMATCH[2]}"$'\n'
  elif [[ "$line" =~ $re_refactor ]]; then
    REFACTORING+="- ${BASH_REMATCH[2]}"$'\n'
  elif [[ "$line" =~ $re_perf ]]; then
    PERFORMANCE+="- ${BASH_REMATCH[2]}"$'\n'
  elif [[ "$line" =~ $re_test ]]; then
    TESTS+="- ${BASH_REMATCH[2]}"$'\n'
  elif [[ "$line" =~ $re_skip ]]; then
    # Skip chore, build, ci
    continue
  else
    OTHER+="- ${line}"$'\n'
  fi
done < <(git -C "$ROOT_DIR" log "$LOG_RANGE" --pretty=format:"%s")

ENTRY="## $VERSION ($TODAY)"$'\n'

[[ -n "$FEATURES" ]] && ENTRY+=$'\n'"### Features"$'\n'"$FEATURES"
[[ -n "$FIXES" ]] && ENTRY+=$'\n'"### Bug Fixes"$'\n'"$FIXES"
[[ -n "$DOCS" ]] && ENTRY+=$'\n'"### Documentation"$'\n'"$DOCS"
[[ -n "$REFACTORING" ]] && ENTRY+=$'\n'"### Refactoring"$'\n'"$REFACTORING"
[[ -n "$PERFORMANCE" ]] && ENTRY+=$'\n'"### Performance"$'\n'"$PERFORMANCE"
[[ -n "$TESTS" ]] && ENTRY+=$'\n'"### Tests"$'\n'"$TESTS"
[[ -n "$OTHER" ]] && ENTRY+=$'\n'"### Other"$'\n'"$OTHER"

# 3. Write changelog
if [[ -f "$CHANGELOG" ]]; then
  # Prepend after the "# Changelog" header
  {
    head -1 "$CHANGELOG"
    echo ""
    echo "$ENTRY"
    tail -n +2 "$CHANGELOG"
  } > "$CHANGELOG.tmp" && mv "$CHANGELOG.tmp" "$CHANGELOG"
else
  {
    echo "# Changelog"
    echo ""
    echo "$ENTRY"
  } > "$CHANGELOG"
fi

echo "Generated changelog entry"

# 4. Run checks
echo ""
echo "Running checks..."
cd "$ROOT_DIR"
bun run lint && bun run typecheck && bun test

echo ""
echo "All checks passed"

# 5. Commit and tag
git -C "$ROOT_DIR" add "$PACKAGE_JSON" "$PLUGIN_JSON" "$MARKETPLACE_JSON" "$CHANGELOG"
git -C "$ROOT_DIR" commit -m "v$VERSION"
git -C "$ROOT_DIR" tag "v$VERSION"

echo ""
echo "Created commit and tag v$VERSION"
echo ""
echo "To publish, run:"
echo "  git push origin main --tags"
