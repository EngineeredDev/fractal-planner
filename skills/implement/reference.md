# fp:implement Reference

## Task Interface

Each task in the task tree has this structure:

```typescript
interface Task {
  id: string;                    // e.g. "1.2.1"
  description: string;           // what to implement
  acceptanceCriteria: string[];  // measurable criteria for verification
  estimatedComplexity: number;   // 1-10 scale
  dependencies: string[];        // task IDs that must complete first
  subtasks?: Task[];             // if present, this is NOT a leaf task
  status?: 'pending' | 'in-progress' | 'completed' | 'failed';
  metadata?: {
    filesToModify?: string[];    // files the builder should focus on
    testsRequired?: boolean;     // whether tests must be written
  };
}
```

Only **leaf tasks** (those without `subtasks`) are executed.

## VerificationReport Format

The verifier produces structured reports:

```typescript
interface VerificationReport {
  verified: boolean;         // true if ALL criteria passed
  passedCriteria: number[];  // indices of passed acceptance criteria (0-based)
  failedCriteria: number[];  // indices of failed acceptance criteria (0-based)
  feedback: string;          // human-readable summary
  suggestions?: string[];    // optional improvement suggestions
}
```

## Plan File Formats

### `.fractal-planner/plans/{planId}/tasks.md`

The task tree file uses this markdown structure:

```markdown
# Task Decomposition

## Root Task
- [ID: root] Main goal description (Complexity: 8)

### Subtasks
- [ID: 1] First major component (Complexity: 6)
  - [ID: 1.1] Sub-component A (Complexity: 3)
    - Acceptance: Code compiles, tests pass, follows patterns
    - Dependencies: none
    - Files: src/foo.ts
    - Tests Required: yes
  - [ID: 1.2] Sub-component B (Complexity: 4)
    - Acceptance: Integration works, error handling present
    - Dependencies: 1.1
    - Files: src/bar.ts, src/baz.ts
    - Tests Required: yes
- [ID: 2] Second major component (Complexity: 5)
  - [ID: 2.1] Setup config (Complexity: 2)
    - Acceptance: Config file created, validated by schema
    - Dependencies: none
    - Files: config/setup.json
    - Tests Required: no
```

### `.fractal-planner/plans/{planId}/plan.md`

The execution plan file uses this markdown structure:

```markdown
# Implementation Plan

## Execution Order
1. [Task 1.1]: Sub-component A
   - Dependencies: none
   - Acceptance:
     1. Code compiles without errors
     2. Tests pass
     3. Follows existing patterns
2. [Task 2.1]: Setup config
   - Dependencies: none
   - Acceptance:
     1. Config file created
     2. Validated by schema
3. [Task 1.2]: Sub-component B
   - Dependencies: 1.1
   - Acceptance:
     1. Integration works
     2. Error handling present
```

## Valid/Invalid Input Examples

### Valid

```
/fp:implement abc123
/fp:implement abc123 --max-iterations 5
/fp:implement my-session-id-here
```

### Invalid

```
/fp:implement                          # missing planId
/fp:implement --max-iterations 3       # missing planId (flag is not a planId)
```

## Codebase Context File

### Format

`.fractal-planner/plans/{planId}/context.md`:

```markdown
# Codebase Context

## Project Overview
[1-2 sentence description of what this project is]

## Tech Stack
- Language: [e.g. TypeScript]
- Runtime: [e.g. Bun]
- Build: [e.g. bun build + tsc]
- Test: [e.g. bun test / vitest]
- Package manager: [e.g. bun]

## Project Structure
[Key directories and their purpose, 5-10 lines max]

## Key Files
[Entry points, configs, shared types — the files you'd read first]

## Patterns & Conventions
[Naming, module structure, error handling, export style — what a new contributor needs to know]

## Build & Test Commands
[Exact commands to build, test, lint]
```

### Three-Tier Fallback

The implementation lead loads codebase context using this fallback chain:

1. **Tier 1 — Plan-time context file**: `fp:plan` Phase 1 produces `.fractal-planner/plans/{planId}/context.md` as a byproduct of research. If this file exists, use it directly.
2. **Tier 2 — Lead-generated context**: If the file doesn't exist (older plan or plan created before this feature), the lead generates it by reading `package.json`, scanning project structure, and identifying patterns. The result is written to `.fractal-planner/plans/{planId}/context.md` for reuse.
3. **Tier 3 — Self-discovery**: If both fail, `codebaseContext` is set to empty string and builder/verifier explore the codebase themselves (no injection).

The context is injected into:
- Builder spawn instructions (so it knows the tech stack, patterns, and conventions)
- Verifier spawn instructions (so it knows what patterns to check against)
- Each task message sent to the builder

## Communication Protocol Summary

### Standard Flow (without commits)

```
Team-Lead ──task──> Builder: single task with id, description, criteria
Builder ──impl──> Verifier: "Task {id} implementation complete. Ready for verification."
Verifier ──pass──> Team-Lead: "VERIFICATION PASSED\nTask: {id}\n{report}"
Verifier ──fail──> Builder: "VERIFICATION FAILED\nTask: {id}\n{failures}\nFix: {instructions}"
Builder ──fix──> Verifier: "Fixes applied for task {id}. Ready for re-verification."
(repeat up to max-iterations)
Verifier ──max-fail──> Team-Lead: "VERIFICATION FAILED after {n} iterations\nTask: {id}\n{report}"
Team-Lead ──ask──> User: "Task {id} failed. Continue or stop?"
```

### Extended Flow (with git commits)

```
Team-Lead ──task──> Builder: single task with id, description, criteria
Builder ──impl──> Verifier: "Task {id} complete. Ready for verification.\n\nFILES_MODIFIED:\n- /path/to/file1.ts\n- /path/to/file2.ts"
Verifier ──pass──> Team-Lead: "VERIFICATION PASSED\nTask: {id}\n{report}\n\nFILES_MODIFIED:\n- /path/to/file1.ts\n- /path/to/file2.ts"
Team-Lead ──task──> Committer: "Create commit for task {id} with files: ..."
Committer ──commit──> Team-Lead: "COMMIT COMPLETED\nTask: {id}\nHash: abc1234"
Team-Lead shuts down committer, builder, verifier
Team-Lead proceeds to next task
```

### FILES_MODIFIED Message Format

Builder completion message:
```
Task {id} implementation complete. Ready for verification.

FILES_MODIFIED:
- /absolute/path/to/file1.ts
- /absolute/path/to/file2.test.ts
- /absolute/path/to/component.tsx
```

Verifier pass message:
```
VERIFICATION PASSED
Task: {id}
Criteria: 3/3 passed
Details:
- [PASS] criterion 1 description
- [PASS] criterion 2 description
- [PASS] criterion 3 description

FILES_MODIFIED:
- /absolute/path/to/file1.ts
- /absolute/path/to/file2.test.ts
- /absolute/path/to/component.tsx
```

## Linear Integration

### Overview

When `linear.enabled` is `true` in `.fractal-planner/config.json`, the planning phase creates Linear issues mirroring the task tree, and the implementation phase updates issue statuses as work progresses.

### Mapping File Format

`.fractal-planner/plans/{planId}/linear-mapping.json`:

```json
{
  "planId": "session-id",
  "teamId": "team-uuid",
  "projectId": "project-uuid-or-null",
  "resolvedStatuses": {
    "pending": "status-uuid-1",
    "in-progress": "status-uuid-2",
    "completed": "status-uuid-3",
    "failed": "status-uuid-4"
  },
  "tasks": {
    "root": { "linearIssueId": "issue-uuid", "linearIdentifier": "TEAM-42" },
    "1":    { "linearIssueId": "issue-uuid", "linearIdentifier": "TEAM-43" },
    "1.1":  { "linearIssueId": "issue-uuid", "linearIdentifier": "TEAM-44" }
  }
}
```

This file is created during `fp:plan` Phase 2.5 and consumed during `fp:implement`. It is gitignored (under `.fractal-planner/`).

### Status Update Points

During implementation, the **team-lead** (not builder or verifier) updates Linear issues at these points:

| Event | Linear Status Update | Linear Comment |
|-------|---------------------|----------------|
| Task assigned to builder | `in-progress` | No |
| Verification passed | `completed` | Yes — brief pass summary |
| Task failed (max iterations) | `failed` | Yes — failure report |
| Task skipped (blocked dep) | (no change) | Yes — "Blocked by {dep}" |

After all leaf tasks are processed, parent issue statuses are rolled up bottom-to-top:
- All children completed → parent marked `completed`
- Any child in-progress → parent marked `in-progress`
- All children failed → parent marked `failed`

### Status Resolution Strategy

Statuses are resolved once during planning (Phase 2.5) and stored in the mapping file.

**When `statusMap` is configured**: Each name (e.g. `"Todo"`, `"In Progress"`) is matched against the team's available statuses by name. If a name doesn't match, it falls back to auto-detect for that status with a warning.

**When `statusMap` is NOT configured** (default): Auto-detect by Linear status **type**:
- `pending` → first status of type `backlog` (or `unstarted` if no backlog type exists)
- `in-progress` → first status of type `started`
- `completed` → first status of type `completed`
- `failed` → first status of type `canceled`

### Graceful Degradation

- If `linear.enabled` is `false` (default), zero Linear calls are made
- If Linear MCP server is unavailable, planning logs a warning and skips Linear sync — the plan still completes normally
- If `linearMapping` is `null` during implementation (no mapping file), all Linear updates are silently skipped
