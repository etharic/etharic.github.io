---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief: etharic.com homepage (hero route "")

Scope: the homepage only (route `""` in index.html). Every other route keeps the incumbent system. Mode: Persuade. Build path: code-led.

Audience: four equal audiences (anyone, recruiters, finance, engineers). Must keep: audience switcher, name reveal, city/clock/dog, get cv. Must avoid: corporate, slow or heavy, generic AI look, and (user feedback 2026-11-25) split layouts that pull the eye in several directions.

History: a porcelain cube with engraved icons followed and was sent back by the finish review as a generic die. Before it, the "Mainhattan Maquette" direction (CSS-3D towers beside the copy) shipped in 34e02ec and was rejected by the user: no single focus, intro change unnoticed, towers read as a block diagram, poor theme colours, weak 3D. Replaced by the direction below.

## Direction contract

THESIS: One person, four faces. A rotating slat sign (a trivision) in real WebGL sits under the name and the audience question; each of its four faces carries a line quoted from that audience's own intro. Choosing an audience turns the slats in a wave to that face, and the intro directly under the sign, the button, the control and the link underlines take that audience's colour in the same moment. It refuses the split hero and the decorative floating object: the sign is the answer to the question above it.

OWN-WORLD: Calm paper ground (the site's --bg), graphite ink, Archivo expanded for the name, the sign lines and section heads, Inter for reading. Four audience accents (ink, blue, gold, green) as fills with their own on-colours, light and dark; four sign face palettes. Matte printed slats between light rails (light #cfcac0 / dark #55565c), studio light, contact shadow. No glass, no glow, no gradients.

STORY: Name, then the object, then "who's reading?" and the four-way control, then the intro written for that reader, then one primary action for that reader (essay, CV, latest analysis, what I built), then "picked for <audience>" leading into three curated pieces with reading times, then a human closing line (Frankfurt, live clock, dog, get cv).

FIRST VIEWPORT: One centred vertical axis: name (up to 4.2rem); "who's reading?" and the four-way control; the sign stage (880px wide, 2.75:1; full-bleed 2.2:1 on phones); the intro directly under the sign; the primary button and "more about me"; the "picked for" heading at the fold, its first card peeking on phones.

FORM: User-directed redesign after the user rejected the rolled maquette (seed:d1d84b17285aba91); no new roll was run, and no user words pin this world, so the sign stands on the finish reviews rather than on a pin. Signature interaction: choosing an audience turns the slats in a staggered wave; dragging the sign turns it and snaps to a face, selecting that audience. Motion grammar: one fade-in of the sign on load, the wave turn with a small overshoot on selection, blur-rise swap of the intro and cards, idle bob for 20s then rest; reduced motion keeps fades only.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
