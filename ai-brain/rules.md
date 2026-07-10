# Coding Conventions

## Stack rules

- **Plain JavaScript/JSX. No TypeScript.** Matches the original codebase's
  style; don't introduce `.tsx` files or type annotations.
- **Tailwind v4**, CSS-first config. Design tokens live in the `@theme` block
  at the top of `src/index.css` — colors, fonts, radii. Use the generated
  utility classes (`bg-primary`, `text-on-surface-variant`, `font-headline`,
  `rounded-xl`, etc.) rather than arbitrary hex values or one-off styles.
- **React Router** for all internal navigation. Use `<Link>` / `<NavLink>`
  from `react-router-dom`, never a raw `<a href="/...">` for in-app routes.
  Raw `<a>` is fine for genuinely external links (WhatsApp, etc.).
- Custom CSS (in `src/index.css`) is only for what Tailwind utilities can't
  express: keyframe animations, the video-crop technique, pseudo-class
  chains that would be unreadable as utility soup. Keep it minimal.

## Component patterns

- One component per file, PascalCase filename matching the export
  (`HeroSlider.jsx` exports `HeroSlider`).
- Shared layout (`Header`, `Footer`, `MobileNav`, `WhatsAppFloat`) lives in
  `src/components/` and is wired once via `Layout.jsx`, which every route
  renders through (see `App.jsx`).
- Page-specific components (e.g. `HeroSlider`, `BookingModal`) also live in
  `src/components/` even though they're only used by one page — there's no
  strict components-vs-pages content boundary here, just "one file per
  route" for the pages themselves (`src/pages/`).

## The video-cropping technique (important — don't reinvent this)

The reel videos in `public/assets/media/reels/` are 1920×1080 landscape
files, but the *real* content is a 9:16 vertical clip pillarboxed dead-center
(~34% solid black on each side). This was discovered by extracting a frame
to canvas and sampling pixel brightness across a row — don't trust the
container dimensions, the actual footage is portrait.

Consequence: if you show one of these videos at anything other than a true
9:16 aspect ratio, plain `object-fit: cover` will show a sliver of black bar.
The fix, already implemented and reusable:

```css
.crop-wrap { position: absolute; inset: 0; overflow: hidden; }
.crop-inner {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  aspect-ratio: 9 / 16;
  min-width: 100%; min-height: 100%;
  width: auto; height: auto;
}
```

Put the `<video object-cover>` inside `.crop-inner`, `.crop-inner` inside
`.crop-wrap`, and `.crop-wrap` inside whatever arbitrarily-shaped container
you actually want (landscape card, square card, whatever). This crops to the
true 9:16 content first, then lets that cover the outer shape. See
`.hero3-video-crop-wrap` / `.hero3-video-crop-inner` in `src/index.css` and
their usage in `HeroSlider.jsx` for the working example.

If you ever want the video as *pure background ambiance* (blurred, not the
focal point), skip the crop trick — just blur it hard enough
(`filter: blur(20px+)`) that the pillarbox stops being visible.

## Layout height rules

Prefer `min-h-screen` over `h-screen` for full-viewport sections that also
have `overflow-hidden` (the overflow-hidden is usually there to contain a
scaled-up background video, not to crop real content). `h-screen` +
`overflow-hidden` will silently clip interactive elements (buttons, CTAs) at
viewport heights shorter than the content needs. `min-h-screen` lets the
section grow instead.

## The bottom-right corner is occupied

`WhatsAppFloat` and, in development, the Agentation toolbar both render
fixed in the bottom-right corner on **every page**. On mobile, `WhatsAppFloat`
sits at `bottom-24` (above the fixed `MobileNav` bar) rather than `bottom-8`.
Any page-level UI you add (nav controls, floating CTAs, modals) needs to
either avoid that corner or include enough bottom padding/margin to clear it
— this has caused real, verified overlap bugs more than once (see
`project-history.md`).

## Verification, not assumption

This is a visual, video-heavy, animation-heavy codebase. Reasoning about
Tailwind classes on paper is not sufficient — several "obviously correct"
changes turned out to overlap fixed elements, clip content, or reintroduce
the pillarbox bug once actually rendered. Use a headless browser
(Playwright) to screenshot and inspect bounding boxes before calling a
layout change done, especially for anything involving the hero section,
mobile breakpoints, or the fixed-position elements listed above.
