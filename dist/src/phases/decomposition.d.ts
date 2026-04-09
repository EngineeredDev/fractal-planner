import type { Task } from '../types/index.js';
export type ViolationType = 'over-complexity' | 'missing-acceptance' | 'missing-files' | 'missing-tests-required' | 'missing-hints' | 'missing-guardrails' | 'subtask-count' | 'scattered-files';
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
    warnings: TaskViolation[];
    stats: {
        maxDepth: number;
        leafComplexityDistribution: Record<number, number>;
        dimensionAverages?: Record<string, number>;
    };
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
export declare function validateTaskTree(root: Task, maxComplexity: number): ValidationResult;
/**
 * Calculate total number of leaf tasks in the tree
 */
export declare function countLeafTasks(task: Task): number;
/**
 * Calculate maximum depth of the task tree
 */
export declare function calculateMaxDepth(task: Task, currentDepth?: number): number;
//# sourceMappingURL=decomposition.d.ts.map