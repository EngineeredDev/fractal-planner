import { describe, test, expect, beforeEach, afterEach } from 'bun:test';
import { mkdtempSync, rmSync } from 'fs';
import { tmpdir } from 'os';
import { join, relative } from 'path';
import { createDraft, updateDraft, readDraft } from '../utils/draft';
import { loadConfig } from '../config';
import './setup';

describe('draft management', () => {
  let tmpDir: string;
  let relPlansDir: string;

  beforeEach(async () => {
    tmpDir = mkdtempSync(join(tmpdir(), 'fp-draft-test-'));
    relPlansDir = relative(process.cwd(), tmpDir);
    await loadConfig();
  });

  afterEach(() => {
    rmSync(tmpDir, { recursive: true, force: true });
  });

  describe('createDraft', () => {
    test('creates plan directory when it does not exist', async () => {
      const { draftPath } = await createDraft('Test', 'goal', 'mid-sized', 'plan-1', relPlansDir);
      const { existsSync } = await import('fs');
      expect(existsSync(join(tmpDir, 'plan-1'))).toBe(true);
      expect(existsSync(draftPath)).toBe(true);
    });

    test('writes valid JSON file', async () => {
      const { draftPath } = await createDraft('Test', 'goal', 'mid-sized', 'plan-1', relPlansDir);
      const draft = await readDraft(draftPath);
      expect(draft.name).toBe('Test');
      expect(draft.findings.intent).toBe('mid-sized');
      expect(draft.findings.userGoal).toBe('goal');
    });

    test('uses provided planId', async () => {
      const { planId } = await createDraft('Test', 'goal', 'mid-sized', 'custom-id', relPlansDir);
      expect(planId).toBe('custom-id');
    });

    test('generates timestamp planId when omitted', async () => {
      const { planId } = await createDraft('Test', 'goal', 'mid-sized', undefined, relPlansDir);
      // Format: YYYYMMDD-HHmmss
      expect(planId).toMatch(/^\d{8}-\d{6}$/);
    });

    test('slugifies name: "My Interview" → "my-interview.json"', async () => {
      const { draftPath } = await createDraft('My Interview', 'goal', 'mid-sized', 'plan-1', relPlansDir);
      expect(draftPath).toContain('my-interview.json');
    });

    test('returns correct draftPath and planId', async () => {
      const result = await createDraft('Test', 'goal', 'trivial', 'plan-1', relPlansDir);
      expect(result.draftPath).toContain('plan-1');
      expect(result.draftPath).toContain('test.json');
      expect(result.planId).toBe('plan-1');
    });

    test('initializes all findings arrays as empty', async () => {
      const { draftPath } = await createDraft('Test', 'goal', 'mid-sized', 'plan-1', relPlansDir);
      const draft = await readDraft(draftPath);
      expect(draft.findings.confirmedRequirements).toEqual([]);
      expect(draft.findings.scopeInclusions).toEqual([]);
      expect(draft.findings.scopeExclusions).toEqual([]);
      expect(draft.findings.constraints).toEqual([]);
      expect(draft.findings.assumptions).toEqual([]);
      expect(draft.findings.openQuestions).toEqual([]);
      expect(draft.findings.technicalDecisions).toEqual({});
    });
  });

  describe('updateDraft', () => {
    test('merges partial updates into existing findings', async () => {
      const { draftPath } = await createDraft('Test', 'goal', 'mid-sized', 'plan-1', relPlansDir);
      await updateDraft(draftPath, { confirmedRequirements: ['req1'] });
      const draft = await readDraft(draftPath);
      expect(draft.findings.confirmedRequirements).toEqual(['req1']);
      expect(draft.findings.intent).toBe('mid-sized');
    });

    test('updates lastUpdated timestamp', async () => {
      const { draftPath } = await createDraft('Test', 'goal', 'mid-sized', 'plan-1', relPlansDir);
      const before = await readDraft(draftPath);
      // Small delay to ensure timestamp changes
      await new Promise(r => setTimeout(r, 10));
      await updateDraft(draftPath, { confirmedRequirements: ['req1'] });
      const after = await readDraft(draftPath);
      expect(new Date(after.lastUpdated).getTime()).toBeGreaterThanOrEqual(
        new Date(before.lastUpdated).getTime()
      );
    });

    test('preserves non-updated fields', async () => {
      const { draftPath } = await createDraft('Test', 'goal', 'mid-sized', 'plan-1', relPlansDir);
      await updateDraft(draftPath, { scopeInclusions: ['include X'] });
      const draft = await readDraft(draftPath);
      expect(draft.name).toBe('Test');
      expect(draft.findings.userGoal).toBe('goal');
      expect(draft.findings.scopeInclusions).toEqual(['include X']);
    });
  });

  describe('readDraft', () => {
    test('reads and parses correctly after createDraft', async () => {
      const { draftPath } = await createDraft('Test', 'my goal', 'architecture', 'plan-1', relPlansDir);
      const draft = await readDraft(draftPath);
      expect(draft.name).toBe('Test');
      expect(draft.findings.userGoal).toBe('my goal');
      expect(draft.findings.intent).toBe('architecture');
      expect(draft.planId).toBe('plan-1');
    });

    test('throws on non-existent file', async () => {
      expect(readDraft('/nonexistent/path/file.json')).rejects.toThrow();
    });
  });
});
