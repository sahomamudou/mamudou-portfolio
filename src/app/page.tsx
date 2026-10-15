import Image from "next/image";
import { ArrowRight, ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { CopyrightYear } from "@/components/copyright-year";
import { SectionNav } from "@/components/section-nav";
import { SocialLinks } from "@/components/social-links";
import { Spotlight } from "@/components/spotlight";
import { ThemeToggle } from "@/components/theme";
import { BadgeList } from "@/components/ui/badge";
import { experience, profile, projects, skills, socials } from "@/content/site";

const github = socials.find((s) => s.icon === "github")!.href;

function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-label={label} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      {/* On small screens the section name sticks to the top while scrolling */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold tracking-widest text-foreground uppercase lg:sr-only">{label}</h2>
      </div>
      {children}
    </section>
  );
}

function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <Image
          src={profile.avatar}
          alt={`Portrait of ${profile.name}`}
          width={250}
          height={250}
          preload
          className="mb-6 h-20 w-20 rounded-full bg-slate-200 object-cover ring-1 ring-border dark:bg-slate-800"
        />
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          <a href="#">{profile.name}</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">{profile.role}</h2>
        <p className="mt-4 max-w-xs leading-normal">{profile.tagline}</p>
        <p className="mt-4 flex items-center gap-1.5 text-sm text-subtle">
          <MapPin className="h-4 w-4" aria-hidden="true" />
          {profile.location}
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
            Open to opportunities
          </span>
        </p>
        <SectionNav />
      </div>

      <div className="mt-8 flex items-center gap-2 lg:mt-0">
        <SocialLinks />
        <span className="mx-1 h-5 w-px bg-border" aria-hidden="true" />
        <ThemeToggle />
      </div>
    </header>
  );
}

function About() {
  return (
    <Section id="about" label="About">
      <div className="space-y-4">
        <p>
          I&apos;m a developer who cares about the details that make software feel effortless: clean
          component architecture, <span className="text-foreground">accessible interfaces</span> and
          code the next person can maintain. Most of my work is in the React ecosystem, and I&apos;m
          growing into backend architecture with <span className="text-foreground">Strapi</span>,{" "}
          <span className="text-foreground">TypeScript</span> and{" "}
          <span className="text-foreground">SQL</span>.
        </p>
        <p>
          I also teach. As a <span className="text-foreground">frontend development instructor at JCC</span>,
          I take students from their first HTML page to deployed React apps. Explaining why something
          works, not just how, has made me a clearer engineer and a better collaborator.
        </p>
        <p>
          I&apos;m open to junior and mid-level developer roles, freelance projects and collaborations,
          especially products where good UX and solid engineering both matter.
        </p>
      </div>
    </Section>
  );
}

function ExperienceList() {
  return (
    <Section id="experience" label="Experience">
      <ol className="group/list space-y-12">
        {experience.map((job) => (
          <li key={job.title}>
            <div className="group relative grid gap-1 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_var(--border)]" />
              <p className="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-subtle uppercase sm:col-span-2">
                {job.period}
              </p>
              <div className="z-10 sm:col-span-6">
                <h3 className="leading-snug font-medium text-foreground">
                  {job.title} · <span className="text-muted">{job.org}</span>
                </h3>
                <p className="mt-2 text-sm leading-normal">{job.description}</p>
                <BadgeList items={job.tech} label="Technologies used" />
              </div>
            </div>
          </li>
        ))}
      </ol>
      {profile.resume && (
        <a
          href={profile.resume}
          className="group mt-12 inline-flex items-center gap-2 font-semibold text-foreground"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          <span className="border-b border-transparent pb-px transition group-hover:border-accent">
            Download résumé
          </span>
        </a>
      )}
    </Section>
  );
}

function ProjectList() {
  return (
    <Section id="projects" label="Projects">
      <ul className="group/list space-y-12">
        {projects.map((project) => (
          <li key={project.title}>
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_var(--border)]" />
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group/link inline-flex items-baseline leading-tight font-medium text-foreground hover:text-accent focus-visible:text-accent"
                  >
                    {/* Makes the whole card clickable on desktop */}
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    {project.title}
                    <ArrowUpRight
                      className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">{project.description}</p>
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="relative mt-2 inline-flex items-center text-sm font-medium text-foreground hover:text-accent"
                  >
                    Source code
                  </a>
                )}
                <BadgeList items={project.tech} label="Technologies used" />
              </div>
              <Image
                src={project.image}
                alt=""
                width={400}
                height={250}
                sizes="(min-width: 640px) 200px, 100vw"
                className="z-10 aspect-[16/10] w-full max-w-[200px] rounded border-2 border-border object-cover object-top transition group-hover:border-accent/40 sm:order-1 sm:col-span-2 sm:translate-y-1"
              />
            </div>
          </li>
        ))}
      </ul>
      <a
        href={github}
        target="_blank"
        rel="noreferrer noopener"
        className="group mt-12 inline-flex items-center gap-1 font-semibold text-foreground"
      >
        <span className="border-b border-transparent pb-px transition group-hover:border-accent">
          See more on GitHub
        </span>
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
          aria-hidden="true"
        />
      </a>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" label="Skills">
      <dl className="space-y-8">
        {skills.map(({ group, items }) => (
          <div key={group} className="grid gap-2 sm:grid-cols-8 sm:gap-8 md:gap-4">
            <dt className="mt-1 text-xs font-semibold tracking-wide text-subtle uppercase sm:col-span-2">
              {group}
            </dt>
            <dd className="sm:col-span-6">
              <ul className="flex flex-wrap gap-x-2 gap-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border px-3 py-1 text-sm text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" label="Contact">
      <h3 className="text-2xl font-semibold tracking-tight text-foreground">Let&apos;s work together</h3>
      <p className="mt-3">
        Have a role, a project or just a question? Send a message below or email me directly.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-4 inline-flex items-center gap-2 font-medium text-foreground hover:text-accent"
      >
        <Mail className="h-4 w-4" aria-hidden="true" />
        {profile.email}
      </a>
      <ContactForm />
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#content"
        className="absolute top-0 left-0 z-50 -translate-y-full rounded-br bg-foreground px-4 py-3 text-sm font-semibold text-background focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <Spotlight />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
            <About />
            <ExperienceList />
            <ProjectList />
            <Skills />
            <Contact />
            <footer className="max-w-md pb-16 text-sm text-subtle sm:pb-0">
              Designed and built by {profile.name} with Next.js, TypeScript and Tailwind CSS. ©{" "}
              <CopyrightYear />
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
