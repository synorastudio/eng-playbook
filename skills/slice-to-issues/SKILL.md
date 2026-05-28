---
name: slice-to-issues
description: Convert grilled features or plans into user-recognizable feature issues and sub-issues, not technical tasks. Use when breaking project scope into Linear, GitHub, Markdown, or other tracker issues that non-technical collaborators should be able to understand.
---

# Slice To Issues

Use this skill after enough grilling has happened to understand the target outcome.

Issues represent features, not technical tasks. Think user stories, not implementation steps.

- Issue = a feature a user would recognize: "Guests can RSVP," "Host can view responses," "Invite page shows event details."
- Sub-issue = a smaller feature if the parent feature is too big: "RSVP supports dietary preferences" under "Guests can RSVP."
- Never break down by technical layer. Do not create issues like "implement API," "build form," "add route," or "write database schema."

The coding agent decides the technical tasks inside the issue. The issue tracker should stay readable for non-technical collaborators.

## Workflow

1. Read available project context, `LANGUAGE.md`, ADRs, living docs, and plans.
2. Identify user-recognizable feature outcomes.
3. Split oversized features into smaller feature sub-issues.
4. Mark assumptions and dependencies.
5. Ask where issues should live if the destination is unclear.
6. Persist the chosen issue tracker in `AGENTS.md`.
7. Draft issues in dependency order.

## Issue Rules

A good issue:

- Names a feature a user or collaborator would recognize.
- Produces a demoable outcome.
- Has clear acceptance criteria.
- Names dependencies and blockers.
- Avoids bundling unrelated user-facing behavior.
- Avoids backend-only, frontend-only, or infrastructure-only work unless the feature is genuinely internal and user-recognizable to the system owner.
- Captures architectural assumptions without pretending they are settled decisions.

Use sub-issues when the parent feature is too large but the child is still a feature. Do not use sub-issues for implementation steps.

## Issue Template

```md
# Title

## Outcome

What user-recognizable feature this issue makes possible.

## Feature Scope

- User-facing or system-owner-visible behavior included in this issue.
- Explicitly excluded behavior, if needed.

## Acceptance Criteria

- Observable pass/fail criteria.

## Assumptions

- Assumptions the agent may proceed with.

## Blocked By

- Dependencies or decisions.

## Stop And Ask If

- Implementing this requires changing product scope beyond the issue.
- Implementing this requires a hard-to-reverse architecture decision.
- Implementing this requires a new paid service, external vendor, or hosted dependency.
- Implementing this risks existing persisted data or requires a migration.
- Implementing this changes auth, permissions, secrets, or security-sensitive behavior.
- Implementing this requires a broad refactor outside the feature.
```

## Tracker Policy

Stay tracker-agnostic. If the user has not chosen a destination, ask whether to use GitHub Issues, Linear, Markdown files, Cursor plans, or another tracker.

Once the user chooses a tracker, persist the decision in `AGENTS.md` so future agents know where issues live.

Use a short section like:

```md
## Issue Tracker

Use Linear for feature issues and sub-issues.

Issues represent user-recognizable features, not technical tasks. Do not create layer-based issues like "implement API" or "build form" unless the user explicitly asks.
```

Do not store the tracker decision in `LANGUAGE.md`. If the tracker choice is surprising, costly to reverse, or tied to a workflow/tooling trade-off, offer an ADR too.

## Stop-And-Ask Intent

`Stop And Ask If` is for the coding agent that later picks up the issue. It preserves autonomy inside the feature while naming the boundaries where the agent must pause instead of improvising.
