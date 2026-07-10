# Code Review Checklist

Project-specific things to check, beyond general code quality:

- **Video aspect ratios.** Any `<video>` or image shown at a non-9:16 aspect
  ratio using footage from `public/assets/media/reels/` — does it use the
  crop technique (`rules.md`), or will it show pillarbox bars?
- **Fixed/absolute positioned elements near the bottom-right corner.** Does
  it collide with `WhatsAppFloat` (bottom-24 on mobile, bottom-8 on desktop)
  or the dev-only Agentation toolbar?
- **Full-viewport sections.** `h-screen` + `overflow-hidden` together will
  silently clip content that doesn't fit — should this be `min-h-screen`
  instead? Has the actual rendered height been checked against real content,
  not just assumed?
- **Internal links.** Raw `<a href>` for an in-app route (should be
  `<Link>`), or a `<Link>` pointing at a route that doesn't exist yet in
  `App.jsx` (fine if intentional/tracked, worth flagging if not).
- **Hardcoded design values** that should be theme tokens (a raw hex color,
  a font-size that doesn't match the type scale).
- **New dependencies.** Anything added to `package.json` — is its purpose
  understood? Has it actually been inspected (source/README), or just
  trusted because it's "probably fine"? See the agentation incident in
  `project-history.md` for why this matters here specifically.
- **Was it actually run?** A diff that only makes sense "on paper" isn't
  verified — check for a corresponding screenshot/browser check per
  `playbook.md`.
