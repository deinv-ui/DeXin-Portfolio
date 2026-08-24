# DeXin Portfolio

Personal portfolio of **Tan De Xin**, front-end developer.
React 18 + TypeScript + Vite + Tailwind CSS.

## Running it

```bash
npm install
npm run dev        # dev server
npm run build      # typecheck, then production build to dist/
npm run preview    # serve the production build
npm run typecheck  # tsc --noEmit
```

## Design system

Every colour is a CSS custom property declared in [`src/index.css`](src/index.css).
Light is the base palette; the dark palette redefines the same variable names
under both `prefers-color-scheme: dark` and `[data-theme="dark"]`.

`tailwind.config.js` maps each token to a Tailwind colour (`bg-panel`,
`text-ink`, `border-rule`, …), so **components never need a `dark:` variant** —
switching the theme swaps the variables underneath them.

Theme resolution order:

1. An inline script in `index.html` applies a stored choice before first paint,
   so there is no flash of the wrong palette.
2. With no stored choice, the OS preference wins and keeps winning.
3. The nav toggle pins a theme to `localStorage`.

Four breakpoints beyond the Tailwind defaults are declared in `theme.screens`
(in ascending order, so they sort correctly into the cascade):

| Screen | Width  | What it does                              |
| ------ | ------ | ----------------------------------------- |
| `duo`  | 820px  | stack cards go two-up                     |
| `wide` | 900px  | project body splits caption from prose    |
| `spec` | 940px  | hero splits headline from the spec card   |
| `rail` | 1080px | sections gain their sticky gutter label   |

## Layout

```
src/
  App.tsx                 section order
  data/                   all copy and content — no strings in markup
    site.ts               identity, nav items, contact channels
    projects.ts           project entries
    skills.ts             skill groups and meter levels
  components/
    layout/               Nav, Footer, Wrap, Section (the gutter rail)
    sections/             Hero, ViewportRuler, Work, Stack, Contact
    ui/                   Button, Chip, Meter, Reveal, Toast
  hooks/                  useReveal, useActiveSection, useViewportWidth, useTheme
  lib/                    clipboard, motion
  stores/toastStore.ts    zustand store for form feedback
```

Editing content means editing `src/data/` — the components read from it.

## Accessibility

- All motion is gated behind `prefers-reduced-motion: reduce`.
- Skill meters carry `role="img"` with a text label; the legend's copies are
  `aria-hidden` since their text already says it.
- The clipboard button reports its result to a visually hidden `aria-live`
  region, and falls back to `execCommand` where the async Clipboard API is
  blocked.
- Project screenshots have alt text describing the screen, not the product name.

## Contact form

Posts to Formspree (`FORM_ENDPOINT` in
[`src/components/sections/Contact.tsx`](src/components/sections/Contact.tsx))
and reports through the toast store.
