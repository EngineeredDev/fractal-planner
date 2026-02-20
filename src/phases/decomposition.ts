import type { Task } from '../types/index.js';

export type ViolationType =
  | 'over-complexity'
  | 'missing-acceptance'
  | 'missing-files'
  | 'missing-tests-required'
  | 'missing-hints'
  | 'missing-guardrails'
  | 'subtask-count';

export interface TaskViolation {
  type: ViolationType;
  id: string;
  description: string;
  parentId: string | null;
  depth: number;
  detail: string;
}

export interface ValidationResult {
  valid: boolean;
  maxComplexity: number;
  totalLeafTasks: number;
  violations: TaskViolation[];
  stats: { maxDepth: number; leafComplexityDistribution: Record<number, number> };
}

/**
 * Validate that the task tree conforms to all decomposer rules:
 * - Leaf complexity <= maxComplexity
 * - Leaves have acceptance criteria
 * - Leaves have filesToModify metadata
 * - Leaves have testsRequired metadata
 * - Leaves have guardrails metadata
 * - Non-leaf, non-root nodes have 2-5 subtasks
 */
export function validateTaskTree(root: Task, maxComplexity: number): ValidationResult {
  const violations: TaskViolation[] = [];
  const distribution: Record<number, number> = {};

  function walk(task: Task, parentId: string | null, depth: number, isRoot: boolean): void {
    const isLeaf = !task.subtasks || task.subtasks.length === 0;
    if (isLeaf) {
      const c = task.estimatedComplexity;
      distribution[c] = (distribution[c] || 0) + 1;
      if (c > maxComplexity) {
        violations.push({
          type: 'over-complexity',
          id: task.id,
          description: task.description,
          parentId,
          depth,
          detail: `complexity ${c} exceeds max ${maxComplexity}`,
        });
      }
      if (task.acceptanceCriteria.length === 0) {
        violations.push({
          type: 'missing-acceptance',
          id: task.id,
          description: task.description,
          parentId,
          depth,
          detail: 'leaf task has no acceptance criteria',
        });
      }
      if (task.metadata?.filesToModify === undefined) {
        violations.push({
          type: 'missing-files',
          id: task.id,
          description: task.description,
          parentId,
          depth,
          detail: 'leaf task missing filesToModify metadata',
        });
      }
      if (task.metadata?.testsRequired === undefined) {
        violations.push({
          type: 'missing-tests-required',
          id: task.id,
          description: task.description,
          parentId,
          depth,
          detail: 'leaf task missing testsRequired metadata',
        });
      }
      if (!task.metadata?.hints || task.metadata.hints.length === 0) {
        violations.push({
          type: 'missing-hints',
          id: task.id,
          description: task.description,
          parentId,
          depth,
          detail: 'leaf task has no implementation hints',
        });
      }
      if (!task.metadata?.guardrails || task.metadata.guardrails.length === 0) {
        violations.push({
          type: 'missing-guardrails',
          id: task.id,
          description: task.description,
          parentId,
          depth,
          detail: 'leaf task has no guardrails',
        });
      }
    } else {
      if (!isRoot) {
        const count = task.subtasks!.length;
        if (count < 2 || count > 5) {
          violations.push({
            type: 'subtask-count',
            id: task.id,
            description: task.description,
            parentId,
            depth,
            detail: `has ${count} subtask(s), expected 2-5`,
          });
        }
      }
      for (const child of task.subtasks!) {
        walk(child, task.id, depth + 1, false);
      }
    }
  }

  walk(root, null, 0, true);

  return {
    valid: violations.length === 0,
    maxComplexity,
    totalLeafTasks: countLeafTasks(root),
    violations,
    stats: {
      maxDepth: calculateMaxDepth(root),
      leafComplexityDistribution: distribution,
    },
  };
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
