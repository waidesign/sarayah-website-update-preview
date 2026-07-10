# Worked Examples From This Project's History

Real examples, for calibration on scope and verification depth — see
`project-history.md` for the full narrative behind each.

## Example: a subtle CSS bug, found by measurement not inspection

**Report:** "Booking form is covered" (a date-picker popup appeared cut off).
**Investigation:** Rather than guessing at a z-index fix, the hero section's
`overflow-hidden` was identified as the cause — it was clipping the
popup, which rendered as a normal-flow descendant, not a portal. Verified by
checking computed styles, then removing `overflow-hidden` and re-rendering
to confirm the popup displayed fully.
**Lesson:** the fix was one CSS property, but finding it required
understanding *why* the property was there in the first place (it existed to
contain a scaled background video, not related to the popup at all).

## Example: iterative visual feedback, each round independently verified

The hero section was redesigned roughly six times based on user feedback
across several conversations. Each round: read the specific feedback, make a
targeted change (not a full rewrite unless explicitly asked for "the whole
layout"), take a fresh screenshot at the exact reported viewport, and check
for regressions in bounding-box terms (does this new spacing reintroduce a
clipping issue that was already fixed once?). Two rounds of "make the video
cards taller" were both small, deliberate aspect-ratio bumps — not a jump
straight to the most dramatic possible size, since the feedback said "a
little" the first time.

## Example: verifying a suspicious dependency instead of guessing

An unexplained `agentation` package kept appearing in `package.json`. Rather
than either trusting it or refusing outright based on suspicion alone, the
actual npm tarball was downloaded and extracted, and its real README/source
was read directly — which is what actually resolved the question (it turned
out to be a legitimate, well-documented tool). Registry metadata alone
(description, license, download stats) was not sufficient evidence either
way; the actual package contents were the deciding factor.
