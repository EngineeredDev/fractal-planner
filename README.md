# Fractal Planner

A Claude Code plugin that provides an iterative planning and execution framework. It breaks down complex features into progressively smaller tasks (like a fractal) until each task is manageable for an LLM, then uses builder/verifier agent teams for robust implementation.

## Features

- **Requirements Interview** — Interactive clarification loop with 6-item clearance checklist and intent-specific question strategies
- **Codebase Research** — Analyzes your codebase, identifies patterns and knowledge gaps
- **Fractal Decomposition** — Recursively breaks tasks into smaller pieces with complexity scoring
- **Detailed Planning** — Implementation plans with strict acceptance criteria and dependency ordering
- **Builder/Verifier Teams** — Self-claiming builder agents with lead-spawned fresh verification subagents per iteration
- **Linear Integration** — Optional sync to Linear for issue tracking and status updates

## Installation

### From Marketplace

```
/plugin marketplace add EngineeredDev/fractal-planner
/plugin install fractal-planner@fractal-planner
```

### For Development

```bash
git clone https://github.com/EngineeredDev/fractal-planner.git
cd fractal-planner
bun install
bun run build
```

Test in another project:

```bash
claude --plugin-dir /path/to/fractal-planner
```

## Requirements

- Claude Code with plugin support
- Agent Teams enabled — add to your Claude Code settings (`~/.claude/settings.json` or project `.claude/settings.json`):
  ```json
  {
    "env": {
      "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
    }
  }
  ```

## Skills

| Skill | Description |
|-------|-------------|
| `/fp:plan <goal>` | Iterative planning: interview, research, decomposition, planning, and optional Linear sync |
| `/fp:implement <planId>` | Execute a plan using persistent builder agents with lead-spawned verification subagents |
| `/fp:commit` | Git commit with style detection (SEMANTIC/PLAIN/SHORT) and language detection (KOREAN/ENGLISH) |
| `/fp:retry <planId> <taskId>` | Retry a single failed task with a fresh builder/verifier cycle |
| `/fp:status <planId>` | Read-only progress report with progress bar, per-task status table, and evidence links |
| `/fp:handoff <planId>` | Generate a session handoff summary for clean context continuation |

### Example

```
/fp:plan Add user authentication with JWT tokens and refresh token rotation
```

After planning completes, implement the generated plan:

```
/fp:implement 20260220-143000
```

## Configuration

Fractal Planner uses a layered JSON config system. Settings are merged in order (highest priority wins):

1. **Runtime overrides**
2. **Project config** — `.fractal-planner/config.json` in your project root
3. **User config** — `$XDG_CONFIG_HOME/fractal-planner/config.json` (defaults to `~/.config/fractal-planner/config.json`)
4. **Built-in defaults**

All fields are optional. Only include values you want to override:

```json
{
  "maxComplexity": 3,
  "permissionMode": "bypassPermissions"
}
```

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `maxComplexity` | `1-10` | `3` | Complexity threshold — tasks above this are decomposed further |
| `maxIterations` | `integer >= 1` | `3` | Max builder/verifier loops per task |
| `maxParallelTasks` | `integer >= 1` | `1` | Max concurrent builder agents |
| `researchOnly` | `boolean` | `false` | Stop after the research phase |
| `planOnly` | `boolean` | `false` | Stop after planning, skip execution |
| `skipPlanReview` | `boolean` | `false` | Skip user review of the generated plan |
| `skipApproachReview` | `boolean` | `false` | Skip pre-decomposition approach review |
| `preAnalysis` | `boolean` | `true` | Run pre-analysis before interview |
| `noCommit` | `boolean` | `false` | Skip automatic git commits after task completion |
| `plansDir` | `string` | `".fractal-planner/plans"` | Directory for plan artifacts |
| `permissionMode` | `string` | `"default"` | Permission mode for agents. One of: `default`, `acceptEdits`, `bypassPermissions`, `plan`, `delegate`, `dontAsk` |
| `cliRunner` | `string` | `"auto"` | How CLI helpers are invoked: `auto` (detect bun, fall back to node), `bun`, or `node` |
| `executionOrder` | `string` | `"document-order"` | Task execution order: `risk-first`, `easy-first`, or `document-order` |

### Iteration Scaling

Controls how `maxIterations` scales with task complexity:

```json
{
  "iterationScaling": {
    "enabled": true,
    "base": 2,
    "factor": 0.8
  }
}
```

### Comment Checker Hook

A PostToolUse hook that warns when Claude adds unnecessary comments to code. Uses tree-sitter AST parsing (30+ languages).

```json
{
  "commentChecker": {
    "enabled": true,
    "binaryPath": "/optional/explicit/path",
    "customPrompt": "Optional prompt with {{comments}} placeholder"
  }
}
```

Env var overrides: `COMMENT_CHECKER_DISABLED=1`, `COMMENT_CHECKER_PATH`, `COMMENT_CHECKER_PROMPT`.

### Nudge Mechanism

A TeammateIdle hook that detects stalled builder agents during `/fp:implement` and re-injects continuation prompts.

```json
{
  "nudge": {
    "enabled": true,
    "maxRetries": 3
  }
}
```

Disable via env var: `NUDGE_DISABLED=1`.

### Linear Integration

Optional sync to [Linear](https://linear.app). Requires the Linear MCP server in your Claude Code settings:

```json
{
  "mcpServers": {
    "linear": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/linear-mcp-server"]
    }
  }
}
```

Then add to `.fractal-planner/config.json`:

```json
{
  "linear": {
    "enabled": true,
    "teamId": "your-team-uuid",
    "projectId": "optional-project-uuid",
    "userId": "optional-email-or-uuid-or-me"
  }
}
```

**Finding IDs:** In Linear, press Cmd+K, search "Copy model UUID..." to get team/project UUIDs.

**What happens:**
- During `/fp:plan`: Issues are created mirroring the task tree. A `linear-mapping.json` is saved with plan artifacts.
- During `/fp:implement`: Issues move through statuses as builders work. Comments are posted with verification results. Parent issues roll up from children.
- If the Linear MCP server isn't connected, everything works normally — sync is skipped with a warning.

## How It Works

### Phase 0: Requirements Interview
Intent classification detects task type and adapts the questioning strategy. A 6-item clearance checklist ensures core objective, scope, ambiguities, technical approach, constraints, and blocking questions are all addressed. Interview findings are persisted to `.fractal-planner/plans/{planId}/`.

### Phase 1: Research
Explores the codebase using the enhanced context from the interview. Identifies patterns, knowledge gaps, and technical details. Writes `research.md` and `context.md`.

### Phase 2: Decomposition
Evaluates complexity and recursively breaks down tasks exceeding `maxComplexity`. Creates a hierarchical task tree (`tasks.md`) with complexity scores, acceptance criteria, dependencies, and file annotations.

### Phase 3: Planning
Parses the task tree, computes execution order respecting dependencies, and generates `plan.md` with implementation details for each leaf task.

### Phase 3.5: Linear Sync (Optional)
If Linear is configured, creates mirrored issues in dependency/execution order with parent-child relationships.

### Phase 4: Execution (`/fp:implement`)
Persistent builder agents run a self-claiming work loop (TaskList, claim, implement). The lead spawns a fresh verification subagent per iteration to check acceptance criteria. A dedicated tracker agent records progress and syncs to Linear.

## Development

```bash
bun install            # Install dependencies
bun run build          # Bundle + type declarations
bun run dev            # TypeScript watch mode
bun run typecheck      # Type check without emitting
bun run lint           # Run oxlint
bun run lint:fix       # Auto-fix lint issues
bun test               # Run tests
bun test --watch       # Watch mode
bun test --coverage    # With coverage
bun run clean          # Remove dist/ and stray compiled files
```

### Release

```bash
# Bump version in package.json, plugin.json, and marketplace.json
# Commit and tag
git tag v0.1.0
git push origin main --tags
# CI runs checks, then the release workflow publishes to npm
```

## License

MIT

## Credits

Heavily inspired by [oh-my-opencode](https://github.com/code-yeongyu/oh-my-opencode).
