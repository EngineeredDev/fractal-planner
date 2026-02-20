import { describe, test, expect, beforeEach } from 'bun:test';
import { loadConfig, resetConfig } from '../config';
import './setup';

describe('Nudge config', () => {
  beforeEach(() => {
    resetConfig();
  });

  test('enabled by default', async () => {
    const config = await loadConfig();
    expect(config.nudge.enabled).toBe(true);
  });

  test('maxRetries defaults to 3', async () => {
    const config = await loadConfig();
    expect(config.nudge.maxRetries).toBe(3);
  });

  test('can be disabled', async () => {
    const config = await loadConfig({
      nudge: { enabled: false },
    });
    expect(config.nudge.enabled).toBe(false);
  });

  test('accepts custom maxRetries', async () => {
    const config = await loadConfig({
      nudge: { maxRetries: 5 },
    });
    expect(config.nudge.maxRetries).toBe(5);
  });

  test('rejects invalid maxRetries', async () => {
    await expect(loadConfig({ nudge: { maxRetries: 0 } })).rejects.toThrow();
    await expect(loadConfig({ nudge: { maxRetries: 11 } })).rejects.toThrow();
  });

  test('partial override preserves defaults', async () => {
    const config = await loadConfig({
      nudge: { maxRetries: 5 },
    });
    expect(config.nudge.enabled).toBe(true);
    expect(config.nudge.maxRetries).toBe(5);
  });

  test('does not interfere with other config sections', async () => {
    const config = await loadConfig({
      maxComplexity: 8,
      nudge: { enabled: false },
      linear: { enabled: true, teamId: 'team-123' },
    });
    expect(config.maxComplexity).toBe(8);
    expect(config.nudge.enabled).toBe(false);
    expect(config.linear.enabled).toBe(true);
    expect(config.linear.teamId).toBe('team-123');
  });
});
