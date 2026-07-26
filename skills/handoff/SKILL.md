---
name: handoff
description: Produce a compact handoff document so a future agent can continue work without rereading the whole conversation. Use near context limits, at session boundaries, before switching agents, or when pausing multi-session work.
argument-hint: "What should the next session focus on?"
---

# Handoff

Create a handoff document for a fresh agent.

Save it outside the workspace unless the user asks for a repo artifact. Use the operating system temp directory by default.

## Include

- Current goal.
- Current state.
- Decisions made.
- Open questions.
- Relevant files, issues, ADRs, and docs by path or URL.
- Suggested skills for the next session.
- Recommended next action.

## Do Not Include

- Secrets, credentials, tokens, or sensitive personal information.
- Full copies of artifacts already stored elsewhere.
- Long transcripts.
- Unverified speculation unless clearly labeled.

## Template

```md
# Handoff

## Goal

## Current State

## Decisions

## Open Questions

## Important Artifacts

## Suggested Skills

## Next Action
```

If the user provides a focus argument, tailor the handoff to that next session.
