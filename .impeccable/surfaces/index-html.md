---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief: etharic.com homepage (hero route "")

Scope: the homepage hero only (route `""` in index.html). Every other route keeps the incumbent system. Mode: Persuade. Build path: code-led (no image generation available).

Audience: four equal audiences (anyone, recruiters, finance professionals, engineers). Action: choose your audience and follow its links (essay, projects, CV, about). Must keep: audience switcher, name reveal, footer details (city, clock, dog, get cv). Must avoid: corporate, slow or heavy, generic AI look.

## Direction contract

THESIS: The homepage is a hand-built study model of Frankfurt: four card towers on one basswood plate, one tower per audience. Choosing an audience lights its tower and turns the model toward you. It refuses the category default, a big name over a floating glossy 3D blob.

OWN-WORLD: White mount board faces with three shades from one raking light, a basswood plate, graphite ink type, one amber for lit windows. Towers are stacked courses of cut card. At night (dark mode) the same model sits in a dim studio with windows glowing. Depth comes from face fills, never drop shadows. No gradients-as-decoration, no glass, no glow halos.

STORY: The visitor sees who this is (name as type mass), sees the model, and recognises themselves in one of the four plaques. Picking it rewrites the intro and lights that tower, and the intro's first link turns amber. They follow that link, or "more about me", or "get cv".

FIRST VIEWPORT: Desktop: the name reveal top-left at 5.5rem in Archivo expanded, the intro (tabpanel) under it, "more about me" after. The plate sweeps in perspective across the lower right, capped at about 50% of the width, with four towers rising into the right half. Four plaques (the tablist, flat buttons) stand along the plate's front edge, one before each tower. The footer details sit on the bottom edge. Mobile: name, then the model band (about 38% of screen height) with 2x2 plaques, then the intro, then the footer details.

FORM: Mainhattan Maquette, candidate 5 of 7 on my grounded list (THE ROLL). seed:d1d84b17285aba91. Signature interaction: selecting an audience raises its tower one course, lights its windows, swings the light and turns the plate. Motion grammar: one emergence on the first homepage view per session (towers rise out of the plate over an already-visible model), mouse-only tilt within ±3° on a spring, ease-out transforms only; reduced motion keeps a 200ms lighting and text crossfade and drops movement.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

Raises carried from declined challengers: darkroom (one continuous emergence on load), manifesto (name as type mass), chromatophore (the whole model answers the audience: light, shadow, lit tower), cloud quarry (towers read as stacked cut blocks).

## Design review decisions (plan-design-review, 2026-11-25)

Information hierarchy (approved): 1 name, 2 model with plaques (primary action: pick your audience), 3 intro and its links.

```
+------------------------------------------------------------------+
| Etharic                                  2026  work  contact  (o) |
|                                                                  |
|  hey, i'm su RYAN arayan!          (Archivo expanded, 5.5rem)    |
|  intro text for the selected audience (tabpanel, 1.5rem)         |
|  more about me ->                         _/|  |#|               |
|                                       __/ |#|_|#|_  [] []        |
|                                     /  basswood plate (<=50%w) / |
|                                    [anyone][recruiters][finance][engineers] |
| currently in frankfurt (07:12) . dog                     get cv  |
+------------------------------------------------------------------+
```

Model weight: model at most about 50% of viewport width on desktop; only the selected tower shows windows (amber); the other three are plain card.

State table (approved):

| State | What the visitor sees |
|---|---|
| First paint | Model already standing, "for anyone" selected; nothing hidden behind animation |
| Entrance | Once per browser session (sessionStorage): towers rise course by course over 900ms, 40ms stagger |
| Hover plaque or tower | Previews that audience's text and lighting; leaving restores the selected one |
| Keyboard focus | Flat 2px ring on the plaque; arrow keys, Home and End select, as today |
| Selected | Tower +1 course, amber windows, light swings, plate turns, intro crossfades; first intro link turns amber (--accent) |
| Touch | No tilt; tap selects |
| Reduced motion | No rise, tilt or turn; lighting and text crossfade 200ms |
| Theme switch | Model takes night tokens under the existing circular reveal |
| No 3D support | Flat front view of the towers; everything still works |

Typeface: Archivo (expanded width axis) for the name and plaques only; Inter stays for all other text.

Tilt: mouse only, ±3°, spring, idles when the mouse rests; never on touch or reduced motion.

Tokens (light / dark): --plate #cdb48a / #3a3127; --face-1 #f6f5f1 / #3b3d42; --face-2 #e4e2db / #2e3034; --face-3 #cbc8bf / #232528; --window #e9a93a (decorative only). Reuses --ink, --soft, --accent, --ease-out.

Geometry: scene perspective 1400px; plate rotateX(60deg) rotateZ(-32deg); 4 towers, 4 to 8 courses of 28px each, footprints 56 to 88px; selected tower +1 course; selection 420ms ease-out; under 140 DOM faces total; animate transform and opacity only; no rAF loop when idle, on touch, or in a hidden tab.

Plaques: flat layer of real buttons (role=tab) aligned under the tower bases, 44px minimum targets; the 3D model is aria-hidden decoration.

Responsive: desktop and tablet (681px and up) keep the composition with the model capped at 50%; phones (680px and below) stack name, model band with 2x2 plaques, intro, footer details.

Towers: anyone = low stepped tower; recruiters = clean slab; finance professionals = tallest tower with a crown; engineers = twin towers joined by a bridge. Abstract forms only, no copies of real buildings.

## NOT in scope

- Other routes (work, about, 2026, contact, articles): unchanged.
- Placeholder content (contact email, 2026 goals, subscribe form): kept, per the user.
- Favourite-videos grid under the hero: empty today; renders below the hero unchanged if ever filled.
- Picture mockups: skipped, no image API key configured.

## What already exists

Colour tokens --bg, --ink, --soft, --accent; easing tokens --ease-out, --ease-in-out; keyboard-ready audience tablist logic (initForBar); intro blur crossfade; theme toggle with circular reveal; hero-where and hero-actions footer details; cursor halo; REDUCED_MOTION media query helper.

## Implementation Tasks

- [ ] **T1 (P1, human: ~1d / CC: ~30min)** — homepage hero — Build the maquette scene (plate, four towers from course blocks, face tokens light/dark) per geometry spec
  - Surfaced by: Pass 5 tokens/geometry, Pass 7 tower identities
  - Files: index.html
  - Verify: screenshots desktop and mobile, light and dark; face count under 140
- [ ] **T2 (P1, human: ~3h / CC: ~15min)** — plaques — Flat plaque tablist aligned under towers, 44px targets, existing keyboard logic
  - Surfaced by: Pass 6 plaques
  - Files: index.html
  - Verify: probe arrow keys, aria-selected, focus ring, target sizes
- [ ] **T3 (P1, human: ~3h / CC: ~15min)** — interaction — Selection (rise, light, turn, amber first link), hover preview, once-per-session entrance, ±3° mouse tilt, reduced motion and touch rules
  - Surfaced by: Pass 2 states, Pass 3 journey, Pass 4 tilt
  - Files: index.html
  - Verify: behaviour probe in headless Chrome; reduced-motion run
- [ ] **T4 (P2, human: ~1h / CC: ~5min)** — type — Load Archivo (width axis) for name and plaques only
  - Surfaced by: Pass 4 typeface
  - Files: index.html
  - Verify: computed font-family on h1 and plaques
- [ ] **T5 (P1, human: ~2h / CC: ~10min)** — responsive — Phone stack (name, model band, intro) and tablet cap, no horizontal overflow
  - Surfaced by: Pass 6 mobile
  - Files: index.html
  - Verify: 390px and 768px probes, scrollWidth equals clientWidth

## Design Review Completion Summary

```
  +====================================================================+
  |         DESIGN PLAN REVIEW — COMPLETION SUMMARY                    |
  +====================================================================+
  | System Audit         | no DESIGN.md (written at finish); UI scope  |
  | Step 0               | 5/10; all 7 passes + mockups requested       |
  | Pass 1  (Info Arch)  | 5/10 → 9/10 after fixes                     |
  | Pass 2  (States)     | 3/10 → 10/10 after fixes                    |
  | Pass 3  (Journey)    | 6/10 → 9/10 after fixes                     |
  | Pass 4  (AI Slop)    | 6/10 → 9/10 after fixes                     |
  | Pass 5  (Design Sys) | 4/10 → 9/10 after fixes                     |
  | Pass 6  (Responsive) | 4/10 → 9/10 after fixes                     |
  | Pass 7  (Decisions)  | 1 resolved, 0 deferred                      |
  +--------------------------------------------------------------------+
  | NOT in scope         | written (4 items)                           |
  | What already exists  | written                                     |
  | TODOS.md updates     | 0 items proposed                            |
  | Approved Mockups     | 0 generated, 0 approved (no image API key)  |
  | Decisions made       | 11 added to plan                            |
  | Decisions deferred   | 0                                           |
  | Overall design score | 3/10 → 9/10                                 |
  +====================================================================+
```

Remaining below 10: Pass 1 and 3 hold at 9 because recruiters and finance intros have no link yet (placeholder content kept by the user); Pass 5 at 9 until DESIGN.md is written at finish; Pass 6 at 9 until verified on a real iPhone.

Unresolved Decisions: none.

## GSTACK REVIEW REPORT

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| CEO Review | `/plan-ceo-review` | Scope & strategy | 0 | — | — |
| Outside Review | Claude subagent (in-host) via `/plan-design-review` | Independent 2nd opinion | 1 | completed (native) | 9 findings, all folded into passes |
| Eng Review | `/plan-eng-review` | Architecture & tests (required) | 0 | — | — |
| Design Review | `/plan-design-review` | UI/UX gaps | 1 | clean | score: 3/10 → 9/10, 11 decisions |
| DX Review | `/plan-devex-review` | Developer experience gaps | 0 | — | — |

- **OUTSIDE COVERAGE:** Codex design voice skipped by user choice (outside_status: skipped); Claude subagent completed in-host, native only.
- **VERDICT:** DESIGN REVIEW CLEARED; eng review required (not run).

NO UNRESOLVED DECISIONS
