/**
 * Configuration Module
 *
 * Layered JSON config system with user-level and project-level files,
 * merged with sensible defaults.
 *
 * Priority (highest wins): runtime overrides > project config > user config > defaults
 */
import { z } from 'zod';
export declare const LinearConfigSchema: z.ZodObject<{
    enabled: z.ZodDefault<z.ZodBoolean>;
    teamId: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    statusMap: z.ZodOptional<z.ZodObject<{
        pending: z.ZodOptional<z.ZodString>;
        'in-progress': z.ZodOptional<z.ZodString>;
        completed: z.ZodOptional<z.ZodString>;
        failed: z.ZodOptional<z.ZodString>;
        review: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const CommentCheckerConfigSchema: z.ZodObject<{
    enabled: z.ZodDefault<z.ZodBoolean>;
    binaryPath: z.ZodOptional<z.ZodString>;
    customPrompt: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const NudgeConfigSchema: z.ZodObject<{
    enabled: z.ZodDefault<z.ZodBoolean>;
    maxRetries: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
export declare const IterationScalingConfigSchema: z.ZodObject<{
    enabled: z.ZodDefault<z.ZodBoolean>;
    base: z.ZodDefault<z.ZodNumber>;
    factor: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
declare const FractalPlannerConfigBaseSchema: z.ZodObject<{
    maxComplexity: z.ZodDefault<z.ZodNumber>;
    maxIterations: z.ZodDefault<z.ZodNumber>;
    maxParallelTasks: z.ZodDefault<z.ZodNumber>;
    researchOnly: z.ZodDefault<z.ZodBoolean>;
    planOnly: z.ZodDefault<z.ZodBoolean>;
    skipPlanReview: z.ZodDefault<z.ZodBoolean>;
    skipApproachReview: z.ZodDefault<z.ZodBoolean>;
    preAnalysis: z.ZodDefault<z.ZodBoolean>;
    enableAgentTeams: z.ZodDefault<z.ZodBoolean>;
    noCommit: z.ZodDefault<z.ZodBoolean>;
    plansDir: z.ZodDefault<z.ZodString>;
    permissionMode: z.ZodDefault<z.ZodEnum<{
        default: "default";
        acceptEdits: "acceptEdits";
        bypassPermissions: "bypassPermissions";
        plan: "plan";
        delegate: "delegate";
        dontAsk: "dontAsk";
    }>>;
    linear: z.ZodDefault<z.ZodObject<{
        enabled: z.ZodDefault<z.ZodBoolean>;
        teamId: z.ZodOptional<z.ZodString>;
        projectId: z.ZodOptional<z.ZodString>;
        userId: z.ZodOptional<z.ZodString>;
        statusMap: z.ZodOptional<z.ZodObject<{
            pending: z.ZodOptional<z.ZodString>;
            'in-progress': z.ZodOptional<z.ZodString>;
            completed: z.ZodOptional<z.ZodString>;
            failed: z.ZodOptional<z.ZodString>;
            review: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    commentChecker: z.ZodDefault<z.ZodObject<{
        enabled: z.ZodDefault<z.ZodBoolean>;
        binaryPath: z.ZodOptional<z.ZodString>;
        customPrompt: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    nudge: z.ZodDefault<z.ZodObject<{
        enabled: z.ZodDefault<z.ZodBoolean>;
        maxRetries: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>;
    cliRunner: z.ZodDefault<z.ZodEnum<{
        bun: "bun";
        node: "node";
        auto: "auto";
    }>>;
    iterationScaling: z.ZodDefault<z.ZodObject<{
        enabled: z.ZodDefault<z.ZodBoolean>;
        base: z.ZodDefault<z.ZodNumber>;
        factor: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>;
    executionOrder: z.ZodDefault<z.ZodEnum<{
        "risk-first": "risk-first";
        "easy-first": "easy-first";
        "document-order": "document-order";
    }>>;
}, z.core.$strip>;
export declare const FractalPlannerConfigSchema: z.ZodObject<{
    maxComplexity: z.ZodDefault<z.ZodNumber>;
    maxIterations: z.ZodDefault<z.ZodNumber>;
    maxParallelTasks: z.ZodDefault<z.ZodNumber>;
    researchOnly: z.ZodDefault<z.ZodBoolean>;
    planOnly: z.ZodDefault<z.ZodBoolean>;
    skipPlanReview: z.ZodDefault<z.ZodBoolean>;
    skipApproachReview: z.ZodDefault<z.ZodBoolean>;
    preAnalysis: z.ZodDefault<z.ZodBoolean>;
    enableAgentTeams: z.ZodDefault<z.ZodBoolean>;
    noCommit: z.ZodDefault<z.ZodBoolean>;
    plansDir: z.ZodDefault<z.ZodString>;
    permissionMode: z.ZodDefault<z.ZodEnum<{
        default: "default";
        acceptEdits: "acceptEdits";
        bypassPermissions: "bypassPermissions";
        plan: "plan";
        delegate: "delegate";
        dontAsk: "dontAsk";
    }>>;
    linear: z.ZodDefault<z.ZodObject<{
        enabled: z.ZodDefault<z.ZodBoolean>;
        teamId: z.ZodOptional<z.ZodString>;
        projectId: z.ZodOptional<z.ZodString>;
        userId: z.ZodOptional<z.ZodString>;
        statusMap: z.ZodOptional<z.ZodObject<{
            pending: z.ZodOptional<z.ZodString>;
            'in-progress': z.ZodOptional<z.ZodString>;
            completed: z.ZodOptional<z.ZodString>;
            failed: z.ZodOptional<z.ZodString>;
            review: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    commentChecker: z.ZodDefault<z.ZodObject<{
        enabled: z.ZodDefault<z.ZodBoolean>;
        binaryPath: z.ZodOptional<z.ZodString>;
        customPrompt: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    nudge: z.ZodDefault<z.ZodObject<{
        enabled: z.ZodDefault<z.ZodBoolean>;
        maxRetries: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>;
    cliRunner: z.ZodDefault<z.ZodEnum<{
        bun: "bun";
        node: "node";
        auto: "auto";
    }>>;
    iterationScaling: z.ZodDefault<z.ZodObject<{
        enabled: z.ZodDefault<z.ZodBoolean>;
        base: z.ZodDefault<z.ZodNumber>;
        factor: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>;
    executionOrder: z.ZodDefault<z.ZodEnum<{
        "risk-first": "risk-first";
        "easy-first": "easy-first";
        "document-order": "document-order";
    }>>;
}, z.core.$strip>;
export type FractalPlannerConfig = z.infer<typeof FractalPlannerConfigSchema>;
export type FractalPlannerConfigFile = z.input<typeof FractalPlannerConfigBaseSchema>;
export declare const DEFAULT_CONFIG: FractalPlannerConfig;
/**
 * Resolve the user-level config path.
 * Respects $XDG_CONFIG_HOME, falls back to ~/.config.
 */
export declare function getUserConfigPath(): string;
/**
 * Resolve the project-level config path (relative to cwd).
 */
export declare function getProjectConfigPath(): string;
/**
 * Load config from user + project files, merge with defaults, and cache.
 * Optionally accepts runtime overrides (highest priority).
 *
 * Throws if any config file contains invalid JSON or values.
 */
export declare function loadConfig(overrides?: FractalPlannerConfigFile): Promise<FractalPlannerConfig>;
/**
 * Sync getter for cached config.
 * Throws if loadConfig() has not been called.
 */
export declare function getConfig(): FractalPlannerConfig;
/**
 * Clear the cached config (for testing or reloading).
 */
export declare function resetConfig(): void;
export {};
//# sourceMappingURL=config.d.ts.map