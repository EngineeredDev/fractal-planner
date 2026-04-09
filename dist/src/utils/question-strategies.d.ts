/**
 * Intent-Specific Question Strategies
 *
 * Adapted from oh-my-opencode interview-mode.ts
 */
import type { IntentType } from '../types/index.js';
/**
 * Question strategy for interview phase
 */
export interface QuestionStrategy {
    researchFirst: boolean;
    focusAreas: string[];
    initialQuestions: string[];
    researchPrompts: string[];
}
/**
 * Intent-specific interview strategies
 */
export declare function getQuestionStrategy(intent: IntentType): QuestionStrategy;
/**
 * Classify user intent based on goal description
 */
export declare function classifyIntent(userGoal: string): IntentType;
//# sourceMappingURL=question-strategies.d.ts.map