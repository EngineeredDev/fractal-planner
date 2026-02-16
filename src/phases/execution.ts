/**
 * Execution Phase
 *
 * Coordinates builder/verifier agent teams to implement tasks
 * with iterative feedback until acceptance criteria are met.
 *
 * When Agent Teams are enabled, delegates to the fp:implement skill
 * via query(). Otherwise, falls back to a subagent-based approach.
 */

import { query } from '@anthropic-ai/claude-agent-sdk';
import type { Task, ExecutionResult, VerificationReport } from '../types/index.js';

/**
 * Validate that a task is a leaf (no subtasks) before execution
 */
function validateLeafTask(task: Task): void {
  if (task.subtasks && task.subtasks.length > 0) {
    throw new Error(
      `Task ${task.id} has ${task.subtasks.length} subtasks and cannot be executed directly. ` +
      `Only leaf tasks (tasks with no subtasks) can be executed.`
    );
  }
}

/**
 * Parse a verification report from agent output text.
 * Looks for the structured format produced by the verifier teammate.
 */
function parseVerificationReport(text: string): VerificationReport {
  const verified = /VERIFICATION PASSED/i.test(text);
  const passedCriteria: number[] = [];
  const failedCriteria: number[] = [];

  // Parse [PASS] and [FAIL] lines with criterion indices
  const passMatches = text.matchAll(/\[PASS\].*?criterion\s*(\d+)/gi);
  for (const match of passMatches) {
    passedCriteria.push(parseInt(match[1], 10) - 1); // convert to 0-based
  }

  const failMatches = text.matchAll(/\[FAIL\].*?criterion\s*(\d+)/gi);
  for (const match of failMatches) {
    failedCriteria.push(parseInt(match[1], 10) - 1); // convert to 0-based
  }

  // Fallback: count [PASS]/[FAIL] lines by order if no criterion numbers
  if (passedCriteria.length === 0 && failedCriteria.length === 0) {
    let index = 0;
    for (const line of text.split('\n')) {
      if (/\[PASS\]/i.test(line)) {
        passedCriteria.push(index++);
      } else if (/\[FAIL\]/i.test(line)) {
        failedCriteria.push(index++);
      }
    }
  }

  return {
    verified,
    passedCriteria,
    failedCriteria,
    feedback: text
  };
}

/**
 * Execute a single task using builder/verifier pattern via the fp:implement skill.
 *
 * This invokes query() which runs inline in the current session,
 * allowing the session to act as team lead for the agent team.
 */
export async function executeTaskWithVerification(
  task: Task,
  maxIterations: number = 3
): Promise<ExecutionResult> {
  validateLeafTask(task);

  console.log(`  ⚙️  Executing task: ${task.id}`);

  const prompt = buildExecutionPrompt(task, maxIterations);
  let resultText = '';

  try {
    for await (const message of query({
      prompt,
      options: {
        allowedTools: [
          'Read', 'Write', 'Edit', 'Bash', 'Glob', 'Grep',
          'AskUserQuestion', 'Task'
        ],
        permissionMode: 'default'
      }
    })) {
      if (message.type === 'assistant' && message.message?.content) {
        for (const block of message.message.content) {
          if ('text' in block) {
            resultText += block.text;
          }
        }
      }
    }
  } catch (error) {
    console.error(`  ✗ Execution failed for task ${task.id}:`, error);
    return {
      taskId: task.id,
      success: false,
      iterations: 0,
      verificationReport: {
        verified: false,
        passedCriteria: [],
        failedCriteria: [],
        feedback: `Execution error: ${error instanceof Error ? error.message : String(error)}`
      }
    };
  }

  const report = parseVerificationReport(resultText);

  // Extract iteration count from output
  const iterMatch = resultText.match(/iteration\s+(\d+)/i);
  const iterations = iterMatch ? parseInt(iterMatch[1], 10) : 1;

  return {
    taskId: task.id,
    success: report.verified,
    iterations,
    verificationReport: report
  };
}

/**
 * Build the execution prompt for a single task.
 * This prompt is interpreted by the session acting as team lead.
 */
function buildExecutionPrompt(task: Task, maxIterations: number): string {
  const criteria = task.acceptanceCriteria
    .map((c, i) => `${i + 1}. ${c}`)
    .join('\n');

  const files = task.metadata?.filesToModify
    ? task.metadata.filesToModify.map(f => `- ${f}`).join('\n')
    : 'Determine from context';

  const testsRequired = task.metadata?.testsRequired ? 'Yes' : 'No';

  return `Implement this task using a builder/verifier agent team:

## Task: ${task.id}
${task.description}

## Acceptance Criteria
${criteria}

## Files to Modify
${files}

## Tests Required
${testsRequired}

## Instructions

Create an agent team and coordinate implementation:

1. Spawn a **builder** teammate with tools: Read, Write, Edit, Bash, Glob, Grep
   - Instruct to implement the task with real code (no stubs/placeholders)
   - Must message verifier when complete

2. Spawn a **verifier** teammate with tools: Read, Grep, Glob, Bash
   - Checks each acceptance criterion
   - Messages builder on failure with fix instructions
   - Messages you (lead) on success with structured report

3. Track iterations (max ${maxIterations}). On max iterations failure, ask the user whether to continue or stop.

Report the final result with: VERIFICATION PASSED or VERIFICATION FAILED, iteration count, and criterion-by-criterion results.`;
}

/**
 * Execute all tasks in a plan sequentially
 */
export async function executePlan(
  tasks: Task[],
  maxIterations: number = 3
): Promise<ExecutionResult[]> {
  // Validate all tasks are leaves before starting
  for (const task of tasks) {
    validateLeafTask(task);
  }

  console.log(`\n  📦 Executing ${tasks.length} tasks...`);

  const results: ExecutionResult[] = [];
  const failedIds = new Set<string>();

  for (const task of tasks) {
    // Skip tasks whose dependencies failed
    const blockedBy = task.dependencies.filter(dep => failedIds.has(dep));
    if (blockedBy.length > 0) {
      console.log(`  ⊘ Task ${task.id} skipped (blocked by failed: ${blockedBy.join(', ')})`);
      results.push({
        taskId: task.id,
        success: false,
        iterations: 0,
        verificationReport: {
          verified: false,
          passedCriteria: [],
          failedCriteria: [],
          feedback: `Skipped: blocked by failed dependencies: ${blockedBy.join(', ')}`
        }
      });
      failedIds.add(task.id);
      continue;
    }

    const result = await executeTaskWithVerification(task, maxIterations);
    results.push(result);

    if (!result.success) {
      console.log(`  ✗ Task ${task.id} failed after ${result.iterations} iterations`);
      console.log(`    Feedback: ${result.verificationReport.feedback.slice(0, 200)}`);
      failedIds.add(task.id);
    } else {
      console.log(`  ✓ Task ${task.id} completed in ${result.iterations} iterations`);
    }
  }

  const successCount = results.filter(r => r.success).length;
  const skippedCount = results.filter(r =>
    r.verificationReport.feedback.startsWith('Skipped:')
  ).length;
  const failedCount = results.length - successCount - skippedCount;

  console.log(`\n  Summary: ${successCount} passed, ${failedCount} failed, ${skippedCount} skipped (${results.length} total)`);

  return results;
}
