/**
 * Draft Management Utility
 *
 * Manages persistent interview state across turns.
 * The draft file serves as working memory during the interview loop.
 */
import type { InterviewDraft, InterviewFindings, IntentType } from '../types/index.js';
export declare function generateSlugPlanId(description: string): string;
export declare function createDraft(name: string, userGoal: string, intent: IntentType, planId?: string, plansDir?: string): Promise<{
    draftPath: string;
    planId: string;
}>;
/**
 * Update draft with new findings
 */
export declare function updateDraft(draftPath: string, updates: Partial<InterviewFindings>): Promise<void>;
/**
 * Read draft file
 */
export declare function readDraft(draftPath: string): Promise<InterviewDraft>;
//# sourceMappingURL=draft.d.ts.map