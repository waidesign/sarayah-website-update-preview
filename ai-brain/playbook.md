# Playbook — Common Tasks

## Run the dev server

```
npm install   # first time only
npm run dev
```

Opens at `http://localhost:3000` (port is set in `vite.config.js`, not the
Vite default of 5173 — changed deliberately per a user request).

## Add a new page/route

1. Create `src/pages/YourPage.jsx` — a plain component, no special
   boilerplate required (it will render inside `Layout`, so don't re-render
   `Header`/`Footer` yourself).
2. Add a `<Route>` for it in `src/App.jsx`, inside the existing
   `<Route element={<Layout />}>` block so it gets the shared nav/footer.
3. If porting content from the archived static site
   (`../stitch_sarayah_phuket_villa_rentals_archived-static-site/<page>/index.html`),
   convert `href="./x/index.html"` → `<Link to="/x">`, and
   `src="./assets/..."` → `/assets/...` (absolute, since `public/assets` is
   served from the root). **Read the archived HTML critically, don't copy it
   verbatim** — the archive has real, confirmed content bugs (duplicate
   copy across pages, mismatched images, a couple of pages whose actual
   `<title>`/canonical tags don't match their slug, at least two source
   photos that are rotated 90° — see `project-history.md`'s "The full
   29-page migration" entry for the specific list found so far).

### Adding content to an already-templated section (villas/experiences/blog/phuket)

Villa details, experience details, blog posts, and Phuket articles are each
one shared page component driven by a data file — **don't create a new page
file for a new entry in these categories**, add a new object to the
matching file instead:

- New villa → `src/data/villas.js`, keyed by slug, rendered by
  `VillaDetailPage.jsx`
- New experience → `src/data/experiences.js` + `ExperienceDetailPage.jsx`
- New blog post → `src/data/blog.js` + `BlogPostPage.jsx`, and add it to
  `BLOG_LIST` too so it shows up on `/blog`
- New Phuket guide → `src/data/phuket.js` + `PhuketArticlePage.jsx`

Each template renders several fields conditionally (e.g. `ctaButtons`,
`faqs`, `highlights`) — check an existing entry of the same shape before
adding a new one, and note that `PhuketArticlePage.jsx`'s CTA section is
guarded against a missing `ctaButtons` field (after a real crash from this),
but not every optional field in every template has that same guard yet.

## Add or change hero/villa video content

Read the "video-cropping technique" section in `rules.md` first. If you're
adding a new reel video, verify whether it has the same pillarbox pattern
(1920×1080 container, 9:16 real content) before assuming the existing crop
CSS will work unchanged — check by extracting a frame to a `<canvas>` and
sampling row brightness (see `project-history.md` for the exact method used
originally), don't just eyeball it.

## Verify a UI change actually works

This environment doesn't have an interactive browser window — verification
happens via a headless Playwright script:

1. Make sure the dev server is running (`npm run dev`, check
   `http://localhost:3000` responds).
2. Set up a throwaway Playwright script (a temp `node_modules/playwright`
   install works fine — see any prior session's scratchpad approach) that
   navigates to the page, waits for content/video to actually load
   (~1–2 seconds, autoplay video needs a moment), and takes a screenshot.
3. Check `page.on('pageerror', ...)` for console errors — zero is the bar.
4. For anything near the bottom-right corner or the mobile bottom nav, also
   grab the actual bounding rects of the elements in question
   (`getBoundingClientRect()` via `page.evaluate`) rather than eyeballing the
   screenshot — several real bugs were only caught this way (a button
   genuinely clipped 18px past the viewport edge looked "probably fine" in
   a screenshot crop).
5. Test at minimum: the reported/relevant desktop viewport, a laptop-ish
   width (1440), and mobile (390×844).

## Adding a modal or floating UI element

Render it via `createPortal(..., document.body)` rather than inline in the
component tree — several page sections use `overflow-hidden` (see
`rules.md`), and portaling avoids any risk of being clipped or caught in an
unexpected stacking context. See `BookingModal.jsx` for the pattern:
portal + backdrop click-to-close + Escape-to-close + body-scroll lock while
open.
