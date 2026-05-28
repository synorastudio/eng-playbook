---
name: prototype
description: Build throwaway prototypes that answer either logic/state questions or UI-variant questions before committing to production implementation. Use when sanity-checking state models, workflows, data behavior, screens, components, visual directions, or when the user says to prototype or try variants.
---

# Prototype

A prototype is throwaway code that answers a question. The answer is valuable; the prototype is disposable.

## Choose The Branch

- Logic, state, workflow, or data-model uncertainty -> follow `LOGIC.md`.
- UI, screen, component, layout, or visual direction uncertainty -> follow `UI.md`.

If the question is ambiguous, ask. If the user is unavailable, choose the branch that best matches the surrounding code and state the assumption.

## Rules

- Mark prototype code clearly as prototype-only.
- Keep it close to the code or product area it explores.
- Provide one command or route to run it.
- Avoid persistence unless persistence is the question being tested.
- Skip production polish, generalized abstractions, and broad error handling.
- Surface the relevant state or variant differences.
- Delete or absorb the prototype when the question is answered.

## Capture The Answer

Before deleting or absorbing the prototype, capture:

- The question the prototype answered.
- The verdict.
- Any decision that should become an ADR.
- Any docs, issue, or architecture update needed.

Do not leave unexplained prototype code in the repo.
