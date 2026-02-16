/**
 * Research Phase
 *
 * Conducts iterative research to understand the codebase,
 * identify gaps, and gather requirements.
 */

import { query } from '@anthropic-ai/claude-agent-sdk';
import type { ResearchFindings, InterviewFindings, FractalPlannerConfig } from '../types/index.js';
import { getConfig } from '../config.js';

export async function runResearchPhase(
  userGoal: string,
  interviewFindings?: InterviewFindings,
  config?: Partial<FractalPlannerConfig>
): Promise<ResearchFindings> {
  const cfg = { ...getConfig(), ...config };
  console.log('  🔍 Starting codebase analysis...');

  // Build enhanced prompt using interview findings
  const contextSection = interviewFindings ? `
**Interview Context:**
- Intent: ${interviewFindings.intent}
- Confirmed Requirements: ${interviewFindings.confirmedRequirements.join(', ')}
- Scope Inclusions: ${interviewFindings.scopeInclusions.join(', ')}
- Scope Exclusions: ${interviewFindings.scopeExclusions.join(', ')}
- Technical Decisions: ${JSON.stringify(interviewFindings.technicalDecisions)}
` : '';

  const researchPrompt = `
You are conducting research for a new feature request:

**Goal**: ${userGoal}

${contextSection}

Your task is to thoroughly understand the codebase to inform implementation planning:

1. **Analyze existing patterns**:
   - Search for similar implementations
   - Identify relevant files and modules
   - Understand current architecture patterns
   - Note coding conventions and styles

2. **Identify gaps**:
   - What information is missing?
   - What dependencies might be needed?
   - Are there potential conflicts or challenges?

3. **Generate clarifying questions**:
   - What assumptions need validation?
   - What architectural decisions need to be made?
   - What are the edge cases?

4. **Document findings**:
   Output a JSON object with this structure:
   {
     "codebasePatterns": ["pattern1", "pattern2"],
     "existingImplementations": ["file:line references"],
     "potentialChallenges": ["challenge1", "challenge2"],
     "openQuestions": ["question1", "question2"],
     "assumptions": ["assumption1", "assumption2"]
   }

Use Read, Glob, and Grep tools to thoroughly explore the codebase.
Be specific with file paths and line numbers in your findings.
`;

  const findings: Partial<ResearchFindings> = {
    codebasePatterns: [],
    existingImplementations: [],
    potentialChallenges: [],
    openQuestions: [],
    assumptions: []
  };

  try {
    for await (const message of query({
      prompt: researchPrompt,
      options: {
        allowedTools: ['Read', 'Glob', 'Grep'],
        permissionMode: cfg.permissionMode
      }
    })) {
      // Parse assistant messages for findings
      if (message.type === 'assistant' && message.message?.content) {
        for (const block of message.message.content) {
          if ('text' in block) {
            // Try to extract JSON findings from the text
            const jsonMatch = block.text.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
              try {
                const parsed = JSON.parse(jsonMatch[0]);
                Object.assign(findings, parsed);
              } catch  {
                // Continue if JSON parsing fails
              }
            }
          }
        }
      }

      if (message.type === 'result') {
        console.log('  ✓ Research phase completed');
      }
    }
  } catch (error) {
    console.error('  ✗ Research phase failed:', error);
    throw error;
  }

  return findings as ResearchFindings;
}
