import { CommandMenu } from "@/components/command-menu";
import { CopyrightYear } from "@/components/copyright-year";
import { Hero } from "@/components/hero";
import { ScrollProgress } from "@/components/interactive";
import { About, Classes, Contact, Experience, Faq, Services, Testimonials, Work } from "@/components/sections";
import { SiteHeader } from "@/components/site-header";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/content/site";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="fixed top-2 left-2 z-50 -translate-y-24 rounded-xl bg-foreground px-4 py-2 text-sm font-semibold text-background focus-visible:translate-y-0"
      >
        Skip to content
      </a>

      {/* Aurora backdrop: drifting colour glows over a faint grid */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-[-10%] h-[620px] w-[620px] animate-drift rounded-full bg-[var(--glow-a)] blur-[120px]" />
        <div className="absolute top-[30%] right-[-15%] h-[520px] w-[520px] animate-drift-slow rounded-full bg-[var(--glow-b)] blur-[120px]" />
        <div className="absolute -top-60 -left-40 h-[560px] w-[560px] animate-drift-slow rounded-full bg-[var(--glow-a)] opacity-50 blur-[130px]" />
        <div className="bg-grid absolute inset-x-0 top-0 h-[900px]" />
      </div>

      <ScrollProgress />
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Classes />
        <Work />
        <Experience />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      <footer className="mx-auto max-w-6xl px-4 pt-6 pb-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-subtle">
            © <CopyrightYear /> {profile.name}. Built with Next.js, TypeScript &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <p className="hidden font-mono text-xs text-subtle md:block">
              Press <kbd className="rounded border border-border px-1.5 py-0.5">Ctrl</kbd> +{" "}
              <kbd className="rounded border border-border px-1.5 py-0.5">K</kbd> to navigate
            </p>
            <SocialLinks />
          </div>
        </div>
      </footer>

      <CommandMenu />
    </>
  );
}
