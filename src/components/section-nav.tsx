"use client";

import { useEffect, useState } from "react";
import { sections } from "@/content/site";
import { cn } from "@/lib/utils";

/** Desktop section navigation that highlights the section currently in view. */
export function SectionNav() {
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    const update = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current: string = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= marker) current = id;
      }
      setActive(atBottom ? sections[sections.length - 1].id : current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav className="mt-16 hidden lg:block" aria-label="In-page">
      <ul className="w-max">
        {sections.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? "location" : undefined}
                className="group flex items-center py-3"
              >
                <span
                  className={cn(
                    "mr-4 h-px transition-all motion-reduce:transition-none",
                    isActive
                      ? "w-16 bg-foreground"
                      : "w-8 bg-subtle group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16",
                  )}
                />
                <span
                  className={cn(
                    "text-xs font-bold tracking-widest uppercase transition-colors",
                    isActive ? "text-foreground" : "text-subtle group-hover:text-foreground",
                  )}
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
