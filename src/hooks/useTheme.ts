import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "dexin-theme";

function storedTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/**
 * Mirrors the `data-theme` attribute the inline script in index.html sets
 * before first paint. With no stored choice the OS preference wins and keeps
 * winning — the toggle only pins a theme once the visitor picks one.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => storedTheme() ?? systemTheme());
  const [pinned, setPinned] = useState(() => storedTheme() !== null);

  useEffect(() => {
    if (!pinned) {
      const query = window.matchMedia("(prefers-color-scheme: dark)");
      const sync = () => setTheme(query.matches ? "dark" : "light");
      query.addEventListener("change", sync);
      return () => query.removeEventListener("change", sync);
    }

    document.documentElement.dataset.theme = theme;
  }, [theme, pinned]);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* storage blocked — the toggle still works for this session */
      }
      return next;
    });
    setPinned(true);
  }, []);

  return { theme, toggle };
}
