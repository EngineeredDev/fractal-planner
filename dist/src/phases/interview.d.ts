/**
 * Interview Phase - Iterative clarification loop
 *
 * Uses Claude Agent SDK to spawn an agent with access to AskUserQuestion tool.
 * Adapted from oh-my-opencode Prometheus agent.
 */
import type { InterviewFindings, FractalPlannerConfig } from '../types/index.js';
/**
 * Interview Phase - Iterative clarification loop
 * Runs until clearance check passes
 */
export declare function runInterviewPhase(userGoal: string, planId?: string, config?: Partial<FractalPlannerConfig>): Promise<{
    findings: InterviewFindings;
    draftPath: string;
    planId: string;
}>;
//# sourceMappingURL=interview.d.ts.map