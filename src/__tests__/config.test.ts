import { describe, test, expect, beforeEach } from 'bun:test';
import { loadConfig, getConfig, resetConfig } from '../config';
import './setup';

describe('Config loading system', () => {
  beforeEach(() => {
    resetConfig();
  });

  describe('Runtime overrides', () => {
    test('runtime override for userId works', async () => {
      const config = await loadConfig({
        linear: {
          enabled: true,
          teamId: 'team-123',
          userId: 'runtime-override@example.com'
        }
      });
      expect(config.linear.userId).toBe('runtime-override@example.com');
      expect(config.linear.enabled).toBe(true);
      expect(config.linear.teamId).toBe('team-123');
    });

    test('runtime override for maxComplexity works', async () => {
      const config = await loadConfig({
        maxComplexity: 8
      });
      expect(config.maxComplexity).toBe(8);
    });

    test('multiple runtime overrides work together', async () => {
      const config = await loadConfig({
        maxComplexity: 7,
        maxIterations: 10,
        researchOnly: true,
        linear: {
          enabled: true,
          teamId: 'team-123',
          userId: 'test@example.com',
          projectId: 'project-456'
        }
      });

      expect(config.maxComplexity).toBe(7);
      expect(config.maxIterations).toBe(10);
      expect(config.researchOnly).toBe(true);
      expect(config.linear.enabled).toBe(true);
      expect(config.linear.teamId).toBe('team-123');
      expect(config.linear.userId).toBe('test@example.com');
      expect(config.linear.projectId).toBe('project-456');
    });
  });

  describe('Config validation', () => {
    test('throws when linear.enabled is true but teamId is missing', async () => {
      await expect(loadConfig({
        linear: {
          enabled: true,
          userId: 'user@example.com'
          // missing teamId
        }
      })).rejects.toThrow();
    });

    test('accepts linear.enabled true with teamId', async () => {
      const config = await loadConfig({
        linear: {
          enabled: true,
          teamId: 'team-123',
          userId: 'user@example.com'
        }
      });

      expect(config.linear.enabled).toBe(true);
      expect(config.linear.teamId).toBe('team-123');
      expect(config.linear.userId).toBe('user@example.com');
    });

    test('validates maxComplexity range', async () => {
      await expect(loadConfig({
        maxComplexity: 0 // below minimum
      })).rejects.toThrow();

      await expect(loadConfig({
        maxComplexity: 11 // above maximum
      })).rejects.toThrow();
    });

    test('accepts valid maxComplexity values', async () => {
      const config1 = await loadConfig({ maxComplexity: 1 });
      expect(config1.maxComplexity).toBe(1);

      resetConfig();

      const config10 = await loadConfig({ maxComplexity: 10 });
      expect(config10.maxComplexity).toBe(10);
    });
  });

  describe('Config caching', () => {
    test('getConfig returns cached config after loadConfig', async () => {
      await loadConfig({
        linear: {
          enabled: true,
          teamId: 'team-123',
          userId: 'cached@example.com'
        }
      });

      const config = getConfig();
      expect(config.linear.userId).toBe('cached@example.com');
    });

    test('getConfig throws before loadConfig is called', () => {
      resetConfig();
      expect(() => getConfig()).toThrow('Config not loaded');
    });

    test('resetConfig clears cache', async () => {
      await loadConfig();
      resetConfig();
      expect(() => getConfig()).toThrow('Config not loaded');
    });

    test('cached config remains stable', async () => {
      await loadConfig({
        maxComplexity: 7,
        linear: {
          enabled: true,
          teamId: 'team-123',
          userId: 'stable@example.com'
        }
      });

      const config1 = getConfig();
      const config2 = getConfig();

      expect(config1).toBe(config2); // Same reference
      expect(config1.maxComplexity).toBe(7);
      expect(config1.linear.userId).toBe('stable@example.com');
    });
  });

  describe('Default values', () => {
    test('applies default values when no overrides provided', async () => {
      const config = await loadConfig();

      expect(config.maxComplexity).toBe(3); // default
      expect(config.maxIterations).toBe(3); // default
      expect(config.researchOnly).toBe(false); // default
      expect(config.planOnly).toBe(false); // default
      expect(config.enableAgentTeams).toBe(true); // default
      expect(config.noCommit).toBe(false); // default
      expect(config.plansDir).toBe('.fractal-planner/plans'); // default
      expect(config.permissionMode).toBe('default'); // default
      expect(config.linear.enabled).toBe(false); // default
    });

    test('partial overrides preserve other defaults', async () => {
      const config = await loadConfig({
        maxComplexity: 8,
        researchOnly: true
      });

      expect(config.maxComplexity).toBe(8); // overridden
      expect(config.researchOnly).toBe(true); // overridden
      expect(config.maxIterations).toBe(3); // default
      expect(config.enableAgentTeams).toBe(true); // default
    });
  });

  describe('cliRunner config', () => {
    test('defaults to auto', async () => {
      const config = await loadConfig();
      expect(config.cliRunner).toBe('auto');
    });

    test('accepts bun', async () => {
      const config = await loadConfig({ cliRunner: 'bun' });
      expect(config.cliRunner).toBe('bun');
    });

    test('accepts node', async () => {
      const config = await loadConfig({ cliRunner: 'node' });
      expect(config.cliRunner).toBe('node');
    });

    test('rejects invalid values', async () => {
      await expect(loadConfig({ cliRunner: 'deno' as any })).rejects.toThrow();
    });
  });

  describe('iterationScaling config', () => {
    test('defaults to enabled with base=2, factor=0.8', async () => {
      const config = await loadConfig();
      expect(config.iterationScaling.enabled).toBe(true);
      expect(config.iterationScaling.base).toBe(2);
      expect(config.iterationScaling.factor).toBe(0.8);
    });

    test('accepts custom values', async () => {
      const config = await loadConfig({
        iterationScaling: { enabled: false, base: 1, factor: 1.5 },
      });
      expect(config.iterationScaling.enabled).toBe(false);
      expect(config.iterationScaling.base).toBe(1);
      expect(config.iterationScaling.factor).toBe(1.5);
    });

    test('rejects factor > 2', async () => {
      await expect(loadConfig({
        iterationScaling: { enabled: true, base: 2, factor: 3 },
      })).rejects.toThrow();
    });

    test('rejects base < 1', async () => {
      await expect(loadConfig({
        iterationScaling: { enabled: true, base: 0, factor: 0.8 },
      })).rejects.toThrow();
    });
  });

  describe('executionOrder config', () => {
    test('defaults to document-order', async () => {
      const config = await loadConfig();
      expect(config.executionOrder).toBe('document-order');
    });

    test('accepts risk-first', async () => {
      const config = await loadConfig({ executionOrder: 'risk-first' });
      expect(config.executionOrder).toBe('risk-first');
    });

    test('accepts easy-first', async () => {
      const config = await loadConfig({ executionOrder: 'easy-first' });
      expect(config.executionOrder).toBe('easy-first');
    });

    test('rejects invalid values', async () => {
      await expect(loadConfig({ executionOrder: 'random' as any })).rejects.toThrow();
    });
  });

  describe('statusMap.review field', () => {
    test('accepts statusMap with optional review key', async () => {
      const config = await loadConfig({
        linear: {
          enabled: true,
          teamId: 'team-123',
          statusMap: {
            pending: 'Todo',
            'in-progress': 'In Progress',
            completed: 'Done',
            failed: 'Canceled',
            review: 'In Review'
          }
        }
      });
      expect(config.linear.statusMap?.review).toBe('In Review');
    });

    test('statusMap works without review key', async () => {
      const config = await loadConfig({
        linear: {
          enabled: true,
          teamId: 'team-123',
          statusMap: {
            pending: 'Todo',
            'in-progress': 'In Progress',
            completed: 'Done',
            failed: 'Canceled'
          }
        }
      });
      expect(config.linear.statusMap?.review).toBeUndefined();
    });
  });

  describe('userId field integration', () => {
    test('userId is optional in linear config', async () => {
      const config = await loadConfig({
        linear: {
          enabled: true,
          teamId: 'team-123'
          // userId omitted
        }
      });

      expect(config.linear.enabled).toBe(true);
      expect(config.linear.userId).toBeUndefined();
    });

    test('userId accepts various formats', async () => {
      // UUID format
      resetConfig();
      const config1 = await loadConfig({
        linear: {
          enabled: true,
          teamId: 'team-123',
          userId: '550e8400-e29b-41d4-a716-446655440000'
        }
      });
      expect(config1.linear.userId).toBe('550e8400-e29b-41d4-a716-446655440000');

      // Email format
      resetConfig();
      const config2 = await loadConfig({
        linear: {
          enabled: true,
          teamId: 'team-123',
          userId: 'user@example.com'
        }
      });
      expect(config2.linear.userId).toBe('user@example.com');

      // "me" keyword
      resetConfig();
      const config3 = await loadConfig({
        linear: {
          enabled: true,
          teamId: 'team-123',
          userId: 'me'
        }
      });
      expect(config3.linear.userId).toBe('me');
    });
  });
});
