/**
 * Execution Phase
 *
 * Coordinates builder/verifier agent teams to implement tasks
 * with iterative feedback until acceptance criteria are met.
 */

import type { Task, ExecutionResult, VerificationReport } from '../types/index.js';

/**
 * Execute a single task using builder/verifier pattern
 *
 * NOTE: This is a template that will be executed within Claude Code's
 * Agent Teams context, not directly via the Agent SDK.
 */
export async function executeTaskWithVerification(
  task: Task,
  maxIterations: number = 3
): Promise<ExecutionResult> {
  console.log(`  ⚙️  Executing task: ${task.id}`);

  // This will be replaced with actual Agent Teams coordination
  // For now, we generate the prompt that Claude Code will interpret

  const builderVerifierPrompt = generateBuilderVerifierPrompt(task, maxIterations);

  console.log('\n' + builderVerifierPrompt + '\n');

  // Placeholder execution result
  const result: ExecutionResult = {
    taskId: task.id,
    success: false,
    iterations: 0,
    verificationReport: {
      verified: false,
      passedCriteria: [],
      failedCriteria: [],
      feedback: 'Not yet implemented - requires Agent Teams execution'
    }
  };

  return result;
}

/**
 * Generate a prompt for Claude Code to execute with Agent Teams
 */
function generateBuilderVerifierPrompt(task: Task, maxIterations: number): string {
  return `
I need to implement this task using a builder/verifier agent team pattern:

## Task: ${task.id}
${task.description}

## Acceptance Criteria
${task.acceptanceCriteria.map((c, i) => `${i + 1}. ${c}`).join('\n')}

${task.metadata?.filesToModify ? `\n## Files to Modify\n${task.metadata.filesToModify.map(f => `- ${f}`).join('\n')}` : ''}

## Process

Please coordinate a builder and verifier agent team:

1. **Builder Agent**:
   - Implement the task according to the description
   - Follow existing code patterns and conventions
   - Write tests if required
   - Signal completion when done

2. **Verifier Agent**:
   - Review the implementation
   - Check each acceptance criterion
   - Provide specific feedback on failures
   - Approve if all criteria are met

3. **Iteration**:
   - If verification fails, builder fixes issues based on feedback
   - Repeat up to ${maxIterations} times
   - Report final success or failure

Use the TeammateTool to spawn and coordinate:
- Teammate "builder" with tools: Read, Edit, Write, Bash
- Teammate "verifier" with tools: Read, Grep, Bash

Ensure clear communication between agents about what passed/failed.
`;
}

/**
 * Execute all tasks in a plan sequentially
 */
export async function executePlan(
  tasks: Task[],
  maxIterations: number = 3
): Promise<ExecutionResult[]> {
  console.log(`\n  📦 Executing ${tasks.length} tasks...`);

  const results: ExecutionResult[] = [];

  for (const task of tasks) {
    const result = await executeTaskWithVerification(task, maxIterations);
    results.push(result);

    if (!result.success) {
      console.log(`  ✗ Task ${task.id} failed after ${result.iterations} iterations`);
      console.log(`    Feedback: ${result.verificationReport.feedback}`);
    } else {
      console.log(`  ✓ Task ${task.id} completed in ${result.iterations} iterations`);
    }
  }

  const successCount = results.filter(r => r.success).length;
  console.log(`\n  Summary: ${successCount}/${tasks.length} tasks completed successfully`);

  return results;
}
