---
name: split-adopt-project
overview: Split existing-project adoption out of `scaffold-project` into a new `adopt-project` skill, keeping the first implementation focused on workflow boundaries and a basic audit proposal gate.
todos:
  - id: rewrite-scaffold
    content: Rewrite `skills/scaffold-project/SKILL.md` as greenfield-only with early-exit preflight.
    status: completed
  - id: add-adopt-skill
    content: Create fresh `skills/adopt-project/SKILL.md` with audit, proposal, approval, and handoff rules.
    status: completed
  - id: update-docs
    content: Update `LANGUAGE.md`, `docs/architecture.md`, and `README.md` to reflect the split.
    status: completed
  - id: verify-markdown
    content: Run available lints on edited Markdown files and fix introduced issues.
    status: completed
isProject: false
---

# Split Adopt Project Skill

## Scope

Split `scaffold-project` into two clearer workflows:

- `scaffold-project`: greenfield-only Agent Operating System creation, with a preflight that exits early when the repo is not truly greenfield.
- `adopt-project`: Project Adoption for existing repos, using audit, classification, proposal, user input, and approved changes.

## Planned Changes

- Update `[skills/scaffold-project/SKILL.md](skills/scaffold-project/SKILL.md)`:
  - Narrow frontmatter description to greenfield repos.
  - Remove adopt-existing-project mode and audit-heavy sections.
  - Add a greenfield preflight with the agreed edge cases:
    - empty repo or only `.git/`: proceed;
    - README/license/gitignore with no project shape: proceed carefully and preserve files;
    - app code, package manifests, deployment/env files, meaningful docs, existing conventions, or agent guidance: stop and route to `adopt-project`;
    - ambiguous repo: ask.
  - Keep greenfield default/lazy artifact guidance and `AGENTS.md` style rules.

- Add `[skills/adopt-project/SKILL.md](skills/adopt-project/SKILL.md)` as a fresh skill:
  - Define Project Adoption as adding or aligning an Agent Operating System in an existing repo.
  - Audit existing conventions without introducing preferred tooling.
  - Classify findings as `Keep`, `Adopt`, `Add`, `Ask`, and `Defer`.
  - Present a concise adoption proposal before writes.
  - Apply only approved changes and address the user's additional knowledge or requests.
  - Permit the same artifact universe as scaffold, but under audit/proposal approval.
  - Route deeper durable-doc work to `write-language`, `write-adr`, and `maintain-living-docs` from inside the skill body.
  - Include a CTA-style note that common support can be extracted later if the two workflows keep converging.

- Update `[LANGUAGE.md](LANGUAGE.md)`:
  - Add `Project Adoption` using the agreed definition and avoid terms.

- Update `[docs/architecture.md](docs/architecture.md)`:
  - Change `scaffold-project` from “creates or adopts” to greenfield creation.
  - Add `adopt-project` as the existing-repo adoption workflow.

- Update `[README.md](README.md)`:
  - Keep `First-Wave Skills` as the section name.
  - Add `adopt-project` immediately after `scaffold-project`.
  - Narrow `scaffold-project` wording to greenfield creation.
  - Add `skills/adopt-project/` to the repo layout.

## Verification

- Check edited Markdown files with available lints.
- Review the final wording for consistency with `AGENTS.md`, `LANGUAGE.md`, and `docs/architecture.md` boundaries.