import { describe, expect, test } from 'bun:test';
import './setup';
import { makeTask } from './setup';
import { validateTaskTree } from '../phases/decomposition';
import { parseTasksMarkdown } from '../utils/task-parser';

describe('validateTaskTree', () => {
  test('all leaves under threshold → valid', () => {
    const root = makeTask({
      id: 'root',
      estimatedComplexity: 8,
      subtasks: [
        makeTask({ id: '1', estimatedComplexity: 3 }),
        makeTask({ id: '2', estimatedComplexity: 4 }),
      ],
    });

    const result = validateTaskTree(root, 5);
    expect(result.valid).toBe(true);
    expect(result.violations).toHaveLength(0);
    expect(result.totalLeafTasks).toBe(2);
  });

  test('single over-complexity violation → correct violation entry', () => {
    const root = makeTask({
      id: 'root',
      estimatedComplexity: 8,
      subtasks: [
        makeTask({ id: '1', estimatedComplexity: 3 }),
        makeTask({ id: '2', estimatedComplexity: 7, description: 'Complex leaf' }),
      ],
    });

    const result = validateTaskTree(root, 5);
    expect(result.valid).toBe(false);
    expect(result.violations).toHaveLength(1);
    expect(result.violations[0]).toEqual({
      type: 'over-complexity',
      id: '2',
      description: 'Complex leaf',
      parentId: 'root',
      depth: 1,
      detail: 'complexity 7 exceeds max 5',
    });
  });

  test('multiple violations at different depths', () => {
    const root = makeTask({
      id: 'root',
      estimatedComplexity: 9,
      subtasks: [
        makeTask({
          id: '1',
          estimatedComplexity: 7,
          subtasks: [
            makeTask({ id: '1.1', estimatedComplexity: 6 }),
            makeTask({ id: '1.2', estimatedComplexity: 2 }),
          ],
        }),
        makeTask({ id: '2', estimatedComplexity: 8 }),
      ],
    });

    const result = validateTaskTree(root, 5);
    expect(result.valid).toBe(false);

    const overComplexity = result.violations.filter(v => v.type === 'over-complexity');
    expect(overComplexity).toHaveLength(2);

    const ids = overComplexity.map(v => v.id);
    expect(ids).toContain('1.1');
    expect(ids).toContain('2');

    const v11 = overComplexity.find(v => v.id === '1.1')!;
    expect(v11.parentId).toBe('1');
    expect(v11.depth).toBe(2);

    const v2 = overComplexity.find(v => v.id === '2')!;
    expect(v2.parentId).toBe('root');
    expect(v2.depth).toBe(1);
  });

  test('exact threshold (complexity = maxComplexity) → valid', () => {
    const root = makeTask({
      id: 'root',
      estimatedComplexity: 5,
      subtasks: [
        makeTask({ id: '1', estimatedComplexity: 5 }),
      ],
    });

    const result = validateTaskTree(root, 5);
    expect(result.valid).toBe(true);
    expect(result.violations).toHaveLength(0);
  });

  test('non-leaf high complexity is ignored', () => {
    const root = makeTask({
      id: 'root',
      estimatedComplexity: 10,
      subtasks: [
        makeTask({
          id: '1',
          estimatedComplexity: 8,
          subtasks: [
            makeTask({ id: '1.1', estimatedComplexity: 3 }),
            makeTask({ id: '1.2', estimatedComplexity: 4 }),
          ],
        }),
      ],
    });

    const result = validateTaskTree(root, 5);
    expect(result.valid).toBe(true);
    expect(result.violations).toHaveLength(0);
  });

  test('stats accuracy (totalLeafTasks, maxDepth, distribution)', () => {
    const root = makeTask({
      id: 'root',
      estimatedComplexity: 9,
      subtasks: [
        makeTask({
          id: '1',
          estimatedComplexity: 7,
          subtasks: [
            makeTask({ id: '1.1', estimatedComplexity: 3 }),
            makeTask({ id: '1.2', estimatedComplexity: 3 }),
            makeTask({ id: '1.3', estimatedComplexity: 4 }),
          ],
        }),
        makeTask({ id: '2', estimatedComplexity: 2 }),
      ],
    });

    const result = validateTaskTree(root, 5);
    expect(result.valid).toBe(true);
    expect(result.totalLeafTasks).toBe(4);
    expect(result.stats.maxDepth).toBe(2);
    expect(result.stats.leafComplexityDistribution).toEqual({ 2: 1, 3: 2, 4: 1 });
  });

  test('custom maxComplexity value', () => {
    const root = makeTask({
      id: 'root',
      estimatedComplexity: 6,
      subtasks: [
        makeTask({ id: '1', estimatedComplexity: 4 }),
        makeTask({ id: '2', estimatedComplexity: 3 }),
      ],
    });

    const validResult = validateTaskTree(root, 4);
    expect(validResult.valid).toBe(true);

    const invalidResult = validateTaskTree(root, 2);
    expect(invalidResult.valid).toBe(false);
    const overComplexity = invalidResult.violations.filter(v => v.type === 'over-complexity');
    expect(overComplexity).toHaveLength(2);
    expect(invalidResult.maxComplexity).toBe(2);
  });

  test('single root leaf above threshold → violation with parentId null', () => {
    const root = makeTask({
      id: 'root',
      estimatedComplexity: 8,
    });

    const result = validateTaskTree(root, 5);
    expect(result.valid).toBe(false);
    const overComplexity = result.violations.find(v => v.type === 'over-complexity');
    expect(overComplexity).toEqual({
      type: 'over-complexity',
      id: 'root',
      description: 'Test task',
      parentId: null,
      depth: 0,
      detail: 'complexity 8 exceeds max 5',
    });
  });

  test('deeply nested tree validates correctly', () => {
    const root = makeTask({
      id: 'root',
      estimatedComplexity: 10,
      subtasks: [
        makeTask({
          id: '1',
          estimatedComplexity: 8,
          subtasks: [
            makeTask({
              id: '1.1',
              estimatedComplexity: 6,
              subtasks: [
                makeTask({ id: '1.1.1', estimatedComplexity: 3 }),
                makeTask({ id: '1.1.2', estimatedComplexity: 2 }),
              ],
            }),
            makeTask({ id: '1.2', estimatedComplexity: 3 }),
          ],
        }),
      ],
    });

    const result = validateTaskTree(root, 3);
    expect(result.valid).toBe(true);
    expect(result.stats.maxDepth).toBe(3);
    expect(result.totalLeafTasks).toBe(3);
  });

  test('missing-acceptance violation on leaf with empty criteria', () => {
    const root = makeTask({
      id: 'root',
      estimatedComplexity: 8,
      subtasks: [
        makeTask({ id: '1', acceptanceCriteria: [] }),
        makeTask({ id: '2' }),
      ],
    });

    const result = validateTaskTree(root, 5);
    expect(result.valid).toBe(false);
    const missing = result.violations.filter(v => v.type === 'missing-acceptance');
    expect(missing).toHaveLength(1);
    expect(missing[0].id).toBe('1');
    expect(missing[0].detail).toBe('leaf task has no acceptance criteria');
  });

  test('missing-files violation on leaf without filesToModify', () => {
    const root = makeTask({
      id: 'root',
      estimatedComplexity: 8,
      subtasks: [
        makeTask({ id: '1', metadata: { testsRequired: true } }),
        makeTask({ id: '2' }),
      ],
    });

    const result = validateTaskTree(root, 5);
    expect(result.valid).toBe(false);
    const missing = result.violations.filter(v => v.type === 'missing-files');
    expect(missing).toHaveLength(1);
    expect(missing[0].id).toBe('1');
    expect(missing[0].detail).toBe('leaf task missing filesToModify metadata');
  });

  test('missing-tests-required violation on leaf without testsRequired', () => {
    const root = makeTask({
      id: 'root',
      estimatedComplexity: 8,
      subtasks: [
        makeTask({ id: '1', metadata: { filesToModify: ['src/a.ts'] } }),
        makeTask({ id: '2' }),
      ],
    });

    const result = validateTaskTree(root, 5);
    expect(result.valid).toBe(false);
    const missing = result.violations.filter(v => v.type === 'missing-tests-required');
    expect(missing).toHaveLength(1);
    expect(missing[0].id).toBe('1');
    expect(missing[0].detail).toBe('leaf task missing testsRequired metadata');
  });

  test('subtask-count violation on non-root with 1 child', () => {
    const root = makeTask({
      id: 'root',
      estimatedComplexity: 9,
      subtasks: [
        makeTask({
          id: '1',
          estimatedComplexity: 7,
          subtasks: [
            makeTask({ id: '1.1', estimatedComplexity: 3 }),
          ],
        }),
        makeTask({ id: '2', estimatedComplexity: 3 }),
      ],
    });

    const result = validateTaskTree(root, 5);
    expect(result.valid).toBe(false);
    const countViolations = result.violations.filter(v => v.type === 'subtask-count');
    expect(countViolations).toHaveLength(1);
    expect(countViolations[0].id).toBe('1');
    expect(countViolations[0].detail).toBe('has 1 subtask(s), expected 2-5');
  });

  test('subtask-count violation on non-root with 6 children', () => {
    const root = makeTask({
      id: 'root',
      estimatedComplexity: 9,
      subtasks: [
        makeTask({
          id: '1',
          estimatedComplexity: 8,
          subtasks: [
            makeTask({ id: '1.1', estimatedComplexity: 2 }),
            makeTask({ id: '1.2', estimatedComplexity: 2 }),
            makeTask({ id: '1.3', estimatedComplexity: 2 }),
            makeTask({ id: '1.4', estimatedComplexity: 2 }),
            makeTask({ id: '1.5', estimatedComplexity: 2 }),
            makeTask({ id: '1.6', estimatedComplexity: 2 }),
          ],
        }),
      ],
    });

    const result = validateTaskTree(root, 5);
    expect(result.valid).toBe(false);
    const countViolations = result.violations.filter(v => v.type === 'subtask-count');
    expect(countViolations).toHaveLength(1);
    expect(countViolations[0].detail).toBe('has 6 subtask(s), expected 2-5');
  });

  test('root is exempt from subtask-count check', () => {
    const root = makeTask({
      id: 'root',
      estimatedComplexity: 9,
      subtasks: [
        makeTask({ id: '1', estimatedComplexity: 2 }),
      ],
    });

    const result = validateTaskTree(root, 5);
    expect(result.valid).toBe(true);
    expect(result.violations.filter(v => v.type === 'subtask-count')).toHaveLength(0);
  });

  test('leaf with no metadata object triggers missing-files and missing-tests-required', () => {
    const root = makeTask({
      id: 'root',
      estimatedComplexity: 8,
      subtasks: [
        makeTask({ id: '1', metadata: undefined }),
      ],
    });

    const result = validateTaskTree(root, 5);
    const types = result.violations.map(v => v.type);
    expect(types).toContain('missing-files');
    expect(types).toContain('missing-tests-required');
    expect(types).toContain('missing-hints');
    expect(types).toContain('missing-guardrails');
  });

  test('missing-hints violation on leaf with no hints', () => {
    const root = makeTask({
      id: 'root',
      estimatedComplexity: 8,
      subtasks: [
        makeTask({ id: '1', metadata: { filesToModify: ['src/a.ts'], testsRequired: true } }),
        makeTask({ id: '2' }),
      ],
    });

    const result = validateTaskTree(root, 5);
    expect(result.valid).toBe(false);
    const missing = result.violations.filter(v => v.type === 'missing-hints');
    expect(missing).toHaveLength(1);
    expect(missing[0].id).toBe('1');
    expect(missing[0].detail).toBe('leaf task has no implementation hints');
  });

  test('missing-hints violation not triggered when hints are present', () => {
    const root = makeTask({
      id: 'root',
      estimatedComplexity: 8,
      subtasks: [
        makeTask({ id: '1' }),
        makeTask({ id: '2' }),
      ],
    });

    const result = validateTaskTree(root, 5);
    const hintsViolations = result.violations.filter(v => v.type === 'missing-hints');
    expect(hintsViolations).toHaveLength(0);
  });

  test('missing-guardrails violation on leaf with no guardrails', () => {
    const root = makeTask({
      id: 'root',
      estimatedComplexity: 8,
      subtasks: [
        makeTask({ id: '1', metadata: { filesToModify: ['src/a.ts'], testsRequired: true, hints: ['Do the thing'] } }),
        makeTask({ id: '2' }),
      ],
    });

    const result = validateTaskTree(root, 5);
    expect(result.valid).toBe(false);
    const missing = result.violations.filter(v => v.type === 'missing-guardrails');
    expect(missing).toHaveLength(1);
    expect(missing[0].id).toBe('1');
    expect(missing[0].detail).toBe('leaf task has no guardrails');
  });

  test('missing-guardrails not triggered when guardrails are present', () => {
    const root = makeTask({
      id: 'root',
      estimatedComplexity: 8,
      subtasks: [
        makeTask({ id: '1' }),
        makeTask({ id: '2' }),
      ],
    });

    const result = validateTaskTree(root, 5);
    const guardrailsViolations = result.violations.filter(v => v.type === 'missing-guardrails');
    expect(guardrailsViolations).toHaveLength(0);
  });

  test('heading-format markdown parses and validates successfully', () => {
    const md = `# Task Tree

## [1] First module
- Complexity: 4
- Dependencies: none
- Description: First module description

### [1.1] Implement feature A
- Complexity: 2
- Dependencies: none
- Files: src/a.ts
- Tests Required: yes
- Acceptance Criteria:
  - Feature A works correctly
  - Tests pass
- Hints:
  - Follow existing patterns
- Guardrails:
  - Do NOT modify files outside: src/a.ts

### [1.2] Implement feature B
- Complexity: 3
- Dependencies: 1.1
- Files: src/b.ts
- Tests Required: yes
- Acceptance Criteria:
  - Feature B integrates with A
- Hints:
  - Use module A API
- Guardrails:
  - Do NOT modify files outside: src/b.ts

## [2] Second module
- Complexity: 5
- Dependencies: 1
- Description: Second module description

### [2.1] Setup config
- Complexity: 2
- Dependencies: none
- Files: config/setup.json
- Tests Required: no
- Acceptance Criteria:
  - Config file created
  - Validated by schema
- Hints:
  - Use Zod schema
- Guardrails:
  - Do NOT modify files outside: config/setup.json

### [2.2] Build handler
- Complexity: 4
- Dependencies: 2.1
- Files: src/handler.ts
- Tests Required: yes
- Acceptance Criteria:
  - Handler processes requests
  - Error handling present
- Hints:
  - Follow handler pattern from src/existing.ts
- Guardrails:
  - Do NOT modify files outside: src/handler.ts
`;
    const root = parseTasksMarkdown(md);
    const result = validateTaskTree(root, 5);
    expect(result.valid).toBe(true);
    expect(result.totalLeafTasks).toBe(4);
    expect(result.violations).toHaveLength(0);
  });

  test('leaf with empty filesToModify array and testsRequired=false is valid', () => {
    const root = makeTask({
      id: 'root',
      estimatedComplexity: 8,
      subtasks: [
        makeTask({
          id: '1',
          estimatedComplexity: 3,
          metadata: { filesToModify: [], testsRequired: false, hints: ['Do the thing'], guardrails: ['Do NOT add new dependencies'] },
        }),
      ],
    });

    const result = validateTaskTree(root, 5);
    const metaViolations = result.violations.filter(
      v => v.type === 'missing-files' || v.type === 'missing-tests-required'
    );
    expect(metaViolations).toHaveLength(0);
  });
});
