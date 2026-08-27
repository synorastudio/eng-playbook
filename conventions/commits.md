# Commit convention

Every commit that enters a Professional Project's integration history must follow Conventional Commits and describe one coherent change.

## Required format

```text
<type>[optional scope][!]: <description>

[optional body]

[optional footer(s)]
```

- `type` identifies the nature of the change. Use one of: `feat`, `fix`, `docs`, `refactor`, `test`, `build`, `ci`, `chore`, `perf`, `style`, or `revert`.
- `scope` is optional and names the affected area of the codebase. A slash may express a useful nested area, but no package hierarchy is required.
- `!` is required immediately before the colon for a breaking change. Explain the break and migration path in the body when they are not obvious from the description.
- `description` uses the imperative mood, starts lowercase, and has no trailing period.
- The body explains context, reasoning, or implications when the description is not sufficient.
- Footers record references and attribution, including `Co-authored-by` for agent-generated commits.

## Types

- `feat`: add or intentionally change user-visible or system-owner-visible behavior.
- `fix`: correct behavior that did not work as intended.
- `docs`: change documentation only.
- `refactor`: change internal code without intending to change behavior.
- `test`: add or correct tests without changing production behavior.
- `build`: change dependencies, packaging, or the build system.
- `ci`: change continuous integration or repository automation.
- `chore`: perform maintenance that fits no more specific type.
- `perf`: improve measured or expected performance without changing intended behavior.
- `style`: change formatting or other presentation that cannot affect behavior.
- `revert`: reverse an earlier commit.

Classify an improvement by its effect. Use `feat` for intentional behavior, `fix` for incorrect behavior, `perf` for performance, and `refactor` for internal structure.

Split a change when one commit would need more than one primary type. A commit body may list several related edits when they form one coherent change.

## Integration boundary

The required message is the commit that reaches the repository's normal integration history:

- A squash workflow validates the pull request title or final squash message.
- A merge or rebase workflow validates each commit that will enter the integration branch.

Local work-in-progress commits may use another form when the repository workflow guarantees that they will be rewritten before integration.

This convention adopts [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) with the type set, imperative description, and `!` breaking-change form defined above.

## Evidence

Evidence includes conforming integration history and the project-owned guidance, checks, or repository settings that preserve it.

## Guardrail examples

- A pull request title check for squash workflows.
- A commit-range check for merge or rebase workflows.
- Repository settings that constrain the allowed merge strategy.
- Agent Guidance that points to the project's commit check and integration workflow.

Apply the [Project guardrails convention](guardrails.md) when selecting controls or handling a deviation.
