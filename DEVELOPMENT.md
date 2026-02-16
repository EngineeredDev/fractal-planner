# Development Guide

Guide for developing and testing the Fractal Planner plugin locally.

## Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Build the plugin**:
   ```bash
   npm run build
   ```

3. **Watch mode for development**:
   ```bash
   npm run dev
   ```

## Testing Locally

### Option 1: Using --plugin-dir flag

Test the plugin in a separate project without installing:

```bash
# In your test project directory
cd /path/to/your/test/project

# Launch Claude Code with the plugin
claude --plugin-dir /Users/mrrobot/repos/fractal-planner

# Now use the skill
/fractal-planner Add user authentication
```

### Option 2: Using multiple plugin directories

Test with other plugins simultaneously:

```bash
claude --plugin-dir /path/to/fractal-planner \
       --plugin-dir /path/to/another-plugin
```

### Option 3: Symlink for persistent testing

Create a symlink in your Claude plugins directory:

```bash
# Find your Claude plugins directory
# Usually: ~/.claude/plugins/

ln -s /Users/mrrobot/repos/fractal-planner ~/.claude/plugins/fractal-planner
```

Then restart Claude Code to load the plugin.

## Project Structure

```
fractal-planner/
├── .claude-plugin/
│   └── plugin.json           # Plugin manifest (required)
│
├── skills/
│   └── fractal-planner/
│       ├── SKILL.md           # Skill documentation
│       └── skill.ts           # Main entry point
│
├── src/
│   ├── types/
│   │   └── index.ts           # TypeScript types
│   ├── phases/
│   │   ├── research.ts        # Phase 1: Research
│   │   ├── decomposition.ts   # Phase 2: Decomposition
│   │   ├── planning.ts        # Phase 3: Planning
│   │   └── execution.ts       # Phase 4: Execution
│   └── utils/                 # Utility functions (future)
│
├── dist/                      # Build output (gitignored)
├── node_modules/              # Dependencies (gitignored)
│
├── package.json               # NPM package config
├── tsconfig.json              # TypeScript config
├── README.md                  # User documentation
└── DEVELOPMENT.md             # This file
```

## Making Changes

1. **Modify source files** in `src/` or `skills/`

2. **Rebuild**:
   ```bash
   npm run build
   ```

   Or use watch mode:
   ```bash
   npm run dev
   ```

3. **Restart Claude Code** to pick up changes:
   - Exit your current Claude Code session
   - Relaunch with `--plugin-dir`

## Key Files

### .claude-plugin/plugin.json

Plugin manifest that Claude Code reads to identify and load the plugin:

```json
{
  "name": "fractal-planner",
  "version": "0.1.0",
  "description": "...",
  "engines": {
    "claude": ">=2.1.32"
  }
}
```

**Important**: Only `plugin.json` goes in `.claude-plugin/`. All other directories (`skills/`, `src/`) are at the root.

### skills/fractal-planner/SKILL.md

Documentation shown to users when they use `/help fractal-planner`.

### skills/fractal-planner/skill.ts

Main entry point. Must export a default function:

```typescript
export default async function fractalPlanner(
  args: string,
  options: FractalPlannerOptions
): Promise<void> {
  // Implementation
}
```

## Enabling Agent Teams

For full functionality, enable Agent Teams in your test project:

```json
// .claude/settings.local.json in your test project
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "true"
  }
}
```

## Testing Commands

```bash
# Research only
/fractal-planner --research-only Add new feature

# Planning only
/fractal-planner --plan-only Add new feature

# Full execution (requires Agent Teams)
/fractal-planner Add new feature

# Custom complexity threshold
/fractal-planner --max-complexity 3 Add new feature
```

## Debugging

### Enable verbose logging

Add debug output in your code:

```typescript
console.log('[DEBUG] Variable:', value);
```

### Check Claude Code output

Claude Code shows:
- Console output from your skill
- Tool calls made by agents
- Errors and stack traces

### Common Issues

1. **"Skill not found"**
   - Check plugin.json exists in `.claude-plugin/`
   - Ensure skill directory matches name in plugin.json
   - Restart Claude Code

2. **TypeScript errors**
   - Run `npm run build` to see compilation errors
   - Check imports use `.js` extension (ES modules)

3. **Changes not appearing**
   - Rebuild: `npm run build`
   - Restart Claude Code completely

4. **Agent Teams not working**
   - Verify `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=true`
   - Check Claude Code version >= 2.1.32

## Publishing (Future)

When ready to publish to the Claude plugin registry:

1. Update version in `package.json` and `.claude-plugin/plugin.json`
2. Build: `npm run build`
3. Test thoroughly
4. Publish: `npm publish` (or via Claude plugin registry)

## Resources

- [Claude Code Plugin Documentation](https://code.claude.com/docs/en/plugins)
- [Claude Agent SDK](https://github.com/anthropics/claude-agent-sdk)
- [Agent Teams Guide](https://code.claude.com/docs/en/agent-teams)
