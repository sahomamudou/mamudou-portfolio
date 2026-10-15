"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { ArrowRight, Copy, CornerDownLeft, ExternalLink, GraduationCap, Hash, Moon, Search } from "lucide-react";
import { nav, profile, socials } from "@/content/site";
import { cn } from "@/lib/utils";

type Action = { id: string; label: string; group: string; icon: typeof Hash; hash?: string; href?: string };

const actions: Action[] = [
  ...nav.map((s) => ({ id: s.id, label: s.label, group: "Navigate", icon: Hash, hash: s.id })),
  { id: "book", label: "Book a private class", group: "Actions", icon: GraduationCap, hash: "book-class" },
  { id: "copy", label: "Copy email address", group: "Actions", icon: Copy },
  { id: "theme", label: "Toggle light / dark theme", group: "Actions", icon: Moon },
  ...socials.map((s) => ({ id: s.icon, label: `Open ${s.label}`, group: "Links", icon: ExternalLink, href: s.href })),
];

export const OPEN_COMMAND_MENU = "open-command-menu";

/** ⌘K / Ctrl+K menu to jump to sections, copy the email, switch theme or open profiles. */
export function CommandMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const { resolvedTheme, setTheme } = useTheme();

  const open = useCallback(() => {
    setQuery("");
    setIndex(0);
    dialogRef.current?.showModal();
    requestAnimationFrame(() => inputRef.current?.focus());
  }, []);
  const close = useCallback(() => dialogRef.current?.close(), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (dialogRef.current?.open) close();
        else open();
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_COMMAND_MENU, open);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_COMMAND_MENU, open);
    };
  }, [open, close]);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 2000);
    return () => clearTimeout(id);
  }, [toast]);

  const run = (action: Action) => {
    close();
    if (action.hash) window.location.hash = action.hash;
    else if (action.href) window.open(action.href, "_blank", "noopener,noreferrer");
    else if (action.id === "theme") setTheme(resolvedTheme === "dark" ? "light" : "dark");
    else if (action.id === "copy")
      navigator.clipboard?.writeText(profile.email).then(
        () => setToast("Email copied to clipboard"),
        () => setToast(profile.email),
      );
  };

  const filtered = actions.filter((a) => a.label.toLowerCase().includes(query.trim().toLowerCase()));
  const active = Math.min(index, Math.max(filtered.length - 1, 0));

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((active + 1) % Math.max(filtered.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((active - 1 + filtered.length) % Math.max(filtered.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[active]) run(filtered[active]);
    }
  };

  return (
    <>
      <dialog
        ref={dialogRef}
        aria-label="Command menu"
        onClick={(e) => e.target === dialogRef.current && close()}
        className="m-auto mt-[12vh] w-[min(560px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-border bg-surface-strong p-0 text-foreground shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-center gap-3 border-b border-border px-4">
          <Search className="h-4 w-4 text-subtle" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIndex(0);
            }}
            onKeyDown={onInputKey}
            placeholder="Type a command or search…"
            aria-label="Search commands"
            aria-controls="command-list"
            aria-activedescendant={filtered[active] ? `cmd-${filtered[active].id}` : undefined}
            role="combobox"
            aria-expanded="true"
            className="h-14 flex-1 bg-transparent text-[15px] outline-none placeholder:text-subtle"
          />
          <kbd className="rounded-md border border-border px-1.5 py-0.5 font-mono text-[11px] text-subtle">ESC</kbd>
        </div>
        <ul id="command-list" role="listbox" className="max-h-[50vh] overflow-y-auto p-2">
          {filtered.length === 0 && <li className="px-3 py-6 text-center text-sm text-subtle">No results</li>}
          {filtered.map((action, i) => {
            const header = i === 0 || filtered[i - 1].group !== action.group ? action.group : null;
            const Icon = action.icon;
            return (
              <li key={action.id} role="presentation">
                {header && (
                  <p className="px-3 pt-3 pb-1.5 text-[11px] font-semibold tracking-wider text-subtle uppercase">
                    {header}
                  </p>
                )}
                <div
                  id={`cmd-${action.id}`}
                  role="option"
                  aria-selected={i === active}
                  onMouseMove={() => setIndex(i)}
                  onClick={() => run(action)}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm",
                    i === active ? "bg-primary/15 text-foreground" : "text-muted",
                  )}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span className="flex-1">{action.label}</span>
                  {i === active &&
                    (action.group === "Navigate" ? (
                      <ArrowRight className="h-4 w-4 text-subtle" aria-hidden="true" />
                    ) : (
                      <CornerDownLeft className="h-4 w-4 text-subtle" aria-hidden="true" />
                    ))}
                </div>
              </li>
            );
          })}
        </ul>
      </dialog>
      <div
        role="status"
        className={cn(
          "fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full border border-border bg-surface-strong px-4 py-2 text-sm shadow-lg transition-all",
          toast ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        {toast}
      </div>
    </>
  );
}
