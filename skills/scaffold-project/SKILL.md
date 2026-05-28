---
name: scaffold-project
description: "Create or adopt a tech-agnostic agent operating system for a repo: agent guidance, planning anchors, review templates, ignore files, environment/deployment notes, and safety rules. Use when starting a new project repo or adding agent workflow guidance to an existing repo."
---

# Scaffold Project

Establish the repo's agent operating system without choosing or modifying the tech stack.

This skill creates and adopts guidance, conventions, and workflow anchors that help future agents work safely. It does not install packages, choose frameworks, configure app tooling, or infer stack defaults.

Support two modes:

- **New project mode**: create minimal workflow anchors and placeholders for decisions the user has not made yet.
- **Adopt existing project mode**: audit first, add only missing pieces, preserve conventions, and never overwrite without asking.

## Scaffold Principle

Create the project operating system, not premature project knowledge.

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
- `docs/architecture.md` when there is actual system shape to document.
- `docs/adr/` when the first ADR is needed.
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

## Audit Categories

In existing projects, discover and document the project's actual operating environment. Do not introduce preferred tooling just because it is absent.

Audit:

- Agent guidance: `AGENTS.md`, `CLAUDE.md`, Cursor rules, commands, and repo-specific agent instructions.
- Planning: `plans/`, existing implementation plans, and Cursor plan storage.
- Docs anchors: README workflow sections, `LANGUAGE.md`, `LANGUAGE-MAP.md`, `docs/architecture.md`, and `docs/adr/`.
- Review workflow: PR templates, issue templates, contribution docs, and review instructions.
- Ignore files: `.gitignore`, `.dockerignore`, Cursor/Claude/agent ignores, and other tool-specific ignore files that already apply.
- Environment guidance: Doppler, `.env`, secrets managers, `.env.example`, local/staging/production envs, and how agents should handle secrets.
- Runtime and deployment guidance: where the project runs, where it deploys, how to start it locally, and how agents avoid touching production.
- Command registry: where common commands are documented and how agents should discover them without inventing stack-specific commands.
- Safety rules: data, auth, secrets, deployment, migrations, paid services, and destructive operations.

## Classify Findings

After auditing, classify findings:

- **Keep**: already matches the desired workflow.
- **Adopt**: existing convention should become the project default.
- **Add**: missing workflow anchor that is safe to create.
- **Ask**: conflict, ambiguity, or multiple valid choices.
- **Defer**: stack-specific setup outside this skill's scope.

Never assume absence means "create my preferred thing." First infer the project's current defaults.

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

## Adopt Existing Project Mode

- Preserve existing conventions unless they conflict with the desired operating model.
- Ask before renaming `CONTEXT.md` to `LANGUAGE.md` or introducing both.
- Merge README workflow sections instead of replacing the README.
- Create `docs/architecture.md` only if no equivalent architecture overview exists.
- Add environment or deployment guidance by documenting what the project already uses; do not choose Doppler, `.env`, a host, or a secrets strategy unless the user decides.
- Add command guidance by pointing to existing scripts/docs; do not invent stack-specific commands.
- Report what was added, skipped, and what still needs a decision.

## File Intent

- `AGENTS.md`: repo-level operating instructions for future agents.
- `LANGUAGE.md`: bounded project vocabulary.
- `docs/architecture.md`: current system shape and navigation.
- `docs/adr/`: durable decisions.
- `plans/`: implementation plans.
- README workflow sections: how the project expects agents and humans to work.
- Review templates: collaboration and review workflow.
- Ignore files: keep generated files, secrets, dependencies, and tool noise out of version control.
- Environment and deployment notes: where the project runs, how envs are managed, and what agents must not touch.
