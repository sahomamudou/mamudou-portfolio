import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { profile, roles, socials } from "../data/portfolio";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-grid"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-ink-950"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 md:grid-cols-[1.2fr_1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 text-center md:order-1 md:text-left"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for freelance & full-time roles
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {profile.name.split(" ")[0]}.
            <br />
            <span className="text-gradient">I build for the web.</span>
          </h1>

          <p className="mt-5 h-8 text-lg font-medium text-zinc-200 sm:text-xl" aria-live="polite">
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

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg md:mx-0">
            I craft responsive, accessible interfaces with React and Tailwind,
            build APIs with Strapi and SQL, and teach the next generation of
            developers at JCC.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-600/25 transition hover:bg-violet-500"
            >
              View my work
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-5 text-zinc-500 md:justify-start">
            <span className="inline-flex items-center gap-1.5 text-sm">
              <FiMapPin /> {profile.location}
            </span>
            <span className="h-4 w-px bg-white/10" aria-hidden="true" />
            {socials.slice(0, 3).map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-xl transition hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="order-1 flex justify-center md:order-2"
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-300 opacity-60 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-zinc-100 to-zinc-300">
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width="433"
                height="577"
                fetchPriority="high"
                className="h-60 w-48 object-cover object-[70%_center] sm:h-96 sm:w-80"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
