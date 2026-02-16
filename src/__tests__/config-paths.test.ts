import { describe, test, expect, beforeEach, afterEach } from 'bun:test';
import { join } from 'path';
import { homedir } from 'os';
import { getUserConfigPath, getProjectConfigPath, FractalPlannerConfigSchema } from '../config';
import './setup';

describe('getUserConfigPath', () => {
  let originalXdg: string | undefined;

  beforeEach(() => {
    originalXdg = process.env.XDG_CONFIG_HOME;
  });

  afterEach(() => {
    if (originalXdg === undefined) {
      delete process.env.XDG_CONFIG_HOME;
    } else {
      process.env.XDG_CONFIG_HOME = originalXdg;
    }
  });

  test('returns XDG-based path when XDG_CONFIG_HOME set', () => {
    process.env.XDG_CONFIG_HOME = '/custom/config';
    expect(getUserConfigPath()).toBe(join('/custom/config', 'fractal-planner', 'config.json'));
  });

  test('falls back to ~/.config when env var unset', () => {
    delete process.env.XDG_CONFIG_HOME;
    expect(getUserConfigPath()).toBe(join(homedir(), '.config', 'fractal-planner', 'config.json'));
  });

  test('falls back to ~/.config when env var empty', () => {
    process.env.XDG_CONFIG_HOME = '';
    expect(getUserConfigPath()).toBe(join(homedir(), '.config', 'fractal-planner', 'config.json'));
  });
});

describe('getProjectConfigPath', () => {
  test('returns path relative to process.cwd()', () => {
    expect(getProjectConfigPath()).toBe(join(process.cwd(), '.fractal-planner', 'config.json'));
  });
});

describe('FractalPlannerConfigSchema edge cases', () => {
  test('maxIterations minimum of 1', () => {
    expect(() => FractalPlannerConfigSchema.parse({ maxIterations: 0 })).toThrow();
    expect(FractalPlannerConfigSchema.parse({ maxIterations: 1 }).maxIterations).toBe(1);
  });

  test('permissionMode accepts all enum values', () => {
    const modes = ['default', 'acceptEdits', 'bypassPermissions', 'plan', 'delegate', 'dontAsk'] as const;
    for (const mode of modes) {
      const config = FractalPlannerConfigSchema.parse({ permissionMode: mode });
      expect(config.permissionMode).toBe(mode);
    }
  });

  test('empty object passes (all fields optional with defaults)', () => {
    const config = FractalPlannerConfigSchema.parse({});
    expect(config.maxComplexity).toBe(5);
    expect(config.maxIterations).toBe(3);
  });

  test('maxComplexity boundaries', () => {
    expect(() => FractalPlannerConfigSchema.parse({ maxComplexity: 0 })).toThrow();
    expect(FractalPlannerConfigSchema.parse({ maxComplexity: 1 }).maxComplexity).toBe(1);
    expect(FractalPlannerConfigSchema.parse({ maxComplexity: 10 }).maxComplexity).toBe(10);
    expect(() => FractalPlannerConfigSchema.parse({ maxComplexity: 11 })).toThrow();
  });

  test('invalid permissionMode rejects', () => {
    expect(() => FractalPlannerConfigSchema.parse({ permissionMode: 'invalid' })).toThrow();
  });

  test('linear.enabled true without teamId rejects', () => {
    expect(() => FractalPlannerConfigSchema.parse({
      linear: { enabled: true },
    })).toThrow();
  });
});
