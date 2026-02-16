---
name: fp:plan
description: Iterative planning and execution framework with requirements interview, research, decomposition, and builder/verifier teams. Use for complex feature implementation that needs careful planning.
context: fork
agent: Plan
allowed-tools: AskUserQuestion, Read, Write, Edit, Glob, Grep, Task
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

5. **Document findings** in `.fractal-planner/drafts/interview-${CLAUDE_SESSION_ID}.md`:
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

2. **Document findings** in `.fractal-planner/drafts/research-${CLAUDE_SESSION_ID}.md`:
   - Existing patterns that should be followed
   - Potential challenges or blockers
   - Dependencies that need to be considered
   - Integration points with existing code

3. **Identify gaps**:
   - What exists vs. what needs to be built
   - Which patterns to follow vs. which are new
   - Testing approach based on existing tests

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

4. **Document the task tree** in `.fractal-planner/drafts/tasks-${CLAUDE_SESSION_ID}.md`:
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

3. **Create the plan** in `.fractal-planner/drafts/plan-${CLAUDE_SESSION_ID}.md`:
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
- **Document everything** in `.fractal-planner/drafts/` for traceability
- **Follow existing patterns** discovered during research
- **Verify each step** before moving to the next phase

---

Begin with Phase 0: Requirements Interview. Ask your first clarifying question now.
