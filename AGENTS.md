# Agent Guidance

- Read `LANGUAGE.md` before naming or changing repo concepts.
- Read `docs/architecture.md` before changing structure, artifact boundaries, or skill relationships.
- Store implementation plans in `plans/`; keep `.cursor/plans` as a symlink to `../plans`.
- Keep skills agent-agnostic unless the skill explicitly covers Cursor behavior.
- Do not add stack-specific tooling, commands, or assumptions to these skills.
- Ask before changing skill boundaries, renaming core artifacts, creating new long-lived docs, or turning `LANGUAGE.md` into anything beyond vocabulary.
- There is no build or test command yet. After Markdown edits, check edited files with available lints when possible.
