---
name: Etharic
description: The personal site of ryan (suryanarayan); a quiet paper reading system, with one split-flap board on the homepage that flips each audience's opening line into place.
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
  board-anyone: "#1d1e22"
  board-anyone-dark: "#f2f2f1"
  board-recruiters: "#2a5fc4"
  board-recruiters-dark: "#8fb4ff"
  board-finance: "#8a5a00"
  board-finance-dark: "#f2b93b"
  board-engineers: "#1a7a4f"
  board-engineers-dark: "#5fd39a"
  board-tile: "#fbfbfa"
  board-tile-dark: "#232325"
  board-split: "rgba(29,30,34,.10)"
  board-split-dark: "rgba(0,0,0,.55)"
typography:
  display:
    fontFamily: "Archivo, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, min(4.6vw, 7.2vh), 4.2rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  board-glyph:
    fontFamily: "Archivo, Inter, system-ui, sans-serif"
    fontWeight: 600
    lineHeight: 1
    fontVariation: "'wdth' 112.5"
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
    fontSize: "clamp(1rem, min(1.4vw, 2.2vh), 1.22rem)"
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
  picks-cue:
    textColor: "{colors.soft-graphite}"
    height: "40px"
  board-tile:
    backgroundColor: "{colors.board-tile}"
    textColor: "{colors.board-recruiters}"
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

Etharic is one system with two registers. Every reading route (work, articles, about, 2026, contact) is a quiet desk: cool paper, graphite ink, hairline borders, Inter at reading sizes, flat surfaces. The homepage sets a single object on that desk: a split-flap board, a grid of matte hinged tiles in the page's own tone, seen straight on like a departures board set into the desk. It shows the opening of the chosen audience's own sentence ("i'm a finance student") in Archivo glyphs; the intro directly under the board finishes the sentence. Choosing an audience makes every tile flip through its drum to the new character, and the characters take that audience's colour as they land.

The homepage hero is exactly one screen, one centred vertical axis: name, "who's reading?" and the audience switch, the board, the intro, one audience-specific action plus "more about me", and a small "essays picked for you" cue. Below the fold sit only the "picked for" heading, three hand-picked pieces of writing and a closing row. The audience is the only variable. Selecting one recolours the switch indicator, the primary action, the intro underlines and the "picked for" underline together, and flips the board, so the whole axis shifts at once.

The voice is personal and playful (lowercase copy, code-like intro lines, a pixel dog, a live clock) but the surfaces are restrained. The board is the one rendered object and it is kept quiet: matte tiles in the page's tone with nothing built around them; everything else is flat. Rejected: corporate polish, glossy neon 3D, glass, decorative gradients and glow halos.

**Key Characteristics:**
- Flat tonal surfaces with 1px hairlines; no elevation shadows anywhere, the board included.
- One audience accent live at a time on the homepage, carried by a single variable with its own on-colour.
- Inter for everything readable; Archivo expanded only for the homepage name, the board's glyphs and the "picked for" heading.
- The hero is one screen on a single centred column; the board is decorative and its text is also in the page as plain text.
- Motion is short and ease-out; the board flips fast with a gravity fall, staggered across the grid, then stops rendering; reduced motion changes the characters at once.

## Colors

Cool, nearly neutral paper and graphite; on the homepage, one audience accent at a time and one board in the page's own tone whose characters wear that audience's colour. Every page surface and accent colour has a light and a dark value; the dark keys (`*-dark`) apply under `:root[data-theme="dark"]`.

### Primary
- **Audience Accent** (`acc-anyone`, `acc-recruiters`, `acc-finance`, `acc-engineers`): Graphite, Signal Blue, Marigold and Jade. Exactly one is live at a time, set on the app root by `data-aud` and read everywhere as one variable. It fills the switch indicator and the primary action, and draws the 2px underline under intro links and the 3px underline under the audience name in "picked for".
- **On-Accent** (`on-anyone`, `on-recruiters`, `on-finance`, `on-engineers`): text on an accent fill, paired per audience. White on graphite and blue; graphite ink on marigold and jade, because those two are too light for white. In dark theme every on-colour is near-black (`on-acc-dark`).

### Secondary
- **Board Characters** (`board-anyone`, `board-recruiters`, `board-finance`, `board-engineers`, each with a `-dark` key): Graphite, Deep Blue, Umber and Forest on light tiles; Night Ink, Sky, Marigold and Mint on dark tiles. The glyph colour per audience and theme, one glyph atlas each; a text-safe member of the audience's hue, darker than the accent on light tiles and lighter on dark ones. Used only inside the WebGL scene.
- **Board Tile / Split** (`board-tile`, `board-split`, with `-dark` keys): every tile face takes the page's own tone, near-white in light and near-black in dark, crossed at its middle by a faint split line, the hinge between the two halves.

### Neutral
- **Paper** (`paper`): page background on every route, including the fixed nav.
- **Card** (`card`): raised-by-tone surfaces: cards, buttons, inputs, segmented controls and the audience switch track.
- **Graphite Ink** (`graphite-ink`): headings, body text in prose and intros, selected states, focus rings, and "get cv" on the homepage closing row.
- **Soft Graphite** (`soft-graphite`): secondary text, nav links at rest, captions, card meta, the "who's reading?" question, the picks cue, the closing row.
- **Hairline** (`hairline`): every 1px border and divider; also image placeholders and empty bars.
- **Hover Wash** (`hover-wash`): the background tint for hovered rows and cards.
- **Switch Track / Switch On** (`switch-track`, `switch-on`): the theme switch, off and on. Both neutral greys; the switch does not use colour.
- **Signal Green** (`signal-green`): the "currently in" status dot. Nothing else.
- **Burnt Amber** (`burnt-amber`): the site's reserved action colour, defined on `:root` for both themes. No rendered element carries it at present.

### Named Rules
**The One Voice Rule.** One audience accent is live at a time, and every accent-bearing element reads it through the shared variable, never a fixed audience colour. If an element should not change with the audience, it is not accent-coloured.

**The Paired Ink Rule.** An accent fill always takes the on-colour paired with it, never a fixed white. Light accents (marigold, jade) carry graphite ink.

**The Ink-Only Board Rule.** The audience reaches the board through its characters alone. Tiles and split line stay in the page's neutral tone for every audience; the accent fill never paints a tile.

## Typography

**Display Font:** Archivo, width axis at 112 (with Inter, system-ui fallback), subset to the characters the homepage name, the board and the "picked for" heading use
**Body Font:** Inter 300 to 700, with italic 400 (with system-ui, sans-serif)

**Character:** Inter carries everything a visitor reads. Archivo expanded gives the homepage name, the board's glyphs and the "picked for" heading a broad, drafted mass. Code-like terms in the intros ("this.essay") are simply Inter italic.

### Hierarchy
- **Display** (Archivo 700, width 112, `clamp(2.1rem, min(4.6vw, 7.2vh), 4.2rem)`, line-height 1.02): homepage name only, balanced, centred; it also shrinks with viewport height so the hero fits one screen. The faded part of "suryanarayan" sits in soft graphite at 50% opacity; on phones the name drops to its own line.
- **Board Glyph** (Archivo 600, semi-expanded): one character per tile, centred, its size 58% of the tile height, drawn on the tile in the audience's board colour for the theme.
- **Headline** (Inter 700, 2.2rem, 1.2, -0.02em): page titles on reading routes; 2rem on about and on phones.
- **Section Head** (Archivo 700, width 112, `clamp(1.4rem, 2.2vw, 1.8rem)`, -0.01em): the homepage "picked for" heading; the audience name inside it carries a 3px accent underline, 6px offset.
- **Intro** (Inter 400, `clamp(1rem, min(1.4vw, 2.2vh), 1.22rem)`, 1.6): the homepage audience panel, max 40rem, graphite ink.
- **Intro Term** (Inter italic 400): code-like terms inside intros; linked terms add a 2px accent underline, 4px offset.
- **Title** (Inter 600, 1.05rem, 1.4): prose and chapter h2; homepage card titles use 1.02rem, 1.35.
- **Body** (Inter 400, 1rem, 1.6): default text; secondary text in soft graphite.
- **Reading** (Inter 400, 1.125rem, 1.65): about page and long-form prose, max 660px measure.
- **Label** (Inter 400, 0.75rem, 0.09em, uppercase): section labels on reading routes and the chapter rail head. Tile categories use 0.7rem, 0.08em.

### Named Rules
**The Archivo Fence Rule.** Archivo appears only on the homepage name, the board's glyphs and the homepage "picked for" heading. Any other text, including the intro, the switch, the picks cue and the cards, is Inter.

**The Split Sentence Rule.** The board shows only the lead of the audience's sentence and the intro continues it; the lead also stays in the intro as plain text, visually hidden while the board runs, so the sentence is whole for screen readers and without WebGL.

## Layout

Reading routes use a single centered column (`max-width: 800px`, 20px side padding) under a fixed nav (30px vertical padding, 24px left, room on the right for the fixed theme switch). Prose caps at 660px; the about page at 760px with a 196px photo column. Work grids run 3 columns (gap 30px x 18px), 2 columns from 681 to 900px, 1 column at 680px and below.

The homepage widens the column to 1120px. The hero is exactly one screen (`100svh`, minimum 600px), its content centred vertically on one centred axis, text centred, with `clamp(92px, 11vh, 108px)` above for the nav. Order: name; "who's reading?" (`clamp(12px, 2.6vh, 26px)` above, 10px below) and the audience switch; the board stage, `min(100%, 980px)` wide, which flexes to take whatever height remains (minimum 110px, maximum `min(380px, (min(100vw, 1120px) - 48px) / 3.4)`); the panel (intro, max 40rem, then the primary action and "more about me" in a row, 10px x 24px gap); and the "essays picked for you" cue at the bottom. Vertical gaps inside the hero scale with viewport height so it always fits. The cue scrolls to the picks, the only content below the fold: the "picked for" section (48px top, heading 20px above the cards) with three cards in a 3-column grid (22px gap), then the closing row 64px below, a hairline on top, city, clock, dot and dog on the left and "get cv" on the right. Without WebGL the stage collapses to 12px and the page reads as type alone. On wider screens the panel is held at the height of its tallest audience text so switching never shifts the page. Below 560px of height the hero stops being a fixed screen and the stage takes 160px.

At 680px and below the hero is `calc(100svh - 61px)` (minimum 560px) under the static nav, the stage bleeds to the screen edges (minimum 150px, maximum `100vw / 1.85`), switch segments tighten to 11px side padding at 0.85rem, the panel takes its own height, and the cards go to one column with 28px gaps (36px above the section).

Spacing rhythm is small and practical: 8 / 12 / 16 / 20 / 24 / 30px, with 64px before section labels and the closing row.

## Elevation & Depth

Every page surface is flat. Surfaces separate by tone (paper vs card) and 1px hairlines; hover adds the hover wash or a 1 to 3px lift, never a shadow. The only CSS shadow is the theme switch knob (`0 1px 4px rgba(0,0,0,.35)`), a physical toggle detail.

The homepage board is the one real 3D object, rendered with WebGL (three.js r170) on a transparent canvas, and it is kept quiet. It is a grid of tiles, 2 rows x 18 columns on desktop and 4 x 12 on canvases narrower than 560px, each tile 0.26 x 0.38 world units with gaps of .03 across and .05 down, seen straight on through a 22° lens that fits the grid plus a small margin to the stage. Every tile is three parts: a fixed top half, a fixed bottom half and a hinged flap between them whose front carries the current top half and whose back carries the next bottom half. Faces are matte (roughness .85) and self-lit: the glyph atlas is also the emissive map (intensity .45 light, .72 dark), so tile and character colours stay true. A soft overhead key light (.6 light, .35 dark) and a low room environment (.5 / .25) only shade a flap as it turns away while falling; that is the board's whole depth. No tone mapping; sRGB output. Dark theme repaints the atlas with the dark tile, split and inks.

### Named Rules
**The Material Depth Rule.** If something looks raised, it is because it is rendered in 3D or has a lighter tone, not because it casts a box-shadow.

**The Night Flip Rule.** In dark theme each accent lightens and the text on it flips to near-black; the board follows the page into night, its tiles darkening and its characters lightening.

**The Unstaged Board Rule.** The board sits straight on, in the page's own tone, with nothing built around or behind it; its only depth comes from flaps turning as they fall. If it reads weakly, fix the tile or the ink, never add staging.

## Shapes

Gently rounded on reading routes: 10px on cards, photos, video frames and homepage card images; 8px on buttons, inputs, segmented controls and post thumbnails; 6px on thumbnails inside cards. The homepage's interactive pieces are full pills (999px): the audience switch, its sliding indicator and the primary action. Pills otherwise only for the theme switch and dots.

The board is the one strict grid on the site: a wide rectangle of small upright tiles with slightly rounded corners, each split across the middle, set straight onto the page with nothing around it.

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

### The Board (signature)
Decorative (`aria-hidden`) and optional: it loads after the page is usable, fades in over 700ms, and the page works without it.
- **Text:** each audience's lead, the opening of its own intro sentence: "i'm a lifehacker", "i'm a finance student", "i'm→ NPV > 0, {aspiring_analyst}", "i'm {highly_technical}". Long words break after "_"; short phrases are balanced over the rows, centred in each row and centred vertically on the board.
- **Flip:** selecting an audience sends each tile through a fixed drum order toward its new character, at most 8 flaps. Each flap falls from 0 to 180° with a gravity ease (progress squared) over 120ms, 12ms between flaps. Tiles start 34ms apart per column and 110ms apart per row, so the change sweeps across and down. Characters take the new audience's colour as each flap lands; a tile already showing the right letter gets one flap to repaint it, and blanks stay put.
- **Arrival:** on every page load the board flips in from blank after 450ms; returning to the homepage inside the site shows the line directly.
- **Pointer:** a mouse adds a barely-there parallax toward the pointer, about ±1.5°. Nothing else is interactive on it.
- **Reduced motion:** the characters change at once, with no flaps and no parallax.
- The render loop stops when everything has settled, and pauses off screen and in hidden tabs.

### Picks Cue (homepage)
"essays picked for you" with a down chevron, at the bottom of the hero: a plain button, Inter 0.85rem in soft graphite, 40px tall, darkening to graphite ink on hover. It scrolls to the picks (instantly under reduced motion).

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
- **Do** take every colour from the tokens, with a dark value for each page surface and accent colour.
- **Do** route every audience-coloured element through the one accent variable and its paired on-colour so the whole axis changes together.
- **Do** keep the homepage hero to one screen on one centred axis, with the picks as the only content below the fold.
- **Do** keep the board's text in the page as plain text, so nothing it shows exists only in WebGL.
- **Do** animate only transform and opacity with `--ease-out` (`cubic-bezier(.23,1,.32,1)`), 160 to 460ms; keep an opacity crossfade under reduced motion.
- **Do** stop the board's render loop when it settles, off screen and in hidden tabs; change characters at once under reduced motion.
- **Do** keep touch targets at 44px minimum and a 2px graphite ink focus ring on every control.
- **Do** keep Archivo inside the Archivo fence (homepage name, board glyphs, "picked for" heading).

### Don't:
- **Don't** use box-shadows, glass, glow halos or decorative gradients to suggest depth.
- **Don't** hard-code an audience colour or white text on an accent; read the accent and on-accent variables.
- **Don't** colour the board's tiles by audience; only the characters change colour.
- **Don't** frame, angle or stage the board; depth comes only from its moving flaps.
- **Don't** add a second rendered 3D object or let the stage grow past 980px wide or 380px tall.
- **Don't** use signal green for anything but the status dot.
