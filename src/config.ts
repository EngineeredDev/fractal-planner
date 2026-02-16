/**
 * Configuration Module
 *
 * Layered JSON config system with user-level and project-level files,
 * merged with sensible defaults.
 *
 * Priority (highest wins): runtime overrides > project config > user config > defaults
 */

import { readFile } from 'fs/promises';
import { join } from 'path';
import { homedir } from 'os';
import { z } from 'zod';

const PermissionModeSchema = z.enum([
  'default', 'acceptEdits', 'bypassPermissions', 'plan', 'delegate', 'dontAsk'
]);

const LinearConfigSchema = z.object({
  enabled:   z.boolean().default(false),
  teamId:    z.string().optional(),
  projectId: z.string().optional(),
  statusMap: z.object({
    pending:         z.string(),
    'in-progress':   z.string(),
    completed:       z.string(),
    failed:          z.string(),
  }).optional(),
});

const FractalPlannerConfigBaseSchema = z.object({
  maxComplexity:    z.number().int().min(1).max(10).default(5),
  maxIterations:    z.number().int().min(1).default(3),
  researchOnly:     z.boolean().default(false),
  planOnly:         z.boolean().default(false),
  enableAgentTeams: z.boolean().default(true),
  noCommit:         z.boolean().default(false),
  plansDir:         z.string().default('.fractal-planner/plans'),
  permissionMode:   PermissionModeSchema.default('default'),
  linear:           LinearConfigSchema.default({ enabled: false }),
});

export const FractalPlannerConfigSchema = FractalPlannerConfigBaseSchema.refine(
  (cfg) => !cfg.linear.enabled || cfg.linear.teamId,
  { message: 'linear.teamId is required when linear.enabled is true', path: ['linear', 'teamId'] },
);

export type FractalPlannerConfig = z.infer<typeof FractalPlannerConfigSchema>;
export type FractalPlannerConfigFile = z.input<typeof FractalPlannerConfigBaseSchema>;

const FractalPlannerConfigFileSchema = FractalPlannerConfigBaseSchema.partial();

export const DEFAULT_CONFIG: FractalPlannerConfig = FractalPlannerConfigSchema.parse({});

let cachedConfig: FractalPlannerConfig | null = null;

/**
 * Resolve the user-level config path.
 * Respects $XDG_CONFIG_HOME, falls back to ~/.config.
 */
export function getUserConfigPath(): string {
  const xdgBase = process.env.XDG_CONFIG_HOME || join(homedir(), '.config');
  return join(xdgBase, 'fractal-planner', 'config.json');
}

/**
 * Resolve the project-level config path (relative to cwd).
 */
export function getProjectConfigPath(): string {
  return join(process.cwd(), '.fractal-planner', 'config.json');
}

/**
 * Read, parse, and validate a JSON config file.
 * Returns {} if the file doesn't exist.
 * Throws on invalid JSON or invalid config values.
 */
async function readConfigFile(filePath: string): Promise<FractalPlannerConfigFile> {
  let content: string;
  try {
    content = await readFile(filePath, 'utf-8');
  } catch (err: any) {
    if (err?.code === 'ENOENT') return {};
    throw new Error(`Cannot read config file ${filePath}: ${err.message}`);
  }

  let raw: unknown;
  try {
    raw = JSON.parse(content);
  } catch {
    throw new Error(`Invalid JSON in config file ${filePath}`);
  }

  const result = FractalPlannerConfigFileSchema.safeParse(raw);
  if (!result.success) {
    throw new Error(
      `Invalid config in ${filePath}:\n${result.error.issues.map(i => `  - ${i.path.join('.')}: ${i.message}`).join('\n')}`
    );
  }
  return result.data;
}

/**
 * Load config from user + project files, merge with defaults, and cache.
 * Optionally accepts runtime overrides (highest priority).
 *
 * Throws if any config file contains invalid JSON or values.
 */
export async function loadConfig(
  overrides?: FractalPlannerConfigFile
): Promise<FractalPlannerConfig> {
  const userConfig = await readConfigFile(getUserConfigPath());
  const projectConfig = await readConfigFile(getProjectConfigPath());

  cachedConfig = FractalPlannerConfigSchema.parse({
    ...userConfig,
    ...projectConfig,
    ...overrides,
  });

  return cachedConfig;
}

/**
 * Sync getter for cached config.
 * Throws if loadConfig() has not been called.
 */
export function getConfig(): FractalPlannerConfig {
  if (!cachedConfig) {
    throw new Error(
      'Config not loaded. Call loadConfig() before getConfig().'
    );
  }
  return cachedConfig;
}

/**
 * Clear the cached config (for testing or reloading).
 */
export function resetConfig(): void {
  cachedConfig = null;
}
