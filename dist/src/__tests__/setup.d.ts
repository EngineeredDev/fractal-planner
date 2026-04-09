import type { Task, InterviewDraft, InterviewFindings } from '../types/index';
export declare function makeTask(overrides?: Partial<Task>): Task;
export declare function makeDraft(overrides?: Partial<InterviewFindings>): InterviewDraft;
export declare const validLinearConfig: {
    enabled: boolean;
    teamId: string;
    projectId: string;
    userId: string;
    statusMap: {
        pending: string;
        'in-progress': string;
        completed: string;
        failed: string;
        review: string;
    };
};
export declare const linearConfigWithoutUserId: {
    enabled: boolean;
    teamId: string;
    projectId: string;
    statusMap: {
        pending: string;
        'in-progress': string;
        completed: string;
        failed: string;
        review: string;
    };
};
export declare const minimalLinearConfig: {
    enabled: boolean;
    teamId: string;
};
//# sourceMappingURL=setup.d.ts.map