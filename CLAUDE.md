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

- **`/fp:plan`** (`skills/fp/SKILL.md`) — Orchestrates phases 0-3: interview → research → decomposition → planning. Accepts `--research-only`, `--plan-only`, `--max-complexity`, `--max-iterations`.
- **`/fp:implement`** (`skills/implement/SKILL.md`) — Loads a plan by `planId`, spawns builder/verifier agent team, executes leaf tasks in dependency order, handles commits, optionally syncs to Linear.
- **`/fp:commit`** (`skills/commit/SKILL.md`) — Git commit with style detection (SEMANTIC/PLAIN/SHORT) and language detection (KOREAN/ENGLISH).

### Source modules (`src/`)

- **`config.ts`** — Layered config: runtime overrides > project `.fractal-planner/config.json` > user `$XDG_CONFIG_HOME/fractal-planner/config.json` > defaults. Validated with Zod. `loadConfig()` is async; `getConfig()` is sync (throws if not loaded).
- **`types/index.ts`** — All shared interfaces (`Task`, `InterviewFindings`, `ClearanceCheck`, `VerificationReport`, etc.).
- **`phases/`** — Each planning phase in its own module: `interview.ts`, `clearance.ts`, `research.ts`, `decomposition.ts`, `planning.ts`, `execution.ts`.
- **`utils/draft.ts`** — Interview draft persistence to `.fractal-planner/plans/{planId}/`.
- **`utils/question-strategies.ts`** — Intent classification and question strategy selection.

### Runtime artifacts

Plans are stored in `.fractal-planner/plans/{planId}/` (gitignored) with files like `interview.md`, `research.md`, `context.md`, `tasks.md`, `plan.md`, `linear-mapping.json`. Plan IDs are timestamps (`YYYYMMDD-HHmmss`).

### Agent communication protocol

Builder/verifier agents communicate via structured text messages:
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
