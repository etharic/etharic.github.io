---
name: Etharic
description: The personal site of ryan (suryanarayan); a quiet paper reading system, with a hand-built card model of Frankfurt on the homepage.
colors:
  paper: "#f0f1f3"
  paper-dark: "#151515"
  card: "#f8f9fa"
  card-dark: "#20201f"
  graphite-ink: "#1d1e22"
  graphite-ink-dark: "#f2f2f1"
  soft-graphite: "#646873"
  soft-graphite-dark: "#9d9d9b"
  hairline: "#dcdee3"
  hairline-dark: "#373736"
  hover-wash: "rgba(29,30,34,.05)"
  hover-wash-dark: "rgba(242,242,241,.07)"
  burnt-amber: "#8f5d00"
  burnt-amber-dark: "#cf8c06"
  signal-green: "#34c759"
  switch-track: "#3a3a40"
  basswood: "#cdb48a"
  basswood-dark: "#3a3127"
  basswood-edge: "#ad9468"
  basswood-edge-dark: "#2a231b"
  mount-board-lit: "#f6f5f1"
  mount-board-lit-dark: "#55585f"
  mount-board-side: "#e4e2db"
  mount-board-side-dark: "#383a40"
  mount-board-shade: "#cbc8bf"
  mount-board-shade-dark: "#222428"
  plaque: "#f6f5f1"
  plaque-dark: "#1c1c1d"
  window-amber: "#e9a93a"
  cast: "rgba(74,58,34,.2)"
  cast-dark: "rgba(0,0,0,.4)"
typography:
  display:
    fontFamily: "Archivo, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 5.4vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 118"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "2.2rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  intro:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 1.65vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.5
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  reading:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  plaque:
    fontFamily: "Archivo, Inter, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 112"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.09em"
  intro-term:
    fontFamily: "Times New Roman, Times, serif"
    fontWeight: 300
rounded:
  plaque: "3px"
  thumb: "6px"
  control: "8px"
  card: "10px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  gutter: "20px"
  lg: "24px"
  xl: "30px"
  section: "64px"
  course: "28px"
components:
  button:
    backgroundColor: "{colors.card}"
    textColor: "{colors.graphite-ink}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
  button-hover:
    backgroundColor: "{colors.graphite-ink}"
    textColor: "{colors.paper}"
  segmented-on:
    backgroundColor: "{colors.graphite-ink}"
    textColor: "{colors.paper}"
    rounded: "6px"
    padding: "6px 16px"
  plaque:
    backgroundColor: "{colors.plaque}"
    textColor: "{colors.graphite-ink}"
    typography: "{typography.plaque}"
    rounded: "{rounded.plaque}"
    padding: "0 14px"
    height: "44px"
  plaque-selected:
    backgroundColor: "{colors.graphite-ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.plaque}"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.graphite-ink}"
    rounded: "{rounded.card}"
    padding: "12px"
  input:
    backgroundColor: "{colors.card}"
    textColor: "{colors.graphite-ink}"
    rounded: "{rounded.control}"
    padding: "8px 12px"
  theme-switch:
    backgroundColor: "{colors.switch-track}"
    rounded: "{rounded.pill}"
    width: "48px"
    height: "27px"
  theme-switch-on:
    backgroundColor: "{colors.signal-green}"
---

# Design System: Etharic

## Overview

**Creative North Star: "The Study Model on a Quiet Desk"**

Etharic is one system with two registers. Every reading route (work, articles, about, 2026, contact) is a quiet desk: cool paper, graphite ink, hairline borders, Inter at reading sizes, one burnt-amber accent kept for the few actions that matter. The homepage sets a hand-built study model on that desk: four towers of cut white mount board on a basswood plate, lit by one raking light, one tower per audience. Both registers share the same ink, soft graphite, amber accent, hairlines and easing, so the model reads as an object placed on the site, not a second site.

The model is literal material, not illustration. Depth comes from three face fills of the same board (lit top, side, shade), from the plate's cut edge, and from a soft cast decal on the plate that skews with the light. At night (dark theme) the same model sits in a dim studio: board faces drop to graphite, basswood darkens, and only the selected tower's windows glow amber. Choosing an audience raises that tower one course, lights it, swings the light and turns the plate.

The voice is personal and playful (lowercase copy, a pixel dog, a live clock) but the surfaces are restrained. Rejected: corporate polish, glossy 3D blobs, glass, decorative gradients and glow halos.

**Key Characteristics:**
- Flat tonal surfaces with 1px hairlines; no elevation shadows on reading routes.
- One accent (burnt amber) for the primary action of a view; one decorative amber (window glow) inside the model only.
- Inter for everything readable; Archivo expanded only for the homepage name and the plaques.
- The homepage model is built from real geometry: 28px courses, three face shades, a perspective plate.
- Motion is short, ease-out and transform/opacity only; reduced motion keeps crossfades and drops movement.

## Colors

Cool, nearly neutral paper and graphite, warmed only by burnt amber and, on the homepage, by basswood and window light. Every surface color has a light and a dark value; the dark keys (`*-dark`) apply under `:root[data-theme="dark"]`.

### Primary
- **Burnt Amber** (`burnt-amber` / `burnt-amber-dark`): the one interactive accent. It colors "get cv", and on the homepage the first intro link once the visitor has picked an audience. Never a fill, never a large area.

### Secondary
- **Basswood** (`basswood`, edge `basswood-edge`): the model's plate and its cut edge. Homepage only.
- **Window Amber** (`window-amber`): lit windows on the selected tower. Decorative, carries no text, homepage only; the same in both themes.

### Neutral
- **Paper** (`paper`): page background on every route, including the fixed nav.
- **Card** (`card`): raised-by-tone surfaces: cards, buttons, inputs, segmented controls, list tiles.
- **Graphite Ink** (`graphite-ink`): headings, body text in prose, selected states, focus rings, selected plaque fill.
- **Soft Graphite** (`soft-graphite`): secondary text, nav links at rest, captions, leader lines at rest.
- **Hairline** (`hairline`): every 1px border and divider; also image placeholders and empty bars.
- **Hover Wash** (`hover-wash`): the background tint for hovered rows and cards.
- **Mount Board, three shades** (`mount-board-lit`, `mount-board-side`, `mount-board-shade`): the top, west and south faces of each course. The ordering lit > side > shade is fixed; it is the raking light.
- **Plaque** (`plaque`): audience plaques at rest; same as the lit board face in light theme.
- **Cast** (`cast`): the translucent cast shadow on the plate.
- **Signal Green** (`signal-green`): the theme switch "on" track and the "currently in" status dot. Nothing else.

### Named Rules
**The One Amber Rule.** Burnt amber marks at most one or two actions per view. If a second thing wants amber, it gets graphite ink instead.

**The Raking Light Rule.** Model faces use exactly the three mount-board shades, lit top, side, shade, in that order. Depth in the model never comes from box-shadow or gradients.

**The Night Studio Rule.** Dark theme does not invert the model; it dims it. Faces go to graphite, basswood darkens, windows keep the same amber.

## Typography

**Display Font:** Archivo, width axis (with Inter, system-ui fallback), loaded only for the characters the homepage uses
**Body Font:** Inter 300 to 700 (with system-ui, sans-serif)
**Accent Face:** Times New Roman italic, synthesized lean (`skewX(-9deg) scaleX(.94)`), for the code-like terms inside homepage intros

**Character:** Inter carries everything a visitor reads. Archivo expanded gives the homepage name and the model's labels a drafted, architectural mass, as if lettered on a presentation board. The skewed serif terms ("this.essay") are the playful voice inside otherwise plain sentences.

### Hierarchy
- **Display** (Archivo 700, width 118, `clamp(2.6rem, 5.4vw, 5.5rem)`, line-height 0.98): homepage name only. The faded part of "suryanarayan" sits in soft graphite at 50% opacity. On phones the width drops to 100 and size to `clamp(2.2rem, 10.4vw, 2.8rem)`.
- **Headline** (Inter 700, 2.2rem, 1.2, -0.02em): page titles on reading routes; 2rem on about and on phones.
- **Intro** (Inter 400, `clamp(1.15rem, 1.65vw, 1.5rem)`, 1.5): the homepage tabpanel, capped at `min(36rem, 40vw)`.
- **Title** (Inter 600, 1.05rem, 1.4): prose and chapter h2.
- **Body** (Inter 400, 1rem, 1.6): default text; secondary text in soft graphite.
- **Reading** (Inter 400, 1.125rem, 1.65): about page and long-form prose, max 660px measure.
- **Plaque** (Archivo 600, width 112, 0.8rem): audience plaques; 0.74rem from 1050px down.
- **Label** (Inter 400, 0.75rem, 0.09em, uppercase): section labels on reading routes and the chapter rail head. Tile categories use 0.7rem, 0.08em.

### Named Rules
**The Archivo Fence Rule.** Archivo appears only on the homepage name and the plaques. Any other text, including the homepage intro, is Inter.

## Layout

Reading routes use a single centered column (`max-width: 800px`, 20px side padding) under a fixed nav (30px vertical padding, 24px left, room on the right for the fixed theme switch). Prose caps at 660px; the about page at 760px with a 196px photo column. Work grids run 3 columns (gap 30px x 18px), 2 columns from 681 to 900px, 1 column at 680px and below.

The homepage removes the column cap (`max-width: none`, 24px gutter). Text holds the left side: name, intro, "more about me". The model stands absolutely on the right, `min(50vw, 800px)` wide and 70vh tall, never more than half the viewport. The plaques sit along the model's bottom edge, centered, 10px apart, with leader lines drawn from each plaque to the foot of its tower. Footer details ("currently in", clock, dog; "get cv") pin to the bottom corners of the first viewport.

At 680px and below the homepage stacks: name, then a model band `max(240px, 34vh)` tall bleeding to the screen edges, plaques in a 2x2 grid (8px gap), intro, footer details inline. Leader lines are hidden.

The model scales to fit its stage (0.4 to 1.2 times its 480 x 300px plate), so geometry is authored at fixed pixels and never reflowed.

Spacing rhythm is small and practical: 8 / 12 / 16 / 20 / 24 / 30px, with 64px before section labels.

## Elevation & Depth

Reading routes are flat. Surfaces separate by tone (paper vs card) and 1px hairlines; hover adds the hover wash or a 1 to 2px lift, never a shadow. The only shadow outside the model is the theme switch knob (`0 1px 4px rgba(0,0,0,.35)`), a physical toggle detail.

The homepage model is real 3D (`perspective: 1400px`, origin 50% 25%; plate `rotateX(60deg) rotateZ(-30deg)` for "for anyone", turning to -24, -18 and -12deg for the other audiences). Depth is conveyed by face fills, the plate's 14px cut edge, and a cast decal on the plate (cast color, 1.5px blur, skewed 16 to 34deg with the light). Course side faces carry a 1px inset line at their foot (`inset 0 -1px 0 rgba(0,0,0,.08)`) to read the cut between courses.

### Named Rules
**The Material Depth Rule.** If something looks raised, it is because it is built in 3D or has a lighter tone, not because it casts a box-shadow.

## Shapes

Gently rounded on reading routes: 10px on cards, photos and video frames; 8px on buttons, inputs, segmented controls and post thumbnails; 6px on thumbnails inside cards. Pills (999px) only for the theme switch and dots.

The homepage model is square-cut: towers are stacked rectangular courses (28px tall, footprints from 96 x 80px down to 40 x 40px), the plate has square corners, and the plaques are near-square (3px). Tower forms are abstract: anyone is a stepped ziggurat, recruiters a clean slab, finance the tallest square tower with a two-step crown and spire, engineers twin towers joined by a bridge. No tower copies a real building.

## Components

### Buttons
Restrained, tonal, a little tactile.
- **Shape:** gently rounded (8px).
- **Default:** card fill, hairline border, graphite ink text, 8px x 16px, 0.85rem.
- **Hover (fine pointers):** inverts to graphite ink fill with paper text and lifts 1px. Press scales to 0.97.
- **Segmented control:** card track with hairline border and 3px padding; the selected segment fills graphite ink with paper text (6px radius).

### Audience Plaques (signature)
Flat card labels standing along the model's front edge; they are the audience tablist.
- **Shape:** near-square (3px), minimum 44px tall, 0 14px padding, Archivo plaque type.
- **Rest:** plaque fill, hairline border, graphite ink text.
- **Hover/preview:** border turns graphite ink; the intro and tower lighting preview that audience; leaving restores the selection.
- **Selected:** graphite ink fill, paper text. Selection lights the tower's windows, raises it one course, swings the light and turns the plate (420ms ease-out).
- **Focus:** 2px graphite ink outline, 3px offset. Arrow keys, Home and End select.

### The Maquette (signature)
Decorative and `aria-hidden`; every action lives on the plaques. Under 140 faces. Each course is three faces (top only where visible); windows are a pattern on the side faces of the lit tower. First homepage view per session: courses rise out of the plate, 420ms each, 50ms per tower and 40ms per course stagger. Mouse-only tilt within ±3deg on a spring, idle when settled, off on touch, reduced motion and hidden tabs.

### Cards / Containers
- **Corner Style:** 10px.
- **Background:** card, with a 1px hairline border; 12px padding.
- **Hover:** border to soft graphite and hover wash. Post thumbnails lift 2px and press to 0.98.

### Inputs / Fields
- **Style:** card fill, hairline border, 8px radius, 8px x 12px, inherited type; placeholder in soft graphite.
- **Focus:** 2px graphite ink outline, 2px offset.

### Navigation
- **Style:** fixed top bar on paper; "Etharic" wordmark 600 1.1rem in graphite ink; route links 0.95rem in soft graphite with 16px line icons, the current route in graphite ink. Icons drop at 680px and below, and the nav becomes static with a hairline under it.
- **Theme switch:** 48 x 27px pill, track switch-track (off) or signal green (on), white 21px knob; the theme changes under a circular view-transition reveal.

### Inline Links
Underlined at 1px with 2 to 4px offset. In prose and intros the underline sits in soft graphite and darkens to graphite ink on hover; "more about me" nudges its arrow 3px right.

## Do's and Don'ts

### Do:
- **Do** take every color from the tokens, with a dark value for each surface color.
- **Do** keep burnt amber to one or two actions per view (get cv; the picked intro link).
- **Do** build model depth from the three mount-board shades, the basswood edge and the cast decal.
- **Do** animate only transform and opacity with `--ease-out` (`cubic-bezier(.23,1,.32,1)`), 160 to 420ms; keep a 200ms crossfade under reduced motion.
- **Do** keep touch targets at 44px minimum and a 2px graphite ink focus ring on every control.
- **Do** keep Archivo inside the Archivo fence (homepage name, plaques).

### Don't:
- **Don't** use box-shadows, glass, glow halos or decorative gradients to suggest depth.
- **Don't** let the model take more than half the viewport width on desktop, or run an animation loop while idle, on touch, or in a hidden tab.
- **Don't** light more than one tower; the other three stay plain card.
- **Don't** model a real Frankfurt building; the towers stay abstract.
- **Don't** use signal green for anything but the theme switch and the status dot.
