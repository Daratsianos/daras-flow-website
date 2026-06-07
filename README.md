# Daras Flow — website

Marketing site for [Daras Flow](https://darasflow.com), the independent software
studio of Panos Daratsianos. It showcases the studio's apps, the founder's
"artisan / soul-in-the-game" approach, and a light workflow-consulting offer.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- Plain CSS with custom properties in [`src/app/globals.css`](src/app/globals.css) (no CSS framework)
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
    layout.tsx           # root layout, site-wide metadata, header/footer
    page.tsx             # home (hero, app showcase, methodology, consulting) + JSON-LD
    apps/                # /apps
    about/               # /about
    vibe-coding/         # /vibe-coding
    privacy/             # /privacy
    opengraph-image.tsx  # dynamic OG image (also re-used for twitter-image.tsx)
    sitemap.ts           # generated sitemap.xml
    robots.ts            # generated robots.txt
    globals.css          # design system + component styles
  components/
    Header.tsx
    PareGalaCard.tsx     # "Pare Gala" grocery app card (with QR share)
    HonestCalCard.tsx    # "HonestCal" calorie app card
```

## Featured apps

- **Pare Gala** — shared real-time grocery list ([paregala.com](https://paregala.com))
- **HonestCal** — AI-assisted calorie logging ([honestcal.com](https://honestcal.com))

## Deployment

Optimized for [Vercel](https://vercel.com). `metadataBase` is set to
`https://darasflow.com` in [`src/app/layout.tsx`](src/app/layout.tsx); update it
if the production domain changes.
