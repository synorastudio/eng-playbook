---
name: write-language
description: Maintain scoped LANGUAGE.md files as bounded project vocabulary, preventing glossary bloat with local language files, promotion rules, and concise definitions. Use when defining product terms, clarifying ubiquitous language, renaming ambiguous concepts, or updating project vocabulary.
---

# Write Language

Use this skill to create and maintain `LANGUAGE.md` files. Follow `LANGUAGE-FORMAT.md`.

`LANGUAGE.md` is vocabulary only.

## Add A Term

Add a term only when it is:

- Project-specific.
- Likely to recur across agent or human conversations.
- Useful for preventing ambiguity, synonym drift, or wrong implementation choices.

Do not add general programming concepts, implementation details, plans, decisions, acceptance criteria, or open questions.

## Scope First

Start local unless the term crosses boundaries.

- Root `LANGUAGE.md`: terms shared across multiple project areas.
- Local `LANGUAGE.md`: feature, module, or bounded-area terms.
- `LANGUAGE-MAP.md`: navigation for multiple language files.

Promote a local term to root only when multiple areas need the same meaning.

## Definition Style

Use:

```md
**Term**:
One or two sentences defining what the term is.
_Avoid_: Ambiguous synonym, deprecated name
```

Be opinionated. Pick one canonical term and list aliases to avoid.

## Maintenance

When changing language:

1. Check existing `LANGUAGE.md` and `LANGUAGE-MAP.md`.
2. Update the smallest relevant language file.
3. Prune obsolete or overly generic terms.
4. Surface conflicts immediately when user language contradicts existing vocabulary.
5. Do not preserve old terms unless they matter for migration, user-facing copy, or external integrations.
