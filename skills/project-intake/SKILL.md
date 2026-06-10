---
name: project-intake
description: Normalize external project context into goals, users, constraints, feature candidates, assumptions, and open questions. Use when starting a new project, receiving a Notion brief, pasted notes, rough feature list, user flows, screen ideas, or other pre-coding product context.
---

# Project Intake

Use this skill before grilling or scaffolding when the project context comes from outside the coding agent.

## Inputs

Accept any source the user provides:

- Pasted notes.
- Notion or document exports.
- Markdown files.
- Links or references.
- User flows, screen sketches, feature ideas, or research notes.

Do not make the workflow source-specific. If another tool or skill can fetch context, use it; otherwise ask the user for the missing material.

## Normalize The Brief

Extract and organize:

- Product vision and desired outcomes.
- Target users, personas, or jobs-to-be-done.
- Initial feature candidates.
- Conceptual user flows or screens.
- Constraints: timeline, budget, hosting, stack preferences, compliance, team size.
- Explicit decisions and non-goals.
- Open questions.
- Risky assumptions.
- Vocabulary candidates for `LANGUAGE.md`.

## Source Authority

Treat external briefs as upstream context, not automatically authoritative project truth. Preserve the distinction between what the source says and what the repo has accepted.

When possible, capture source provenance without copying full upstream content:

- Source name or type.
- Stable URL, ID, or file path.
- Child pages, sections, or references used.
- Fetch or access date when known.
- Any stated relationship to repo docs or issue trackers.

Flag contradictions between external context and existing repo docs instead of silently resolving them.

## Scope Sorting

Separate active work from future possibility.

- Current implementation contract: what appears accepted for the current iteration.
- Backlog: likely future work, not part of the current contract.
- Someday or speculative ideas: weak commitments that should not shape immediate scaffolding.
- Non-goals: explicit exclusions.

Do not promote backlog or speculative ideas into current scope just because they appear in the external brief.

## Output

Return a concise intake summary:

```md
## Project Intake

### Sources

### Goal

### Users

### Current Scope

### Constraints

### Backlog And Later

### Existing Decisions

### Non-Goals

### Source Conflicts

### Assumptions To Grill

### Vocabulary Candidates

### Recommended Next Step
```

Omit empty sections when they add no signal. The recommended next step is usually:

1. `scaffold-project` if the repo is greenfield or lacks an Agent Operating System.
2. `grill-with-docs` for unresolved assumptions, vocabulary, scope boundaries, and authority questions.
3. A docs update when the intake reveals accepted durable knowledge that should be reflected in repo docs.
