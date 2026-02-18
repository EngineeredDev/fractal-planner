---
name: fp:status
description: Read-only status reporter for fractal-planner implementation plans. Shows progress bar, per-task status table, and links to evidence files. Reads native task JSON files directly.
argument-hint: <plan-session-id>
allowed-tools: Read, Glob, Bash
---

# Fractal Planner: Plan Status

You are generating a read-only status report for a fractal-planner implementation plan.

## Step 1: Parse Arguments

Parse `$ARGUMENTS` to extract `planId` (the first positional argument).

If no `planId` is provided, report the error and stop:
> "Usage: `/fp:status <plan-session-id>`"

## Step 2: Load Execution State & Native Task Files

### 2.1: Read Execution State

Read `.fractal-planner/plans/{planId}/execution-state.json`.

If missing, report the error and stop:
> "Plan '{planId}' has no execution state. Run `/fp:implement {planId}` first to start implementation."

Parse:
- `taskMap` — object mapping plan task IDs to native task IDs (e.g., `{ "1.1": "3", "2.1": "5" }`)
- `skippedTasks` — object mapping plan task IDs to skip reasons
- `failureReasons` — object mapping plan task IDs to failure reasons
- `maxIterations`, `planId`, `team`

Also read `plan.md` for task descriptions (used in the task table):
Read `.fractal-planner/plans/{planId}/plan.md`. If missing, use task IDs as descriptions.

### 2.2: Read Native Task JSON Files

The native task JSON files are stored at `~/.claude/tasks/fp-impl-{planId}/`.

Use Glob to find all task files:
```
Glob("~/.claude/tasks/fp-impl-{planId}/*.json")
```

For each file found, read it and parse:
- `id` — native task ID
- `subject` — contains `[{planTaskId}] {description}` — extract planTaskId from the `[...]` prefix
- `status` — `pending`, `in_progress`, `completed`, or `deleted`
- `metadata` — object with `fpStatus`, `iterations`, `commit`, `summary`, `reason` fields
- `blockedBy` — array of blocking native task IDs (empty if unblocked)

Build a `statusMap` keyed by plan task ID:
```
statusMap[planTaskId] = {
  nativeId,
  status,           // native status
  fpStatus,         // metadata.fpStatus (COMPLETED | FAILED | SKIPPED | absent)
  iterations,       // metadata.iterations (e.g. "1/3")
  commit,           // metadata.commit
  summary,          // metadata.summary
  reason,           // metadata.reason (for FAILED) or skippedTasks[planTaskId] (for SKIPPED)
  blockedBy         // array of native IDs still blocking this task
}
```

If the `~/.claude/tasks/fp-impl-{planId}/` directory does not exist or is empty:
- Fallback: use only `execution-state.json` data
- Mark all tasks in `taskMap` as PENDING (the team may still be initializing, or files are unavailable)

### 2.3: Scan for Evidence Files

```bash
ls .fractal-planner/plans/{planId}/evidence/ 2>/dev/null
```

Collect evidence file names for later display.

## Step 3: Classify Tasks & Compute Statistics

For each plan task ID in `taskMap`, classify its status:

| Condition | Classification |
|-----------|---------------|
| In `skippedTasks` AND (`status == "deleted"` OR native file absent) | **SKIPPED** |
| `status == "completed"` AND `fpStatus == "FAILED"` | **FAILED** |
| `status == "completed"` AND (`fpStatus == "COMPLETED"` OR fpStatus absent) | **COMPLETED** |
| `status == "in_progress"` | **IN_PROGRESS** |
| `status == "pending"` | **PENDING** |
| `status == "deleted"` AND `fpStatus == "SKIPPED"` | **SKIPPED** |
| Native file not found AND not in `skippedTasks` | **PENDING** (not yet created or team initializing) |

Count each classification:
- `total` = number of keys in `taskMap`
- `completed` = count of COMPLETED
- `inProgress` = count of IN_PROGRESS
- `pending` = count of PENDING
- `failed` = count of FAILED
- `skipped` = count of SKIPPED

Compute progress percentage: `floor((completed / total) * 100)`

Build a 20-character progress bar using block characters:
- Filled blocks (`█`): `floor(completed / total * 20)` chars
- Empty blocks (`░`): remainder

## Step 4: Render Status Report

Present the following formatted report:

```
## Plan Status: {planId}

**Progress**: [{████████░░░░░░░░░░░░}] {completed}/{total} tasks ({pct}%)

### Summary
| Status      | Count |
|-------------|-------|
| ✅ Completed | {N}  |
| 🔄 In Progress | {N} |
| ⏳ Pending   | {N}  |
| ❌ Failed    | {N}  |
| ⏭️ Skipped   | {N}  |

### Task Table
| # | ID | Description | Status | Iterations | Commit | Notes |
|---|-----|-------------|--------|------------|--------|-------|
{one row per task in taskMap order, using statusMap data}
```

Row format:
- `#` — sequential number
- `ID` — plan task ID
- `Description` — from plan.md or `[{planTaskId}] {subject}` if plan.md unavailable
- `Status` — COMPLETED / IN_PROGRESS / PENDING / FAILED / SKIPPED
- `Iterations` — `metadata.iterations` or `-` if not started
- `Commit` — `metadata.commit` (short hash) or `-`
- `Notes` — `metadata.summary` for COMPLETED, `metadata.reason` for FAILED, `skippedTasks[id]` for SKIPPED, blank otherwise

If there are FAILED tasks, add a section:

```
### Failed Tasks
{For each FAILED task:}
- **[{id}]** {description}
  - Iterations used: {iterations}
  - Reason: {reason from metadata or failureReasons}
  - Evidence: `.fractal-planner/plans/{planId}/evidence/task-{id}-verification.md` {(exists) or (not found)}
```

If evidence files were found, add a section:

```
### Evidence Files
{For each evidence file found, read it and extract the Result line:}
- `task-{id}-verification.md`: {PASS | FAIL} — {1-line summary from evidence file}
```

## Step 5: Show Next Steps

After the report, show contextual next steps:

- If all tasks are COMPLETED:
  > "All {N} tasks complete. Implementation finished."
- If any IN_PROGRESS tasks exist:
  > "Implementation session is active. A `/fp:implement` session may be running."
- If PENDING tasks remain and no IN_PROGRESS tasks:
  > "Run `/fp:implement {planId}` to continue implementation."
- If FAILED tasks exist:
  > "To retry a failed task: `/fp:retry {planId} {taskId}`"
  > "To resume full implementation (if all deps are met): `/fp:implement {planId}`"
- If SKIPPED tasks exist (and some FAILED tasks exist):
  > "Note: {N} tasks were skipped due to failed dependencies. Use `/fp:retry` to fix failed tasks, then start a new plan to implement the skipped downstream tasks."

## Important

- This skill is **read-only** — it does not modify any files
- Primary source of truth: native task JSON files at `~/.claude/tasks/fp-impl-{planId}/`
- Secondary source of truth: `execution-state.json` (for `skippedTasks`, `failureReasons`, and `taskMap`)
- `progress.md` (if it exists) is a human-readable snapshot from the end of the last `fp:implement` run — do NOT use it as a status source
- If task JSON files are unavailable (team not yet initialized or already deleted), fall back to `execution-state.json` data only
- Present the report in a clean, scannable format — users run this to get a quick health check
