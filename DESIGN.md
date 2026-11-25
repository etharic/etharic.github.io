---
name: Etharic
description: The personal site of ryan (suryanarayan); a quiet paper reading system, with one slatted 3D sign on the homepage that turns in a wave to face each audience.
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
  switch-on: "#4a4b52"
  acc-anyone: "#1d1e22"
  acc-anyone-dark: "#f2f2f1"
  acc-recruiters: "#2f6fe0"
  acc-recruiters-dark: "#7aa7ff"
  acc-finance: "#e6a817"
  acc-finance-dark: "#f2b93b"
  acc-engineers: "#2fb57a"
  acc-engineers-dark: "#4fd08f"
  on-anyone: "#ffffff"
  on-recruiters: "#ffffff"
  on-finance: "#1d1e22"
  on-engineers: "#1d1e22"
  on-acc-dark: "#111111"
  face-anyone: "#f7f5f0"
  face-anyone-dark: "#26272a"
  face-recruiters: "#e6edfb"
  face-recruiters-dark: "#1b2438"
  face-finance: "#faefcf"
  face-finance-dark: "#33290f"
  face-engineers: "#def2e6"
  face-engineers-dark: "#142d21"
  seam: "#a9a69f"
  seam-dark: "#101011"
typography:
  display:
    fontFamily: "Archivo, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 4.6vw, 4.2rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  sign-line:
    fontFamily: "Archivo, Inter, system-ui, sans-serif"
    fontWeight: 700
    lineHeight: 1
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "2.2rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  section-head:
    fontFamily: "Archivo, Inter, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)"
    fontWeight: 700
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 112"
  intro:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 1.4vw, 1.22rem)"
    fontWeight: 400
    lineHeight: 1.6
  intro-term:
    fontFamily: "Inter, system-ui, sans-serif"
    fontWeight: 400
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
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.09em"
rounded:
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
  audience-switch:
    backgroundColor: "{colors.card}"
    textColor: "{colors.soft-graphite}"
    rounded: "{rounded.pill}"
    padding: "4px"
  audience-switch-on:
    backgroundColor: "{colors.acc-recruiters}"
    textColor: "{colors.on-recruiters}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "44px"
  cta-primary:
    backgroundColor: "{colors.acc-recruiters}"
    textColor: "{colors.on-recruiters}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "48px"
  cta-primary-finance:
    backgroundColor: "{colors.acc-finance}"
    textColor: "{colors.on-finance}"
  cv-link:
    textColor: "{colors.graphite-ink}"
    height: "44px"
  pick-card:
    textColor: "{colors.graphite-ink}"
    rounded: "{rounded.card}"
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
    backgroundColor: "{colors.switch-on}"
---

# Design System: Etharic

## Overview

**Creative North Star: "One Object on a Quiet Desk"**

Etharic is one system with two registers. Every reading route (work, articles, about, 2026, contact) is a quiet desk: cool paper, graphite ink, hairline borders, Inter at reading sizes, flat surfaces. The homepage sets a single object on that desk: a slatted trivision sign, twelve square-section slats between two light rails, with four faces, one per audience. Each face is a printed placard carrying the opening of that audience's own sentence in one Archivo line ("i'm a finance student"); the intro directly under the sign finishes the sentence. Choosing an audience turns the slats in a wave until the new face reads.

The homepage is one centred vertical axis: name, "who's reading?" and the audience switch, the sign, the intro, one audience-specific action plus "more about me", then a "picked for" heading, three hand-picked pieces of writing and a closing row. The audience is the only variable. Selecting one recolours the switch indicator, the primary action, the intro underlines and the "picked for" underline together, and turns the sign, so the whole axis shifts at once.

The voice is personal and playful (lowercase copy, code-like intro lines, a pixel dog, a live clock) but the surfaces are restrained. The sign is the one rendered object, matte and soft-lit; everything around it is flat. Rejected: corporate polish, glossy neon 3D, glass, decorative gradients and glow halos.

**Key Characteristics:**
- Flat tonal surfaces with 1px hairlines; no elevation shadows outside the 3D sign.
- One audience accent live at a time on the homepage, carried by a single variable with its own on-colour.
- Inter for everything readable; Archivo expanded only for the homepage name, the sign lines and the "picked for" heading.
- The homepage is a single centred column; the sign is decorative and every action it offers is also a plain control.
- Motion is short and ease-out; the sign turns in a staggered wave, sways briefly, then stops, and loses the wave and overshoot under reduced motion.

## Colors

Cool, nearly neutral paper and graphite; on the homepage, one audience accent at a time and four pale placard faces. Every surface and accent colour has a light and a dark value; the dark keys (`*-dark`) apply under `:root[data-theme="dark"]`.

### Primary
- **Audience Accent** (`acc-anyone`, `acc-recruiters`, `acc-finance`, `acc-engineers`): Graphite, Signal Blue, Marigold and Jade. Exactly one is live at a time, set on the app root by `data-aud` and read everywhere as one variable. It fills the switch indicator and the primary action, and draws the 2px underline under intro links and the 3px underline under the audience name in "picked for".
- **On-Accent** (`on-anyone`, `on-recruiters`, `on-finance`, `on-engineers`): text on an accent fill, paired per audience. White on graphite and blue; graphite ink on marigold and jade, because those two are too light for white. In dark theme every on-colour is near-black (`on-acc-dark`).

### Secondary
- **Placard Faces** (`face-anyone`, `face-recruiters`, `face-finance`, `face-engineers`): the printed background of each sign face. In light theme a pale tint of the audience hue (warm white, ice blue, cream, mint); in dark theme a deep tint of the same hue. Each face carries its own ink and a softer tag colour from the same hue (see sidecar `scene.faces`). Used only inside the WebGL scene.
- **Seam** (`seam`): at rest, slat faces not turned to the viewer take this colour so the gaps between slats read as shadow, not as stray letters.

### Neutral
- **Paper** (`paper`): page background on every route, including the fixed nav.
- **Card** (`card`): raised-by-tone surfaces: cards, buttons, inputs, segmented controls and the audience switch track.
- **Graphite Ink** (`graphite-ink`): headings, body text in prose and intros, selected states, focus rings, and "get cv" on the homepage closing row.
- **Soft Graphite** (`soft-graphite`): secondary text, nav links at rest, captions, card meta, the "who's reading?" question, the closing row.
- **Hairline** (`hairline`): every 1px border and divider; also image placeholders and empty bars.
- **Hover Wash** (`hover-wash`): the background tint for hovered rows and cards.
- **Switch Track / Switch On** (`switch-track`, `switch-on`): the theme switch, off and on. Both neutral greys; the switch does not use colour.
- **Signal Green** (`signal-green`): the "currently in" status dot. Nothing else.
- **Burnt Amber** (`burnt-amber`): the site's reserved action colour, defined on `:root` for both themes. No rendered element carries it at present.

### Named Rules
**The One Voice Rule.** One audience accent is live at a time, and every accent-bearing element reads it through the shared variable, never a fixed audience colour. If an element should not change with the audience, it is not accent-coloured.

**The Paired Ink Rule.** An accent fill always takes the on-colour paired with it, never a fixed white. Light accents (marigold, jade) carry graphite ink.

**The Placard Rule.** A sign face is a tint of its audience hue with ink of the same hue; the accent fill itself never paints the sign.

## Typography

**Display Font:** Archivo, width axis at 112 (with Inter, system-ui fallback), subset to the characters the homepage and the sign use
**Body Font:** Inter 300 to 700, with italic 400 (with system-ui, sans-serif)

**Character:** Inter carries everything a visitor reads. Archivo expanded gives the homepage name, the sign lines and the "picked for" heading a broad, drafted mass; the sign line is the loudest type on the site. Code-like terms in the intros ("this.essay") are simply Inter italic.

### Hierarchy
- **Display** (Archivo 700, width 112, `clamp(2.3rem, 4.6vw, 4.2rem)`, line-height 1.02): homepage name only, balanced, centred. The faded part of "suryanarayan" sits in soft graphite at 50% opacity; on phones the name drops to its own line.
- **Sign Line** (Archivo 700, expanded, line-height 1): the audience line on each sign face, set as large as fits in at most two lines, left-aligned on the placard.
- **Headline** (Inter 700, 2.2rem, 1.2, -0.02em): page titles on reading routes; 2rem on about and on phones.
- **Section Head** (Archivo 700, width 112, `clamp(1.4rem, 2.2vw, 1.8rem)`, -0.01em): the homepage "picked for" heading; the audience name inside it carries a 3px accent underline, 6px offset.
- **Intro** (Inter 400, `clamp(1.05rem, 1.4vw, 1.22rem)`, 1.6): the homepage audience panel, max 40rem, graphite ink.
- **Intro Term** (Inter italic 400): code-like terms inside intros; linked terms add a 2px accent underline, 4px offset.
- **Title** (Inter 600, 1.05rem, 1.4): prose and chapter h2; homepage card titles use 1.02rem, 1.35.
- **Body** (Inter 400, 1rem, 1.6): default text; secondary text in soft graphite.
- **Reading** (Inter 400, 1.125rem, 1.65): about page and long-form prose, max 660px measure.
- **Label** (Inter 400, 0.75rem, 0.09em, uppercase): section labels on reading routes and the chapter rail head. Tile categories use 0.7rem, 0.08em.

### Named Rules
**The Archivo Fence Rule.** Archivo appears only on the homepage name, the sign lines and the homepage "picked for" heading. Any other text, including the intro, the switch and the cards, is Inter.

## Layout

Reading routes use a single centered column (`max-width: 800px`, 20px side padding) under a fixed nav (30px vertical padding, 24px left, room on the right for the fixed theme switch). Prose caps at 660px; the about page at 760px with a 196px photo column. Work grids run 3 columns (gap 30px x 18px), 2 columns from 681 to 900px, 1 column at 680px and below.

The homepage widens the column to 1120px and stacks everything on one centred axis, text centred, starting 100px from the top. Order: name; "who's reading?" (26px above, 10px below) and the audience switch; the sign stage, `min(100%, 880px)` wide at a 2.75:1 aspect, 14px below the switch; the panel (intro, max 40rem, then the primary action and "more about me" in a row 22px below, 24px gap); the "picked for" section (44px top, heading 20px above the cards) with three cards in a 3-column grid (22px gap); then the closing row 64px below, a hairline on top, city, clock, dot and dog on the left and "get cv" on the right. Without WebGL the stage collapses to 8px and the page reads as type alone. On wider screens the panel is held at the height of its tallest audience text so switching never shifts the page.

At 680px and below the axis starts 28px from the top, the stage bleeds to the screen edges at a 2.2:1 aspect, switch segments tighten to 11px side padding at 0.85rem, the panel takes its own height, and the cards go to one column with 28px gaps (36px above the section).

Spacing rhythm is small and practical: 8 / 12 / 16 / 20 / 24 / 30px, with 64px before section labels and the closing row.

## Elevation & Depth

Every surface is flat. Surfaces separate by tone (paper vs card) and 1px hairlines; hover adds the hover wash or a 1 to 3px lift, never a shadow. The only CSS shadow is the theme switch knob (`0 1px 4px rgba(0,0,0,.35)`), a physical toggle detail.

The homepage sign is the one real 3D object, rendered with WebGL (three.js r170): a 4.2 x 1.5 unit panel of twelve square-section slats, each a four-sided prism that shows a vertical slice of one audience placard per side, held between a light top and bottom rail (#cfcac0, dark theme #55565c). Faces are fully matte printed stock (roughness .9, no clearcoat) so every slat takes the same tone; slat ends are a light stone grey. It is lit by a soft room environment, a raking key light from the left and a rim from behind right, seen through a 17° lens from about 10° above and turned 15° (yaw -0.26), so the slat prisms and rails read as depth at rest. The sign line is set a clear step below the name (at most 200px on a 2048px face, centred). Depth under it is a soft radial contact shadow on the floor, never a CSS shadow. Dark theme repaints the faces from the dark set, lowers exposure and environment light, and lightens the slat ends and rails.

### Named Rules
**The Material Depth Rule.** If something looks raised, it is because it is rendered in 3D or has a lighter tone, not because it casts a box-shadow.

**The Seam Rule.** At rest only the chosen face shows; every other face takes the seam colour, so the slat gaps read as shadow.

**The Night Flip Rule.** In dark theme each accent lightens and the text on it flips to near-black; the sign repaints to its dark faces, it is never inverted.

## Shapes

Gently rounded on reading routes: 10px on cards, photos, video frames and homepage card images; 8px on buttons, inputs, segmented controls and post thumbnails; 6px on thumbnails inside cards. The homepage's interactive pieces are full pills (999px): the audience switch, its sliding indicator and the primary action. Pills otherwise only for the theme switch and dots.

The sign is the one hard-edged solid on the site: square slats with a hairline gap between them, a wide flat rectangle overall, closed top and bottom by softly rounded rails.

## Components

### Buttons
Restrained, tonal, a little tactile.
- **Shape:** gently rounded (8px).
- **Default:** card fill, hairline border, graphite ink text, 8px x 16px, 0.85rem.
- **Hover (fine pointers):** inverts to graphite ink fill with paper text and lifts 1px. Press scales to 0.97.
- **Segmented control (reading routes):** card track with hairline border and 3px padding; the selected segment fills graphite ink with paper text (6px radius).

### Primary Action (homepage)
One per audience: "start with this essay", "download my cv", "read my latest analysis", "see what i built".
- **Shape:** pill, 48px tall, 0 22px, Inter 600 0.95rem, trailing arrow.
- **Color:** accent fill with its paired on-colour; fill and text ease to the new audience over 420ms.
- **Hover (fine pointers, motion allowed):** the arrow nudges 3px right. Press scales to 0.97.
- Paired with "more about me", a soft graphite underlined link whose arrow nudges the same way.

### Audience Switch (signature)
The homepage tablist under the question "who's reading?".
- **Shape:** pill track (card fill, hairline border, 4px padding); four segments, 44px tall, 0 18px, Inter 500 0.92rem.
- **Indicator:** one accent pill that slides and resizes under the selected segment (420ms ease-out) and changes colour with it; it holds still during layout.
- **States:** rest soft graphite, hover graphite ink, selected on-accent text over the indicator.
- **Keyboard:** arrow keys, Home and End select and move focus; 2px graphite ink focus ring, 3px offset.
- **Change:** the panel and cards swap with a 460ms rise from 10px and 4px blur to sharp; 160ms opacity only under reduced motion.

### The Sign (signature)
Decorative (`aria-hidden`) and optional: it loads after the page is usable, fades in over 700ms, and the page works without it.
- **Faces:** one per audience: "for anyone / minimal systems that last.", "for recruiters / seen the numbers from both sides.", "for finance professionals / NPV > 0.", "for engineers / i know my way /around.".
- **Turn:** selecting an audience turns every slat a quarter-turn multiple to that face in a wave from left to right, each slat starting 38ms after the last and taking 640ms with a slight overshoot that settles.
- **Drag:** dragging sideways turns all slats together; on release they snap to the nearest face and that face selects its audience in the switch.
- **Idle:** for 15 seconds after load or interaction it sways and bobs very slightly, then stops rendering. A mouse tilts it a little toward the pointer.
- **Reduced motion:** no wave, no overshoot, no idle sway and no pointer tilt; the slats change face at once.
- It pauses off screen and in hidden tabs.

### Picked Cards
Three hand-picked pieces per audience under "picked for <audience>".
- **Image:** 4:3, 10px radius, hairline border, card fill behind; lifts 3px on hover (fine pointers, motion allowed).
- **Meta:** section name and reading time ("6 min read"), 0.8rem soft graphite.
- **Title:** Inter 600 1.02rem, graphite ink.
- No card chrome around the text; the image is the card.

### Closing Row (homepage)
Hairline on top, 28px above and 32px below, 0.92rem soft graphite: "currently in" city, live clock, green status dot and pixel dog on the left; "get cv" on the right in graphite ink (500, with a file icon, 44px target), underlined on hover.

### Cards / Containers
- **Corner Style:** 10px.
- **Background:** card, with a 1px hairline border; 12px padding.
- **Hover:** border to soft graphite and hover wash. Post thumbnails lift 2px and press to 0.98.

### Inputs / Fields
- **Style:** card fill, hairline border, 8px radius, 8px x 12px, inherited type; placeholder in soft graphite.
- **Focus:** 2px graphite ink outline, 2px offset.

### Navigation
- **Style:** fixed top bar on paper; "Etharic" wordmark 600 1.1rem in graphite ink; route links 0.95rem in soft graphite with 16px line icons, the current route in graphite ink. Icons drop at 680px and below, and the nav becomes static with a hairline under it.
- **Theme switch:** 48 x 27px pill, track switch-track (off) or switch-on (on), white 21px knob; the theme changes under a circular view-transition reveal.

### Inline Links
Underlined at 1px with 2 to 4px offset. In prose the underline sits in soft graphite and darkens to graphite ink on hover. In homepage intros the linked terms stay graphite ink in Inter italic with a 2px accent underline.

## Do's and Don'ts

### Do:
- **Do** take every colour from the tokens, with a dark value for each surface and accent colour.
- **Do** route every audience-coloured element through the one accent variable and its paired on-colour so the whole axis changes together.
- **Do** keep the homepage on one centred axis, and keep every action the sign offers available as a plain control.
- **Do** animate only transform and opacity with `--ease-out` (`cubic-bezier(.23,1,.32,1)`), 160 to 460ms; keep an opacity crossfade under reduced motion.
- **Do** stop the sign's render loop when it settles, after the 15s idle, off screen and in hidden tabs; drop the wave and overshoot under reduced motion.
- **Do** keep touch targets at 44px minimum and a 2px graphite ink focus ring on every control.
- **Do** keep Archivo inside the Archivo fence (homepage name, sign lines, "picked for" heading).

### Don't:
- **Don't** use box-shadows, glass, glow halos or decorative gradients to suggest depth.
- **Don't** hard-code an audience colour or white text on an accent; read the accent and on-accent variables.
- **Don't** paint a sign face with the accent fill; faces stay tints of their hue.
- **Don't** add a second rendered 3D object or let the stage grow past 880px wide.
- **Don't** use signal green for anything but the status dot.
