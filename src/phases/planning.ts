/**
 * Planning Phase
 *
 * Creates a detailed implementation plan with strict acceptance criteria
 * and execution ordering based on dependencies.
 */

import type { Task, PlanningResult } from '../types/index.js';
import { countLeafTasks, calculateMaxDepth } from './decomposition.js';

/**
 * Generate a comprehensive implementation plan
 */
export async function createImplementationPlan(
  rootTask: Task
): Promise<PlanningResult> {
  console.log('  📋 Generating implementation plan...');

  // Calculate plan statistics
  const totalTasks = countLeafTasks(rootTask);
  const maxDepth = calculateMaxDepth(rootTask);

  console.log(`  ✓ Plan created: ${totalTasks} tasks across ${maxDepth} levels`);

  return {
    rootTask,
    totalTasks,
    maxDepth
  };
}

/**
 * Get execution order respecting dependencies
 * Returns tasks in topological order with optional tiebreak strategy
 */
export function getExecutionOrder(
  rootTask: Task,
  tiebreak: 'risk-first' | 'easy-first' | 'document-order' = 'document-order'
): Task[] {
  const allTasks: Task[] = [];
  const visited = new Set<string>();

  function traverse(task: Task) {
    if (visited.has(task.id)) return;
    visited.add(task.id);

    if (task.subtasks && task.subtasks.length > 0) {
      // Traverse subtasks
      task.subtasks.forEach(traverse);
    } else {
      // Leaf task
      allTasks.push(task);
    }
  }

  traverse(rootTask);

  // Sort by dependencies (simple topological sort)
  const sorted: Task[] = [];
  const remaining = [...allTasks];

  while (remaining.length > 0) {
    const ready = remaining.filter(task =>
      task.dependencies.every(depId =>
        sorted.some(t => t.id === depId)
      )
    );

    if (ready.length === 0 && remaining.length > 0) {
      // Circular dependency or orphaned tasks
      console.warn('  ⚠️  Circular dependencies detected, adding remaining tasks anyway');
      sorted.push(...remaining);
      break;
    }

    if (tiebreak === 'risk-first') {
      ready.sort((a, b) => b.estimatedComplexity - a.estimatedComplexity);
    } else if (tiebreak === 'easy-first') {
      ready.sort((a, b) => a.estimatedComplexity - b.estimatedComplexity);
    }
    // 'document-order': no sort (preserve original traversal order)

    sorted.push(...ready);
    ready.forEach(task => {
      const idx = remaining.indexOf(task);
      remaining.splice(idx, 1);
    });
  }

  return sorted;
}

/**
 * Print a visual tree representation of the plan
 */
export function printPlanTree(task: Task, prefix: string = '', isLast: boolean = true) {
  const connector = isLast ? '└─' : '├─';
  const complexity = `[${task.estimatedComplexity}/10]`;

  console.log(`${prefix}${connector} ${task.id}: ${task.description} ${complexity}`);

  if (task.acceptanceCriteria && task.acceptanceCriteria.length > 0) {
    const criteriaPrefix = prefix + (isLast ? '   ' : '│  ');
    console.log(`${criteriaPrefix}  Acceptance:`);
    task.acceptanceCriteria.forEach((criterion, idx) => {
      console.log(`${criteriaPrefix}    ${idx + 1}. ${criterion}`);
    });
  }

  if (task.subtasks && task.subtasks.length > 0) {
    const subtaskPrefix = prefix + (isLast ? '   ' : '│  ');
    task.subtasks.forEach((subtask, idx) => {
      printPlanTree(subtask, subtaskPrefix, idx === task.subtasks!.length - 1);
    });
  }
}
