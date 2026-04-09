#!/usr/bin/env bun
import { createRequire } from "node:module";
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __require = /* @__PURE__ */ createRequire(import.meta.url);

// src/cli/validate-tasks.ts
import { readFile } from "fs/promises";
import { join } from "path";

// src/utils/task-parser.ts
var TASK_LINE_RE = /^(\s*)-\s*\[ID:\s*([^\]]+)\]\s*(.+?)\s*\(Complexity:\s*(\d+)\)\s*$/;
var HEADING_TASK_RE = /^(#{1,6})\s*\[([^\]]+)\]\s*(.+?)\s*$/;
var ACCEPTANCE_RE = /^\s*-\s*Acceptance(?:\s+Criteria)?:\s*(.*)$/;
var COMPLEXITY_RE = /^\s*-\s*Complexity:\s*(\d+)\s*$/;
var DESCRIPTION_RE = /^\s*-\s*Description:\s*/;
var DEPENDENCIES_RE = /^\s*-\s*Dependencies:\s*(.+)$/;
var FILES_RE = /^\s*-\s*Files:\s*(.+)$/;
var TESTS_REQUIRED_RE = /^\s*-\s*Tests Required:\s*(.+)$/;
var HINTS_RE = /^\s*-\s*Hints:\s*(.*)$/;
var REFERENCES_RE = /^\s*-\s*References:\s*(.*)$/;
var GUARDRAILS_RE = /^\s*-\s*Guardrails:\s*(.*)$/;
var TEST_COMMANDS_RE = /^\s*-\s*Test Commands:\s*(.+)$/;
var DIMENSIONS_RE = /^\s*-\s*Complexity Dimensions:\s*(.+)$/;
var BLOCK_ITEM_RE = /^\s*-\s+(.+)$/;
function parseTaskLine(line) {
  const match = line.match(TASK_LINE_RE);
  if (match) {
    return {
      indent: match[1].length,
      id: match[2].trim(),
      description: match[3].trim(),
      complexity: parseInt(match[4], 10),
      fromHeading: false
    };
  }
  const headingMatch = line.match(HEADING_TASK_RE);
  if (headingMatch) {
    const headingLevel = headingMatch[1].length;
    return {
      indent: (headingLevel - 1) * 2,
      id: headingMatch[2].trim(),
      description: headingMatch[3].trim(),
      complexity: -1,
      fromHeading: true
    };
  }
  return null;
}
function parseAcceptance(raw) {
  return raw.split(/,\s*/).map((s) => s.trim()).filter(Boolean);
}
function parseDependencies(raw) {
  const trimmed = raw.trim().toLowerCase();
  if (trimmed === "none" || trimmed === "")
    return [];
  return raw.split(/,\s*/).map((s) => s.trim()).filter(Boolean);
}
function parseFiles(raw) {
  const trimmed = raw.trim().toLowerCase();
  if (trimmed === "none" || trimmed === "")
    return [];
  return raw.split(/,\s*/).map((s) => s.trim()).filter(Boolean);
}
function parseBlockItem(line) {
  const match = line.match(BLOCK_ITEM_RE);
  if (!match)
    return null;
  return match[1].trim();
}
function collectMetadata(lines, startIdx) {
  const meta = {
    acceptance: [],
    dependencies: [],
    files: [],
    testsRequired: false,
    hints: [],
    references: [],
    guardrails: [],
    testCommands: []
  };
  let currentBlock = null;
  for (let i = startIdx;i < lines.length; i++) {
    const line = lines[i];
    if (TASK_LINE_RE.test(line) || HEADING_TASK_RE.test(line))
      break;
    const accMatch = line.match(ACCEPTANCE_RE);
    if (accMatch) {
      currentBlock = null;
      const content = accMatch[1].trim();
      if (content) {
        meta.acceptance = parseAcceptance(content);
      } else {
        currentBlock = "acceptance";
      }
      continue;
    }
    const complexityMatch = line.match(COMPLEXITY_RE);
    if (complexityMatch) {
      currentBlock = null;
      meta.complexity = parseInt(complexityMatch[1], 10);
      continue;
    }
    if (DESCRIPTION_RE.test(line)) {
      currentBlock = null;
      continue;
    }
    const depMatch = line.match(DEPENDENCIES_RE);
    if (depMatch) {
      currentBlock = null;
      meta.dependencies = parseDependencies(depMatch[1]);
      continue;
    }
    const filesMatch = line.match(FILES_RE);
    if (filesMatch) {
      currentBlock = null;
      meta.files = parseFiles(filesMatch[1]);
      continue;
    }
    const testsMatch = line.match(TESTS_REQUIRED_RE);
    if (testsMatch) {
      currentBlock = null;
      meta.testsRequired = testsMatch[1].trim().toLowerCase() === "yes";
      continue;
    }
    const hintsMatch = line.match(HINTS_RE);
    if (hintsMatch) {
      currentBlock = null;
      const content = hintsMatch[1].trim();
      if (content) {
        meta.hints = [content];
      } else {
        currentBlock = "hints";
      }
      continue;
    }
    const refsMatch = line.match(REFERENCES_RE);
    if (refsMatch) {
      currentBlock = null;
      const content = refsMatch[1].trim();
      if (content) {
        meta.references = [content];
      } else {
        currentBlock = "references";
      }
      continue;
    }
    const guardrailsMatch = line.match(GUARDRAILS_RE);
    if (guardrailsMatch) {
      currentBlock = null;
      const content = guardrailsMatch[1].trim();
      if (content) {
        meta.guardrails = [content];
      } else {
        currentBlock = "guardrails";
      }
      continue;
    }
    const testCmdsMatch = line.match(TEST_COMMANDS_RE);
    if (testCmdsMatch) {
      currentBlock = null;
      meta.testCommands = testCmdsMatch[1].trim().split(/;\s*/).map((s) => s.trim()).filter(Boolean);
      continue;
    }
    const dimensionsMatch = line.match(DIMENSIONS_RE);
    if (dimensionsMatch) {
      currentBlock = null;
      const dims = {};
      for (const pair of dimensionsMatch[1].split(/,\s*/)) {
        const eqIdx = pair.indexOf("=");
        if (eqIdx > 0) {
          const key = pair.slice(0, eqIdx).trim();
          const val = parseInt(pair.slice(eqIdx + 1).trim(), 10);
          if (key && !isNaN(val))
            dims[key] = val;
        }
      }
      if (Object.keys(dims).length > 0)
        meta.dimensions = dims;
      continue;
    }
    if (currentBlock) {
      const item = parseBlockItem(line);
      if (item) {
        meta[currentBlock].push(item);
      } else if (line.trim() === "") {
        currentBlock = null;
      }
    }
  }
  return meta;
}
function parseTasksMarkdown(markdown) {
  const lines = markdown.split(`
`);
  const flatTasks = [];
  for (let i = 0;i < lines.length; i++) {
    const parsed = parseTaskLine(lines[i]);
    if (!parsed)
      continue;
    const meta = collectMetadata(lines, i + 1);
    flatTasks.push({
      ...parsed,
      metadata: meta,
      lineIndex: i
    });
  }
  if (flatTasks.length === 0) {
    throw new Error("No tasks found in markdown");
  }
  for (const ft of flatTasks) {
    if (ft.complexity === -1) {
      ft.complexity = ft.metadata.complexity ?? 0;
    }
  }
  const hasHeadingFormat = flatTasks.some((ft) => ft.fromHeading);
  const minIndent = Math.min(...flatTasks.map((ft) => ft.indent));
  const topLevel = flatTasks.filter((ft) => ft.indent === minIndent);
  if (hasHeadingFormat && topLevel.length > 1) {
    const maxComplexity = Math.max(...topLevel.map((ft) => ft.complexity));
    flatTasks.unshift({
      indent: minIndent - 2,
      id: "root",
      description: topLevel.map((ft) => ft.description).join(", "),
      complexity: maxComplexity,
      fromHeading: true,
      metadata: {
        acceptance: [],
        dependencies: [],
        files: [],
        testsRequired: false,
        hints: [],
        references: [],
        guardrails: [],
        testCommands: []
      },
      lineIndex: -1
    });
  }
  const toTask = (ft) => {
    const metadata = {
      filesToModify: ft.metadata.files,
      testsRequired: ft.metadata.testsRequired
    };
    if (ft.metadata.hints.length > 0)
      metadata.hints = ft.metadata.hints;
    if (ft.metadata.references.length > 0)
      metadata.references = ft.metadata.references;
    if (ft.metadata.guardrails.length > 0)
      metadata.guardrails = ft.metadata.guardrails;
    if (ft.metadata.testCommands.length > 0)
      metadata.testCommands = ft.metadata.testCommands;
    const task = {
      id: ft.id,
      description: ft.description,
      estimatedComplexity: ft.complexity,
      acceptanceCriteria: ft.metadata.acceptance,
      dependencies: ft.metadata.dependencies,
      status: "pending",
      metadata
    };
    if (ft.metadata.dimensions) {
      const d = ft.metadata.dimensions;
      task.complexityDimensions = {
        scope: d.scope ?? 0,
        risk: d.risk ?? 0,
        novelty: d.novelty ?? 0,
        integration: d.integration ?? 0,
        testing: d.testing ?? 0
      };
    }
    return task;
  };
  return buildTree(flatTasks, toTask);
}
function buildTree(flatTasks, toTask) {
  if (flatTasks.length === 1) {
    return toTask(flatTasks[0]);
  }
  const root = toTask(flatTasks[0]);
  const rootIndent = flatTasks[0].indent;
  const stack = [{ task: root, indent: rootIndent }];
  for (let i = 1;i < flatTasks.length; i++) {
    const ft = flatTasks[i];
    const task = toTask(ft);
    while (stack.length > 1 && stack[stack.length - 1].indent >= ft.indent) {
      stack.pop();
    }
    const parent = stack[stack.length - 1].task;
    if (!parent.subtasks)
      parent.subtasks = [];
    parent.subtasks.push(task);
    stack.push({ task, indent: ft.indent });
  }
  return root;
}

// src/phases/decomposition.ts
function validateTaskTree(root, maxComplexity) {
  const violations = [];
  const warnings = [];
  const distribution = {};
  const dimensionSums = {};
  let dimensionCount = 0;
  function walk(task, parentId, depth, isRoot) {
    const isLeaf = !task.subtasks || task.subtasks.length === 0;
    if (isLeaf) {
      const c = task.estimatedComplexity;
      distribution[c] = (distribution[c] || 0) + 1;
      if (task.complexityDimensions) {
        dimensionCount++;
        for (const [key, val] of Object.entries(task.complexityDimensions)) {
          dimensionSums[key] = (dimensionSums[key] || 0) + val;
        }
      }
      if (c > maxComplexity) {
        violations.push({
          type: "over-complexity",
          id: task.id,
          description: task.description,
          parentId,
          depth,
          detail: `complexity ${c} exceeds max ${maxComplexity}`
        });
      }
      if (task.acceptanceCriteria.length === 0) {
        violations.push({
          type: "missing-acceptance",
          id: task.id,
          description: task.description,
          parentId,
          depth,
          detail: "leaf task has no acceptance criteria"
        });
      }
      if (task.metadata?.filesToModify === undefined) {
        violations.push({
          type: "missing-files",
          id: task.id,
          description: task.description,
          parentId,
          depth,
          detail: "leaf task missing filesToModify metadata"
        });
      }
      if (task.metadata?.testsRequired === undefined) {
        violations.push({
          type: "missing-tests-required",
          id: task.id,
          description: task.description,
          parentId,
          depth,
          detail: "leaf task missing testsRequired metadata"
        });
      }
      if (!task.metadata?.hints || task.metadata.hints.length === 0) {
        violations.push({
          type: "missing-hints",
          id: task.id,
          description: task.description,
          parentId,
          depth,
          detail: "leaf task has no implementation hints"
        });
      }
      if (!task.metadata?.guardrails || task.metadata.guardrails.length === 0) {
        violations.push({
          type: "missing-guardrails",
          id: task.id,
          description: task.description,
          parentId,
          depth,
          detail: "leaf task has no guardrails"
        });
      }
      if (task.metadata?.filesToModify && task.metadata.filesToModify.length > 0) {
        const dirs = new Set(task.metadata.filesToModify.map((f) => f.split("/").slice(0, -1).join("/")).filter(Boolean));
        if (dirs.size >= 3) {
          warnings.push({
            type: "scattered-files",
            id: task.id,
            description: task.description,
            parentId,
            depth,
            detail: `modifies files across ${dirs.size} directories — consider splitting`
          });
        }
      }
    } else {
      if (!isRoot) {
        const count = task.subtasks.length;
        if (count < 2 || count > 5) {
          violations.push({
            type: "subtask-count",
            id: task.id,
            description: task.description,
            parentId,
            depth,
            detail: `has ${count} subtask(s), expected 2-5`
          });
        }
      }
      for (const child of task.subtasks) {
        walk(child, task.id, depth + 1, false);
      }
    }
  }
  walk(root, null, 0, true);
  const dimensionAverages = dimensionCount > 0 ? Object.fromEntries(Object.entries(dimensionSums).map(([k, v]) => [k, Math.round(v / dimensionCount * 10) / 10])) : undefined;
  return {
    valid: violations.length === 0,
    maxComplexity,
    totalLeafTasks: countLeafTasks(root),
    violations,
    warnings,
    stats: {
      maxDepth: calculateMaxDepth(root),
      leafComplexityDistribution: distribution,
      dimensionAverages
    }
  };
}
function countLeafTasks(task) {
  if (!task.subtasks || task.subtasks.length === 0) {
    return 1;
  }
  return task.subtasks.reduce((sum, st) => sum + countLeafTasks(st), 0);
}
function calculateMaxDepth(task, currentDepth = 0) {
  if (!task.subtasks || task.subtasks.length === 0) {
    return currentDepth;
  }
  return Math.max(...task.subtasks.map((st) => calculateMaxDepth(st, currentDepth + 1)));
}

// src/cli/validate-tasks.ts
var planId = process.argv[2];
var maxComplexity = process.argv[3] ? parseInt(process.argv[3], 10) : 3;
if (!planId) {
  console.error("Usage: validate-tasks.ts <planId> [maxComplexity]");
  process.exit(1);
}
async function main() {
  const tasksPath = join(process.cwd(), ".fractal-planner", "plans", planId, "tasks.md");
  let tasksMarkdown;
  try {
    tasksMarkdown = await readFile(tasksPath, "utf-8");
  } catch {
    console.error(`Cannot read ${tasksPath}`);
    process.exit(1);
  }
  const rootTask = parseTasksMarkdown(tasksMarkdown);
  const result = validateTaskTree(rootTask, maxComplexity);
  console.log(JSON.stringify(result));
}
main().catch((err) => {
  console.error(err);
  process.exit(1);
});
