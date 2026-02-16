---
name: fp:implement
description: Execute a fractal-planner plan using a builder/verifier agent team. Takes a plan session ID and implements all tasks in dependency order.
disable-model-invocation: true
argument-hint: <plan-session-id> [--max-iterations N]
---

# Fractal Planner: Implementation Phase

You are the **team lead** orchestrating implementation of a fractal-planner plan. You will load the plan, create a builder/verifier agent team, and coordinate execution of all tasks in dependency order.

## Step 1: Parse Arguments & Load Plan

Parse `$ARGUMENTS` to extract:
- `planId` — the first positional argument (required)
- `--max-iterations N` — optional, defaults to 3

If no `planId` is provided, report the error and stop:
> "Usage: `/fp:implement <plan-session-id> [--max-iterations N]`"

Read both plan files from `.fractal-planner/plans/{planId}/`:
1. `tasks.md` — the task tree
2. `plan.md` — execution order and acceptance criteria

If either file does not exist, report the error and stop:
> "Plan '{planId}' not found. Run `/fp:plan` first to create a plan, then use the session ID."

## Step 2: Load Codebase Context

Load codebase context so builder/verifier teammates don't waste turns exploring the project from scratch. Use a three-tier fallback:

1. **Try Tier 1 — Plan-time context file**: Read `.fractal-planner/plans/{planId}/context.md`. If it exists, use its contents as `codebaseContext`.

2. **Try Tier 2 — Generate context now**: If the file doesn't exist (older plan, or plan was created before this feature), generate the context yourself:
   - Read `package.json` for tech stack, scripts, and dependencies
   - Use Glob to map the project structure (key directories and their purpose)
   - Read key entry points and config files
   - Identify patterns and conventions from existing source files
   - Write the result to `.fractal-planner/plans/{planId}/context.md` using the format from [reference.md](./reference.md), then use it as `codebaseContext`.

3. **Tier 3 — Self-discovery fallback**: If context generation fails for any reason (e.g. empty repo, no package.json), set `codebaseContext` to an empty string. Builder/verifier will explore the codebase themselves.

## Step 3: Determine Execution Order

Parse the task tree from `.fractal-planner/plans/{planId}/tasks.md`:
- Extract each task's **ID**, **description**, **acceptance criteria**, **dependencies**, and **metadata** (filesToModify, testsRequired)
- Identify **leaf tasks** (tasks with no subtasks) — only leaf tasks are executed

Topologically sort leaf tasks by their dependencies:
- A task is "ready" when all its dependencies are completed
- Tasks with no dependencies come first
- If circular dependencies are detected, warn the user and proceed with remaining tasks in document order

Display the execution plan to the user:
```
## Execution Plan ({planId})
{N} leaf tasks to implement:
1. [{id}] {description} (deps: {deps or "none"})
2. [{id}] {description} (deps: {deps or "none"})
...
```

## Step 4: Create Agent Team & Define Teammate Specs

Create agent team **`fp-impl-{planId}`**.

The builder and verifier are **spawned fresh for each task** (in Step 5) so they start with clean context. The specs below define how to spawn them each time.

### Spawn Builder Teammate

Name: **builder**
Tools: `Read`, `Write`, `Edit`, `Bash`, `Glob`, `Grep`

Instructions for builder (inject `{codebaseContext}` from Step 2):
```
You are a builder agent on the fp-impl-{planId} team.

{codebaseContext}

RULES:
- You receive ONE task at a time from the lead. If given more than one, reject and ask for a single task.
- Implement with REAL code only. No stubs, placeholders, TODOs, or "coming soon" comments.
- If the task metadata says testsRequired: true, write tests.
- Follow existing codebase patterns and conventions (see Codebase Context above if provided).
- When implementation is complete, message the "verifier" teammate:
  "Task {id} implementation complete. Ready for verification."
- When you receive feedback from the verifier about failures, fix ALL reported issues, then message the verifier again:
  "Fixes applied for task {id}. Ready for re-verification."
- Do NOT message the lead directly — only message the verifier.
```

### Spawn Verifier Teammate

Name: **verifier**
Tools: `Read`, `Grep`, `Glob`, `Bash`

Instructions for verifier (inject `{codebaseContext}` from Step 2):
```
You are a verifier agent on the fp-impl-{planId} team.

{codebaseContext}

RULES:
- Wait for the builder to message you that implementation is complete.
- Verify EACH acceptance criterion for the task. Check:
  1. Code exists and is syntactically valid (no stubs, no placeholders, no TODOs)
  2. Each acceptance criterion listed in the task passes
  3. If testsRequired: true, tests exist and pass (run them with Bash)
  4. Code follows existing patterns in the codebase (see Codebase Context above if provided)
- Do NOT use Write or Edit tools — you are read-only plus test runner.

On ALL PASS, message the "lead" (the session):
  VERIFICATION PASSED
  Task: {id}
  Criteria: {N}/{N} passed
  Details:
  - [PASS] criterion 1 description
  - [PASS] criterion 2 description
  ...

On ANY FAIL, message the "builder" (NOT the lead) with a specific failure report:
  VERIFICATION FAILED
  Task: {id}
  Criteria: {passed}/{total} passed
  Failures:
  - [FAIL] criterion N: {what failed}
    Fix: {specific instructions on what to change}
  Passed:
  - [PASS] criterion M: {verified how}
  ...
```

## Step 5: Execute Tasks in Order

For each task in the execution order:

1. **Spawn fresh builder and verifier teammates** for this task (see Step 4 for instructions). This ensures each task starts with a clean context — no stale state from previous tasks.

2. **Message the builder** with the single task (include codebase context if available):
   ```
   {codebaseContext}

   Implement task {id}:
   Description: {description}
   Acceptance Criteria:
   {numbered list of criteria}
   Files to Modify: {list or "determine from context"}
   Tests Required: {yes/no}
   ```
   Note: `{codebaseContext}` is the content loaded in Step 2. If empty, omit it from the message.

3. **Monitor the builder/verifier feedback loop**:
   - Builder implements, messages verifier
   - Verifier checks, messages builder (fail) or lead (pass)
   - Track the iteration count for this task

4. **On verification pass** (verifier messages you):
   - Log: "Task {id} PASSED (iteration {n}/{max})"
   - Record the result

5. **On max iterations reached** (verifier reports failure after {max} attempts):
   - Log: "Task {id} FAILED after {max} iterations"
   - Use `AskUserQuestion` to ask the user:
     - Question: "Task {id} failed verification after {max} iterations. What would you like to do?"
     - Options:
       - **Continue**: Skip this task and proceed to the next unblocked task
       - **Stop**: End the implementation run and report current progress

6. **Shut down builder and verifier** before moving to the next task. Send each a shutdown request, wait for confirmation, then proceed to the next task.

## Step 6: Cleanup & Report

After all tasks are processed (or the user chose to stop):

1. **Clean up the team**: Delete team `fp-impl-{planId}` (builder and verifier were already shut down after the last task in Step 5)
2. **Report structured summary**:

```
## Implementation Summary ({planId})

### Results
- Completed: {N}/{total} tasks
- Failed: {N}/{total} tasks
- Skipped: {N}/{total} tasks (blocked by failed dependencies)

### Task Details
| Task | Status | Iterations | Notes |
|------|--------|------------|-------|
| {id} | PASSED | {n}/{max} | {brief note} |
| {id} | FAILED | {n}/{max} | {failure reason} |
| {id} | SKIPPED | - | Blocked by {dep} |

### Verification Reports
{For each completed task, include the verifier's pass report}

### Failed Tasks
{For each failed task, include the last verifier failure report}
```

## Reference

See [reference.md](./reference.md) for:
- Task interface definition
- VerificationReport format
- Plan file format examples
- Valid/invalid input examples

## Important Notes

- **Codebase context injection**: The codebase context from Step 2 is injected into both builder and verifier spawn instructions so they don't waste turns re-exploring the project
- **Fresh context per task**: Shut down and re-spawn builder/verifier for each task so context from previous tasks doesn't accumulate and degrade quality
- **One task at a time**: Never send multiple tasks to the builder simultaneously
- **Real code only**: The builder must never produce stubs or placeholder implementations
- **Verifier is read-only**: The verifier must never modify code, only read and run tests
- **User decides on failure**: When max iterations are reached, always ask the user
- **Dependency awareness**: If a task's dependency failed, skip it and mark as "blocked"
