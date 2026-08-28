# Feature planning workflow

Feature Planning turns proposed work into one or more accepted, bounded outcomes. It is a routing Workflow, not a mandatory document pipeline.

## Route by current state

```mermaid
flowchart TD
    proposed[Proposed work] --> clear{Are the outcome and main boundaries clear?}
    clear -->|No| decisions[Map blocking decisions]
    decisions --> resolve[Resolve through discussion, research, or prototypes]
    resolve --> milestones[Identify one or more bounded Milestones]
    clear -->|Yes| milestones
    milestones --> accepted{Is the Milestone accepted?}
    accepted -->|No| review[Review and accept or revise it]
    review --> accepted
    accepted -->|Yes| needs{What continuity does delivery need?}
    needs -->|Product review or cross-session context| spec[Preserve accepted scope in a Spec]
    needs -->|Separate outcomes benefit from tracking| issues[Create Feature Issues]
    needs -->|Neither| slice[Use the accepted slice directly]
    spec --> specAccepted{Is the Spec accepted?}
    specAccepted -->|No| specReview[Review and accept or revise it]
    specReview --> specAccepted
    specAccepted -->|Yes, tracking helps| issues
    specAccepted -->|Yes, otherwise| slice
    issues --> slice
    slice --> implementation[Implementation]
```

## Planning rules

- A Decision Map organizes uncertainty only when dependent decisions or Milestone boundaries are unclear.
- A Decision Issue owns one substantial unresolved question when it needs separate discussion, research, or a Prototype.
- A Grilling Session resolves branches in a concrete design; it does not replace broad intake or implementation.
- A Prototype is throwaway code that answers one design question before production commitment.
- A Spec preserves already-settled scope when product review or cross-session continuity warrants it. It remains a draft until accepted.
- Feature Issues represent user-recognizable or system-owner-visible outcomes, not technical implementation tasks.
- Optional artifacts are omitted when they solve no visible problem.
- Hard-to-reverse architecture choices follow the [Architecture decisions convention](../conventions/architecture-decisions.md).

## Completion

Planning is complete for a slice when its observable outcome and material boundaries are accepted, blocking decisions are resolved or excluded, and any needed continuity artifact exists. The result enters the [Implementation Workflow](implementation.md).

Companion Skills support individual routes: `map-decisions`, `grill`, `prototype`, `write-spec`, and `write-issues`.
