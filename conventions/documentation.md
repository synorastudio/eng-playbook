# Documentation convention

Documentation must preserve current, durable knowledge in the artifact that owns it. A new artifact is warranted only when it solves a visible continuity, navigation, explanation, or review problem.

## Artifact ownership

- `AGENTS.md` owns concise Agent Guidance and routes to deeper rules.
- `LANGUAGE.md` owns bounded project vocabulary. `LANGUAGE-MAP.md` routes between multiple language contexts when needed.
- `docs/architecture.md` owns a navigational description of the current system shape.
- `docs/adr/` owns qualifying Architecture Decision Records.
- Focused documents under `docs/` own durable explanatory knowledge such as operations, onboarding, and project-specific guides.
- The configured issue tracker owns Decision Maps, Decision Issues, Specs, Feature Issues, and Sub-Issues.
- A Handoff owns temporary cross-session continuity and normally lives outside the repository.
- Chat and scratch notes own temporary speculation until it is deliberately promoted.

Tracker hierarchy does not imply Git hierarchy. Planning artifacts do not create branches by default.

## Required outcomes

- Durable claims match current project reality and replace stale claims rather than accumulating corrections.
- Vocabulary, decisions, explanatory knowledge, work tracking, and session continuity remain in their distinct owning artifacts.
- Repository documents link to existing sources instead of duplicating their content.
- Empty placeholders and speculative documents are not created for anticipated needs.
- Documentation changed by implementation is updated in the same coherent body of work.

## Evidence

Evidence is the smallest set of current artifacts needed to orient a new collaborator, explain current system behavior, recover a decision, or continue accepted work. The absence of an unnecessary artifact is compatible with this convention.

## Guardrail examples

- A short rules index that points from `AGENTS.md` to detailed guidance.
- Link checks, documentation tests, or generated-reference checks where the project benefits from them.
- Review prompts that route vocabulary, decisions, architecture, and work tracking to their owners.
- Code structure that keeps generated documentation distinguishable from hand-maintained sources.

Apply the [Project guardrails convention](guardrails.md) when selecting controls or handling a deviation.
