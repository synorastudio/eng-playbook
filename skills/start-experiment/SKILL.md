---
name: start-experiment
description: Build or continue a disposable personal software experiment through outcome-first, fully vibe-coded implementation with minimal process. Use when the user identifies work as a personal experiment, disposable project, quick vibe-coded build, or a small project for themselves, friends, or family where they explicitly do not want professional engineering ceremony.
---

# Start Experiment

Build the requested outcome quickly. Treat the implementation as disposable and delegate engineering choices to the agent.

## Confirm The Mode

Use this workflow only when the user identifies the project as a personal experiment or clearly asks for disposable, vibe-coded work. Project size, commercial potential, and ownership do not determine the mode.

If intent is ambiguous, ask whether the user wants a personal experiment or a professional project. Do not silently downgrade professional work into an experiment.

## Build For The Outcome

- Start from the user's desired outcome and implement immediately.
- Make reasonable product, stack, architecture, and implementation choices without design ceremony.
- Prefer the shortest path to a working result over maintainability, extensibility, abstraction, or polish beneath the requested surface.
- Ask only when missing information blocks the outcome or a choice carries meaningful cost, safety, privacy, or external-system consequences.
- Verify the user-visible behavior in proportion to the experiment. Do not introduce a professional test strategy unless requested.

## Keep Process Minimal

Use `TODO.md` as the only repo-level build-status tracker.

- Create it when absent.
- Track user-visible outcomes, not engineering tasks.
- Mark completed outcomes and keep unfinished or partially working outcomes accurate.
- Keep it short enough to reveal the experiment's current state at a glance.

Do not create plans, issues, ADRs, architecture docs, `LANGUAGE.md`, an Agent Operating System, or other standard project documentation unless the user explicitly asks for a specific artifact.

Create a short `README.md` that explains what the experiment does and how to run it. Keep build status in `TODO.md`, not the README.

## Keep Essential Guardrails

Disposable code does not remove responsibility for secrets, personal data, destructive operations, paid services, deployment, or people who rely on the experiment. Ask before consequential external actions and surface support or safety risks plainly.

Do not add professional ceremony merely because the experiment has users or needs a small maintenance fix.
