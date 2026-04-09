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

// src/cli/compute-signals.ts
import { readFile, writeFile } from "fs/promises";
import { join, dirname } from "path";
import { execSync } from "child_process";

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

// src/cli/compute-signals.ts
function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}
function exec(cmd) {
  try {
    return execSync(cmd, { encoding: "utf-8", timeout: 1e4, stdio: ["pipe", "pipe", "pipe"] }).trim();
  } catch {
    return "";
  }
}
function computeFileScope(files) {
  if (files.length === 0)
    return 1;
  let totalLines = 0;
  for (const file of files) {
    const output = exec(`wc -l < "${file}" 2>/dev/null`);
    totalLines += parseInt(output, 10) || 0;
  }
  const fileCount = files.length;
  if (fileCount <= 1 && totalLines < 100)
    return 1;
  if (fileCount <= 2 && totalLines < 300)
    return 2;
  if (fileCount <= 3 && totalLines < 600)
    return 3;
  if (fileCount <= 4 && totalLines < 1000)
    return 4;
  return 5;
}
function computeCoupling(files) {
  if (files.length === 0)
    return 1;
  let totalConnections = 0;
  for (const file of files) {
    const basename = file.replace(/\.(ts|js|tsx|jsx)$/, "").replace(/^.*\//, "");
    const importPattern = `from.*['"].*${basename}['"]`;
    const output = exec(`grep -r -l "${importPattern}" --include="*.ts" --include="*.tsx" --include="*.js" . 2>/dev/null`);
    const fanIn = output ? output.split(`
`).filter(Boolean).length : 0;
    const fileContent = exec(`cat "${file}" 2>/dev/null`);
    const imports = fileContent.match(/from\s+['"][^'"]+['"]/g);
    const fanOut = imports ? imports.length : 0;
    totalConnections += fanIn + fanOut;
  }
  const avg = totalConnections / files.length;
  if (avg <= 2)
    return 1;
  if (avg <= 5)
    return 2;
  if (avg <= 10)
    return 3;
  if (avg <= 20)
    return 4;
  return 5;
}
function computeGitRisk(files) {
  if (files.length === 0)
    return 1;
  let totalChurn = 0;
  let totalAuthors = 0;
  let totalBugFixes = 0;
  let existingFiles = 0;
  for (const file of files) {
    const churnOutput = exec(`git log --oneline --since="6 months ago" -- "${file}" 2>/dev/null`);
    const churn = churnOutput ? churnOutput.split(`
`).filter(Boolean).length : 0;
    if (churn === 0)
      continue;
    existingFiles++;
    totalChurn += churn;
    const authorOutput = exec(`git log --format="%aN" -- "${file}" 2>/dev/null | sort -u`);
    totalAuthors += authorOutput ? authorOutput.split(`
`).filter(Boolean).length : 0;
    const bugOutput = exec(`git log --oneline --grep="fix\\|bug" -- "${file}" 2>/dev/null`);
    totalBugFixes += bugOutput ? bugOutput.split(`
`).filter(Boolean).length : 0;
  }
  if (existingFiles === 0)
    return 1;
  const avgChurn = totalChurn / existingFiles;
  const avgAuthors = totalAuthors / existingFiles;
  const avgBugs = totalBugFixes / existingFiles;
  const score = avgChurn / 10 + avgAuthors / 3 + avgBugs / 2;
  if (score < 1)
    return 1;
  if (score < 2)
    return 2;
  if (score < 4)
    return 3;
  if (score < 7)
    return 4;
  return 5;
}
function computeTestCoverage(files, testsRequired) {
  if (files.length === 0)
    return 1;
  let coveredFiles = 0;
  for (const file of files) {
    const base = file.replace(/\.(ts|js|tsx|jsx)$/, "");
    const dir = dirname(file);
    const testPatterns = [
      `${base}.test.ts`,
      `${base}.test.tsx`,
      `${base}.test.js`,
      `${base}.spec.ts`,
      `${base}.spec.js`,
      join(dir, "__tests__", `${file.replace(/^.*\//, "").replace(/\.(ts|js|tsx|jsx)$/, "")}.test.ts`),
      join(dir, "__tests__", `${file.replace(/^.*\//, "").replace(/\.(ts|js|tsx|jsx)$/, "")}.test.js`)
    ];
    for (const pattern of testPatterns) {
      const s = exec(`test -f "${pattern}" && echo "exists"`);
      if (s === "exists") {
        coveredFiles++;
        break;
      }
    }
  }
  const coverage = coveredFiles / files.length;
  if (coverage >= 0.8)
    return 1;
  if (coverage >= 0.5)
    return 2;
  if (coverage >= 0.2)
    return 3;
  if (!testsRequired)
    return 3;
  return testsRequired && coverage === 0 ? 5 : 4;
}
function computeComposite(signals) {
  const weighted = (signals.fileScope + signals.coupling * 1.5 + signals.gitRisk * 1.25 + signals.testCoverage * 0.75) / 4.5;
  return clamp(Math.round(weighted), 1, 5);
}
function collectLeafTasks(task) {
  if (!task.subtasks || task.subtasks.length === 0)
    return [task];
  return task.subtasks.flatMap(collectLeafTasks);
}
async function main() {
  const planId = process.argv[2];
  if (!planId) {
    console.error("Usage: compute-signals.ts <planId>");
    process.exit(1);
  }
  const plansDir = join(process.cwd(), ".fractal-planner", "plans", planId);
  const tasksPath = join(plansDir, "tasks.md");
  let tasksMarkdown;
  try {
    tasksMarkdown = await readFile(tasksPath, "utf-8");
  } catch {
    console.error(`Cannot read ${tasksPath}`);
    process.exit(1);
  }
  const rootTask = parseTasksMarkdown(tasksMarkdown);
  const leafTasks = collectLeafTasks(rootTask);
  const signals = {};
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
  const signalsPath = join(plansDir, "signals.json");
  await writeFile(signalsPath, JSON.stringify(signals, null, 2), "utf-8");
  console.log(JSON.stringify({
    planId,
    taskCount: leafTasks.length,
    signals,
    signalsFile: signalsPath
  }));
}
var isMainModule = typeof Bun !== "undefined" ? Bun.main === import.meta.path : __require.main == __require.module;
if (isMainModule) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
export {
  computeTestCoverage,
  computeGitRisk,
  computeFileScope,
  computeCoupling,
  computeComposite
};
