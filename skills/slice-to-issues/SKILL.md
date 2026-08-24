---
name: slice-to-issues
description: Turn accepted scope into Feature Issues and Sub-Issues for a chosen tracker.
disable-model-invocation: true
---

# Slice to issues

Start after the target outcome and its main boundaries are clear.

Issues represent features, not technical tasks. Think user stories, not implementation steps.

- Issue = a feature a user would recognize: "Guests can RSVP," "Host can view responses," "Invite page shows event details."
- Sub-issue = a smaller feature if the parent feature is too big: "RSVP supports dietary preferences" under "Guests can RSVP."
- A technical layer is not a Feature Issue. "Implement API," "build form," "add route," and "write database schema" stay inside the coding agent's implementation plan.

The coding agent decides the technical tasks inside the issue. The issue tracker should stay readable for non-technical collaborators.

## Workflow

1. Read available project context, `LANGUAGE.md`, ADRs, and living docs.
2. Identify user-recognizable feature outcomes.
3. Split oversized features into smaller feature sub-issues.
4. Mark assumptions and dependencies.
5. Determine the destination from repo guidance or ask the user when it is unclear.
6. Persist the chosen issue tracker in `AGENTS.md`.
7. Draft issues in dependency order and check each one against the rules below.

## Issue rules

A good issue:

- Names a feature a user or collaborator would recognize.
- Produces a demoable outcome.
- Has clear acceptance criteria.
- Names dependencies and blockers.
- Avoids bundling unrelated user-facing behavior.
- Avoids backend-only, frontend-only, or infrastructure-only work unless the feature is genuinely internal and user-recognizable to the system owner.
- Captures architectural assumptions without pretending they are settled decisions.

Use sub-issues when the parent feature is too large but the child is still a feature. Do not use sub-issues for implementation steps.

## Issue template

```md
# Title

## Outcome

What user-recognizable feature this issue makes possible.

## Feature scope

- User-facing or system-owner-visible behavior included in this issue.
- Explicitly excluded behavior, if needed.

## Acceptance criteria

- Observable pass/fail criteria.

## Assumptions

- Assumptions the agent may proceed with.

## Blocked by

- Dependencies or decisions.

## Stop and ask if

- Implementing this requires changing product scope beyond the issue.
- Implementing this requires a hard-to-reverse architecture decision.
- Implementing this requires a new paid service, external vendor, or hosted dependency.
- Implementing this risks existing persisted data or requires a migration.
- Implementing this changes auth, permissions, secrets, or security-sensitive behavior.
- Implementing this requires a broad refactor outside the feature.
```

## Tracker policy

Stay tracker-agnostic. If the user has not chosen a destination, ask whether to use GitHub Issues, Linear, Markdown files, or another tracker.

Once the user chooses a tracker, persist the decision in `AGENTS.md` so future agents know where issues live.

Use a short section like:

```md
## Issue tracker

Use Linear for feature issues and sub-issues.

Issues represent user-recognizable features, not technical tasks. Do not create layer-based issues like "implement API" or "build form" unless the user explicitly asks.
```

Do not store the tracker decision in `LANGUAGE.md`. If the tracker choice is surprising, costly to reverse, or tied to a workflow/tooling trade-off, offer an ADR too.

## Stop-and-ask intent

`Stop And Ask If` is for the coding agent that later picks up the issue. It preserves autonomy inside the feature while naming the boundaries where the agent must pause instead of improvising.

Finish when every accepted feature has one home, every issue describes an observable outcome, dependencies are explicit, and no issue exists only to represent a technical layer.
