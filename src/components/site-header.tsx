"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Command, Menu, Search, X } from "lucide-react";
import { OPEN_COMMAND_MENU } from "@/components/command-menu";
import { ThemeToggle } from "@/components/theme";
import { nav, profile } from "@/content/site";
import { cn } from "@/lib/utils";

function useActiveSection() {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const update = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current = "";
      for (const { id } of nav) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= marker) current = id;
      }
      setActive(atBottom ? nav[nav.length - 1].id : current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return active;
}

export function SiteHeader() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const isMac = useSyncExternalStore(
    () => () => {},
    () => /Mac|iPhone|iPad/.test(navigator.platform),
    () => false,
  );

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-border bg-surface-strong/70 px-4 py-2.5 shadow-lg shadow-black/5 backdrop-blur-xl sm:px-5"
      >
        <a href="#top" className="text-[17px] font-extrabold tracking-tight">
          {profile.logo}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active === id ? "bg-primary/12 text-accent" : "text-muted hover:text-foreground",
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event(OPEN_COMMAND_MENU))}
            aria-label="Open command menu"
            className="hidden h-10 items-center gap-2 rounded-xl border border-border px-3 text-sm text-subtle transition-colors hover:text-foreground sm:flex"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            <kbd className="flex items-center gap-0.5 font-mono text-xs">
              {isMac ? <Command className="h-3 w-3" aria-hidden="true" /> : "Ctrl "}K
            </kbd>
          </button>
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-ink transition hover:brightness-110 sm:inline-block"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul
          id="mobile-nav"
          className="mx-auto mt-2 max-w-6xl space-y-1 rounded-2xl border border-border bg-surface-strong/95 p-2 backdrop-blur-xl lg:hidden"
        >
          {nav.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-xl px-4 py-3 font-medium",
                  active === id ? "bg-primary/12 text-accent" : "text-muted",
                )}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="p-1">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-xl bg-primary py-3 text-center font-bold text-primary-ink"
            >
              Let&apos;s talk
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
