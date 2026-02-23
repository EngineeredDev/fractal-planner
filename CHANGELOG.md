# Changelog

## 0.1.3 (2026-02-23)


## 0.1.2 (2026-02-23)


## 0.1.1 (2026-02-23)

### Features
- extend nudge hook to handle stalled interviewer agents
- add approach review gate before decomposition phase
- use descriptive slug-based plan IDs instead of timestamps
- add peer communication protocol for parallel builders
- add programmatic complexity signals with multi-dimensional assessment
- add /fp:handoff skill for session context continuity and execution state persistence
- require guardrails on every leaf task and add MUST NOT DO verification
- add TeammateIdle nudge hook to detect and recover stalled builders
- add implementation agent team with persistent builders, tracker, status, and retry skills
- add PostToolUse comment-checker hook with configurable binary detection
- add userId field to Linear config for issue assignment
- add Linear integration for issue sync during planning and implementation
- add layered JSON configuration system with Zod validation
- add fp:commit skill and git commit flow to implementation
- add fp:implement skill and codebase context generation

### Bug Fixes
- better release CI + engineereddev organization scope (#1)
- adjust release script to work on macOS
- make Linear statusMap fields optional for partial overrides
- prevent false nudge triggers on builders awaiting verification
- enforce strict turn termination after builder sends messages

### Documentation
- add CLAUDE.md with project overview, architecture, and conventions

### Refactoring
- remove env var overrides, use merged config only
- replace lead-driven wave loop with builder self-claiming work loop
- restructure /fp:plan as thin orchestrator with agent-team architecture
- store interview drafts in per-plan subdirectories
- rename skill from fractal-planner to fp:plan

### Tests
- add unit tests for clearance, config, decomposition, draft, planning, and question strategies
- add config and Linear schema test suites with Bun test runner

### Other
- v0.1.0


## 0.1.0 (2026-02-20)

### Features
- extend nudge hook to handle stalled interviewer agents
- add approach review gate before decomposition phase
- use descriptive slug-based plan IDs instead of timestamps
- add peer communication protocol for parallel builders
- add programmatic complexity signals with multi-dimensional assessment
- add /fp:handoff skill for session context continuity and execution state persistence
- require guardrails on every leaf task and add MUST NOT DO verification
- add TeammateIdle nudge hook to detect and recover stalled builders
- add implementation agent team with persistent builders, tracker, status, and retry skills
- add PostToolUse comment-checker hook with configurable binary detection
- add userId field to Linear config for issue assignment
- add Linear integration for issue sync during planning and implementation
- add layered JSON configuration system with Zod validation
- add fp:commit skill and git commit flow to implementation
- add fp:implement skill and codebase context generation

### Bug Fixes
- adjust release script to work on macOS
- make Linear statusMap fields optional for partial overrides
- prevent false nudge triggers on builders awaiting verification
- enforce strict turn termination after builder sends messages

### Documentation
- add CLAUDE.md with project overview, architecture, and conventions

### Refactoring
- remove env var overrides, use merged config only
- replace lead-driven wave loop with builder self-claiming work loop
- restructure /fp:plan as thin orchestrator with agent-team architecture
- store interview drafts in per-plan subdirectories
- rename skill from fractal-planner to fp:plan

### Tests
- add unit tests for clearance, config, decomposition, draft, planning, and question strategies
- add config and Linear schema test suites with Bun test runner

