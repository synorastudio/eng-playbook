# Project guardrails convention

Every Professional Project must translate applicable Engineering Conventions into controls that prevent violations or make them visible. These Project Guardrails belong to the project and reflect its actual architecture, tools, risks, and workflow.

## Enforcement order

Prefer the strongest practical control, in this order:

1. Eliminate the failure through architecture, data structures, interfaces, permissions, or another design constraint.
2. Detect the failure automatically through tests, static analysis, continuous integration, repository settings, or external controls.
3. Guide judgment through concise project rules or explicit procedures when the condition cannot be checked mechanically.
4. Rely on user review for residual cases that cannot reasonably be prevented, detected, or guided earlier.

The order is directional, not a demand to add every layer. Choose controls in proportion to the cost and consequence of failure. A clear architectural constraint may need no repeated prose; a low-risk judgment may need only concise guidance.

## Coverage

- Each applicable Engineering Convention has discoverable project evidence or a deliberate deviation.
- Controls live near the behavior or system that owns them whenever practical.
- External controls such as repository settings, deployment gates, issue-tracker states, service permissions, and hosted checks are included in the project's guardrail model even when their configuration does not live in Git.
- Agent Guidance points to external controls when an agent must know they exist, but does not duplicate their full configuration.
- A new guardrail addresses an observed risk, likely high-consequence failure, or repeated correction. Projects do not accumulate ceremonial controls merely to mirror this playbook.
- When a control changes, related guidance and evidence remain consistent with it.

## Deviations

> Any deliberate failure to meet an applicable Engineering Convention requires explicit approval.

## Evidence

A project should make it possible to answer:

- Which conventions apply here?
- What prevents or detects a violation?
- Where is each control configured or explained?
- Which deliberate deviations have been approved?

No central manifest, installed-skill list, or playbook version marker is required. Existing projects reassess these questions through explicit [Project re-adoption](../workflows/project-adoption.md).
