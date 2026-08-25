---
name: write-spec
description: Write a product-reviewable Spec in the configured issue tracker from decisions already settled in conversation or a decision map.
disable-model-invocation: true
---

# Write a spec

Capture resolved product and design decisions in a tracker-backed Spec that a product collaborator can review and a fresh agent can continue from.

Use this conditional workflow when the work must survive across agent sessions or needs product review before issue shaping. Skip it when the accepted work fits comfortably in one session and no review artifact would help.

## Spec boundary

A Spec records decisions. It does not make them.

If product scope, design branches, system boundaries, or other blocking decisions remain unresolved, stop and route back to `grill`. Do not invent answers to complete the template.

The Spec is a temporary tracker artifact for the active body of work. Keep durable vocabulary in `LANGUAGE.md`, hard-to-reverse trade-off decisions in ADRs, and current system knowledge in Living Docs.

## Gather the accepted context

Read only the sources that bear on the Spec:

- The current conversation and its resolved Grilling Session decisions.
- A completed decision map and its linked resolutions, when one exists.
- Relevant `LANGUAGE.md` files, ADRs, and Living Docs.
- Relevant code when it establishes current behavior or constraints.
- Related tracker items when they may overlap or conflict with the proposed work.

Treat the conversation and linked decision resolutions as the source for new commitments. Use repo artifacts and code to check consistency, not to silently expand scope.

## Choose the tracker

Read `AGENTS.md` for the configured issue tracker. If it does not name one, ask the user where Specs and Feature Issues should live, then record that durable choice in `AGENTS.md`.

Publish the Spec directly to that tracker as a draft. Use a native draft state when the tracker supports one. Otherwise put `Status: Draft` at the top of the issue body.

Do not save a copy in the repo.

## Write for product review and agent continuation

Use the project's Language. Keep the product promise readable without stripping out technical decisions that constrain implementation.

Include only sections that carry real content:

```md
# <Outcome-oriented title>

Status: Draft

## Outcome

## Users

## Scope

## Out of scope

## Resolved decisions

## Acceptance criteria

## Constraints and dependencies

## Implementation context

## Deferred questions

## References
```

`Deferred questions` may contain only named, non-blocking deferrals. Route blocking questions back to `grill` before publishing.

Write observable acceptance criteria. Keep technical tasks, file lists, and speculative implementation details out of the Spec unless the user explicitly settled them as constraints.

Link relevant ADRs, Living Docs, decision-map resolutions, research, and existing issues instead of copying their contents.

## Handoff

Return the created tracker link and state that the Spec remains a draft until the user accepts it through the tracker's normal workflow or explicitly says it is accepted.

Do not create Feature Issues from this skill. Once the Spec is accepted, route to `write-issues` when issue tracking would clarify execution. Direct implementation remains valid when the work does not need issue shaping.

Finish when the draft exists in the configured tracker, every commitment traces to an accepted source, and a product collaborator and fresh agent can understand the intended outcome without the original conversation.
