import { describe, test, expect } from 'bun:test';
import { evaluateClearance } from '../phases/clearance';
import { makeDraft } from './setup';

describe('evaluateClearance', () => {
  describe('all passing', () => {
    test('returns passed: true with no gaps when all fields populated', async () => {
      const draft = makeDraft();
      const result = await evaluateClearance(draft);
      expect(result.passed).toBe(true);
      expect(result.gaps).toEqual([]);
    });

    test('all checklist items are true', async () => {
      const draft = makeDraft();
      const result = await evaluateClearance(draft);
      expect(result.checklist.coreObjectiveDefined).toBe(true);
      expect(result.checklist.scopeBoundariesEstablished).toBe(true);
      expect(result.checklist.noAmbiguities).toBe(true);
      expect(result.checklist.technicalApproachDecided).toBe(true);
      expect(result.checklist.noBlockingQuestions).toBe(true);
    });
  });

  describe('coreObjectiveDefined', () => {
    test('passes with confirmedRequirements non-empty', async () => {
      const draft = makeDraft({ userGoal: 'short', confirmedRequirements: ['req'] });
      const result = await evaluateClearance(draft);
      expect(result.checklist.coreObjectiveDefined).toBe(true);
    });

    test('passes with userGoal >10 chars', async () => {
      const draft = makeDraft({ userGoal: 'this is long enough goal', confirmedRequirements: [] });
      const result = await evaluateClearance(draft);
      expect(result.checklist.coreObjectiveDefined).toBe(true);
    });

    test('fails at exactly 10 chars + empty requirements', async () => {
      const draft = makeDraft({ userGoal: '1234567890', confirmedRequirements: [] });
      expect(draft.findings.userGoal.length).toBe(10);
      const result = await evaluateClearance(draft);
      expect(result.checklist.coreObjectiveDefined).toBe(false);
    });

    test('passes with 11 char goal', async () => {
      const draft = makeDraft({ userGoal: '12345678901', confirmedRequirements: [] });
      expect(draft.findings.userGoal.length).toBe(11);
      const result = await evaluateClearance(draft);
      expect(result.checklist.coreObjectiveDefined).toBe(true);
    });
  });

  describe('scopeBoundariesEstablished', () => {
    test('fails if inclusions empty', async () => {
      const draft = makeDraft({ scopeInclusions: [], scopeExclusions: ['something'] });
      const result = await evaluateClearance(draft);
      expect(result.checklist.scopeBoundariesEstablished).toBe(false);
    });

    test('fails if exclusions empty', async () => {
      const draft = makeDraft({ scopeInclusions: ['something'], scopeExclusions: [] });
      const result = await evaluateClearance(draft);
      expect(result.checklist.scopeBoundariesEstablished).toBe(false);
    });
  });

  describe('noAmbiguities', () => {
    test('passes if confirmedRequirements non-empty', async () => {
      const draft = makeDraft({ confirmedRequirements: ['req'] });
      const result = await evaluateClearance(draft);
      expect(result.checklist.noAmbiguities).toBe(true);
    });

    test('fails if confirmedRequirements empty', async () => {
      const draft = makeDraft({ confirmedRequirements: [] });
      const result = await evaluateClearance(draft);
      expect(result.checklist.noAmbiguities).toBe(false);
    });
  });

  describe('technicalApproachDecided', () => {
    test('trivial intent always passes', async () => {
      const draft = makeDraft({ intent: 'trivial', technicalDecisions: {} });
      const result = await evaluateClearance(draft);
      expect(result.checklist.technicalApproachDecided).toBe(true);
    });

    test('non-trivial needs technicalDecisions keys', async () => {
      const draft = makeDraft({ intent: 'build-from-scratch', technicalDecisions: {} });
      const result = await evaluateClearance(draft);
      expect(result.checklist.technicalApproachDecided).toBe(false);
    });

    test('non-trivial passes with technicalDecisions populated', async () => {
      const draft = makeDraft({ intent: 'build-from-scratch', technicalDecisions: { approach: 'REST' } });
      const result = await evaluateClearance(draft);
      expect(result.checklist.technicalApproachDecided).toBe(true);
    });
  });

  describe('noBlockingQuestions', () => {
    test('passes when openQuestions empty', async () => {
      const draft = makeDraft({ openQuestions: [] });
      const result = await evaluateClearance(draft);
      expect(result.checklist.noBlockingQuestions).toBe(true);
    });

    test('fails when openQuestions non-empty', async () => {
      const draft = makeDraft({ openQuestions: ['what about X?'] });
      const result = await evaluateClearance(draft);
      expect(result.checklist.noBlockingQuestions).toBe(false);
    });
  });

  describe('gap generation', () => {
    test('critical gap for coreObjectiveDefined', async () => {
      const draft = makeDraft({ userGoal: 'short', confirmedRequirements: [] });
      const result = await evaluateClearance(draft);
      const gap = result.gaps.find(g => g.item === 'coreObjectiveDefined');
      expect(gap).toBeDefined();
      expect(gap!.type).toBe('critical');
    });

    test('critical gap for scopeBoundariesEstablished', async () => {
      const draft = makeDraft({ scopeInclusions: [], scopeExclusions: [] });
      const result = await evaluateClearance(draft);
      const gap = result.gaps.find(g => g.item === 'scopeBoundariesEstablished');
      expect(gap).toBeDefined();
      expect(gap!.type).toBe('critical');
    });

    test('critical gap for noAmbiguities', async () => {
      const draft = makeDraft({ confirmedRequirements: [] });
      const result = await evaluateClearance(draft);
      const gap = result.gaps.find(g => g.item === 'noAmbiguities');
      expect(gap).toBeDefined();
      expect(gap!.type).toBe('critical');
    });

    test('critical gap for noBlockingQuestions', async () => {
      const draft = makeDraft({ openQuestions: ['blocking question'] });
      const result = await evaluateClearance(draft);
      const gap = result.gaps.find(g => g.item === 'noBlockingQuestions');
      expect(gap).toBeDefined();
      expect(gap!.type).toBe('critical');
    });

    test('minor gap for technicalApproachDecided', async () => {
      const draft = makeDraft({ intent: 'mid-sized', technicalDecisions: {} });
      const result = await evaluateClearance(draft);
      const gap = result.gaps.find(g => g.item === 'technicalApproachDecided');
      expect(gap).toBeDefined();
      expect(gap!.type).toBe('minor');
    });

    test('assumptions[0] used in ambiguity gap question', async () => {
      const draft = makeDraft({
        confirmedRequirements: [],
        assumptions: ['we use PostgreSQL'],
      });
      const result = await evaluateClearance(draft);
      const gap = result.gaps.find(g => g.item === 'noAmbiguities');
      expect(gap!.suggestedQuestion).toContain('we use PostgreSQL');
    });

    test('openQuestions[0] used in blocking gap question', async () => {
      const draft = makeDraft({ openQuestions: ['Should we use REST or GraphQL?'] });
      const result = await evaluateClearance(draft);
      const gap = result.gaps.find(g => g.item === 'noBlockingQuestions');
      expect(gap!.suggestedQuestion).toBe('Should we use REST or GraphQL?');
    });

    test('generic fallback when no assumptions', async () => {
      const draft = makeDraft({ confirmedRequirements: [], assumptions: [] });
      const result = await evaluateClearance(draft);
      const gap = result.gaps.find(g => g.item === 'noAmbiguities');
      expect(gap!.suggestedQuestion).toContain('constraints or requirements');
    });
  });
});
