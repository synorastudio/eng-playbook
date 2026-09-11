# Tracking convention

SynoraStudio tracks execution in Linear. A Professional Project's issues follow a consistent structure so a coding agent can find, route, and build work from an issue id alone.

## Required outcomes

- Linear is the issue tracker. A client project that must use another tracker records that exception in its Agent Guidance; every other project uses Linear.
- The project records its Linear team and the project that resolves an issue id in `AGENTS.md`, so later work needs only the id.
- The team, initiative, and project hierarchy is defined by SynoraStudio's [Tooling & Workflow doc](https://app.notion.com/p/Tooling-Workflow-f4f227e90a8747e5a09b5f1fa72ae4f2), not created per project. The playbook works within a project and defines only the issue layer inside it.
- A Milestone is a Linear project milestone within the project, mirroring the current iteration described upstream.
- Every issue carries one `type` label from a fixed group:
  - `feature`: a vertical slice of user-recognizable behavior.
  - `decision`: a Decision Map or a Decision Issue.
  - `docs`: documentation-writing work that links to the repo files where the doc lives.
  - `bug`: a defect fix.
  - `chore`: maintenance that fits no feature.
  - `spec`: settled, reviewable scope for a Milestone.
- A decision issue also carries a `resolution` label saying how it resolves, which signals the workflow to use, resolved through it rather than ad hoc:
  - `grilling`: a Grilling Session, one question at a time with the user.
  - `prototype`: a throwaway artifact the user reacts to.
  - `research`: away-from-keyboard digging that records its sources and conclusions.
  - A decision settled in conversation carries no `resolution` label.
- Assign labels explicitly; Linear does not inherit them from a parent. A feature Sub-Issue takes `type: feature` like its parent; a Decision Map's children take `type: decision` plus their own `resolution` label.
- Issues reference the material they do not own rather than duplicating it. Product scope and requirements live upstream in Notion; architecture and ADRs live in the repo. A Linear issue links to them. The [Tooling & Workflow doc](https://app.notion.com/p/Tooling-Workflow-f4f227e90a8747e5a09b5f1fa72ae4f2) defines which surface owns what.
- Dependencies are recorded as Linear `blockedBy` relations, not as a text list in an issue body. The tracker shows the order; the order work is built in honors it. Tracker hierarchy does not prescribe branches or pull-request targets.
- ADRs live in the repo, never in Linear.

## Evidence

Evidence includes the team and project recorded in `AGENTS.md`, the `type` label group present in the workspace, issues carrying a type, and `blockedBy` relations expressing dependency order.

## Guardrail examples

- The `type` label group defined in the Linear workspace so every issue can be classified.
- Agent Guidance that records the team and project resolving an issue id.
- Issue templates or review that keep product scope upstream and architecture in the repo instead of duplicating them into Linear.

Apply the [Project guardrails convention](guardrails.md) when selecting controls or handling a deviation.
