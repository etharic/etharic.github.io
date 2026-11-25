---
name: Etharic
description: The personal site of ryan (suryanarayan); a quiet paper reading system whose homepage greets each audience in its own words over a soft drifting field of particles.
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
  gunmetal: "#5d6068"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "2.2rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  section-head:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)"
    fontWeight: 700
    letterSpacing: "-0.01em"
  intro:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 400
    lineHeight: 1.5
  intro-term:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.84em"
    fontWeight: 400
    letterSpacing: "-0.02em"
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
  tab:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
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
  toggle-on:
    backgroundColor: "{colors.graphite-ink}"
    textColor: "{colors.paper}"
    rounded: "6px"
    padding: "6px 16px"
  audience-tab:
    textColor: "{colors.soft-graphite}"
    typography: "{typography.tab}"
    padding: "4px 0"
  audience-tab-active:
    textColor: "{colors.graphite-ink}"
  cv-link:
    textColor: "{colors.burnt-amber}"
    height: "30px"
  cv-link-hover:
    textColor: "{colors.graphite-ink}"
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
    backgroundColor: "{colors.signal-green}"
---

# Design System: Etharic

## Overview

**Creative North Star: "A Quiet Desk with Dust in the Light"**

Etharic is one calm reading system: cool paper, graphite ink, hairline borders, Inter at reading sizes and flat surfaces on every route. The homepage keeps that desk and lets a little air move over it. A left-aligned column says "hey, i'm suryanarayan!", lets the visitor pick who they are from a row of plain text tabs, and answers in a large intro paragraph written for that reader. Behind the greeting a sparse field of tiny particles drifts in real 3D, most of them matte grey dots in the page's own soft tone and a few small chrome beads that catch the light. It is atmosphere, not an object: no frame, no colour, fading out at its edges.

The first screen is the greeting alone. The "currently in" line with its clock, green dot and pixel dog sits pinned to the bottom-left corner of that screen, and "get cv" in burnt amber to the bottom-right. Below the fold, "picked for <audience>" lists three hand-picked pieces of writing that follow the selected tab.

The voice is personal and playful (lowercase copy, code-like terms such as `this.essay` set in a mono face, a pixel dog, a live clock) while the surfaces stay restrained. Rejected: corporate polish, glossy neon 3D, glass, decorative gradients and glow halos.

**Key Characteristics:**
- Flat tonal surfaces with 1px hairlines; no elevation shadows.
- Graphite carries everything; burnt amber is the one action colour ("get cv"), signal green the one status colour.
- Inter for everything, with JetBrains Mono only for the code-like terms inside homepage intros.
- The audience choice changes words, not colours: the intro text and the picked cards swap, nothing is recoloured.
- The particle field is the one rendered effect: grey and chrome, slow, behind the text, paused when unseen, static under reduced motion.

## Colors

Cool, nearly neutral paper and graphite with one warm action colour. Every page surface has a light and a dark value; the dark keys (`*-dark`) apply under `:root[data-theme="dark"]`.

### Primary
- **Burnt Amber** (`burnt-amber`, `burnt-amber-dark`): the site's action colour. It sets "get cv" in the homepage's bottom-right corner, file icon included, and gives way to graphite ink on hover. Lamplit in dark theme.

### Neutral
- **Paper** (`paper`): page background on every route, including the fixed nav.
- **Card** (`card`): raised-by-tone surfaces: cards, buttons, inputs, the two-way toggle, picked-card image backing.
- **Graphite Ink** (`graphite-ink`): headings, the homepage intro, the active audience tab, selected states, focus rings.
- **Soft Graphite** (`soft-graphite`): secondary text, resting audience tabs, nav links at rest, captions, card meta, "more about me", the "currently in" line, intro-link underlines. It is also the colour of the matte particles, read live from the page so they follow the theme.
- **Hairline** (`hairline`): every 1px border and divider; also image placeholders and empty bars.
- **Hover Wash** (`hover-wash`): the background tint for hovered rows and cards.
- **Switch Track** (`switch-track`): the theme switch when off.
- **Gunmetal** (`gunmetal`): the tint of the chrome particles on light paper, where untinted chrome would vanish; in dark theme they are plain white chrome.

### Tertiary
- **Signal Green** (`signal-green`): status only: the "currently in" dot and the theme switch when on.

### Named Rules
**The Words-Not-Colours Rule.** Choosing an audience changes what the page says, never its palette. Tabs, intro and cards stay in graphite and soft graphite for every reader.

**The One Warm Thing Rule.** Burnt amber marks the single action a visitor might take from anywhere on the first screen ("get cv"). Nothing decorative is amber.

## Typography

**Display / Body Font:** Inter 300 to 700, with italic 400 (with system-ui, sans-serif)
**Mono Font:** JetBrains Mono 400 (with ui-monospace, SFMono-Regular, Menlo, Consolas), subset to lowercase letters and the dot

**Character:** Inter carries everything a visitor reads. JetBrains Mono appears only on the code-like terms inside the homepage intros, small and upright, so lines like "read this.essay or browse my.projects" read as a playful aside in code.

### Hierarchy
- **Display** (Inter 700, 3rem, 1.2, -0.02em; 2rem on phones): the homepage greeting "hey, i'm suryanarayan!". The parts of the full name around "ryan" and the closing "!" sit in soft graphite at 50% opacity.
- **Headline** (Inter 700, 2.2rem, 1.2, -0.02em): page titles on reading routes; 2rem on about and on phones.
- **Section Head** (Inter 700, `clamp(1.4rem, 2.2vw, 1.8rem)`, -0.01em): the homepage "picked for <audience>" heading; the audience name is bold in the same weight.
- **Intro** (Inter 400, 1.6rem, 1.5; 1.2rem on phones): the homepage audience paragraph, graphite ink.
- **Intro Term** (JetBrains Mono 400, 0.84em, -0.02em, upright): `this.essay`, `my.projects`, `a.coffee`, `this.model`, `this.deck`, `this.pitch`, `this.site`, `this.project`, `this.too`. Terms with a destination are links with a 1px soft graphite underline at a 5px offset that darkens to ink on hover; the rest are plain.
- **Tab** (Inter 400, 0.85rem): the audience tabs; the active one turns graphite ink at 600.
- **Title** (Inter 600, 1.05rem, 1.4): prose and chapter h2; homepage card titles use 1.02rem, 1.35.
- **Body** (Inter 400, 1rem, 1.6): default text; secondary text in soft graphite.
- **Reading** (Inter 400, 1.125rem, 1.65): about page and long-form prose, max 660px measure.
- **Label** (Inter 400, 0.75rem, 0.09em, uppercase): section labels on reading routes and the chapter rail head. Activity-card categories use 0.7rem, 0.08em.

### Named Rules
**The Mono Aside Rule.** JetBrains Mono is reserved for code-like terms inside running intro text. It never sets a heading, a control or a whole sentence.

**The Steady Width Rule.** A tab that turns bold must not push its neighbours: each tab reserves its bold width in advance, and the intro reserves the height of its longest text, so switching audiences never shifts the page.

## Layout

Every route, the homepage included, uses a single centred column (`max-width: 800px`, 20px side padding) under a fixed nav (30px vertical padding, 24px left, room on the right for the fixed theme switch). Prose caps at 660px; the about page at 760px with a 196px photo column. Work grids run 3 columns (gap 30px x 18px), 2 columns from 681 to 900px, 1 column at 680px and below.

The homepage hero is a left-aligned flex column filling the first screen (`min-height: calc(100vh - 60px)`, 60px top padding), its content centred vertically: greeting (8px above, 24px below), the tab row (20px gaps, 24px below), the intro, then "more about me →" aligned to the column's right edge. Two pieces are pinned to the corners of that first screen, outside the column: the "currently in" line 24px from the left and "get cv" 30px from the right, both 30px above the bottom of the viewport. The footer is hidden on the homepage. Below the fold, "picked for" (72px above, 40px below, heading 20px above the cards) holds three cards in a 3-column grid with 22px gaps.

At 680px and below the nav becomes static with a hairline under it, the greeting drops to 2rem and the intro to 1.2rem, the corner pieces return to the flow ("currently in" 16px below the column, "get cv" 32px below that), and the cards go to one column with 28px gaps (48px above the section).

Spacing rhythm is small and practical: 8 / 12 / 16 / 20 / 24 / 30px, with 64px before section labels.

## Elevation & Depth

Every page surface is flat. Surfaces separate by tone (paper vs card) and 1px hairlines; hover adds the hover wash or a 1 to 3px lift, never a shadow. The only CSS shadow is the theme switch knob (`0 1px 4px rgba(0,0,0,.35)`), a physical toggle detail.

The homepage particle field is the one rendered depth, and it is ambient. three.js r170 draws it on a transparent canvas placed around the greeting, tabs, intro and link with 120px of padding, under a radial mask that keeps the middle solid and fades the edges to nothing; it fades in over 800ms once ready. The field holds about one particle per 2400px² (60 to 420). About 86% are matte spheres (roughness .7) in the page's soft graphite, 1 to 1.9px; about 14% are chrome beads (metalness 1, roughness .08), 2.8 to 5.6px, white in dark theme and gunmetal-tinted on paper. They sit from 320px behind to 160px in front of the text plane, drift at 5 to 15px/s and wrap at the edges. The whole field eases toward the cursor while it is over the hero, nearer particles moving more than far ones. A soft room environment and one key light give the beads their highlights.

### Named Rules
**The Material Depth Rule.** If something looks raised, it is because it is rendered in 3D or has a lighter tone, not because it casts a box-shadow.

**The Atmosphere Rule.** The particles stay behind the text, small, grey or chrome, and masked at their edges. They never take an accent colour, never sit in front of a control, and the page reads fully without them.

## Shapes

Gently rounded: 10px on cards, photos, video frames and homepage card images; 8px on buttons, inputs, the two-way toggle and post thumbnails; 6px on thumbnails inside cards and on the selected toggle segment. Full pills only for the theme switch and dots. The particles are the only round forms on the homepage hero; everything else there is bare type.

## Components

### Buttons
Restrained, tonal, a little tactile.
- **Shape:** gently rounded (8px).
- **Default:** card fill, hairline border, graphite ink text, 8px x 16px, 0.85rem.
- **Hover (fine pointers):** inverts to graphite ink fill with paper text and lifts 1px. Press scales to 0.97.
- **Two-way toggle (blog "recent / notebooks"):** card track with hairline border and 3px padding; the selected side fills graphite ink with paper text (6px radius).

### Audience Tabs (signature)
Four plain text buttons in a row under the greeting: "for anyone", "recruiters", "finance professionals", "engineers".
- **Style:** no track, no fill, no underline; Inter 0.85rem soft graphite, 20px apart.
- **Active:** graphite ink at 600; each tab reserves its bold width so the row never shifts.
- **Hover:** previews that audience's intro while the pointer rests on the tab, and returns to the chosen one on leave; a click commits it.
- **Keyboard:** `role="tablist"` with roving focus; arrow keys, Home and End select and move focus. 2px graphite ink focus ring, 3px offset, 3px radius.
- **Change:** the intro crossfades over 200ms from 35% opacity and 3px blur (opacity only under reduced motion), and the picked cards and the audience name under "picked for" swap with it.

### Homepage Intro
A large paragraph that addresses the selected reader, with its code-like terms in JetBrains Mono (see Typography). Followed by "more about me →", a soft graphite underlined link at the column's right edge whose arrow nudges 3px right on hover.

### Corner Details (homepage)
- **Currently in** (bottom-left): "currently in frankfurt", the live clock, a 9px signal-green dot and the pixel dog, 0.95rem soft graphite, 8px apart.
- **Get cv** (bottom-right): burnt amber with a 16px file icon, 0.95rem, turning graphite ink on hover.

### Picked Cards
Three hand-picked pieces per audience under "picked for <audience>".
- **Image:** 4:3, 10px radius, hairline border, card fill behind; lifts 3px on hover (fine pointers, motion allowed).
- **Meta:** section name and reading time ("6 min read"), 0.8rem soft graphite.
- **Title:** Inter 600 1.02rem, graphite ink.
- No card chrome around the text; the image is the card.

### Cards / Containers
- **Corner Style:** 10px.
- **Background:** card, with a 1px hairline border; 12px padding.
- **Hover:** border to soft graphite and hover wash. Post thumbnails lift 2px.

### Inputs / Fields
- **Style:** card fill, hairline border, 8px radius, 8px x 12px, inherited type; placeholder in soft graphite.
- **Focus:** 2px graphite ink outline, 2px offset.

### Navigation
- **Style:** fixed top bar on paper; "Etharic" wordmark 600 1.1rem in graphite ink; route links 0.95rem in soft graphite with 16px line icons, the current route in graphite ink. Icons drop at 680px and below, and the nav becomes static with a hairline under it.
- **Theme switch:** 48 x 27px pill, switch-track when off and signal green when on, white 21px knob with faint sun and moon marks; the theme changes under a circular view-transition reveal.

### Inline Links
Underlined at 1px with 2 to 5px offset. In prose the underline sits in soft graphite and darkens to graphite ink on hover; homepage intro terms follow the same pattern in mono.

## Do's and Don'ts

### Do:
- **Do** take every colour from the tokens, with a dark value for each page surface.
- **Do** keep the homepage first screen to the greeting, the tabs, the intro and "more about me", with the "currently in" line and "get cv" pinned to its bottom corners.
- **Do** let the audience choice change words and picks, and keep the page's colours the same for every reader.
- **Do** reserve space for the longest intro and the bold tab width so switching audiences never shifts the layout.
- **Do** keep the particle field behind the text, masked at its edges, paused off screen and in hidden tabs, and static under reduced motion.
- **Do** animate only transform, opacity and filter with `--ease-out` (`cubic-bezier(.23,1,.32,1)`), 160 to 300ms; keep an opacity-only fallback under reduced motion.
- **Do** keep a 2px graphite ink focus ring on every control and full keyboard operation of the tabs.

### Don't:
- **Don't** use box-shadows, glass, glow halos or decorative gradients to suggest depth.
- **Don't** colour the particles or add a second rendered 3D effect.
- **Don't** use burnt amber for decoration or signal green for anything but status.
- **Don't** set headings, tabs or whole sentences in JetBrains Mono.
