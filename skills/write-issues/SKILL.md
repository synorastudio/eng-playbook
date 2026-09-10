---
name: write-issues
description: Turn accepted scope into a tree of Feature Issues, each a nested vertical slice, in the configured tracker.
disable-model-invocation: true
---

# Write issues

Start after the target outcome and its main boundaries are clear. Use an accepted Spec when one exists; a Spec is not required for smaller work whose accepted scope is already available in conversation.

A Feature Issue names a user-recognizable or system-owner-visible outcome, and is cut as a **vertical slice** through the stack that can be verified on its own. The title is a feature noun-phrase, not a user-story sentence or a technical task.

- Feature Issue = a vertical slice of behavior a user or system owner would recognize: "Owner Sign-up and Sign-in," "Services Management," "Public Booking."
- Sub-Issue = a smaller vertical slice nested under a larger feature when the parent is too big to build or sequence as one slice: "Availability Configuration" under "Tenant Configuration."
- A horizontal layer is not a Feature Issue. "Implement API," "build form," "add route," "write database schema," and "slot generation & display" on its own are not slices. Slots you cannot book yet cannot be verified on their own. Layers stay inside the coding agent's implementation plan for a slice.

The coding agent decides the technical tasks inside a slice. The tracker stays readable for non-technical collaborators.

## Cut vertical slices, nest shallowly

Each issue should deliver a usable, verifiable increment that spans whatever layers it needs, not one layer of many. Prefer the smallest slice that is still recognizable and verifiable on its own.

Nest the same way `map-decisions` nests: prefer shallow trees, and split a feature into Sub-Issues only when it is too big to build or sequence as one slice. Every issue, the parent included, stays an independently verifiable vertical slice; a parent is verified through the behavior its Sub-Issues compose. Add hierarchy only when it improves tracking.

Sequence with dependencies, not nesting. Record each dependency as a tracker relation, using native `blockedBy` edges when the tracker supports them and ordinary links otherwise, so the order is visible. The tracker does not hold a dependent issue closed on its own; the release order honors the sequence. Tracker hierarchy does not prescribe branches or pull-request targets.

## Aim to verify by using it

Aim for each slice to be verifiable by running the project and using the behavior it adds, however that project runs (a local dev server, a deployed preview, a CLI). Some slices are exercised directly; others by triggering the behavior and checking its effect, such as an email notification landing in the inbox. Keep each slice small enough to exercise on its own, and do not drop that aim for a slice that could meet it.

## Decisions are tracked too

Not all tracked work is a feature, and decisions are not folded into Feature Issues. Follow `map-decisions`: keep small questions in the parent Decision Map, and create a Decision Issue only when a question needs separate grilling, research, prototyping, or ownership. A hard-to-reverse, surprising, trade-off decision graduates to an ADR (`write-adr`).

## Workflow

1. Read the accepted Spec when one exists, plus relevant project context, `LANGUAGE.md`, ADRs, and Living Docs.
2. Identify user-recognizable outcomes and cut each as a vertical slice.
3. Split an oversized slice into nested Sub-Issue slices only when the parent is too big to build or sequence as one.
4. Mark assumptions, and set dependency relations in dependency order, using native `blockedBy` edges when the tracker supports them and ordinary links otherwise.
5. Read the configured issue tracker and its project reference from `AGENTS.md`, where project setup has already recorded them.
6. Draft issues there and check each one against the rules below.

## Issue rules

A good issue:

- Names a user-recognizable or system-owner-visible outcome with a feature noun-phrase title.
- Is a vertical slice spanning the layers it needs, not a horizontal layer.
- Can be verified by running the project and using it.
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

- How to verify the slice by running the project and using it.

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

## Tracker

`AGENTS.md` records the issue tracker and the project reference that resolves an issue id (the workspace, team, or board), set once by project setup (`init-agent-os` or `adopt-project`). Read them and write issues there. If either is missing, that is a setup gap: route back to `init-agent-os` or `adopt-project` to record it, rather than choosing or persisting it here.

## Stop-and-ask intent

`Stop And Ask If` is for the coding agent that later picks up the slice. It preserves autonomy inside the slice while naming the boundaries where the agent must pause instead of improvising.

Finish when every issue meets the rules above, every accepted outcome has one home as a vertical slice, and the tree is as shallow as the work allows. A dependency-ready Feature Issue is a candidate Work Unit; route to `implement` only when the user releases it to build. Creating or accepting the issue is not a release.
