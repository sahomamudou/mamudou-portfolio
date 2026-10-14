import { motion } from "framer-motion";
import { techGroups } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const TechStack = () => (
  <section id="techstack" className="bg-ink-900 px-4 py-24 sm:px-6 sm:py-32">
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="Tech stack"
        title="Tools I work with"
        description="The languages, frameworks and tools I use to design, build and ship."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {techGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
            className="rounded-2xl border border-white/10 bg-ink-800 p-6"
          >
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-zinc-400">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.items.map(({ name, icon: Icon, color }) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-ink-900 px-3.5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-white/25"
                >
                  <Icon className="text-lg" style={{ color }} aria-hidden="true" />
                  {name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
