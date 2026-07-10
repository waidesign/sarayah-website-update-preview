# SEO Notes

## The trade-off, stated plainly

This is a client-rendered React SPA. The original static HTML site had, per
page: a unique `<title>`, meta description, canonical URL, Open Graph tags,
and in some cases JSON-LD schema — all present in the initial server
response, immediately visible to search crawlers and social-link-preview
bots. None of that exists yet in the React version; `index.html` has one
static title/description for every route, and anything route-specific would
currently require client-side JS to execute before it appeared (which many
crawlers and most social previews won't wait for).

This was an **explicit, informed decision** — the framework question (Next.js
vs. a plain SPA) was asked directly, the SEO cost was named, and the owner
chose a plain Vite + React Router SPA anyway, twice. Don't "fix" this
unprompted by re-proposing Next.js; if it comes up again, the options are:

- A per-route `<title>`/meta management library (e.g. updating
  `document.title` and meta tags on route change) — cheap, but still
  invisible to crawlers that don't execute JS.
- A prerendering/static-export step for the built site (several tools can
  crawl the SPA's own routes at build time and emit static HTML per page)
  — closes most of the gap without adopting a full meta-framework.
- Revisit the framework choice, if the owner's constraint has changed.

## When porting a page from the archived static site

The archived HTML per page had real, hand-written meta content worth
preserving even before a general solution exists — capture it (title,
description, any schema) in a comment or a page-level constant when porting
a page, so it isn't lost even if it can't be wired up to the `<head>` yet.
