# Language

Vocabulary for SynoraStudio's engineering playbook. These terms describe how the Tech practice plans, builds, documents, and hands off work across owned products and client projects.

## Terms

**Engineering Playbook**:
SynoraStudio's shared Engineering Conventions, Workflows, and companion Skills for Professional Projects.
_Avoid_: Skills library, personal skills repo

**Engineering Convention**:
An authoritative rule for how SynoraStudio structures, plans, documents, or delivers Professional Projects. Projects adopt the convention baseline and record deviations explicitly.
_Avoid_: Skill, recommendation, preference

**Workflow**:
An agent-independent route through a recurring kind of work. It applies Engineering Conventions and may be supported by Skills.
_Avoid_: Skill, checklist, mandatory pipeline

**Project Guardrail**:
A project-owned control that prevents or detects a violation of an Engineering Convention. It may live in architecture, code, automated checks, repository settings, tracker controls, agent guidance, or review.
_Avoid_: Skill requirement, recommendation

**Professional Project**:
A client project or owned product built with intentional, AI-accelerated engineering, regardless of its size or market potential.
_Avoid_: Serious project, production project

**Skill**:
A portable, self-contained Markdown operating procedure that helps an agent apply one focused part of the Engineering Playbook. It supports the authoritative Engineering Conventions and Workflows without requiring runtime access to them.
_Avoid_: Prompt, script, automation

**Agent Operating System**:
The repository-owned guidance, artifacts, and Project Guardrails that help future agents work safely and consistently in a project.
_Avoid_: Project scaffold, tech stack, tooling setup

**Agent Guidance**:
Durable instructions that tell agents how to operate in a repo, including safety rules, issue tracker choices, environment notes, and command discovery.
_Avoid_: Documentation, preferences, config

**Project Adoption**:
The Workflow for auditing an existing repository against the current Engineering Conventions, then adding or aligning its Agent Operating System through approved changes. Running it again is how an existing project explicitly adopts later convention changes.
_Avoid_: Scaffolding, documentation pass, repo setup

**External Project Brief**:
Project context created outside the coding agent, such as Notion notes, pasted planning docs, user flows, screen ideas, or links.
_Avoid_: Requirements, PRD, context dump

**Grilling Session**:
A design-tree interview that stress-tests a concrete plan or design before implementation.
_Avoid_: Planning session, review, brainstorming

**Design Tree**:
The set of dependent decisions inside a plan or design, walked from broad choices to downstream details.
_Avoid_: Checklist, questionnaire, decision matrix

**Decision Map**:
A conditional tracker artifact that organizes the unresolved decisions inside a body of work. It runs in two modes: discovering Milestone boundaries when the shape is unclear (producing one Milestone or a sequence), or decomposing an accepted Milestone into a tracked decision tree.
_Avoid_: Spec, roadmap, backlog

**Decision Issue**:
A child of a Decision Map that owns one unresolved question requiring a separate Grilling Session, research effort, prototype, or owner.
_Avoid_: Feature Issue, implementation task, technical ticket

**Milestone**:
A bounded outcome that can be accepted, sequenced, and declared complete. An accepted Spec represents the Milestone when a Spec is useful.
_Avoid_: Sprint, project phase, release

**Language**:
The project-specific vocabulary that agents and humans must use consistently.
_Avoid_: Context, glossary, domain model

**ADR**:
A short architecture decision record for a hard-to-reverse, surprising trade-off decision.
_Avoid_: Design doc, plan, decision log

**Spec**:
A conditional issue-tracker artifact that captures settled product scope, design decisions, boundaries, and acceptance criteria for product review and multi-session agent continuity. It remains a draft until accepted and does not live in the repo.
_Avoid_: PRD, implementation plan, living doc

**Living Doc**:
A durable explanatory document that describes current system shape, operations, onboarding, or project-specific guidance.
_Avoid_: Scratchpad, spec, glossary

**Feature Issue**:
An issue that represents a user-recognizable feature or system-owner-visible capability, cut as a vertical slice through the stack that can be verified on its own. It names an outcome, not a technical task, and is not a horizontal layer.
_Avoid_: Task, ticket, implementation step, horizontal layer

**Sub-Issue**:
A smaller vertical slice nested under a larger Feature Issue when the parent is too big to verify or sequence as one slice. It is itself a vertical slice, not an implementation step.
_Avoid_: Subtask, checklist item, implementation step

**Work Unit**:
An independent, buildable piece of finalized scope, sliced from an accepted Spec, Feature Issue, or Milestone. An agent implements a Work Unit only after the user releases it: an explicit conversational go-ahead, or a tracker-marked acceptance when continuity across sessions matters. Accepting the planning scope is not the same act as releasing a Work Unit to build.
_Avoid_: Slice, task, ticket, sprint item

**Prototype**:
Throwaway code that answers one logic/state or UI-variant question before committing to a production implementation.
_Avoid_: Spike, proof of concept, draft implementation

**Handoff**:
A compact session summary that lets a future agent continue work without rereading the full conversation.
_Avoid_: Summary, transcript, status update
