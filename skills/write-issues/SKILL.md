---
name: write-issues
description: Turn accepted scope into a tree of Feature Issues, each a nested vertical slice, for a chosen tracker.
disable-model-invocation: true
---

# Write issues

Start after the target outcome and its main boundaries are clear. Use an accepted Spec when one exists; a Spec is not required for smaller work whose accepted scope is already available in conversation.

A Feature Issue names a user-recognizable or system-owner-visible outcome, and is cut as a **vertical slice** through the stack that can be verified on its own. The title is a feature noun-phrase, not a user-story sentence or a technical task.

- Feature Issue = a vertical slice of behavior a user or system owner would recognize: "Owner Sign-up and Sign-in," "Services Management," "Public Booking."
- Sub-Issue = a smaller vertical slice nested under a larger feature when the parent is too big to verify or sequence as one slice: "Availability Configuration" under "Tenant Configuration."
- A horizontal layer is not a Feature Issue. "Implement API," "build form," "add route," "write database schema," and "slot generation & display" on its own are not slices. Slots you cannot book yet cannot be verified on their own. Layers stay inside the coding agent's implementation plan for a slice.

The coding agent decides the technical tasks inside a slice. The tracker stays readable for non-technical collaborators.

## Cut vertical slices, nest shallowly

Each issue should deliver a usable, verifiable increment that spans whatever layers it needs, not one layer of many. Prefer the smallest slice that is still recognizable and verifiable on its own.

Nest the same way `map-decisions` nests: prefer shallow trees, and split a feature into Sub-Issues only when it is too big to verify or sequence as one slice. Each Sub-Issue is itself a vertical slice. Add hierarchy only when it improves tracking.

Sequence with dependencies, not nesting. Record each dependency as a tracker relation, using native `blockedBy` edges when the tracker supports them and ordinary links otherwise, so the order is visible. The tracker does not hold a dependent issue closed on its own; the release order honors the sequence. Tracker hierarchy does not prescribe branches or pull-request targets.

## Aim for independent verifiability

Aim for each slice to be verifiable on its own, ideally by clicking through a pull-request preview deployment. This is an aim, not a hard rule. Some slices are verified another way. An email-notification slice is verified by triggering the transition and checking the email. Do not contort a slice to force preview-verifiability when it does not fit, and do not drop the aim for slices that could have met it.

## Decisions are tracked too

Not all tracked work is a feature. Track a decision as a Decision Issue, owned by `map-decisions` and kept distinct from Feature Issues; a hard-to-reverse, surprising, trade-off decision graduates to an ADR (`write-adr`). A question that is really an unresolved decision belongs in a Decision Issue, not a Feature Issue.

## Workflow

1. Read the accepted Spec when one exists, plus relevant project context, `LANGUAGE.md`, ADRs, and Living Docs.
2. Identify user-recognizable outcomes and cut each as a vertical slice.
3. Split an oversized slice into nested Sub-Issue slices only when the parent is too big to verify or sequence as one.
4. Mark assumptions, and set dependency relations in dependency order, using native `blockedBy` edges when the tracker supports them and ordinary links otherwise.
5. Determine the destination from repo guidance, defaulting to Linear when none is configured.
6. Persist the chosen issue tracker in `AGENTS.md`.
7. Draft issues and check each one against the rules below.

## Issue rules

A good issue:

- Names a user-recognizable or system-owner-visible outcome with a feature noun-phrase title.
- Is a vertical slice spanning the layers it needs, not a horizontal layer.
- Is independently verifiable, ideally through a preview deployment; verified another way only when that does not fit.
- Has clear acceptance criteria and explicit dependency relations, using `blockedBy` when the tracker supports it.
- Avoids bundling unrelated user-facing behavior.
- Captures architectural assumptions without pretending they are settled decisions.

## Issue template

```md
# Feature noun-phrase title

## Outcome

The user-recognizable or system-owner-visible behavior this slice delivers.

## Slice scope

- Behavior included in this vertical slice, across the layers it spans.
- Explicitly excluded behavior, if needed.

## Acceptance criteria

- Observable pass/fail criteria.

## Verification

- How to verify the slice: the preview-deployment path when it fits, or the specific alternative when it does not.

## Assumptions

- Assumptions the agent may proceed with.

## Blocked by

- Dependencies as tracker relations, and unresolved decisions.

## Stop and ask if

- Implementing this requires changing product scope beyond the slice.
- Implementing this requires a hard-to-reverse architecture decision.
- Implementing this requires a new paid service, external vendor, or hosted dependency.
- Implementing this risks existing persisted data or requires a migration.
- Implementing this changes auth, permissions, secrets, or security-sensitive behavior.
- Implementing this requires a broad refactor outside the slice.
```

## Tracker policy

Default to Linear when the repository has not configured a tracker. Use a different tracker only when the project already uses one or the user names one.

Persist the tracker in `AGENTS.md` so future agents know where issues live.

Use a short section like:

```md
## Issue tracker

Use Linear for Feature Issues and Sub-Issues.

Feature Issues are vertical slices of user-recognizable behavior, not technical tasks or horizontal layers. Do not create layer-based issues like "implement API" or "build form" unless the user explicitly asks.
```

Do not store the tracker decision in `LANGUAGE.md`. If the tracker choice is surprising, costly to reverse, or tied to a workflow/tooling trade-off, offer an ADR too.

## Stop-and-ask intent

`Stop And Ask If` is for the coding agent that later picks up the slice. It preserves autonomy inside the slice while naming the boundaries where the agent must pause instead of improvising.

Finish when every issue meets the rules above, every accepted outcome has one home as a vertical slice, and the tree is as shallow as the work allows. A dependency-ready Feature Issue is a candidate Work Unit; route to `implement` only when the user releases it to build. Creating or accepting the issue is not a release.
