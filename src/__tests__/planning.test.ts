import { describe, test, expect, spyOn, beforeEach, afterEach } from 'bun:test';
import { getExecutionOrder, createImplementationPlan, printPlanTree } from '../phases/planning';
import { makeTask } from './setup';

describe('getExecutionOrder', () => {
  test('single leaf task → [task]', () => {
    const task = makeTask({ id: 'a' });
    const order = getExecutionOrder(task);
    expect(order).toHaveLength(1);
    expect(order[0].id).toBe('a');
  });

  test('flat leaves (no deps) → preserves DFS order', () => {
    const root = makeTask({
      id: 'root',
      subtasks: [
        makeTask({ id: 'a' }),
        makeTask({ id: 'b' }),
        makeTask({ id: 'c' }),
      ],
    });
    const order = getExecutionOrder(root);
    expect(order.map(t => t.id)).toEqual(['a', 'b', 'c']);
  });

  test('non-leaf tasks excluded from result', () => {
    const root = makeTask({
      id: 'root',
      subtasks: [
        makeTask({
          id: 'parent',
          subtasks: [makeTask({ id: 'child' })],
        }),
      ],
    });
    const order = getExecutionOrder(root);
    expect(order.map(t => t.id)).toEqual(['child']);
    expect(order.find(t => t.id === 'root')).toBeUndefined();
    expect(order.find(t => t.id === 'parent')).toBeUndefined();
  });

  test('dependency ordering: a deps [b] → [b, a]', () => {
    const root = makeTask({
      id: 'root',
      subtasks: [
        makeTask({ id: 'a', dependencies: ['b'] }),
        makeTask({ id: 'b', dependencies: [] }),
      ],
    });
    const order = getExecutionOrder(root);
    const idxB = order.findIndex(t => t.id === 'b');
    const idxA = order.findIndex(t => t.id === 'a');
    expect(idxB).toBeLessThan(idxA);
  });

  test('linear chain: c → b → a → [a, b, c]', () => {
    const root = makeTask({
      id: 'root',
      subtasks: [
        makeTask({ id: 'c', dependencies: ['b'] }),
        makeTask({ id: 'b', dependencies: ['a'] }),
        makeTask({ id: 'a', dependencies: [] }),
      ],
    });
    const order = getExecutionOrder(root);
    expect(order.map(t => t.id)).toEqual(['a', 'b', 'c']);
  });

  test('diamond dependency pattern', () => {
    // d depends on b and c, both depend on a
    const root = makeTask({
      id: 'root',
      subtasks: [
        makeTask({ id: 'd', dependencies: ['b', 'c'] }),
        makeTask({ id: 'b', dependencies: ['a'] }),
        makeTask({ id: 'c', dependencies: ['a'] }),
        makeTask({ id: 'a', dependencies: [] }),
      ],
    });
    const order = getExecutionOrder(root);
    const idxA = order.findIndex(t => t.id === 'a');
    const idxB = order.findIndex(t => t.id === 'b');
    const idxC = order.findIndex(t => t.id === 'c');
    const idxD = order.findIndex(t => t.id === 'd');
    expect(idxA).toBeLessThan(idxB);
    expect(idxA).toBeLessThan(idxC);
    expect(idxB).toBeLessThan(idxD);
    expect(idxC).toBeLessThan(idxD);
  });

  test('circular dependency → warns and dumps remaining', () => {
    const warnSpy = spyOn(console, 'warn').mockImplementation(() => {});
    const root = makeTask({
      id: 'root',
      subtasks: [
        makeTask({ id: 'a', dependencies: ['b'] }),
        makeTask({ id: 'b', dependencies: ['a'] }),
      ],
    });
    const order = getExecutionOrder(root);
    expect(warnSpy).toHaveBeenCalled();
    expect(order).toHaveLength(2);
    warnSpy.mockRestore();
  });

  test('visited set deduplication', () => {
    // Task referenced from multiple paths shouldn't appear twice
    const shared = makeTask({ id: 'shared' });
    const root = makeTask({
      id: 'root',
      subtasks: [
        makeTask({ id: 'a', subtasks: [shared] }),
        makeTask({ id: 'b', subtasks: [shared] }),
      ],
    });
    const order = getExecutionOrder(root);
    const sharedCount = order.filter(t => t.id === 'shared').length;
    expect(sharedCount).toBe(1);
  });
});

describe('createImplementationPlan', () => {
  let logSpy: ReturnType<typeof spyOn>;

  beforeEach(() => {
    logSpy = spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  test('returns correct totalTasks', async () => {
    const root = makeTask({
      id: 'root',
      subtasks: [makeTask({ id: 'a' }), makeTask({ id: 'b' })],
    });
    const plan = await createImplementationPlan(root);
    expect(plan.totalTasks).toBe(2);
  });

  test('returns correct maxDepth', async () => {
    const root = makeTask({
      id: 'root',
      subtasks: [
        makeTask({
          id: 'a',
          subtasks: [makeTask({ id: 'a1' })],
        }),
      ],
    });
    const plan = await createImplementationPlan(root);
    expect(plan.maxDepth).toBe(2);
  });

  test('returns rootTask', async () => {
    const root = makeTask({ id: 'root' });
    const plan = await createImplementationPlan(root);
    expect(plan.rootTask).toBe(root);
  });

  test('produces console output', async () => {
    const root = makeTask({ id: 'root' });
    await createImplementationPlan(root);
    expect(logSpy).toHaveBeenCalled();
  });
});

describe('printPlanTree', () => {
  let logSpy: ReturnType<typeof spyOn>;
  let logged: string[];

  beforeEach(() => {
    logged = [];
    logSpy = spyOn(console, 'log').mockImplementation((...args: any[]) => {
      logged.push(args.join(' '));
    });
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  test('prints task with connector, id, description, complexity', () => {
    const task = makeTask({ id: 't1', description: 'Do thing', estimatedComplexity: 5 });
    printPlanTree(task);
    expect(logged[0]).toContain('└─');
    expect(logged[0]).toContain('t1');
    expect(logged[0]).toContain('Do thing');
    expect(logged[0]).toContain('[5/10]');
  });

  test('prints acceptance criteria indented', () => {
    const task = makeTask({
      id: 't1',
      description: 'Do thing',
      acceptanceCriteria: ['criterion A', 'criterion B'],
    });
    printPlanTree(task);
    const criteriaHeader = logged.find(l => l.includes('Acceptance:'));
    expect(criteriaHeader).toBeDefined();
    const criteriaLines = logged.filter(l => l.includes('criterion'));
    expect(criteriaLines).toHaveLength(2);
    expect(criteriaLines[0]).toContain('1. criterion A');
    expect(criteriaLines[1]).toContain('2. criterion B');
  });

  test('nested subtasks with correct prefix characters', () => {
    const root = makeTask({
      id: 'root',
      acceptanceCriteria: [],
      subtasks: [
        makeTask({ id: 'child1', acceptanceCriteria: [] }),
        makeTask({ id: 'child2', acceptanceCriteria: [] }),
      ],
    });
    printPlanTree(root);
    const child1Line = logged.find(l => l.includes('child1'));
    const child2Line = logged.find(l => l.includes('child2'));
    expect(child1Line).toContain('├─');
    expect(child2Line).toContain('└─');
  });

  test('skips criteria section when empty', () => {
    const task = makeTask({ id: 't1', acceptanceCriteria: [] });
    printPlanTree(task);
    expect(logged.find(l => l.includes('Acceptance:'))).toBeUndefined();
  });
});
