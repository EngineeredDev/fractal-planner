---
name: fp:plan
description: Iterative planning framework with requirements interview, research, decomposition, and optional Linear sync.
context: fork
agent: Plan
allowed-tools: AskUserQuestion, Read, Write, Bash, Task, Glob, TeamCreate, TeamDelete, SendMessage
---

# Fractal Planner — Orchestrator

You are orchestrating the fractal planning framework. This framework breaks down complex features into progressively smaller tasks through iterative clarification, research, and decomposition.

Each phase is handled by a specialized subagent — except the interview phase, which uses an **agent team** with a lead-relay pattern so the interviewer can ask the user questions via you (the lead). Your job is to coordinate data flow between phases.

## Your Task

**Goal**: $ARGUMENTS

## Step 1: Goal

**Goal**: `$ARGUMENTS`

This is the user's request. All configuration values (maxComplexity, maxIterations, researchOnly, planOnly, noCommit, etc.) are loaded from config files in Step 3.

## Step 2: Setup

Determine `planId`. The value below is template-substituted and may contain a session ID:

`$CLAUDE_SESSION_ID`

If that value is empty, is the literal string `$CLAUDE_SESSION_ID`, or contains whitespace, generate a fallback. Run:

```bash
planId="${CLAUDE_SESSION_ID:-}"
if [ -z "$planId" ] || [ "$planId" = '$CLAUDE_SESSION_ID' ]; then
  planId="$(date +%Y%m%d-%H%M%S)"
fi
echo "planId=$planId"
mkdir -p ".fractal-planner/plans/${planId}"
```

Capture the echoed `planId`. **Do not proceed until it is a non-empty string and the directory exists.**

After confirming the directory, scan for interrupted implementation sessions:

```bash
grep -rl "IN_PROGRESS" .fractal-planner/plans/*/progress.md 2>/dev/null
```

For each matching file path, extract the planId from the path (the segment between `plans/` and `/progress.md`) and show a non-blocking notice to the user:

> Notice: Plan `{planId}` has an interrupted implementation session. Run `/fp:implement {planId}` to resume it.

This is informational only — continue to Step 3 regardless.

## Step 3: Resolve Plugin Root & Environment

This SKILL.md is located at `skills/fp/SKILL.md` relative to the plugin root. From the skill/plugin metadata in your context, determine the **absolute path** to the plugin root directory (the ancestor containing `.claude-plugin/`). Store it as `PLUGIN_ROOT`.

Run the environment resolver (single bash call — returns plugin root, CLI runner, CLI dir, and full merged config):

```bash
CLAUDE_PLUGIN_ROOT="<PLUGIN_ROOT>" bash "<PLUGIN_ROOT>/skills/fp/scripts/resolve-env.sh"
```

This outputs four key-value lines. Parse them:
- **PLUGIN_ROOT** — absolute path to the plugin repository root
- **CLI_RUNNER** — `bun` or `node`
- **CLI_DIR** — absolute path to CLI helper directory (source TS or compiled JS)
- **CONFIG_JSON** — full merged configuration as a JSON object

From CONFIG_JSON, extract and remember these for all subsequent steps:
- `maxComplexity` (default: 3) — used in Step 7, Step 7.5
- `maxIterations` (default: 3) — used in Step 7
- `maxParallelTasks` (default: 1) — passed to implement (controls parallel wave execution)
- `researchOnly` (default: false) — if true, stop after Step 6
- `planOnly` (default: false) — if true, stop after Step 8
- `skipPlanReview` (default: false) — if true, skip Step 9 plan review gate
- `preAnalysis` (default: true) — if true, run fp-analyst for complex intents (Step 4.7)
- `noCommit` (default: false) — passed to implement
- `linear.enabled` (default: false) — controls Step 9/10
- `linear.teamId`, `linear.projectId`, `linear.userId` — used in Step 10

If CONFIG_JSON contains `"_error"`, use defaults: maxComplexity=3, maxIterations=3, maxParallelTasks=1, all booleans false, linear disabled.

## Step 4: Classify Intent

Run the deterministic intent classifier using CLI_RUNNER and CLI_DIR from Step 3:

```bash
${CLI_RUNNER} ${CLI_DIR}/classify-intent.* "<goal text>"
```

This outputs JSON: `{ "intent": "...", "strategy": { "researchFirst": ..., "focusAreas": [...], "initialQuestions": [...], "researchPrompts": [...] } }`

Capture the output for the next step.

## Step 4.5: Quick Project Structure Scan

Get a snapshot of the project structure to seed the interviewer with directory awareness:

```bash
ls -1 src/ 2>/dev/null | head -20
```

Capture this output as `PROJECT_STRUCTURE` for the next step.

## Step 4.7: Pre-Interview Analysis (conditional)

If **both** of the following are true, spawn the pre-interview analyst:
- `preAnalysis` (from Step 3) is `true`
- The intent from Step 4 is one of: `mid-sized`, `build-from-scratch`, `architecture`

Otherwise, skip this step and set `preAnalysisFindings` to `null`.

If running the analyst:

```
Task(
  subagent_type: "fp-analyst",
  description: "Pre-interview codebase analysis",
  mode: "acceptEdits",
  prompt: "Analyze the codebase for hidden complexity and risk factors before the requirements interview.

Goal: <goal text>
Intent: <intent from Step 4>
Plan directory: .fractal-planner/plans/<planId>

Write pre-analysis.md to the plan directory."
)
```

After the analyst completes, read `.fractal-planner/plans/{planId}/pre-analysis.md` and extract:
- `hiddenComplexityFlags` — key complexity findings
- `riskItems` — high-risk areas
- `ambiguityCandidates` — terms/choices needing clarification
- `suggestedFocusAreas` — recommended interview topics

Store all of this as `preAnalysisFindings` for use in Step 5b (injected into the interviewer prompt).

## Step 5: Requirements Interview (Phase 0)

The interview phase uses an **agent team** so the interviewer can ask the user questions via you (the lead). You relay questions to the user with `AskUserQuestion` and forward answers back.

### Step 5a: Create Interview Team

```
TeamCreate(team_name: "fp-interview-<planId>")
```

You are now the team lead with agent name **`team-lead`**.

### Step 5b: Spawn Interviewer Teammate

Spawn the interviewer as a teammate (NOT a subagent):

```
Task(
  subagent_type: "general-purpose",
  name: "interviewer",
  team_name: "fp-interview-<planId>",
  description: "Requirements interview",
  mode: "acceptEdits",
  prompt: "You are the requirements interviewer on the fp-interview-<planId> team.

Your job is to conduct a research-grounded, iterative requirements interview. You CANNOT talk to the user directly — send all questions to the team lead via SendMessage, and the lead will relay user answers back to you.

## Inputs

- Goal: <goal text>
- Intent: <intent from step 4>
- Question Strategy:
  - Focus areas: <focusAreas from step 4>
  - Initial questions: <initialQuestions from step 4>
- Research Prompts: <researchPrompts from step 4, one per line — if empty, skip the scan>
- Project Structure: <PROJECT_STRUCTURE from step 4.5>
- Pre-Analysis Findings: <if preAnalysisFindings is not null, paste pre-analysis.md contents; otherwise write 'none'>
- Plan directory: .fractal-planner/plans/<planId>

## Process

### 1. Quick Context Scan (before asking any questions)

For non-trivial intents, do a quick codebase scan before your first question. This grounds your questions in concrete findings instead of generic prompts.

If Pre-Analysis Findings are provided (not 'none'), use them to sharpen your focus — the analyst has already identified complexity flags and ambiguity candidates. Use those as your starting point and supplement with targeted additional scans rather than rediscovering them from scratch.

- Use Glob to find files matching goal keywords (e.g., **/*auth* for an auth feature)
- Use Grep for 2-3 targeted pattern searches guided by the research prompts
- Cap at ~5 tool calls — this is a quick scan, not deep research
- Record findings as working context for grounding questions

For trivial intent: skip the scan entirely, go straight to questions.

### 2. Ask Research-Grounded Questions

Send questions to the team lead via SendMessage using this structured format:

SendMessage(
  type: 'message',
  recipient: 'team-lead',
  summary: '<5-10 word summary>',
  content: 'QUESTIONS:

Q1:
<Your first research-grounded question>
OPTIONS:
- <option 1 label> | <option 1 description>
- <option 2 label> | <option 2 description>
- <option 3 label> | <option 3 description>
HEADER: <short label, max 12 chars>
MULTI_SELECT: <true/false>

Q2:
<Your second research-grounded question>
OPTIONS:
- <option 1 label> | <option 1 description>
- <option 2 label> | <option 2 description>
HEADER: <short label, max 12 chars>
MULTI_SELECT: <true/false>'
)

Up to Q4 max per message. Can still send just Q1 if only 1 question is needed.

Follow these rules:
- Batch up to 4 questions per message — this is the maximum AskUserQuestion supports. Collect all relevant questions for this round and send them together in a single QUESTIONS: message. Fewer is fine when fewer are needed.
- Start with the provided initial questions from the strategy, but rephrase them using your scan findings
- Provide meaningful options that guide thinking
- Adapt follow-up questions based on answers

Research-grounded question examples:

Instead of: 'Should this follow existing patterns in the codebase?'
Ask: 'I found your codebase uses the repository pattern in src/repos/. Should we follow that for the new data layer?'

Instead of: 'Are there similar features I can learn from?'
Ask: 'I found src/auth/oauth-handler.ts and src/auth/session.ts — should the new authentication extend these, or is this a separate auth system?'

Instead of: 'What libraries/frameworks should be used?'
Ask: 'Your package.json already includes zod for validation and express for routing. Should we use these for the new feature, or do you prefer alternatives?'

Instead of: 'Are there tests covering this code?'
Ask: 'I found test files in src/__tests__/ using bun:test. The module you want to refactor (src/utils/parser.ts) has no existing tests. Should we add tests first as a safety net?'

### 3. Receiving Answers

When the lead sends you a message starting with 'USER RESPONSE:', process **all** answers (Q1, Q2, etc.):
- Extract each numbered answer's selection and additional context
- Update the interview draft with all new information at once (see section 6)
- Continue to next question batch or achieve clearance

### 4. Gather Requirements in 7 Areas

- Core objective: What exactly needs to be accomplished?
- Scope inclusions: What's explicitly IN scope?
- Scope exclusions: What's explicitly OUT of scope?
- Technical decisions: Specific technologies, patterns, or approaches required?
- Constraints: Limitations, requirements, or boundaries?
- Success criteria: How do we know when it's done?
- Test strategy: How should this be tested?

### 5. Turn Protocol (strict termination rules)

Every turn MUST end with exactly one of:
1. A SendMessage to 'team-lead' with a QUESTIONS: batch (1-4 questions) (normal case — gathering more requirements)
2. Writing final artifacts + SendMessage 'CLEARANCE ACHIEVED' to 'team-lead' (all 6 checklist items pass)

Forbidden endings:
- Summaries without a question
- Passive statements like 'Let me know if you have questions'
- Analysis or commentary without an action (question or artifact write)

### 6. Initial Draft (before first question)

After the quick context scan and before asking your first question, write an initial draft to {plan directory}/interview.json with:
- intent and userGoal from the inputs
- codebaseContext populated from your scan findings (but testStrategy left empty — this requires user confirmation)
- All other fields empty (confirmedRequirements: [], scopeInclusions: [], etc.)

This establishes a baseline. Track your round number starting at 1 (incremented after each user response).

### 7. Mandatory Draft Update Loop

After EVERY user response (USER RESPONSE message from lead), follow this exact sequence:

1. Increment round number
2. Read the current draft from {plan directory}/interview.json
3. Update the draft with new information from the user's response
4. Write the updated draft back to {plan directory}/interview.json
5. Send a draft status message to the lead:
   SendMessage(type: 'message', recipient: 'team-lead', summary: 'Draft updated round N', content: 'DRAFT UPDATED (Round N)\nClearance: M/6 passed\nGaps: <list remaining gaps>')
6. Evaluate clearance — you MUST explicitly enumerate each item (see section 8). Output the evaluation in your thinking before deciding next action.
7. If clearance NOT achieved: identify which items still fail, then send a QUESTIONS: batch targeting the most critical gaps
8. If clearance achieved: write final artifacts (interview.json + interview.md) and send:
   SendMessage(type: 'message', recipient: 'team-lead', summary: 'Clearance achieved', content: 'CLEARANCE ACHIEVED\nArtifacts written to .fractal-planner/plans/<planId>/')

### 8. Evaluate Clearance (6-item checklist)

After each draft update, you MUST explicitly evaluate each item and output the result in this format before deciding your next action:

Clearance Evaluation (Round N):
1. Core objective defined: [PASS/FAIL] — <reason>
2. Scope boundaries established: [PASS/FAIL] — <reason>
3. No ambiguities: [PASS/FAIL] — <reason>
4. Technical approach decided: [PASS/FAIL] — <reason>
5. No blocking questions: [PASS/FAIL] — <reason>
6. Test strategy identified: [PASS/FAIL] — <reason>
Result: [N/6 passed — CLEARANCE NOT MET / CLEARANCE ACHIEVED]

The 6 conditions:
1. Core objective defined: User has explicitly confirmed at least 1 requirement (goal text alone is NOT sufficient — the user must have validated something)
2. Scope boundaries established: At least 1 scope inclusion AND at least 1 scope exclusion
3. No ambiguities: At least 1 confirmed requirement exists AND no unvalidated assumptions remain
4. Technical approach decided: At least 1 technical decision made (auto-pass for trivial)
5. No blocking questions: Zero open questions remaining
6. Test strategy identified: User has confirmed a test approach (either via explicit answer or a test-related technicalDecisions key). Scan findings alone do NOT satisfy this — the user must have weighed in. (Auto-pass for trivial)

Continue asking until ALL 6 conditions are met.

### 9. Complexity-Based Behavior

- trivial: Quick scan skipped. 1 confirmation question. Items 4, 5, 6 auto-pass if no blockers.
- mid-sized, refactoring, build-from-scratch: Minimum 2 rounds before clearance can pass.
- architecture: Minimum 3 rounds before clearance can pass.

### 10. Write Output Artifacts

Once clearance is achieved, write two files to the plan directory:

interview.json (machine-readable):
{
  'intent': '<intent type>',
  'userGoal': '<original goal>',
  'confirmedRequirements': ['...'],
  'scopeInclusions': ['...'],
  'scopeExclusions': ['...'],
  'technicalDecisions': { 'key': 'value' },
  'constraints': ['...'],
  'assumptions': ['...'],
  'openQuestions': [],
  'codebaseContext': {
    'relevantFiles': ['files found during scan'],
    'existingPatterns': ['patterns observed'],
    'testStrategy': 'how this should be tested'
  }
}

interview.md (human-readable summary):
# Requirements Interview
## Goal
[Original goal]
## Intent
[trivial|refactoring|build-from-scratch|mid-sized|architecture]
## Codebase Context
- Relevant files: [files found during quick scan]
- Existing patterns: [patterns observed]
- Test strategy: [how this will be tested]
## Confirmed Requirements
- [List of validated requirements]
## Scope
### Inclusions
- [What's explicitly in scope]
### Exclusions
- [What's explicitly out of scope]
## Technical Decisions
- [Technology choices, patterns, approaches]
## Constraints
- [Limitations, requirements, boundaries]
## Success Criteria
- [How we know it's done]
## Open Questions
- [Any remaining questions or assumptions]

## Important

- NEVER skip the interview — even for trivial tasks, confirm scope
- If the user seems impatient, explain why requirements clarity prevents rework
- Keep questions focused on the strategy's focus areas
- Write both interview.json AND interview.md before finishing
- Ground questions in concrete codebase findings — never ask generic questions when you have scan data"
)
```

**IMPORTANT**: After spawning, do NOT call `TaskOutput` on the interviewer — it is a teammate, not a background task. Messages will arrive automatically via the team message system. Simply proceed to the relay loop below and wait.

### Step 5c: Relay Loop

You are now the relay between the interviewer and the user. Follow this protocol:

1. **Wait for messages** from the interviewer — they are delivered automatically, no polling needed.

2. **On `QUESTIONS:` message**: Parse all question blocks (Q1 through Q4) from the structured content:
   - For each `QN:` block, extract: question text, options (label | description), header, multi-select flag
   - Call `AskUserQuestion` once with all parsed questions (1-4 questions in a single call)
   - When the user answers, format ALL answers into a single response and forward back:
     ```
     SendMessage(
       type: "message",
       recipient: "interviewer",
       summary: "User responses to N questions",
       content: "USER RESPONSE:\n\nQ1: User selected: \"<option>\"\nAdditional context: <text>\n\nQ2: User selected: \"<option>\"\nAdditional context: <text>"
     )
     ```

3. **On `DRAFT UPDATED` message**: Informational only — no action needed. You may briefly note the clearance status if useful.

4. **On `CLEARANCE ACHIEVED` message**: Exit the relay loop, proceed to Step 5d.

5. **On `ERROR:` message**: Report the error to the user and stop.

6. **Safety limit**: If you've relayed 30 round trips without clearance, warn the user and proceed to Step 5d anyway.

### Step 5d: Interview Cleanup

1. Shut down the interviewer:
   ```
   SendMessage(type: "shutdown_request", recipient: "interviewer", content: "Interview complete, shutting down.")
   ```

2. Delete the team:
   ```
   TeamDelete()
   ```

3. Read `.fractal-planner/plans/${planId}/interview.json` to get the structured findings for subsequent phases.

## Step 6: Research & Context Building (Phase 1)

Read `interview.json` from the plan directory. Extract the **Research Agenda**:
- `codebaseContext.relevantFiles` — files the interviewer already identified as relevant
- `technicalDecisions` — decisions that need verification or implementation detail
- `scopeExclusions` — areas to avoid during research

Spawn **both** research agents in parallel using `run_in_background: true`:

```
Task(
  subagent_type: "fp-researcher",
  description: "Codebase research for planned feature",
  run_in_background: true,
  mode: "acceptEdits",
  prompt: "Research the codebase for the following planned feature.

Goal: <goal text>

Interview Findings:
<paste interview.json contents>

Research Agenda:
- Confirmed relevant files (from interviewer scan — verify and explore deeper):
  <codebaseContext.relevantFiles from interview.json, one per line — or 'none identified'>
- Technical decisions to verify:
  <technicalDecisions from interview.json as key: value pairs — or 'none'>
- Scope exclusions (do NOT research these areas):
  <scopeExclusions from interview.json, one per line — or 'none'>

Plan directory: .fractal-planner/plans/<planId>

Write research.md to the plan directory. Do NOT write context.md (that is handled by a parallel agent)."
)
```

```
Task(
  subagent_type: "fp-context-builder",
  description: "Build codebase context summary",
  run_in_background: true,
  mode: "acceptEdits",
  prompt: "Build a static codebase context summary.

Plan directory: .fractal-planner/plans/<planId>

Write context.md to the plan directory."
)
```

Both agents run in parallel. **Wait for both** to complete by calling TaskOutput on both task IDs in a single message (parallel blocking calls). Then read `research.md` and `context.md` from the plan directory.

**If `researchOnly` (from Step 3) is true**: After both agents complete, read `research.md` and `context.md`, present a summary to the user, and stop.

## Step 7: Fractal Decomposition (Phase 2)

Read research.md and context.md, then spawn the decomposer agent:

```
Task(
  subagent_type: "fp-decomposer",
  description: "Task decomposition",
  mode: "acceptEdits",
  prompt: "Decompose the following goal into a task tree.

Goal: <goal text>

Interview Findings:
<paste interview.json contents>

Research Findings:
<paste research.md contents>

Max Complexity: <maxComplexity from Step 3>

Scope Exclusions (use as guardrails on relevant tasks):
<paste scopeExclusions array from interview.json, one per line — if empty, write 'none'>

Test Strategy: <paste testStrategy from interview.json codebaseContext, or 'not specified'>

Plan directory: .fractal-planner/plans/<planId>

Write tasks.md to the plan directory."
)
```

## Step 7.5: Validate Task Tree

Run the deterministic task tree validator using CLI_RUNNER and CLI_DIR from Step 3:

```bash
${CLI_RUNNER} ${CLI_DIR}/validate-tasks.* "${planId}" ${maxComplexity}
```

This outputs JSON: `{ "valid": true/false, "maxComplexity": N, "totalLeafTasks": N, "violations": [...], "stats": {...} }`

**If `valid: true`**: Proceed to Step 8.

**If `valid: false`**: Re-spawn the decomposer to fix violations. Repeat up to **5 retries** (6 total decomposition passes):

1. Read the current `tasks.md` from the plan directory.
2. Spawn `fp-decomposer` with targeted instructions:

```
Task(
  subagent_type: "fp-decomposer",
  description: "Fix task tree violations",
  mode: "acceptEdits",
  prompt: "The task tree validation found violations. Fix ONLY the flagged tasks — preserve everything else.

Goal: <goal text>

Max Complexity: <maxComplexity>

Violations:
<for each violation: '- Task {id} [{type}]: {detail}'>

Current tasks.md:
<paste full tasks.md contents>

Instructions per violation type:
- [over-complexity]: Decompose the task into smaller subtasks, each at or below maxComplexity. Do NOT lower complexity scores to game the threshold.
- [missing-acceptance]: Add concrete, measurable acceptance criteria to the leaf task.
- [missing-files]: Add a Files: line listing the files this task will modify (use 'none' only if truly no files are touched).
- [missing-tests-required]: Add a Tests Required: line (yes/no) to the leaf task.
- [missing-hints]: Add 2-4 implementation steps as a Hints: block. Tell the builder HOW to implement, not just WHAT.
- [subtask-count]: Merge or split children so the parent has 2-5 subtasks.

General:
- Do NOT change tasks that already pass validation
- Write the updated tasks.md to: .fractal-planner/plans/<planId>/tasks.md"
)
```

3. After the decomposer completes, re-run `validate-tasks` CLI.
4. If still invalid and retries remain, repeat from step 1.
5. If still invalid after 6 total passes, warn: "Task tree still has violations after 6 decomposition passes. Proceeding with current tree." and continue to Step 7.6.

## Step 7.6: Plan Quality Critique

Spawn the plan critic agent:

```
Task(
  subagent_type: "fp-critic",
  description: "Plan quality critique",
  mode: "acceptEdits",
  prompt: "Evaluate the quality of the task decomposition.

Tasks file: .fractal-planner/plans/<planId>/tasks.md
Interview file: .fractal-planner/plans/<planId>/interview.json
Plan directory: .fractal-planner/plans/<planId>

Read both files and write critique.md to the plan directory."
)
```

After the critic completes, read `.fractal-planner/plans/{planId}/critique.md`. Parse the `Overall Result` line to extract:
- `critiqueResult`: PASS, WARN, or FAIL
- `failCount` and `warnCount` from the CRITIQUE COMPLETE output or the critique.md summary

**If `critiqueResult` is FAIL** (re-decomposition loop, independent retry counter, max 3 passes):

1. Read the current `tasks.md` and the `## Recommendations` section from `critique.md`.
2. Spawn `fp-decomposer` with targeted critique feedback:

```
Task(
  subagent_type: "fp-decomposer",
  description: "Fix critic-flagged quality issues",
  mode: "acceptEdits",
  prompt: "The plan quality critic found issues. Fix ONLY the flagged tasks — preserve everything else.

Goal: <goal text>
Max Complexity: <maxComplexity>

Critic Recommendations:
<paste Recommendations section from critique.md>

Current tasks.md:
<paste full tasks.md>

Write the updated tasks.md to: .fractal-planner/plans/<planId>/tasks.md"
)
```

3. Re-run `validate-tasks` CLI (Step 7.5) on the updated tree.
4. Re-spawn the critic (Step 7.6) on the updated tree.
5. If still FAIL and critic retries remain, repeat from step 1.
6. If still FAIL after 3 critic-triggered passes, warn: "Plan quality still has FAIL findings after 3 critic passes. Proceeding to Step 8." and continue.

**If `critiqueResult` is WARN**: Store `critiqueWarnings` (the list of WARN findings from `critique.md`). They will be surfaced in Step 9.

**If `critiqueResult` is PASS**: Proceed to Step 8.

## Step 8: Generate Plan (Phase 3)

Run the deterministic plan generator using CLI_RUNNER and CLI_DIR from Step 3:

```bash
${CLI_RUNNER} ${CLI_DIR}/generate-plan.* "<planId>"
```

This reads `tasks.md`, computes execution order, and writes `plan.md`.

## Step 9: Plan Review & Confirmation Gate

If `skipPlanReview` (from Step 3) is `true`, skip directly to Step 10.

Read both `tasks.md` and `plan.md` from the plan directory. From `plan.md`, count the total leaf tasks in the `## Execution Order` section. From `tasks.md`, build a condensed tree view showing the full parent-child hierarchy.

Present the tree like this:

```
Here is the task breakdown (N leaf tasks will execute in dependency order):

- **[1]** Auth system overhaul (Complexity: 8)
  - **[1.1]** Add JWT middleware (Complexity: 4) — `src/middleware/auth.ts`
  - **[1.2]** Update login endpoint (Complexity: 4) — `src/routes/login.ts`, `src/services/auth.ts`
- **[2]** Add tests (Complexity: 5)
  - **[2.1]** Unit tests (Complexity: 3) — `src/__tests__/auth.test.ts`
  - **[2.2]** Integration tests (Complexity: 2) — `src/__tests__/login.integration.ts`

**Summary**: 4 leaf tasks, complexity range 2-4, across ~5 files
```

Format rules:
- Full parent-child hierarchy with nested `- ` bullets (2-space indent per level)
- Every task: `**[ID]** Description (Complexity: N)`
- Leaf tasks only: append `` — `file1`, `file2` `` if files are listed in the task
- Omit acceptance criteria, dependencies, and tests-required (builder/verifier details, not needed for approval)
- Summary line at the end: leaf count, complexity range (min-max of leaf tasks), approximate file count (unique files across all leaf tasks)

If the plan critic (Step 7.6) found WARN items (`critiqueWarnings` is not empty), surface them before the user options:

> **Plan Quality Notices** (from automated review):
> {list each warning from critiqueWarnings, one per line}
> These are warnings only — the plan is valid but may benefit from refinement.

Then call `AskUserQuestion` with options that adapt based on `linear.enabled`:

**If `linear.enabled` is `true`** (3 options):
- **"Create Linear issues"** — proceed to Step 10
- **"Skip Linear and proceed"** — skip to Step 11
- **"Discuss the plan more"** — enter discussion loop

**If `linear.enabled` is `false`** (2 options):
- **"Proceed to implementation"** — skip to Step 11
- **"Discuss the plan more"** — enter discussion loop

**Discussion loop**: If the user picks "Discuss the plan more", address their feedback or questions, then re-present the same options via `AskUserQuestion`. Loop until the user picks a "proceed" or "create" option. This loop is for Q&A only — it does NOT modify plan.md or tasks.md.

## Step 10: Linear Sync (Phase 3.5, conditional)

Only runs if the user chose "Create Linear issues" in Step 9.

Read `plan.md` from the plan directory (`.fractal-planner/plans/<planId>/plan.md`).

Spawn the Linear sync agent in the **foreground** (do NOT use `run_in_background`):

```
Task(
  subagent_type: "fp-linear-sync",
  description: "Linear issue sync",
  mode: "acceptEdits",
  prompt: "Create Linear issues for the task tree.

The user has already reviewed and approved this plan. Proceed directly to issue creation without an additional preview confirmation.

Tasks:
<paste tasks.md contents>

Execution Order:
<paste plan.md contents>

Linear Config:
- teamId: <linear.teamId from Step 3>
- projectId: <linear.projectId from Step 3, if set>
- userId: <linear.userId from Step 3, if set>
- statusMap: <from config, if set>

Plan directory: .fractal-planner/plans/<planId>
Plan ID: <planId>

Write linear-mapping.json to the plan directory."
)
```

## Step 11: Present Results

Read `tasks.md` from the plan directory and present the condensed tree view (same format as Step 9: full parent-child hierarchy with IDs, complexity, and file hints on leaf tasks, plus the summary line). If Step 9 already ran and the tree was shown there, skip re-presenting the tree and just note the plan is ready.

After the tree (or the note that it was already shown), always include:

```
## Next Steps

To start implementation, clear context and run:

/fp:implement <planId>
```

If `planOnly` (from Step 3) is true, note that execution was skipped per config.

## Error Handling

- If any subagent fails, report the error clearly and suggest next steps
- If the interview team fails, ensure cleanup: shut down the interviewer and delete the team before reporting the error
- If the intent classifier or plan generator CLI fails, report the error with the command output
- If Linear sync fails, log a warning but continue — the plan is still valid without Linear

## Important

- **ALWAYS** use configuration from Step 3 (pre-injected at skill load time) — config values control complexity thresholds, flow gates, and Linear integration
- **ALWAYS** run phases in order: interview -> research+context (parallel) -> decomposition -> (critique) -> planning -> (confirmation gate) -> (linear) -> present results
- **NEVER** skip the interview — even for trivial tasks
- Pass data between phases via the plan directory files
- Each agent writes its own artifacts — do not write their files for them
- Confirmation gate (Step 9) fires for ALL users unless `skipPlanReview === true` in config
- Step 9 options adapt based on `linear.enabled` — Linear-specific options only shown when Linear is configured
- Linear sync (Step 10) must run in the **foreground** — never use `run_in_background`
