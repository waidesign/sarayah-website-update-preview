# Project Context

## The business

Sarayah Phuket Villas operates two villas in Thalang District, Phuket:

- **2-Bedroom Pool Villa** — brand name "The Ultimate Refuge." Positioned as
  a "work-from-paradise" villa for couples and digital nomads.
- **4-Bedroom Villa** — brand name "The Grand Social Hub." Positioned for
  multi-generational travel and larger groups (sleeps ~12).

Guest contact is via WhatsApp concierge: `+66 82 565 1186` (used throughout
the site as `wa.me/66825651186`).

## Brand system ("Andaman Ethereal")

- **Colors**: deep green primary (`#003629`), warm cream background
  (`#fbf9f4`). Full token list lives in the `@theme` block of `src/index.css`
  — use those tokens (`bg-primary`, `text-on-surface`, `bg-surface-container-low`,
  etc.), don't hardcode hex values in components.
- **Type**: Noto Serif for headlines (often bold first line + italic light
  second line, e.g. "The Grand *Social Hub.*"), Manrope for body/labels.
- **Voice**: quiet-luxury, editorial. Short punchy headline, one supporting
  sentence, understated CTAs ("Book Now", not "Buy Now!!").

## Site architecture

This is a client-rendered React SPA (Vite + React Router), **not** Next.js —
that was an explicit, repeated user decision. See `project-history.md` for
why, and the SEO trade-off that comes with it.

```
src/
  components/   Shared layout (Header, Footer, MobileNav, WhatsAppFloat)
                and page-specific components (HeroSlider, BookingModal)
  pages/        One component per route
  App.jsx       Route definitions (React Router)
  index.css     Tailwind v4 theme (@theme block) + custom component CSS
public/assets/  Photos, villa videos ("viral reels"), real files (not a
                symlink — see project-history.md for why that matters)
```

### Current migration status

**Migration complete — all 30 pages are now built in React** (homepage +
29 ported pages, all routed in `App.jsx`). The project was originally a
30-page static HTML/Tailwind-CDN/vanilla-JS site, migrated incrementally:
homepage first as a proof of concept, then the remaining pages in one pass.
Several page types share a single data-driven template rather than being
hand-built per page:

```
src/pages/
  HomePage.jsx                (route: /)
  VillasPage.jsx              (route: /villas — listing/comparison)
  VillaDetailPage.jsx         (route: /villas/:slug — shared template,
                               data in src/data/villas.js, 2 villas)
  ExperiencesPage.jsx         (route: /experiences — hub)
  ExperienceDetailPage.jsx    (route: /experiences/:slug — shared template,
                               data in src/data/experiences.js, 6 experiences)
  BlogPage.jsx                (route: /blog — index)
  BlogPostPage.jsx            (route: /blog/:slug — shared template,
                               data in src/data/blog.js, 6 posts)
  PhuketPage.jsx               (route: /phuket — hub)
  PhuketArticlePage.jsx       (route: /phuket/:slug — shared template,
                               data in src/data/phuket.js, 4 articles)
  ContactPage.jsx, BookingPage.jsx, DealsPage.jsx, GalleryPage.jsx,
  ReviewsPage.jsx, SustainabilityPage.jsx   (one-off utility pages)
```

Two shared components support this: `src/components/PageHeader.jsx` (the
full-bleed image hero banner used at the top of most sub-pages) and
`src/components/FaqAccordion.jsx` (the click-to-expand FAQ list, also used
on the homepage — `HomePage.jsx`'s own FAQ section was refactored to use it
rather than keeping a duplicate copy of the same accordion logic).

**Content was not copied verbatim from the archive.** The static site had
real, documented problems — duplicate/near-duplicate copy across pages
(e.g. two blog posts and two `phuket/` pages arguing the same "Thalang beats
the south" thesis nearly word-for-word), two blog posts whose actual
`<title>`/canonical metadata didn't match their slug or the index page's
description of them, mismatched images (a "culinary" file used as a villa
exterior shot, a wellness-spa photo captioned "Gourmet Kitchen" in the old
gallery), two rotated/broken source photos
(`2-bedroom/IMG_8217.jpg`, `2-bedroom/IMG_8261.jpg` — both display sideways,
worth a real fix at the source), a factual conflict between `contact/`'s FAQ
("complimentary airport transfers for all direct bookings") and
`experiences/taxi-transfers`'s paid rate table (800–1,200 THB), and a
non-functional Formspree placeholder on the contact form. These were
resolved during the port rather than carried forward — see
`project-history.md` for the specific decisions.

**Known placeholder, by explicit user decision**: `/booking` does not embed
a real Hostex widget. The archived site had one (`<hostex-booking-widget
listing-id="114465">` / `"114466"`, with a real, non-placeholder host ID),
but the React version shows a styled "check availability" page that reads
the `checkIn`/`checkOut`/`guests` query params `BookingModal` already sends
and hands off to WhatsApp/the villa detail pages instead. Revisit this if/when
a real Hostex (or other) booking integration is decided on.

The original static site remains preserved (not deleted) in a sibling
folder: `../stitch_sarayah_phuket_villa_rentals_archived-static-site/` — it's
still useful as a historical reference for exact original wording if needed.

### Third-party integrations

- **Hostex** — the original site embedded a `<hostex-search-widget>` custom
  element (booking availability search / property management). Not yet
  wired into the React version; the current `BookingModal` component is a
  placeholder quick-booking form that navigates to `/booking` with query
  params, pending a real integration decision.
- **Agentation** (dev-only) — a legitimate visual-feedback annotation tool
  for AI coding agents, mounted in `App.jsx` behind `import.meta.env.DEV`.
  Its purpose was independently verified (see `project-history.md`) after it
  appeared unexplained in `package.json` more than once.
