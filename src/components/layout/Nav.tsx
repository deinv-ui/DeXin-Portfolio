import { useEffect, useState } from "react";
import { navItems, site } from "../../data/site";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useTheme } from "../../hooks/useTheme";

const sectionIds = navItems.map((item) => item.id);

export function Nav() {
  const active = useActiveSection(sectionIds);
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  /* Close the sheet on Escape, and never leave it open behind a desktop layout. */
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const onBreakpoint = () => desktop.matches && setMenuOpen(false);

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = (id: string) =>
    `mono no-underline border-b-[1.5px] py-[.35rem] transition-[color,border-color] duration-200 hover:text-ink ${
      active === id ? "text-ink border-accent" : "text-muted border-transparent"
    }`;

  return (
    <>
      <nav className="nav-surface fixed inset-x-0 top-0 z-[60] flex h-nav items-center border-b border-rule-soft">
        <div className="mx-auto flex w-full max-w-wrap items-center justify-between gap-6 px-[clamp(1.25rem,4vw,3.25rem)]">
          <a
            href="#top"
            className="inline-flex items-baseline gap-[.4rem] text-[1.0625rem] font-extrabold tracking-[-.02em] no-underline [font-stretch:118%]"
          >
            {site.mark}
            <span
              aria-hidden="true"
              className="dot-pulse inline-block h-[.4rem] w-[.4rem] -translate-y-[.05rem] bg-accent2"
            />
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className={linkClass(id)}>
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="mono hidden text-ink normal-case tracking-[.015em] no-underline transition-colors duration-200 hover:text-accent sm:inline"
            >
              {site.email}
            </a>

            <ThemeToggle theme={theme} onToggle={toggle} />

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="text-ink transition-colors duration-200 hover:text-accent md:hidden"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile sheet — the artifact simply hides its links below 720px, but a
          standalone site still needs a way to reach the sections. */}
      <div
        className={`fixed inset-0 z-[70] flex flex-col items-center justify-center gap-8 bg-ground transition-opacity duration-300 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="absolute right-6 top-5 text-ink transition-colors duration-200 hover:text-accent"
          tabIndex={menuOpen ? 0 : -1}
        >
          <CloseIcon />
        </button>

        {navItems.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
            className="text-3xl font-bold tracking-[-.02em] no-underline transition-colors duration-200 hover:text-accent [font-stretch:110%]"
          >
            {label}
          </a>
        ))}

        <a
          href={`mailto:${site.email}`}
          onClick={() => setMenuOpen(false)}
          tabIndex={menuOpen ? 0 : -1}
          className="mono mt-4 text-ink normal-case tracking-[.015em] no-underline"
        >
          {site.email}
        </a>
      </div>
    </>
  );
}

function ThemeToggle({ theme, onToggle }: { theme: string; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="text-muted transition-colors duration-200 hover:text-accent"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function MenuIcon() {
  return (
    <svg {...iconProps} width={22} height={22}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg {...iconProps} width={24} height={24}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg {...iconProps}>
      <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
    </svg>
  );
}
