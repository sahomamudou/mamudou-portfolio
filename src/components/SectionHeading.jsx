import { motion } from "framer-motion";

const SectionHeading = ({ eyebrow, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
  >
    <p className="mb-4 inline-block rounded-full bg-accent-soft px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-accent uppercase">
      {eyebrow}
    </p>
    <h2 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl lg:text-5xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
