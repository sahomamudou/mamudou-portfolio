import { motion } from "framer-motion";
import { techGroups } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const TechStack = () => (
  <section id="techstack" className="bg-surface-2/50 px-4 py-24 sm:px-6 sm:py-32">
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
            className="rounded-2xl border border-line bg-surface p-6 shadow-sm"
          >
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-accent">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.items.map(({ name, icon: Icon, color }) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-2 rounded-xl border border-line bg-bg px-3.5 py-2.5 text-sm font-medium text-fg transition hover:-translate-y-0.5 hover:border-accent"
                >
                  <Icon className="text-lg text-fg" style={{ color }} aria-hidden="true" />
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
