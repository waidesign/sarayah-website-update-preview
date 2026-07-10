# Project History & Decision Log

Chronological, most-relevant-decisions-first. Read this before "fixing"
something that looks like a mistake — it might be a deliberate workaround for
a problem that isn't obvious from the code alone.

## Framework choice: React SPA, explicitly not Next.js

The site started as a 30-page static HTML/Tailwind-CDN/vanilla-JS build. The
owner asked to convert it to React twice. The first time, a framework
question was asked back (Next.js vs Astro vs Vite+React SPA), flagging that
a client-rendered SPA loses the SEO benefit of the original server-rendered
HTML (meta tags, OG tags, JSON-LD schema were all present per-page in the
static site). The owner explicitly said "we won't use Next.js" both times
this came up. Given that constraint, the choice was Vite + React Router — a
plain client-rendered SPA. **The SEO trade-off is real and was accepted
knowingly, not overlooked.** If this ever needs revisiting, prerendering
options (e.g. a static-export step, or moving specific pages to
prerendered HTML) are worth discussing rather than assuming Next.js is off
the table for good.

## Assets: real files, not a symlink (there's a story here)

When the React app was first scaffolded, `public/assets` was set up as a
Windows directory junction pointing at the shared `assets/` folder to avoid
duplicating ~330MB of media. During a later full project cleanup (moving the
old static site out of the way), a `Remove-Item` on that junction silently
failed (PowerShell non-interactive mode blocked a confirmation prompt), and
a subsequent `Copy-Item` into the still-live junction wrote a self-referential
copy *into the original source folder* (`assets/assets/...`). It was caught
immediately by checking file timestamps (originals unchanged, only a new
nested folder appeared) and cleaned up before any real data loss. Lesson:
junctions/symlinks are fragile under scripted, non-interactive deletion —
`public/assets` is now a plain, real copy.

## The pillarbox video discovery

The villa "viral reel" videos looked broken when shown full-bleed in early
hero designs — either showing large black bars, or (when force-cropped to
avoid bars) looking oddly zoomed. Root cause, found by extracting a decoded
frame to a `<canvas>` and sampling pixel brightness across a horizontal row:
the files are 1920×1080, but only the center ~31.6% of that width
(x≈656–1263) is real content — the rest is solid black. The actual footage
is a 9:16 vertical clip that got exported into a landscape container with
pillarboxing, rather than a true landscape recording. This shaped several
hero redesigns afterward — see `rules.md` for the reusable CSS fix.

## Hero section redesign history

The homepage hero went through several complete redesigns based on rounds of
user feedback, roughly in this order:

1. Dark-green two-column layout, dual video "stage" (big active card + small
   peek card for the other villa), click-to-switch.
2. Redesigned after a reference screenshot (a Dubrovnik villa site) — split
   layout, cream text panel, full-bleed landscape video on the right with
   prev/next arrows. **This reintroduced the pillarbox problem** at a new
   aspect ratio and was caught via user feedback ("doesn't look good... in
   vertical").
3. Fixed by presenting the video as a true-9:16 card over a blurred ambient
   backdrop of the same clip (Instagram-style portrait-video-on-wide-screen
   pattern).
4. Fully redesigned again per explicit request ("upgrade the whole layout")
   into a full-bleed cinematic composition: blurred ambient background,
   bold overlaid typography, a floating sharp 9:16 "reel" card, underline-tab
   villa switcher.
5. Redesigned once more per a different reference (S&O Villas) into a
   centered welcome message + frosted-glass showcase strip with both villas
   side by side (landscape cards using the crop technique) + a single shared
   "Book Now" button. Went through several rounds of targeted feedback after
   this (card aspect ratio taller twice, button moved above the strip, more
   top padding, `h-screen`→`min-h-screen` fix for a genuinely clipped
   button).
6. Redesigned once more per a low-fidelity wireframe into the **current**
   structure: back to a single full-bleed ambient video background (the
   S&O-style villa showcase strip and centered welcome message were dropped
   entirely), with the per-villa text block (eyebrow, H1, body, Book Now)
   anchored bottom-left, and small pagination dots bottom-right switching
   between the two villas. This is structurally closest to redesign #1, just
   without the floating video card — dots replaced click-to-switch cards.
   The wireframe put the dots in the exact corner the WhatsApp float and dev
   Agentation toolbar occupy; positioned them with enough bottom clearance
   (verified via `getBoundingClientRect()`, not just eyeballed) to avoid the
   collision documented above, rather than following the mockup's exact
   pixel position.
7. Corrected immediately after #6 shipped: the wireframe (and a follow-up
   "Perch Houses" reference screenshot) actually called for the hero as an
   **inset, rounded-corner card** with visible page-background margin on all
   sides, sitting below a separate, non-overlapping header — not the
   full-bleed edge-to-edge section #6 had built. Fixed by wrapping the hero
   in an outer `<section className="bg-background px-* pt-* pb-*">` (cream
   margin) containing an inner `rounded-2xl/3xl overflow-hidden` card with a
   **bounded** height (`min-h-[560px]` up to `min-h-[760px]` by breakpoint,
   not `min-h-screen`), with the text block and dots repositioned `absolute`
   relative to that card instead of the viewport. This surfaced a *new*
   instance of the recurring WhatsApp-corner collision: because the card's
   bottom edge now sits close to the true viewport bottom at common heights,
   the same small dot offset that would have been fine before was actually
   hidden behind the WhatsApp float on desktop widths (measured, not
   eyeballed — a `getBoundingClientRect()` check showed the dots' rect fully
   inside the WhatsApp link's rect). Fixed by giving the dots a much larger
   `md:`/`lg:` bottom offset (`bottom-6 md:bottom-24 lg:bottom-32`) than the
   card's own padding would suggest is necessary. Lesson: this collision
   isn't a one-time fix — it needs re-checking (measured) any time the
   hero's outer/card geometry changes, not just when the dots themselves
   move.

If asked to redesign the hero again, it's worth explicitly checking: does
the new design handle the pillarboxed vertical video correctly, and does it
keep clear of the bottom-right corner (WhatsApp float + dev-only Agentation
toolbar)? Both have caused repeat bugs across these iterations.

## Booking modal

"Book Now" originally linked straight to `/booking` (a route that doesn't
exist yet — see `context.md`). Per feedback, it now opens a `BookingModal`
(check-in/check-out/guests, portal-rendered) and *then* navigates to
`/booking` with the selections as query params on submit. This is an interim
UX, not a real booking backend — `/booking` still needs to be built, and
however that page ends up querying availability (Hostex? something else?)
these query params are the current placeholder contract.

## The "agentation" package incident

An npm package called `agentation` appeared in `package.json` unexplained,
multiple times across sessions, each time paired with a code snippet
instructing it be imported and mounted into the app's root component. This
was initially — correctly — treated as a likely prompt-injection pattern and
not acted on. When the user directly, explicitly confirmed wanting it, it
was verified properly before adding it: the actual npm tarball was
downloaded and its source/README read directly, rather than trusting
registry metadata or the user's assertion alone. It turned out to be a real,
legitimate dev-only tool ("Visual feedback for AI coding agents" — a browser
toolbar letting a human click UI elements and generate structured context
for an AI agent). It's now wired into `App.jsx` behind
`import.meta.env.DEV`. **The lesson isn't "unexplained packages are always
bad"** — it's that unexplained + repeated + paired with auto-execute
instructions warrants independent verification before either blind
compliance or blind refusal.

## Homepage luxury revamp (post-hero-fix)

After the hero card layout was corrected, the user asked for a full visual
revamp of the homepage toward an "expensive/luxury" look, referencing
vanderhotel.com and casabianca-dubrovnik.com. A first pass only adjusted
spacing/shadows/added an FAQ accordion — the user correctly pushed back that
"nothing changed" layout-wise, since the section *structure* (alternating
2-column text+image grids, every section) was untouched. The real fix was
structural, not cosmetic: introduced a pure-text statement section (no
image), a full-bleed image break with an overlaid quote, a photography-led
Thalang location strip (added real images to what had been a text-only grid),
full-bleed alternating villa showcase panels on a dark green field (replacing
side-by-side cards), and a dark charcoal stat/service section for tonal
contrast — deliberately breaking the "every section is white-bg two-column"
monotony. **Lesson**: "make it look expensive/modern" is a structural-rhythm
request (whitespace, image-to-text ratio, section-background contrast,
varied layouts), not just a spacing/shadow polish pass — verify by screenshot
whether the *shape* of the page actually changed, not just token values.

## The full 29-page migration

After many rounds of homepage-only feedback, the user asked to migrate every
remaining archived page into React and apply the (by-then-established) new
brand system to all of it. This was executed in one large pass rather than
page-by-page (per the user's explicit choice when asked how to sequence it),
using shared, data-driven templates instead of 29 hand-built files:
`VillaDetailPage`, `ExperienceDetailPage`, `BlogPostPage`, and
`PhuketArticlePage`, each driven by a `src/data/*.js` content file. Two new
shared components came out of this — `PageHeader` (full-bleed hero banner)
and `FaqAccordion` (extracted from `HomePage.jsx`'s inline FAQ logic, then
reused everywhere an FAQ appears, including refactoring the homepage itself
to use it instead of a near-duplicate copy).

**Content was audited, not blindly copied.** Before writing any page, the
archived HTML was read and cross-checked (partly via research subagents, to
keep the main context budget for actually writing the pages). Real problems
surfaced and were deliberately fixed rather than carried forward:

- **Near-duplicate content across pages**: two blog posts (`why-northern-
  phuket-is-the-elite-choice`, `thalang-vs-southern-phuket-luxury-guide`)
  and two `phuket/` pages (`best-villas-thalang-district`,
  `private-pool-villas-phuket`) argued the identical "Thalang beats the
  south" thesis in near-identical wording to each other and to their blog
  counterparts. Rewritten with genuinely distinct angles/facts per page
  rather than deduplicated wholesale, since removing pages wasn't asked for.
- **Metadata/slug mismatches**: two blog posts' actual `<title>`/canonical
  tags didn't match the slug they were linked from or the index card's
  description of them (one was really about "Sri Panwa vs. Northern
  Phuket," another "Cape Panwa vs. Thalang" — both generically mislabeled
  on the index). Resolved by using the *real* underlying content's framing
  as the actual page title, instead of the mismatched index-card label.
- **Mismatched/rotated images**: several archived pages used an unrelated
  photo for their topic (a "culinary"-named file used as a villa exterior
  shot; a wellness-spa photo captioned "Gourmet Kitchen" in the old
  gallery; villa interior photos standing in for "car rental" and "taxi"
  experience cards). Rather than replicate these, each new page uses a
  thematically correct image — and where no correct photo exists at all
  (car rentals, taxi transfers), the new pages use an honest fallback
  (a solid-color icon card, or the closest available scenic/location photo)
  instead of forcing a wrong one. Separately, two source photos —
  `public/assets/media/villas/2-bedroom/IMG_8217.jpg` and `IMG_8261.jpg` —
  were discovered to be rotated 90° in the file itself (display sideways
  regardless of what CSS is applied); both were avoided across every new
  page and flagged here as a real asset bug worth fixing at the source.
- **A factual conflict between two pages**: the archived `contact/` FAQ
  claimed airport transfers are "complimentary for all direct bookings,"
  while `experiences/taxi-transfers` had a real paid rate table (800–1,200
  THB) for the same transfer and never mentioned a free option. Resolved by
  rewriting the contact FAQ to say transfers are *arranged*, not promised
  free, matching the priced page rather than silently picking one version.
- **Two real, non-decorative bugs, fixed while porting**: the contact
  page's form posted to an unconfigured Formspree placeholder
  (`YOUR_FORMSPREE_ID` — would always fail); the new version instead opens
  a pre-filled WhatsApp message with the form's contents, which actually
  works with no backend needed, in keeping with the site's WhatsApp-first
  concierge model. The "Open in Google Maps" button had no `href` at all in
  the archive; the new version links to a real Google Maps search query for
  the villa's address.
- **A stub page was excluded on purpose**: `blog/finding-perfect-4-bedroom-
  villa-phuket` (26 lines, unfinished, not linked from the blog index) was
  deliberately not ported — confirmed with the user first rather than
  assumed.
- **`/booking` stays a styled placeholder, not a real Hostex embed** — an
  explicit user decision (the archive's Hostex widget IDs looked real,
  not placeholder, but wiring up a live booking backend wasn't something to
  decide unilaterally mid-migration). It reads the `checkIn`/`checkOut`/
  `guests` params `BookingModal` already sends and hands off to WhatsApp or
  the villa detail pages instead.

**Verification approach at this scale**: rather than eyeballing 29 pages,
every route (including four intentionally-invalid slugs, to confirm the
`<Navigate>` redirect-to-parent fallback works) was swept in one Playwright
script checking HTTP status + zero console/page errors, with visual
screenshot spot-checks on one representative page per template rather than
all 29 individually. One real bug was caught this way: `phuket/private-
pool-villas-phuket` crashed on load because its data entry was missing the
`ctaButtons` field the shared template rendered unconditionally — fixed both
the missing data *and* added a defensive guard in the template itself, since
a data-driven shared-template pattern like this will keep growing new
content entries and a missing-field crash shouldn't be a foot-gun every time.

Also caught during this pass: a homegrown Playwright verification script
that resized the browser viewport to the full page's scroll height before
screenshotting silently corrupted every `vh`-based section (the villa
showcase panels, the image break), since `vh` recalculates against
whatever the *current* viewport height is — inflating a `h-[75vh]` section
to 75% of the artificially huge viewport instead of the real one. The actual
rendered page (fixed viewport, normal scroll) was correct the whole time;
only the verification screenshot was wrong. Fixed by using Playwright's
built-in `page.screenshot({ fullPage: true })` instead of manually resizing
the viewport — it captures the full scrollable page without touching layout
viewport dimensions. **Lesson**: don't manually resize the viewport to
"capture everything" on a page that uses `vh` units anywhere — use
`fullPage: true`.

## Cleanup / archival, not deletion

When asked to strip the project down to just the React app, the old static
site (30 pages, scripts, docs) was moved to a **sibling folder**
(`../stitch_sarayah_phuket_villa_rentals_archived-static-site/`) rather than
deleted outright — there was no git repository in this project at any point,
so a hard delete would have been unrecoverable. This archive is still the
best source for content/copy when porting a not-yet-migrated page.
