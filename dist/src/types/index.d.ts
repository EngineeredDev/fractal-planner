/**
 * Core types for Fractal Planner
 */
export interface Task {
    id: string;
    description: string;
    acceptanceCriteria: string[];
    estimatedComplexity: number;
    dependencies: string[];
    subtasks?: Task[];
    status?: TaskStatus;
    complexityDimensions?: {
        scope: number;
        risk: number;
        novelty: number;
        integration: number;
        testing: number;
    };
    metadata?: {
        filesToModify?: string[];
        testsRequired?: boolean;
        hints?: string[];
        references?: string[];
        guardrails?: string[];
        testCommands?: string[];
        complexitySignals?: {
            fileScope: number;
            coupling: number;
            gitRisk: number;
            testCoverage: number;
            composite: number;
        };
    };
}
export type TaskStatus = 'pending' | 'in-progress' | 'completed' | 'failed';
export interface ResearchFindings {
    codebasePatterns: string[];
    existingImplementations: string[];
    potentialChallenges: string[];
    openQuestions: string[];
    assumptions: string[];
}
export interface PlanningResult {
    rootTask: Task;
    totalTasks: number;
    maxDepth: number;
    estimatedDuration?: string;
}
export interface ExecutionResult {
    taskId: string;
    success: boolean;
    iterations: number;
    verificationReport: VerificationReport;
}
export interface VerificationReport {
    verified: boolean;
    passedCriteria: number[];
    failedCriteria: number[];
    feedback: string;
    suggestions?: string[];
}
export type { FractalPlannerConfig, FractalPlannerConfigFile } from '../config.js';
export interface AgentMessage {
    role: 'builder' | 'verifier' | 'orchestrator';
    content: string;
    timestamp: number;
}
export type IntentType = 'trivial' | 'refactoring' | 'build-from-scratch' | 'mid-sized' | 'architecture';
export interface QuestionStrategy {
    researchFirst: boolean;
    focusAreas: string[];
    initialQuestions: string[];
    researchPrompts: string[];
}
export interface ClearanceCheck {
    passed: boolean;
    checklist: {
        coreObjectiveDefined: boolean;
        scopeBoundariesEstablished: boolean;
        noAmbiguities: boolean;
        technicalApproachDecided: boolean;
        noBlockingQuestions: boolean;
        testStrategyIdentified: boolean;
    };
    gaps: ClearanceGap[];
}
export interface ClearanceGap {
    type: 'critical' | 'minor' | 'ambiguous';
    item: keyof ClearanceCheck['checklist'];
    description: string;
    suggestedQuestion?: string;
}
export interface InterviewFindings {
    intent: IntentType;
    userGoal: string;
    confirmedRequirements: string[];
    scopeInclusions: string[];
    scopeExclusions: string[];
    technicalDecisions: Record<string, string>;
    constraints: string[];
    assumptions: string[];
    openQuestions: string[];
    codebaseContext?: {
        relevantFiles: string[];
        existingPatterns: string[];
        testStrategy?: string;
    };
}
export interface InterviewDraft {
    name: string;
    planId?: string;
    created: string;
    lastUpdated: string;
    findings: InterviewFindings;
}
//# sourceMappingURL=index.d.ts.map