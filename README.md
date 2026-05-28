# Skills

Personal AI skills for how I plan, build, document, and hand off software work.

This repo is agent-agnostic first. Skills are written as portable Markdown operating procedures, with Cursor-compatible `SKILL.md` frontmatter where it costs little.

## Inspiration

This repo is inspired by Matt Pocock's AI skills repo, especially the ideas behind `engineering/grill-with-docs`, `engineering/prototype`, `engineering/to-issues`, `productivity/handoff`, ubiquitous language, ADRs, and his architecture-improvement workflow.

The goal is not to copy those skills directly. This repo adapts the concepts into my own project operating system: `LANGUAGE.md` instead of `CONTEXT.md`, small composable skills, tech-agnostic scaffolding, minimal ADRs, living docs stewardship, vertical slices, and disposable prototypes.

## Operating Model

1. Start from an external project brief: Notion, Markdown, pasted notes, links, or another source.
2. Run a grilling session to clarify goals, users, constraints, language, architecture assumptions, and feature slices.
3. Capture durable knowledge in the right artifact:
   - `LANGUAGE.md` for project vocabulary.
   - `docs/adr/` for durable decisions.
   - `docs/architecture.md` and other living docs for current system shape and operational knowledge.
   - `plans/` for implementation plans.
4. Shape work into smallest demoable vertical slices.
5. Prototype only when a question needs a throwaway logic/state or UI artifact.
6. Hand off long-running work with compact session summaries that reference durable artifacts.

## First-Wave Skills

- `project-intake`: Normalize external project context into goals, users, constraints, feature candidates, assumptions, and open questions.
- `scaffold-project`: Create or adopt a tech-agnostic project operating system.
- `grill-with-docs`: Interview relentlessly, challenge assumptions, and route durable findings into the right docs.
- `write-language`: Maintain scoped `LANGUAGE.md` files as bounded vocabulary.
- `write-adr`: Create minimal ADRs for hard-to-reverse, surprising trade-off decisions.
- `maintain-living-docs`: Keep durable project docs current without creating doc sprawl.
- `slice-to-issues`: Convert grilled features into smallest demoable vertical slices.
- `prototype`: Build throwaway logic/state or UI-variant prototypes.
- `handoff`: Produce concise handoff docs for future agent sessions.

## Repo Layout

```text
skills/
  project-intake/
  scaffold-project/
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

- Vocabulary belongs in `LANGUAGE.md`.
- Multi-context vocabulary maps belong in `LANGUAGE-MAP.md`.
- Durable decisions belong in `docs/adr/`.
- Current system shape belongs in `docs/architecture.md`.
- Durable operating knowledge belongs in focused docs under `docs/`.
- Implementation plans belong in `plans/`.
- Temporary speculation belongs in chat or scratch notes unless promoted deliberately.

## Autonomy Contract

Agents can act autonomously inside an accepted slice. They must pause for product scope changes, hard-to-reverse architecture, paid services, data risk, large refactors, auth, or security-sensitive changes.
