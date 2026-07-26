# Architecture

This repo is a personal, agent-agnostic AI skills library. Skills are small Markdown operating procedures under `skills/`, with supporting references colocated beside the skill that owns them. Closely related skills may reference an owned support file when extracting shared support would add more structure than value.

The library has two project paths. Personal Experiments use one isolated, low-ceremony skill; Professional Projects use the composable planning, operating-system, documentation, and execution-support skills. This split keeps experiment exceptions out of the professional workflow.

## Main Parts

- `README.md`: public overview, inspiration, operating model, and artifact routing.
- `AGENTS.md`: repo-level operating instructions for future agents.
- `LANGUAGE.md`: bounded vocabulary for the repo's own domain language.
- `skills/`: composable skills for planning, scaffolding, adoption, documenting, issue shaping, prototyping, and handoff.

## Skill Relationships

- `start-experiment` independently builds Personal Experiments and owns their minimal repo artifacts: `README.md` and `TODO.md`.
- `project-intake` prepares external project context for later workflows.
- `scaffold-project` creates agent operating guidance for a greenfield repo.
- `adopt-project` adds or aligns agent operating guidance in an existing repo through Project Adoption.
- `grill-with-docs` stress-tests concrete plans and designs through a design-tree interview.
- `write-language`, `write-adr`, and `maintain-living-docs` own durable knowledge artifacts.
- `slice-to-issues`, `prototype`, and `handoff` support execution-adjacent workflows without owning implementation.

## Documentation Boundaries

- Personal Experiments use `README.md` for purpose and run instructions and `TODO.md` for build status; they do not receive the Professional Project artifact set by default.
- Vocabulary belongs in `LANGUAGE.md`.
- Agent operating guidance belongs in `AGENTS.md`.
- Decisions belong in `docs/adr/`.
- Current repo structure and skill relationships belong here.
- Temporary speculation stays in chat or scratch notes unless promoted deliberately.
