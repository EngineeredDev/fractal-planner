import { describe, test, expect } from 'bun:test';
import { countLeafTasks, calculateMaxDepth } from '../phases/decomposition';
import { makeTask } from './setup';

describe('countLeafTasks', () => {
  test('leaf task (no subtasks) → 1', () => {
    expect(countLeafTasks(makeTask())).toBe(1);
  });

  test('undefined subtasks → 1', () => {
    expect(countLeafTasks(makeTask({ subtasks: undefined }))).toBe(1);
  });

  test('empty subtasks array → 1', () => {
    expect(countLeafTasks(makeTask({ subtasks: [] }))).toBe(1);
  });

  test('flat children → count of children', () => {
    const root = makeTask({
      subtasks: [
        makeTask({ id: 'a' }),
        makeTask({ id: 'b' }),
        makeTask({ id: 'c' }),
      ],
    });
    expect(countLeafTasks(root)).toBe(3);
  });

  test('nested: root → [a → [a1, a2], b] → 3', () => {
    const root = makeTask({
      subtasks: [
        makeTask({
          id: 'a',
          subtasks: [
            makeTask({ id: 'a1' }),
            makeTask({ id: 'a2' }),
          ],
        }),
        makeTask({ id: 'b' }),
      ],
    });
    expect(countLeafTasks(root)).toBe(3);
  });

  test('deep unbalanced tree', () => {
    const root = makeTask({
      subtasks: [
        makeTask({
          id: 'a',
          subtasks: [
            makeTask({
              id: 'a1',
              subtasks: [
                makeTask({ id: 'a1a' }),
              ],
            }),
          ],
        }),
        makeTask({ id: 'b' }),
        makeTask({
          id: 'c',
          subtasks: [
            makeTask({ id: 'c1' }),
            makeTask({ id: 'c2' }),
          ],
        }),
      ],
    });
    // leaves: a1a, b, c1, c2 = 4
    expect(countLeafTasks(root)).toBe(4);
  });
});

describe('calculateMaxDepth', () => {
  test('leaf → 0', () => {
    expect(calculateMaxDepth(makeTask())).toBe(0);
  });

  test('flat children → 1', () => {
    const root = makeTask({
      subtasks: [makeTask({ id: 'a' }), makeTask({ id: 'b' })],
    });
    expect(calculateMaxDepth(root)).toBe(1);
  });

  test('two-level → 2', () => {
    const root = makeTask({
      subtasks: [
        makeTask({
          id: 'a',
          subtasks: [makeTask({ id: 'a1' })],
        }),
      ],
    });
    expect(calculateMaxDepth(root)).toBe(2);
  });

  test('unbalanced tree returns deepest branch depth', () => {
    const root = makeTask({
      subtasks: [
        makeTask({
          id: 'a',
          subtasks: [
            makeTask({
              id: 'a1',
              subtasks: [makeTask({ id: 'a1a' })],
            }),
          ],
        }),
        makeTask({ id: 'b' }),
      ],
    });
    expect(calculateMaxDepth(root)).toBe(3);
  });

  test('custom currentDepth parameter respected', () => {
    const leaf = makeTask();
    expect(calculateMaxDepth(leaf, 5)).toBe(5);
  });

  test('deep chain (10 levels)', () => {
    let task = makeTask({ id: 'leaf' });
    for (let i = 9; i >= 0; i--) {
      task = makeTask({ id: `level-${i}`, subtasks: [task] });
    }
    expect(calculateMaxDepth(task)).toBe(10);
  });
});
