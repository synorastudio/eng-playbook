# Delivery convention

Production work must move from accepted scope to a verified, reviewable outcome without silently creating new product or architecture commitments.

## Required outcomes

- Production implementation begins from an accepted slice whose observable outcome and relevant boundaries are clear. A Spec or Feature Issue may preserve that scope but is not always required.
- Reversible implementation details may be chosen autonomously inside the accepted slice.
- Work pauses when it would change product scope, make a hard-to-reverse architecture decision, introduce a paid service or external vendor, risk persisted data, alter authentication or permissions, expose secrets, or require a broad refactor outside the slice.
- The implementation follows applicable Engineering Conventions and the project's Project Guardrails.
- Verification covers each applicable acceptance criterion and uses the broadest relevant checks available to the project.
- Tests are added at stable, behavior-relevant boundaries when the project supports them and the change warrants coverage. Manual verification is explicit when automation is unavailable or disproportionate.
- The final change is reviewed for scope drift, accidental changes, weak failure handling, missing coverage, stale documentation, and weakened guardrails.
- Failures caused by the change are resolved before completion. Unrelated existing failures are distinguished and reported.
- Agent-generated work is attributed at the durable boundary that records it. Repository changes use commit attribution; agent-authored pull request descriptions, reviews, comments, and tracker artifacts use visible attribution.

Tracker structure and Git structure remain separate. Branches and pull requests group coherent repository changes and normally target the project's integration path. A Milestone integration branch is justified only when several changes must be verified atomically and intermediate states cannot safely integrate.

## Evidence

Evidence includes the accepted source, implementation diff, relevant automated check results, manual verification performed, attribution for agent-generated work, and any updated durable knowledge or Project Guardrails. It must be sufficient for another agent or the user to understand what changed and why the outcome is considered complete.

## Guardrail examples

- Types, APIs, and state models that prevent invalid behavior.
- Tests and static checks at stable boundaries.
- Protected branches, required checks, deployment gates, and environment permissions.
- Tracker controls that keep draft work from appearing accepted.
- Agent Guidance that names autonomy boundaries and project-specific verification commands.

Apply the [Project guardrails convention](guardrails.md) when selecting controls or handling a deviation.
