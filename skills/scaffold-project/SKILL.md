---
name: scaffold-project
description: "Create a minimal, tech-agnostic agent operating system for a truly greenfield repo: agent guidance, planning anchors, ignore files, and starter documentation. Use when starting a new project repo."
---

# Scaffold Project

Establish a greenfield repo's agent operating system without choosing or modifying the tech stack.

This skill creates minimal guidance, conventions, and workflow anchors that help future agents work safely in a new project. It does not install packages, choose frameworks, configure app tooling, infer stack defaults, or adopt existing project conventions.

## Greenfield Preflight

Before creating files, inspect the repo state.

- If the repo is empty or contains only `.git/`, proceed.
- If the repo contains only starter administrative files such as `README.md`, `LICENSE`, or `.gitignore` and has no meaningful project shape, proceed carefully and preserve existing files.
- If the repo contains app code, package manifests, deployment or environment files, meaningful docs, existing conventions, or agent guidance, stop and route to `adopt-project`.
- If the repo state is ambiguous, ask before proceeding.

## Scaffold Principle

Create the project operating system, not premature project knowledge.

If a `project-intake` summary or other accepted external brief is available, use it to seed only durable, non-speculative project orientation:

- Project identity and audience.
- Current scope or current iteration.
- Accepted constraints and non-goals.
- Vocabulary candidates that are already useful enough for `LANGUAGE.md`.
- Upstream source provenance when it should remain discoverable.

Do not turn backlog, someday ideas, or unresolved assumptions into current scope.

Default creation:

```text
AGENTS.md
plans/
.gitignore
.editorconfig
README.md
```

Lazy creation:

- `LANGUAGE.md` when project vocabulary exists.
- `LANGUAGE-MAP.md` when multiple language files exist.
- Durable docs under `docs/` when there is actual system shape, upstream provenance, or accepted project knowledge to document.
- PR or issue templates when the project uses that review or tracking flow.
- `.dockerignore`, agent ignore files, or other ignore files when the matching tool exists or the user asks for them.

Keep generated placeholders short. The scaffold should invite useful documentation, not create empty bureaucracy.

## AGENTS.md Style

Use `AGENTS-TEMPLATE.md` when creating or revising `AGENTS.md`.

`AGENTS.md` must stay short because agents load it into context. Treat it as an index and routing layer, not a full policy document.

- Prefer 5-8 high-signal bullets.
- Link to deeper docs for details.
- Include only what an agent must know before choosing what to read next.
- Do not copy long environment, deployment, command, or review guidance into `AGENTS.md`; point to the relevant doc instead.

## README Shape

When creating or revising `README.md`, optimize it as the project front door for humans and agents. Prefer concise sections such as:

- Project identity.
- Audience or users.
- Current scope.
- Constraints and non-goals.
- Working agreement for how repo docs, external sources, and trackers relate.
- Repo map for durable artifact locations such as `docs/` and `plans/`.
- Tracking or upstream context pointers when they are part of the accepted workflow.

Do not document launch checklists, stack choices, issue workflows, or external provenance in the README unless they are already accepted project knowledge.

## Cursor Plan Bridge

When the user is using Cursor and wants Cursor plans stored in the canonical `plans/` directory, optionally create:

```text
.cursor/plans -> ../plans
```

Before creating the symlink:

1. Ensure `plans/` exists.
2. If `.cursor/plans` exists and contains unique files, ask before migrating them.
3. If `.cursor/plans` is empty, replace it with the symlink.

Windows portability is out of scope.

## File Intent

- `AGENTS.md`: repo-level operating instructions for future agents.
- `LANGUAGE.md`: bounded project vocabulary.
- `docs/`: durable project docs, including living docs, ADRs, and upstream provenance when needed.
- `plans/`: implementation plans.
- README workflow sections: how the project expects agents and humans to work.
- Review templates: collaboration and review workflow.
- Ignore files: keep generated files, secrets, dependencies, and tool noise out of version control.
- Environment and deployment notes: where the project runs, how envs are managed, and what agents must not touch.
