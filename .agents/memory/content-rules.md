---
name: Content & typography rules
description: Standing rules for dash usage and copy style on the HubForge site
---

## Em dash (—) — AVOID in visible content
Do NOT use em dashes in visible body copy/prose. The user dislikes them in content and flags them on sight. Reword instead:
- comma for a parenthetical break: "accessible to everyone, not just the well-resourced"
- period to split: "plan, measure, and learn. No budget required."
- colon for a label/definition: "MELSA: conversational MEL AI for logframes"
- "so"/"and" to join clauses: "Knowledge is collective power, so we share it freely."

**Why:** User explicitly objected to em dashes appearing throughout the site copy (they read as an AI tell). This supersedes the earlier rule that allowed em dashes for parenthetical breaks.
**How to apply:** Before finishing any content edit, `grep -rn "—" --include="*.html" docs | grep -v css` and reword every hit in visible text.

## En dash (–) — use for ranges
Use `–` (or `&ndash;`) for numeric/alphabetical ranges.
- ✅ "8–12 weeks", "A–Z sampling companion"
- ❌ "8-12 weeks", "A-Z"

## Never use double/spaced hyphen
- ❌ "--" or " - " as a sentence break.

## No inflated or unverified statistics in copy
Never claim numbers the site can't back up. EvalAtlas had a stale "10,000+ professionals" line while live counters showed only a few hundred members; it was removed. State counts only when they match the real (often counter-driven) data, otherwise describe the offering qualitatively.
**Why:** Inflated stats hurt credibility and AI-search (GEO) trust; AI engines deprioritize sources that contradict observable facts.

## SEO/GEO keyword focus: "MEL"
Primary keyword family is MEL (Monitoring, Evaluation and Learning), alongside M&E and MERL. Titles, descriptions, and FAQ schema target MEL-intent queries. Homepage carries FAQPage + WebSite + NGO JSON-LD; keep visible FAQ text and FAQPage schema in sync (Google requires them to match).
