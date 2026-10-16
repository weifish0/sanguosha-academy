# Sanguosha Academy · 三國殺英文教學

A mobile-first, English-first educational site for the **classic Sanguosha Identity Mode**, inspired by Chinese ink-and-parchment aesthetics.

## Features

- Classic identity rules and **six** turn phases
- **12** illustrated generals across Wei, Shu, Wu, and Qun
- **13** beginner-friendly card references with Chinese names
- Interactive Slash / Dodge scenarios and turn-phase walkthrough
- Ten-question quiz with instant explanations and a final score
- Responsive layouts, filterable/searchable catalogs, and accessible navigation

## Stack

Next.js 15 (App Router), TypeScript, React 19, Tailwind CSS 4 and bespoke responsive CSS, Lucide icons. No database, API keys, or authentication required.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Check with `npm run build`, `npm run lint`, `npm run typecheck`.

## Deploy

Import this repository into Vercel as a **Next.js** project. Set Root Directory to `./`, keep build command `next build`, and select `main` as production branch. No environment variables required. Git-connected Vercel projects redeploy automatically when you push to `main`.

## Content and illustrations

Characters, cards, turn phases, and quiz questions live in `src/data/content.ts` so you can add more without restructuring the UI. `public/images/characters/*` are original AI-generated historical-inspired illustrations. `public/images/hero.webp` is derived from an original AI-generated UI concept illustration.

English wording is adapted for teaching, not an official localization. Some rules and character abilities vary between editions; this project teaches a beginner-friendly base-set interpretation. Wine/Analeptic is **clearly marked as an optional expansion** and not part of the original base set.

This is an unofficial, independent educational project and is not affiliated with any game publisher. Game names and characters may be associated with their respective rights holders. No official game card art is included.
