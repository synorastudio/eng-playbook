---
name: init-agent-os
description: "Create a minimal, tech-agnostic Agent Operating System in a greenfield repo."
disable-model-invocation: true
---

# Initialize an Agent Operating System

Establish a greenfield repo's agent operating system without choosing or modifying the tech stack.

Create only the guidance and workflow anchors that future agents need before the project has meaningful structure. Package installation, framework choice, app tooling, and stack defaults belong to later work.

## Greenfield preflight

Before creating files, inspect the repo state.

- If the repo is empty or contains only `.git/`, proceed.
- If the repo contains only starter administrative files such as `README.md`, `LICENSE`, or `.gitignore` and has no meaningful project shape, proceed carefully and preserve existing files.
- If the repo contains app code, package manifests, deployment or environment files, meaningful docs, existing conventions, or agent guidance, stop and route to `adopt-project`.
- If the repo state is ambiguous, ask before proceeding.

## Initialization principle

Create the project operating system, not premature project knowledge.

If an `intake` summary or other accepted external brief is available, use it to seed only durable, non-speculative project orientation:

- Project identity and audience.
- Current scope or current iteration.
- Accepted constraints and non-goals.
- Vocabulary candidates that are already useful enough for `LANGUAGE.md`.
- Upstream source provenance when it should remain discoverable.

Do not turn backlog, someday ideas, or unresolved assumptions into current scope.

Default creation:

```text
AGENTS.md
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

Keep generated placeholders short. The initial files should invite useful documentation, not create empty bureaucracy.

## Store rules for any agent

Use `AGENTS.md` as the universal agent entry point, and store detailed agent rules as ordinary repo documentation.

- Add a short rules index to `AGENTS.md` when detailed guidance belongs elsewhere.
- Prefer focused docs under `docs/` for long-lived rules, such as `docs/agentic-workflow.md`.
- Use tool-specific rule directories only when the user explicitly asks for them or the repo already depends on them.
- Do not create `.cursor/rules/`, `.agents/rules/`, `CLAUDE.md`, or other tool-specific rule files as the default way to express shared guidance.

This keeps Codex, Cursor, and other agents aligned on the same source of truth.

## Keep AGENTS.md short

Use `AGENTS-TEMPLATE.md` when creating or revising `AGENTS.md`.

`AGENTS.md` must stay short because agents load it into context. Treat it as an index and routing layer, not a full policy document.

- Prefer 5-8 high-signal bullets.
- Link to deeper docs for details.
- Include only what an agent must know before choosing what to read next.
- Do not copy long environment, deployment, command, or review guidance into `AGENTS.md`; point to the relevant doc instead.

## Ask who owns local runtimes

When creating `AGENTS.md`, ask whether agents should avoid starting long-running local dev servers during interactive work.

If the user wants that rule, add a short Agent Guidance bullet such as:

```md
- In interactive work, assume the user manages local dev servers. Do not start long-running dev servers unless asked; in unattended work, clean them up before finishing.
```

If the user does not want the rule, omit it. Do not add stack-specific commands or server details.

## Ask about workflow conventions

When creating `AGENTS.md`, ask whether agents should follow any repo-specific workflow conventions.

Prompt broadly enough to surface hidden working agreements without prescribing a preference:

```text
Are there repo-specific workflow conventions agents should follow, such as commit message format, branch naming, PR template use, issue links, or review expectations?
```

If the answer is compact, add one short Agent Guidance bullet such as:

```md
- Follow the repo's workflow conventions for commits, branches, PR templates, issue links, and review expectations.
```

If the answer needs detail, document it in the README, a PR template, contribution guidance, or another focused workflow doc under `docs/`, then link to it from the `AGENTS.md` rules index.

If the user does not provide workflow conventions, omit the rule. Do not inject personal preferences, Conventional Commits, branch naming schemes, PR templates, issue tracker assumptions, or review flow defaults unless the user explicitly chooses them.

## Shape the README

When creating or revising `README.md`, optimize it as the project front door for humans and agents. Prefer concise sections such as:

- Project identity.
- Audience or users.
- Current scope.
- Constraints and non-goals.
- Working agreement for how repo docs, external sources, and trackers relate.
- Repo map for durable artifact locations such as `docs/`.
- Tracking or upstream context pointers when they are part of the accepted workflow.

Do not document launch checklists, stack choices, issue workflows, or external provenance in the README unless they are already accepted project knowledge.

## Artifact ownership

- `AGENTS.md`: repo-level operating instructions for future agents.
- `LANGUAGE.md`: bounded project vocabulary.
- `docs/`: durable project docs, including living docs, ADRs, and upstream provenance when needed.
- Rules index: a short `AGENTS.md` section that points to detailed agent rule docs.
- README workflow sections: how the project expects agents and humans to work.
- Review templates: collaboration and review workflow.
- Ignore files: keep generated files, secrets, dependencies, and tool noise out of version control.
- Environment and deployment notes: where the project runs, how envs are managed, and what agents must not touch.

## Completion check

Before finishing, verify that:

- The repo still has no meaningful project structure that should have routed the work to `adopt-project`.
- Every created file has current content or a concrete reason to exist. No empty placeholder sections remain.
- `AGENTS.md` points to detailed guidance instead of copying it.
- The Agent Operating System contains no unchosen stack, tracker, branch, commit, review, or deployment defaults.
- Existing administrative files retain their useful content.

Report the files created or changed, the user choices encoded, and the lazy artifacts left for later.
