# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Four audiences, weighted equally (confirmed): anyone curious, recruiters, finance professionals, and engineers. Each arrives at the homepage cold, usually from a link, and needs to understand within seconds who Ryan is and where to go next (essays, projects, CV, about).

## Product Purpose

etharic.com is the personal site of Suryanarayan ("ryan"), a finance student in Frankfurt with an electrical-engineering background. It hosts researched essays (macro & markets, company analyses), write-ups of tools he builds (Clearline, HabitKit), a yearly page, an about page and a CV. Success: a visitor from any of the four audiences finds the part of the site written for them and reads on.

## Positioning

One person standing between finance and engineering, writing well-researched essays without AI help and building his own tools. The homepage speaks differently to each audience through the audience switcher; that mechanism is the site's own.

## Operating Context

Static single-page site on GitHub Pages (custom domain etharic.com), hash routing, one `index.html` with inline CSS/JS. Articles are Markdown files in `_articles/` with front matter (title, date, section, image, draft), edited by the owner in Pages CMS (`.pages.yml`); GitHub Pages' Jekyll build publishes each as `/a/<id>.html` and lists them in `/articles/index.json`, with sections in `_data/sections.yml`. Visitors on desktop and iPhone; light and dark themes with a toggle.

## Capabilities and Constraints

- Homepage must keep: the audience switcher (four tabs, four intro texts), the name reveal ("hey, i'm ryan" inside the faded full name "suryanarayan"), and the footer details (currently in frankfurt, live clock, pixel dog, get cv).
- Must stay fast and light on phones; no heavy downloads or battery drain (confirmed).
- Must keep keyboard access, reduced-motion support and WCAG AA contrast already in place.
- Clearline SideStore files in the repo (`*.ipa`, `clearline-source.json`, `clearline-thumbnail.png`) belong to another project and are not touched.
- Placeholder content (contact email, 2026 goals and posts, subscribe form) stays as is for now (confirmed).

## Brand Commitments

- Name "Etharic" (wordmark top-left) and the person's name "ryan" / "suryanarayan".
- A personal, playful voice; the result must not feel corporate (confirmed).
- Lowercase copy is current practice but was not marked as binding.

## Evidence on Hand

- About photo: `etharic-about-photo.jpg`; CV: `cv.pdf`.
- 14 published essays with thumbnails (`*-thumbnail.webp`), six section stickers (`*-sticker.webp`).
- No testimonials, employers, metrics or press: none may be invented.

## Product Principles

1. Speak to each audience in its own language; the switcher is the core idea.
2. The person and the writing lead; decoration never outranks them.
3. Personal over corporate: playful details are part of the identity.
4. Light on the device: every effect must earn its bytes and battery.
5. No generic AI-portfolio look: no stock gradients, glass cards or neon glow.

## Accessibility & Inclusion

WCAG AA contrast, full keyboard operation of the switcher, and `prefers-reduced-motion` alternatives (in place since the November 2026 audit).
