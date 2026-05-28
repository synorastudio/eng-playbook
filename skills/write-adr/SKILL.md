---
name: write-adr
description: Create concise architecture decision records for hard-to-reverse, surprising trade-off decisions. Use when stack choices, boundaries, integration patterns, constraints, or non-obvious rejected alternatives need durable explanation.
---

# Write ADR

Use this skill to create minimal ADRs. Follow `ADR-FORMAT.md`.

## ADR Gate

Create or offer an ADR only when all three are true:

1. The decision is hard to reverse.
2. The decision would be surprising without context.
3. The decision came from a real trade-off.

If any condition is false, do not create an ADR.

## Workflow

1. Read existing ADRs in `docs/adr/` if present.
2. Check whether the decision is already recorded.
3. Identify the next sequential number.
4. Write the shortest ADR that preserves the decision and why it was made.
5. Link related living docs if useful.

## Default Shape

```md
# Short Decision Title

One to three sentences explaining the context, the decision, and why this trade-off was chosen.
```

## Avoid

- Turning ADRs into implementation plans.
- Recording obvious or easy-to-reverse choices.
- Duplicating details already better captured in `docs/architecture.md`.
- Renumbering existing ADRs.
- Creating ADRs just because a decision was discussed.
