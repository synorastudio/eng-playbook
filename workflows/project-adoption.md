# Project adoption workflow

Use Project Adoption to bring an existing repository into alignment with the current applicable Engineering Conventions while preserving its real constraints and established practices.

Running this Workflow again is re-adoption. Convention changes reach an existing project only through explicit re-adoption; projects do not track a playbook version or update themselves implicitly.

## Entry

Read the repository's current guidance, documentation, code structure, configuration, checks, repository settings, tracker workflow, deployment controls, and other evidence relevant to the convention baseline.

## Flow

1. Audit the repository against each applicable Engineering Convention and its required outcomes.
2. Identify existing Project Guardrails, including external controls not stored in Git.
3. Classify findings as existing strengths to preserve, local conventions to retain, missing outcomes, conflicts requiring a decision, or inapplicable concerns. A conflicting commit format is a deviation, not a local convention to retain silently.
4. Propose the smallest set of changes that translates the convention outcomes into project-owned guidance and guardrails. Do not copy playbook prose into the project.
5. Name any deliberate deviation using the rule in the [Project guardrails convention](../conventions/guardrails.md).
6. Obtain explicit approval before writing. Apply only the approved proposal and user-provided project knowledge.
7. Verify that the resulting guidance and controls agree with the project's actual operation, then report changes, preserved constraints, approved deviations, and deferred work.

## Completion

Adoption is complete when every approved proposal item is applied or explicitly deferred, touched project conventions are preserved or deliberately replaced, and the repository contains enough discoverable evidence for its applicable baseline. No adoption manifest or version marker is created.

Greenfield repositories follow the [Repository convention](../conventions/repositories.md) during initialization. The portable `adopt-project` and `init-agent-os` Skills provide procedures for existing and greenfield repositories respectively.
