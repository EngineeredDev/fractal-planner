import { describe, test, expect } from 'bun:test';
import { classifyIntent, getQuestionStrategy } from '../utils/question-strategies';
import './setup';

describe('classifyIntent', () => {
  describe('trivial intent', () => {
    test('matches "fix typo"', () => {
      expect(classifyIntent('fix typo')).toBe('trivial');
    });

    test('matches "rename variable"', () => {
      expect(classifyIntent('rename variable')).toBe('trivial');
    });

    test('matches "update comment"', () => {
      expect(classifyIntent('update comment in header')).toBe('trivial');
    });

    test('matches "fix formatting"', () => {
      expect(classifyIntent('fix formatting issues')).toBe('trivial');
    });

    test('is case insensitive', () => {
      expect(classifyIntent('Fix Typo')).toBe('trivial');
    });

    test('respects word boundary — "typography" should NOT match', () => {
      expect(classifyIntent('improve typography styles')).not.toBe('trivial');
    });
  });

  describe('refactoring intent', () => {
    test('matches "refactor auth module"', () => {
      expect(classifyIntent('refactor auth module')).toBe('refactoring');
    });

    test('matches "clean up utils"', () => {
      expect(classifyIntent('clean up utils directory')).toBe('refactoring');
    });

    test('matches "restructure API"', () => {
      expect(classifyIntent('restructure API layer')).toBe('refactoring');
    });

    test('matches "reorganize files"', () => {
      expect(classifyIntent('reorganize files in src')).toBe('refactoring');
    });
  });

  describe('architecture intent', () => {
    test('matches "redesign database"', () => {
      expect(classifyIntent('redesign database schema')).toBe('architecture');
    });

    test('matches "migrate to microservices"', () => {
      expect(classifyIntent('migrate to microservices')).toBe('architecture');
    });

    test('matches "improve scalability"', () => {
      expect(classifyIntent('improve scalability of the system')).toBe('architecture');
    });

    test('matches "evaluate framework"', () => {
      expect(classifyIntent('evaluate framework options for frontend')).toBe('architecture');
    });
  });

  describe('build-from-scratch intent', () => {
    test('long goal >50 chars with "add" triggers build-from-scratch', () => {
      const longGoal = 'add a comprehensive user management system with roles and permissions';
      expect(longGoal.length).toBeGreaterThan(50);
      expect(classifyIntent(longGoal)).toBe('build-from-scratch');
    });

    test('keyword "payment" triggers build-from-scratch', () => {
      expect(classifyIntent('add payment processing')).toBe('build-from-scratch');
    });

    test('keyword "api" triggers build-from-scratch', () => {
      expect(classifyIntent('build api gateway')).toBe('build-from-scratch');
    });

    test('keyword "database" triggers build-from-scratch', () => {
      expect(classifyIntent('create database layer')).toBe('build-from-scratch');
    });

    test('keyword "authentication" triggers build-from-scratch', () => {
      expect(classifyIntent('add authentication system')).toBe('build-from-scratch');
    });
  });

  describe('mid-sized intent', () => {
    test('short build goal → mid-sized', () => {
      expect(classifyIntent('add a button')).toBe('mid-sized');
    });

    test('ambiguous goal defaults to mid-sized', () => {
      expect(classifyIntent('improve performance')).toBe('mid-sized');
    });
  });

  describe('priority ordering', () => {
    test('trivial wins when both trivial+build could match', () => {
      expect(classifyIntent('fix typo in the add button')).toBe('trivial');
    });

    test('refactoring wins over architecture', () => {
      expect(classifyIntent('refactor the architecture module')).toBe('refactoring');
    });
  });

  describe('length boundary (50 chars)', () => {
    test('exactly 50 chars with "add" → mid-sized', () => {
      // "add " = 4 chars, need 46 more to reach exactly 50
      const goal = 'add ' + 'x'.repeat(46);
      expect(goal.length).toBe(50);
      expect(classifyIntent(goal)).toBe('mid-sized');
    });

    test('51 chars with "add" → build-from-scratch', () => {
      const goal = 'add ' + 'x'.repeat(47);
      expect(goal.length).toBe(51);
      expect(classifyIntent(goal)).toBe('build-from-scratch');
    });
  });
});

describe('getQuestionStrategy', () => {
  test('trivial → researchFirst: false', () => {
    expect(getQuestionStrategy('trivial').researchFirst).toBe(false);
  });

  test.each(['refactoring', 'build-from-scratch', 'mid-sized', 'architecture'] as const)(
    '%s → researchFirst: true',
    (intent) => {
      expect(getQuestionStrategy(intent).researchFirst).toBe(true);
    }
  );

  test('each intent returns non-empty focusAreas', () => {
    const intents = ['trivial', 'refactoring', 'build-from-scratch', 'mid-sized', 'architecture'] as const;
    for (const intent of intents) {
      expect(getQuestionStrategy(intent).focusAreas.length).toBeGreaterThan(0);
    }
  });

  test('each intent returns non-empty initialQuestions', () => {
    const intents = ['trivial', 'refactoring', 'build-from-scratch', 'mid-sized', 'architecture'] as const;
    for (const intent of intents) {
      expect(getQuestionStrategy(intent).initialQuestions.length).toBeGreaterThan(0);
    }
  });

  test('refactoring has "behavior preservation" in focusAreas', () => {
    expect(getQuestionStrategy('refactoring').focusAreas).toContain('behavior preservation');
  });

  test('architecture has "trade-offs" in focusAreas', () => {
    expect(getQuestionStrategy('architecture').focusAreas).toContain('trade-offs');
  });

  test('trivial has empty researchPrompts', () => {
    expect(getQuestionStrategy('trivial').researchPrompts).toEqual([]);
  });

  test.each(['refactoring', 'build-from-scratch', 'mid-sized', 'architecture'] as const)(
    '%s has non-empty researchPrompts',
    (intent) => {
      expect(getQuestionStrategy(intent).researchPrompts.length).toBeGreaterThan(0);
    }
  );

  test('each intent returns researchPrompts as an array', () => {
    const intents = ['trivial', 'refactoring', 'build-from-scratch', 'mid-sized', 'architecture'] as const;
    for (const intent of intents) {
      expect(Array.isArray(getQuestionStrategy(intent).researchPrompts)).toBe(true);
    }
  });
});
