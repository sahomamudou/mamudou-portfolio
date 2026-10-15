"use client";

import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme";
import { nav, profile } from "@/content/site";
import { cn } from "@/lib/utils";

function useActiveSection() {
  const [active, setActive] = useState<string>(nav[0].id);
  useEffect(() => {
    const update = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current: string = nav[0].id;
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

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6"
      >
        <a
          href="#home"
          aria-label={`${profile.name}, back to top`}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-sm font-bold tracking-tight text-background"
        >
          MS
        </a>

        <ul className="hidden items-center gap-1 rounded-full bg-card p-1 md:flex">
          {nav.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
                className={cn(
                  "block rounded-full px-5 py-2 text-sm font-medium transition-colors",
                  active === id ? "bg-lime text-lime-ink" : "text-muted hover:text-foreground",
                )}
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
            className="hidden items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Let&apos;s talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-nav" className="space-y-1 border-t border-border px-4 pt-2 pb-4 md:hidden">
          {nav.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-2xl px-4 py-3 text-base font-medium",
                  active === id ? "bg-lime text-lime-ink" : "text-muted",
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
