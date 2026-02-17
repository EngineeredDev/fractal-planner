/**
 * Clearance Check Module
 *
 * Evaluates if interview has gathered enough context to proceed.
 * Adapted from oh-my-opencode clearance checklist.
 */

import type { ClearanceCheck, ClearanceGap, InterviewDraft } from '../types/index.js';

/**
 * Evaluate if interview has gathered enough context to proceed
 */
export async function evaluateClearance(draft: InterviewDraft): Promise<ClearanceCheck> {
  const { findings } = draft;

  const checklist = {
    coreObjectiveDefined: evaluateCoreObjective(findings),
    scopeBoundariesEstablished: evaluateScopeBoundaries(findings),
    noAmbiguities: evaluateAmbiguities(findings),
    technicalApproachDecided: evaluateTechnicalApproach(findings),
    noBlockingQuestions: findings.openQuestions.length === 0,
    testStrategyIdentified: evaluateTestStrategy(findings)
  };

  const gaps: ClearanceGap[] = [];

  // Check each item and classify gaps
  if (!checklist.coreObjectiveDefined) {
    gaps.push({
      type: 'critical',
      item: 'coreObjectiveDefined',
      description: 'Core objective not clearly defined',
      suggestedQuestion: 'What is the specific outcome you want to achieve?'
    });
  }

  if (!checklist.scopeBoundariesEstablished) {
    gaps.push({
      type: 'critical',
      item: 'scopeBoundariesEstablished',
      description: 'Scope boundaries not established',
      suggestedQuestion: 'What should be explicitly EXCLUDED from this work?'
    });
  }

  if (!checklist.noAmbiguities) {
    gaps.push({
      type: 'critical',
      item: 'noAmbiguities',
      description: 'Critical assumptions need validation',
      suggestedQuestion: findings.assumptions[0] ?
        `You mentioned "${findings.assumptions[0]}" - is this correct?` :
        'Are there any constraints or requirements I should be aware of?'
    });
  }

  if (!checklist.technicalApproachDecided) {
    gaps.push({
      type: 'minor',
      item: 'technicalApproachDecided',
      description: 'Technical approach not decided',
      suggestedQuestion: 'Should this follow existing patterns in the codebase, or use a new approach?'
    });
  }

  if (!checklist.noBlockingQuestions) {
    gaps.push({
      type: 'critical',
      item: 'noBlockingQuestions',
      description: `${findings.openQuestions.length} open questions remain`,
      suggestedQuestion: findings.openQuestions[0]
    });
  }

  if (!checklist.testStrategyIdentified) {
    gaps.push({
      type: 'minor',
      item: 'testStrategyIdentified',
      description: 'Test strategy not identified',
      suggestedQuestion: 'How should this change be tested? (unit tests, integration tests, manual verification, etc.)'
    });
  }

  const passed = Object.values(checklist).every(v => v === true);

  return { passed, checklist, gaps };
}

function evaluateCoreObjective(findings: InterviewDraft['findings']): boolean {
  // Core objective requires at least one user-confirmed requirement.
  // Goal text alone is not sufficient — the user must have validated something.
  return findings.confirmedRequirements.length > 0;
}

function evaluateScopeBoundaries(findings: InterviewDraft['findings']): boolean {
  return findings.scopeInclusions.length > 0 &&
         findings.scopeExclusions.length > 0;
}

function evaluateAmbiguities(findings: InterviewDraft['findings']): boolean {
  // No ambiguities if all assumptions have been validated
  // For MVP, consider this true if we have at least one confirmed requirement
  return findings.confirmedRequirements.length > 0;
}

function evaluateTechnicalApproach(findings: InterviewDraft['findings']): boolean {
  // For build-from-scratch, we need technical decisions
  // For trivial, we can skip this
  if (findings.intent === 'trivial') return true;
  return Object.keys(findings.technicalDecisions).length > 0;
}

function evaluateTestStrategy(findings: InterviewDraft['findings']): boolean {
  if (findings.intent === 'trivial') return true;
  if (findings.codebaseContext?.testStrategy) return true;
  const hasTestKey = Object.keys(findings.technicalDecisions).some(
    key => /test/i.test(key)
  );
  return hasTestKey;
}
