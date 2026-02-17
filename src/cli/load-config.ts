#!/usr/bin/env bun
import { loadConfig } from '../config.js';

async function main() {
  const config = await loadConfig();
  console.log(JSON.stringify(config));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
