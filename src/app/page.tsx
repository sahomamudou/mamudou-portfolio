import { CopyrightYear } from "@/components/copyright-year";
import { Hero } from "@/components/hero";
import { AboutIntro, Contact, Process, Services, Showcase, Testimonials } from "@/components/sections";
import { SiteHeader } from "@/components/site-header";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/content/site";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="fixed top-2 left-2 z-50 -translate-y-24 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <AboutIntro />
        <Services />
        <Showcase />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <footer className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          © <CopyrightYear /> {profile.name}. All rights reserved.
        </p>
        <SocialLinks tone="light" />
      </footer>
    </>
  );
}
