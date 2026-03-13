# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal portfolio website built with React 18, TypeScript, and Vite. Single-page static site with scroll-driven animations, deployed to GitHub Pages.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # Production build (output: dist/)
npm run preview    # Preview production build locally
npm run lint       # ESLint
npm run deploy     # Build + deploy to GitHub Pages (gh-pages -d dist)
```

## Architecture

**Single-page app with no routing.** `App.tsx` renders all sections sequentially: HeroSection → About → Projects → Contact → Footer.

All content data (project cards, about slides) is hardcoded in component files — there is no backend or data fetching.

### Key Technologies
- **Vite** for build/dev tooling
- **Tailwind CSS** for styling, with custom theme colors and fonts in `tailwind.config.js`
- **Motion** (`motion` package) for scroll-driven animations and transitions
- **Rive** (`@rive-app/react-canvas`) for interactive hero animation (`public/vine.riv`)
- Google Fonts loaded in `index.html`: Darker Grotesque, Roboto, EB Garamond, Cormorant Upright

### Component Structure (`src/components/`)
- **HeroSection** — Rive animation background + profile photo + social links; scroll position drives Rive state machine
- **About** — Carousel of 4 slides synced to scroll position via `useScroll`
- **Projects** — Grid of project cards with hover animations
- **Contact** — Email CTA
- **Footer** — Social links
- **StaggeredMotion** — Reusable wrapper for staggered entrance animations using `useInView`
- **NavBar** — Exists but not currently rendered in App

### Custom Icons
`src/icons/` contains custom SVG icon components (ArrowLeft, GitHub, LinkedIn, Twitter, Medium).

### Tailwind Custom Theme
Custom colors: `primary` (#F1FCF1), `secondary` (#2C2929), `darkestMain`, `customBlue`, `customGreen`. Custom font families map to the Google Fonts loaded in `index.html`.
