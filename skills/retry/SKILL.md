---
name: fp:retry
description: Retry a single failed task from a fractal-planner plan. Spawns a fresh builder → verifier → committer cycle for the specified task and updates execution-state.json on success.
argument-hint: <plan-session-id> <task-id> [--max-iterations N]
allowed-tools: AskUserQuestion, Read, Write, Edit, Bash, Task, Glob, Grep, mcp__linear-server__update_issue
---

# Fractal Planner: Task Retry

You are retrying a single failed task from a fractal-planner implementation plan. You spawn a fresh builder → verifier → committer cycle and update `execution-state.json` (and Linear) on success.

## Step 1: Parse Arguments

Parse `$ARGUMENTS` to extract:
- `planId` — first positional argument (required)
- `taskId` — second positional argument (required)
- `--max-iterations N` — optional, defaults to 3

Usage examples:
- `/fp:retry abc123 1.2`
- `/fp:retry abc123 1.2 --max-iterations 5`

If `planId` or `taskId` is missing, report the error and stop:
> "Usage: `/fp:retry <plan-session-id> <task-id> [--max-iterations N]`"

## Step 2: Load Plan & Validate Preconditions

Read from `.fractal-planner/plans/{planId}/`:
1. `plan.md` — execution order and acceptance criteria (REQUIRED)
2. `tasks.md` — full task tree with hints and metadata (REQUIRED)
3. `execution-state.json` — resume artifact with task map and status (REQUIRED)

If any required file is missing, report the error and stop:
> "Plan '{planId}' not found or implementation not yet started. Run `/fp:plan` then `/fp:implement {planId}` first."

Parse `execution-state.json`:
- Extract `taskMap` — object mapping plan task IDs to native task IDs
- Extract `failureReasons` — object mapping plan task IDs to failure reasons
- Extract `skippedTasks`

**Validate task exists in taskMap:**

If `taskId` is NOT a key in `taskMap`, stop:
> "Task {taskId} not found in execution state. Valid task IDs: {comma-separated taskMap keys}"

Get `nativeId = taskMap[taskId]`.

**Read native task file to validate FAILED status:**

Read `~/.claude/tasks/fp-impl-{planId}/{nativeId}.json`.

If the file does not exist, stop:
> "Native task file not found for {taskId}. The implementation team may have been deleted."

Parse the JSON and check:
- If `status != "completed"` OR `metadata.fpStatus != "FAILED"`:
  > "Task {taskId} is not in FAILED state (current status: {status}, fpStatus: {metadata.fpStatus or 'none'}). Only FAILED tasks can be retried."

**Validate dependencies are completed:**

Find task `{taskId}` in `plan.md` to get its dependencies. For each dependency `depId`:
- Get `depNativeId = taskMap[depId]`
- Read `~/.claude/tasks/fp-impl-{planId}/{depNativeId}.json`
- If `status != "completed"` OR `metadata.fpStatus != "COMPLETED"`:
  > "Cannot retry task {taskId}: dependency {depId} is not COMPLETED (status: {status}, fpStatus: {metadata.fpStatus or 'none'}). Complete or fix dependencies first."

## Step 3: Load Task Context

From `tasks.md` and `plan.md`, extract for task `{taskId}`:
- Description
- Acceptance criteria (numbered list)
- Implementation hints
- References (file:line pairs)
- Files to modify
- Tests required flag
- Test commands

**Load codebase context** (same three-tier fallback as fp:implement):
1. Try `.fractal-planner/plans/{planId}/context.md`
2. If not found, generate it by reading `package.json`, scanning project structure, identifying patterns
3. If both fail, set codebaseContext to empty string

**Check for previous evidence**:
Read `.fractal-planner/plans/{planId}/evidence/task-{taskId}-verification.md` if it exists. Extract the failure details to inject into the builder's context.

## Step 4: Execute Retry Loop

Initialize `iteration = 1`.

Display to user:
```
Retrying task {taskId}: {description}
Max iterations: {maxIterations}
Previous failure evidence: {found / not found}
Previous failure reason: {failureReasons[taskId] or "not recorded"}
```

### 4.1: Spawn Builder

Spawn a fresh builder as a subagent via the Task tool:

```
Task(
  subagent_type: "general-purpose",
  description: "Implement task {taskId}",
  prompt: "You are a builder agent implementing a single task.

{codebaseContext}

{If iteration > 1 or previous evidence exists:}
PREVIOUS ATTEMPT FAILED.
Failure details:
{previousFailureDetails or evidence file contents}

Review the existing code and fix all issues listed.

---

Implement task {taskId}:
Description: {description}

Acceptance Criteria:
{numbered criteria}

Implementation Hints:
{hints, or omit section if empty}

References:
{file:line refs, or omit section if empty}

Files to Modify: {list or 'determine from context'}
Tests Required: {yes/no}
Test Commands: {commands or omit if empty}

MUST NOT DO:
{guardrails, or omit section if empty}

RULES:
- Implement with REAL code only. No stubs, placeholders, or TODOs.
- If testsRequired is true, write tests.
- Follow existing codebase patterns.
- Track ALL files you create or modify.

When done, output EXACTLY this format:
IMPLEMENTATION COMPLETE: {taskId}

FILES_MODIFIED:
- /absolute/path/to/file1
- /absolute/path/to/file2"
)
```

Wait for the builder subagent to complete. Extract `FILES_MODIFIED` from its output.

If the builder's output does not contain `IMPLEMENTATION COMPLETE`, treat it as a failure and proceed to 4.3 (failure handling) with the builder output as the error.

### 4.2: Verify Implementation

Spawn a verification subagent:

```
Task(
  subagent_type: "general-purpose",
  description: "Verify task {taskId}",
  prompt: "You are a verification agent for a fractal-planner retry.

Task ID: {taskId}
Description: {description}

Acceptance Criteria:
{numbered criteria}

Files Modified by Builder:
{FILES_MODIFIED list}

Test Commands: {commands or 'none'}
Tests Required: {yes/no}

{codebaseContext}

Instructions:
1. Read each modified file listed above.
2. For each acceptance criterion, verify it is met by the code.
3. If tests are required, run the test commands via Bash.
4. Run: bun run typecheck (if tsconfig.json exists in the project root).
5. Write your evidence to: .fractal-planner/plans/{planId}/evidence/task-{taskId}-verification.md

Evidence file format:
---
# Verification Evidence: Task {taskId}

Result: PASS | FAIL
Timestamp: {ISO timestamp}
Task: {description}

## Criteria Results
| # | Criterion | Result | Evidence |
|---|-----------|--------|---------|
| 1 | {text} | PASS/FAIL | {snippet} |

## Test Output
\`\`\`
{test output or 'Tests not required'}
\`\`\`

## Typecheck Output
\`\`\`
{typecheck output or 'No tsconfig.json found'}
\`\`\`

## Files Reviewed
- {absolute file path}

## Summary
{1-2 sentence summary}
---

6. After writing the evidence file, output EXACTLY:
If ALL criteria pass: VERIFICATION PASSED
If ANY check fails:
VERIFICATION FAILED
Failed:
- Criterion {N}: {text} — {reason and fix instruction}
Passed:
- Criterion {N}: {text}
Tests: {PASS/FAIL with relevant output}
Typecheck: {PASS/FAIL with errors if any}"
)
```

### 4.3: Handle Verification Result

**If VERIFICATION PASSED:**
1. Proceed to Step 5 (commit + update state).

**If VERIFICATION FAILED:**
1. Store the failure report as `previousFailureDetails`.
2. Increment `iteration`.
3. If `iteration > maxIterations`:
   - Display to user: "Task {taskId} still fails after {maxIterations} iterations."
   - Show the last `VERIFICATION FAILED` report.
   - Suggest: "Check evidence at `.fractal-planner/plans/{planId}/evidence/task-{taskId}-verification.md`"
   - Stop.
4. Else: loop back to Step 4.1 (fresh builder with failure context).

## Step 5: Commit

Spawn a committer subagent:

```
Task(
  subagent_type: "general-purpose",
  description: "Commit task {taskId} changes",
  prompt: "You are a git commit specialist.

Follow the fp:commit skill instructions to create ONE git commit.

TASK CONTEXT:
- Task ID: {taskId}
- Description: {description}

FILES_MODIFIED:
{paste the file list}

INSTRUCTIONS:
1. Detect commit style from git log (SEMANTIC|PLAIN|SHORT)
2. Detect language (Korean|English)
3. Stage only these specific files
4. Create ONE commit with message based on task description
5. Output EXACTLY:
COMMIT COMPLETED
Hash: {short hash}
Message: {commit message}
OR: COMMIT FAILED
Error: {error message}"
)
```

Extract commit hash from committer output. If commit fails, use `AskUserQuestion`:
- "Git commit failed for task {taskId}. How should we proceed?"
- Options: "Continue without committing" / "Stop"
- If "Stop", report failure and stop.

## Step 6: Update Execution State & Linear

**Update native task status:**

The native task system has no live team context during `fp:retry` (the team was deleted after `fp:implement`). Update `execution-state.json` directly instead of calling `TaskUpdate`:

1. Read `.fractal-planner/plans/{planId}/execution-state.json`
2. Remove `{taskId}` from `failureReasons` (it is no longer failed)
3. Write the updated JSON back

**Note on native task file**: The task JSON at `~/.claude/tasks/fp-impl-{planId}/{nativeId}.json` reflects the old FAILED status, but since the team is deleted, `TaskUpdate` is not available. The `execution-state.json` is the authoritative resume artifact for `fp:implement` resumes; `fp:status` reads both files and should prefer `execution-state.json` for retry-updated tasks.

**Update Linear (if mapping exists):**

Check for `.fractal-planner/plans/{planId}/linear-mapping.json`. If it exists:
1. Read it to find the Linear issue ID for task `{taskId}`
2. Find the resolved status ID for "review" (or "completed" as fallback)
3. Call `mcp__linear-server__update_issue` with the resolved status
4. If the call fails, log a warning but do NOT stop

## Step 7: Report & Next Steps

```
## Retry Result: {planId} / {taskId}

**Status**: PASSED ✅
**Iterations**: {iteration}/{maxIterations}
**Commit**: {hash or "none (commit failed or skipped)"}

Task {taskId} ({description}) has been completed.
Execution state updated: `.fractal-planner/plans/{planId}/execution-state.json`

### P1 Limitation
Tasks previously skipped due to this failure (blocked dependents) remain deleted
in the native task system and will NOT be automatically re-queued. To implement
downstream tasks, start a new plan:
  /fp:plan  (then /fp:implement on the new plan)

To resume the original plan for any remaining non-blocked tasks:
  /fp:implement {planId}
```

## Important

- This skill operates WITHOUT a live tracker teammate — `execution-state.json` is updated directly
- The builder and verifier are spawned as **subagents** (Task tool), not teammates
- Always validate preconditions (FAILED status + all deps COMPLETED) before proceeding
- Evidence files are written to `.fractal-planner/plans/{planId}/evidence/` — create the directory if needed
- If Linear mapping exists, update Linear after updating execution state (best-effort, never block on failure)
- The native team `fp-impl-{planId}` has been deleted by `fp:implement` Step 6, so `TaskUpdate` is unavailable; use `execution-state.json` as the authoritative resume artifact
