import { describe, test, expect } from 'bun:test';
import { parseTasksMarkdown } from '../utils/task-parser';

describe('parseTasksMarkdown', () => {
  test('parses single root task', () => {
    const md = `# Task Decomposition

## Root Task
- [ID: root] Build authentication system (Complexity: 8)
`;
    const task = parseTasksMarkdown(md);
    expect(task.id).toBe('root');
    expect(task.description).toBe('Build authentication system');
    expect(task.estimatedComplexity).toBe(8);
  });

  test('parses root with leaf subtasks including metadata', () => {
    const md = `# Task Decomposition

## Root Task
- [ID: root] Main goal (Complexity: 8)

### Subtasks
- [ID: 1] First component (Complexity: 3)
  - Acceptance: Code compiles, tests pass
  - Dependencies: none
  - Files: src/foo.ts
  - Tests Required: yes
- [ID: 2] Second component (Complexity: 4)
  - Acceptance: Integration works, error handling present
  - Dependencies: 1
  - Files: src/bar.ts, src/baz.ts
  - Tests Required: no
`;
    const task = parseTasksMarkdown(md);
    expect(task.id).toBe('root');
    expect(task.subtasks).toHaveLength(2);

    const t1 = task.subtasks![0];
    expect(t1.id).toBe('1');
    expect(t1.description).toBe('First component');
    expect(t1.estimatedComplexity).toBe(3);
    expect(t1.acceptanceCriteria).toEqual(['Code compiles', 'tests pass']);
    expect(t1.dependencies).toEqual([]);
    expect(t1.metadata?.filesToModify).toEqual(['src/foo.ts']);
    expect(t1.metadata?.testsRequired).toBe(true);

    const t2 = task.subtasks![1];
    expect(t2.id).toBe('2');
    expect(t2.dependencies).toEqual(['1']);
    expect(t2.metadata?.filesToModify).toEqual(['src/bar.ts', 'src/baz.ts']);
    expect(t2.metadata?.testsRequired).toBe(false);
  });

  test('parses nested subtask tree', () => {
    const md = `# Task Decomposition

## Root Task
- [ID: root] Main goal (Complexity: 9)

### Subtasks
- [ID: 1] Parent component (Complexity: 6)
  - [ID: 1.1] Child A (Complexity: 3)
    - Acceptance: Works correctly
    - Dependencies: none
    - Files: src/a.ts
    - Tests Required: yes
  - [ID: 1.2] Child B (Complexity: 4)
    - Acceptance: Integrates with A
    - Dependencies: 1.1
    - Files: src/b.ts
    - Tests Required: yes
- [ID: 2] Simple component (Complexity: 2)
  - Acceptance: Config created
  - Dependencies: none
  - Files: config/setup.json
  - Tests Required: no
`;
    const task = parseTasksMarkdown(md);
    expect(task.id).toBe('root');
    expect(task.subtasks).toHaveLength(2);

    const parent = task.subtasks![0];
    expect(parent.id).toBe('1');
    expect(parent.subtasks).toHaveLength(2);
    expect(parent.subtasks![0].id).toBe('1.1');
    expect(parent.subtasks![1].id).toBe('1.2');
    expect(parent.subtasks![1].dependencies).toEqual(['1.1']);

    const simple = task.subtasks![1];
    expect(simple.id).toBe('2');
    expect(simple.subtasks).toBeUndefined();
  });

  test('parses deeply nested tree (3 levels)', () => {
    const md = `# Task Decomposition

## Root Task
- [ID: root] Big project (Complexity: 10)

### Subtasks
- [ID: 1] Module A (Complexity: 8)
  - [ID: 1.1] Submodule (Complexity: 6)
    - [ID: 1.1.1] Tiny task (Complexity: 2)
      - Acceptance: Passes lint
      - Dependencies: none
      - Files: src/tiny.ts
      - Tests Required: no
`;
    const task = parseTasksMarkdown(md);
    expect(task.subtasks![0].subtasks![0].subtasks![0].id).toBe('1.1.1');
    expect(task.subtasks![0].subtasks![0].subtasks![0].estimatedComplexity).toBe(2);
  });

  test('throws on empty markdown', () => {
    expect(() => parseTasksMarkdown('')).toThrow('No tasks found');
  });

  test('throws on markdown with no task lines', () => {
    const md = `# Task Decomposition

Just some text with no task lines.
`;
    expect(() => parseTasksMarkdown(md)).toThrow('No tasks found');
  });

  test('handles multiple acceptance criteria', () => {
    const md = `- [ID: t1] Do thing (Complexity: 3)
  - Acceptance: Code compiles without errors, tests pass, follows existing patterns
  - Dependencies: none
  - Files: src/thing.ts
  - Tests Required: yes
`;
    const task = parseTasksMarkdown(md);
    expect(task.acceptanceCriteria).toEqual([
      'Code compiles without errors',
      'tests pass',
      'follows existing patterns',
    ]);
  });

  test('handles dependencies with multiple task IDs', () => {
    const md = `- [ID: root] Root (Complexity: 7)
  - [ID: 1] First (Complexity: 3)
    - Acceptance: Done
    - Dependencies: none
    - Files: src/a.ts
    - Tests Required: no
  - [ID: 2] Second (Complexity: 3)
    - Acceptance: Done
    - Dependencies: none
    - Files: src/b.ts
    - Tests Required: no
  - [ID: 3] Third (Complexity: 3)
    - Acceptance: Done
    - Dependencies: 1, 2
    - Files: src/c.ts
    - Tests Required: no
`;
    const task = parseTasksMarkdown(md);
    const t3 = task.subtasks![2];
    expect(t3.dependencies).toEqual(['1', '2']);
  });

  test('all leaf tasks have status pending', () => {
    const md = `- [ID: root] Root (Complexity: 7)
  - [ID: 1] Leaf (Complexity: 3)
    - Acceptance: Done
    - Dependencies: none
    - Files: src/a.ts
    - Tests Required: yes
`;
    const task = parseTasksMarkdown(md);
    expect(task.status).toBe('pending');
    expect(task.subtasks![0].status).toBe('pending');
  });

  test('metadata filesToModify is empty array when Files: none', () => {
    const md = `- [ID: t1] Do thing (Complexity: 3)
  - Acceptance: Works
  - Dependencies: none
  - Files: none
  - Tests Required: no
`;
    const task = parseTasksMarkdown(md);
    expect(task.metadata?.filesToModify).toEqual([]);
  });

  test('parses multi-line Hints block', () => {
    const md = `- [ID: t1] Create JWT utility (Complexity: 3)
  - Acceptance: Signs tokens, Verifies tokens
  - Dependencies: none
  - Files: src/utils/jwt.ts
  - Tests Required: yes
  - Hints:
    - Use jsonwebtoken library already in package.json
    - Follow the pattern in src/utils/crypto.ts for utility structure
    - Add unit tests for valid token, expired token, malformed token
`;
    const task = parseTasksMarkdown(md);
    expect(task.metadata?.hints).toEqual([
      'Use jsonwebtoken library already in package.json',
      'Follow the pattern in src/utils/crypto.ts for utility structure',
      'Add unit tests for valid token, expired token, malformed token',
    ]);
  });

  test('parses multi-line References block', () => {
    const md = `- [ID: t1] Create JWT utility (Complexity: 3)
  - Acceptance: Signs tokens
  - Dependencies: none
  - Files: src/utils/jwt.ts
  - Tests Required: yes
  - References:
    - src/utils/crypto.ts:15 - existing utility pattern to follow
    - src/types/auth.ts - token payload interface
`;
    const task = parseTasksMarkdown(md);
    expect(task.metadata?.references).toEqual([
      'src/utils/crypto.ts:15 - existing utility pattern to follow',
      'src/types/auth.ts - token payload interface',
    ]);
  });

  test('parses multi-line Guardrails block', () => {
    const md = `- [ID: t1] Create JWT utility (Complexity: 3)
  - Acceptance: Signs tokens
  - Dependencies: none
  - Files: src/utils/jwt.ts
  - Tests Required: yes
  - Guardrails:
    - Do NOT add token refresh logic (separate task 2.3)
    - Do NOT modify existing auth middleware
`;
    const task = parseTasksMarkdown(md);
    expect(task.metadata?.guardrails).toEqual([
      'Do NOT add token refresh logic (separate task 2.3)',
      'Do NOT modify existing auth middleware',
    ]);
  });

  test('parses single-line Test Commands', () => {
    const md = `- [ID: t1] Create JWT utility (Complexity: 3)
  - Acceptance: Signs tokens
  - Dependencies: none
  - Files: src/utils/jwt.ts
  - Tests Required: yes
  - Test Commands: bun test src/utils/jwt.test.ts
`;
    const task = parseTasksMarkdown(md);
    expect(task.metadata?.testCommands).toEqual(['bun test src/utils/jwt.test.ts']);
  });

  test('parses semicolon-separated Test Commands', () => {
    const md = `- [ID: t1] Create JWT utility (Complexity: 3)
  - Acceptance: Signs tokens
  - Dependencies: none
  - Files: src/utils/jwt.ts
  - Tests Required: yes
  - Test Commands: bun test src/utils/jwt.test.ts; bun run typecheck
`;
    const task = parseTasksMarkdown(md);
    expect(task.metadata?.testCommands).toEqual([
      'bun test src/utils/jwt.test.ts',
      'bun run typecheck',
    ]);
  });

  test('parses multi-line Acceptance block (new format)', () => {
    const md = `- [ID: t1] Create JWT utility (Complexity: 3)
  - Acceptance:
    - Signs tokens with configurable expiry
    - Verifies tokens and returns payload or throws
  - Dependencies: none
  - Files: src/utils/jwt.ts
  - Tests Required: yes
`;
    const task = parseTasksMarkdown(md);
    expect(task.acceptanceCriteria).toEqual([
      'Signs tokens with configurable expiry',
      'Verifies tokens and returns payload or throws',
    ]);
  });

  test('legacy single-line Acceptance still works', () => {
    const md = `- [ID: t1] Do thing (Complexity: 3)
  - Acceptance: Code compiles, tests pass
  - Dependencies: none
  - Files: src/thing.ts
  - Tests Required: yes
`;
    const task = parseTasksMarkdown(md);
    expect(task.acceptanceCriteria).toEqual(['Code compiles', 'tests pass']);
  });

  test('old format without new fields still parses (backward compat)', () => {
    const md = `- [ID: t1] Do thing (Complexity: 3)
  - Acceptance: Code compiles
  - Dependencies: none
  - Files: src/thing.ts
  - Tests Required: yes
`;
    const task = parseTasksMarkdown(md);
    expect(task.metadata?.hints).toBeUndefined();
    expect(task.metadata?.references).toBeUndefined();
    expect(task.metadata?.guardrails).toBeUndefined();
    expect(task.metadata?.testCommands).toBeUndefined();
  });

  test('mixed: some tasks have new fields, some do not', () => {
    const md = `- [ID: root] Root (Complexity: 7)
  - [ID: 1] Task with hints (Complexity: 3)
    - Acceptance: Done
    - Dependencies: none
    - Files: src/a.ts
    - Tests Required: yes
    - Hints:
      - Use existing pattern from src/b.ts
    - Guardrails:
      - Do NOT modify src/c.ts
  - [ID: 2] Plain task (Complexity: 3)
    - Acceptance: Done
    - Dependencies: 1
    - Files: src/d.ts
    - Tests Required: no
`;
    const task = parseTasksMarkdown(md);
    const t1 = task.subtasks![0];
    expect(t1.metadata?.hints).toEqual(['Use existing pattern from src/b.ts']);
    expect(t1.metadata?.guardrails).toEqual(['Do NOT modify src/c.ts']);

    const t2 = task.subtasks![1];
    expect(t2.metadata?.hints).toBeUndefined();
    expect(t2.metadata?.guardrails).toBeUndefined();
  });

  test('parses full new-format task with all fields', () => {
    const md = `- [ID: 1.1] Create JWT utility (Complexity: 3)
  - Acceptance:
    - 1. Signs tokens with configurable expiry
    - 2. Verifies tokens and returns payload or throws
  - Dependencies: none
  - Files: src/utils/jwt.ts, src/utils/jwt.test.ts
  - Tests Required: yes
  - Hints:
    - 1. Use jsonwebtoken library already in package.json
    - 2. Follow the pattern in src/utils/crypto.ts for utility structure
    - 3. Add unit tests for valid token, expired token, malformed token
  - References:
    - src/utils/crypto.ts:15 - existing utility pattern to follow
    - src/types/auth.ts - token payload interface
  - Guardrails:
    - Do NOT add token refresh logic (separate task 2.3)
    - Do NOT modify existing auth middleware
  - Test Commands: bun test src/utils/jwt.test.ts
`;
    const task = parseTasksMarkdown(md);
    expect(task.id).toBe('1.1');
    expect(task.acceptanceCriteria).toEqual([
      '1. Signs tokens with configurable expiry',
      '2. Verifies tokens and returns payload or throws',
    ]);
    expect(task.metadata?.filesToModify).toEqual(['src/utils/jwt.ts', 'src/utils/jwt.test.ts']);
    expect(task.metadata?.testsRequired).toBe(true);
    expect(task.metadata?.hints).toEqual([
      '1. Use jsonwebtoken library already in package.json',
      '2. Follow the pattern in src/utils/crypto.ts for utility structure',
      '3. Add unit tests for valid token, expired token, malformed token',
    ]);
    expect(task.metadata?.references).toEqual([
      'src/utils/crypto.ts:15 - existing utility pattern to follow',
      'src/types/auth.ts - token payload interface',
    ]);
    expect(task.metadata?.guardrails).toEqual([
      'Do NOT add token refresh logic (separate task 2.3)',
      'Do NOT modify existing auth middleware',
    ]);
    expect(task.metadata?.testCommands).toEqual(['bun test src/utils/jwt.test.ts']);
  });

  test('parses heading format with single parent + children', () => {
    const md = `# Task Tree

## [1] Build authentication system
- Complexity: 8
- Dependencies: none
- Description: Main auth module

### [1.1] Create login endpoint
- Complexity: 3
- Dependencies: none
- Files: src/auth/login.ts
- Tests Required: yes
- Acceptance Criteria:
  - Endpoint accepts POST /login
  - Returns JWT on success
- Hints:
  - Use existing middleware pattern

### [1.2] Create token validation
- Complexity: 4
- Dependencies: 1.1
- Files: src/auth/validate.ts
- Tests Required: yes
- Acceptance Criteria:
  - Validates JWT signature
  - Returns 401 on invalid token
- Hints:
  - Use jsonwebtoken library
`;
    const task = parseTasksMarkdown(md);
    expect(task.id).toBe('1');
    expect(task.description).toBe('Build authentication system');
    expect(task.estimatedComplexity).toBe(8);
    expect(task.subtasks).toHaveLength(2);

    const t1 = task.subtasks![0];
    expect(t1.id).toBe('1.1');
    expect(t1.description).toBe('Create login endpoint');
    expect(t1.estimatedComplexity).toBe(3);
    expect(t1.acceptanceCriteria).toEqual([
      'Endpoint accepts POST /login',
      'Returns JWT on success',
    ]);
    expect(t1.metadata?.hints).toEqual(['Use existing middleware pattern']);

    const t2 = task.subtasks![1];
    expect(t2.id).toBe('1.2');
    expect(t2.dependencies).toEqual(['1.1']);
    expect(t2.estimatedComplexity).toBe(4);
  });

  test('heading format with multiple ## tasks creates synthetic root', () => {
    const md = `# Task Tree

## [1] First module
- Complexity: 4
- Dependencies: none

### [1.1] Sub-task A
- Complexity: 2
- Dependencies: none
- Files: src/a.ts
- Tests Required: yes
- Acceptance Criteria: Works correctly
- Hints:
  - Follow existing pattern

## [2] Second module
- Complexity: 5
- Dependencies: 1

### [2.1] Sub-task B
- Complexity: 3
- Dependencies: 1.1
- Files: src/b.ts
- Tests Required: yes
- Acceptance Criteria: Integrates with A
- Hints:
  - Use module 1 API
`;
    const task = parseTasksMarkdown(md);
    expect(task.id).toBe('root');
    expect(task.estimatedComplexity).toBe(5);
    expect(task.subtasks).toHaveLength(2);

    expect(task.subtasks![0].id).toBe('1');
    expect(task.subtasks![0].subtasks).toHaveLength(1);
    expect(task.subtasks![0].subtasks![0].id).toBe('1.1');

    expect(task.subtasks![1].id).toBe('2');
    expect(task.subtasks![1].subtasks).toHaveLength(1);
    expect(task.subtasks![1].subtasks![0].id).toBe('2.1');
  });

  test('Acceptance Criteria: alias works in list format', () => {
    const md = `- [ID: t1] Do thing (Complexity: 3)
  - Acceptance Criteria: Code compiles, tests pass
  - Dependencies: none
  - Files: src/thing.ts
  - Tests Required: yes
`;
    const task = parseTasksMarkdown(md);
    expect(task.acceptanceCriteria).toEqual(['Code compiles', 'tests pass']);
  });

  test('standalone Complexity metadata line parsed in heading format', () => {
    const md = `## [1] Only task
- Complexity: 7
- Dependencies: none
- Files: src/thing.ts
- Tests Required: no
- Acceptance Criteria: Done
- Hints:
  - Just do it
`;
    const task = parseTasksMarkdown(md);
    expect(task.estimatedComplexity).toBe(7);
  });

  test('Description line is silently ignored', () => {
    const md = `## [1] Task with description
- Complexity: 3
- Description: This is a long description that should not break parsing
- Dependencies: none
- Files: src/thing.ts
- Tests Required: yes
- Acceptance Criteria: Works
- Hints:
  - Follow pattern
`;
    const task = parseTasksMarkdown(md);
    expect(task.id).toBe('1');
    expect(task.estimatedComplexity).toBe(3);
    expect(task.acceptanceCriteria).toEqual(['Works']);
  });

  test('full real-world heading format parse (bifrost-style)', () => {
    const md = `# Task Tree

## [1] Add ModelClaims field to ProviderConfig and matching utility
- Complexity: 4
- Dependencies: none
- Description: Extend the ProviderConfig struct with a ModelClaims field.

### [1.1] Add ModelClaims field to ProviderConfig struct
- Complexity: 1
- Dependencies: none
- Files: core/schemas/provider.go
- Tests Required: no
- Acceptance Criteria:
  - ProviderConfig has a new field ModelClaims
  - Existing behavior is unchanged when ModelClaims is nil
- Hints:
  - Add the field after CustomProviderConfig

### [1.2] Implement matchModelClaim utility function
- Complexity: 3
- Dependencies: 1.1
- Files: core/utils.go, core/utils_test.go
- Tests Required: yes
- Acceptance Criteria:
  - A standalone function matchModelClaim exists
  - Uses path.Match from Go standard library
  - Malformed patterns are skipped gracefully
- Hints:
  - Import path (not path/filepath)
  - Write table-driven tests

## [2] Implement provider resolution by model claims
- Complexity: 5
- Dependencies: 1
- Description: Build the resolveProviderByModelClaim method.

### [2.1] Implement resolveProviderByModelClaim method
- Complexity: 4
- Dependencies: 1.2
- Files: core/bifrost.go
- Tests Required: no
- Acceptance Criteria:
  - Method exists on Bifrost struct
  - Sorts provider list alphabetically
  - Returns BifrostError when no match
- Hints:
  - Place near getProviderByKey

### [2.2] Unit tests for resolveProviderByModelClaim
- Complexity: 5
- Dependencies: 2.1
- Files: core/bifrost_test.go
- Tests Required: yes
- Acceptance Criteria:
  - Tests cover single match, first-match-wins, no match
  - MockAccount supports ModelClaims
- Hints:
  - Use table-driven pattern
`;
    const task = parseTasksMarkdown(md);

    expect(task.id).toBe('root');
    expect(task.subtasks).toHaveLength(2);

    const mod1 = task.subtasks![0];
    expect(mod1.id).toBe('1');
    expect(mod1.estimatedComplexity).toBe(4);
    expect(mod1.subtasks).toHaveLength(2);

    const t11 = mod1.subtasks![0];
    expect(t11.id).toBe('1.1');
    expect(t11.estimatedComplexity).toBe(1);
    expect(t11.metadata?.filesToModify).toEqual(['core/schemas/provider.go']);
    expect(t11.acceptanceCriteria).toEqual([
      'ProviderConfig has a new field ModelClaims',
      'Existing behavior is unchanged when ModelClaims is nil',
    ]);

    const t12 = mod1.subtasks![1];
    expect(t12.id).toBe('1.2');
    expect(t12.dependencies).toEqual(['1.1']);
    expect(t12.metadata?.testsRequired).toBe(true);

    const mod2 = task.subtasks![1];
    expect(mod2.id).toBe('2');
    expect(mod2.estimatedComplexity).toBe(5);
    expect(mod2.dependencies).toEqual(['1']);
    expect(mod2.subtasks).toHaveLength(2);

    const t22 = mod2.subtasks![1];
    expect(t22.id).toBe('2.2');
    expect(t22.estimatedComplexity).toBe(5);
    expect(t22.metadata?.hints).toEqual(['Use table-driven pattern']);
  });

  test('handles reference.md example format exactly', () => {
    const md = `# Task Decomposition

## Root Task
- [ID: root] Main goal description (Complexity: 8)

### Subtasks
- [ID: 1] First major component (Complexity: 6)
  - [ID: 1.1] Sub-component A (Complexity: 3)
    - Acceptance: Code compiles, tests pass, follows patterns
    - Dependencies: none
    - Files: src/foo.ts
    - Tests Required: yes
  - [ID: 1.2] Sub-component B (Complexity: 4)
    - Acceptance: Integration works, error handling present
    - Dependencies: 1.1
    - Files: src/bar.ts, src/baz.ts
    - Tests Required: yes
- [ID: 2] Second major component (Complexity: 5)
  - [ID: 2.1] Setup config (Complexity: 2)
    - Acceptance: Config file created, validated by schema
    - Dependencies: none
    - Files: config/setup.json
    - Tests Required: no
`;
    const task = parseTasksMarkdown(md);

    expect(task.id).toBe('root');
    expect(task.estimatedComplexity).toBe(8);
    expect(task.subtasks).toHaveLength(2);

    const comp1 = task.subtasks![0];
    expect(comp1.id).toBe('1');
    expect(comp1.subtasks).toHaveLength(2);

    const sub11 = comp1.subtasks![0];
    expect(sub11.id).toBe('1.1');
    expect(sub11.acceptanceCriteria).toEqual(['Code compiles', 'tests pass', 'follows patterns']);
    expect(sub11.metadata?.filesToModify).toEqual(['src/foo.ts']);
    expect(sub11.metadata?.testsRequired).toBe(true);

    const sub12 = comp1.subtasks![1];
    expect(sub12.id).toBe('1.2');
    expect(sub12.dependencies).toEqual(['1.1']);
    expect(sub12.metadata?.filesToModify).toEqual(['src/bar.ts', 'src/baz.ts']);

    const comp2 = task.subtasks![1];
    expect(comp2.id).toBe('2');
    expect(comp2.subtasks).toHaveLength(1);

    const sub21 = comp2.subtasks![0];
    expect(sub21.id).toBe('2.1');
    expect(sub21.acceptanceCriteria).toEqual(['Config file created', 'validated by schema']);
    expect(sub21.metadata?.testsRequired).toBe(false);
  });
});
