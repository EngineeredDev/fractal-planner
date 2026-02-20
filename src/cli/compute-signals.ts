#!/usr/bin/env bun
import { readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { execSync } from 'child_process';
import { parseTasksMarkdown } from '../utils/task-parser.js';
import type { Task } from '../types/index.js';

export interface TaskSignals {
  fileScope: number;
  coupling: number;
  gitRisk: number;
  testCoverage: number;
  composite: number;
}

function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

function exec(cmd: string): string {
  try {
    return execSync(cmd, { encoding: 'utf-8', timeout: 10_000, stdio: ['pipe', 'pipe', 'pipe'] }).trim();
  } catch {
    return '';
  }
}

export function computeFileScope(files: string[]): number {
  if (files.length === 0) return 1;

  let totalLines = 0;
  for (const file of files) {
    const output = exec(`wc -l < "${file}" 2>/dev/null`);
    totalLines += parseInt(output, 10) || 0;
  }

  const fileCount = files.length;
  if (fileCount <= 1 && totalLines < 100) return 1;
  if (fileCount <= 2 && totalLines < 300) return 2;
  if (fileCount <= 3 && totalLines < 600) return 3;
  if (fileCount <= 4 && totalLines < 1000) return 4;
  return 5;
}

export function computeCoupling(files: string[]): number {
  if (files.length === 0) return 1;

  let totalConnections = 0;
  for (const file of files) {
    const basename = file.replace(/\.(ts|js|tsx|jsx)$/, '').replace(/^.*\//, '');
    const importPattern = `from.*['"].*${basename}['"]`;
    const output = exec(`grep -r -l "${importPattern}" --include="*.ts" --include="*.tsx" --include="*.js" . 2>/dev/null`);
    const fanIn = output ? output.split('\n').filter(Boolean).length : 0;

    const fileContent = exec(`cat "${file}" 2>/dev/null`);
    const imports = fileContent.match(/from\s+['"][^'"]+['"]/g);
    const fanOut = imports ? imports.length : 0;

    totalConnections += fanIn + fanOut;
  }

  const avg = totalConnections / files.length;
  if (avg <= 2) return 1;
  if (avg <= 5) return 2;
  if (avg <= 10) return 3;
  if (avg <= 20) return 4;
  return 5;
}

export function computeGitRisk(files: string[]): number {
  if (files.length === 0) return 1;

  let totalChurn = 0;
  let totalAuthors = 0;
  let totalBugFixes = 0;
  let existingFiles = 0;

  for (const file of files) {
    const churnOutput = exec(`git log --oneline --since="6 months ago" -- "${file}" 2>/dev/null`);
    const churn = churnOutput ? churnOutput.split('\n').filter(Boolean).length : 0;

    if (churn === 0) continue;

    existingFiles++;
    totalChurn += churn;

    const authorOutput = exec(`git log --format="%aN" -- "${file}" 2>/dev/null | sort -u`);
    totalAuthors += authorOutput ? authorOutput.split('\n').filter(Boolean).length : 0;

    const bugOutput = exec(`git log --oneline --grep="fix\\|bug" -- "${file}" 2>/dev/null`);
    totalBugFixes += bugOutput ? bugOutput.split('\n').filter(Boolean).length : 0;
  }

  if (existingFiles === 0) return 1;

  const avgChurn = totalChurn / existingFiles;
  const avgAuthors = totalAuthors / existingFiles;
  const avgBugs = totalBugFixes / existingFiles;

  const score = (avgChurn / 10) + (avgAuthors / 3) + (avgBugs / 2);
  if (score < 1) return 1;
  if (score < 2) return 2;
  if (score < 4) return 3;
  if (score < 7) return 4;
  return 5;
}

export function computeTestCoverage(files: string[], testsRequired: boolean): number {
  if (files.length === 0) return 1;

  let coveredFiles = 0;
  for (const file of files) {
    const base = file.replace(/\.(ts|js|tsx|jsx)$/, '');
    const dir = dirname(file);

    const testPatterns = [
      `${base}.test.ts`,
      `${base}.test.tsx`,
      `${base}.test.js`,
      `${base}.spec.ts`,
      `${base}.spec.js`,
      join(dir, '__tests__', `${file.replace(/^.*\//, '').replace(/\.(ts|js|tsx|jsx)$/, '')}.test.ts`),
      join(dir, '__tests__', `${file.replace(/^.*\//, '').replace(/\.(ts|js|tsx|jsx)$/, '')}.test.js`),
    ];

    for (const pattern of testPatterns) {
      const s = exec(`test -f "${pattern}" && echo "exists"`);
      if (s === 'exists') {
        coveredFiles++;
        break;
      }
    }
  }

  const coverage = coveredFiles / files.length;
  if (coverage >= 0.8) return 1;
  if (coverage >= 0.5) return 2;
  if (coverage >= 0.2) return 3;
  if (!testsRequired) return 3;
  return testsRequired && coverage === 0 ? 5 : 4;
}

export function computeComposite(signals: Omit<TaskSignals, 'composite'>): number {
  const weighted = (
    signals.fileScope +
    signals.coupling * 1.5 +
    signals.gitRisk * 1.25 +
    signals.testCoverage * 0.75
  ) / 4.5;
  return clamp(Math.round(weighted), 1, 5);
}

function collectLeafTasks(task: Task): Task[] {
  if (!task.subtasks || task.subtasks.length === 0) return [task];
  return task.subtasks.flatMap(collectLeafTasks);
}

async function main() {
  const planId = process.argv[2];

  if (!planId) {
    console.error('Usage: compute-signals.ts <planId>');
    process.exit(1);
  }

  const plansDir = join(process.cwd(), '.fractal-planner', 'plans', planId);
  const tasksPath = join(plansDir, 'tasks.md');

  let tasksMarkdown: string;
  try {
    tasksMarkdown = await readFile(tasksPath, 'utf-8');
  } catch {
    console.error(`Cannot read ${tasksPath}`);
    process.exit(1);
  }

  const rootTask = parseTasksMarkdown(tasksMarkdown);
  const leafTasks = collectLeafTasks(rootTask);
  const signals: Record<string, TaskSignals> = {};

  for (const task of leafTasks) {
    const files = task.metadata?.filesToModify ?? [];
    const testsRequired = task.metadata?.testsRequired ?? false;

    const fileScope = computeFileScope(files);
    const coupling = computeCoupling(files);
    const gitRisk = computeGitRisk(files);
    const testCoverage = computeTestCoverage(files, testsRequired);
    const composite = computeComposite({ fileScope, coupling, gitRisk, testCoverage });

    signals[task.id] = { fileScope, coupling, gitRisk, testCoverage, composite };
  }

  const signalsPath = join(plansDir, 'signals.json');
  await writeFile(signalsPath, JSON.stringify(signals, null, 2), 'utf-8');

  console.log(JSON.stringify({
    planId,
    taskCount: leafTasks.length,
    signals,
    signalsFile: signalsPath,
  }));
}

// Only run main when executed directly, not when imported for testing
const isMainModule = typeof Bun !== 'undefined'
  ? Bun.main === import.meta.path
  : require.main === module;

if (isMainModule) {
  main().catch(err => {
    console.error(err);
    process.exit(1);
  });
}
