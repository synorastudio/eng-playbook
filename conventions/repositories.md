# Repository convention

Every repository in a Professional Project must make its operating reality discoverable to the humans and agents working in it.

## Required outcomes

- The repository has a short, repository-owned entry point for Agent Guidance. Use `AGENTS.md` unless an established project constraint requires another source.
- Guidance reflects the repository's actual commands, environments, integration workflow, safety boundaries, and artifact locations. It does not invent missing conventions.
- Detailed guidance lives in the artifact that owns it. The entry point routes readers to that material instead of loading every rule into agent context.
- Shared guidance has one project-owned source of truth. Tool-specific files exist only when a tool requires them or the project already relies on them.
- Ignore files, repository settings, and other controls cover the tools and generated material the project actually uses.
- A repository that is one part of a larger Professional Project states its responsibility and points to relevant neighboring systems or sources of authority.

Greenfield repositories adopt the current applicable convention baseline when initialized. Existing repositories adopt it through the [Project adoption Workflow](../workflows/project-adoption.md), which preserves their real operating constraints and requires approval before changes are applied.

Projects translate these outcomes into their own guidance and Project Guardrails. They do not copy this playbook's prose or retain a playbook version marker.

## Evidence

Evidence may include repository guidance, focused documentation, ignore files, repository settings, command definitions, environment notes, or links to external controls. Evidence should be easy to find from the repository entry point.

## Guardrail examples

- Architecture or directory boundaries that keep generated and hand-written files separate.
- Ignore rules that prevent secrets, dependencies, and generated artifacts from entering version control.
- Repository settings that protect the normal integration path.
- Automated checks that reject an invalid repository shape.
- Concise Agent Guidance for judgments that cannot be checked mechanically.

Apply the [Project guardrails convention](guardrails.md) when selecting controls or handling a deviation.
