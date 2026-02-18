---
name: fp:implement
description: Execute a fractal-planner plan using builder agents with lead-spawned verification subagents. Takes a plan session ID and implements all tasks in dependency order.
disable-model-invocation: true
argument-hint: <plan-session-id> [--max-iterations N]
---

# Fractal Planner: Implementation Phase

You are the **team lead** orchestrating implementation of a fractal-planner plan. You will load the plan, create a builder agent team with lead-spawned verification subagents, and coordinate execution of all tasks in dependency order.

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

## Step 1.5: Load Linear Mapping & Check for Resume

**Linear mapping**: Check if `.fractal-planner/plans/{planId}/linear-mapping.json` exists:
- **If yes**: Read its **raw content** as `linearMappingContent` (a string). This will be passed to the tracker teammate. The lead no longer uses it directly.
- **If no**: Set `linearMappingContent` to `null`. All Linear updates will be skipped.

**Resume detection**: Check if `.fractal-planner/plans/{planId}/execution-state.json` exists:
- **If yes**: Read and parse it. Set `isResume = true`. Extract:
  - `taskMap` — object mapping plan task IDs to native task IDs (e.g., `{ "T1.1": "1", "T2.1": "2" }`)
  - `skippedTasks` — object mapping plan task IDs to skip reasons
  - `failureReasons` — object mapping plan task IDs to failure reasons
  - `maxIterations`, `noCommit` — override command-line defaults if present
- **If no**: Set `executionState = null`, `isResume = false`.

## Step 2: Load Codebase Context

Load codebase context so builder teammates don't waste turns exploring the project from scratch. Use a three-tier fallback:

1. **Try Tier 1 — Plan-time context file**: Read `.fractal-planner/plans/{planId}/context.md`. If it exists, use its contents as `codebaseContext`.

2. **Try Tier 2 — Generate context now**: If the file doesn't exist (older plan, or plan was created before this feature), generate the context yourself:
   - Read `package.json` for tech stack, scripts, and dependencies
   - Use Glob to map the project structure (key directories and their purpose)
   - Read key entry points and config files
   - Identify patterns and conventions from existing source files
   - Write the result to `.fractal-planner/plans/{planId}/context.md` using the format from [reference.md](./reference.md), then use it as `codebaseContext`.

3. **Tier 3 — Self-discovery fallback**: If context generation fails for any reason (e.g. empty repo, no package.json), set `codebaseContext` to an empty string. Builder will explore the codebase itself.

## Step 3: Determine Execution Order

Parse the task tree from `.fractal-planner/plans/{planId}/tasks.md`:
- Extract each task's **ID**, **description**, **acceptance criteria**, **dependencies**, and **metadata** (filesToModify, testsRequired, implementationHints, references, guardrails, testCommands)
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

## Step 4: Create Agent Team & Initialize Native Task System

Create agent team **`fp-impl-{planId}`**.

**IMPORTANT**: When you create the team, you automatically become the team lead with agent name **`team-lead`**.
This is the name teammates must use when sending you messages via the SendMessage tool.

### 4.0: Register Tasks in Native System (fresh run only)

**This step runs immediately after team creation, before Step 4.1.**

If `isResume == false`:
```
taskMap = {}
For each leaf task in topological order:
  nativeId = TaskCreate({
    subject: "[{task.id}] {task.description truncated to 80 chars}",
    description: {full static payload — see reference.md "Native Task Format"},
    activeForm: "Implementing [{task.id}]",
    addBlockedBy: [taskMap[depId] for depId in task.dependencies if depId in taskMap]
  }).id
  taskMap[task.id] = nativeId

Write .fractal-planner/plans/{planId}/execution-state.json:
{
  "planId": "{planId}",
  "team": "fp-impl-{planId}",
  "taskMap": taskMap,
  "maxIterations": maxIterations,
  "noCommit": noCommit,
  "createdAt": "{ISO timestamp}",
  "skippedTasks": {},
  "failureReasons": {}
}
```

If `isResume == true`:
- Display: "Resuming — {count} tasks registered in native system."

### 4.1: Reconcile State on Resume

If `isResume == true`:
1. Call `TaskList()` to get the current state of all native tasks in the team
2. Initialize `completedTasks = {}`, `failedTasks = {}`, `skippedTasks = {}`
3. For each `(planTaskId, nativeId)` in `taskMap`:
   - Find the native task in the live task list by `id`
   - If `nativeTask.status == "in_progress"`: call `TaskUpdate(nativeId, status: "pending")` — reset orphaned in-progress task
   - Else if `nativeTask.status == "completed"` AND `nativeTask.metadata.fpStatus == "FAILED"`: `failedTasks.add(planTaskId)`
   - Else if `nativeTask.status == "completed"` (fpStatus absent or "COMPLETED"): `completedTasks.add(planTaskId)`
   - `pending` or `deleted` tasks → handled naturally by wave computation
4. `skippedTasks` = set of plan task IDs from `executionState.skippedTasks` keys
5. Display resume stats:
   ```
   ## Resuming Implementation ({planId})
   Previous progress found:
   - Completed: {N}
   - Failed: {N}
   - Skipped: {N}
   - Remaining: {N}
   Continuing from where the previous session left off.
   ```

If `isResume == false`:
- Initialize empty sets: `completedTasks = {}`, `failedTasks = {}`, `skippedTasks = {}`

### 4.2: Prepare Evidence Directory & Notepad

**Create evidence directory**:
```bash
mkdir -p .fractal-planner/plans/{planId}/evidence
```

**Initialize notepad**: If this is a fresh run (`isResume == false`), create an empty notepad file:

Write `.fractal-planner/plans/{planId}/notepad.md` with:
```markdown
# Implementation Notepad

Plan: {planId}
Started: {ISO timestamp}

## Entries (most recent last)
```

If this is a resume (`isResume == true`), check if `notepad.md` already exists — if not, create it using the same format.

### 4.2.5: Detect Commit Style (once, before tracker spawn)

Run git log to detect the repository's commit style **once** and cache it for all subsequent committer spawns:

```bash
git log --oneline -10 2>/dev/null | head -10
```

Analyze the output to determine:
- **`commitStyle`**: `SEMANTIC` (if commits use conventional format like `feat:`, `fix:`, `chore:`), `SHORT` (if messages are very brief, under 40 chars), or `PLAIN` (standard English sentences)
- **`commitLang`**: `KOREAN` (if commits are primarily in Korean), or `ENGLISH` (otherwise)

If git log fails or returns no commits, set `commitStyle = "PLAIN"`, `commitLang = "ENGLISH"`.

Store `commitStyle` and `commitLang` for injection into all committer spawns in Step 5.7.

### 4.3: Spawn Tracker Teammate

Spawn a **persistent tracker teammate** that lives for the entire session. It handles all Linear status updates.

Name: **tracker**
Agent: `fp-task-tracker`
Model: sonnet

Send the tracker its initialization payload via `SendMessage`:
```
INIT
LINEAR_MAPPING:
{linearMappingContent or "null"}
```

**Wait for the tracker to respond with `TRACKER READY`** before proceeding.

**Note**: After sending INIT and receiving TRACKER READY, the tracker sits idle until you send `TASK_STARTED`. Do not send any other messages to the tracker between now and Step 5.2.

## Step 4.4: Define Builder & Verifier Specs

The builder is **spawned fresh for each iteration** (in Step 5) so it starts with clean context. Verification is handled by a **lead-spawned verification subagent** after the builder completes — no hooks or persistent verifier teammate needed.

### Builder Teammate Spec

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

COMPLETION PROTOCOL:
1. When implementation is complete, message "team-lead" with:
   "IMPLEMENTATION COMPLETE: {id}

   FILES_MODIFIED:
   - /absolute/path/to/file1.ts
   - /absolute/path/to/file2.test.ts"
   Include ALL files you created or modified. Use absolute paths.
2. Then go idle. The lead will verify your work separately.
3. You perform exactly ONE implementation pass per spawn.
```

### Verifier Subagent Spec

The verifier is spawned by the lead via Task tool after each builder iteration. It gets fresh context every time.

Spawn: `Task({ subagent_type: "general-purpose", prompt: <below> })`

Prompt template (lead injects values):
```
You are a verification agent for a fractal-planner implementation task.

Task ID: {id}
Description: {description}

Acceptance Criteria:
{numbered criteria from plan}

Files Modified by Builder:
{FILES_MODIFIED list from builder's message}

Test Commands: {commands from task metadata or 'none'}
Tests Required: {yes/no}

{codebaseContext}

Instructions:
1. Read each modified file listed above.
2. For each acceptance criterion, verify it is met by the code.
3. If tests are required, run the test commands via Bash.
4. Run: bun run typecheck (if tsconfig.json exists in the project root).
5. Write your evidence to: {evidencePath}

Evidence file format:
```markdown
# Verification Evidence: Task {id}

Result: PASS | FAIL
Timestamp: {ISO timestamp}
Task: {description}

## Criteria Results
| # | Criterion | Result | Evidence |
|---|-----------|--------|---------|
| 1 | {text} | PASS/FAIL | {code snippet or "met" or specific failure} |

## Test Output
\`\`\`
{test output or "Tests not required"}
\`\`\`

## Typecheck Output
\`\`\`
{typecheck output or "No tsconfig.json found"}
\`\`\`

## Files Reviewed
- {absolute file path}

## Summary
{1-2 sentence summary}
```

6. After writing the evidence file, report your findings in this EXACT format:

If ALL criteria pass and tests/typecheck pass:
  VERIFICATION PASSED
  All {N} criteria met.
  [1-2 sentence summary of what was verified]

If ANY check fails:
  VERIFICATION FAILED
  Failed:
  - Criterion {N}: {text} — {specific failure reason and fix instruction}
  Passed:
  - Criterion {N}: {text}
  Tests: {PASS/FAIL with relevant output}
  Typecheck: {PASS/FAIL with errors if any}
```


## Step 5: Execute Tasks (Lead-Driven Wave Loop)

**ROUTING RULES — read before executing the loop:**
- `tracker` receives ONLY: `TASK_STARTED`, `TASK_COMPLETED`, `TASK_FAILED`, `TASK_SKIPPED`, `ROLLUP_PARENTS`
- `builder` receives ONLY: implementation task payloads (description, criteria, hints)
- NEVER send task descriptions, acceptance criteria, code context, or implementation hints to the tracker
- If you send the wrong payload to the wrong agent, the tracker will reject it and you must retry with the correct recipient

The lead executes tasks in **waves** based on `maxParallelTasks` from config (default: 1 = sequential). A wave is a set of tasks whose dependencies are all completed — they can be built in parallel.

Maintain these sets (initialized in Step 4.1, or empty for fresh runs):
- `completedTasks` — plan task IDs that are done
- `failedTasks` — plan task IDs that failed
- `skippedTasks` — plan task IDs that were skipped or blocked

Also read `notepad.md` from the plan directory at the start of Step 5 (before the first wave). Set `notepadContents` to the file contents, or empty string if not found.

### 5.1: Compute Ready Tasks

At the start of each wave iteration:

```
liveTaskList = TaskList()

readyNative = [t for t in liveTaskList if t.status == "pending" and t.blockedBy == []]

# Detect tasks auto-unblocked by a FAILED parent (parent marked "completed" + fpStatus:FAILED,
# which clears blockedBy in the native system, but the dependent should still be skipped).
# This primarily handles resume scenarios where Step 5.8 cleanup was interrupted.
blockedByFailed = []
For each t in readyNative:
  planTaskId = inverse taskMap lookup for t.id
  For each depId in task's dependency list (from parsed tasks.md):
    depNativeId = taskMap[depId]
    depNativeTask = find in liveTaskList by id (or fetch via TaskGet)
    if depNativeTask.status == "completed" AND depNativeTask.metadata.fpStatus == "FAILED":
      blockedByFailed.append(planTaskId)
      break
    if depNativeTask.status == "deleted":  # was skipped
      blockedByFailed.append(planTaskId)
      break

For each planTaskId in blockedByFailed:
  nativeId = taskMap[planTaskId]
  TaskUpdate(nativeId, status: "deleted", metadata: { fpStatus: "SKIPPED", reason: "Blocked by failed/skipped dependency" })
  Read execution-state.json, set skippedTasks[planTaskId] = "Blocked by failed/skipped dependency", write back
  Send to tracker: "TASK_SKIPPED: {planTaskId}\nReason: Blocked by failed/skipped dependency"
  Wait for ACK_SKIPPED: {planTaskId}
  skippedTasks.add(planTaskId)
  Remove from readyNative

currentWave = readyNative[:maxParallelTasks]  (translate native IDs back to plan IDs via inverse taskMap)
```

If `currentWave` is empty:
- If there are still `pending` tasks in `liveTaskList` with unresolved `blockedBy`: warn that dependencies are unresolvable and jump to Step 6
- Otherwise: all tasks handled — jump to Step 6

Proceed to 5.2 with `currentWave`.

### 5.2: Notify Tracker of Wave Start (all tasks in wave)

For each task in `currentWave`:
1. `TaskUpdate(nativeId, status: "in_progress", owner: "builder-{planTaskId}")` — forward-compat: owner field identifies the builder
2. Send to tracker: `TASK_STARTED: {planTaskId}`

Wait for `ACK_STARTED: {planTaskId}` for each task before spawning builders. You may send all TASK_STARTED messages and then wait for all ACKs (parallel sends, then collect all ACKs).

### 5.3: Spawn Builders for Wave

For each task in `currentWave`, spawn a **fresh builder teammate** (see Step 4.4 builder spec).

Read `notepad.md` from the plan directory. For each builder, inject relevant notepad entries in the task payload. Relevance filter: include an entry if:
- The entry was added within the last 10 entries total, OR
- The entry's associated task had overlapping `filesToModify` with the current task

**Send each builder its task payload** (send to all wave builders simultaneously):

On iteration 1 for a task:
```
{If notepad has relevant entries:}
## Shared Notepad (discoveries from previous tasks)
{relevant notepad entries, newest first, max 10}

---

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

On iteration 2+ for a task (re-try after failed verification):
```
PREVIOUS ATTEMPT FAILED (iteration {iteration-1}/{maxIterations}).
Verification report from previous attempt:
{paste VERIFICATION FAILED output from verifier}

Review the existing code on disk and fix all issues listed above.
Here is the full task specification:

Implement task {id}:
[same as iteration 1 but without codebaseContext, with notepad if relevant]
```

**CLARIFICATION NEEDED protocol (iteration 1 only)**: If a builder sends a message starting with `CLARIFICATION NEEDED: {id}` before `IMPLEMENTATION COMPLETE`, intercept it:
- Verify this is iteration 1 for this task. If iteration > 1, reject: `SendMessage(recipient: builder-{id}, content: "Clarification only allowed on iteration 1. Proceed with the task spec and the failure report.")`
- If iteration 1: parse the CLARIFICATION NEEDED message (see reference.md for format), call `AskUserQuestion`, then forward the answer: `SendMessage(recipient: builder-{id}, content: "CLARIFICATION ANSWER: {id}\nUser selected: \"{option}\"\nContext: {additional text}")`
- Budget: 1 clarification per task total. Track in a `clarificationsUsed` map.

Wait for all builders in the wave to either send `IMPLEMENTATION COMPLETE: {id}` or exhaust their turns. If a builder's turns are exhausted without completing, treat it as a verification failure.

**Extract NOTEPAD_ENTRY**: After each builder sends `IMPLEMENTATION COMPLETE: {id}`, check if the message contains a `NOTEPAD_ENTRY:` section. If present:
1. Extract each entry line (lines starting with `- `)
2. Append to `notepad.md` with a `[Task {id}]` prefix on each line
3. Update `notepadContents` in memory

### 5.4: Verify Wave (parallel verifiers)

After all wave builders have completed (sent IMPLEMENTATION COMPLETE or timed out), spawn verification subagents for each completed task in the wave. Spawn all verifiers simultaneously (parallel Task calls in a single message).

For each task in `currentWave` with a valid `IMPLEMENTATION COMPLETE` message:

Extract FILES_MODIFIED from the builder's message.

Spawn verifier (see Step 4.4 verifier spec), injecting:
- Task criteria from the execution plan
- FILES_MODIFIED from builder
- codebaseContext from Step 2
- Test commands from task metadata
- `evidencePath`: `.fractal-planner/plans/{planId}/evidence/task-{id}-verification.md`

**Updated verifier instructions**: The verifier must also write an evidence file to `evidencePath` before returning its result. See reference.md for evidence file format.

Wait for all verifier subagents to complete (parallel TaskOutput calls or wait for all to return). Collect results.

For each task in the wave, read the verification result from the evidence file (primary) or from the agent message (fallback):
- **VERIFICATION PASSED**: Proceed to commit for this task
- **VERIFICATION FAILED**: Store failure report; increment iteration. If `iteration > maxIterations` → Step 5.8 (failure handling). Else → queue for re-spawn in next iteration.

### 5.5: Re-spawn Failed Builders (if any)

If any tasks in the wave need re-tries:
1. For each failed task: the task is already IN_PROGRESS from Step 5.2 — skip re-notifying tracker.
2. Shut down the failed builder for that task.
3. Spawn a fresh builder with failure context (iteration 2+ format from Step 5.3).
4. Wait for IMPLEMENTATION COMPLETE.
5. Spawn fresh verifier.
6. Check result. If passes → proceed to commit. If fails and iterations exhausted → Step 5.8.

Loop until all tasks in the wave either pass verification or exhaust iterations.

### 5.6: Serialize Commits (in dependency order)

After all tasks in the wave have either passed verification or been handled as failures, commit the passed tasks **in dependency order** (one at a time — git index cannot handle parallel commits):

For each passed task in `currentWave` (sorted by dependency order, dependencies first):
1. **Create git commit** (Step 5.7) — extract commit hash
2. **Update native task status**:
   ```
   TaskUpdate(nativeId, status: "completed", metadata: {
     fpStatus: "COMPLETED",
     iterations: "{iteration}/{maxIterations}",
     commit: "{hash or none}",
     summary: "{brief description}"
   })
   ```
3. **Notify tracker**:
   ```
   TASK_COMPLETED: {planTaskId}
   Iterations: {iteration}/{maxIterations}
   Commit: {hash or "none"}
   Summary: {brief description of what was implemented}
   ```
4. Wait for `ACK_COMPLETED: {planTaskId}`
5. Add plan task ID to `completedTasks`
6. Shut down builder for this task

### 5.7: Create Git Commit (after verification passes)

**Skip this entire substep if `--no-commit` flag was set in Step 1.**

1. **Parse FILES_MODIFIED** from the builder's `IMPLEMENTATION COMPLETE` message (regex: `FILES_MODIFIED:\n(- .+\n)+`). If missing, log warning and skip commit — set commit hash to `none`.

2. **Spawn committer teammate**:
   - Name: **committer-{id}**
   - Tools: `Bash`, `Read`, `Grep`
   - Instructions (inject `commitStyle` and `commitLang` from Step 4.2.5):
     ```
     You are a git commit specialist for the fp-impl-{planId} team.

     Follow the fp:commit skill instructions to create ONE git commit for this task.

     TASK CONTEXT:
     - Task ID: {id}
     - Description: {description}

     FILES_MODIFIED:
     {paste the file list from builder's IMPLEMENTATION COMPLETE message}

     INSTRUCTIONS:
     1. Use pre-detected commit style: {commitStyle} (detected from git history at session start)
     2. Use pre-detected language: {commitLang}
     3. Stage only these specific files
     4. Create ONE commit with message based on task description, following the detected style
     5. Report commit hash when done

     Message me with "COMMIT COMPLETED" or "COMMIT FAILED" when finished.
     ```

3. **Handle committer response**:
   - `COMMIT COMPLETED` → extract hash, log `✓ Task {id} committed as {hash}`
   - `COMMIT FAILED` → use `AskUserQuestion` ("Git commit failed for task {id}: {error}. How should we proceed?" with options "Continue without committing" / "Stop execution"). If continuing, set hash to `none`.
   - `COMMIT SKIPPED` → log skip reason, set hash to `none`

The commit hash flows to the native task update and tracker via Step 5.6.

### 5.8: On Max Iterations Reached

When a builder has exhausted all iterations without passing verification:
1. Log: "Task {planTaskId} FAILED after {maxIterations} iterations"
2. Use `AskUserQuestion`:
   - Question: "Task {planTaskId} failed verification after {maxIterations} iterations. What would you like to do?"
   - Options:
     - **Continue**: Skip this task and proceed
     - **Stop**: End the implementation run and report current progress
3. **If Continue**:
   a. `TaskUpdate(nativeId, status: "completed", metadata: { fpStatus: "FAILED", iterations: "{maxIterations}/{maxIterations}", reason: "{last VERIFICATION FAILED summary}" })`
   b. Read `execution-state.json`, set `failureReasons[planTaskId] = "{reason}"`, write back.
   c. `failedTasks.add(planTaskId)`
   d. Notify tracker:
      ```
      TASK_FAILED: {planTaskId}
      Iterations: {maxIterations}/{maxIterations}
      Reason: {last VERIFICATION FAILED report from the verifier subagent}
      ```
      Wait for `ACK_FAILED: {planTaskId}`.
   e. Compute transitive blocked dependents: find all tasks whose dependencies include this failed task ID (directly or transitively through other tasks already in `failedTasks`/`skippedTasks`).
   f. For each blocked dependent (process in dependency order):
      - `TaskUpdate(depNativeId, status: "deleted", metadata: { fpStatus: "SKIPPED", reason: "Blocked by {planTaskId}" })`
      - Read `execution-state.json`, set `skippedTasks[depPlanId] = "Blocked by {planTaskId}"`, write back.
      - Send `TASK_SKIPPED: {depPlanId}\nReason: Blocked by {planTaskId}` to tracker, wait `ACK_SKIPPED: {depPlanId}`.
      - `skippedTasks.add(depPlanId)`
   g. Shut down builder. Continue to next wave (loop back to Step 5.1).
4. **If Stop**:
   a. Perform steps 3a through 3f (mark failed + blocked dependents).
   b. Jump to Step 6.

**After processing all tasks in a wave** (both passed and failed), loop back to Step 5.1 to compute the next wave. Continue until `currentWave` is empty and all tasks are handled.

## Step 6: Cleanup & Report

After all tasks in the execution order have been iterated (or the user chose to stop):

1. **Roll up parent statuses**: Send `ROLLUP_PARENTS` to the tracker. Wait for `ROLLUP_COMPLETE`. The tracker handles all Linear parent status updates.

2. **Shut down tracker**: Send shutdown request to the tracker. Wait for confirmation.

3. **Clean up the team**: Delete team `fp-impl-{planId}`.

4. **Build summary from native task system**: Call `TaskList()` to get final task states. For each `(planTaskId, nativeId)` in `taskMap`:
   - `status == "completed"` + `fpStatus == "COMPLETED"` (or absent) → COMPLETED (get iterations, commit from metadata)
   - `status == "completed"` + `fpStatus == "FAILED"` → FAILED (get reason from metadata or `executionState.failureReasons`)
   - `status == "deleted"` → SKIPPED (get reason from `executionState.skippedTasks[planTaskId]`)
   - `status == "in_progress"` or `status == "pending"` → INCOMPLETE (should not occur at end — warn)

5. **Write final `progress.md` snapshot** (human-readable audit artifact — not a runtime source of truth):
   ```markdown
   # Implementation Progress (Final Snapshot)

   Plan: {planId}
   Completed: {ISO timestamp}
   Max Iterations: {maxIterations}

   ## Summary
   - Total: {N} leaf tasks
   - Completed: {count}
   - Failed: {count}
   - Skipped: {count}

   ## Tasks

   | # | ID | Description | Status | Iterations | Commit | Notes |
   |---|-----|-------------|--------|------------|--------|-------|
   | 1 | {id} | {description} | COMPLETED | {n}/{max} | {hash} | |
   | 2 | {id} | {description} | FAILED | {max}/{max} | - | {reason} |
   | 3 | {id} | {description} | SKIPPED | - | - | Blocked by {dep} |
   ```

6. **Report to user**:
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
   {For each completed task, include the verifier's VERIFICATION PASSED report}

   ### Failed Tasks
   {For each failed task, include the last VERIFICATION FAILED report from the verifier subagent}

   Progress snapshot: .fractal-planner/plans/{planId}/progress.md
   ```

## Reference

See [reference.md](./reference.md) for:
- Task interface definition
- VerificationReport format
- Plan file format examples
- Valid/invalid input examples
- Native Task Format
- Execution State File format
- Tracker communication protocol

## Important Notes

- **Tracker is persistent**: The tracker teammate is spawned once and lives for the entire session. Builder is ephemeral per iteration.
- **Tracker owns Linear**: The lead never calls `mcp__linear-server__update_issue` directly. All Linear updates go through the tracker.
- **Tracker is stateless**: The tracker no longer reads or writes files. All state lives in its memory for the current session.
- **Native task system owns execution state**: The lead uses TaskCreate/TaskList/TaskUpdate to manage task lifecycle. `execution-state.json` is the resume artifact.
- **Resume is native-task-driven**: On resume, the lead reads `execution-state.json` for the `taskMap`, then calls `TaskList()` to get current statuses. No `progress.md` parsing.
- **No native "failed" status**: Failed tasks get `status: "completed"` + `metadata.fpStatus: "FAILED"`. This auto-unblocks dependents in the native system, which the lead then immediately marks `deleted` (skipped).
- **Skipped tasks use `deleted` status**: `deleted` tasks are invisible to `TaskList`, preventing them from appearing as ready in future waves.
- **Step 4.0 requires team context**: `TaskCreate` calls in Step 4.0 must happen after `TeamCreate` in Step 4, since they register tasks in the current team's task list.
- **Codebase context injection**: The codebase context from Step 2 is injected into builder spawn instructions so it doesn't waste turns re-exploring the project.
- **Fresh context per iteration**: Both builder AND verifier are spawned fresh for each iteration. No accumulated message history in either.
- **Wave execution**: Multiple tasks execute in parallel per wave when `maxParallelTasks > 1`. Default is 1 (sequential). Wave width is capped at `maxParallelTasks`.
- **Commits are always serialized**: Even with parallel builders/verifiers, commits happen one at a time in dependency order.
- **Real code only**: The builder must never produce stubs or placeholder implementations.
- **Verification is lead-driven**: The lead spawns a fresh verification subagent (via Task tool) after each builder iteration. No hooks or persistent verifier teammate.
- **User decides on failure**: When max iterations are reached, always ask the user.
- **Lead drives execution**: The lead computes waves via `TaskList()`, spawns parallel builders, and decides what to do next. The tracker is a pure Linear relay.
- **progress.md is generated once at Step 6**: Not a runtime artifact. Generated as a human-readable snapshot at the end.
