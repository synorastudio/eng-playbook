# AGENTS.md template

Keep `AGENTS.md` as short as possible. Agents load it into context, so use it as an index and routing layer, not a full policy document.

Prefer 5-8 high-signal bullets. Link to deeper docs for details.

```md
# Agent guidance

- Read `LANGUAGE.md` before naming or changing project concepts.
- Read `docs/architecture.md` before changing structure or cross-cutting behavior.
- Follow the project's documented guardrails and required checks. Do not weaken or bypass them without explicit approval.
- Add the agent as a co-author of agent-generated commits. Visibly attribute agent-authored pull request descriptions, reviews, comments, and tracker artifacts.
- Use [issue tracker] for feature issues; issues represent user-recognizable features, not technical tasks.
- Follow [workflow conventions] for commits, branches, PR templates, issue links, and review expectations.
- Do not touch production, secrets, migrations, auth, paid services, or broad refactors without asking.
- [Optional] In interactive work, assume the user manages local dev servers. Do not start long-running dev servers unless asked; in unattended work, clean them up before finishing.
- Commands and environment notes: see [README.md or docs path].

## Rules index

- [Rule name](docs/rule-doc.md): short description of the detailed agent guidance.
```

If no detailed rule docs exist, omit the Rules Index. If a detail needs more explanation, link to a focused doc instead of expanding `AGENTS.md`.
