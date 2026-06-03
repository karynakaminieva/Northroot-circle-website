# Northroot Circle

> An invitation-only investment community for considered investors.

A production-ready **Next.js 15** + **TypeScript** + **Tailwind CSS** conversion of the Northroot Circle landing page, ready to deploy on Vercel.

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 + CSS custom properties |
| Fonts | Google Fonts (Alumni Sans SC, Fraunces, Inter) |
| Deployment | Vercel (zero-config) |

---

## Getting started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project structure

```
src/
├── app/
│   ├── globals.css        # Design tokens + Tailwind layers
│   ├── layout.tsx         # Root layout + SEO metadata
│   └── page.tsx           # Main page (all state lives here)
├── components/
│   ├── ui/
│   │   ├── Button.tsx     # Reusable button
│   │   └── Logo.tsx       # SVG logo mark
│   ├── sections/
│   │   ├── Header.tsx     # Sticky nav
│   │   ├── Hero.tsx       # Full-screen hero
│   │   ├── Intro.tsx      # About section
│   │   ├── FeatureGrid.tsx# Features (rows or cards variant)
│   │   ├── Editorial.tsx  # Testimonials on dark bg
│   │   ├── Membership.tsx # 3-tier membership cards
│   │   ├── HowItWorks.tsx # Process steps
│   │   ├── Community.tsx  # Stats + community info
│   │   ├── Journal.tsx    # Featured article + list
│   │   ├── FinalCTA.tsx   # Dark CTA band
│   │   └── Footer.tsx     # Newsletter + nav footer
│   └── overlays/
│       ├── MenuOverlay.tsx      # Mobile/full nav drawer
│       ├── ApplicationFlow.tsx  # Multi-step apply form
│       ├── Onboarding.tsx       # Post-apply confirmation
│       └── ArticleReader.tsx    # Slide-in article reader
└── lib/
    ├── data.ts            # All content / copy
    └── useReveal.ts       # IntersectionObserver scroll hook
```

---

## Deploying to Vercel

1. Push this repo to GitHub / GitLab / Bitbucket
2. Go to [vercel.com](https://vercel.com) → New Project → import your repo
3. Vercel auto-detects Next.js — click **Deploy**
4. Your site is live in ~60 seconds

No environment variables required for the base site.

---

## Design tokens

All brand colours, typography, spacing, and motion values live in two places:

- `src/app/globals.css` — CSS custom properties (`--nr-*`)
- `tailwind.config.ts` — Tailwind theme extensions matching the same values

The colour palette is defined once and referenced everywhere, making rebranding a single-file change.

---

## Customising content

All copy, articles, membership tiers, testimonials, and navigation items are in **`src/lib/data.ts`**. Edit that file to update content without touching any component code.

---

## License

Proprietary. All rights reserved by Northroot Circle.
