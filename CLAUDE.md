# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fractal Planner is a Claude Code plugin that provides an iterative planning and execution framework. It breaks complex features into progressively smaller tasks (fractal decomposition) and uses builder/verifier agent teams for implementation. Optionally integrates with Linear for issue tracking.

## Commands

```bash
bun install            # Install dependencies (bun only — no npm/yarn)
bun run build          # Bundle (bun build) + type declarations (tsc --emitDeclarationOnly)
bun run dev            # TypeScript watch mode (type checking only)
bun run typecheck      # Type check without emitting
bun run lint           # Run oxlint
bun run lint:fix       # Run oxlint with auto-fix and suggestions
bun test               # Run all tests
bun test --watch       # Watch mode
bun test --coverage    # With coverage
bun run clean          # Remove dist/ and stray compiled files
```

Run a single test file: `bun test src/__tests__/config.test.ts`

## Architecture

### Skills (Markdown prompts — not compiled TypeScript)

- **`/fp:plan`** (`skills/fp/SKILL.md`) — Thin orchestrator that coordinates each phase: interview (agent team with lead-relay) → research → decomposition → planning → (Linear sync). Uses `!`command`` blocks to pre-inject environment, configuration, and intent classification at skill load time via shell scripts in `skills/fp/scripts/` (`resolve-env.sh`, `classify-intent-wrapper.sh`). Remaining CLI helpers (validate-tasks, generate-plan) run as Claude-executed bash since they depend on runtime `planId`.
- **`/fp:implement`** (`skills/implement/SKILL.md`) — Loads a plan by `planId`, spawns builder/verifier agent team, executes leaf tasks in dependency order, handles commits, optionally syncs to Linear.
- **`/fp:commit`** (`skills/commit/SKILL.md`) — Git commit with style detection (SEMANTIC/PLAIN/SHORT) and language detection (KOREAN/ENGLISH).

### Custom Agents (`agents/`)

Subagents spawned by `/fp:plan` orchestrator:

- **`fp-interviewer`** — Phase 0: conducts requirements interview as a **teammate** (not subagent) using the lead-relay pattern. Sends questions to the lead via `SendMessage`; the lead relays them to the user via `AskUserQuestion`. Writes `interview.json` + `interview.md`. Tools: `SendMessage, Read, Write, Edit, Glob, Grep`. MaxTurns: 30. The spawn prompt is inlined in `skills/fp/SKILL.md` Step 5b; the agent file is kept as reference.
- **`fp-researcher`** — Phase 1: explores codebase, writes `research.md` + `context.md`. Tools: `Read, Glob, Grep, Write`. Model: sonnet. MaxTurns: 20.
- **`fp-decomposer`** — Phase 2: fractal task decomposition, writes `tasks.md`. Tools: `Read, Grep, Write`. Model: sonnet. MaxTurns: 15.
- **`fp-linear-sync`** — Phase 3.5: creates Linear issues mirroring task tree in execution order from `plan.md` (conditional on config), writes `linear-mapping.json`. Tools: `AskUserQuestion, Read, Write, mcp__linear-server__*`. Model: sonnet. MaxTurns: 25.

### Skill Load-Time Scripts (`skills/fp/scripts/`)

Shell scripts executed via `!`command`` in SKILL.md at skill load time (before Claude sees the prompt):

- **`resolve-env.sh`** — Resolves `PLUGIN_ROOT`, `CLI_RUNNER`, `CLI_DIR`, and loads full merged config JSON via `load-config`. Output is injected inline into the SKILL.md prompt.
- **`classify-intent-wrapper.sh`** — Thin wrapper that resolves bun/node and runs `classify-intent` CLI with the goal text. Receives `$ARGUMENTS` (substituted before `!`command`` runs).

### CLI Helpers (`src/cli/`)

Deterministic TypeScript scripts. `classify-intent` and `load-config` are called at skill load time via the scripts above. `validate-tasks` and `generate-plan` are invoked by Claude at runtime (they depend on `planId`):

- **`classify-intent.ts`** — Classifies user goal intent, outputs `{ intent, strategy }` JSON. Wraps `classifyIntent()` + `getQuestionStrategy()` from `src/utils/question-strategies.ts`.
- **`load-config.ts`** — Loads merged config (user + project + defaults), outputs resolved JSON. Wraps `loadConfig()` from `src/config.ts`.
- **`generate-plan.ts`** — Reads `tasks.md`, parses it via `task-parser.ts`, computes execution order, writes `plan.md`. Wraps `getExecutionOrder()` + `createImplementationPlan()` from `src/phases/planning.ts`.

### Source modules (`src/`)

- **`config.ts`** — Layered config: runtime overrides > project `.fractal-planner/config.json` > user `$XDG_CONFIG_HOME/fractal-planner/config.json` > defaults. Validated with Zod. `loadConfig()` is async; `getConfig()` is sync (throws if not loaded).
- **`types/index.ts`** — All shared interfaces (`Task`, `InterviewFindings`, `ClearanceCheck`, `VerificationReport`, etc.).
- **`phases/`** — Each planning phase in its own module: `interview.ts`, `clearance.ts`, `research.ts`, `decomposition.ts` (task tree validation with checks for complexity, metadata completeness, and subtask count), `planning.ts`, `execution.ts`.
- **`utils/draft.ts`** — Interview draft persistence to `.fractal-planner/plans/{planId}/`.
- **`utils/question-strategies.ts`** — Intent classification and question strategy selection.
- **`utils/task-parser.ts`** — Parses `tasks.md` markdown into a `Task` tree. Regex-based extraction of IDs, complexity, acceptance criteria, dependencies, files, and test requirements.

### Runtime artifacts

Plans are stored in `.fractal-planner/plans/{planId}/` (gitignored) with files like `interview.md`, `research.md`, `context.md`, `tasks.md`, `plan.md`, `linear-mapping.json`. Plan IDs are timestamps (`YYYYMMDD-HHmmss`).

### Agent communication protocol

Agents communicate via structured text messages.

**Interview (lead-relay pattern):**
- Interviewer → Lead: `"QUESTIONS:\n\nQ1:\n<question text>\nOPTIONS:\n- label | description\n...\nHEADER: <label>\nMULTI_SELECT: false\n\nQ2:\n<question text>\nOPTIONS:\n- label | description\n...\nHEADER: <label>\nMULTI_SELECT: false"` (up to Q4)
- Lead → Interviewer: `"USER RESPONSE:\n\nQ1: User selected: \"<option>\"\nAdditional context: <text>\n\nQ2: User selected: \"<option>\"\nAdditional context: <text>"`
- Interviewer → Lead: `"CLEARANCE ACHIEVED\nArtifacts written to .fractal-planner/plans/{planId}/"`
- Interviewer → Lead: `"DRAFT UPDATED (Round N)\nClearance: M/6 passed\nGaps: <list>"`

**Builder/verifier (implementation):**
- Builder: `"Task {id} implementation complete. Ready for verification.\n\nFILES_MODIFIED:\n- ..."`
- Verifier pass: `"VERIFICATION PASSED\nTask: {id}\nCriteria: N/N passed\n..."`
- Verifier fail: `"VERIFICATION FAILED\nTask: {id}\nFailures:\n- [FAIL]..."`

## Key Conventions

- **ES module imports use `.js` extensions**: `import { foo } from './bar.js'`
- **`strict: true`** in tsconfig — no implicit any
- **Linting with oxlint** — configured via `.oxlintrc.json` with plugins: `eslint`, `typescript`, `unicorn`, `oxc`, `promise`, `import`. Run `bun run lint` before committing; CI is expected to enforce lint-clean code.
- **Zod v4** for all config validation schemas
- **Dependencies**: `@anthropic-ai/claude-agent-sdk` and `zod`
- **`CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`** must be set to enable agent team spawning (configured in `.claude/settings.local.json`)
- **Agent team lead-relay pattern**: Phases that need user interaction (interview) run as agent teams where the teammate sends structured messages to the lead, and the lead relays to/from the user via `AskUserQuestion`. Phases that don't need user interaction (research, decomposition) remain as subagents.

## Linear Integration

Optional. Enable via `.fractal-planner/config.json`:

```json
{
  "linear": {
    "enabled": true,
    "teamId": "required-team-uuid",
    "projectId": "optional",
    "userId": "optional-email-or-uuid-or-me"
  }
}
```

Requires Linear MCP server in `~/.claude/settings.json`. Schema enforces: `linear.enabled = true` requires `linear.teamId`.

## CLI Runner

Controls how CLI helpers (`classify-intent`, `generate-plan`) are invoked. Configure via `.fractal-planner/config.json`:

```json
{
  "cliRunner": "auto"
}
```

- `"auto"` (default): detects bun availability at runtime, falls back to node
- `"bun"`: always use bun (prefers source TS in dev mode)
- `"node"`: always use node with compiled JS from `dist/cli/`

CLI helpers are built to `dist/cli/` alongside the main bundle. In dev mode with bun, source TS files are executed directly.

## Comment-Checker Hook

A PostToolUse hook (`hooks/`) that warns when Claude adds unnecessary comments to code. Uses the `@code-yeongyu/comment-checker` Go binary (tree-sitter AST parsing, 30+ languages) installed as an optional dependency.

Fires on `Write|Edit|MultiEdit|apply_patch` tool uses. If the binary isn't found, the hook silently skips.

Configure via `.fractal-planner/config.json`:

```json
{
  "commentChecker": {
    "enabled": true,
    "binaryPath": "/optional/explicit/path",
    "customPrompt": "Optional custom prompt with {{comments}} placeholder"
  }
}
```

Or via env vars (take priority): `COMMENT_CHECKER_DISABLED=1`, `COMMENT_CHECKER_PATH`, `COMMENT_CHECKER_PROMPT`.
