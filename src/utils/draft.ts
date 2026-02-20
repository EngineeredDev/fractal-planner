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

const STOP_WORDS = new Set([
  'a', 'an', 'the', 'to', 'for', 'in', 'of', 'with', 'and', 'or', 'but', 'is', 'it', 'on', 'at', 'by', 'from',
  'add', 'create', 'implement', 'build', 'make', 'update', 'fix', 'want', 'need', 'please', 'should', 'would',
  'like', 'can', 'do', 'that', 'this', 'be', 'have', 'has', 'my', 'our', 'i', 'we', 'me', 'new',
]);

function generateTimestampPlanId(): string {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
}

export function generateSlugPlanId(description: string): string {
  const words = description
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .split(/[\s-]+/)
    .filter(w => w.length > 0 && !STOP_WORDS.has(w));

  if (words.length === 0) return generateTimestampPlanId();

  return words.slice(0, 3).join('-').slice(0, 30);
}

function resolveUniqueId(base: string, plansRoot: string): string {
  if (!existsSync(join(plansRoot, base))) return base;
  for (let i = 2; i <= 9; i++) {
    const candidate = `${base}-${i}`;
    if (!existsSync(join(plansRoot, candidate))) return candidate;
  }
  return generateTimestampPlanId();
}

export async function createDraft(
  name: string,
  userGoal: string,
  intent: IntentType,
  planId?: string,
  plansDir?: string
): Promise<{ draftPath: string; planId: string }> {
  const resolvedPlansDir = plansDir ?? getConfig().plansDir;
  const plansRoot = join(process.cwd(), resolvedPlansDir);
  const resolvedPlanId = planId ?? resolveUniqueId(generateSlugPlanId(userGoal), plansRoot);
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  const planDir = join(plansRoot, resolvedPlanId);
  const draftPath = join(planDir, `${slug}.json`);

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
