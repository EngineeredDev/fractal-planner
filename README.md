<img width="1792" height="592" alt="Gemini_Generated_Image_ybse1pybse1pybse(1)" src="https://github.com/user-attachments/assets/9a23570a-5f7b-45c7-8553-c689eb41f9ec" />

---

A Claude Code plugin that turns a vague request into a structured plan and then builds it for you — with built-in verification at every step.

You describe what you want, Fractal Planner interviews you to fill in the gaps, researches your codebase, breaks the work into small tasks, and hands them off to builder agents that implement and verify each piece. You stay in the loop at the decisions that matter and skip the ones that don't.

The key here is that plans are broken down into bite size "fractal" tasks to ensure each step is implemented correctly without the risk of context rot.

## Installation & Requirements

Install from the Claude Code plugin marketplace:

```
/plugin marketplace add EngineeredDev/fractal-planner
/plugin install fractal-planner@engineereddev
```

> [!IMPORTANT]
> This uses the new Agent Teams feature.
> You must enable Agent Teams in your Claude Code settings (`~/.claude/settings.json` or project `.claude/settings.json`):

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

1. **Project config** — `.fractal-planner/config.json` in your project root
2. **User config** — `$XDG_CONFIG_HOME/fractal-planner/config.json` (defaults to `~/.config/fractal-planner/config.json`)
3. **Built-in defaults**

All fields are optional. It is only necessary to include values you want to override.

### Full default config

All fields are shown with their defaults. JSONC (JSON with comments) for readability — strip comments for actual use.

```jsonc
{
  "maxComplexity": 3,          // 1–10; tasks above this get decomposed further
  "maxIterations": 3,          // max builder → verifier loops per task
  "maxParallelTasks": 1,       // concurrent builder agents
  "executionOrder": "document-order", // "risk-first", "easy-first", or "document-order"
  "permissionMode": "default", // "default" | "acceptEdits" | "bypassPermissions" | "plan" | "delegate" | "dontAsk"
  "plansDir": ".fractal-planner/plans",
  "cliRunner": "auto",         // "auto" (detect bun, fall back to node) | "bun" | "node"

  "preAnalysis": true,
  "researchOnly": false,       // stop after research phase
  "planOnly": false,           // stop after planning, skip execution
  "skipApproachReview": false,
  "skipPlanReview": false,
  "noCommit": false,           // skip automatic git commits after task completion

  "iterationScaling": {
    "enabled": true,
    "base": 2,
    "factor": 0.8              // how maxIterations scales with task complexity
  },

  // PostToolUse hook — warns when Claude adds unnecessary comments (tree-sitter AST, 30+ languages)
  "commentChecker": {
    "enabled": true,
    "binaryPath": "",          // optional explicit path to the comment-checker binary
    "customPrompt": ""         // optional prompt; use {{comments}} placeholder
  },

  // TeammateIdle hook — detects stalled builders and re-injects continuation prompts
  "nudge": {
    "enabled": true,
    "maxRetries": 3            // 1–10; give up after this many nudges
  },

  // per-agent model overrides — omit a key to keep the agent's default
  "models": {
    // "analyst": "sonnet",
    // "interviewer": "sonnet",
    // "researcher": "sonnet",
    // "contextBuilder": "sonnet",
    // "decomposer": "sonnet",
    // "critic": "sonnet",
    // "linearSync": "sonnet",
    // "tracker": "sonnet",
    // "builder": "sonnet",
    // "verifier": "sonnet",
    // "committer": "sonnet"
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
    "userId": "optional-email-or-uuid-or-me",
    "statusMap": {
      "pending": "Todo",
      "in-progress": "In Progress",
      "completed": "Done",
      "failed": "Canceled",
      "review": "In Review"
    }
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

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup and release instructions.

## License

MIT

## Credits

Heavily inspired by [oh-my-opencode](https://github.com/code-yeongyu/oh-my-opencode).
