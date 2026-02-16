/**
 * Fractal Decomposition Phase
 *
 * Recursively breaks down tasks into smaller subtasks until
 * each task is below the complexity threshold.
 */

import { query } from '@anthropic-ai/claude-agent-sdk';
import type { Task } from '../types/index.js';

/**
 * Recursively decompose a task into subtasks
 */
export async function decomposeTask(
  task: Task,
  maxComplexity: number = 4,
  depth: number = 0
): Promise<Task> {
  // Base case: task is simple enough
  if (task.estimatedComplexity <= maxComplexity) {
    console.log(`  ${'  '.repeat(depth)}✓ Task ${task.id} is manageable (complexity: ${task.estimatedComplexity})`);
    return task;
  }

  console.log(`  ${'  '.repeat(depth)}🌳 Decomposing task ${task.id} (complexity: ${task.estimatedComplexity})...`);

  const decompositionPrompt = `
Analyze this task and break it down into smaller, independent subtasks:

**Task**: ${task.description}

**Current Complexity**: ${task.estimatedComplexity}/10

**Target Complexity**: Each subtask should be ${maxComplexity}/10 or less

For each subtask, provide:
1. **Description**: Clear, actionable description
2. **Acceptance Criteria**: Specific, measurable criteria (3-5 items)
3. **Complexity Estimate**: 1-10 scale
4. **Dependencies**: IDs of other subtasks this depends on
5. **Files to Modify**: Estimated files that will be changed

Output valid JSON array of subtasks:
[
  {
    "description": "...",
    "acceptanceCriteria": ["criterion1", "criterion2"],
    "estimatedComplexity": 4,
    "dependencies": [],
    "metadata": {
      "filesToModify": ["path/to/file.ts"],
      "testsRequired": true
    }
  }
]

IMPORTANT: Break the task into logical, independent pieces. Each subtask should be
achievable by a single agent without getting lost or running out of context.
`;

  const subtasks: Task[] = [];

  try {
    for await (const message of query({
      prompt: decompositionPrompt,
      options: {
        allowedTools: ['Read', 'Grep'],
        permissionMode: 'default'
      }
    })) {
      if (message.type === 'assistant' && message.message?.content) {
        for (const block of message.message.content) {
          if ('text' in block) {
            // Extract JSON array from response
            const jsonMatch = block.text.match(/\[[\s\S]*\]/);
            if (jsonMatch) {
              try {
                const parsed = JSON.parse(jsonMatch[0]);
                subtasks.push(...parsed.map((st: any, idx: number) => ({
                  id: `${task.id}.${idx + 1}`,
                  description: st.description,
                  acceptanceCriteria: st.acceptanceCriteria || [],
                  estimatedComplexity: st.estimatedComplexity || 5,
                  dependencies: st.dependencies || [],
                  status: 'pending' as const,
                  metadata: st.metadata
                })));
              } catch (e) {
                console.error(`  ${'  '.repeat(depth)}✗ Failed to parse subtasks:`, e);
              }
            }
          }
        }
      }
    }
  } catch (error) {
    console.error(`  ${'  '.repeat(depth)}✗ Decomposition failed:`, error);
    throw error;
  }

  // Recursively decompose each subtask
  const decomposedSubtasks = await Promise.all(
    subtasks.map(st => decomposeTask(st, maxComplexity, depth + 1))
  );

  task.subtasks = decomposedSubtasks;
  return task;
}

/**
 * Calculate total number of leaf tasks in the tree
 */
export function countLeafTasks(task: Task): number {
  if (!task.subtasks || task.subtasks.length === 0) {
    return 1;
  }
  return task.subtasks.reduce((sum, st) => sum + countLeafTasks(st), 0);
}

/**
 * Calculate maximum depth of the task tree
 */
export function calculateMaxDepth(task: Task, currentDepth: number = 0): number {
  if (!task.subtasks || task.subtasks.length === 0) {
    return currentDepth;
  }
  return Math.max(
    ...task.subtasks.map(st => calculateMaxDepth(st, currentDepth + 1))
  );
}
