# Architecture

This repo is a personal, agent-agnostic AI skills library. Skills are small Markdown operating procedures under `skills/`, with supporting references colocated beside the skill that owns them. Closely related skills may reference an owned support file when extracting shared support would add more structure than value.

The library has two project paths. Personal Experiments use one isolated, low-ceremony skill; Professional Projects use the composable planning, operating-system, documentation, and execution-support skills. This split keeps experiment exceptions out of the professional workflow.

## Client compatibility

Each skill has one canonical copy for Codex, Claude Code, and Cursor. Client-specific metadata may coexist when one client ignores another client's fields. Explicit-only skills therefore keep `disable-model-invocation: true` in `SKILL.md` for Claude Code and Cursor alongside `policy.allow_implicit_invocation: false` in `agents/openai.yaml` for Codex.

Codex packaging is not a release target for this personal library. A strict Codex validator may reject the cross-client frontmatter flag even when Codex can still use the skill. Treat that warning as an accepted compatibility trade-off. Revisit the metadata only if it blocks actual skill loading or use in one of the three required clients.

## Main Parts

- `README.md`: public overview, inspiration, operating model, and artifact routing.
- `AGENTS.md`: repo-level operating instructions for future agents.
- `LANGUAGE.md`: bounded vocabulary for the repo's own domain language.
- `skills/`: composable skills for planning, Agent OS initialization, adoption, documenting, issue shaping, prototyping, and handoff.

## Skill Relationships

- `experiment` independently bootstraps and builds Personal Experiments. It owns their minimal repo artifacts: `AGENTS.md`, `README.md`, and `TODO.md`.
- `intake` prepares external project context for later workflows.
- `init-agent-os` creates agent operating guidance for a greenfield repo.
- `adopt-project` adds or aligns agent operating guidance in an existing repo through Project Adoption.
- `grill` stress-tests concrete plans and designs through a design-tree interview.
- `write-spec` conditionally captures settled, multi-session work as a draft in the configured issue tracker for product review.
- `maintain-language`, `write-adr`, and `maintain-living-docs` own durable knowledge artifacts.
- `write-issues`, `prototype`, and `handoff` support execution-adjacent workflows.
- `implement` owns production execution of an accepted slice and keeps implementation inside the project's autonomy boundaries.

## Documentation Boundaries

- Personal Experiments use a minimal `AGENTS.md` to preserve their operating mode across agent runs, `README.md` for purpose and run instructions, and `TODO.md` for build status. Each is paired with a required Notion devlog for durable decisions, learnings, and dead ends; they do not receive the Professional Project artifact set by default.
- Vocabulary belongs in `LANGUAGE.md`.
- Agent operating guidance belongs in `AGENTS.md`.
- Decisions belong in `docs/adr/`.
- Draft and accepted Specs belong in the configured issue tracker, not the repo.
- Current repo structure and skill relationships belong here.
- Temporary speculation stays in chat or scratch notes unless promoted deliberately.
