import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  GraduationCap,
  MapPin,
  Monitor,
  Plus,
  Quote,
  Server,
  Sparkles,
  Users,
} from "lucide-react";
import { FaGithub as Github } from "react-icons/fa6";
import { ContactForm } from "@/components/contact-form";
import { CopyButton, GlowCard, LocalTime } from "@/components/interactive";
import { Reveal } from "@/components/reveal";
import { SocialLinks } from "@/components/social-links";
import {
  boutique,
  classes,
  education,
  experience,
  faq,
  profile,
  projects,
  services,
  socials,
  stack,
  testimonials,
  testimonialsSource,
} from "@/content/site";
import { cn } from "@/lib/utils";

const github = socials.find((s) => s.icon === "github")!.href;

function SectionHeading({
  index,
  label,
  title,
  description,
  align = "left",
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("mb-12 max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="font-mono text-sm text-accent">
        {index}. <span className="text-subtle">{label}</span>
      </p>
      <h2 className="mt-3 text-4xl leading-[1.08] font-extrabold tracking-[-0.03em] sm:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>}
    </Reveal>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium">
      {children}
    </span>
  );
}

function Container({ id, label, children, className }: { id?: string; label: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} aria-label={label} className={cn("mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28", className)}>
      {children}
    </section>
  );
}

export function About() {
  return (
    <Container id="about" label="About">
      <SectionHeading index="01" label="about" title={<>A developer who loves <span className="text-gradient">building and explaining.</span></>} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Reveal className="md:col-span-2 lg:row-span-2">
          <GlowCard className="flex h-full flex-col justify-between p-8">
            <div className="space-y-4 text-[17px] leading-relaxed text-muted">
              <p>
                I care about the details that make software feel effortless: clean component architecture,{" "}
                <span className="text-foreground">accessible interfaces</span> and code the next person can maintain.
              </p>
              <p>
                Most of my work is in the React ecosystem, and I&apos;m growing into backend architecture with{" "}
                <span className="text-foreground">Strapi, TypeScript and SQL</span>.
              </p>
              <p>
                Teaching at <span className="text-foreground">JCC</span> and in private classes keeps me sharp. Explaining
                why something works, not just how, has made me a clearer engineer.
              </p>
            </div>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 font-bold text-accent">
              Let&apos;s work together <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </GlowCard>
        </Reveal>

        <Reveal delay={60}>
          <GlowCard className="h-full p-6">
            <div className="flex items-center gap-3">
              <Image src={profile.headshot} alt="" width={96} height={96} className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/40" />
              <div>
                <p className="font-bold">{profile.name}</p>
                <p className="flex items-center gap-1 text-sm text-subtle">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {profile.location}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-subtle">Speaks {profile.languages.join(", ").replace(/, ([^,]*)$/, " & $1")}</p>
            <p className="mt-4 text-sm text-subtle">Local time</p>
            <p className="font-mono text-3xl font-bold">
              <LocalTime />
            </p>
          </GlowCard>
        </Reveal>

        <Reveal delay={120}>
          <GlowCard className="relative h-full min-h-[200px] overflow-hidden">
            <Image
              src={profile.teachingPhoto}
              alt={`${profile.firstName} working on his laptop`}
              fill
              sizes="(min-width: 1024px) 280px, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-[50%_30%]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <p className="flex items-center gap-1.5 text-sm text-white/75">
                <GraduationCap className="h-4 w-4" aria-hidden="true" /> Currently
              </p>
              <p className="mt-1 text-lg leading-snug font-bold">Developer &amp; instructor at Jasseh Code Camp</p>
            </div>
          </GlowCard>
        </Reveal>

        <Reveal delay={180}>
          <GlowCard className="h-full p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/12 text-accent">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="mt-6 text-sm text-subtle">Open to</p>
            <ul className="mt-1 space-y-1 font-bold">
              <li>Freelance projects</li>
              <li>Developer roles</li>
              <li>New students</li>
            </ul>
          </GlowCard>
        </Reveal>

        <Reveal delay={240}>
          <a href={github} target="_blank" rel="noreferrer noopener" className="group block h-full">
            <GlowCard className="flex h-full flex-col justify-between p-6 transition-colors group-hover:border-accent/40">
              <Github className="h-7 w-7" aria-hidden="true" />
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="text-sm text-subtle">Code</p>
                  <p className="text-lg font-bold">See my GitHub</p>
                </div>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </div>
            </GlowCard>
          </a>
        </Reveal>

        <Reveal className="md:col-span-2 lg:col-span-4" delay={120}>
          <GlowCard className="grid gap-6 p-6 sm:p-8 lg:grid-cols-3">
            {(
              [
                ["Frontend", stack.frontend],
                ["Backend", stack.backend],
                ["Tools", stack.tools],
              ] as const
            ).map(([group, items]) => (
              <div key={group}>
                <p className="font-mono text-sm text-subtle">{group.toLowerCase()}/</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </GlowCard>
        </Reveal>
      </div>
    </Container>
  );
}

const serviceIcons = { monitor: Monitor, server: Server, mentor: Users };

export function Services() {
  return (
    <Container id="services" label="Services">
      <SectionHeading
        index="02"
        label="services"
        title="What I can do for you"
        description="From an idea on paper to a fast, maintainable product, and the knowledge to build your own."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service, i) => {
          const Icon = serviceIcons[service.icon];
          return (
            <Reveal key={service.title} delay={i * 80}>
              <GlowCard className="h-full p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2dd4bf] to-[#6366f1] text-white shadow-lg shadow-[#2dd4bf]/20">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{service.text}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </Reveal>
          );
        })}
      </div>
    </Container>
  );
}

export function Classes() {
  return (
    <Container id="classes" label="Private classes">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            index="03"
            label="classes"
            title={<>Learn to code with <span className="text-gradient">private classes.</span></>}
            description={classes.intro}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {classes.formats.map((format, i) => (
              <Reveal key={format.title} delay={i * 80}>
                <GlowCard className="h-full p-6">
                  <h3 className="font-bold">{format.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{format.text}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <a
              href="#book-class"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-bold text-primary-ink transition hover:brightness-110"
            >
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              Book a class
            </a>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="rounded-[1.75rem] bg-gradient-to-br from-[#2dd4bf]/50 via-border to-[#6366f1]/50 p-px">
            <div className="rounded-[calc(1.75rem-1px)] bg-surface-strong p-8">
              <p className="font-mono text-sm text-subtle">curriculum.md</p>
              <h3 className="mt-2 text-2xl font-bold">What you&apos;ll learn</h3>
              <ol className="relative mt-8 space-y-7 before:absolute before:top-2 before:bottom-2 before:left-[15px] before:w-px before:bg-border">
                {classes.tracks.map((track, i) => (
                  <li key={track.title} className="relative flex gap-5">
                    <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-surface-strong font-mono text-xs font-bold text-accent">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-bold">{track.title}</p>
                      <p className="text-sm text-muted">{track.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </Container>
  );
}

function TechList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
      {items.map((t) => (
        <li key={t} className="rounded-md bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent">
          {t}
        </li>
      ))}
    </ul>
  );
}

function BoutiqueCaseStudy() {
  return (
    <Reveal>
      <div className="rounded-[2rem] bg-gradient-to-br from-[#2dd4bf]/60 via-border to-[#6366f1]/60 p-px">
        <div className="rounded-[calc(2rem-1px)] bg-surface-strong p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
            <p className="font-mono text-xs text-accent">Case study · Field work</p>
            <h3 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{boutique.title}</h3>
            <p className="mt-1 text-sm font-semibold text-subtle">{boutique.subtitle}</p>
            <p className="mt-5 leading-relaxed text-muted">{boutique.text}</p>
            </div>
            <ul className="space-y-2.5 lg:pb-1">
              {boutique.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm font-medium">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <ul className="mt-8 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-4 lg:auto-rows-[230px]" aria-label="Photos from Boutique deployments">
            {boutique.photos.map((photo) => (
              <li
                key={photo.src}
                className={cn("group/photo relative overflow-hidden rounded-2xl bg-surface", photo.span, !photo.span && "max-md:col-span-1")}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 560px, 50vw"
                  className="object-cover transition-transform duration-700 group-hover/photo:scale-105 motion-reduce:transition-none"
                />
                <span className="absolute bottom-2 left-2 rounded-lg bg-black/70 px-2.5 py-1 text-xs font-semibold text-white">
                  {photo.caption}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}

export function Work() {
  const [featured, ...rest] = projects;
  return (
    <Container id="work" label="Work">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading index="04" label="work" title="Selected work" description="Real-world systems I support in the field, and projects I've built and shipped." />
        <Reveal className="mb-12">
          <a
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-bold transition hover:border-accent/50"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            All projects on GitHub
          </a>
        </Reveal>
      </div>

      <BoutiqueCaseStudy />

      <Reveal className="mt-16 mb-6">
        <h3 className="font-mono text-sm text-subtle">personal projects/</h3>
      </Reveal>
      <Reveal>
        <GlowCard className="group grid overflow-hidden lg:grid-cols-[1.4fr_1fr]">
          <div className="relative aspect-[16/10] overflow-hidden border-b border-border lg:aspect-auto lg:min-h-[380px] lg:border-r lg:border-b-0">
            <Image
              src={featured.image}
              alt={`${featured.title} screenshot`}
              fill
              sizes="(min-width: 1024px) 660px, 100vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-col p-8">
            <p className="font-mono text-xs text-accent">Featured · {featured.category}</p>
            <h3 className="mt-3 text-3xl font-extrabold tracking-tight">{featured.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{featured.description}</p>
            <div className="mt-6">
              <TechList items={featured.tech} />
            </div>
            <div className="mt-auto flex gap-3 pt-8">
              <a
                href={featured.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-bold text-background"
              >
                Live demo <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              {featured.repo && (
                <a href={featured.repo} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-bold">
                  <Github className="h-4 w-4" aria-hidden="true" /> Code
                </a>
              )}
            </div>
          </div>
        </GlowCard>
      </Reveal>

      <ul className="mt-4 grid gap-4 md:grid-cols-3">
        {rest.map((project, i) => (
          <li key={project.title}>
            <Reveal delay={i * 80} className="h-full">
              <a href={project.href} target="_blank" rel="noreferrer noopener" className="group block h-full">
                <GlowCard className="flex h-full flex-col overflow-hidden transition-colors group-hover:border-accent/40">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 380px, 100vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-mono text-xs text-subtle">{project.category}</p>
                        <h3 className="mt-1 text-lg font-bold">{project.title}</h3>
                      </div>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-subtle transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" aria-hidden="true" />
                    </div>
                    <p className="mt-2 mb-5 text-sm leading-relaxed text-muted">{project.description}</p>
                    <div className="mt-auto">
                      <TechList items={project.tech} />
                    </div>
                  </div>
                </GlowCard>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export function Experience() {
  return (
    <Container label="Experience">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <SectionHeading
            index="05"
            label="experience"
            title="Where I've been building and teaching"
            description="From student to teaching assistant to full-time developer and instructor at Jasseh Code Camp."
          />
        </div>
        <ol className="relative space-y-4 before:absolute before:top-4 before:bottom-4 before:left-[19px] before:w-px before:bg-gradient-to-b before:from-accent before:to-transparent">
          {experience.map((job, i) => (
            <li key={job.title} className="relative pl-14">
              <span
                className={cn(
                  "absolute top-6 left-3 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent",
                  i === 0 ? "bg-accent shadow-[0_0_0_4px_var(--glow-a)]" : "bg-background",
                )}
                aria-hidden="true"
              />
              <Reveal delay={i * 80}>
                <GlowCard className="p-6">
                  <p className="font-mono text-xs text-accent">{job.period}</p>
                  <h3 className="mt-2 text-lg font-bold">
                    {job.title} <span className="font-medium text-subtle">· {job.org}</span>
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{job.text}</p>
                </GlowCard>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      <Reveal className="mt-16">
        <h3 className="font-mono text-sm text-subtle">education &amp; training/</h3>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <li key={item.title}>
              <GlowCard className="h-full p-6">
                <p className="font-mono text-xs text-accent">{item.org}</p>
                <p className="mt-2 text-lg font-bold">{item.title}</p>
                {item.items && (
                  <ul className="mt-3 space-y-1.5 text-sm text-muted">
                    {item.items.map((course) => (
                      <li key={course} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                        {course}
                      </li>
                    ))}
                  </ul>
                )}
                {item.note && (
                  <p className="mt-3 inline-flex rounded-md bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                    {item.note}
                  </p>
                )}
              </GlowCard>
            </li>
          ))}
        </ul>
      </Reveal>
    </Container>
  );
}

function Initials({ name }: { name: string }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2dd4bf] to-[#6366f1] text-sm font-bold text-white">
      {name
        .split(" ")
        .map((p) => p[0])
        .join("")
        .slice(0, 2)}
    </span>
  );
}

export function Testimonials() {
  const featured = testimonials.find((t) => t.featured);
  const rest = testimonials.filter((t) => t !== featured);

  return (
    <Container id="testimonials" label="Testimonials">
      <SectionHeading
        index="06"
        label="testimonials"
        title="What students say"
        description="Words from students of JCC's CS Prep: Bridge to Computer Science program, where I teach as part of the JCC team."
        align="center"
      />
      {testimonials.length > 0 ? (
        <>
          {featured && (
            <Reveal>
              <figure className="mx-auto max-w-3xl rounded-[1.75rem] bg-gradient-to-br from-[#2dd4bf]/60 via-border to-[#6366f1]/60 p-px">
                <div className="rounded-[calc(1.75rem-1px)] bg-surface-strong p-8 sm:p-10">
                  <Quote className="h-8 w-8 text-accent" aria-hidden="true" />
                  <blockquote className="mt-5 text-xl leading-relaxed font-medium sm:text-2xl">
                    &ldquo;
                    {featured.quote.split(profile.firstName).map((part, i, all) => (
                      <span key={i}>
                        {part}
                        {i < all.length - 1 && <mark className="rounded bg-accent/15 px-1 text-accent">{profile.firstName}</mark>}
                      </span>
                    ))}
                    &rdquo;
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-3">
                    <Initials name={featured.name} />
                    <div>
                      <p className="font-bold">{featured.name}</p>
                      <p className="text-sm text-subtle">{featured.role}</p>
                    </div>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          )}

          {/*
            Scrolling row of equal-height cards. The list is rendered twice so the loop is seamless;
            hovering pauses it. With reduced motion it becomes a plain swipeable row.
          */}
          <Reveal className="group/marquee relative -mx-4 mt-8 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] motion-reduce:overflow-x-auto sm:-mx-6">
            <div className="flex w-max animate-marquee gap-4 px-4 group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none sm:px-6">
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  aria-hidden={copy === 1 ? true : undefined}
                  className={cn("flex gap-4", copy === 1 && "motion-reduce:hidden")}
                >
                  {rest.map((t) => (
                    <li key={t.name} className="flex w-[300px] sm:w-[360px]">
                      <GlowCard className="flex w-full flex-col p-6">
                        <Quote className="h-5 w-5 text-accent" aria-hidden="true" />
                        <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-muted">
                          &ldquo;{t.quote}&rdquo;
                        </blockquote>
                        <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                          {t.avatar ? (
                            <Image src={t.avatar} alt="" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
                          ) : (
                            <Initials name={t.name} />
                          )}
                          <div>
                            <p className="font-bold">{t.name}</p>
                            <p className="text-sm text-subtle">{t.role}</p>
                          </div>
                        </div>
                      </GlowCard>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </Reveal>

          <p className="mt-8 text-center text-sm text-subtle">
            Published on{" "}
            <a
              href={testimonialsSource.href}
              target="_blank"
              rel="noreferrer noopener"
              className="font-semibold text-accent underline underline-offset-4"
            >
              {testimonialsSource.label}
            </a>
            . Were you one of my students?{" "}
            <a href="#contact" className="font-semibold text-foreground underline underline-offset-4">
              Share your story
            </a>
            .
          </p>
        </>
      ) : (
        <Reveal>
          <GlowCard className="mx-auto max-w-2xl p-10 text-center">
            <Quote className="mx-auto h-8 w-8 text-accent" aria-hidden="true" />
            <p className="mt-5 text-2xl leading-snug font-bold">
              Were you one of my students or clients? I&apos;d love to feature your experience here.
            </p>
            <a href="#contact" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-primary-ink">
              Share your story <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </GlowCard>
        </Reveal>
      )}
    </Container>
  );
}

export function Faq() {
  return (
    <Container label="Frequently asked questions">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <SectionHeading index="07" label="faq" title="Questions, answered" description="Can't find what you're looking for? Send me a message and I'll get back to you." />
        </div>
        <div className="space-y-3">
          {faq.map((item, i) => (
            <Reveal key={item.q} delay={i * 50}>
              <details className="group rounded-2xl border border-border bg-surface backdrop-blur-sm open:border-accent/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-bold [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <Plus className="h-5 w-5 shrink-0 text-accent transition-transform group-open:rotate-45" aria-hidden="true" />
                </summary>
                <p className="px-5 pb-5 leading-relaxed text-muted">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </Container>
  );
}

export function Contact() {
  return (
    <Container id="contact" label="Contact" className="pb-10">
      <span id="book-class" className="block scroll-mt-28" aria-hidden="true" />
      <Reveal>
        <div className="rounded-[2rem] bg-gradient-to-br from-[#2dd4bf]/60 via-border to-[#6366f1]/60 p-px">
          <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-surface-strong p-6 sm:p-10 lg:p-14">
            <div aria-hidden="true" className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#2dd4bf]/20 blur-[100px]" />
            <div className="relative grid gap-12 lg:grid-cols-2">
              <div>
                <p className="font-mono text-sm text-accent">
                  08. <span className="text-subtle">contact</span>
                </p>
                <h2 className="mt-3 text-4xl leading-[1.08] font-extrabold tracking-[-0.03em] sm:text-5xl">
                  Let&apos;s build something <span className="text-gradient">great together.</span>
                </h2>
                <p className="mt-5 max-w-md text-lg text-muted">
                  Have a project, a role, or want to start learning to code? Send a message and I&apos;ll get back to you.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a href={`mailto:${profile.email}`} className="text-lg font-bold underline decoration-accent decoration-2 underline-offset-8 sm:text-xl">
                    {profile.email}
                  </a>
                  <CopyButton value={profile.email} label="Copy email address" />
                </div>
                <p className="mt-6 flex items-center gap-2 text-sm text-subtle">
                  <MapPin className="h-4 w-4" aria-hidden="true" /> {profile.location} · <LocalTime /> local time
                </p>
                <div className="mt-8">
                  <SocialLinks />
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
