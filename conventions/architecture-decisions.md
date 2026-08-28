# Architecture decisions convention

Architecture must make invalid system shapes difficult to create, and durable trade-off decisions must remain understandable after their original conversation is gone.

## Required outcomes

- System boundaries, ownership, and important flows are discoverable from the code and `docs/architecture.md`.
- Architecture is enforced as close as practical to the structure it protects. Explanatory guidance is not the only control when a mechanical boundary is possible.
- A decision receives an ADR only when it is hard to reverse, surprising without context, and based on a real trade-off. All three conditions must hold.
- ADRs state the chosen trade-off and its context without becoming implementation plans or duplicating the architecture overview.
- Changes that invalidate current architecture documentation or an existing decision update the affected artifacts in the same coherent body of work.
- Hard-to-reverse architecture decisions are resolved explicitly before implementation depends on them.

## Evidence

Evidence may include module boundaries, dependency direction, data ownership, automated architecture checks, the current architecture overview, and qualifying ADRs. The strength of the evidence should match the consequence of violating the boundary.

## Guardrail examples

- Data structures or APIs that make invalid states unrepresentable.
- Package, module, or deployment boundaries that constrain dependency direction.
- Automated checks for forbidden imports, schema rules, or ownership boundaries.
- A focused ADR for a qualifying trade-off.
- Concise Agent Guidance where architectural judgment cannot be encoded mechanically.

Apply the [Project guardrails convention](guardrails.md) when selecting controls or handling a deviation.
