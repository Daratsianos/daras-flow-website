# Daras Flow — website

Marketing site for [Daras Flow](https://www.darasflow.com), the workflow improvement
practice of Panos Daratsianos. The site positions Daras Flow as a process and
workflow practice that can also build the missing piece of software when
building is the right intervention. It carries one flagship case study (Card
Sorter), a diagnostic "sound familiar?" section, and a secondary Lab of small
apps.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- Plain CSS with custom properties in [`src/app/globals.css`](src/app/globals.css) (no CSS framework)
- Fonts via `next/font`: Fraunces (display), Geist (body), Geist Mono (labels)
- [Vercel Analytics](https://vercel.com/analytics)

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint
```

> Requires a Next.js 16-supported Node version (`^20.19 || ^22.13 || >=24`).

## Structure

```
src/
  app/
    layout.tsx           # root layout, fonts, site-wide metadata, header/footer
    page.tsx             # home: hero, approach, case study, situations, why me, lab, about, contact
    lab/                 # /lab  (Card Sorter, Pare Gala, HonestCal, Chroma + how they get built)
    about/               # /about
    contact/             # /contact
    privacy/             # /privacy
    opengraph-image.tsx  # dynamic OG image (re-used for twitter-image.tsx); uses fonts/Fraunces-500.ttf
    icon.png             # favicon (the brand mark)
    sitemap.ts           # generated sitemap.xml
    robots.ts            # generated robots.txt
    globals.css          # design system + component styles
  components/
    Header.tsx           # nav: Case study, Approach, Lab, About, Contact (mobile toggle)
    Footer.tsx
    BrandMark.tsx        # the Daras Flow mark as inline SVG
    FlowDrawing.tsx      # hero drawing: tangled workflow resolving into a clean line
    CardSorterCase.tsx   # flagship case study section
    ContactForm.tsx      # Formspree-backed contact form
    GooglePlayBadge.tsx  # official Google Play store badge
  lib/
    apps.ts              # Lab app data (names, links, stories) shared by pages and JSON-LD
```

`/apps` and `/vibe-coding` from the previous version of the site redirect
permanently to `/lab` (see [`next.config.ts`](next.config.ts)).

## Apps in the Lab

- **Card Sorter** — business credit-card statements into bookkeeping-ready data ([Try the beta](https://card-sorter-one.vercel.app)); also the home page case study
- **Pare Gala** — shared real-time grocery list ([website](https://paregala.com), [Get it on Google Play](https://play.google.com/store/apps/details?id=app.paregala.twa))
- **HonestCal** — calorie and macro estimates with confidence levels ([website](https://honestcal.com), [Get it on Google Play](https://play.google.com/store/apps/details?id=com.honestcal.app))
- **Chroma** — paint-by-number game ([Try the beta](https://chroma-game-beta.vercel.app))

## Deployment

Optimized for [Vercel](https://vercel.com). `metadataBase` is set to
`https://www.darasflow.com` in [`src/app/layout.tsx`](src/app/layout.tsx); update it
if the production domain changes.
