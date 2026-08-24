/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    /* Declared in full (not extended) so the four layout-specific breakpoints
       sort into the cascade by width rather than being appended after 2xl. */
    screens: {
      sm: "640px",
      md: "768px",
      /** stack cards go two-up */
      duo: "820px",
      /** project body splits caption from prose */
      wide: "900px",
      /** hero splits headline from the spec card */
      spec: "940px",
      lg: "1024px",
      /** section rail gains its sticky gutter label */
      rail: "1080px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      /* Every colour is a token defined in src/index.css. Light is the base;
         dark redefines the same variables, so no `dark:` variants are needed. */
      colors: {
        ground: "var(--ground)",
        panel: "var(--panel)",
        "panel-hi": "var(--panel-hi)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        muted: "var(--muted)",
        rule: "var(--rule)",
        "rule-soft": "var(--rule-soft)",
        accent: "var(--accent)",
        "accent-on": "var(--accent-on)",
        "accent-wash": "var(--accent-wash)",
        accent2: "var(--accent-2)",
        "accent2-on": "var(--accent-2-on)",
        "accent2-wash": "var(--accent-2-wash)",
        jade: "var(--jade)",
        brass: "var(--brass)",
      },
      fontFamily: {
        display: ['"Archivo"', '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        prose: ['"Newsreader"', '"Iowan Old Style"', "Georgia", '"Times New Roman"', "serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      boxShadow: {
        lift: "var(--lift)",
        "lift-hi": "var(--lift-hi)",
        punk: "var(--punk)",
        "punk-hover": "var(--punk-hover)",
        "punk-sm": "var(--punk-sm)",
      },
      maxWidth: {
        wrap: "1260px",
        measure: "63ch",
        deck: "50ch",
      },
      spacing: {
        nav: "var(--nav-h)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(.22,1,.36,1)",
      },
    },
  },
  plugins: [],
};
