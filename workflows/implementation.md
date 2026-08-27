# Implementation workflow

Implementation turns an accepted slice into a verified production outcome while preserving the project's architecture, documentation, and Project Guardrails.

## Entry

Start from the most specific accepted source available: an accepted Spec, selected Feature Issues, or scope accepted in the current conversation. Identify the observable outcome, applicable acceptance criteria, relevant Engineering Conventions, and project-owned guardrails before editing.

## Flow

1. Inspect only the code, Agent Guidance, Language, ADRs, Living Docs, tracker context, and controls relevant to the slice.
2. Surface conflicting sources or blocking product and architecture decisions. Do not expand the accepted scope to resolve them silently.
3. Implement the smallest dependency-ready slice, choosing reversible technical details autonomously within the project's boundaries.
4. Strengthen or update architecture, tests, automated checks, external controls, Agent Guidance, and other Project Guardrails when the change makes that necessary.
5. Update durable knowledge whose current truth changed. Do not create speculative documentation.
6. Verify each acceptance criterion, run the broadest relevant project checks, and perform explicit manual verification where appropriate.
7. Inspect the full change for scope drift, accidental changes, weak failure handling, missing coverage, stale knowledge, and weakened guardrails.
8. Resolve failures caused by the slice and distinguish unrelated existing failures in the completion report.

## Completion

Implementation is complete when the accepted outcome works, each applicable criterion has evidence, relevant Engineering Conventions and Project Guardrails are satisfied or have an approved deviation, durable knowledge is current, and unresolved failures are reported with their effect.

The portable `implement` Skill provides the core procedure. Documentation, ADR, Language, and Handoff Skills support the Workflow when their owned artifacts are affected.
