# Agent Guidance

- Read `LANGUAGE.md` before naming or changing repo concepts.
- Read `docs/architecture.md` before changing structure, artifact boundaries, or skill relationships.
- Keep skills agent-agnostic unless the skill explicitly covers Cursor behavior.
- Preserve one canonical skill for Codex, Claude Code, and Cursor. Keep harmless client-specific metadata together rather than repackaging skills per client.
- For explicit-only skills, keep both `disable-model-invocation: true` in `SKILL.md` and `policy.allow_implicit_invocation: false` in `agents/openai.yaml`. A Codex validator warning about the frontmatter flag is expected and is not a reason to remove Claude Code or Cursor support unless the flag blocks actual Codex use.
- Do not add stack-specific tooling, commands, or assumptions to these skills.
- Ask before changing skill boundaries, renaming core artifacts, creating new long-lived docs, or turning `LANGUAGE.md` into anything beyond vocabulary.
- There is no build or test command yet. After Markdown edits, check edited files with available lints when possible.
