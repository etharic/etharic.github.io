---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief: etharic.com homepage (hero route "")

Scope: the homepage only (route `""` in index.html). Mode: Persuade. Build path: code-led.

Audience: four equal audiences (anyone, recruiters, finance professionals, engineers). Must keep (owner's choice, restored 2026-11-25): the original hero layout: "hey, i'm suryanarayan!" with the faded reveal, the four audience tabs, the intro paragraph, "more about me", location/clock/dog bottom-left, "get cv" bottom-right; 3D particle field (matte dots plus chrome beads) behind the greeting; intro terms in JetBrains Mono. Must avoid: corporate, slow or heavy, generic AI look, staged 3D objects.

History: maquette, porcelain cube, slat sign, split-flap board were all built and removed at the owner's request; the owner restored the original paragraph hero with 3D particles (commit 24374c8).

## Direction contract

THESIS: The owner's own hero: a personal greeting that speaks differently to four audiences, set in a calm field of drifting 3D particles with a few chrome beads. The page's job is to lead each audience from that greeting to the writing picked for them.

OWN-WORLD: The site's paper and graphite palette (DESIGN.md), Inter for reading, JetBrains Mono for the code-like intro terms, one warm accent for "get cv", matte dots in the page's grey and chrome beads (white in dark, gunmetal on paper). No staged objects, no glass, no glow.

STORY: Name, then choose your audience, then read the intro written for you, then one of: more about me, get cv, or the cue to the essays picked for you; after the essays, a closing row (all essays, get cv, say hi).

FIRST VIEWPORT: Left-aligned hero column: greeting, tab bar, intro, "more about me"; bottom row on the 24px gutter: location/clock/dog left, "picked for <audience> ↓" cue centred, "get cv" right. Phones: same order, one bottom row (location left, get cv right) with the cue centred above it.

FORM: user-directed restoration of the owner's original hero; no roll (seed: none, owner's own design).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Design review decisions (plan-design-review, 2026-11-25, live homepage at 8ebe7ff)

1. Route to picks: a quiet "picked for <audience> ↓" cue centred on the bottom row of the first screen; it follows the selected tab and scrolls to the picks.
2. Page end: a closing row under the cards: "all essays → · get cv · say hi" (work, cv.pdf, contact).
3. Tabs: hover previews (label darkens, intro text previews); click commits (bold plus a small underline on the selected tab) and also updates the picks and the cue, so everything below always matches the selected tab.
4. Particles: thinned behind the intro paragraph; chrome beads keep to the edges and gaps; the field still surrounds the greeting.
5. Mono terms: unlinked code terms (a.coffee, this.model, this.deck, this.pitch) take the soft grey; linked ones stay ink with the underline.
6. Spacing: every window-edge element on the 24px gutter (get cv moves from 30px to 24px); vertical gaps on DESIGN.md's spacing steps (24, 30, 64px).
7. Labels: the picks heading and cue use the tab's exact label ("picked for finance professionals"); one source for names.
8. Phones: one bottom row (location left, get cv right) with the cue centred above it; first-screen height in svh units so iPhone Safari measures it correctly.
9. Tabs tap area: invisible padding to 44px with no visual change; on phones under ~400px the tab row scrolls sideways instead of cramping.
10. Name fade: fixed greys at ≥3:1 for large text (#8b8e97 light, #6f6f6d dark) instead of --soft at 50% opacity; the reveal stays.
11. Logo thumbnail: the owner will supply a better image for "why i started a personal website" (why-personal-website-thumb.webp); the essay stays in the "anyone" picks.

Waiting on the owner: replacement thumbnail for why-personal-website-thumb.webp.

## NOT in scope

- Other routes (work, about, 2026, contact, articles); placeholder content (contact email, 2026 goals, subscribe form) stays.
- Visual mockups: none generated (no image API key configured).

## What already exists

DESIGN.md tokens (--bg, --ink, --soft, --line, --accent, spacing steps, 24px gutter); initForBar (roving tabindex, arrow keys, Home/End, hover preview, crossfade); vendor/particles3d.js (mount/setTheme/destroy, reduced-motion static render, pause off screen); workCard/audCards and the picks section; hero-where/hero-actions; formatForIntro/FOR_TERM_LINKS.

## Implementation Tasks

- [ ] **T1 (P1, human: ~1h / CC: ~10min)** — hero — Bottom-row cue "picked for <label> ↓" that follows the tab and scrolls to the picks
  - Surfaced by: Pass 1 route to picks
  - Files: index.html
  - Verify: cue visible at 1440x760 and 390 wide; click scrolls; label follows tab
- [ ] **T2 (P2, human: ~30min / CC: ~5min)** — picks — Closing row "all essays → · get cv · say hi"
  - Surfaced by: Pass 1 page end
  - Files: index.html
  - Verify: links resolve (#work, cv.pdf, #contact)
- [ ] **T3 (P1, human: ~1h / CC: ~10min)** — tabs — Separate hover preview from selection (bold + underline on selected); click updates picks and cue
  - Surfaced by: Pass 2 states, outside review #2
  - Files: index.html
  - Verify: hover does not change picks; selected tab visibly distinct
- [ ] **T4 (P2, human: ~2h / CC: ~15min)** — particles — Thin the field behind the intro box; keep beads to edges
  - Surfaced by: Pass 4 particles
  - Files: vendor/particles3d.js, index.html
  - Verify: screenshot shows no beads over intro words, light and dark
- [ ] **T5 (P2, human: ~15min / CC: ~3min)** — intro — Soft grey for unlinked mono terms
  - Surfaced by: Pass 4 mono terms
  - Files: index.html
  - Verify: computed colours; contrast ≥4.5:1
- [ ] **T6 (P2, human: ~30min / CC: ~5min)** — layout — 24px gutter and spacing-scale gaps
  - Surfaced by: Pass 5 spacing
  - Files: index.html
  - Verify: get cv right edge at 24px; gaps on the scale
- [ ] **T7 (P3, human: ~10min / CC: ~2min)** — picks — Heading and cue use the tab's exact labels
  - Surfaced by: Pass 5 labels
  - Files: index.html
  - Verify: "picked for finance professionals"
- [ ] **T8 (P1, human: ~1h / CC: ~10min)** — phones — One bottom row plus centred cue; svh height
  - Surfaced by: Pass 6 phone
  - Files: index.html
  - Verify: 390 and 500 wide captures; no overflow
- [ ] **T9 (P1, human: ~30min / CC: ~5min)** — tabs — 44px tap area; sideways scroll under ~400px
  - Surfaced by: Pass 6 tap targets
  - Files: index.html
  - Verify: tab bounding boxes ≥44px tall
- [ ] **T10 (P1, human: ~10min / CC: ~2min)** — name — Fixed fade greys at ≥3:1
  - Surfaced by: Pass 6 contrast
  - Files: index.html
  - Verify: contrast ≥3:1 light and dark

## Design Review Completion Summary

```
  +====================================================================+
  |         DESIGN PLAN REVIEW — COMPLETION SUMMARY                    |
  +====================================================================+
  | System Audit         | DESIGN.md current; homepage UI scope        |
  | Step 0               | 6/10; all 7 areas, text-only                |
  | Pass 1  (Info Arch)  | 5/10 → 10/10 after fixes                    |
  | Pass 2  (States)     | 6/10 → 9/10 after fixes                     |
  | Pass 3  (Journey)    | 9/10 → 9/10 (no new gaps)                   |
  | Pass 4  (AI Slop)    | 7/10 → 9/10 after fixes                     |
  | Pass 5  (Design Sys) | 7/10 → 9/10 after fixes                     |
  | Pass 6  (Responsive) | 5/10 → 9/10 after fixes                     |
  | Pass 7  (Decisions)  | 1 resolved, 0 deferred                      |
  +--------------------------------------------------------------------+
  | NOT in scope         | written (2 items)                           |
  | What already exists  | written                                     |
  | TODOS.md updates     | 0 items (thumbnail kept in plan, by choice) |
  | Approved Mockups     | 0 generated (no image API key)              |
  | Decisions made       | 11 added to plan                            |
  | Decisions deferred   | 0                                           |
  | Overall design score | 5/10 → 9/10                                 |
  +====================================================================+
```

Below 10: Pass 2 and 3 until the thumbnail is supplied; Pass 4 until the thinned field is seen live; Pass 5 until older routes' type drift is addressed (out of scope); Pass 6 until checked on a real iPhone.

Unresolved Decisions: none.

## GSTACK REVIEW REPORT

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| CEO Review | `/plan-ceo-review` | Scope & strategy | 0 | — | — |
| Outside Review | Claude subagent (in-host) via `/plan-design-review` | Independent 2nd opinion | 2 | completed (native) | 10 findings, folded into passes |
| Eng Review | `/plan-eng-review` | Architecture & tests (required) | 0 | — | — |
| Design Review | `/plan-design-review` | UI/UX gaps | 2 | clean | score: 5/10 → 9/10, 11 decisions |
| DX Review | `/plan-devex-review` | Developer experience gaps | 0 | — | — |

- **OUTSIDE COVERAGE:** Codex design voice skipped by user choice (outside_status: skipped); Claude subagent completed in-host, native only.
- **VERDICT:** DESIGN REVIEW CLEARED; eng review required (not run).

NO UNRESOLVED DECISIONS
