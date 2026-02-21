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

## Native Task Format

### TaskCreate Fields

| Field | Value |
|-------|-------|
| `subject` | `[{planTaskId}] {description truncated to 80 chars}` |
| `description` | Full static builder payload (see template below) |
| `activeForm` | `Implementing [{planTaskId}]` |
| `addBlockedBy` | Array of native task IDs for plan-level dependencies (only those already in `taskMap`) |

The `owner` field is set by the builder itself during the claim step (TaskUpdate), using its own name (e.g., `builder-1`). This naming convention enables P3 tooling that reads `owner` from task JSON files.

### Structured Delegation Format

The `description` field of each native task holds a rigid 6-section builder payload. This format constrains builder behavior by making guardrails explicit and always present.

```markdown
## TASK
{one-sentence atomic goal from task.description}

## EXPECTED OUTCOME
1. {criterion from task.acceptanceCriteria}
2. {criterion from task.acceptanceCriteria}

## MUST DO
- {hint from task.metadata.hints}
- {reference from task.metadata.references, if any}

## MUST NOT DO
- Do NOT modify files outside: {task.metadata.filesToModify list}
- Do NOT add new dependencies
- Do NOT refactor existing code beyond the task scope
- {additional guardrail from task.metadata.guardrails}

## CONTEXT
- Files: {task.metadata.filesToModify}
- Tests Required: {task.metadata.testsRequired — yes/no}
- References: {task.metadata.references, or omit line if none}

## VERIFICATION
- Test Commands: {task.metadata.testCommands, or "none"}
- Evidence: .fractal-planner/plans/{planId}/evidence/task-{id}-verification.md
```

#### Section Construction Rules

| Section | Source Fields | Notes |
|---------|-------------|-------|
| TASK | `task.description` | One sentence only |
| EXPECTED OUTCOME | `task.acceptanceCriteria` | Numbered list |
| MUST DO | `task.metadata.hints` + `task.metadata.references` | References formatted as "Read {file}:{line} — {explanation}" |
| MUST NOT DO | Baseline guardrails + `task.metadata.guardrails` | 3 baseline items always present (see below), then task-specific |
| CONTEXT | `task.metadata.filesToModify`, `task.metadata.testsRequired`, `task.metadata.references` | Static context only |
| VERIFICATION | `task.metadata.testCommands`, `task.metadata.testsRequired` | Evidence file path included |

**Baseline guardrails** (always in MUST NOT DO, regardless of task metadata):
1. `Do NOT modify files outside: {filesToModify list}`
2. `Do NOT add new dependencies`
3. `Do NOT refactor existing code beyond the task scope`

Task-specific guardrails from `task.metadata.guardrails` are appended after these three.

**Note**: Dependencies are NOT included in the payload — they are handled by native `addBlockedBy` on TaskCreate.

Do NOT include dynamic content (notepad entries, codebase context) in the native task description. Codebase context is injected at builder spawn time; notepad entries are read by the builder per-task from `notepad.md`.

### TaskUpdate Status Patterns

| Scenario | `status` | `metadata` |
|----------|----------|------------|
| Task claimed by builder | `in_progress` | `{ owner: "builder-N" }` |
| Verification passed + committed | `completed` | `{ fpStatus: "COMPLETED", iterations: "n/max", commit: "hash", summary: "text" }` |
| Max iterations reached | `completed` | `{ fpStatus: "FAILED", iterations: "max/max", reason: "text" }` |
| Builder finished implementation | `in_progress` | `{ fpStatus: "AWAITING_VERIFICATION" }` |
| Verification failed, retry cycle | `in_progress` | `{ fpStatus: "IMPLEMENTING" }` |
| Blocked by failed dependency | `deleted` | `{ fpStatus: "SKIPPED", reason: "Blocked by {planTaskId}" }` |

**Why `completed` for FAILED?** Native statuses are `pending`, `in_progress`, `completed`, `deleted`. Marking a failed task `completed` causes the native system to auto-clear `blockedBy` on its dependents. The lead then immediately marks those dependents `deleted` (SKIPPED) before the next `TaskList()` call. `metadata.fpStatus` is the authoritative status for FAILED vs COMPLETED tasks.

**Why `deleted` for SKIPPED?** `deleted` tasks are invisible to `TaskList()`, preventing them from appearing as ready in future computations.

## Self-Claiming Protocol

### Overview

Builders are persistent teammates that run a self-claiming work loop. Instead of the lead computing waves and assigning tasks, builders call `TaskList()` themselves, claim available tasks via `TaskUpdate(owner)`, and read task payloads via `TaskGet()`. The lead shrinks to: spawn builders, handle verification, serialize commits, manage failures.

### Builder Naming Convention

Builders are named `builder-1` through `builder-N` (where N = `maxParallelTasks`). The builder name matches the `owner` value set in native task JSON — this is critical for the nudge mechanism (P3) where the TeammateIdle hook reads `owner` from task files.

### Claiming Rules

- **One task at a time**: A builder must complete (or be told to move on from) its current task before claiming the next.
- **Lowest ID first**: When multiple tasks are available, pick the one with the lowest native task ID.
- **Race handling**: If two builders claim the same task (last-write-wins on `TaskUpdate`), the lead detects duplicate `TASK_CLAIMED` messages and tells the second builder `TASK_ALREADY_CLAIMED`.

### Builder → Lead Messages

| Message | When | Payload |
|---------|------|---------|
| `TASK_CLAIMED: {planTaskId}` | After claiming via TaskUpdate | `Builder: {builderName}`, `NativeId: {nativeTaskId}` |
| `IMPLEMENTATION COMPLETE: {planTaskId}` | After finishing implementation | `FILES_MODIFIED:` list, optional `NOTEPAD_ENTRY:` |
| `CLARIFICATION NEEDED: {planTaskId}` | Iteration 1, before IMPLEMENTATION COMPLETE | `QUESTION:`, `OPTIONS:`, `HEADER:`, `MULTI_SELECT:` |
| `NO_MORE_TASKS: {builderName}` | When TaskList returns no claimable tasks | None |

### Lead → Builder Messages

| Message | When | Effect on Builder |
|---------|------|-------------------|
| `VERIFICATION PASSED: {planTaskId}` | After verifier passes | Builder loops to claim next task |
| `VERIFICATION FAILED: {planTaskId}` | After verifier fails, iterations remain | Builder fixes issues and re-sends IMPLEMENTATION COMPLETE |
| `MAX_ITERATIONS_REACHED: {planTaskId}` | After verifier fails, no iterations remain | Builder loops to claim next task |
| `CLARIFICATION ANSWER: {planTaskId}` | After user answers clarification | Builder continues implementation |
| `TASKS_AVAILABLE` | After commit unblocks new tasks | Idle builder resumes self-claiming loop |
| `TASK_ALREADY_CLAIMED: {planTaskId}` | Duplicate claim detected | Builder loops to claim a different task |

### TASK_CLAIMED Message Format

```
TASK_CLAIMED: {planTaskId}
Builder: {builderName}
NativeId: {nativeTaskId}
```

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
  },
  "iterationMap": {
    "T1.1": 3,
    "T1.2": 1
  },
  "clarificationsUsed": {
    "T1.1": true
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
| `iterationMap` | Map of plan task ID → current iteration number (updated incrementally) |
| `clarificationsUsed` | Map of plan task ID → boolean, tracks whether clarification was used (updated incrementally) |

### When Written vs. Updated

- **Written once**: After all `TaskCreate` calls complete on a fresh run (Step 4.0)
- **Updated incrementally**:
  - `skippedTasks` and `failureReasons` are updated in-place during Step 5.8 as tasks fail and their dependents are cascade-skipped
  - `iterationMap` is updated when a task is first claimed (Step 5.3) and after each failed verification iteration (Step 5.4)
  - `clarificationsUsed` is updated when a builder uses its clarification for a task (Step 5.5)

The file is the sole resume artifact. On resume, the lead reads `taskMap` to map plan task IDs to native task IDs, then calls `TaskList()` to get current statuses.

## Communication Protocol Summary

### Standard Flow (self-claiming with verification subagent)

```
Team-Lead creates team fp-impl-{planId}
Team-Lead calls TaskCreate for each leaf task (fresh run only) → writes execution-state.json
Team-Lead spawns Tracker
Team-Lead ──INIT──> Tracker (LINEAR_MAPPING only)
Tracker parses linearMapping into memory
Tracker ──TRACKER READY──> Team-Lead

Team-Lead spawns builder-1..builder-N (persistent)
Builder: TaskList() → finds pending task with empty blockedBy
Builder: TaskUpdate(taskId, in_progress, owner: "builder-N") → claims task
Builder: TaskGet(taskId) → reads full task spec
Builder ──TASK_CLAIMED: {id}──> Team-Lead
Team-Lead ──TASK_STARTED: {id}──> Tracker
Tracker ──ACK_STARTED: {id}──> Team-Lead
Builder implements → IMPLEMENTATION COMPLETE: {id} with FILES_MODIFIED
(Parallel mode: builder may SendMessage peer notifications to other builders — max 2 per task)
Team-Lead spawns Verifier subagent (Task tool):
  Reads modified files, runs tests, checks criteria
  Returns VERIFICATION PASSED or VERIFICATION FAILED
If PASSED:
  Team-Lead ──VERIFICATION PASSED: {id}──> Builder (loops to claim next)
  Team-Lead adds to commitQueue → processes commit
  Team-Lead ──task──> Committer → COMMIT COMPLETED
  TaskUpdate(nativeId, completed, fpStatus: "COMPLETED", commit: hash)
  Team-Lead ──TASK_COMPLETED: {id}──> Tracker
  Tracker ──ACK_COMPLETED: {id}──> Team-Lead
If FAILED (iterations remain):
  Team-Lead ──VERIFICATION FAILED: {id}──> Builder (retries in-place)
No tasks available:
  Builder ──NO_MORE_TASKS──> Team-Lead
  Later: commit unblocks tasks → Team-Lead ──TASKS_AVAILABLE──> idle Builder
All done → Step 6 (shutdown builders, tracker, delete team)
```

### Failure Flow

```
Builder retries exhaust all iterations without passing verification
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
Team-Lead ──MAX_ITERATIONS_REACHED: {id}──> Builder (loops to next task)
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
| Task claimed by builder | `in-progress` |
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
| `TASK_STARTED: {id}` | After builder claims task | None |
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

## Self-Claiming Execution Protocol

Builders self-organize via the native task list. The lead's role is verification, commits, failure handling, and tracker communication.

### Sequential Mode (maxParallelTasks = 1)

A single `builder-1` runs the self-claiming loop. Behavior is equivalent to the previous wave-of-1: tasks execute one at a time in dependency order. No race conditions possible.

### Parallel Mode (maxParallelTasks > 1)

N builders (`builder-1` through `builder-N`) claim tasks independently. The native `blockedBy` system ensures dependency ordering — builders can only see tasks whose dependencies are all completed. Multiple builders may work on independent tasks simultaneously. Builders may also send up to 2 peer notifications per task to coordinate shared interfaces and flag conflicts (see Peer Communication Protocol).

### Race Condition Handling

If two builders call `TaskUpdate(taskId, in_progress, owner)` on the same task, last-write-wins — both builders think they claimed it. The lead detects the race when it receives two `TASK_CLAIMED` messages for the same `planTaskId`:
1. First `TASK_CLAIMED` is accepted normally (recorded in `builderTaskMap`).
2. Second `TASK_CLAIMED` for the same `planTaskId` triggers: lead sends `TASK_ALREADY_CLAIMED: {planTaskId}` to the second builder.
3. The second builder loops back to `TaskList()` and claims a different task.

### Task Unblocking

After each commit in Step 5.7, the lead calls `TaskList()` to check for newly available tasks (status: "pending", blockedBy: []). If new tasks appear and idle builders exist:
- Lead picks an idle builder, moves it from `idleBuilders` to `activeBuilders`.
- Lead sends `TASKS_AVAILABLE` to wake the builder, which resumes its self-claiming loop.

### Commit Serialization

Unchanged from previous protocol — the `commitQueue` is processed one entry at a time in dependency order. Git index cannot handle parallel commits.

### Failure Handling

- Builder retries in-place when verification fails (no re-spawn).
- When max iterations reached: lead asks user Continue/Stop.
- If Continue: mark failed (TaskUpdate completed+FAILED), compute blocked dependents, mark deleted+SKIPPED for each. Send `MAX_ITERATIONS_REACHED` to builder — builder loops to next task.
- Other builders are unaffected and continue their self-claiming loops during failure handling.

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

Builders read `notepad.md` themselves as part of the self-claiming loop (Step 4.4, loop step 6). The relevance filter:
- Include an entry if: it's in the **last 10 entries** overall, OR the task that wrote it had overlapping `filesToModify` with the current task
- Cap at 10 entries per task to limit context growth

---

## Peer Communication Protocol

### Overview

When `maxParallelTasks > 1`, builders can send direct messages to peer builders via `SendMessage`. This enables real-time coordination during parallel work — sharing new interfaces, flagging conflicts, and propagating discoveries without waiting for the notepad cycle (which only propagates after commit).

Peer messages are **informational and one-way**. Builders do not wait for responses. The lead sees peer DM summaries in idle notifications automatically (built into agent teams framework).

In sequential mode (`maxParallelTasks = 1`), peer communication is disabled (`peerBuilderNames = "none"`).

### Message Format

```
PEER_NOTIFICATION
TYPE: {notification_type}
DETAILS:
  {1-3 lines describing what happened and what the peer should do}
```

Sent via: `SendMessage(type: "message", recipient: "{peer-builder-name}", content: "...", summary: "...")`

### Notification Types

| Type | When to Send | Example |
|------|-------------|---------|
| `INTERFACE_CREATED` | Created a new export/type/utility that a peer's task could consume | `Created validateInput(s: string): boolean at src/utils/validate.ts:10. Use this instead of inline validation.` |
| `PATTERN_FOUND` | Discovered a codebase convention or library quirk affecting a peer's work area | `This codebase uses zod v4 parse() not safeParse(). Your task touches the same validation layer.` |
| `CONFLICT_WARNING` | Detected overlapping file modifications or incompatible interface assumptions | `I'm modifying src/config.ts exports — your task also imports from it. I renamed loadConfig to loadConfigAsync.` |
| `FILE_MOVED` | Moved or renamed a file that a peer's task references | `Moved src/utils/helpers.ts to src/utils/string-helpers.ts. Your task references the old path.` |

### Budget Rules

- **2 messages max per task** — counter resets when claiming a new task
- Send to the **specific peer(s) affected**, not broadcast to all peers
- If unsure whether a peer is affected, don't send — false positives waste turns
- Each message consumes one tool call (one builder turn), so budget is self-limiting

### Receiving Protocol

Builders may receive `PEER_NOTIFICATION` messages at any point during their work:
1. Read the message content
2. If relevant to current task: adapt approach (e.g., reuse a newly created utility, adjust for a renamed import)
3. If not relevant: ignore and continue
4. **Never reply** to peer messages — they are one-way
5. **Never block** waiting for peer input

### Interaction with Notepad

Peer messages and notepad entries serve different timescales:
- **Peer messages**: real-time, within the current wave (reaches concurrent builders immediately)
- **Notepad entries**: post-commit, for future waves (reaches builders who claim tasks later)

If a discovery is useful for both current peers AND future tasks, do both:
1. Send a `PEER_NOTIFICATION` to affected concurrent peers
2. Include it as a `NOTEPAD_ENTRY` in your `IMPLEMENTATION COMPLETE` message

### When NOT to Send

- Discovery only matters for future tasks → use `NOTEPAD_ENTRY` only
- Not sure if peer is affected → skip (avoid false positives)
- Budget exhausted (2 messages sent for current task) → save it for `NOTEPAD_ENTRY`
- Sequential mode (`peerBuilderNames` is "none") → protocol is disabled
- Trivial changes that don't affect peers → skip

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
- On resume: evidence files from the previous session provide failure context for builders retrying tasks
- In `fp:status` output: evidence files are linked for FAILED tasks

---

## Handoff File Format

File: `.fractal-planner/plans/{planId}/handoff.md`

Generated by `/fp:handoff` to provide a dense context summary for session continuation. When a large plan exhausts the context window mid-implementation, the handoff file captures volatile state (discoveries, iteration counts, failure details) so the next `/fp:implement` session resumes with full context.

### When Generated

Run `/fp:handoff {planId}` after an implementation session ends (or is interrupted). Can be run multiple times — each run overwrites the previous handoff.

### How Consumed

During `/fp:implement` resume (Step 4.1):
1. Lead checks for `handoff.md` in the plan directory
2. If found, extracts "Key Discoveries" section → injected into builder spawn context (Step 5.1)
3. "Resume Notes" section → displayed to user
4. Structural resume still uses `execution-state.json` + `TaskList()` — handoff.md adds curated context only

### Format

```markdown
# Handoff: {planId}
Generated: {ISO timestamp}

## Progress
Completed: N/{total} | Failed: M | Skipped: S | Remaining: R

## Completed Tasks
- {planTaskId}: {description} | Iterations: n/max | Commit: {hash}

## Failed Tasks
- {planTaskId}: {description} | Iterations: max/max | Reason: {reason}

## Skipped Tasks
- {planTaskId}: {description} | Reason: Blocked by {depId}

## In Progress (Interrupted)
- {planTaskId}: {description} | Iteration: n/max | Owner: {builder}

## Pending Tasks
- {planTaskId}: {description} | Blocked by: {deps or "none (ready)"}

## Key Discoveries
{verbatim entries from notepad.md ## Entries section}

## Resume Notes
- Iteration counts and clarification state preserved in execution-state.json
- {task-specific warnings based on failure patterns, if any}
- {note if all tasks completed: "All tasks complete. No resume needed."}

## Resume Command
/fp:implement {planId}
```

### Section Rules

- Omit "Failed Tasks", "Skipped Tasks", "In Progress" sections when their count is zero
- Use description from `plan.md` lookup, not truncated subject from native task
- For IN_PROGRESS: include owner from task JSON metadata, iteration count from `iterationMap` in execution-state.json
- For FAILED: prefer evidence file reason, fall back to `failureReasons` in execution-state.json

### Relationship to Other Artifacts

| Artifact | Purpose | Handoff Interaction |
|----------|---------|---------------------|
| `execution-state.json` | Structural resume (taskMap, statuses, iterations) | Handoff reads; implement resumes from it |
| `progress.md` | Human-readable snapshot (written at end of implement) | Handoff is independent — may exist before progress.md |
| `notepad.md` | Builder discoveries during implementation | Handoff copies Key Discoveries from notepad entries |
| Native task files | Runtime task state | Handoff reads for classification; implement resumes via TaskList() |

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
- In parallel mode: clarification requests are processed one at a time (AskUserQuestion is sequential)

---

## Nudge Mechanism (P3)

### Overview

A `TeammateIdle` hook that detects stalled builders and re-injects continuation prompts.
Prevents builders from going permanently idle while still owning in-progress tasks.

### Hook Behavior

| Teammate | Hook behavior |
|----------|---------------|
| `builder-*` on `fp-impl-*` | Active -- scans tasks, may re-inject |
| `tracker` | Filtered out |
| `committer-*` | Filtered out |
| Non-fp-impl teams | Filtered out |

### State File

Location: `~/.claude/teams/{team_name}/nudge-{teammate_name}.json`

```json
{ "retries": 1, "lastRetryAt": "2026-02-20T12:00:00Z", "taskId": "5" }
```

Lifecycle:
- Created on first stall detection for a task
- Retries increment on subsequent stalls for the same task
- **Reset** when builder moves to a different task (taskId mismatch)
- **Deleted** when builder has no in_progress tasks (legitimate idle)
- **Deleted** when retries >= maxRetries (give up)

### Configuration

```json
{ "nudge": { "enabled": true, "maxRetries": 3 } }
```

### Verification Guard

The nudge hook reads `fpStatus` from task metadata to distinguish "stuck implementing" from "waiting for verification":

- **`fpStatus: "AWAITING_VERIFICATION"`** — Builder has sent `IMPLEMENTATION COMPLETE` and is waiting for the lead's verification response. The hook exits 0 (no nudge).
- **`fpStatus: "IMPLEMENTING"`** (or absent) — Builder is actively implementing. If idle, this is a genuine stall and the hook fires the continuation prompt.

Lifecycle:
1. Builder finishes implementation → sets `fpStatus: "AWAITING_VERIFICATION"` (TaskUpdate, step 9)
2. Builder sends `IMPLEMENTATION COMPLETE` (SendMessage, step 10)
3. Lead spawns verifier, gets result
4. If **VERIFICATION PASSED**: lead proceeds to commit (fpStatus becomes "COMPLETED" in Step 5.7)
5. If **VERIFICATION FAILED**: lead resets `fpStatus: "IMPLEMENTING"` (Step 5.4), then sends failure details to builder. This re-enables nudging if the builder stalls during the retry.

