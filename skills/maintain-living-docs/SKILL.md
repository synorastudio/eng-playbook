---
name: maintain-living-docs
description: Steward durable explanatory documentation such as docs/architecture.md, onboarding notes, operational docs, and project-specific guides without creating doc sprawl. Use when implementation changes current system shape, durable workflows, operational knowledge, or architecture navigation.
---

# Maintain Living Docs

Use this skill to keep durable explanatory docs current. It is not a vocabulary, ADR, issue, plan, or handoff skill.

## Update Docs When

Update living docs only when the information is:

- Durable beyond the current session.
- Useful to a future agent or human.
- Explanatory rather than definitional or decisional.
- Not better captured in code, tests, issue comments, `LANGUAGE.md`, an ADR, a plan, or a handoff.

Skip temporary plans, unresolved speculation, and details that will rot quickly.

## Boundaries

This skill owns living explanatory docs:

- Current system shape in `docs/architecture.md`.
- Operational procedures in focused docs under `docs/`.
- Onboarding or navigation docs that help a future agent or human work in the repo.
- Project-specific guides with durable ownership.

This skill does not own:

- Vocabulary. Use `write-language`.
- Hard-to-reverse trade-off decisions. Use `write-adr`.
- Implementation plans. Use `plans/` or the planning workflow.
- Work breakdown. Use `slice-to-issues`.
- Session continuity. Use `handoff`.

If a requested doc update is mostly vocabulary or decisions, stop and suggest the narrower skill instead of folding it into living docs.

## docs/architecture.md

Keep `docs/architecture.md` as a navigational overview, not an exhaustive spec.

Include what helps a future agent understand the current system:

- Major components and responsibilities.
- Important data or request flows.
- External services and integrations.
- Links to relevant ADRs.
- Pointers to deeper docs.

Avoid speculative future architecture, detailed implementation plans, and duplicated ADR rationale.

## Maintenance Rules

- Prefer updating existing docs over creating new ones.
- Create a new doc only when the topic has durable ownership.
- Keep sections short and link to source artifacts.
- Remove stale statements when replacing them.
- Report what changed and what was intentionally left undocumented.
