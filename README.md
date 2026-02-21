# Fractal Planner

A Claude Code plugin that turns a one-line goal into a structured plan and then builds it for you — with built-in verification at every step.

You describe what you want, Fractal Planner interviews you to fill in the gaps, researches your codebase, breaks the work into small tasks, and hands them off to builder agents that implement and verify each piece. You stay in the loop at the decisions that matter and skip the ones that don't.

The key here is that plans are broken down into bite size "fractal" tasks to ensure each step is implemented correctly without context rot.

## Installation & Requirements

Install from the Claude Code plugin marketplace:

```
/plugin marketplace add EngineeredDev/fractal-planner
/plugin install fractal-planner@fractal-planner
```

Enable Agent Teams in your Claude Code settings (`~/.claude/settings.json` or project `.claude/settings.json`):

```json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

<details>
<summary>Installing from source (for development)</summary>

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

</details>

## Workflow

### 1. Start a plan

Tell Fractal Planner what you want to build:

```
/fp:plan Add user authentication with JWT tokens and refresh token rotation
```

### 2. Answer a few questions

You'll get a short interview — usually 2–4 rounds of questions about scope, constraints, and technical preferences. Answer what you can; skip what you don't have opinions on. The plugin uses your answers to tailor the plan to your project.

### 3. Review the approach

After researching your codebase, Fractal Planner shows you a proposed approach before doing any detailed planning. You can approve it, adjust it, or ask for a different direction.

### 4. Get a plan

The plugin breaks your goal into small, ordered tasks — each with acceptance criteria, file targets, and dependencies. You'll see the full plan and can approve or edit it before anything gets built.

### 5. Implement

Once you're happy with the plan, kick off implementation:

```
/fp:implement jwt-auth-api
```

Builder agents work through the tasks in order. Each task goes through an implement → verify cycle: a builder writes the code, then a separate verifier checks it against the acceptance criteria. You'll see commits land as tasks complete.

### Other commands

You won't normally need these, but they can sometimes come in handy.

| Command | What it does |
|---------|--------------|
| `/fp:commit` | Smart git commit — detects your project's commit style and language |
| `/fp:retry <planId> <taskId>` | Re-run a single failed task |
| `/fp:status <planId>` | Check progress on a running or completed plan |
| `/fp:handoff <planId>` | Generate a summary for continuing work in a new session |

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
- During `/fp:implement`: Issues move through statuses as builders work. Parent issues roll up from children. By default, completed tasks move to "In Review" (falling back to "Done"). You can override this with `statusMap.review` — recommended names: "Committed", "Code Complete", or "Implemented".
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
bun run release 0.2.0    # or: ./scripts/release.sh 0.2.0
```

The release script validates semver, updates `package.json` and `plugin.json`, generates a changelog entry from conventional commits, runs lint/typecheck/tests, commits, and creates a git tag. It prints the push command for a final review before publishing:

```bash
git push origin main --tags   # triggers CI → npm publish
```

## License

MIT

## Credits

Heavily inspired by [oh-my-opencode](https://github.com/code-yeongyu/oh-my-opencode).
