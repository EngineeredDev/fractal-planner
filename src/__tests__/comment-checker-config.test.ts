import { describe, test, expect, beforeEach } from 'bun:test';
import { loadConfig, resetConfig } from '../config';
import './setup';

describe('CommentChecker config', () => {
  beforeEach(() => {
    resetConfig();
  });

  test('enabled by default', async () => {
    const config = await loadConfig();
    expect(config.commentChecker.enabled).toBe(true);
  });

  test('binaryPath and customPrompt are undefined by default', async () => {
    const config = await loadConfig();
    expect(config.commentChecker.binaryPath).toBeUndefined();
    expect(config.commentChecker.customPrompt).toBeUndefined();
  });

  test('can be disabled', async () => {
    const config = await loadConfig({
      commentChecker: { enabled: false },
    });
    expect(config.commentChecker.enabled).toBe(false);
  });

  test('accepts custom binaryPath', async () => {
    const config = await loadConfig({
      commentChecker: { binaryPath: '/usr/local/bin/comment-checker' },
    });
    expect(config.commentChecker.enabled).toBe(true);
    expect(config.commentChecker.binaryPath).toBe('/usr/local/bin/comment-checker');
  });

  test('accepts custom prompt', async () => {
    const prompt = 'Check for {{comments}} in the code';
    const config = await loadConfig({
      commentChecker: { customPrompt: prompt },
    });
    expect(config.commentChecker.customPrompt).toBe(prompt);
  });

  test('partial override preserves defaults', async () => {
    const config = await loadConfig({
      commentChecker: { customPrompt: 'custom' },
    });
    expect(config.commentChecker.enabled).toBe(true);
    expect(config.commentChecker.binaryPath).toBeUndefined();
    expect(config.commentChecker.customPrompt).toBe('custom');
  });

  test('does not interfere with other config sections', async () => {
    const config = await loadConfig({
      maxComplexity: 8,
      commentChecker: { enabled: false },
      linear: { enabled: true, teamId: 'team-123' },
    });
    expect(config.maxComplexity).toBe(8);
    expect(config.commentChecker.enabled).toBe(false);
    expect(config.linear.enabled).toBe(true);
    expect(config.linear.teamId).toBe('team-123');
  });
});
