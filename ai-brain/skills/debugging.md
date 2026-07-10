# Debugging Checklist

Common root causes on this project, in rough order of likelihood for a
"this looks wrong visually" report:

1. **Pillarboxed video, wrong aspect ratio.** Black bars or an oddly-zoomed
   crop on a villa reel almost always means a non-9:16 container without the
   crop technique from `rules.md`. Check the container's `aspect-ratio` /
   `aspect-[...]` class first.
2. **Clipped content at a specific viewport height.** If something is
   missing or cut off only at certain window sizes, check for `h-screen`
   (fixed) + `overflow-hidden` on an ancestor — the fix is usually
   `min-h-screen`, not more spacing tweaks.
3. **Overlap with a fixed element.** WhatsApp float or the dev Agentation
   toolbar, both bottom-right, both present on every page. Get the actual
   `getBoundingClientRect()` of both elements rather than eyeballing a
   screenshot — real overlaps here have been off by single-digit pixels and
   easy to misjudge visually.
4. **Route doesn't exist.** A blank page or console "No routes matched" is
   usually just an unmigrated page — check `context.md`'s migration status
   before assuming it's a bug.
5. **Dev server not actually running / running old code.** This
   environment's background processes don't always survive between
   sessions (they get silently stopped on session teardown). If
   `localhost:3000` doesn't respond, just restart `npm run dev` — check for
   a stray port conflict first if something *else* answers on that port
   unexpectedly (this has happened with an unrelated project on the same
   machine before).
6. **HMR/parse errors after an edit.** Check the dev server's own log output
   for a Vite transform error before assuming the browser-side symptom is
   the real problem — a stray unclosed JSX comment or similar syntax slip
   will make Vite fail to serve the updated file at all.

For anything visual, reproduce it with a headless Playwright screenshot at
the reported viewport size before proposing a fix — don't fix based on the
bug description alone.
