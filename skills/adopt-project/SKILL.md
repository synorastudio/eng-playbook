---
name: adopt-project
description: "Adopt a tech-agnostic agent operating system into an existing repo through audit, proposal, user guidance, and approved changes."
---

# Adopt Project

Add or align an Agent Operating System in an existing repo without overwriting the project's real conventions.

This skill audits first, proposes changes second, and writes only after the user approves the proposal or provides revised guidance. It does not install packages, choose frameworks, configure app tooling, or infer stack defaults.

## Adoption Principle

Adopt the project's operating reality, not a preferred scaffold.

Project Adoption is a heuristic workflow between Agent Operating System adoption and thin docs adoption. Create or update durable docs only when future agents need them to operate safely.

## Audit Categories

Discover the project's actual operating environment. Do not introduce preferred tooling just because it is absent.

Audit:

- Agent guidance: `AGENTS.md`, `CLAUDE.md`, Cursor rules, commands, and repo-specific agent instructions.
- Planning: `plans/`, existing implementation plans, and Cursor plan storage.
- Docs anchors: README workflow sections, `LANGUAGE.md`, `LANGUAGE-MAP.md`, `docs/architecture.md`, and `docs/adr/`.
- Workflow conventions: commit message format, branch naming, PR template use, issue links, contribution docs, and review instructions.
- Rule storage: whether detailed agent rules live in ordinary docs, tool-specific rule directories, or duplicated sources.
- Ignore files: `.gitignore`, `.dockerignore`, Cursor/Claude/agent ignores, and other tool-specific ignore files that already apply.
- Environment guidance: Doppler, `.env`, secrets managers, `.env.example`, local/staging/production envs, and how agents should handle secrets.
- Runtime and deployment guidance: where the project runs, where it deploys, how to start it locally, and how agents avoid touching production.
- Local runtime ownership: whether agents may start long-running local dev servers during interactive work, or should assume the user manages them.
- Command registry: where common commands are documented and how agents should discover them without inventing stack-specific commands.
- Safety rules: data, auth, secrets, deployment, migrations, paid services, and destructive operations.

## Classify Findings

After auditing, classify findings:

- **Keep**: already matches the desired workflow.
- **Adopt**: existing convention should become the project default.
- **Add**: missing workflow anchor that is safe to create.
- **Ask**: conflict, ambiguity, hidden project knowledge, or multiple valid choices.
- **Defer**: stack-specific setup outside this skill's scope.

Never assume absence means "create my preferred thing." First infer the project's current defaults.

## Adoption Proposal

Before writing to the repo, present a concise adoption proposal.

Include:

- What the audit found.
- What existing conventions should be preserved.
- What files or docs should be added or updated.
- What should be skipped or deferred.
- Whether to add a local dev server ownership rule to `AGENTS.md`, if no project convention already answers it.
- Whether to add workflow convention guidance to `AGENTS.md` or a focused workflow doc, if no project convention already answers it.
- Whether to consolidate detailed agent rules into ordinary docs and point to them from an `AGENTS.md` rules index.
- What assumptions need user confirmation.
- What hidden project knowledge would change the proposal.

Wait for the user to approve, reject, or revise the proposal. Apply only approved changes and address the user's additional knowledge or requests.

## Artifact Scope

Adoption may create or update the same artifact universe as greenfield scaffolding, but only through the audit and proposal flow.

- `AGENTS.md`: repo-level operating instructions for future agents.
- `LANGUAGE.md`: bounded project vocabulary.
- `LANGUAGE-MAP.md`: routing for multiple language contexts.
- `docs/architecture.md`: current system shape and navigation.
- `docs/adr/`: durable decisions.
- `plans/`: implementation plans.
- Rules index: a short `AGENTS.md` section that points to detailed agent rule docs.
- README workflow sections: how the project expects agents and humans to work.
- Review templates and contribution docs: collaboration, commit, branch, issue-linking, and review workflow.
- Ignore files: keep generated files, secrets, dependencies, and tool noise out of version control.
- Environment and deployment notes: where the project runs, how envs are managed, and what agents must not touch.

Keep generated or revised docs short. Adoption should make the repo safer for future agents, not create empty bureaucracy.

## Handoff to Specialist Skills

Route deeper durable knowledge work to the owning skill instead of expanding this skill's scope.

- Use `write-language` for substantial vocabulary work, multiple local language contexts, or unclear naming.
- Use `write-adr` when a decision is hard to reverse, surprising without context, and based on a real trade-off.
- Use `maintain-living-docs` when architecture, onboarding, operations, or project-specific guidance needs more than a thin adoption note.

## AGENTS.md Style

Use `../scaffold-project/AGENTS-TEMPLATE.md` when creating or revising `AGENTS.md`.

`AGENTS.md` must stay short because agents load it into context. Treat it as an index and routing layer, not a full policy document.

- Prefer 5-8 high-signal bullets.
- Link to deeper docs for details.
- Include only what an agent must know before choosing what to read next.
- Do not copy long environment, deployment, command, or review guidance into `AGENTS.md`; point to the relevant doc instead.

## Tool-Agnostic Rule Storage

Prefer `AGENTS.md` as the universal agent entry point, with detailed agent rules stored as ordinary repo documentation.

- Add or preserve a short rules index in `AGENTS.md` when detailed guidance lives elsewhere.
- Prefer focused docs under `docs/` for long-lived rules, such as `docs/agentic-workflow.md`.
- Preserve existing tool-specific rule files when they are part of the project's real workflow, but do not create or expand them by default.
- If the repo has duplicated or conflicting guidance across `AGENTS.md`, Cursor rules, Claude files, `.agents/rules/`, or docs, include the consolidation choice in the adoption proposal and ask before changing it.

Use tool-specific rule directories only when the user explicitly asks for them or the repo already depends on them. Shared guidance should have one project-owned source of truth that Codex, Cursor, and other agents can follow.

## Runtime Ownership Prompt

If the audit does not reveal a project convention for interactive local dev servers, ask whether agents should avoid starting long-running local dev servers during interactive work.

If the user wants that rule, add a short Agent Guidance bullet such as:

```md
- In interactive work, assume the user manages local dev servers. Do not start long-running dev servers unless asked; in unattended work, clean them up before finishing.
```

If the user does not want the rule, omit it. Preserve any existing project-specific runtime convention instead of replacing it.

## Workflow Conventions Prompt

If the audit does not reveal project conventions for commits, branches, PR templates, issue links, contribution flow, or review expectations, ask whether agents should follow any.

Prompt broadly enough to surface hidden working agreements without prescribing a preference:

```text
Are there repo-specific workflow conventions agents should follow, such as commit message format, branch naming, PR template use, issue links, or review expectations?
```

If existing conventions are found, preserve them and link to their source from `AGENTS.md` only when future agents need the pointer. If conventions conflict, are incomplete, or appear tool-specific rather than project-specific, include the ambiguity in the adoption proposal and ask before changing anything.

If the answer is compact, add one short Agent Guidance bullet. If it needs detail, document it in the README, a PR template, contribution guidance, or another focused workflow doc under `docs/`, then link to it from the `AGENTS.md` rules index.

If the user does not provide workflow conventions, omit the rule. Do not inject personal preferences, Conventional Commits, branch naming schemes, PR templates, issue tracker assumptions, or review flow defaults unless the user explicitly chooses them.

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

## Completion Report

Report:

- What was added or updated.
- What was skipped.
- What was deferred to another skill or future session.
- What user guidance changed from the original proposal.
- What still needs a decision.

If `adopt-project` and `scaffold-project` keep converging, consider extracting more shared Agent Operating System support files later.
