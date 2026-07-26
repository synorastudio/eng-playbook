# Skills

Personal AI skills for how I plan, build, document, and hand off software work.

This repo is agent-agnostic first. Skills are written as portable Markdown operating procedures, with Cursor-compatible `SKILL.md` frontmatter where it costs little.

## Inspiration

This repo is inspired by [Matt Pocock's AI skills repo](https://github.com/mattpocock/skills), especially the ideas behind `engineering/grill-with-docs`, `engineering/prototype`, `engineering/to-issues`, `productivity/handoff`, ubiquitous language, ADRs, and his architecture-improvement workflow.

The goal is not to copy those skills directly. This repo adapts the concepts into my own agent operating system: `LANGUAGE.md` instead of `CONTEXT.md`, small composable skills, tech-agnostic agent guidance, minimal ADRs, living docs stewardship, feature-shaped issues, and disposable prototypes.

## Operating Model

Choose the project mode before choosing a workflow:

- For a Personal Experiment, use `start-experiment` to build the outcome directly. Keep a short `README.md`, track build status in `TODO.md`, and skip the professional-project artifact set.
- For a Professional Project, use the workflow below. These projects use intentional, AI-accelerated engineering rather than vibe coding.

Professional Project workflow:

1. Start from an external project brief: Notion, Markdown, pasted notes, links, or another source.
2. After scaffolding or adoption, start the smallest executable thing: the first behavior or setup move that makes the project real enough to continue.
3. Use grilling, prototyping, or issue slicing only when they help the work move; they are supports, not required gates.
4. Capture durable knowledge in the right artifact:
   - `AGENTS.md` for repo-level agent operating instructions.
   - `LANGUAGE.md` for project vocabulary.
   - `docs/adr/` for durable decisions.
   - `docs/architecture.md` and other living docs for durable explanatory knowledge.
5. Shape work into user-recognizable feature issues and sub-issues when tracking would clarify execution.
6. Prototype only when a question needs a throwaway logic/state or UI artifact.
7. Hand off long-running work with compact session summaries that reference durable artifacts.

## First-Wave Skills

- `start-experiment`: Build a disposable Personal Experiment directly from the desired outcome with minimal process.
- `project-intake`: Normalize external project context into goals, users, constraints, feature candidates, assumptions, and open questions.
- `scaffold-project`: Create a minimal Agent Operating System for a truly greenfield repo.
- `adopt-project`: Adopt an Agent Operating System into an existing repo through audit, proposal, and approved changes.
- `grill-with-docs`: Stress-test a concrete plan or design through a relentless design-tree interview.
- `write-language`: Maintain scoped `LANGUAGE.md` files as bounded vocabulary.
- `write-adr`: Create minimal ADRs for hard-to-reverse, surprising trade-off decisions.
- `maintain-living-docs`: Keep durable explanatory docs current without creating doc sprawl.
- `slice-to-issues`: Convert grilled features into user-recognizable feature issues and sub-issues.
- `prototype`: Build throwaway logic/state or UI-variant prototypes.
- `handoff`: Produce concise handoff docs for future agent sessions.

## Repo Layout

```text
skills/
  start-experiment/
  project-intake/
  scaffold-project/
  adopt-project/
  grill-with-docs/
  write-language/
  write-adr/
  maintain-living-docs/
  slice-to-issues/
  prototype/
  handoff/
```

Each skill lives in its own directory with a `SKILL.md`. Supporting references sit next to the skill that uses them.

## Artifact Routing

- Personal Experiment build status belongs in `TODO.md`; its purpose and run instructions belong in a short `README.md`.
- Agent operating guidance belongs in `AGENTS.md`.
- Vocabulary belongs in `LANGUAGE.md`.
- Multi-context vocabulary maps belong in `LANGUAGE-MAP.md`.
- Durable decisions belong in `docs/adr/`.
- Current system shape belongs in `docs/architecture.md`.
- Durable explanatory knowledge belongs in focused docs under `docs/`.
- Work breakdown belongs in feature issues.
- Issue tracker choice belongs in `AGENTS.md`.
- Temporary speculation belongs in chat or scratch notes unless promoted deliberately.

## Autonomy Contract

Agents can act autonomously inside an accepted slice. They must pause for product scope changes, hard-to-reverse architecture, paid services, data risk, large refactors, auth, or security-sensitive changes.
