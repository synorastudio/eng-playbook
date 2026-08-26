# Skills

Personal AI skills for how I plan, build, document, and hand off software work.

This repo is agent-agnostic first. Skills are written as portable Markdown operating procedures, with Cursor-compatible `SKILL.md` frontmatter where it costs little.

## Inspiration

This repo is inspired by [Matt Pocock's AI skills repo](https://github.com/mattpocock/skills), especially the ideas behind `engineering/wayfinder`, `engineering/grill-with-docs`, `engineering/to-spec`, `engineering/to-issues`, `engineering/implement`, `engineering/prototype`, `productivity/handoff`, ubiquitous language, ADRs, and his architecture-improvement workflow.

The goal is not to copy those skills directly. This repo adapts the concepts into my own agent operating system: `LANGUAGE.md` instead of `CONTEXT.md`, small composable skills, tech-agnostic agent guidance, minimal ADRs, living docs stewardship, feature-shaped issues, and disposable prototypes.

## Operating Model

Choose the project mode before choosing a workflow:

- For a Personal Experiment, use `experiment` once to establish its low-ceremony operating mode and build the first outcome. Keep a minimal `AGENTS.md`, a short `README.md`, build status in `TODO.md`, and durable decisions, learnings, and dead ends in its paired Notion devlog; skip the professional-project artifact set.
- For a Professional Project, use the workflow below. These projects use intentional, AI-accelerated engineering rather than vibe coding.

Professional Projects use a routing model, not a mandatory pipeline. Production implementation requires accepted scope, but no particular planning artifact is always required.

```text
Accepted work that fits in the current conversation
  -> implement

Clear work that benefits from tracking
  -> write-issues -> implement

Accepted work that needs product review or cross-session continuity
  -> write-spec -> implement

Concrete design with unresolved branches
  -> grill
     -> write-spec, write-issues, or implement as needed

Proposed work whose design or Milestone boundaries are unclear
  -> map-decisions
     -> grill, research, or prototype unresolved Decision Issues
     -> one or more Milestones
     -> write-spec when review or continuity warrants it
     -> write-issues when tracking separate outcomes helps
     -> implement accepted slices
```

Use `intake` when context starts in an External Project Brief. Use `init-agent-os` for a greenfield repo and `adopt-project` for an existing one. Neither route authorizes production implementation before scope is accepted.

Each optional artifact must solve a visible problem:

- A Decision Map organizes uncertainty and discovers one Milestone or a Milestone sequence.
- A Decision Issue separates one question only when it needs its own resolution work.
- A Spec preserves accepted intent for product review or future sessions.
- Feature Issues track independently deliverable outcomes. Sub-Issues are exceptional and remain user-recognizable features.
- A Prototype answers a design question with throwaway code.

Capture durable knowledge in the artifact that owns it: `AGENTS.md` for agent guidance, `LANGUAGE.md` for vocabulary, `docs/adr/` for durable decisions, and Living Docs for current explanatory knowledge. Use `handoff` when unfinished work must continue in another session.

Tracker hierarchy does not imply Git hierarchy. Decision Maps, Decision Issues, and Specs create no branch by default. When the target repo uses branches and pull requests, group them around coherent repository changes and target its normal integration branch. Use a Milestone integration branch only when accepted work must be verified atomically and intermediate changes cannot safely reach the normal integration branch.

## First-Wave Skills

- `experiment`: Bootstrap a disposable Personal Experiment and build its first outcome with minimal process.
- `intake`: Normalize external project context into goals, users, constraints, feature candidates, assumptions, and open questions.
- `init-agent-os`: Create a minimal Agent Operating System for a truly greenfield repo.
- `adopt-project`: Adopt an Agent Operating System into an existing repo through audit, proposal, and approved changes.
- `map-decisions`: Map unresolved decisions and discover Milestone boundaries for proposed work.
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
  map-decisions/
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
- Decision Maps and Decision Issues belong in the configured issue tracker.
- Specs belong in the configured issue tracker and remain drafts until accepted.
- Current system shape belongs in `docs/architecture.md`.
- Durable explanatory knowledge belongs in focused docs under `docs/`.
- Work breakdown belongs in feature issues.
- Issue tracker choice belongs in `AGENTS.md`.
- Temporary speculation belongs in chat or scratch notes unless promoted deliberately.

## Autonomy Contract

Agents can act autonomously inside an accepted slice. They must pause for product scope changes, hard-to-reverse architecture, paid services, data risk, large refactors, auth, or security-sensitive changes.
