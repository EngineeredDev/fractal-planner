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

const DRAFTS_DIR = '.fractal-planner/drafts';

/**
 * Create a new draft file for an interview session
 */
export async function createDraft(
  name: string,
  userGoal: string,
  intent: IntentType
): Promise<string> {
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  const draftPath = join(process.cwd(), DRAFTS_DIR, `${slug}.json`);

  // Ensure directory exists
  if (!existsSync(join(process.cwd(), DRAFTS_DIR))) {
    await mkdir(join(process.cwd(), DRAFTS_DIR), { recursive: true });
  }

  const draft: InterviewDraft = {
    name,
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
  return draftPath;
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
