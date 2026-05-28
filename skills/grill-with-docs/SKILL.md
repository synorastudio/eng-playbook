---
name: grill-with-docs
description: Stress-test a plan or design through a relentless design-tree interview, sharpening project language and surfacing decisions that belong in LANGUAGE.md or ADRs. Use when the user wants to challenge an idea, architecture, feature design, or implementation plan before committing to work.
---

# Grill With Docs

Use this skill to stress-test a plan before implementation.

This skill does not ingest broad project context, scaffold repos, create issues, manage living docs, or write implementation plans. Use `project-intake`, `scaffold-project`, `slice-to-issues`, or `maintain-living-docs` for those workflows.

## Core Instruction

Interview the user relentlessly about every aspect of the plan until there is shared understanding.

Walk down every branch of the design tree, resolving dependencies between decisions one by one. Ask one question at a time. For each question, provide your recommended answer when you have enough context to do so.

If a question can be answered by inspecting the repo or existing docs, inspect those instead of asking.

## Inputs

Before grilling, read relevant existing artifacts when available:

- `LANGUAGE.md` and local `LANGUAGE.md` files.
- `LANGUAGE-MAP.md` if multiple language contexts exist.
- `docs/adr/`.
- `docs/architecture.md` or related living docs.
- The specific plan, feature, design, or architecture proposal being grilled.

If the user has not provided a concrete plan or design to grill, ask them to provide one or suggest running `project-intake` first.

## Grilling Posture

Start as a collaborative skeptic. Escalate when ambiguity, contradiction, or risk remains.

Push especially hard on:

- Ambiguous product language.
- Hidden assumptions.
- User-facing scope.
- Domain boundaries.
- Data ownership.
- State transitions.
- Failure modes.
- Auth, permissions, and security.
- External dependencies and vendor lock-in.
- Irreversible or expensive architecture choices.
- Places where the proposed design conflicts with existing docs or code.

## Design Tree Method

Work from broad decisions to dependent details:

1. Clarify the target outcome.
2. Identify the main design branches.
3. Pick the branch that blocks the most downstream decisions.
4. Ask the next decision-forcing question.
5. Resolve or explicitly defer that branch.
6. Move to the next dependent branch.
7. Continue until no major branch is vague enough to threaten implementation.

Do not batch a long questionnaire. Ask one question, wait, then continue.

## Docs During Grilling

Use docs only for durable knowledge discovered during the interview.

Update or propose updates to `LANGUAGE.md` when a project-specific term is clarified. Follow `../write-language/LANGUAGE-FORMAT.md`.

Offer an ADR only when all three are true:

1. The decision is hard to reverse.
2. The decision would be surprising without context.
3. The decision came from a real trade-off.

Follow `../write-adr/ADR-FORMAT.md`.

Do not update living docs, create issues, scaffold files, or write implementation plans from this skill unless the user explicitly asks to switch workflows.

## Completion Criteria

Complete the grilling session when:

- The plan's goal and non-goals are clear.
- The important branches of the design tree have been walked.
- Blocking decisions are resolved or explicitly deferred.
- Key terms are aligned with `LANGUAGE.md`.
- ADR-worthy decisions have been identified.
- Remaining uncertainty is named clearly enough for another skill or session to handle.
