"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "@/content/site";
import { cn } from "@/lib/utils";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Card whose border area lights up where the cursor is. */
export function GlowCard({ className, children, ...props }: React.ComponentProps<"div">) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--x", `${e.clientX - r.left}px`);
        el.style.setProperty("--y", `${e.clientY - r.top}px`);
      }}
      className={cn(
        "glow-card rounded-3xl border border-border bg-surface shadow-[0_1px_2px_rgb(7_18_15/0.04),0_14px_34px_-18px_rgb(7_18_15/0.2)] backdrop-blur-sm dark:shadow-none",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/** Counts up from 0 to `to` the first time it scrolls into view. */
export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      setValue(0);
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / 1200, 1);
        setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

/** Current time in Lamin, rendered after mount so prerendered HTML stays stable. */
export function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = new Intl.DateTimeFormat("en-GB", {
      timeZone: profile.timeZone,
      hour: "2-digit",
      minute: "2-digit",
    });
    const update = () => setTime(format.format(new Date()));
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{time ?? "--:--"}</span>;
}

type Token = { text: string; className?: string };

// A small "profile as code" snippet, tokenised for syntax colouring
const code: Token[][] = [
  [
    { text: "const ", className: "text-[#c792ea]" },
    { text: "mamudou", className: "text-[#82aaff]" },
    { text: " = {", className: "text-[#e2e8f0]" },
  ],
  [
    { text: "  role", className: "text-[#f07178]" },
    { text: ": ", className: "text-[#e2e8f0]" },
    { text: '"Web Developer"', className: "text-[#c3e88d]" },
    { text: ",", className: "text-[#e2e8f0]" },
  ],
  [
    { text: "  stack", className: "text-[#f07178]" },
    { text: ": [", className: "text-[#e2e8f0]" },
    { text: '"React"', className: "text-[#c3e88d]" },
    { text: ", ", className: "text-[#e2e8f0]" },
    { text: '"Next.js"', className: "text-[#c3e88d]" },
    { text: ", ", className: "text-[#e2e8f0]" },
    { text: '"Strapi"', className: "text-[#c3e88d]" },
    { text: "],", className: "text-[#e2e8f0]" },
  ],
  [
    { text: "  teaches", className: "text-[#f07178]" },
    { text: ": ", className: "text-[#e2e8f0]" },
    { text: '"Frontend @ JCC"', className: "text-[#c3e88d]" },
    { text: ",", className: "text-[#e2e8f0]" },
  ],
  [
    { text: "  available", className: "text-[#f07178]" },
    { text: ": ", className: "text-[#e2e8f0]" },
    { text: "true", className: "text-[#f78c6c]" },
    { text: ",", className: "text-[#e2e8f0]" },
  ],
  [{ text: "};", className: "text-[#e2e8f0]" }],
];

// Character offset at which each line (plus its newline) ends
const lineEnds = code.reduce<number[]>((ends, line) => {
  const length = line.reduce((m, t) => m + t.text.length, 0) + 1;
  ends.push((ends.at(-1) ?? 0) + length);
  return ends;
}, []);
const totalChars = lineEnds.at(-1) ?? 0;
// Character offset at which each token starts
const tokenStarts = code.map((line, li) => {
  let offset = li === 0 ? 0 : lineEnds[li - 1];
  return line.map((t) => {
    const start = offset;
    offset += t.text.length;
    return start;
  });
});
const plainText = code.map((line) => line.map((t) => t.text).join("")).join("\n");

/** Editor-style card that types out the snippet once it is visible. */
export function CodeCard({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(totalChars);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    let id: ReturnType<typeof setInterval> | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      setShown(0);
      id = setInterval(() => {
        setShown((n) => {
          if (n >= totalChars) {
            clearInterval(id);
            return n;
          }
          return n + 2;
        });
      }, 28);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearInterval(id);
    };
  }, []);

  const typing = shown < totalChars;
  const cursorLine = lineEnds.findIndex((end) => shown < end);
  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden rounded-2xl border border-white/10 bg-code/90 shadow-2xl shadow-black/40 backdrop-blur-md",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-xs text-white/50">about.ts</span>
      </div>
      <pre className="px-4 py-4 font-mono text-[12.5px] leading-6" aria-label={plainText}>
        <code aria-hidden="true">
          {code.map((line, li) => {
            const visible = line.map((token, ti) => {
              const count = Math.max(0, Math.min(token.text.length, shown - tokenStarts[li][ti]));
              return count > 0 ? (
                <span key={ti} className={token.className}>
                  {token.text.slice(0, count)}
                </span>
              ) : null;
            });
            return (
              <div key={li} className="min-h-6">
                {visible}
                {typing && li === cursorLine && (
                  <span className="ml-px inline-block h-4 w-[7px] translate-y-[3px] animate-blink bg-[#5eead4]" />
                )}
              </div>
            );
          })}
        </code>
      </pre>
    </div>
  );
}

/** Small icon button that copies `value` and briefly confirms. */
export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(id);
  }, [copied]);

  return (
    <button
      type="button"
      onClick={() => navigator.clipboard?.writeText(value).then(() => setCopied(true))}
      aria-label={copied ? "Copied" : label}
      title={label}
      className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-surface px-3 text-sm font-semibold text-muted transition-colors hover:border-accent/50 hover:text-foreground"
    >
      {copied ? <Check className="h-4 w-4 text-accent" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

/** Thin bar at the top of the window showing how far the page has been scrolled. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? window.scrollY / max : 0;
        if (ref.current) ref.current.style.transform = `scaleX(${progress})`;
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-2"
    />
  );
}
