# Sarayah Phuket Villas

React (Vite + React Router + Tailwind v4) site for Sarayah Phuket Villas — two
luxury private-pool villas in Thalang District, Phuket.

## Running locally

```
npm install
npm run dev
```

Opens at **http://localhost:5173/**.

## Project structure

```
src/
  components/   Shared layout (Header, Footer, MobileNav, WhatsAppFloat) and
                the interactive HeroSlider villa-switcher
  pages/        One component per route
  index.css     Tailwind v4 theme (design tokens: colors, fonts, radii) plus
                global component styles (hero, dots, video stage)
  App.jsx       Route definitions
public/assets/  Photos, villa videos, and "viral reel" clips
```

## Adding a page

Create a component in `src/pages/`, then add a `<Route>` for it in `App.jsx`
inside the `<Layout />` route so it gets the shared header/footer/nav.
