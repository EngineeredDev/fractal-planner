/**
 * Draft Management Utility
 *
 * Manages persistent interview state across turns.
 * The draft file serves as working memory during the interview loop.
 */

import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';
import type { InterviewDraft, InterviewFindings, IntentType } from '../types/index.js';
import { getConfig } from '../config.js';

/**
 * Generate a timestamp-based plan ID (YYYYMMDD-HHmmss)
 */
function generatePlanId(): string {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
}

/**
 * Create a new draft file for an interview session
 */
export async function createDraft(
  name: string,
  userGoal: string,
  intent: IntentType,
  planId?: string,
  plansDir?: string
): Promise<{ draftPath: string; planId: string }> {
  const resolvedPlanId = planId ?? generatePlanId();
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  const resolvedPlansDir = plansDir ?? getConfig().plansDir;
  const planDir = join(process.cwd(), resolvedPlansDir, resolvedPlanId);
  const draftPath = join(planDir, `${slug}.json`);

  // Ensure plan subdirectory exists
  if (!existsSync(planDir)) {
    await mkdir(planDir, { recursive: true });
  }

  const draft: InterviewDraft = {
    name,
    planId: resolvedPlanId,
    created: new Date().toISOString(),
    lastUpdated: new Date().toISOString(),
    findings: {
      intent,
      userGoal,
      confirmedRequirements: [],
      scopeInclusions: [],
      scopeExclusions: [],
      technicalDecisions: {},
      constraints: [],
      assumptions: [],
      openQuestions: []
    }
  };

  await writeFile(draftPath, JSON.stringify(draft, null, 2));
  return { draftPath, planId: resolvedPlanId };
}

/**
 * Update draft with new findings
 */
export async function updateDraft(
  draftPath: string,
  updates: Partial<InterviewFindings>
): Promise<void> {
  const draft: InterviewDraft = JSON.parse(await readFile(draftPath, 'utf-8'));

  draft.findings = { ...draft.findings, ...updates };
  draft.lastUpdated = new Date().toISOString();

  await writeFile(draftPath, JSON.stringify(draft, null, 2));
}

/**
 * Read draft file
 */
export async function readDraft(draftPath: string): Promise<InterviewDraft> {
  const content = await readFile(draftPath, 'utf-8');
  return JSON.parse(content);
}
