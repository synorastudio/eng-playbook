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

## Output

Return a concise intake summary:

```md
## Project Intake

### Goal

### Users

### Constraints

### Feature Candidates

### Existing Decisions

### Assumptions To Grill

### Vocabulary Candidates

### Recommended Next Step
```

The recommended next step is usually `grill-with-docs`. If the repo has not been scaffolded, recommend `scaffold-project` first or in parallel with grilling.
