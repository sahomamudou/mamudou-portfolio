import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

// index.html sets data-theme before first paint; read it back as the initial value
const getInitialTheme = () =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#0a0912" : "#f6f5fb");
  }, [theme]);

  // Follow OS changes until the visitor picks a theme explicitly
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      try {
        if (localStorage.getItem(STORAGE_KEY)) return;
      } catch {
        // storage unavailable: just follow the OS
      }
      setTheme(e.matches ? "dark" : "light");
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // storage unavailable: the choice lasts for this visit only
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
};
