/**
 * Planning Phase
 *
 * Creates a detailed implementation plan with strict acceptance criteria
 * and execution ordering based on dependencies.
 */
import type { Task, PlanningResult } from '../types/index.js';
/**
 * Generate a comprehensive implementation plan
 */
export declare function createImplementationPlan(rootTask: Task): Promise<PlanningResult>;
/**
 * Get execution order respecting dependencies
 * Returns tasks in topological order with optional tiebreak strategy
 */
export declare function getExecutionOrder(rootTask: Task, tiebreak?: 'risk-first' | 'easy-first' | 'document-order'): Task[];
/**
 * Print a visual tree representation of the plan
 */
export declare function printPlanTree(task: Task, prefix?: string, isLast?: boolean): void;
//# sourceMappingURL=planning.d.ts.map