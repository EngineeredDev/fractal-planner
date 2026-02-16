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
}

/**
 * Intent-specific interview strategies
 */
export function getQuestionStrategy(intent: IntentType): QuestionStrategy {
  switch (intent) {
    case 'trivial':
      return {
        researchFirst: false,
        focusAreas: ['scope validation'],
        initialQuestions: [
          'Is this change purely cosmetic/trivial with no behavioral impact?',
          'Are there any files or areas that should NOT be touched?'
        ]
      };

    case 'refactoring':
      return {
        researchFirst: true,
        focusAreas: ['behavior preservation', 'test coverage', 'safety'],
        initialQuestions: [
          'What specific behavior must be preserved exactly as-is?',
          'Are there tests covering this code? If not, should we add them first?',
          'What is the rollback plan if issues are discovered?'
        ]
      };

    case 'build-from-scratch':
      return {
        researchFirst: true,
        focusAreas: ['existing patterns', 'dependencies', 'architecture'],
        initialQuestions: [
          'Should this follow existing patterns in the codebase?',
          'Are there similar features I can learn from?',
          'What libraries/frameworks should be used (or avoided)?'
        ]
      };

    case 'mid-sized':
      return {
        researchFirst: true,
        focusAreas: ['scope boundaries', 'deliverables'],
        initialQuestions: [
          'What are the MUST-HAVE vs NICE-TO-HAVE features?',
          'What should be explicitly EXCLUDED from this work?',
          'When is this considered "done"?'
        ]
      };

    case 'architecture':
      return {
        researchFirst: true,
        focusAreas: ['long-term impact', 'trade-offs', 'alternatives'],
        initialQuestions: [
          'What problem is this architectural change solving?',
          'What are the trade-offs vs alternative approaches?',
          'What is the migration path for existing code?'
        ]
      };
  }
}

/**
 * Classify user intent based on goal description
 */
export function classifyIntent(userGoal: string): IntentType {
  const goal = userGoal.toLowerCase();

  // Trivial indicators
  if (goal.match(/\b(typo|fix\s+typo|rename|update\s+comment|formatting)\b/)) {
    return 'trivial';
  }

  // Refactoring indicators
  if (goal.match(/\b(refactor|restructure|clean\s+up|reorganize)\b/)) {
    return 'refactoring';
  }

  // Architecture indicators
  if (goal.match(/\b(architecture|redesign|migrate|scalability|framework)\b/)) {
    return 'architecture';
  }

  // Build indicators
  if (goal.match(/\b(add|implement|create|build|new\s+feature)\b/)) {
    // Check if it's substantial enough for "build-from-scratch"
    if (goal.length > 50 || goal.match(/\b(authentication|payment|api|database)\b/)) {
      return 'build-from-scratch';
    }
    return 'mid-sized';
  }

  // Default to mid-sized for ambiguous goals
  return 'mid-sized';
}
