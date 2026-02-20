import { describe, test, expect } from 'bun:test';
import './setup';
import {
  computeFileScope,
  computeCoupling,
  computeGitRisk,
  computeTestCoverage,
  computeComposite,
} from '../cli/compute-signals';

describe('computeFileScope', () => {
  test('empty files → 1', () => {
    expect(computeFileScope([])).toBe(1);
  });

  test('single non-existent file → 1 (0 lines)', () => {
    expect(computeFileScope(['/nonexistent/path.ts'])).toBe(1);
  });
});

describe('computeCoupling', () => {
  test('empty files → 1', () => {
    expect(computeCoupling([])).toBe(1);
  });

  test('non-existent file → low coupling', () => {
    const result = computeCoupling(['/nonexistent/path.ts']);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(5);
  });
});

describe('computeGitRisk', () => {
  test('empty files → 1', () => {
    expect(computeGitRisk([])).toBe(1);
  });

  test('non-existent file → 1 (no git history)', () => {
    expect(computeGitRisk(['/nonexistent/path.ts'])).toBe(1);
  });
});

describe('computeTestCoverage', () => {
  test('empty files → 1', () => {
    expect(computeTestCoverage([], false)).toBe(1);
  });

  test('non-existent file with tests not required → score ≤ 3', () => {
    const result = computeTestCoverage(['/nonexistent/path.ts'], false);
    expect(result).toBeLessThanOrEqual(3);
  });

  test('non-existent file with tests required → higher risk score', () => {
    const result = computeTestCoverage(['/nonexistent/path.ts'], true);
    expect(result).toBeGreaterThanOrEqual(4);
  });
});

describe('computeComposite', () => {
  test('all 1s → composite 1', () => {
    expect(computeComposite({
      fileScope: 1,
      coupling: 1,
      gitRisk: 1,
      testCoverage: 1,
    })).toBe(1);
  });

  test('all 5s → composite 5', () => {
    expect(computeComposite({
      fileScope: 5,
      coupling: 5,
      gitRisk: 5,
      testCoverage: 5,
    })).toBe(5);
  });

  test('mixed values → weighted average clamped 1-5', () => {
    const result = computeComposite({
      fileScope: 3,
      coupling: 4,
      gitRisk: 2,
      testCoverage: 1,
    });
    // (3 + 4*1.5 + 2*1.25 + 1*0.75) / 4.5 ≈ (3 + 6 + 2.5 + 0.75) / 4.5 ≈ 2.72 → 3
    expect(result).toBe(3);
  });

  test('coupling has highest weight', () => {
    const highCoupling = computeComposite({
      fileScope: 1,
      coupling: 5,
      gitRisk: 1,
      testCoverage: 1,
    });
    const highFileScope = computeComposite({
      fileScope: 5,
      coupling: 1,
      gitRisk: 1,
      testCoverage: 1,
    });
    expect(highCoupling).toBeGreaterThanOrEqual(highFileScope);
  });

  test('result is always between 1 and 5', () => {
    for (let i = 1; i <= 5; i++) {
      const result = computeComposite({
        fileScope: i,
        coupling: i,
        gitRisk: i,
        testCoverage: i,
      });
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(5);
    }
  });
});
