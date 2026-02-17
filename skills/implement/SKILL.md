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
- `--no-commit` — optional, skip git commits (defaults to false)

Usage examples:
- `/fp:implement abc123`
- `/fp:implement abc123 --max-iterations 5`
- `/fp:implement abc123 --no-commit`
- `/fp:implement abc123 --max-iterations 5 --no-commit`

If no `planId` is provided, report the error and stop:
> "Usage: `/fp:implement <plan-session-id> [--max-iterations N] [--no-commit]`"

Read both plan files from `.fractal-planner/plans/{planId}/`:
1. `tasks.md` — the task tree
2. `plan.md` — execution order and acceptance criteria

If either file does not exist, report the error and stop:
> "Plan '{planId}' not found. Run `/fp:plan` first to create a plan, then use the session ID."

## Step 1.5: Load Linear Mapping

Check if `.fractal-planner/plans/{planId}/linear-mapping.json` exists:
- **If yes**: Parse it and hold as `linearMapping` for the session. This contains Linear issue IDs and resolved status UUIDs for all tasks.
- **If no**: Set `linearMapping` to `null`. All Linear update steps below will be skipped when `linearMapping` is null.

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

**IMPORTANT**: When you create the team, you automatically become the team lead with agent name **`team-lead`**.
This is the name teammates must use when sending you messages via the SendMessage tool.

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
- If the task has "Implementation Hints", follow them as your implementation guide — they describe HOW to implement, not just WHAT.
- If the task has "References", read those files/lines BEFORE coding to understand the patterns you should follow.
- If the task has "MUST NOT DO" constraints, treat them as hard constraints — violating them will fail verification.
- Track which files you modify (every Write/Edit/creation operation).
- When implementation is complete, message the "verifier" teammate:
  "Task {id} implementation complete. Ready for verification.

  FILES_MODIFIED:
  - /absolute/path/to/file1.ts
  - /absolute/path/to/file2.test.ts
  - /absolute/path/to/component.tsx"

  Include ALL files you created or modified. Use absolute paths.
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
  4. If the task has "Test Commands", run those exact commands
  5. Code follows existing patterns in the codebase (see Codebase Context above if provided)
  6. If the task has "MUST NOT DO" guardrails, verify the implementation does NOT violate any of them
- Do NOT use Write or Edit tools — you are read-only plus test runner.

On ALL PASS, message the "team-lead":
  VERIFICATION PASSED
  Task: {id}
  Criteria: {N}/{N} passed
  Details:
  - [PASS] criterion 1 description
  - [PASS] criterion 2 description

  FILES_MODIFIED:
  [Copy the entire FILES_MODIFIED section from builder's completion message]

On ANY FAIL, message the "builder" (NOT the team-lead) with a specific failure report:
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

2. **Update Linear status to in-progress** (if `linearMapping` is not null):
   - Look up the task's Linear issue ID from `linearMapping.tasks[{id}].linearIssueId`
   - Call `mcp__linear-server__update_issue` with `id` = issue ID, `state` = `linearMapping.resolvedStatuses['in-progress']`

3. **Message the builder** with the single task (include codebase context if available):
   ```
   {codebaseContext}

   Implement task {id}:
   Description: {description}

   Acceptance Criteria:
   {numbered list of criteria}

   Implementation Hints:
   {numbered hints from task metadata, or omit section if empty}

   References:
   {file:line refs from task metadata, or omit section if empty}

   Files to Modify: {list or "determine from context"}
   Tests Required: {yes/no}
   Test Commands: {explicit commands from task metadata, or omit line if empty}

   MUST NOT DO:
   {bulleted guardrails from task metadata, or omit section if empty}
   ```
   Note: `{codebaseContext}` is the content loaded in Step 2. If empty, omit it from the message. Omit any section (Implementation Hints, References, MUST NOT DO, Test Commands) if the task has no data for that field.

4. **Monitor the builder/verifier feedback loop**:
   - Builder implements, messages verifier
   - Verifier checks, messages builder (fail) or team-lead (pass)
   - Track the iteration count for this task

5. **On verification pass** (verifier messages team-lead):
   - Log: "Task {id} PASSED (iteration {n}/{max})"
   - Record the result
   - **Update Linear status to completed** (if `linearMapping` is not null):
     - Call `mcp__linear-server__update_issue` with `id` = `linearMapping.tasks[{id}].linearIssueId`, `state` = `linearMapping.resolvedStatuses['completed']`
     - Call `mcp__linear-server__create_comment` with `issueId` = the Linear issue ID, `body` = brief verification pass summary (e.g. "Verification passed: {N}/{N} criteria met.")

6. **On max iterations reached** (verifier reports failure after {max} attempts):
   - Log: "Task {id} FAILED after {max} iterations"
   - **Update Linear status to failed** (if `linearMapping` is not null):
     - Call `mcp__linear-server__update_issue` with `id` = `linearMapping.tasks[{id}].linearIssueId`, `state` = `linearMapping.resolvedStatuses['failed']`
     - Call `mcp__linear-server__create_comment` with `issueId` = the Linear issue ID, `body` = failure report from verifier
   - Use `AskUserQuestion` to ask the user:
     - Question: "Task {id} failed verification after {max} iterations. What would you like to do?"
     - Options:
       - **Continue**: Skip this task and proceed to the next unblocked task
       - **Stop**: End the implementation run and report current progress

7. **On task skipped (blocked dependency)** (if `linearMapping` is not null):
   - Call `mcp__linear-server__create_comment` with `issueId` = `linearMapping.tasks[{id}].linearIssueId`, `body` = "Blocked by dependency: {dep task id}" (do NOT change the issue status)

8. **Shut down builder and verifier** before moving to the next task. Send each a shutdown request, wait for confirmation, then proceed to the next task.

## Step 5.5: Create Git Commit (after verification passes)

After verification passes (verifier messages VERIFICATION PASSED), create a git commit BEFORE shutting down teammates.

**Skip this entire step if `--no-commit` flag was set in Step 1.**

### 5.5.1: Parse Files from Verification Report

Extract the FILES_MODIFIED section from the verifier's message using regex:
- Pattern: `FILES_MODIFIED:\n(- .+\n)+`
- Extract: list of absolute file paths (one per line after "- ")

**If FILES_MODIFIED is missing**:
- Log warning: "⚠ Builder did not report files for task {id}"
- Skip commit (proceed to Step 6)

### 5.5.2: Spawn Committer Teammate

Name: **committer**
Tools: `Bash`, `Read`, `Grep`

Instructions for committer:
```
You are a git commit specialist for the fp-impl-{planId} team.

Follow the fp:commit skill instructions to create ONE git commit for this task.

TASK CONTEXT:
- Task ID: {id}
- Description: {description}

FILES_MODIFIED:
{paste the file list from verifier's message}

INSTRUCTIONS:
1. Detect commit style from git log (SEMANTIC|PLAIN|SHORT)
2. Detect language (Korean|English)
3. Create ONE commit with these files only
4. Base message on task description, following detected style
5. Report commit hash when done

Message me with "COMMIT COMPLETED" or "COMMIT FAILED" when finished.
```

### 5.5.3: Monitor Commit Process

Wait for committer to respond. Expected responses:

**Success**:
```
COMMIT COMPLETED
Task: {id}
Hash: abc1234

Details:
abc1234 - feat: add authentication module
```

Extract commit hash and log: `✓ Task {id} committed as abc1234`

**Failure**:
```
COMMIT FAILED
Task: {id}
Error: {error description}
```

On failure, use `AskUserQuestion`:
- Question: "Git commit failed for task {id}: {error}. How should we proceed?"
- Options:
  - "Continue without committing" → Mark task as done, skip commit, continue
  - "Stop execution" → Halt entire run, report progress

**Skipped**:
```
COMMIT SKIPPED (no changes to commit)
```
or
```
COMMIT SKIPPED (git not found)
```

Log the skip reason, continue normally.

### 5.5.4: Shut Down Committer

Send shutdown request to committer teammate.
Wait for confirmation.

**Then proceed to Step 6** (shutdown builder/verifier, move to next task).

## Step 6: Cleanup & Report

After all tasks are processed (or the user chose to stop):

1. **Roll up parent statuses in Linear** (if `linearMapping` is not null):
   Traverse non-leaf tasks **bottom-up** (deepest parents first, then up to root):
   - If **all children completed** → call `mcp__linear-server__update_issue` to mark parent `completed`
   - If **any child is in-progress** (and none failed) → mark parent `in-progress`
   - If **all children failed** → mark parent `failed`
   - Otherwise, leave the parent status unchanged

2. **Clean up the team**: Delete team `fp-impl-{planId}` (builder and verifier were already shut down after the last task in Step 5)
3. **Report structured summary**:

```
## Implementation Summary ({planId})

### Results
- Completed: {N}/{total} tasks
- Failed: {N}/{total} tasks
- Skipped: {N}/{total} tasks (blocked by failed dependencies)

### Task Details
| Task | Status | Iterations | Commit | Notes |
|------|--------|------------|--------|-------|
| {id} | PASSED | {n}/{max}  | abc1234 | {brief note} |
| {id} | FAILED | {n}/{max}  | -      | {failure reason} |
| {id} | SKIPPED | -         | -      | Blocked by {dep} |

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
