import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const Projects = () => (
  <section id="projects" className="px-4 py-24 sm:px-6 sm:py-32">
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected projects"
        description="A few things I've built recently. Each one is live — click through and try it."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900 transition hover:-translate-y-1 hover:border-violet-400/40"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              aria-hidden="true"
              className="relative block aspect-[16/10] overflow-hidden bg-ink-800"
            >
              <img
                src={project.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
            </a>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-5 text-sm font-semibold">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-violet-300 transition hover:text-violet-200"
                >
                  Live demo
                  <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span className="sr-only"> of {project.title} (opens in new tab)</span>
                </a>
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-zinc-400 transition hover:text-white"
                  >
                    <FiGithub /> Source
                    <span className="sr-only"> code of {project.title}</span>
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/sahomamudou"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
        >
          <FiGithub /> More on GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
