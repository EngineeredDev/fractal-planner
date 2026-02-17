#!/usr/bin/env bun
import { classifyIntent, getQuestionStrategy } from '../utils/question-strategies.js';

const userGoal = process.argv.slice(2).join(' ');

if (!userGoal) {
  console.error('Usage: classify-intent.ts <user goal>');
  process.exit(1);
}

const intent = classifyIntent(userGoal);
const strategy = getQuestionStrategy(intent);

console.log(JSON.stringify({ intent, strategy }));
