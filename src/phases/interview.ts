/**
 * Interview Phase - Iterative clarification loop
 *
 * Uses Claude Agent SDK to spawn an agent with access to AskUserQuestion tool.
 * Adapted from oh-my-opencode Prometheus agent.
 */

// DEBUG: Module loading
console.log('🔍 [DEBUG] interview.ts module loaded');

import { query } from '@anthropic-ai/claude-agent-sdk';
import { createDraft, readDraft } from '../utils/draft.js';
import { classifyIntent, getQuestionStrategy } from '../utils/question-strategies.js';
import type { InterviewFindings, IntentType, QuestionStrategy } from '../types/index.js';

/**
 * Interview Phase - Iterative clarification loop
 * Runs until clearance check passes
 */
export async function runInterviewPhase(
  userGoal: string
): Promise<{ findings: InterviewFindings; draftPath: string }> {
  console.log('🔍 [DEBUG] runInterviewPhase called with:', userGoal);
  console.log('  💬 Starting interview phase...\n');

  // Step 1: Classify intent
  const intent = classifyIntent(userGoal);
  console.log(`  Detected intent: ${intent}\n`);

  // Step 2: Create draft file
  const draftPath = await createDraft('interview', userGoal, intent);
  console.log(`  Draft created: ${draftPath}\n`);

  // Step 3: Get question strategy
  const strategy = getQuestionStrategy(intent);

  // Step 4: Spawn agent to conduct interview
  const interviewPrompt = buildInterviewPrompt(userGoal, intent, strategy, draftPath);
  console.log('  🤖 Launching interview agent...\n');

  const findings = await conductInterviewWithAgent(interviewPrompt, draftPath);

  console.log('  ✅ Interview complete!\n');
  return { findings, draftPath };
}

/**
 * Conduct interview using an agent with access to AskUserQuestion tool
 */
async function conductInterviewWithAgent(
  prompt: string,
  draftPath: string
): Promise<InterviewFindings> {
  try {
    for await (const message of query({
      prompt,
      options: {
        allowedTools: ['AskUserQuestion', 'Read', 'Write', 'Edit'],
        permissionMode: 'default'
      }
    })) {
      // Agent will use AskUserQuestion to gather requirements
      // and update the draft file with findings

      if (message.type === 'result') {
        console.log('  ✓ Interview agent completed\n');
        // Read final draft state
        const draft = await readDraft(draftPath);
        return draft.findings;
      }
    }
  } catch (error) {
    console.error('  ✗ Interview agent failed:', error);
    throw error;
  }

  // Fallback: read draft if agent completes without explicit result
  const draft = await readDraft(draftPath);
  return draft.findings;
}

/**
 * Build interview prompt for the agent
 */
function buildInterviewPrompt(
  userGoal: string,
  intent: IntentType,
  strategy: QuestionStrategy,
  draftPath: string
): string {
  return `
You are conducting a requirements interview for the following goal:

**Goal**: ${userGoal}
**Detected Intent**: ${intent}
**Draft File**: ${draftPath}

Your task is to gather complete requirements through an iterative interview process:

## Interview Strategy

**Focus Areas**: ${strategy.focusAreas.join(', ')}

**Initial Questions to Ask**:
${strategy.initialQuestions.map((q, i) => `${i + 1}. ${q}`).join('\n')}

## Process

1. **Ask Questions**: Use the AskUserQuestion tool to ask clarifying questions
   - Ask 1-2 questions at a time (don't overwhelm the user)
   - Focus on critical gaps first (core objective, scope boundaries)
   - Use specific, actionable questions
   - Provide meaningful options that help guide the user's thinking

2. **Update Draft**: After each answer, update the draft file at ${draftPath}
   - Use Read tool to read the current draft
   - Use Edit tool to update the JSON file
   - Categorize answers into the appropriate sections:
     * confirmedRequirements: Clear, validated requirements
     * scopeInclusions: Explicitly included features/areas
     * scopeExclusions: Explicitly excluded features/areas
     * technicalDecisions: Technology choices, patterns, approaches
     * constraints: Limitations, requirements, boundaries
     * assumptions: Things we're assuming to be true

3. **Evaluate Clearance**: After gathering answers, check if you have:
   - ✓ Core objective defined (clear requirements)
   - ✓ Scope boundaries established (inclusions AND exclusions)
   - ✓ No critical ambiguities (assumptions validated)
   - ✓ Technical approach decided (for non-trivial tasks)
   - ✓ No blocking questions remaining

4. **Iterate if Needed**: If clearance fails, ask follow-up questions to fill gaps

5. **Complete**: Once all 5 clearance items pass, finalize the draft and complete

## Example AskUserQuestion Usage

Use the AskUserQuestion tool with structured options to guide the user:

\`\`\`
AskUserQuestion({
  questions: [{
    question: "What should be explicitly EXCLUDED from this work?",
    header: "Scope",
    options: [
      { label: "OAuth integration", description: "Third-party authentication providers" },
      { label: "Social login", description: "Login with Google/GitHub/etc" },
      { label: "Password reset", description: "Forgot password flow" },
      { label: "Other", description: "I'll specify something else" }
    ],
    multiSelect: true
  }]
})
\`\`\`

## Important Guidelines

- ALWAYS use AskUserQuestion tool (not text-based questions)
- Update the draft file after EVERY answer using Edit tool
- Keep iterating until clearance passes
- Be specific and actionable in your questions
- Provide meaningful options that cover common scenarios
- Use multiSelect when multiple answers make sense
- Keep headers short (max 12 chars): "Scope", "Auth", "Tech", "Feature", etc.
- Make option labels concise (1-5 words)
- Use descriptions to explain implications and trade-offs

## Draft File Structure

The draft file is a JSON file with this structure:
\`\`\`json
{
  "userGoal": "...",
  "intent": "...",
  "findings": {
    "confirmedRequirements": [],
    "scopeInclusions": [],
    "scopeExclusions": [],
    "technicalDecisions": {},
    "constraints": [],
    "assumptions": [],
    "openQuestions": []
  }
}
\`\`\`

Update the findings object as you gather information from the user.

## Your Task

Start by reading the draft file, then begin asking questions based on the strategy above.
Continue until you have enough information to pass the clearance check.
`.trim();
}
