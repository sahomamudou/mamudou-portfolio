"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, GraduationCap, Monitor, Server, Users } from "lucide-react";
import { services, type Service } from "@/content/site";
import { cn } from "@/lib/utils";

const icons: Record<Service["icon"], typeof Monitor> = {
  monitor: Monitor,
  server: Server,
  classes: GraduationCap,
  mentor: Users,
};

/** Expandable service cards: one open at a time, the first open by default. */
export function ServiceList() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <ul className="space-y-4">
      {services.map((service, i) => {
        const Icon = icons[service.icon];
        const isOpen = openIndex === i;
        const panelId = `service-panel-${i}`;
        return (
          <li
            key={service.title}
            className={cn(
              "rounded-3xl border transition-colors",
              isOpen ? "border-foreground/80" : "border-border hover:border-foreground/40",
            )}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center gap-4 px-6 py-5 text-left sm:px-8 sm:py-6"
              >
                <span className="flex-1">
                  <span className="block text-xl font-semibold sm:text-2xl">{service.title}</span>
                  <span className="mt-1 block text-sm text-muted">{service.summary}</span>
                </span>
                {!isOpen && (
                  <span className="hidden h-14 w-24 items-center justify-center rounded-2xl bg-card sm:flex">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                )}
                <span
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all",
                    isOpen ? "border-foreground bg-foreground text-background" : "border-border",
                  )}
                >
                  <ArrowUpRight
                    className={cn("h-5 w-5 transition-transform", isOpen && "rotate-90")}
                    aria-hidden="true"
                  />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              className={cn(
                "grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden" inert={!isOpen}>
                <div className="grid gap-8 px-6 pb-8 sm:px-8 lg:grid-cols-2">
                  <div>
                    <p className="leading-relaxed text-muted">{service.description}</p>
                    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Includes">
                      {service.tags.map((tag) => (
                        <li key={tag} className="rounded-full bg-card px-4 py-1.5 text-sm font-medium">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={service.example?.href ?? "#contact"}
                      {...(service.example && { target: "_blank", rel: "noreferrer noopener" })}
                      className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-4"
                    >
                      {service.example ? `See example: ${service.example.title}` : "Get in touch"}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>

                  {service.example ? (
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-ink">
                      <Image
                        src={service.example.image}
                        alt={`${service.example.title} screenshot`}
                        fill
                        sizes="(min-width: 1024px) 560px, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[16/10] items-center justify-center rounded-2xl bg-ink">
                      <span className="flex h-24 w-24 items-center justify-center rounded-full bg-lime text-lime-ink">
                        <Icon className="h-10 w-10" aria-hidden="true" />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
