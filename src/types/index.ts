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
  metadata?: {
    filesToModify?: string[];
    testsRequired?: boolean;
    estimatedTime?: string;
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

export interface FractalPlannerConfig {
  maxComplexity: number;
  maxIterations: number;
  researchOnly: boolean;
  planOnly: boolean;
  enableAgentTeams: boolean;
}

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
}

// Draft file structure
export interface InterviewDraft {
  name: string;
  planId?: string;
  created: string;
  lastUpdated: string;
  findings: InterviewFindings;
}
