---
name: fp:handoff
description: Generate a session handoff summary for clean context continuation during large implementations
argument-hint: <plan-session-id>
allowed-tools: Read, Glob, Bash, Write
---

# Fractal Planner: Session Handoff

You are generating a handoff summary for a fractal-planner implementation plan. This captures volatile state (discoveries, iteration counts, failure details) so the next `/fp:implement` session resumes with full context.

## Step 1: Parse Arguments

Parse `$ARGUMENTS` to extract `planId` (the first positional argument).

If no `planId` is provided, report the error and stop:
> "Usage: `/fp:handoff <plan-session-id>`"

## Step 2: Validate Prerequisites

Check `.fractal-planner/plans/{planId}/` has both:
1. `plan.md`
2. `execution-state.json`

If either is missing, report the error and stop:
> "Plan '{planId}' is missing required files. Both `plan.md` and `execution-state.json` must exist. Run `/fp:plan` and `/fp:implement` first."

## Step 3: Load Execution State

Read `.fractal-planner/plans/{planId}/execution-state.json`. Extract:
- `taskMap` — object mapping plan task IDs to native task IDs
- `skippedTasks` — object mapping plan task IDs to skip reasons
- `failureReasons` — object mapping plan task IDs to failure reasons
- `iterationMap` — object mapping plan task IDs to iteration numbers (default `{}` if absent)
- `clarificationsUsed` — object mapping plan task IDs to booleans (default `{}` if absent)
- `maxIterations`

## Step 4: Read Native Task Files

Use Glob to find task files:
```
Glob("~/.claude/tasks/fp-impl-{planId}/*.json")
```

For each file found, read and extract:
- `id` — native task ID
- `subject` — contains `[{planTaskId}] {description}` — extract planTaskId from the `[...]` prefix
- `status` — `pending`, `in_progress`, `completed`, or `deleted`
- `metadata` — object with `fpStatus`, `iterations`, `commit`, `summary`, `reason`, `owner` fields
- `blockedBy` — array of blocking native task IDs

Build `statusMap` keyed by planTaskId:
```
statusMap[planTaskId] = {
  nativeId, status, fpStatus, iterations, commit, summary, reason, owner, blockedBy
}
```

**Fallback**: If the `~/.claude/tasks/fp-impl-{planId}/` directory does not exist or is empty:
- Classify all `taskMap` entries not in `skippedTasks`/`failureReasons` as PENDING
- Note "Native task files unavailable — using execution-state.json data only" in the output

## Step 5: Active Session Detection

Check if `~/.claude/teams/fp-impl-{planId}/config.json` exists:
```bash
ls ~/.claude/teams/fp-impl-{planId}/config.json 2>/dev/null
```

If it exists AND any native task has `status: "in_progress"`, display warning:
> "An implementation session may still be active. Stop it before generating a handoff."

Proceed regardless (the warning is informational).

## Step 6: Load Plan Descriptions

Read `.fractal-planner/plans/{planId}/plan.md`.

Build a `planTaskId -> description` map from the Execution Order section. Each entry in the execution order has the format:
```
N. [Task {id}]: {description}
```

Extract the full description for each task ID. If a task ID is not found in plan.md, fall back to the subject from the native task file.

## Step 7: Read Artifacts

Read the following if they exist:
- `.fractal-planner/plans/{planId}/notepad.md` — for Key Discoveries (extract the `## Entries` section content)
- For FAILED tasks only: read `.fractal-planner/plans/{planId}/evidence/task-{planTaskId}-verification.md` to extract the failure reason from the `## Summary` section
- Note whether `.fractal-planner/plans/{planId}/context.md` exists (informational)

## Step 8: Classify Tasks

For each plan task ID in `taskMap`, classify using the same table as `fp:status`:

| Condition | Classification |
|-----------|---------------|
| In `skippedTasks` AND (`status == "deleted"` OR native file absent) | **SKIPPED** |
| `status == "completed"` AND `fpStatus == "FAILED"` | **FAILED** |
| `status == "completed"` AND (`fpStatus == "COMPLETED"` OR fpStatus absent) | **COMPLETED** |
| `status == "in_progress"` | **IN_PROGRESS** |
| `status == "pending"` | **PENDING** |
| `status == "deleted"` AND `fpStatus == "SKIPPED"` | **SKIPPED** |
| Native file not found AND not in `skippedTasks` | **PENDING** |

Count each: `completed`, `failed`, `skipped`, `inProgress`, `pending`.
`total` = number of keys in `taskMap`.
`remaining` = `inProgress` + `pending`.

## Step 9: Generate handoff.md

Write `.fractal-planner/plans/{planId}/handoff.md` with this structure:

```markdown
# Handoff: {planId}
Generated: {ISO timestamp}

## Progress
Completed: {completed}/{total} | Failed: {failed} | Skipped: {skipped} | Remaining: {remaining}

## Completed Tasks
- {planTaskId}: {description} | Iterations: {n}/{maxIterations} | Commit: {hash}

## Failed Tasks
- {planTaskId}: {description} | Iterations: {maxIterations}/{maxIterations} | Reason: {reason}

## Skipped Tasks
- {planTaskId}: {description} | Reason: {skipReason}

## In Progress (Interrupted)
- {planTaskId}: {description} | Iteration: {n}/{maxIterations} | Owner: {builder}

## Pending Tasks
- {planTaskId}: {description} | Blocked by: {deps or "none (ready)"}

## Key Discoveries
{verbatim entries from notepad.md ## Entries section, or "No discoveries recorded."}

## Resume Notes
- Iteration counts and clarification state preserved in execution-state.json
{- task-specific warnings based on failure patterns, if any}
{- "All tasks complete. No resume needed." if completed == total}

## Resume Command
/fp:implement {planId}
```

**Rules:**
- Omit "Failed Tasks" section entirely when `failed == 0`
- Omit "Skipped Tasks" section entirely when `skipped == 0`
- Omit "In Progress (Interrupted)" section entirely when `inProgress == 0`
- Use description from `plan.md` lookup, not truncated subject from native task
- For COMPLETED: get iterations from `iterationMap[planTaskId]` (fall back to metadata.iterations), commit from metadata.commit
- For IN_PROGRESS: include owner from task metadata, iteration from `iterationMap[planTaskId]` (default 1)
- For FAILED: prefer evidence file reason (from Step 7), fall back to `failureReasons[planTaskId]` in execution-state.json
- For PENDING: list dependencies that are not yet completed. If all dependencies are completed (or task has none), show "none (ready)"

## Step 10: Display Summary

Present a summary to the user:

```
## Handoff Generated: {planId}

**Progress**: [{████████░░░░░░░░░░░░}] {completed}/{total} tasks ({pct}%)

| Status       | Count |
|--------------|-------|
| Completed    | {N}   |
| Failed       | {N}   |
| Skipped      | {N}   |
| In Progress  | {N}   |
| Pending      | {N}   |

Handoff written to: `.fractal-planner/plans/{planId}/handoff.md`

Resume with: `/fp:implement {planId}`
```

Build the 20-character progress bar:
- Filled blocks (`█`): `floor(completed / total * 20)` chars
- Empty blocks (`░`): remainder

If all tasks are completed, replace the resume line with:
> "All tasks complete. No resume needed."

## Important

- This skill is **read-only** except for writing `handoff.md` — it does not modify execution-state.json or native task files
- Primary source of truth: native task JSON files at `~/.claude/tasks/fp-impl-{planId}/`
- Secondary source of truth: `execution-state.json` (for `taskMap`, `skippedTasks`, `failureReasons`, `iterationMap`, `clarificationsUsed`)
- Mirrors `fp:status` patterns for task classification, fallback behavior, and progress display
- Multiple handoff runs overwrite `handoff.md` — the latest state is most accurate
- Pre-P7 execution-state.json files (without `iterationMap`/`clarificationsUsed`) are handled gracefully via `{}` defaults
