# Code Generation Checklist

Before writing a new component or page on this project:

1. **Check for an existing pattern first.** Adding a page? Look at
   `HomePage.jsx` and `App.jsx`'s route setup. Adding a modal? Look at
   `BookingModal.jsx`. Adding video? Read `rules.md`'s cropping section
   *before* writing any video markup — it's easy to reintroduce the
   pillarbox bug from scratch.
2. **Use existing design tokens.** Pull colors/fonts/radii from the
   `@theme` block in `src/index.css` via their Tailwind utility names.
   Don't invent a new hex value or font-size if an equivalent token exists.
3. **Plain JS/JSX, no TypeScript.** No `.tsx`, no type annotations.
4. **React Router `<Link>`/`<NavLink>` for internal links**, always —
   check the destination route actually exists in `App.jsx` (or note that
   it doesn't yet, per `context.md`'s migration-status section).
5. **Mind the bottom-right corner** (WhatsApp float + dev Agentation
   toolbar) for anything fixed/absolute-positioned near there.
6. **After writing it, run it.** See `playbook.md`'s verification section —
   screenshot it, check for console errors, check bounding rects if it's
   near a fixed element or the viewport edge. Don't report a UI task done
   without having actually rendered it.
