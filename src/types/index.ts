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
    scope: number;        // 1-5: files, modules, integration points
    risk: number;         // 1-5: likelihood of breaking existing functionality
    novelty: number;      // 1-5: extending patterns (1) vs. no precedent (5)
    integration: number;  // 1-5: connections to other tasks/systems
    testing: number;      // 1-5: test code needed relative to implementation
  };
  metadata?: {
    filesToModify?: string[];
    testsRequired?: boolean;
    hints?: string[];
    references?: string[];
    guardrails?: string[];
    testCommands?: string[];
    complexitySignals?: {
      fileScope: number;      // 1-5: based on file count + total lines
      coupling: number;       // 1-5: fan-in + fan-out of target files
      gitRisk: number;        // 1-5: churn, author count, bug-fix frequency
      testCoverage: number;   // 1-5: presence of corresponding test files
      composite: number;      // weighted average
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

// Intent classification (5 types for MVP)
export type IntentType =
  | 'trivial'           // Simple fixes, typos, one-liners
  | 'refactoring'       // Behavior-preserving restructuring
  | 'build-from-scratch' // New features requiring research
  | 'mid-sized'         // Moderate scope with clear boundaries
  | 'architecture';     // Strategic decisions, long-term impact

// Question strategy for interview phase
export interface QuestionStrategy {
  researchFirst: boolean;
  focusAreas: string[];
  initialQuestions: string[];
  researchPrompts: string[];
}

// Clearance check result
export interface ClearanceCheck {
  passed: boolean;
  checklist: {
    coreObjectiveDefined: boolean;      // Is the goal clear?
    scopeBoundariesEstablished: boolean; // IN/OUT scope defined?
    noAmbiguities: boolean;             // No critical unknowns?
    technicalApproachDecided: boolean;  // Implementation strategy chosen?
    noBlockingQuestions: boolean;       // All blockers resolved?
    testStrategyIdentified: boolean;   // Test approach identified?
  };
  gaps: ClearanceGap[];
}

export interface ClearanceGap {
  type: 'critical' | 'minor' | 'ambiguous';
  item: keyof ClearanceCheck['checklist'];
  description: string;
  suggestedQuestion?: string;
}

// Interview findings (persisted to draft file)
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

// Draft file structure
export interface InterviewDraft {
  name: string;
  planId?: string;
  created: string;
  lastUpdated: string;
  findings: InterviewFindings;
}
