import { motion } from "framer-motion";
import { services } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const Services = () => (
  <section id="services" className="bg-ink-900 px-4 py-24 sm:px-6 sm:py-32">
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="Services"
        title="What I can do for you"
        description="End-to-end help taking an idea from design to a deployed, maintainable product."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {services.map(({ title, description, icon: Icon }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800 p-7 transition hover:border-violet-400/40"
          >
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-violet-500/0 blur-3xl transition group-hover:bg-violet-500/20"
            />
            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-2xl text-white">
              <Icon />
            </span>
            <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
            <p className="mt-2 leading-relaxed text-zinc-400">{description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
