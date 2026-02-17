#!/usr/bin/env bun
import { readFile } from 'fs/promises';
import { join } from 'path';
import { parseTasksMarkdown } from '../utils/task-parser.js';
import { validateTaskTree } from '../phases/decomposition.js';

const planId = process.argv[2];
const maxComplexity = process.argv[3] ? parseInt(process.argv[3], 10) : 3;

if (!planId) {
  console.error('Usage: validate-tasks.ts <planId> [maxComplexity]');
  process.exit(1);
}

async function main() {
  const tasksPath = join(process.cwd(), '.fractal-planner', 'plans', planId, 'tasks.md');

  let tasksMarkdown: string;
  try {
    tasksMarkdown = await readFile(tasksPath, 'utf-8');
  } catch {
    console.error(`Cannot read ${tasksPath}`);
    process.exit(1);
  }

  const rootTask = parseTasksMarkdown(tasksMarkdown);
  const result = validateTaskTree(rootTask, maxComplexity);

  console.log(JSON.stringify(result));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
