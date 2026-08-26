# Skills

Personal AI skills for how I plan, build, document, and hand off software work.

This repo is agent-agnostic first. Skills are written as portable Markdown operating procedures, with Cursor-compatible `SKILL.md` frontmatter where it costs little.

## Inspiration

This repo is inspired by [Matt Pocock's AI skills repo](https://github.com/mattpocock/skills), especially the ideas behind `engineering/grill-with-docs`, `engineering/prototype`, `engineering/to-issues`, `productivity/handoff`, ubiquitous language, ADRs, and his architecture-improvement workflow.

The goal is not to copy those skills directly. This repo adapts the concepts into my own agent operating system: `LANGUAGE.md` instead of `CONTEXT.md`, small composable skills, tech-agnostic agent guidance, minimal ADRs, living docs stewardship, feature-shaped issues, and disposable prototypes.

## Operating Model

Choose the project mode before choosing a workflow:

- For a Personal Experiment, use `experiment` once to establish its low-ceremony operating mode and build the first outcome. Keep a minimal `AGENTS.md`, a short `README.md`, build status in `TODO.md`, and durable decisions, learnings, and dead ends in its paired Notion devlog; skip the professional-project artifact set.
- For a Professional Project, use the workflow below. These projects use intentional, AI-accelerated engineering rather than vibe coding.

Professional Project workflow:

1. Start from an external project brief: Notion, Markdown, pasted notes, links, or another source.
2. After Agent OS initialization or adoption, start the smallest executable thing: the first behavior or setup move that makes the project real enough to continue.
3. Use grilling, Specs, prototyping, or issue slicing only when they help the work move; they are supports, not required gates.
4. Capture durable knowledge in the right artifact:
   - `AGENTS.md` for repo-level agent operating instructions.
   - `LANGUAGE.md` for project vocabulary.
   - `docs/adr/` for durable decisions.
   - `docs/architecture.md` and other living docs for durable explanatory knowledge.
5. Shape work into user-recognizable feature issues and sub-issues when tracking would clarify execution.
6. Implement an accepted slice as production code, using the target repo's own checks and autonomy boundaries.
7. Prototype only when a question needs a throwaway logic/state or UI artifact.
8. Hand off long-running work with compact session summaries that reference durable artifacts.

## First-Wave Skills

- `experiment`: Bootstrap a disposable Personal Experiment and build its first outcome with minimal process.
- `intake`: Normalize external project context into goals, users, constraints, feature candidates, assumptions, and open questions.
- `init-agent-os`: Create a minimal Agent Operating System for a truly greenfield repo.
- `adopt-project`: Adopt an Agent Operating System into an existing repo through audit, proposal, and approved changes.
- `grill`: Stress-test a concrete plan or design through a relentless design-tree interview.
- `write-spec`: Capture settled, multi-session work as a product-reviewable draft in the configured issue tracker.
- `maintain-language`: Maintain scoped `LANGUAGE.md` files as bounded vocabulary.
- `write-adr`: Create minimal ADRs for hard-to-reverse, surprising trade-off decisions.
- `maintain-living-docs`: Keep durable explanatory docs current without creating doc sprawl.
- `write-issues`: Convert accepted scope into user-recognizable Feature Issues and Sub-Issues.
- `implement`: Turn an accepted slice into verified production code without reopening product scope.
- `prototype`: Build throwaway logic/state or UI-variant prototypes.
- `handoff`: Produce concise handoff docs for future agent sessions.

## Repo Layout

```text
skills/
  experiment/
  intake/
  init-agent-os/
  adopt-project/
  grill/
  write-spec/
  maintain-language/
  write-adr/
  maintain-living-docs/
  write-issues/
  implement/
  prototype/
  handoff/
```

Each skill lives in its own directory with a `SKILL.md`. Supporting references sit next to the skill that uses them.

## Artifact Routing

- Personal Experiment operating guidance belongs in a minimal `AGENTS.md`; its purpose and run instructions belong in a short `README.md`; build status belongs in `TODO.md`; and durable decisions, learnings, and dead ends belong in its paired Notion devlog.
- Agent operating guidance belongs in `AGENTS.md`.
- Vocabulary belongs in `LANGUAGE.md`.
- Multi-context vocabulary maps belong in `LANGUAGE-MAP.md`.
- Durable decisions belong in `docs/adr/`.
- Specs belong in the configured issue tracker and remain drafts until accepted.
- Current system shape belongs in `docs/architecture.md`.
- Durable explanatory knowledge belongs in focused docs under `docs/`.
- Work breakdown belongs in feature issues.
- Issue tracker choice belongs in `AGENTS.md`.
- Temporary speculation belongs in chat or scratch notes unless promoted deliberately.

## Autonomy Contract

Agents can act autonomously inside an accepted slice. They must pause for product scope changes, hard-to-reverse architecture, paid services, data risk, large refactors, auth, or security-sensitive changes.
