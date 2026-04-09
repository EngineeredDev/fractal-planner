#!/usr/bin/env bun
export interface TaskSignals {
    fileScope: number;
    coupling: number;
    gitRisk: number;
    testCoverage: number;
    composite: number;
}
export declare function computeFileScope(files: string[]): number;
export declare function computeCoupling(files: string[]): number;
export declare function computeGitRisk(files: string[]): number;
export declare function computeTestCoverage(files: string[], testsRequired: boolean): number;
export declare function computeComposite(signals: Omit<TaskSignals, 'composite'>): number;
//# sourceMappingURL=compute-signals.d.ts.map