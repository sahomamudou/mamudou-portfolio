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

      {/* Backdrop: one soft, static light at the top of the page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[820px] bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,var(--backdrop),transparent_70%)]"
      />

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
