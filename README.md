# Fractal Planner

A Claude Code plugin that provides an iterative planning and execution framework. It breaks down complex features into progressively smaller tasks (like a fractal) until each task is manageable for an LLM, then uses builder/verifier agent teams for robust implementation.

## Features

- 💬 **Requirements Interview**: Interactive clarification loop with 5-item clearance checklist
- 🔍 **Iterative Research**: Analyzes your codebase and asks clarifying questions
- 🌳 **Fractal Decomposition**: Recursively breaks tasks into smaller, manageable pieces
- 📋 **Detailed Planning**: Creates implementation plans with strict acceptance criteria
- 🤝 **Builder/Verifier Teams**: Uses Agent Teams pattern for quality assurance
- ✅ **Acceptance-Driven**: Each task verified against criteria before completion

## Installation

### From Plugin Registry (Coming Soon)

```bash
claude plugin install fractal-planner
```

### For Development

1. Clone this repository:
```bash
git clone https://github.com/yourusername/fractal-planner.git
cd fractal-planner
```

2. Install dependencies:
```bash
npm install
```

3. Build the plugin:
```bash
npm run build
```

4. Test in another project:
```bash
cd /path/to/your/project
claude --plugin-dir /path/to/fractal-planner
```

## Usage

Once installed, use the `/fractal-planner` command in Claude Code:

```
/fractal-planner Add user authentication with JWT tokens and refresh token rotation
```

### Options

- `--max-complexity <1-10>`: Set complexity threshold for decomposition (default: 5)
- `--max-iterations <n>`: Max builder/verifier loops per task (default: 3)
- `--research-only`: Only perform research and gap analysis
- `--plan-only`: Run through planning phase, skip execution

### Examples

```bash
# Full execution
/fractal-planner Implement real-time notifications using WebSockets

# Research and planning only
/fractal-planner --plan-only Add caching layer with Redis

# Custom complexity threshold
/fractal-planner --max-complexity 3 Refactor authentication module
```

## Configuration

Fractal Planner uses a layered JSON config system. Settings are merged in this order (highest priority wins):

1. **Runtime overrides** (CLI flags)
2. **Project config** — `.fractal-planner/config.json` in your project root
3. **User config** — `$XDG_CONFIG_HOME/fractal-planner/config.json` (defaults to `~/.config/fractal-planner/config.json`)
4. **Built-in defaults**

All fields are optional. Only include the values you want to override:

```json
{
  "maxComplexity": 3,
  "permissionMode": "bypassPermissions"
}
```

### Available Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `maxComplexity` | `1-10` | `5` | Complexity threshold for task decomposition — tasks above this are broken down further |
| `maxIterations` | `integer >= 1` | `3` | Max builder/verifier loops per task before giving up |
| `researchOnly` | `boolean` | `false` | Stop after the research phase |
| `planOnly` | `boolean` | `false` | Stop after planning, skip execution |
| `enableAgentTeams` | `boolean` | `true` | Use builder/verifier agent teams for execution |
| `noCommit` | `boolean` | `false` | Skip automatic git commits after task completion |
| `plansDir` | `string` | `".fractal-planner/plans"` | Directory for plan artifacts |
| `permissionMode` | `string` | `"default"` | Permission mode passed to the Claude Agent SDK. One of: `default`, `acceptEdits`, `bypassPermissions`, `plan`, `delegate`, `dontAsk` |

Invalid values are caught at startup with a clear error message — for example, setting `permissionMode` to an unrecognized value will tell you exactly which file and field is wrong.

### Linear Integration (Optional)

Fractal Planner can sync tasks to [Linear](https://linear.app) so your planning breakdown appears as real Linear issues and status updates flow back as builders complete work.

#### Prerequisites

1. Install the [Linear MCP server](https://github.com/linear/linear-mcp) in your Claude Code settings (`~/.claude/settings.json`):
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

2. Authenticate with Linear when prompted (the MCP server handles OAuth).

#### Finding Your Team ID and Project ID

**Team ID**:
1. Open [Linear](https://linear.app) and navigate to your team's issues page
2. Press **Cmd+K** (or Ctrl+K) to open the command palette
3. Search for **Copy model UUID...** and select it
4. Copy the UUID — this is your `teamId`

**Project ID** (optional — only needed if you want issues grouped under a specific project):
1. In Linear, navigate to the project you want to use
2. Press **Cmd+K** (or Ctrl+K) to open the command palette
3. Search for **Copy model UUID...** and select it
4. Copy the UUID — this is your `projectId`

#### Configuration

Add a `linear` block to your project config (`.fractal-planner/config.json`):

```json
{
  "linear": {
    "enabled": true,
    "teamId": "your-team-uuid",
    "projectId": "your-project-uuid",
    "userId": "your-user-uuid-or-email"
  }
}
```

The `userId` field is optional and can be a Linear user UUID, email address, or `"me"` for the authenticated user. When set, all created issues will be assigned to this user.

Status mapping is auto-detected from your team's workflow states by default. To override, add a `statusMap`:

```json
{
  "linear": {
    "enabled": true,
    "teamId": "your-team-uuid",
    "statusMap": {
      "pending": "Todo",
      "in-progress": "In Progress",
      "completed": "Done",
      "failed": "Canceled"
    }
  }
}
```

The status names must match your team's workflow states exactly (case-sensitive). If a name doesn't match, Fractal Planner falls back to auto-detection for that status.

#### What Happens

- **During planning** (`/fp:plan`): Issues are created in Linear mirroring the task tree hierarchy. A `linear-mapping.json` file is saved alongside plan artifacts.
- **During implementation** (`/fp:implement`): Issues move to "In Progress" when a builder starts, "Done" on verification pass, or "Canceled" on failure. Comments are posted with verification results. Parent issues roll up based on children's statuses.
- **Graceful degradation**: If the Linear MCP server isn't connected, planning and implementation proceed normally — Linear sync is simply skipped with a warning.

## Requirements

- Claude Code >= 2.1.32
- Agent Teams enabled (add to your settings):
  ```json
  {
    "env": {
      "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "true"
    }
  }
  ```

## How It Works

### Phase 0: Requirements Interview
- **Intent Classification**: Automatically detects task type (trivial, refactoring, build-from-scratch, mid-sized, architecture)
- **Clearance Checklist**: Ensures 5 key areas are covered:
  - ✓ Core objective defined
  - ✓ Scope boundaries established
  - ✓ No critical ambiguities
  - ✓ Technical approach decided
  - ✓ No blocking questions
- **Draft Persistence**: Maintains interview findings in `.fractal-planner/plans/{planId}/`
- **Gap Analysis**: Identifies missing context and suggests clarifying questions
- **Intent-Specific Strategies**: Adapts questioning approach based on task type

### Phase 1: Research
- Receives enhanced context from interview phase
- Analyzes existing codebase patterns
- Identifies knowledge gaps
- Gathers technical implementation details

### Phase 2: Decomposition
- Evaluates task complexity
- Recursively breaks down complex tasks
- Creates hierarchical task tree
- Assigns complexity scores

### Phase 3: Planning
- Generates detailed implementation plan
- Defines strict acceptance criteria for each task
- Identifies task dependencies
- Creates execution order

### Phase 4: Execution
- **Builder Agent**: Implements the task
- **Verifier Agent**: Validates against acceptance criteria
- Iterates until criteria met or max iterations reached
- Moves to next task in plan

## Project Structure

```
fractal-planner/
├── .claude-plugin/
│   └── plugin.json              # Plugin manifest
├── .fractal-planner/
│   └── plans/                   # Per-session plan artifacts (gitignored)
├── skills/
│   └── fractal-planner/
│       ├── SKILL.md              # Skill documentation
│       └── skill.ts              # Skill entry point
├── src/
│   ├── phases/
│   │   ├── interview.ts          # Interview phase (Phase 0)
│   │   ├── clearance.ts          # Clearance checklist evaluation
│   │   ├── research.ts           # Research phase logic
│   │   ├── decomposition.ts      # Fractal decomposition
│   │   ├── planning.ts           # Plan generation
│   │   └── execution.ts          # Builder/verifier coordination
│   ├── types/
│   │   └── index.ts              # TypeScript types
│   └── utils/
│       ├── draft.ts              # Draft file management
│       ├── question-strategies.ts # Intent classification
│       └── helpers.ts            # Utility functions
├── package.json
├── tsconfig.json
└── README.md
```

## Development

### Setup

```bash
npm install
```

### Build

```bash
npm run build
```

### Test Locally

In your test project:

```bash
claude --plugin-dir /path/to/fractal-planner
```

Then use `/fractal-planner` in the Claude Code session.

### Watch Mode

```bash
npm run dev
```

## Contributing

Contributions welcome! Please read our contributing guidelines and submit PRs.

## License

MIT

## Credits

Built with [Claude Agent SDK](https://github.com/anthropics/claude-agent-sdk) and [Claude Code](https://code.claude.com).

## Sources

- [Create plugins - Claude Code Docs](https://code.claude.com/docs/en/plugins)
- [Orchestrate teams of Claude Code sessions](https://code.claude.com/docs/en/agent-teams)
- [How to Build Claude Code Plugins: A Step-by-Step Guide](https://www.datacamp.com/tutorial/how-to-build-claude-code-plugins)
