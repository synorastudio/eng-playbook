---
title: Commit Semantics
model: gpt-5-6-luna
reasoning: medium
input: full_diff
tools:
  - browse_code
  - git_tools
  - github_api_read_only
targets:
  - only_default_branch
conclusion: neutral
requires:
  - pull-request-title
---

## Commit semantics review

Decide whether the pull request title truthfully describes the change that will
enter integration history after a squash merge.

Use this Commit Convention as the source of truth:

@/conventions/commits.md

### Review

Read the pull request title, description, and full net diff. Browse affected
files or history only when the diff does not provide enough evidence.

Treat the title's type, optional scope, breaking-change marker, and description
as claims about the primary effect of the pull request. Report a finding only
when evidence in the change materially contradicts one of those claims:

- The type misclassifies the primary effect under the Commit Convention.
- The scope points to the wrong affected area or hides a broader primary effect.
- The change breaks an existing contract, supported workflow, or compatibility
  boundary without `!`, or uses `!` without a breaking change.
- The description misstates or omits the primary effect enough to make the
  integration history misleading.
- The pull request contains unrelated primary changes that cannot truthfully be
  described as one coherent commit.
- The description is clearly not imperative.

Judge the primary outcome, not every supporting edit. Tests, documentation,
automation, and maintenance needed to deliver one outcome may coexist under its
primary type.

The `pull-request-title` check owns deterministic syntax. Do not repeat its
format, allowed-type, capitalization, punctuation, or parser findings. When the
evidence supports more than one reasonable classification, report no finding.
Honor an applicable deviation recorded as approved in the pull request.

### Enforcement

This check is intentionally advisory while its semantic judgments are evaluated
against real pull requests. Keep `conclusion: neutral` until an explicitly
approved change promotes it after reviewing observed false positives, missed
mismatches, and useful findings.

Promotion to a blocking guardrail requires all three changes together:

- Set `conclusion: failure`.
- Set `requiredStatusCheck: true`.
- Add `Macroscope - Commit Semantics` to the `Protect main` ruleset.

Until then, findings inform review but do not decide mergeability.

### Output

For each finding, quote the disputed title fragment, cite concrete evidence
from the change, explain the mismatch in one short paragraph, and suggest one
corrected title. If the pull request needs to be split, say so instead of
inventing a title that hides unrelated work.

Report no findings when the title is a reasonable and truthful classification.
Do not modify the pull request.
