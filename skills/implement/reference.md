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

The verification subagent produces structured verification reports:

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
3. **Tier 3 — Self-discovery**: If both fail, `codebaseContext` is set to empty string and builder explores the codebase itself (no injection).

The context is injected into:
- Builder spawn instructions (so it knows the tech stack, patterns, and conventions)
- Verification subagent prompt (so it knows what patterns to check against)
- Each task message sent to the builder

## Native Task Format

### TaskCreate Fields

| Field | Value |
|-------|-------|
| `subject` | `[{planTaskId}] {description truncated to 80 chars}` |
| `description` | Full static builder payload (see template below) |
| `activeForm` | `Implementing [{planTaskId}]` |
| `addBlockedBy` | Array of native task IDs for plan-level dependencies (only those already in `taskMap`) |

The `owner` field is set on `TaskUpdate` when assigning a task to a builder (Step 5.2), for forward-compatibility with P3 tooling that reads `owner` from task JSON files.

### Task Description Template

The `description` field of each native task holds the complete static builder payload:

```markdown
## Task {planTaskId}
{description}

### Acceptance Criteria
1. {criterion}
2. {criterion}

### Files to Modify
{list of files, or "Determine from context"}

### Tests Required
{yes | no}

### Test Commands
{commands, or omit section if none}

### Implementation Hints
{hints, or omit section if none}

### References
{file:line references, or omit section if none}

### MUST NOT DO
{guardrails, or omit section if none}

### Dependencies
{plan task IDs, or "none"}
```

Do NOT include dynamic content (notepad entries, codebase context) in the native task description — those are injected fresh at builder spawn time.

### TaskUpdate Status Patterns

| Scenario | `status` | `metadata` |
|----------|----------|------------|
| Task assigned to builder | `in_progress` | `{ owner: "builder-{planTaskId}" }` |
| Verification passed + committed | `completed` | `{ fpStatus: "COMPLETED", iterations: "n/max", commit: "hash", summary: "text" }` |
| Max iterations reached | `completed` | `{ fpStatus: "FAILED", iterations: "max/max", reason: "text" }` |
| Blocked by failed dependency | `deleted` | `{ fpStatus: "SKIPPED", reason: "Blocked by {planTaskId}" }` |

**Why `completed` for FAILED?** Native statuses are `pending`, `in_progress`, `completed`, `deleted`. Marking a failed task `completed` causes the native system to auto-clear `blockedBy` on its dependents. The lead then immediately marks those dependents `deleted` (SKIPPED) before the next `TaskList()` call. `metadata.fpStatus` is the authoritative status for FAILED vs COMPLETED tasks.

**Why `deleted` for SKIPPED?** `deleted` tasks are invisible to `TaskList()`, preventing them from appearing as ready in future wave computations.

## Execution State File

### Location

`.fractal-planner/plans/{planId}/execution-state.json`

### Format

```json
{
  "planId": "20260219-153000",
  "team": "fp-impl-20260219-153000",
  "taskMap": {
    "T1.1": "1",
    "T1.2": "2",
    "T2.1": "3"
  },
  "maxIterations": 3,
  "noCommit": false,
  "createdAt": "2026-02-19T15:30:00Z",
  "skippedTasks": {
    "T2.1": "Blocked by T1.1"
  },
  "failureReasons": {
    "T1.1": "Criterion 2 failed: catch block never triggered"
  }
}
```

### Field Descriptions

| Field | Description |
|-------|-------------|
| `planId` | Plan session ID |
| `team` | Native team name (`fp-impl-{planId}`) |
| `taskMap` | Maps plan task IDs to native task IDs returned by `TaskCreate` |
| `maxIterations` | Max builder iterations per task |
| `noCommit` | Whether `--no-commit` was passed |
| `createdAt` | ISO timestamp when the file was first written |
| `skippedTasks` | Map of plan task ID → skip reason (updated incrementally) |
| `failureReasons` | Map of plan task ID → failure reason (updated incrementally) |

### When Written vs. Updated

- **Written once**: After all `TaskCreate` calls complete on a fresh run (Step 4.0)
- **Updated incrementally**: `skippedTasks` and `failureReasons` are updated in-place during Steps 5.1 and 5.8 as tasks are skipped or fail

The file is the sole resume artifact. On resume, the lead reads `taskMap` to map plan task IDs to native task IDs, then calls `TaskList()` to get current statuses.

## Communication Protocol Summary

### Standard Flow (lead-driven with verification subagent)

```
Team-Lead creates team fp-impl-{planId}
Team-Lead calls TaskCreate for each leaf task (fresh run only) → writes execution-state.json
Team-Lead spawns Tracker
Team-Lead ──INIT──> Tracker (LINEAR_MAPPING only)
Tracker parses linearMapping into memory
Tracker ──TRACKER READY──> Team-Lead

Team-Lead calls TaskList() → computes ready wave
  For each task in wave:
    TaskUpdate(nativeId, in_progress, owner: "builder-{id}")
    TASK_STARTED: {id} → Tracker
    Tracker ──ACK_STARTED──> Team-Lead (+ Linear in-progress)
Team-Lead spawns fresh Builder
Team-Lead ──task payload──> Builder: single task with id, description, criteria
Builder implements → messages lead: IMPLEMENTATION COMPLETE with FILES_MODIFIED
Builder goes idle
Team-Lead spawns Verifier subagent (Task tool):
  Reads modified files, runs tests, checks criteria
  Returns VERIFICATION PASSED or VERIFICATION FAILED
If PASSED → proceed to commit
If FAILED → re-spawn fresh builder (up to maxIterations)
Team-Lead ──task──> Committer: "Create commit for task {id} with files: ..."
Committer ──commit──> Team-Lead: "COMMIT COMPLETED\nTask: {id}\nHash: abc1234"
TaskUpdate(nativeId, completed, fpStatus: "COMPLETED", commit: hash)
Team-Lead ──TASK_COMPLETED: {id}──> Tracker (+ Linear review/completed)
Tracker ──ACK_COMPLETED: {id}──> Team-Lead
Team-Lead adds task to completedTasks
Team-Lead shuts down builder, committer
  Loop back to TaskList() → next wave
When all tasks handled → Step 6 (Cleanup)
```

### Failure Flow

```
Builder exhausts iteration attempts without passing verification
Team-Lead ──ask──> User: "Task {id} failed. Continue or stop?"
TaskUpdate(nativeId, status: "completed", fpStatus: "FAILED")  ← auto-unblocks dependents
Update execution-state.json failureReasons
Team-Lead ──TASK_FAILED: {id}──> Tracker (+ Linear failed)
Tracker ──ACK_FAILED: {id}──> Team-Lead
Team-Lead computes blocked dependents from plan-level dependency graph
For each blocked dependent:
  TaskUpdate(depNativeId, status: "deleted", fpStatus: "SKIPPED")
  Update execution-state.json skippedTasks
  Team-Lead ──TASK_SKIPPED: {blocked_id}\nReason: Blocked by {id}──> Tracker
  Tracker ──ACK_SKIPPED: {blocked_id}──> Team-Lead
```

### FILES_MODIFIED Message Format

Builder completion message (sent to team-lead when implementation is done):
```
IMPLEMENTATION COMPLETE: {id}

FILES_MODIFIED:
- /absolute/path/to/file1.ts
- /absolute/path/to/file2.test.ts
- /absolute/path/to/component.tsx
```

Verifier pass report (returned by verification subagent to lead):
```
VERIFICATION PASSED
All {N} criteria met.
[1-2 sentence summary of what was verified]
```

Verifier failure report (returned by verification subagent to lead):
```
VERIFICATION FAILED
Failed:
- Criterion {N}: {text} — {specific failure reason and fix instruction}
Passed:
- Criterion {N}: {text}
Tests: {PASS/FAIL with relevant output}
Typecheck: {PASS/FAIL with errors if any}
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
    "failed": "status-uuid-4",
    "review": "status-uuid-5"
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

During implementation, the **tracker teammate** (not the team-lead or builder) updates Linear issues at these points:

| Event | Linear Status Update |
|-------|---------------------|
| Task assigned to builder | `in-progress` |
| Verification passed | `review` |
| Task failed (max iterations) | `failed` |
| Task skipped (blocked dep) | (no change) |

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
- `review` → first status with name matching "In Review" (case-insensitive); falls back to resolved `completed` UUID

### Graceful Degradation

- If `linear.enabled` is `false` (default), zero Linear calls are made
- If Linear MCP server is unavailable, planning logs a warning and skips Linear sync — the plan still completes normally
- If `linearMapping` is `null` during implementation (no mapping file), all Linear updates are silently skipped

## Progress Snapshot

`.fractal-planner/plans/{planId}/progress.md` is generated **once at the end of implementation** (Step 6) as a human-readable audit artifact. It is NOT a runtime artifact and is NOT read by any skill for execution state.

All runtime state lives in:
- The native task system (`~/.claude/tasks/fp-impl-{planId}/`)
- `execution-state.json` (resume artifact)

## Tracker Communication Protocol

The `fp-task-tracker` teammate handles Linear sync. The team lead communicates with it via structured text messages.

### Lead → Tracker

| Command | When | Payload |
|---------|------|---------|
| `INIT` | At spawn | `LINEAR_MAPPING:` section with JSON or `"null"` |
| `TASK_STARTED: {id}` | Before spawning builder | None |
| `TASK_COMPLETED: {id}` | After verification + commit | `Iterations: n/max`, `Commit: hash`, `Summary: text` |
| `TASK_FAILED: {id}` | After max iterations | `Iterations: n/max`, `Reason: text` |
| `TASK_SKIPPED: {id}` | Dep failed/skipped | `Reason: text` |
| `ROLLUP_PARENTS` | After all tasks | None |

### Tracker → Lead

| Response | Meaning |
|----------|---------|
| `TRACKER READY` | Init complete, includes `Linear: enabled/disabled` |
| `ACK_STARTED: {id}` | Linear updated to in-progress |
| `ACK_COMPLETED: {id}` | Linear updated to review/completed |
| `ACK_FAILED: {id}` | Linear updated to failed |
| `ACK_SKIPPED: {id}` | Acknowledged (no Linear update for skips) |
| `ROLLUP_COMPLETE` | Parent statuses rolled up in Linear |

### INIT Message Format

```
INIT
LINEAR_MAPPING:
{raw JSON content of linear-mapping.json, or the literal string "null"}
```

### Message Examples

**Lead reports completion:**
```
TASK_COMPLETED: 1.1
Iterations: 1/3
Commit: abc1234
Summary: JWT utility with sign/verify and full test coverage
```

**Tracker acknowledges:**
```
ACK_COMPLETED: 1.1
```

**Lead reports failure:**
```
TASK_FAILED: 1.3
Iterations: 3/3
Reason: Criterion 2 (error handling) consistently fails — catch block not triggered
```

**Tracker acknowledges:**
```
ACK_FAILED: 1.3
```

## Wave Execution Protocol

When `maxParallelTasks > 1`, tasks are grouped into waves for parallel execution.

### Wave Formation

A wave is computed dynamically at the start of each iteration via `TaskList()`:
- Call `TaskList()` → get all tasks in the team
- Ready tasks: those with `status == "pending"` and `blockedBy == []`
- Additional check: for each ready task, verify no plan-level dependency has `fpStatus: "FAILED"` or `status: "deleted"` (handles resume edge cases)
- Wave = ready tasks (up to `maxParallelTasks` count)

### Wave Execution Flow

```
Lead calls TaskList() → readyNative (pending, no blockedBy)
  → Detects any "falsely ready" tasks (dep was FAILED, auto-unblocked)
  → Marks those TaskUpdate(deleted, SKIPPED), sends TASK_SKIPPED to tracker
  → Forms currentWave = remaining readyNative[:maxParallelTasks]
Lead: TaskUpdate(in_progress, owner) + TASK_STARTED to tracker for each wave task
  → Waits for all ACK_STARTED responses
Lead spawns one builder per wave task (parallel Task spawns)
  → Sends task payload to each builder simultaneously
Lead waits for all IMPLEMENTATION COMPLETE messages
Lead spawns one verifier per completed builder (parallel Task spawns)
  → Each verifier writes evidence file + returns PASS/FAIL
Lead serializes commits (one at a time, in dependency order):
  → TaskUpdate(completed, COMPLETED) + TASK_COMPLETED to tracker
  → Spawns committer for first task → waits → ACK_COMPLETED
  → Spawns committer for next task → waits → ACK_COMPLETED
  → ...
Lead handles failures (max iterations reached) via AskUserQuestion
Lead loops back to TaskList() for next wave
```

### Sequential Mode (maxParallelTasks = 1)

When `maxParallelTasks = 1` (the default), wave execution degenerates to sequential: each wave has exactly one task, producing identical behavior to the original single-task loop.

### Wave Failure Handling

- If any task in a wave fails verification and exhausts iterations: ask user Continue/Stop
- If Continue: mark failed (TaskUpdate completed+FAILED), compute blocked dependents, mark deleted+SKIPPED for each
- Commits for OTHER passed tasks in the same wave: still committed normally

---

## Cross-Task Notepad

File: `.fractal-planner/plans/{planId}/notepad.md`

Builders can contribute discoveries via an optional `NOTEPAD_ENTRY` section in their `IMPLEMENTATION COMPLETE` message.

### Builder Message Format (with notepad entry)

```
IMPLEMENTATION COMPLETE: {id}

FILES_MODIFIED:
- /abs/path/to/file.ts

NOTEPAD_ENTRY:
- PATTERN: SecureHash from src/utils/crypto.ts — use instead of raw Buffer
- GOTCHA: jsonwebtoken v9 requires explicit algorithm in verify() or throws
- UTIL: src/utils/validate.ts:45 — input validation helper already exists
```

`NOTEPAD_ENTRY` is optional. Builders should include it only when they discover something genuinely useful to future tasks.

### Entry Types

- `PATTERN`: A useful code pattern or utility found in the codebase
- `GOTCHA`: A non-obvious constraint or library behavior that caused issues
- `UTIL`: An existing utility or helper that future builders should reuse
- `WARN`: A risky area or fragile code that future builders should be careful around

### Notepad.md Format

```markdown
# Implementation Notepad

Plan: {planId}
Started: {ISO timestamp}

## Entries (most recent last)
- [Task 1.1] PATTERN: SecureHash from src/utils/crypto.ts — use instead of raw Buffer
- [Task 1.1] GOTCHA: jsonwebtoken v9 requires explicit algorithm in verify() or throws
- [Task 1.2] UTIL: src/utils/validate.ts:45 — input validation helper already exists
```

### Injection Rules

The lead injects notepad entries into builder payloads using this filter:
- Include an entry if: it's in the **last 10 entries** overall, OR the task that wrote it had overlapping `filesToModify` with the current task
- Inject as a `## Shared Notepad` section prepended before the task spec
- Cap at 10 entries per builder to limit prompt growth

---

## Evidence File Format

File: `.fractal-planner/plans/{planId}/evidence/task-{id}-verification.md`

Written by the verifier subagent after each verification pass. Used by the lead to extract PASS/FAIL (more robust than parsing agent messages), and by `fp:status` for reporting.

### Format

```markdown
# Verification Evidence: Task {id}

Result: PASS | FAIL
Timestamp: {ISO timestamp}
Task: {description}

## Criteria Results
| # | Criterion | Result | Evidence |
|---|-----------|--------|---------|
| 1 | {text} | PASS/FAIL | {code snippet, "met", or specific failure reason} |
| 2 | {text} | PASS/FAIL | {code snippet, "met", or specific failure reason} |

## Test Output
```
{test command output or "Tests not required"}
```

## Typecheck Output
```
{typecheck output or "No tsconfig.json found"}
```

## Files Reviewed
- /absolute/path/to/reviewed/file.ts

## Summary
{1-2 sentence summary of the verification result}
```

### Lead Behavior with Evidence Files

- Lead reads the evidence file (not just the agent message) to extract `Result: PASS | FAIL`
- On resume: evidence files from the previous session provide failure context for re-spawned builders
- In `fp:status` output: evidence files are linked for FAILED tasks

---

## Builder Clarification Protocol

Builders may request one clarification per task, on iteration 1 only. This allows builders to surface genuine ambiguities without wasting a full iteration on a wrong assumption.

### CLARIFICATION NEEDED Format

```
CLARIFICATION NEEDED: {id}

QUESTION:
{clear, specific question about the task — one question only}

OPTIONS:
- {option 1 label} | {option 1 description}
- {option 2 label} | {option 2 description}
- {option 3 label} | {option 3 description}

HEADER: {12 chars max}
MULTI_SELECT: false
```

### Lead Response Protocol

1. Intercept `CLARIFICATION NEEDED` message from builder
2. Verify this is iteration 1 (tracked in `clarificationsUsed` map). If `clarificationsUsed[taskId]` is already true OR iteration > 1:
   - Reject: `SendMessage(recipient: builder, "Clarification only allowed on iteration 1. Proceed with task spec only.")`
3. If valid: parse the message, call `AskUserQuestion` with the question
4. Mark `clarificationsUsed[taskId] = true`
5. Forward answer to builder:
   ```
   CLARIFICATION ANSWER: {id}
   User selected: "{option}"
   Context: {additional text if any}
   ```
6. Builder continues implementation with the answer

### Budget Enforcement

- 1 clarification maximum per task, iteration 1 only
- Subsequent iterations: lead rejects with "Proceed with failure report and task spec only"
- In wave mode: clarification requests are processed one at a time (AskUserQuestion is sequential)
