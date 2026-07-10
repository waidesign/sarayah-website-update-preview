# Sarayah Phuket Villas — Project Instructions

React (Vite + React Router + Tailwind v4) site for Sarayah Phuket Villas, a
luxury private-pool villa rental business in Thalang District, Phuket.

**Before making non-trivial changes, read `ai-brain/`** — it's the project's
working knowledge base and has caught real, repeat bugs on this codebase.
Start with `ai-brain/README.md`. In particular:

- `ai-brain/context.md` — business context, brand system, and the current
  migration status (only the homepage is built in React so far; ~29 pages
  from the original static site are not yet ported — see below)
- `ai-brain/rules.md` — coding conventions, and two load-bearing technical
  gotchas: the pillarboxed villa videos (any non-9:16 crop needs a specific
  technique or it'll show black bars) and the bottom-right corner being
  permanently occupied by a WhatsApp float + dev-only Agentation toolbar
- `ai-brain/playbook.md` — how to run the dev server, add a page, and verify
  a UI change actually works (this project has no interactive browser here;
  verification is via headless Playwright screenshots + bounding-box checks)
- `ai-brain/project-history.md` — why several things that might look like
  mistakes are deliberate (read this before "fixing" something odd)
- `ai-brain/prompts/` — checklists for code generation, review, debugging,
  and SEO

## Quick facts

- `npm run dev` → `http://localhost:3000`
- Plain JS/JSX, no TypeScript
- Design tokens live in the `@theme` block of `src/index.css` — use the
  Tailwind utilities they generate, don't hardcode colors/fonts
- The original 30-page static site is archived (not deleted) at
  `../stitch_sarayah_phuket_villa_rentals_archived-static-site/` — the
  source of truth when porting a not-yet-migrated page
- This is deliberately a client-rendered SPA, not Next.js — that was an
  explicit, repeated decision with a known SEO trade-off (see
  `ai-brain/prompts/seo.md`); don't re-propose Next.js unprompted
