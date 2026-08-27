# Playbook review

Review this repository for semantic correctness and cross-file consistency.

Treat `conventions/` as authoritative. Workflows must apply those conventions without creating a mandatory pipeline. Skills are portable companion procedures: they must remain self-contained and must not require this repository at runtime.

Report concrete cases where a change:

- Contradicts an Engineering Convention across workflows, diagrams, Skills, or root documentation.
- Allows a draft Spec, unresolved decision, or otherwise unaccepted slice to reach production implementation.
- Makes a conditional planning artifact mandatory without changing the applicable convention.
- Changes a convention or workflow without reviewing and updating affected Skills.
- Invents organizational roles, approval chains, or team processes for this solo engineering practice.
- Makes a Skill agent-specific without an explicit reason.
- Documents a command, check, repository structure, or external control that does not exist or no longer matches reality.
- Defines a commit format, type, scope, or breaking-change form that conflicts with `conventions/commits.md`.
- Leaves agent-generated work without attribution at its durable boundary: commit metadata for repository changes or visible attribution for agent-authored collaboration artifacts.

Verify tooling findings against repository configuration, scripts, and checks. Do not infer a failure from isolated Markdown syntax; an unannotated triple-backtick fence may be a valid closing fence.

Do not report prose preferences, line length, or formatting already owned by the configured Markdown lint unless they cause incorrect behavior or contradict repository policy.
