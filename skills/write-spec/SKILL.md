---
name: write-spec
description: Write a product-reviewable Spec as a Linear issue for one Milestone whose decisions are already settled.
disable-model-invocation: true
---

# Write a spec

Capture one resolved Milestone in a Spec, a Linear issue that a product collaborator can review and a fresh agent can continue from.

Use this conditional workflow when the work must survive across agent sessions or needs product review before issue shaping. Skip it when the accepted work fits comfortably in one session and no review artifact would help.

## Spec boundary

A Spec records decisions. It does not make them.

If product scope, design branches, system boundaries, or other blocking decisions remain unresolved, stop and route to the linked Decision Map or `grill`. Do not invent answers to complete the template.

The Spec is a temporary Linear issue for the active body of work. Keep durable vocabulary in `LANGUAGE.md`, hard-to-reverse trade-off decisions in ADRs, and current system knowledge in Living Docs.

## Gather the accepted context

Read only the sources that bear on the Spec:

- The current conversation and its resolved Grilling Session decisions.
- The completed Decision Map, the Milestone it produced, and linked Decision Issue resolutions, when they exist.
- Relevant `LANGUAGE.md` files, ADRs, and Living Docs.
- Relevant code when it establishes current behavior or constraints.
- Related tracker items when they may overlap or conflict with the proposed work.

Treat the conversation and linked decision resolutions as the source for new commitments. Use repo artifacts and code to check consistency, not to silently expand scope.

## Use the Linear tracker

Read the Linear team and project from `AGENTS.md`, recorded by project setup (`init-agent-os` or `adopt-project`). If either is missing, that is a setup gap: route to `init-agent-os` or `adopt-project` rather than choosing it here. If `AGENTS.md` records a different tracker for this project (a client exception), publish the Spec there instead.

Publish the Spec as a Linear issue with the `type: spec` label, in a draft or backlog state until it is accepted.

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

A Spec creates no Git branch by default. Record a Milestone integration branch as an implementation constraint only when the accepted work must be verified atomically and intermediate changes cannot safely reach the target repo's normal integration branch.

## Handoff

Return the created tracker link and state that the Spec remains a draft until the user accepts it through the tracker's normal workflow or explicitly says it is accepted.

Do not create Feature Issues from this skill. Once the Spec is accepted, route to `write-issues` to cut it into Feature Issues when issue tracking would clarify execution, or to `implement` when the user tells the agent to build a specific piece directly. An accepted Spec is not that go-ahead; writing or accepting it never authorizes building on its own.

Finish when the draft Spec issue exists in Linear, every commitment traces to an accepted source, and a product collaborator and fresh agent can understand the Milestone without the original conversation.
