import { describe, test, expect } from 'bun:test';
import { LinearConfigSchema, FractalPlannerConfigSchema } from '../config';
import './setup';

describe('Linear userId field', () => {
  describe('Schema validation', () => {
    test('accepts valid UUID', () => {
      const config = {
        enabled: true,
        teamId: 'team-123',
        userId: '550e8400-e29b-41d4-a716-446655440000'
      };
      const result = LinearConfigSchema.parse(config);
      expect(result.userId).toBe('550e8400-e29b-41d4-a716-446655440000');
    });

    test('accepts valid email address', () => {
      const config = {
        enabled: true,
        teamId: 'team-123',
        userId: 'user@example.com'
      };
      const result = LinearConfigSchema.parse(config);
      expect(result.userId).toBe('user@example.com');
    });

    test('accepts "me" keyword', () => {
      const config = {
        enabled: true,
        teamId: 'team-123',
        userId: 'me'
      };
      const result = LinearConfigSchema.parse(config);
      expect(result.userId).toBe('me');
    });

    test('accepts undefined (backward compatibility)', () => {
      const config = {
        enabled: true,
        teamId: 'team-123'
      };
      const result = LinearConfigSchema.parse(config);
      expect(result.userId).toBeUndefined();
    });

    test('rejects non-string values', () => {
      const config = {
        enabled: true,
        teamId: 'team-123',
        userId: 123 as any // Invalid type
      };
      expect(() => LinearConfigSchema.parse(config)).toThrow();
    });
  });

  describe('Integration with full config schema', () => {
    test('userId preserved through full config parse', () => {
      const config = {
        linear: {
          enabled: true,
          teamId: 'team-123',
          userId: 'user@example.com'
        }
      };
      const result = FractalPlannerConfigSchema.parse(config);
      expect(result.linear.userId).toBe('user@example.com');
    });

    test('legacy config without userId still valid', () => {
      const legacyConfig = {
        linear: {
          enabled: true,
          teamId: 'team-123',
          projectId: 'project-456',
          statusMap: {
            pending: 'Todo',
            'in-progress': 'In Progress',
            completed: 'Done',
            failed: 'Canceled'
          }
        }
      };
      const result = FractalPlannerConfigSchema.parse(legacyConfig);
      expect(result.linear.enabled).toBe(true);
      expect(result.linear.userId).toBeUndefined();
    });
  });

  describe('Type safety', () => {
    test('TypeScript inference includes userId as optional string', () => {
      const config = LinearConfigSchema.parse({
        enabled: false,
        userId: 'test@example.com'
      });

      // Type assertion - should compile without error
      const userId: string | undefined = config.userId;
      expect(typeof userId).toBe('string');
    });
  });
});
