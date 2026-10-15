import Image from "next/image";
import { ArrowRight, ArrowUpRight, Code, FlaskConical, PenTool, Quote, Rocket, Search } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { ServiceList } from "@/components/services";
import { SocialLinks } from "@/components/social-links";
import { process, profile, projects, socials, testimonials } from "@/content/site";
import { cn } from "@/lib/utils";

const github = socials.find((s) => s.icon === "github")!.href;

function SectionHeader({
  title,
  aside,
}: {
  title: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <Reveal className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <h2 className="text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl">{title}</h2>
      {aside}
    </Reveal>
  );
}

export function AboutIntro() {
  return (
    <section id="about" aria-label="About" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
      <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-lime ring-4 ring-lime/30" aria-hidden="true" />
            (Available for Work)
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-3xl leading-snug font-semibold tracking-tight sm:text-4xl">
            Welcome to my portfolio! I&apos;m {profile.firstName}, a full-stack developer and
            instructor{" "}
            <span className="text-faded">
              based in {profile.location}. I build fast, accessible web apps with React, Next.js and
              Strapi, and I teach students at JCC and in private classes to do the same.
            </span>
          </p>
          <a
            href="#work"
            className="mt-10 inline-flex items-center gap-2 font-semibold underline underline-offset-4"
          >
            See my latest work
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" aria-label="Services" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <SectionHeader
        title={
          <>
            The services
            <br />I provide
          </>
        }
        aside={
          <div className="max-w-sm">
            <p className="text-muted">
              From building your website or web app to teaching you how to code, here is how I can
              help.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
            >
              Hire Me
            </a>
          </div>
        }
      />
      <Reveal>
        <ServiceList />
      </Reveal>
    </section>
  );
}

export function Showcase() {
  const [featured, ...rest] = projects;
  return (
    <section id="work" aria-label="Work" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeader
        title={
          <>
            Check out my
            <br />
            latest work
          </>
        }
        aside={
          <a
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 self-start rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background md:self-auto"
          >
            View all on GitHub
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        }
      />

      <Reveal>
        <a
          href={featured.href}
          target="_blank"
          rel="noreferrer noopener"
          className="group relative block aspect-[4/3] overflow-hidden rounded-[2rem] bg-ink sm:aspect-[16/8]"
        >
          <Image
            src={featured.image}
            alt=""
            fill
            sizes="(min-width: 1280px) 1240px, 100vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/45 to-black/5" />
          <span className="absolute top-1/2 right-[12%] flex h-24 w-24 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-lime text-sm font-semibold text-lime-ink transition-transform group-hover:scale-110 motion-reduce:transition-none sm:h-28 sm:w-28">
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            View project
          </span>
          <div className="absolute bottom-6 left-6 text-white sm:bottom-10 sm:left-10">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
              {featured.category}
            </span>
            <h3 className="mt-3 text-2xl font-semibold sm:text-4xl">{featured.title}</h3>
            <p className="mt-2 hidden max-w-md text-white/80 sm:block">{featured.description}</p>
          </div>
        </a>
      </Reveal>

      <ul className="mt-6 grid gap-6 md:grid-cols-3">
        {rest.map((project, i) => (
          <li key={project.title}>
            <Reveal delay={i * 100}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group block rounded-[1.75rem] bg-card p-3"
              >
                <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-ink">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 400px, 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 px-3 pt-5 pb-3">
                  <div>
                    <p className="text-xs font-medium text-muted uppercase">{project.category}</p>
                    <h3 className="mt-1 text-lg font-semibold">{project.title}</h3>
                    <p className="mt-2 text-sm text-muted">{project.description}</p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors group-hover:border-lime group-hover:bg-lime group-hover:text-lime-ink">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Marquee({ word }: { word: string }) {
  const items = Array.from({ length: 6 });
  return (
    <div className="overflow-hidden py-6" aria-hidden="true">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex">
            {items.map((_, i) => (
              <span key={i} className="flex items-center text-6xl font-bold uppercase sm:text-8xl">
                <span className="text-outline px-6">{word}</span>
                <span className="h-4 w-4 rounded-full bg-foreground" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="py-12 sm:py-16">
      <h2 id="testimonials-title" className="sr-only">
        Testimonials
      </h2>
      <Marquee word="Testimonials" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {testimonials.length > 0 ? (
          <ul className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
            {testimonials.map((t, i) => (
              <li
                key={t.name}
                className={cn(
                  "flex w-[85%] shrink-0 snap-start flex-col justify-between rounded-[1.75rem] p-8 sm:w-[420px]",
                  i % 3 === 1 ? "bg-lime text-lime-ink" : "bg-card",
                )}
              >
                <blockquote>
                  <Quote className="h-8 w-8 opacity-60" aria-hidden="true" />
                  <p className="mt-4 text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
                <div className="mt-8 flex items-center gap-3">
                  {t.avatar ? (
                    <Image src={t.avatar} alt="" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
                  ) : (
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background">
                      {t.name
                        .split(" ")
                        .map((p) => p[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  )}
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className={cn("text-sm", i % 3 === 1 ? "text-lime-ink/70" : "text-muted")}>{t.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <Reveal className="mx-auto max-w-3xl rounded-[2rem] bg-lime p-10 text-center text-lime-ink sm:p-14">
            <Quote className="mx-auto h-10 w-10 opacity-60" aria-hidden="true" />
            <p className="mt-6 text-2xl leading-snug font-semibold sm:text-3xl">
              Were you one of my students or clients? I&apos;d love to hear about your experience.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime-ink px-6 py-3 font-semibold text-lime"
            >
              Share your story
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}

const processIcons = {
  search: Search,
  plan: PenTool,
  build: Code,
  test: FlaskConical,
  deliver: Rocket,
};

export function Process() {
  return (
    <section aria-labelledby="process-title" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
      <div className="rounded-[2rem] bg-card p-6 sm:p-10 lg:p-14">
        <Reveal>
          <h2 id="process-title" className="text-center text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl">
            My tried-and-true
            <br />
            working process
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {process.map((step, i) => {
            const Icon = processIcons[step.icon];
            return (
              <li key={step.title} className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}>
                <Reveal delay={i * 80} className="h-full rounded-3xl bg-background p-7">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-border">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className="mt-8 text-xs font-semibold text-muted">0{i + 1}</p>
                  <h3 className="mt-1 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted">{step.text}</p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="mx-auto max-w-7xl px-4 pb-12 sm:px-6">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink p-6 text-white sm:p-10 lg:p-14">
        <div
          aria-hidden="true"
          className="absolute -top-24 -left-24 -z-10 h-80 w-80 rounded-full bg-lime/20 blur-[100px]"
        />
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-lime">Let&apos;s talk</p>
            <h2 className="mt-3 text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl">
              Have a project or want to learn to code?
            </h2>
            <p className="mt-5 max-w-md text-white/70">
              Whether it&apos;s a website, a web app or private classes, send me a message and
              let&apos;s make it happen.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-block text-xl font-semibold underline decoration-lime underline-offset-8 sm:text-2xl"
            >
              {profile.email}
            </a>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
