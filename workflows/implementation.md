# Implementation workflow

Implementation turns a released Work Unit into a verified production outcome while preserving the project's architecture, documentation, and Project Guardrails.

## Entry

Enter only from a Work Unit the user has released to build. A release is an explicit user signal for that specific unit: a conversational go-ahead, or a tracker-marked acceptance when continuity across sessions matters. An accepted Spec, selected Feature Issues, or scope agreed in conversation supply the unit's content, but none of them is a release, and the agent never treats its own proposal or summary as one. If no Work Unit has been released, the work is still in planning: return to the [Feature Planning Workflow](feature-planning.md) instead of implementing.

Once released, identify the observable outcome, applicable acceptance criteria, relevant Engineering Conventions, and project-owned guardrails before editing.

## Flow

1. Inspect only the code, Agent Guidance, Language, ADRs, Living Docs, tracker context, and controls relevant to the released Work Unit.
2. Surface conflicting sources or blocking product and architecture decisions. Do not expand the accepted scope to resolve them silently.
3. Implement the released Work Unit, choosing reversible technical details autonomously within the project's boundaries. Do not expand into other units that were planned but not released.
4. Strengthen or update architecture, tests, automated checks, external controls, Agent Guidance, and other Project Guardrails when the change makes that necessary.
5. Update durable knowledge whose current truth changed. Do not create speculative documentation.
6. Verify each acceptance criterion, run the broadest relevant project checks, and perform explicit manual verification where appropriate.
7. Inspect the full change for scope drift, accidental changes, weak failure handling, missing coverage, stale knowledge, and weakened guardrails.
8. Prepare each commit that will enter integration history according to the Commit Convention and the project's merge strategy.
9. Attribute agent-generated work at the durable boundary that records it: commit metadata for repository changes and visible attribution for agent-authored collaboration artifacts.
10. Resolve failures caused by the Work Unit and distinguish unrelated existing failures in the completion report.

## Completion

Implementation is complete when the accepted outcome works, each applicable criterion has evidence, relevant Engineering Conventions and Project Guardrails are satisfied or have an approved deviation, durable knowledge is current, and unresolved failures are reported with their effect.

The portable `implement` Skill provides the core procedure. Documentation, ADR, Language, and Handoff Skills support the Workflow when their owned artifacts are affected.
