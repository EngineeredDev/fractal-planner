---
name: fp:plan
description: Iterative planning and execution framework with requirements interview, research, decomposition, and builder/verifier teams. Use for complex feature implementation that needs careful planning.
context: fork
agent: Plan
allowed-tools: AskUserQuestion, Read, Write, Edit, Glob, Grep, Task, mcp__linear-server__create_issue, mcp__linear-server__list_issue_statuses, mcp__linear-server__list_teams
---

# Fractal Planner

You are orchestrating the fractal planning and execution framework. This framework breaks down complex features into progressively smaller tasks through iterative clarification, research, and decomposition.

## Your Task

Implement the following goal using the fractal planning process:

**Goal**: $ARGUMENTS

## Process

### Phase 0: Requirements Interview ��

**CRITICAL**: Before doing ANYTHING else, conduct a thorough requirements interview using AskUserQuestion.

1. **Classify the intent** of the user's goal:
   - Is this a new feature, bug fix, refactoring, or research task?
   - What's the scope: small enhancement, medium feature, or large system change?

2. **Ask clarifying questions** using the AskUserQuestion tool:
   - Ask 1-2 questions at a time (don't overwhelm)
   - Focus on critical gaps: core objective, scope boundaries, technical approach
   - Provide meaningful options that help guide thinking
   - Use multiSelect when multiple choices make sense

3. **Gather requirements in these areas**:
   - **Core objective**: What exactly needs to be accomplished?
   - **Scope inclusions**: What's explicitly IN scope?
   - **Scope exclusions**: What's explicitly OUT of scope?
   - **Technical decisions**: Any specific technologies, patterns, or approaches required?
   - **Constraints**: Any limitations, requirements, or boundaries?
   - **Success criteria**: How do we know when it's done?

4. **Continue asking** until you have:
   - ✓ Clear understanding of the core objective
   - ✓ Well-defined scope boundaries (what's in AND what's out)
   - ✓ No critical ambiguities
   - ✓ Technical approach decided (for non-trivial tasks)
   - ✓ No blocking questions remaining

5. **Document findings** in `.fractal-planner/plans/${CLAUDE_SESSION_ID}/interview.md`:
   ```markdown
   # Requirements Interview

   ## Goal
   [Original goal]

   ## Intent
   [feature|bugfix|refactor|research]

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
   ```

**DO NOT proceed to the next phase until the interview is complete!**

### Phase 1: Research & Gap Analysis 📚

Once requirements are clear, analyze the codebase:

1. **Use Glob and Grep** to find relevant files:
   - Existing implementations of similar features
   - Related components and modules
   - Test files and examples
   - Configuration and setup files

2. **Document findings** in `.fractal-planner/plans/${CLAUDE_SESSION_ID}/research.md`:
   - Existing patterns that should be followed
   - Potential challenges or blockers
   - Dependencies that need to be considered
   - Integration points with existing code

3. **Identify gaps**:
   - What exists vs. what needs to be built
   - Which patterns to follow vs. which are new
   - Testing approach based on existing tests

4. **Produce codebase context file** in `.fractal-planner/plans/${CLAUDE_SESSION_ID}/context.md`:
   This captures the codebase understanding you've already gathered in a builder-friendly format. Builder/verifier teammates will use this to skip redundant codebase exploration.

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

### Phase 2: Fractal Decomposition 🌳

Break down the task into progressively smaller subtasks:

1. **Start with the root task** (the main goal)

2. **For each task**, assess complexity (1-10):
   - 1-5: Can be implemented directly
   - 6-10: Needs to be decomposed further

3. **Decompose high-complexity tasks** into 2-5 subtasks:
   - Each subtask should be simpler than the parent
   - Subtasks should have clear dependencies
   - Continue until all leaf tasks are ≤ 5 complexity

4. **Document the task tree** in `.fractal-planner/plans/${CLAUDE_SESSION_ID}/tasks.md`:
   ```markdown
   # Task Decomposition

   ## Root Task
   - [ID: root] [Description] (Complexity: X)

   ### Subtasks
   - [ID: 1.1] [Description] (Complexity: X)
     - [ID: 1.1.1] [Description] (Complexity: X)
     - [ID: 1.1.2] [Description] (Complexity: X)
   - [ID: 1.2] [Description] (Complexity: X)
   ```

### Phase 2.5: Linear Sync (if enabled)

**Check config**: Read `.fractal-planner/config.json` and check for `linear.enabled`. If `false` or missing, **skip this entire phase**.

If Linear is enabled:

1. **Verify Linear MCP is available**: Call `mcp__linear-server__list_teams` as a health check. If it fails (tool not found or connection error), log a warning — "Linear MCP server not available, skipping Linear sync" — and skip this phase. Do NOT fail the planning run.

2. **Resolve status IDs**:
   - Call `mcp__linear-server__list_issue_statuses` for the configured `linear.teamId`
   - **If `statusMap` is configured**: For each status name in the map, find the matching status by name in the team's statuses. If a name doesn't match, fall back to auto-detect for that status and log a warning.
   - **If `statusMap` is NOT configured** (default): Auto-detect by status **type**:
     - `pending` → first status of type `backlog` (or `unstarted` if no backlog)
     - `in-progress` → first status of type `started`
     - `completed` → first status of type `completed`
     - `failed` → first status of type `canceled`
   - Store the resolved status UUIDs for each fractal-planner status.

3. **Preview & confirm**: Before creating any issues, present the user with a summary of all planned issues using `AskUserQuestion`:
   - Build a bulleted list from the task tree, using indentation to reflect hierarchy:
     ```
     Will create {N} issues in team {teamId}{project ? ", project " + projectName : ""}:
     - Root task description (parent)
       - Subtask 1.1 description (parent)
         - Subtask 1.1.1 description (leaf)
         - Subtask 1.1.2 description (leaf)
       - Subtask 1.2 description (leaf)
     ```
   - Label each task as `(parent)` or `(leaf)` so the user knows which are containers vs. actionable work
   - Options: **"Create these issues"** / **"I want to make changes first"**
   - If the user picks "I want to make changes first", ask what they'd like to change, adjust the task list accordingly, and re-present the summary for confirmation
   - Only proceed to step 4 after the user explicitly approves with "Create these issues"

4. **Create Linear issues**: Walk the task tree **top-down** (BFS or pre-order DFS) so parent issue IDs are available when creating children. Create issues **one at a time, in implementation order** (the order tasks should be worked on). This ensures `createdAt` ordering in Linear reflects the intended task sequence. Within each level, create tasks in their defined order before descending to children. For each task, call `mcp__linear-server__create_issue`:
   - `title`: `{task.description}`
   - `team`: config `linear.teamId`
   - `project`: config `linear.projectId` (if set)
   - `assignee`: config `linear.userId` (if set)
   - `parentId`: Linear issue ID of the parent task (omit for root)
   - `state`: resolved "pending" status ID
   - `description`: For **leaf tasks**, include acceptance criteria as a markdown checklist, dependencies, and files to modify. For **non-leaf tasks**, include a summary noting it's a parent container.

5. **Write mapping file**: Save `.fractal-planner/plans/${CLAUDE_SESSION_ID}/linear-mapping.json`:
   ```json
   {
     "planId": "${CLAUDE_SESSION_ID}",
     "teamId": "...",
     "projectId": "...",
     "resolvedStatuses": {
       "pending": "status-uuid-1",
       "in-progress": "status-uuid-2",
       "completed": "status-uuid-3",
       "failed": "status-uuid-4"
     },
     "tasks": {
       "root": { "linearIssueId": "...", "linearIdentifier": "TEAM-42" },
       "1":    { "linearIssueId": "...", "linearIdentifier": "TEAM-43" },
       "1.1":  { "linearIssueId": "...", "linearIdentifier": "TEAM-44" }
     }
   }
   ```

6. **Log summary**: "Created {N} Linear issues under team {teamId}" with a list of issue identifiers.

### Phase 3: Implementation Planning 📋

Create a detailed execution plan:

1. **Determine execution order** based on dependencies:
   - Which tasks must be done first?
   - Which can be parallelized?
   - What's the critical path?

2. **Add acceptance criteria** for each task:
   - How do we verify it's correct?
   - What tests are needed?
   - What documentation is required?

3. **Create the plan** in `.fractal-planner/plans/${CLAUDE_SESSION_ID}/plan.md`:
   ```markdown
   # Implementation Plan

   ## Execution Order
   1. [Task ID]: [Description]
      - Dependencies: [List]
      - Acceptance: [Criteria]
   2. [Task ID]: [Description]
      - Dependencies: [List]
      - Acceptance: [Criteria]
   ```

4. **Present next steps** with a copy-pasteable command:

   After presenting the plan summary, always include:
   ```
   ## Next Steps

   To start implementation, clear context and run:

   /fp:implement ${CLAUDE_SESSION_ID}
   ```

   Replace `${CLAUDE_SESSION_ID}` with the actual session ID used for this plan. This gives the user an exact command they can copy/paste.

   If `--plan-only` was specified, stop here after presenting the plan and next steps.

### Phase 4: Execution ⚙️

**Note**: Full execution with builder/verifier teams requires Agent Teams to be enabled.

For each task in execution order:

1. **Use the Task tool** to spawn a builder agent:
   ```
   Task(
     subagent_type: "general-purpose",
     description: "Implement [task]",
     prompt: "Implement [task description] following [acceptance criteria]"
   )
   ```

2. **Verify the implementation**:
   - Does it meet acceptance criteria?
   - Do tests pass?
   - Does it follow existing patterns?

3. **Iterate if needed** (max 3 iterations per task):
   - If verification fails, spawn the builder again with feedback
   - Track iteration count to avoid infinite loops

4. **Move to next task** once current task passes verification

## Output

At the end, provide:

1. **Summary** of what was accomplished
2. **Task status**: How many succeeded/failed
3. **Next steps** if any tasks failed or were skipped

## Flags

You can modify behavior based on arguments:

- `--research-only`: Stop after Phase 1 (research only)
- `--plan-only`: Stop after Phase 3 (planning only, no execution)
- `--max-complexity <1-10>`: Maximum complexity before decomposition (default: 5)
- `--max-iterations <n>`: Maximum builder/verifier iterations per task (default: 3)

Parse these from `$ARGUMENTS` if present.

## Important Notes

- **ALWAYS start with the interview phase** - never skip it!
- **Use AskUserQuestion** for the interview - don't just proceed with assumptions
- **Document everything** in `.fractal-planner/plans/` for traceability
- **Follow existing patterns** discovered during research
- **Verify each step** before moving to the next phase

---

Begin with Phase 0: Requirements Interview. Ask your first clarifying question now.
