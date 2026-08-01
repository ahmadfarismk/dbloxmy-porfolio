# D'Blox — Roblox Game Development Studio

Premium marketing site built with **Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui + Framer Motion**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where to edit content

All copy and data live in [`content/`](content/) — no component changes needed:

| File | What it controls |
| --- | --- |
| `content/site.ts` | Site name, tagline, CTAs, nav links, socials, email |
| `content/services.ts` | "What We Build" cards |
| `content/projects.ts` | Featured project case studies + metrics |
| `content/testimonials.ts` | Testimonial quotes |
| `content/logos.ts` | Trusted-by marquee logos |
| `content/process.ts` | Development process steps |

## Adding real images

1. Drop files into `public/` (e.g. `public/projects/neon-city.jpg`, `public/logos/partner.svg`).
2. Set the `image` / `src` field in the matching `content/*.ts` file.
3. While those fields are `null`, styled placeholders render automatically.

The logo lives in `components/site/logo.tsx` — swap the icon for a real `<Image>` when ready.

## Project structure

```
app/            Layout, homepage, global styles + design tokens
components/
  ui/           shadcn/ui primitives (button, card, badge, skeleton, sheet…)
  motion/       Animation helpers (FadeIn, Marquee, NumberCounter, Magnetic…)
  site/         Navbar, footer, logo
  sections/     Homepage sections (hero, projects, testimonials…)
content/        ★ Editable site data (typed)
lib/            Utilities + data-access layer (swap in a CMS/API here)
legacy/         The previous Vite site, kept for reference
```
