---
name: Device-friendly rules
description: Standing responsiveness requirements for all HubForge pages
---

## Breakpoints required
- **960px** — tablet: single-column grids, 2-col footer nav
- **600px** — mobile: reduced padding, single-col layouts, full-width CTAs
- **380px** — very small: further font-size reduction, single-col footer

## Hard rules
- Never use inline `style="grid-template-columns: ..."` — use a CSS class so media queries can override
- Touch targets must be ≥44px (buttons, nav links, cards)
- Hero title uses `clamp()` so it never overflows on small screens
- `.hero-pills` hides on mobile (≤600px)
- Tool footer: stacks vertically on mobile, CTA button goes full-width

**Why:** User flagged "all device friendly" as a standing rule. Apply to every new section added.

**How to apply:** After any layout change, mentally check: does this grid/flex work at 375px? Is every interactive element touch-friendly?
