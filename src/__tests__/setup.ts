import { beforeEach, afterEach } from 'bun:test';
import { resetConfig } from '../config';

// Global test setup - reset config between tests
beforeEach(() => {
  resetConfig();
});

afterEach(() => {
  resetConfig();
});

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
    failed: 'Canceled'
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
    failed: 'Canceled'
  }
};

export const minimalLinearConfig = {
  enabled: true,
  teamId: 'test-team-123'
};
