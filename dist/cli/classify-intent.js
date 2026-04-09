#!/usr/bin/env bun
// @bun
import { createRequire } from "node:module";
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __require = /* @__PURE__ */ createRequire(import.meta.url);

// src/utils/question-strategies.ts
function getQuestionStrategy(intent) {
  switch (intent) {
    case "trivial":
      return {
        researchFirst: false,
        focusAreas: ["scope validation"],
        initialQuestions: [
          "Is this change purely cosmetic/trivial with no behavioral impact?",
          "Are there any files or areas that should NOT be touched?"
        ],
        researchPrompts: []
      };
    case "refactoring":
      return {
        researchFirst: true,
        focusAreas: ["behavior preservation", "test coverage", "safety"],
        initialQuestions: [
          "What specific behavior must be preserved exactly as-is?",
          "Are there tests covering this code? If not, should we add them first?",
          "What is the rollback plan if issues are discovered?"
        ],
        researchPrompts: [
          "Search for files matching the refactoring target",
          "Check test coverage for affected modules",
          "Look for related configuration files"
        ]
      };
    case "build-from-scratch":
      return {
        researchFirst: true,
        focusAreas: ["existing patterns", "dependencies", "architecture"],
        initialQuestions: [
          "Should this follow existing patterns in the codebase?",
          "Are there similar features I can learn from?",
          "What libraries/frameworks should be used (or avoided)?"
        ],
        researchPrompts: [
          "Find similar features in the codebase",
          "Check project structure and module patterns",
          "Identify integration points and entry files"
        ]
      };
    case "mid-sized":
      return {
        researchFirst: true,
        focusAreas: ["scope boundaries", "deliverables"],
        initialQuestions: [
          "What are the MUST-HAVE vs NICE-TO-HAVE features?",
          "What should be explicitly EXCLUDED from this work?",
          'When is this considered "done"?'
        ],
        researchPrompts: [
          "Find files related to the feature area",
          "Check existing test patterns in the project"
        ]
      };
    case "architecture":
      return {
        researchFirst: true,
        focusAreas: ["long-term impact", "trade-offs", "alternatives"],
        initialQuestions: [
          "What problem is this architectural change solving?",
          "What are the trade-offs vs alternative approaches?",
          "What is the migration path for existing code?"
        ],
        researchPrompts: [
          "Map current architecture — entry points, layers, module boundaries",
          "Find affected integration points and cross-cutting concerns",
          "Check for existing migration patterns or version compatibility"
        ]
      };
  }
}
function classifyIntent(userGoal) {
  const goal = userGoal.toLowerCase();
  if (goal.match(/\b(typo|fix\s+typo|rename|update\s+comment|formatting)\b/)) {
    return "trivial";
  }
  if (goal.match(/\b(refactor|restructure|clean\s+up|reorganize)\b/)) {
    return "refactoring";
  }
  if (goal.match(/\b(architecture|redesign|migrate|scalability|framework)\b/)) {
    return "architecture";
  }
  if (goal.match(/\b(add|implement|create|build|new\s+feature)\b/)) {
    if (goal.length > 50 || goal.match(/\b(authentication|payment|api|database)\b/)) {
      return "build-from-scratch";
    }
    return "mid-sized";
  }
  return "mid-sized";
}

// src/cli/classify-intent.ts
var userGoal = process.argv.slice(2).join(" ");
if (!userGoal) {
  console.error("Usage: classify-intent.ts <user goal>");
  process.exit(1);
}
var intent = classifyIntent(userGoal);
var strategy = getQuestionStrategy(intent);
console.log(JSON.stringify({ intent, strategy }));
