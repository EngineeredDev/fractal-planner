import type { Task } from '../types/index.js';

interface ParsedLine {
  indent: number;
  id: string;
  description: string;
  complexity: number;
  fromHeading: boolean;
}

interface MetadataLines {
  acceptance: string[];
  dependencies: string[];
  files: string[];
  testsRequired: boolean;
  hints: string[];
  references: string[];
  guardrails: string[];
  testCommands: string[];
  complexity?: number;
  dimensions?: Record<string, number>;
}

const TASK_LINE_RE = /^(\s*)-\s*\[ID:\s*([^\]]+)\]\s*(.+?)\s*\(Complexity:\s*(\d+)\)\s*$/;
const HEADING_TASK_RE = /^(#{1,6})\s*\[([^\]]+)\]\s*(.+?)\s*$/;
const ACCEPTANCE_RE = /^\s*-\s*Acceptance(?:\s+Criteria)?:\s*(.*)$/;
const COMPLEXITY_RE = /^\s*-\s*Complexity:\s*(\d+)\s*$/;
const DESCRIPTION_RE = /^\s*-\s*Description:\s*/;
const DEPENDENCIES_RE = /^\s*-\s*Dependencies:\s*(.+)$/;
const FILES_RE = /^\s*-\s*Files:\s*(.+)$/;
const TESTS_REQUIRED_RE = /^\s*-\s*Tests Required:\s*(.+)$/;
const HINTS_RE = /^\s*-\s*Hints:\s*(.*)$/;
const REFERENCES_RE = /^\s*-\s*References:\s*(.*)$/;
const GUARDRAILS_RE = /^\s*-\s*Guardrails:\s*(.*)$/;
const TEST_COMMANDS_RE = /^\s*-\s*Test Commands:\s*(.+)$/;
const DIMENSIONS_RE = /^\s*-\s*Complexity Dimensions:\s*(.+)$/;

type BlockKey = 'acceptance' | 'hints' | 'references' | 'guardrails';

const BLOCK_ITEM_RE = /^\s*-\s+(.+)$/;

function parseTaskLine(line: string): ParsedLine | null {
  const match = line.match(TASK_LINE_RE);
  if (match) {
    return {
      indent: match[1].length,
      id: match[2].trim(),
      description: match[3].trim(),
      complexity: parseInt(match[4], 10),
      fromHeading: false,
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
      fromHeading: true,
    };
  }

  return null;
}

function parseAcceptance(raw: string): string[] {
  return raw.split(/,\s*/).map(s => s.trim()).filter(Boolean);
}

function parseDependencies(raw: string): string[] {
  const trimmed = raw.trim().toLowerCase();
  if (trimmed === 'none' || trimmed === '') return [];
  return raw.split(/,\s*/).map(s => s.trim()).filter(Boolean);
}

function parseFiles(raw: string): string[] {
  const trimmed = raw.trim().toLowerCase();
  if (trimmed === 'none' || trimmed === '') return [];
  return raw.split(/,\s*/).map(s => s.trim()).filter(Boolean);
}

function parseBlockItem(line: string): string | null {
  const match = line.match(BLOCK_ITEM_RE);
  if (!match) return null;
  return match[1].trim();
}

function collectMetadata(lines: string[], startIdx: number): MetadataLines {
  const meta: MetadataLines = {
    acceptance: [],
    dependencies: [],
    files: [],
    testsRequired: false,
    hints: [],
    references: [],
    guardrails: [],
    testCommands: [],
  };

  let currentBlock: BlockKey | null = null;

  for (let i = startIdx; i < lines.length; i++) {
    const line = lines[i];

    if (TASK_LINE_RE.test(line) || HEADING_TASK_RE.test(line)) break;

    const accMatch = line.match(ACCEPTANCE_RE);
    if (accMatch) {
      currentBlock = null;
      const content = accMatch[1].trim();
      if (content) {
        meta.acceptance = parseAcceptance(content);
      } else {
        currentBlock = 'acceptance';
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
      meta.testsRequired = testsMatch[1].trim().toLowerCase() === 'yes';
      continue;
    }

    const hintsMatch = line.match(HINTS_RE);
    if (hintsMatch) {
      currentBlock = null;
      const content = hintsMatch[1].trim();
      if (content) {
        meta.hints = [content];
      } else {
        currentBlock = 'hints';
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
        currentBlock = 'references';
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
        currentBlock = 'guardrails';
      }
      continue;
    }

    const testCmdsMatch = line.match(TEST_COMMANDS_RE);
    if (testCmdsMatch) {
      currentBlock = null;
      meta.testCommands = testCmdsMatch[1].trim().split(/;\s*/).map(s => s.trim()).filter(Boolean);
      continue;
    }

    const dimensionsMatch = line.match(DIMENSIONS_RE);
    if (dimensionsMatch) {
      currentBlock = null;
      const dims: Record<string, number> = {};
      for (const pair of dimensionsMatch[1].split(/,\s*/)) {
        const eqIdx = pair.indexOf('=');
        if (eqIdx > 0) {
          const key = pair.slice(0, eqIdx).trim();
          const val = parseInt(pair.slice(eqIdx + 1).trim(), 10);
          if (key && !isNaN(val)) dims[key] = val;
        }
      }
      if (Object.keys(dims).length > 0) meta.dimensions = dims;
      continue;
    }

    if (currentBlock) {
      const item = parseBlockItem(line);
      if (item) {
        meta[currentBlock].push(item);
      } else if (line.trim() === '') {
        currentBlock = null;
      }
    }
  }

  return meta;
}

interface FlatTask {
  indent: number;
  id: string;
  description: string;
  complexity: number;
  fromHeading: boolean;
  metadata: MetadataLines;
  lineIndex: number;
}

export function parseTasksMarkdown(markdown: string): Task {
  const lines = markdown.split('\n');

  const flatTasks: FlatTask[] = [];

  for (let i = 0; i < lines.length; i++) {
    const parsed = parseTaskLine(lines[i]);
    if (!parsed) continue;

    const meta = collectMetadata(lines, i + 1);
    flatTasks.push({
      ...parsed,
      metadata: meta,
      lineIndex: i,
    });
  }

  if (flatTasks.length === 0) {
    throw new Error('No tasks found in markdown');
  }

  for (const ft of flatTasks) {
    if (ft.complexity === -1) {
      ft.complexity = ft.metadata.complexity ?? 0;
    }
  }

  const hasHeadingFormat = flatTasks.some(ft => ft.fromHeading);
  const minIndent = Math.min(...flatTasks.map(ft => ft.indent));
  const topLevel = flatTasks.filter(ft => ft.indent === minIndent);
  if (hasHeadingFormat && topLevel.length > 1) {
    const maxComplexity = Math.max(...topLevel.map(ft => ft.complexity));
    flatTasks.unshift({
      indent: minIndent - 2,
      id: 'root',
      description: topLevel.map(ft => ft.description).join(', '),
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
        testCommands: [],
      },
      lineIndex: -1,
    });
  }

  const toTask = (ft: FlatTask): Task => {
    const metadata: Task['metadata'] = {
      filesToModify: ft.metadata.files,
      testsRequired: ft.metadata.testsRequired,
    };
    if (ft.metadata.hints.length > 0) metadata.hints = ft.metadata.hints;
    if (ft.metadata.references.length > 0) metadata.references = ft.metadata.references;
    if (ft.metadata.guardrails.length > 0) metadata.guardrails = ft.metadata.guardrails;
    if (ft.metadata.testCommands.length > 0) metadata.testCommands = ft.metadata.testCommands;

    const task: Task = {
      id: ft.id,
      description: ft.description,
      estimatedComplexity: ft.complexity,
      acceptanceCriteria: ft.metadata.acceptance,
      dependencies: ft.metadata.dependencies,
      status: 'pending',
      metadata,
    };

    if (ft.metadata.dimensions) {
      const d = ft.metadata.dimensions;
      task.complexityDimensions = {
        scope: d.scope ?? 0,
        risk: d.risk ?? 0,
        novelty: d.novelty ?? 0,
        integration: d.integration ?? 0,
        testing: d.testing ?? 0,
      };
    }

    return task;
  };

  return buildTree(flatTasks, toTask);
}

function buildTree(
  flatTasks: FlatTask[],
  toTask: (ft: FlatTask) => Task
): Task {
  if (flatTasks.length === 1) {
    return toTask(flatTasks[0]);
  }

  const root = toTask(flatTasks[0]);
  const rootIndent = flatTasks[0].indent;

  const stack: { task: Task; indent: number }[] = [{ task: root, indent: rootIndent }];

  for (let i = 1; i < flatTasks.length; i++) {
    const ft = flatTasks[i];
    const task = toTask(ft);

    while (stack.length > 1 && stack[stack.length - 1].indent >= ft.indent) {
      stack.pop();
    }

    const parent = stack[stack.length - 1].task;
    if (!parent.subtasks) parent.subtasks = [];
    parent.subtasks.push(task);

    stack.push({ task, indent: ft.indent });
  }

  return root;
}
