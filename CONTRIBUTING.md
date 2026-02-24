# Contributing

## Development

```bash
bun install            # Install dependencies
bun run build          # Bundle + type declarations
bun run dev            # TypeScript watch mode
bun run typecheck      # Type check without emitting
bun run lint           # Run oxlint
bun run lint:fix       # Auto-fix lint issues
bun test               # Run tests
bun test --watch       # Watch mode
bun test --coverage    # With coverage
bun run clean          # Remove dist/ and stray compiled files
```

## Release

```bash
bun run release 0.2.0    # or: ./scripts/release.sh 0.2.0
```

The release script validates semver, updates `package.json` and `plugin.json`, generates a changelog entry from conventional commits, runs lint/typecheck/tests, commits, and creates a git tag. It prints the push command for a final review before publishing:

```bash
git push origin main --tags   # triggers CI → npm publish
```
