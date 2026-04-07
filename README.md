# Saikiran Reddy Jakka - Professional Portfolio

> A dynamic, highly-optimized interactive portfolio highlighting work across Distributed Systems, Machine Learning, and scalable web infrastructures.

![Portfolio Preview Preview](https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4c59af8b-cc69-44cb-8e5c-aa7254212651.png)

## Overview

This repository hosts my minimalist, Apple-inspired personal portfolio. Designed from the ground up for maximum aesthetic appeal, interactive fluidity, and performance. The architecture revolves around clean monochrome palettes, tight typography, smooth physics-based Framer Motion animations, and custom glassmorphic canvas effects.

Check out the live website: [saikiranreddyj.github.io](https://saikiranreddyj.github.io)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (orchestrating precision-tuned spring physics)
- **Theming:** Custom Light/Dark mode transitions via `next-themes`
- **UI Architecture:** Tailor-made components mirroring high-end tech landing pages
- **Deployment:** GitHub Pages

## Key Design Principles

1. **Monochrome Dominance:** Eliminating garish colors to favor a strict, polished grayscale aesthetic (`#1d1d1f` and `#f5f5f7`) that emphasizes content over noise.
2. **Fluid Motion:** Interactions run through orchestrated easing curves (specifically `ease-[cubic-bezier(0.25,1,0.5,1)]`), matching native-app feel rather than standard web jumps.
3. **Responsive Glassmorphism:** Heavy use of `backdrop-blur` techniques mimicking modern OS-level material layering cleanly in both light and dark modes.

## Local Development

If you'd like to run a local instance of the portfolio:

```bash
# Clone the repository
git clone https://github.com/saikiranreddy2710/saikiranreddy2710.github.io.git
cd saikiranreddy2710.github.io

# Install dependencies
npm install

# Start the local development server (typically on http://localhost:3000)
npm run dev
```

## Structure & Architecture
- `src/components/sections/` — Holds the major cohesive layout blocks (`Hero`, `About`, `Skills`, `Experience`, `Projects`, `Contact`).
- `src/components/ui/` — Houses dynamic, globally impactful elements like the custom `AntiGravityCanvas` interactive background and gradient components.
- `src/app/` — Next.js specific routing, global providers, and SEO optimizations (`sitemap`, `robots`, structured OpenGraph layouts).

## SEO & Accessibility

- Automatically generates `sitemap.xml` and `robots.txt`
- Complete Next.js layout metadata compliant handling (OpenGraph injected directly in global scope)
- Fully ARIA-compliant component labeling (screenreader functional)

## License
MIT License
