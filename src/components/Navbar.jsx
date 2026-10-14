import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "../data/portfolio";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-lg text-fg transition hover:border-accent hover:text-accent"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? <FiSun /> : <FiMoon />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Highlight the last section whose top has passed 40% of the viewport
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      const marker = window.scrollY + window.innerHeight * 0.4;
      let current = "";
      for (const { id } of navLinks) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= marker) current = id;
      }
      setActive(atBottom ? navLinks[navLinks.length - 1].id : current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-line bg-bg/80 shadow-sm backdrop-blur-lg"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6"
      >
        <a href="#top" className="font-display text-xl font-bold tracking-tight text-fg">
          Mamudou<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-line bg-surface/70 p-1 backdrop-blur md:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  active === id
                    ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow"
                    : "text-muted hover:text-fg"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-bg transition hover:opacity-85 md:inline-block"
          >
            Hire me
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-xl text-fg md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden px-4 md:hidden"
          >
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block border-b border-line py-4 text-base font-medium ${
                    active === id ? "text-accent" : "text-muted hover:text-fg"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 text-center text-sm font-semibold text-white"
              >
                Hire me
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
