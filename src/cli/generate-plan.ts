#!/usr/bin/env bun
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { parseTasksMarkdown } from '../utils/task-parser.js';
import { getExecutionOrder, createImplementationPlan } from '../phases/planning.js';
import { loadConfig } from '../config.js';

const planId = process.argv[2];

if (!planId) {
  console.error('Usage: generate-plan.ts <planId>');
  process.exit(1);
}

async function main() {
  const config = await loadConfig();

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
  const plan = await createImplementationPlan(rootTask);
  const executionOrder = getExecutionOrder(rootTask, config.executionOrder);

  const lines: string[] = [
    '# Implementation Plan',
    '',
    '## Execution Order',
  ];

  executionOrder.forEach((task, idx) => {
    lines.push(`${idx + 1}. [Task ${task.id}]: ${task.description}`);
    lines.push(`   - Dependencies: ${task.dependencies.length > 0 ? task.dependencies.join(', ') : 'none'}`);
    if (task.acceptanceCriteria.length > 0) {
      lines.push('   - Acceptance:');
      task.acceptanceCriteria.forEach((criterion, ci) => {
        lines.push(`     ${ci + 1}. ${criterion}`);
      });
    }
    if (task.metadata?.filesToModify && task.metadata.filesToModify.length > 0) {
      lines.push(`   - Files: ${task.metadata.filesToModify.join(', ')}`);
    }
    if (task.metadata?.testsRequired !== undefined) {
      lines.push(`   - Tests Required: ${task.metadata.testsRequired ? 'yes' : 'no'}`);
    }
    if (task.metadata?.hints && task.metadata.hints.length > 0) {
      lines.push('   - Hints:');
      task.metadata.hints.forEach((hint, hi) => {
        lines.push(`     ${hi + 1}. ${hint}`);
      });
    }
    if (task.metadata?.references && task.metadata.references.length > 0) {
      lines.push('   - References:');
      task.metadata.references.forEach(ref => {
        lines.push(`     - ${ref}`);
      });
    }
    if (task.metadata?.guardrails && task.metadata.guardrails.length > 0) {
      lines.push('   - Guardrails:');
      task.metadata.guardrails.forEach(g => {
        lines.push(`     - ${g}`);
      });
    }
    if (task.metadata?.testCommands && task.metadata.testCommands.length > 0) {
      lines.push(`   - Test Commands: ${task.metadata.testCommands.join('; ')}`);
    }
  });

  const planMd = lines.join('\n') + '\n';
  const planPath = join(plansDir, 'plan.md');
  await writeFile(planPath, planMd, 'utf-8');

  console.log(JSON.stringify({
    planId,
    totalLeafTasks: plan.totalTasks,
    maxDepth: plan.maxDepth,
    executionOrder: executionOrder.map(t => t.id),
    planFile: planPath,
  }));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
