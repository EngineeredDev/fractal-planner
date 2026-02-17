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
export function getQuestionStrategy(intent: IntentType): QuestionStrategy {
  switch (intent) {
    case 'trivial':
      return {
        researchFirst: false,
        focusAreas: ['scope validation'],
        initialQuestions: [
          'Is this change purely cosmetic/trivial with no behavioral impact?',
          'Are there any files or areas that should NOT be touched?'
        ],
        researchPrompts: []
      };

    case 'refactoring':
      return {
        researchFirst: true,
        focusAreas: ['behavior preservation', 'test coverage', 'safety'],
        initialQuestions: [
          'What specific behavior must be preserved exactly as-is?',
          'Are there tests covering this code? If not, should we add them first?',
          'What is the rollback plan if issues are discovered?'
        ],
        researchPrompts: [
          'Search for files matching the refactoring target',
          'Check test coverage for affected modules',
          'Look for related configuration files'
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
        ],
        researchPrompts: [
          'Find similar features in the codebase',
          'Check project structure and module patterns',
          'Identify integration points and entry files'
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
        ],
        researchPrompts: [
          'Find files related to the feature area',
          'Check existing test patterns in the project'
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
        ],
        researchPrompts: [
          'Map current architecture — entry points, layers, module boundaries',
          'Find affected integration points and cross-cutting concerns',
          'Check for existing migration patterns or version compatibility'
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
