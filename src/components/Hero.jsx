import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { profile, roles, socials } from "../data/portfolio";
import HeroPortrait from "./HeroPortrait";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative isolate flex min-h-svh items-center overflow-hidden">
      {/* Backdrop: grid + color glows */}
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 -z-10 h-[30rem] w-[30rem] rounded-full bg-violet-500/25 blur-[120px] dark:bg-violet-600/30"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 -z-10 h-[26rem] w-[26rem] rounded-full bg-orange-400/20 blur-[120px] dark:bg-fuchsia-600/20"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pt-28 pb-20 sm:px-6 md:grid-cols-[1.15fr_1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 text-center md:order-1 md:text-left"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for freelance & full-time roles
          </div>

          <h1 className="font-display text-4xl leading-[1.1] font-bold tracking-tight text-fg sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {profile.name.split(" ")[0]}.
            <br />
            <span className="text-gradient">I build for the web.</span>
          </h1>

          <p className="mt-5 h-8 text-lg font-semibold text-accent sm:text-xl" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[currentRole]}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </p>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg md:mx-0">
            I craft responsive, accessible interfaces with React and Tailwind,
            build APIs with Strapi and SQL, and teach the next generation of
            developers at JCC.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/30 transition hover:shadow-xl hover:shadow-violet-600/40 hover:brightness-110"
            >
              View my work
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-line bg-surface px-7 py-3.5 font-semibold text-fg shadow-sm transition hover:border-accent"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-5 text-subtle md:justify-start">
            <span className="inline-flex items-center gap-1.5 text-sm font-medium">
              <FiMapPin className="text-accent" /> {profile.location}
            </span>
            <span className="h-4 w-px bg-line" aria-hidden="true" />
            {socials.slice(0, 3).map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-xl transition hover:text-accent"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        <div className="order-1 md:order-2">
          <HeroPortrait />
        </div>
      </div>
    </section>
  );
};

export default Hero;
