# Architecture

This repo is a personal, agent-agnostic AI skills library. Skills are small Markdown operating procedures under `skills/`, with supporting references colocated beside the skill that uses them.

## Main Parts

- `README.md`: public overview, inspiration, operating model, and artifact routing.
- `AGENTS.md`: repo-level operating instructions for future agents.
- `LANGUAGE.md`: bounded vocabulary for the repo's own domain language.
- `skills/`: composable skills for planning, scaffolding, documenting, issue shaping, prototyping, and handoff.
- `plans/`: implementation plans and saved planning artifacts.
- `.cursor/plans`: symlink to `../plans` so Cursor workspace plans land in the canonical plans directory.

## Skill Relationships

- `project-intake` prepares external project context for later workflows.
- `scaffold-project` creates or adopts agent operating guidance for a repo.
- `grill-with-docs` stress-tests concrete plans and designs through a design-tree interview.
- `write-language`, `write-adr`, and `maintain-living-docs` own durable knowledge artifacts.
- `slice-to-issues`, `prototype`, and `handoff` support execution-adjacent workflows without owning implementation.

## Documentation Boundaries

- Vocabulary belongs in `LANGUAGE.md`.
- Agent operating guidance belongs in `AGENTS.md`.
- Decisions belong in `docs/adr/`.
- Current repo structure and skill relationships belong here.
- Plans belong in `plans/`.
- Temporary speculation stays in chat or scratch notes unless promoted deliberately.
