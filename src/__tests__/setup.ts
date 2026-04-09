import { beforeEach, afterEach } from 'bun:test';
import { mkdtempSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import { resetConfig } from '../config';
import type { Task, InterviewDraft, InterviewFindings } from '../types/index';

// Isolate tests from real user config files by pointing XDG_CONFIG_HOME to an empty temp dir
const originalXdgConfigHome = process.env.XDG_CONFIG_HOME;
const testConfigHome = mkdtempSync(join(tmpdir(), 'fp-test-config-'));
process.env.XDG_CONFIG_HOME = testConfigHome;

// Global test setup - reset config between tests
beforeEach(() => {
  resetConfig();
});

afterEach(() => {
  resetConfig();
  process.env.XDG_CONFIG_HOME = testConfigHome;
});

export function makeTask(overrides?: Partial<Task>): Task {
  return {
    id: 'task-1',
    description: 'Test task',
    acceptanceCriteria: ['criterion 1'],
    estimatedComplexity: 3,
    dependencies: [],
    status: 'pending',
    metadata: {
      filesToModify: ['src/example.ts'],
      testsRequired: true,
      hints: ['Implement the task'],
      guardrails: ['Do NOT modify files outside the task scope'],
    },
    ...overrides,
  };
}

export function makeDraft(overrides?: Partial<InterviewFindings>): InterviewDraft {
  const findings: InterviewFindings = {
    intent: 'mid-sized',
    userGoal: 'A sufficiently detailed user goal for testing',
    confirmedRequirements: ['requirement 1'],
    scopeInclusions: ['include this'],
    scopeExclusions: ['exclude that'],
    technicalDecisions: { approach: 'standard' },
    constraints: ['constraint 1'],
    assumptions: ['assumption 1'],
    openQuestions: [],
    codebaseContext: {
      relevantFiles: ['src/index.ts'],
      existingPatterns: ['module pattern'],
      testStrategy: 'unit tests with bun:test',
    },
    ...overrides,
  };
  return {
    name: 'test-draft',
    planId: 'test-plan-id',
    created: new Date().toISOString(),
    lastUpdated: new Date().toISOString(),
    findings,
  };
}

// Test fixtures for reuse across test files
export const validLinearConfig = {
  enabled: true,
  teamId: 'test-team-123',
  projectId: 'test-project-456',
  userId: 'test@example.com',
  statusMap: {
    pending: 'Todo',
    'in-progress': 'In Progress',
    completed: 'Done',
    failed: 'Canceled',
    review: 'In Review'
  }
};

export const linearConfigWithoutUserId = {
  enabled: true,
  teamId: 'test-team-123',
  projectId: 'test-project-456',
  statusMap: {
    pending: 'Todo',
    'in-progress': 'In Progress',
    completed: 'Done',
    failed: 'Canceled',
    review: 'In Review'
  }
};

export const minimalLinearConfig = {
  enabled: true,
  teamId: 'test-team-123'
};
