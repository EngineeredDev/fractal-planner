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
  - `iterationMap` — object mapping plan task IDs to iteration numbers (default `{}` if absent)
  - `clarificationsUsed` — object mapping plan task IDs to booleans (default `{}` if absent)
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
    description: {full static payload — see reference.md "Structured Delegation Format"},
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
  "failureReasons": {},
  "iterationMap": {},
  "clarificationsUsed": {}
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
   - `pending` or `deleted` tasks → handled naturally by builder self-claiming
4. `skippedTasks` = set of plan task IDs from `executionState.skippedTasks` keys
5. **Detect falsely-ready tasks** (critical for resume — prevents builders from claiming tasks whose dependencies failed):
   ```
   For each pending task in liveTaskList where blockedBy is empty:
     planTaskId = inverse taskMap lookup for task.id
     For each depId in task's dependency list (from parsed tasks.md):
       depNativeId = taskMap[depId]
       depNativeTask = find in liveTaskList by id
       if depNativeTask.status == "completed" AND depNativeTask.metadata.fpStatus == "FAILED":
         TaskUpdate(task.id, status: "deleted", metadata: { fpStatus: "SKIPPED", reason: "Blocked by failed dependency {depId}" })
         Read execution-state.json, set skippedTasks[planTaskId] = "Blocked by {depId}", write back
         skippedTasks.add(planTaskId)
         break
       if depNativeTask.status == "deleted":
         TaskUpdate(task.id, status: "deleted", metadata: { fpStatus: "SKIPPED", reason: "Blocked by skipped dependency {depId}" })
         Read execution-state.json, set skippedTasks[planTaskId] = "Blocked by {depId}", write back
         skippedTasks.add(planTaskId)
         break
   ```
   This must run before spawning builders so they never see these falsely-ready tasks.
6. Display resume stats:
   ```
   ## Resuming Implementation ({planId})
   Previous progress found:
   - Completed: {N}
   - Failed: {N}
   - Skipped: {N}
   - Remaining: {N}
   Continuing from where the previous session left off.
   ```
7. Check for `.fractal-planner/plans/{planId}/handoff.md`. If found:
   - Read the "## Key Discoveries" section → store as `handoffDiscoveries`
   - Read the "## Resume Notes" section → display to user
   - Log: "Handoff context loaded from previous session"

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

**Note**: After sending INIT and receiving TRACKER READY, the tracker sits idle until you send `TASK_STARTED`. Do not send any other messages to the tracker between now and Step 5.3.

## Step 4.4: Define Builder & Verifier Specs

Builders are **persistent teammates** that run a self-claiming work loop across multiple tasks. Verification is handled by a **lead-spawned verification subagent** after the builder completes — no hooks or persistent verifier teammate needed.

### Builder Teammate Spec

Name: **builder-{N}** (where N = 1 to `maxParallelTasks`)
Tools: `Read`, `Write`, `Edit`, `Bash`, `Glob`, `Grep`, `TaskList`, `TaskUpdate`, `TaskGet`, `SendMessage`

Instructions for builder (inject `{builderName}`, `{codebaseContext}`, `{planId}`, `{peerBuilderNames}`, `{handoffDiscoveries}`):
```
You are {builderName}, a persistent builder agent on the fp-impl-{planId} team.

{codebaseContext}

{if handoffDiscoveries is non-empty:}
PREVIOUS SESSION DISCOVERIES (from handoff):
{handoffDiscoveries content}
{end if}

Your peer builders: {peerBuilderNames}

SELF-CLAIMING WORK LOOP:
Repeat the following loop until no tasks remain:

1. Call TaskList() → filter for tasks with status: "pending" and blockedBy: [] (empty).
2. Pick the lowest-ID task from the filtered list. If no tasks match → send "NO_MORE_TASKS: {builderName}" to "team-lead" and STOP.
3. Call TaskUpdate(taskId, status: "in_progress", owner: "{builderName}") to claim the task.
4. Call TaskGet(taskId) → read the full task description (contains the complete task spec).
5. Parse the plan task ID from the subject field: "[{planTaskId}] ...".
   (Peer message budget resets to 0 for the new task.)
6. Read .fractal-planner/plans/{planId}/notepad.md. Filter for relevant entries: include if the entry is among the last 10, OR the entry's task had overlapping files with the current task. Cap at 10 entries.
7. Send to "team-lead":
   "TASK_CLAIMED: {planTaskId}
   Builder: {builderName}
   NativeId: {nativeTaskId}"
8. Implement the task following ALL rules below.
9. When done, send to "team-lead":
   "IMPLEMENTATION COMPLETE: {planTaskId}

   FILES_MODIFIED:
   - /absolute/path/to/file1.ts
   - /absolute/path/to/file2.test.ts

   NOTEPAD_ENTRY:
   - PATTERN: description (only if you discovered something useful)"
   Include ALL files you created or modified. Use absolute paths.
   NOTEPAD_ENTRY is optional — only include if you discovered something genuinely useful.
   THIS MUST BE YOUR LAST TOOL CALL FOR THIS TURN. Do not call any other tool after SendMessage.
10. YOUR TURN ENDS HERE. The SendMessage in step 9 must be the last tool call of your turn.
    The lead's response will arrive as the START of your next turn. When your next turn begins,
    read the lead's message and act accordingly:
    - "VERIFICATION PASSED: {planTaskId}" → loop back to step 1
    - "VERIFICATION FAILED: {planTaskId}\n..." → fix the issues described, then re-send IMPLEMENTATION COMPLETE (which again ends your turn)
    - "MAX_ITERATIONS_REACHED: {planTaskId}" → loop back to step 1
    - "TASK_ALREADY_CLAIMED: {planTaskId}" → loop back to step 1

IMPLEMENTATION RULES:
- Implement with REAL code only. No stubs, placeholders, TODOs, or "coming soon" comments.
- If the task says testsRequired: true, write tests.
- Follow existing codebase patterns and conventions (see Codebase Context above if provided).
- If the task has "Implementation Hints", follow them as your implementation guide — they describe HOW to implement, not just WHAT.
- If the task has "References", read those files/lines BEFORE coding to understand the patterns you should follow.
- If the task has "MUST NOT DO" constraints, treat them as hard constraints — violating them will fail verification.
- Track which files you modify (every Write/Edit/creation operation).
- Never claim more than one task at a time.
- After sending IMPLEMENTATION COMPLETE, your turn MUST end — do not call any other tool. The lead's verification response arrives as your next turn.

TURN PROTOCOL (strict termination rules):
Every turn MUST end with exactly one of these SendMessage calls — no tool calls after it:
1. "IMPLEMENTATION COMPLETE: {planTaskId}" (step 9 — awaiting verification)
2. "CLARIFICATION NEEDED: {planTaskId}" (asking lead to relay a question)
3. "NO_MORE_TASKS: {builderName}" (no claimable tasks — going idle)
4. "TASK_CLAIMED: {planTaskId}" is the ONE exception — continue to step 8 on the same turn.

Forbidden actions after sending IMPLEMENTATION COMPLETE:
- Do NOT call TaskList(), TaskGet(), or TaskUpdate()
- Do NOT call Read, Write, Edit, Bash, Glob, or Grep
- Do NOT send another SendMessage
Your turn must end immediately after the SendMessage for IMPLEMENTATION COMPLETE.

NUDGE RECOVERY (automatic re-injection):
If you receive a message about stalling or idle detection, it means you went idle while still
owning an in-progress task. This is an automatic recovery mechanism. When you receive it:
1. Do NOT panic or start over from scratch.
2. Call TaskGet on the task ID mentioned in the message to refresh your context.
3. Continue implementing from where you left off.
4. If you already sent IMPLEMENTATION COMPLETE, re-send it to team-lead.

CLARIFICATION PROTOCOL (iteration 1 only, once per task):
If you encounter a genuine ambiguity, send to "team-lead":
"CLARIFICATION NEEDED: {planTaskId}
QUESTION: {question}
OPTIONS:
- {label} | {description}
..."
YOUR TURN ENDS HERE after sending CLARIFICATION NEEDED. Do not call any other tool.
The CLARIFICATION ANSWER will arrive as the start of your next turn. Then continue implementation.

PEER COMMUNICATION (parallel mode only — skip if peerBuilderNames is "none"):
Budget: 2 peer messages max per task. Do NOT exceed this.
When to notify peers (SendMessage to a specific peer builder by name):
- You created a new shared utility/interface that peers working on related files could reuse
- You discovered a pattern or constraint that affects a peer's likely work area
- You detected a conflict (e.g. both modifying the same file, incompatible interface changes)
- You moved/renamed a file that a peer's task references

Format — send to the specific peer(s) affected:
"PEER_NOTIFICATION
TYPE: INTERFACE_CREATED | PATTERN_FOUND | CONFLICT_WARNING | FILE_MOVED
DETAILS:
  {1-3 lines: what you did, where, and what the peer should do about it}"

When NOT to send:
- Your discovery only matters for future tasks (use NOTEPAD_ENTRY instead)
- You're unsure if a peer is affected (don't guess — skip it)
- You've already used your 2-message budget for this task
- Only one builder is active (peerBuilderNames is "none")

Processing incoming peer messages:
- Read and integrate the information if relevant to your current task
- Do NOT reply — peer messages are one-way notifications
- Do NOT pause your work to wait for peer messages
- If a peer warns about a conflict, adapt your approach accordingly
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

MUST NOT DO constraints:
{guardrails from task — always includes baseline + task-specific}

Files Allowed: {filesToModify list from task metadata}

Files Modified by Builder:
{FILES_MODIFIED list from builder's message}

Test Commands: {commands from task metadata or 'none'}
Tests Required: {yes/no}

{codebaseContext}

Instructions:
1. Read each modified file listed above.
2. For each acceptance criterion, verify it is met by the code.
3. Check MUST NOT DO constraints:
   a. File boundary: Compare FILES_MODIFIED against Files Allowed. Any file modified that is NOT in the allowed list is a MUST NOT DO violation (exception: new test files co-located with allowed files are permitted).
   b. New dependencies: Check if package.json was modified. If so, diff it to see if new dependencies were added — this is a violation.
   c. Task-specific guardrails: Verify each additional MUST NOT DO constraint is respected.
   If ANY MUST NOT DO violation is found, the overall result is FAIL regardless of criteria results.
4. If tests are required, run the test commands via Bash.
5. Run: bun run typecheck (if tsconfig.json exists in the project root).
6. Write your evidence to: {evidencePath}

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

## MUST NOT DO Check
| Constraint | Result | Evidence |
|-----------|--------|---------|
| File boundary ({allowed files}) | PASS/FAIL | {list of violating files, or "all files within scope"} |
| No new dependencies | PASS/FAIL | {added deps, or "package.json unchanged"} |
| {task-specific guardrail} | PASS/FAIL | {evidence} |

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

7. After writing the evidence file, report your findings in this EXACT format:

If ALL criteria pass AND all MUST NOT DO checks pass AND tests/typecheck pass:
  VERIFICATION PASSED
  All {N} criteria met.
  MUST NOT DO: All constraints respected.
  [1-2 sentence summary of what was verified]

If ANY check fails:
  VERIFICATION FAILED
  Failed:
  - Criterion {N}: {text} — {specific failure reason and fix instruction}
  MUST NOT DO Violations:
  - {constraint}: {specific violation and fix instruction}
  Passed:
  - Criterion {N}: {text}
  Tests: {PASS/FAIL with relevant output}
  Typecheck: {PASS/FAIL with errors if any}
```


## Step 5: Execute Tasks (Builder Self-Claiming Loop)

**ROUTING RULES — read before executing the loop:**
- `tracker` receives ONLY: `TASK_STARTED`, `TASK_COMPLETED`, `TASK_FAILED`, `TASK_SKIPPED`, `ROLLUP_PARENTS`
- `builder-N` receives ONLY: `VERIFICATION PASSED`, `VERIFICATION FAILED`, `MAX_ITERATIONS_REACHED`, `CLARIFICATION ANSWER`, `TASKS_AVAILABLE`, `TASK_ALREADY_CLAIMED`
- Lead NEVER sends task descriptions/criteria/hints to builders (builders self-read via TaskGet)
- NEVER send task descriptions, acceptance criteria, code context, or implementation hints to the tracker

### 5.0: Initialize Lead State

```
builderTaskMap = {}        // builderName → planTaskId (current assignment)
iterationMap = {}          // planTaskId → current iteration number
iterationMaxMap = {}       // planTaskId → effective max iterations (computed per-task)
clarificationsUsed = {}    // planTaskId → boolean
activeBuilders = set()     // builders that haven't sent NO_MORE_TASKS
idleBuilders = set()       // builders that have sent NO_MORE_TASKS
commitQueue = []           // ordered list of {planTaskId, filesModified, builderName, iteration, nativeId}
completedTasks, failedTasks, skippedTasks (from Step 4.1 or empty for fresh runs)

If isResume == true:
  iterationMap = executionState.iterationMap || {}
  clarificationsUsed = executionState.clarificationsUsed || {}
```

Read `notepad.md` from the plan directory. Set `notepadContents` to the file contents, or empty string if not found.

### 5.1: Spawn Persistent Builders

```
N = maxParallelTasks (from config, default 1)
For i in 1..N:
  Spawn teammate "builder-{i}" on team fp-impl-{planId}
    - Use builder spec from Step 4.4
    - Inject: builderName="builder-{i}", codebaseContext, planId
    - Inject: peerBuilderNames = comma-separated list of all OTHER builder names (e.g. "builder-2, builder-3" for builder-1)
    - If N == 1: peerBuilderNames = "none"
  Add "builder-{i}" to activeBuilders
```

Builders start their self-claiming loops immediately — no initial message from lead needed.

### 5.2: Lead Message-Handling Loop

```
While activeBuilders is not empty OR commitQueue is not empty:
  Wait for next message from any teammate.
  Route by message prefix:
    "TASK_CLAIMED:"            → Step 5.3
    "IMPLEMENTATION COMPLETE:" → Step 5.4
    "CLARIFICATION NEEDED:"   → Step 5.5
    "NO_MORE_TASKS:"           → Step 5.6

  After handling each message, process commitQueue if non-empty (Step 5.7).

If activeBuilders is empty AND commitQueue is empty:
  Proceed to Step 6.
```

### 5.3: Handle TASK_CLAIMED

1. Parse `planTaskId`, `builderName`, `nativeId` from the message.
2. **Check for duplicate claim**: if another builder already has this `planTaskId` in `builderTaskMap` values, send `TASK_ALREADY_CLAIMED: {planTaskId}` back to the sender. Return.
3. Record: `builderTaskMap[builderName] = planTaskId`
4. Set `iterationMap[planTaskId] = 1` if not already set. Persist: read `execution-state.json`, set `iterationMap[planTaskId]` to the current value, write back.
5. **Compute adaptive max iterations**: If `iterationScaling.enabled` (from config):
   - Look up the task's complexity from the parsed task tree. Prefer `complexityDimensions.risk` if available, otherwise use `estimatedComplexity`.
   - `effectiveMax = max(iterationScaling.base, ceil(taskComplexity * iterationScaling.factor))`
   - `effectiveMax = min(effectiveMax, maxIterations)` — cap at the global maximum
   - Store in `iterationMaxMap[planTaskId] = effectiveMax`

   If `iterationScaling.enabled` is false: `iterationMaxMap[planTaskId] = maxIterations`
6. Send `TASK_STARTED: {planTaskId}` to tracker. Wait for `ACK_STARTED: {planTaskId}`.

### 5.4: Handle IMPLEMENTATION COMPLETE

1. Parse `planTaskId`, FILES_MODIFIED, optional NOTEPAD_ENTRY from the message.
2. If NOTEPAD_ENTRY present: append entries to `notepad.md` with `[Task {planTaskId}]` prefix, update `notepadContents`.
3. Identify sender `builderName`.
4. Look up `nativeId = taskMap[planTaskId]`.
5. Spawn verifier subagent (same spec as Step 4.4 verifier — inject task criteria, FILES_MODIFIED, codebaseContext, test commands, `evidencePath: .fractal-planner/plans/{planId}/evidence/task-{planTaskId}-verification.md`). Wait for result.
6. Read evidence file (primary) or parse agent message (fallback).

**If VERIFICATION PASSED:**
- Add to `commitQueue`: `{ planTaskId, filesModified, builderName, iteration: iterationMap[planTaskId], nativeId }`
- Send `VERIFICATION PASSED: {planTaskId}` to the builder (builder loops to claim next task)

**If VERIFICATION FAILED:**
- If `iterationMap[planTaskId] >= iterationMaxMap[planTaskId]`: go to Step 5.8.
- Else: increment `iterationMap[planTaskId]`. Persist: read `execution-state.json`, update `iterationMap[planTaskId]`, write back. Send to builder:
  ```
  VERIFICATION FAILED: {planTaskId}
  Iteration: {n}/{iterationMaxMap[planTaskId]}

  {full VERIFICATION FAILED output from verifier}

  Fix all issues listed above, then send IMPLEMENTATION COMPLETE again.
  Remember: IMPLEMENTATION COMPLETE must be your last tool call — your turn ends after sending it.
  ```
  Builder retries in-place (no re-spawn).

### 5.5: Handle CLARIFICATION NEEDED

1. Parse `planTaskId` and the question from the message.
2. Identify sender `builderName`.
3. Verify this is iteration 1 for this task (`iterationMap[planTaskId] == 1`) AND `clarificationsUsed[planTaskId]` is not true.
   - If invalid: send `"Clarification only allowed on iteration 1. Proceed with the task spec and the failure report."` to the builder.
4. If valid: parse the CLARIFICATION NEEDED message (see reference.md for format), call `AskUserQuestion`, then forward the answer:
   ```
   CLARIFICATION ANSWER: {planTaskId}
   User selected: "{option}"
   Context: {additional text if any}
   ```
5. Mark `clarificationsUsed[planTaskId] = true`. Persist: read `execution-state.json`, set `clarificationsUsed[planTaskId] = true`, write back.

### 5.6: Handle NO_MORE_TASKS

1. Parse `builderName` from the message.
2. Move `builderName` from `activeBuilders` to `idleBuilders`.
3. Clear `builderTaskMap[builderName]`.
4. If `activeBuilders` is empty AND `commitQueue` is empty: proceed to Step 6.

### 5.7: Serialize Commits (process commitQueue)

Process `commitQueue` one entry at a time, sorted by dependency order (dependencies first):

For each entry in `commitQueue`:
1. **Create git commit** — skip if `--no-commit` flag was set:
   - Parse FILES_MODIFIED from the entry. If missing, log warning, set commit hash to `none`.
   - Spawn committer teammate:
     - Name: **committer-{planTaskId}**
     - Tools: `Bash`, `Read`, `Grep`
     - Instructions (inject `commitStyle` and `commitLang` from Step 4.2.5):
       ```
       You are a git commit specialist for the fp-impl-{planId} team.

       Follow the fp:commit skill instructions to create ONE git commit for this task.

       TASK CONTEXT:
       - Task ID: {planTaskId}
       - Description: {description}

       FILES_MODIFIED:
       {paste the file list}

       INSTRUCTIONS:
       1. Use pre-detected commit style: {commitStyle} (detected from git history at session start)
       2. Use pre-detected language: {commitLang}
       3. Stage only these specific files
       4. Create ONE commit with message based on task description, following the detected style
       5. Report commit hash when done

       Message me with "COMMIT COMPLETED" or "COMMIT FAILED" when finished.
       ```
   - Handle committer response:
     - `COMMIT COMPLETED` → extract hash, log `✓ Task {planTaskId} committed as {hash}`
     - `COMMIT FAILED` → use `AskUserQuestion` ("Git commit failed for task {planTaskId}: {error}. How should we proceed?" with options "Continue without committing" / "Stop execution"). If continuing, set hash to `none`.
     - `COMMIT SKIPPED` → log skip reason, set hash to `none`
   - Shut down committer.

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
4. Wait for `ACK_COMPLETED: {planTaskId}`.
5. Add `planTaskId` to `completedTasks`.
6. Clear `builderTaskMap[builderName]` for this entry.
7. Remove entry from `commitQueue`.

8. **Check for idle builder wake-up**: After each commit, call `TaskList()` to check for newly unblocked tasks (status: "pending", blockedBy: []). If found AND `idleBuilders` is non-empty:
   - Pick an idle builder, move from `idleBuilders` to `activeBuilders`.
   - Send: `TASKS_AVAILABLE\nNew tasks have been unblocked. Resume your self-claiming loop.`

### 5.8: On Max Iterations Reached

Triggered from Step 5.4 when `iterationMap[planTaskId] >= iterationMaxMap[planTaskId]` and verification fails.

1. Log: "Task {planTaskId} FAILED after {iterationMaxMap[planTaskId]} iterations"
2. Use `AskUserQuestion`:
   - Question: "Task {planTaskId} failed verification after {iterationMaxMap[planTaskId]} iterations. What would you like to do?"
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
   g. Send `MAX_ITERATIONS_REACHED: {planTaskId}` to the builder (builder loops to next task).
   h. Clear `builderTaskMap[builderName]`.
   i. Return to Step 5.2 message-handling loop.
4. **If Stop**:
   a. Perform steps 3a through 3f (mark failed + blocked dependents).
   b. Jump to Step 6.

## Step 6: Cleanup & Report

After all builders have finished (activeBuilders is empty, commitQueue is empty) or the user chose to stop:

1. **Roll up parent statuses**: Send `ROLLUP_PARENTS` to the tracker. Wait for `ROLLUP_COMPLETE`. The tracker handles all Linear parent status updates.

2. **Shut down all builders**: Send `shutdown_request` to each builder (both active and idle) via SendMessage. Wait for confirmations.

3. **Shut down tracker**: Send shutdown request to the tracker. Wait for confirmation.

4. **Clean up the team**: Delete team `fp-impl-{planId}`.

5. **Build summary from native task system**: Call `TaskList()` to get final task states. For each `(planTaskId, nativeId)` in `taskMap`:
   - `status == "completed"` + `fpStatus == "COMPLETED"` (or absent) → COMPLETED (get iterations, commit from metadata)
   - `status == "completed"` + `fpStatus == "FAILED"` → FAILED (get reason from metadata or `executionState.failureReasons`)
   - `status == "deleted"` → SKIPPED (get reason from `executionState.skippedTasks[planTaskId]`)
   - `status == "in_progress"` or `status == "pending"` → INCOMPLETE (should not occur at end — warn)

6. **Write final `progress.md` snapshot** (human-readable audit artifact — not a runtime source of truth):
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

7. **Report to user**:
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
- Nudge Mechanism (P3)

## Important Notes

- **Builders are persistent**: Each builder-N teammate lives for the entire session, running a self-claiming work loop across multiple tasks. Verifiers are still spawned fresh per iteration.
- **Builders drive scheduling**: Builders find and claim tasks via TaskList/TaskUpdate. The lead handles verification, commits, failures, and tracker communication.
- **Builder tools**: Builders have TaskList, TaskUpdate, TaskGet, and SendMessage in addition to code tools. They use these for self-claiming, not for modifying other tasks' state.
- **Self-claiming execution**: Builders self-organize via the native task list. `maxParallelTasks` determines the number of concurrent builders (default: 1 = sequential).
- **Builders accumulate context**: Persistent builders retain knowledge across tasks within a session. Verifiers are still spawned fresh per iteration.
- **Tracker is persistent**: The tracker teammate is spawned once and lives for the entire session.
- **Tracker owns Linear**: The lead never calls `mcp__linear-server__update_issue` directly. All Linear updates go through the tracker.
- **Tracker is stateless**: The tracker no longer reads or writes files. All state lives in its memory for the current session.
- **Native task system owns execution state**: The lead uses TaskCreate/TaskList/TaskUpdate to manage task lifecycle. `execution-state.json` is the resume artifact.
- **Resume is native-task-driven**: On resume, the lead reads `execution-state.json` for the `taskMap`, then calls `TaskList()` to get current statuses. No `progress.md` parsing.
- **No native "failed" status**: Failed tasks get `status: "completed"` + `metadata.fpStatus: "FAILED"`. This auto-unblocks dependents in the native system, which the lead then immediately marks `deleted` (skipped).
- **Skipped tasks use `deleted` status**: `deleted` tasks are invisible to `TaskList`, preventing builders from claiming them.
- **Step 4.0 requires team context**: `TaskCreate` calls in Step 4.0 must happen after `TeamCreate` in Step 4, since they register tasks in the current team's task list.
- **Codebase context injection**: The codebase context from Step 2 is injected into builder spawn instructions so builders don't waste turns re-exploring the project.
- **Commits are always serialized**: Even with parallel builders, commits happen one at a time in dependency order via the commitQueue.
- **Real code only**: The builder must never produce stubs or placeholder implementations.
- **Verification is lead-driven**: The lead spawns a fresh verification subagent (via Task tool) after each builder iteration. No hooks or persistent verifier teammate.
- **User decides on failure**: When max iterations are reached, always ask the user.
- **progress.md is generated once at Step 6**: Not a runtime artifact. Generated as a human-readable snapshot at the end.
- **Nudge mechanism**: A TeammateIdle hook (`hooks/nudge-teammate.sh`) detects when builders stall (go idle while owning an in_progress task) and re-injects a continuation prompt. After `nudge.maxRetries` (default: 3) re-injections with no progress, the hook stops. Configurable via `.fractal-planner/config.json` `nudge` section.
