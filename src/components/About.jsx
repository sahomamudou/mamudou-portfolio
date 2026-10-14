import { motion } from "framer-motion";
import { FiCode, FiLayers, FiUsers } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: FiCode,
    title: "Clean, modular code",
    text: "Components and content models that stay maintainable as projects grow.",
  },
  {
    icon: FiLayers,
    title: "Frontend to backend",
    text: "From animated React interfaces to Strapi APIs and relational databases.",
  },
  {
    icon: FiUsers,
    title: "Teacher's mindset",
    text: "I explain decisions clearly and document my work for the people after me.",
  },
];

const About = () => (
  <section id="about" className="px-4 py-24 sm:px-6 sm:py-32">
    <div className="mx-auto max-w-6xl">
      <SectionHeading eyebrow="About me" title="Developer, builder, educator" />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="space-y-5 text-base leading-relaxed text-muted sm:text-lg"
        >
          <p>
            I&apos;m a frontend developer with a passion for{" "}
            <span className="text-fg">clean UI, motion and responsive design</span>,
            now expanding into backend architecture with Strapi, TypeScript and
            scalable content modelling.
          </p>
          <p>
            I love building systems that are modular, maintainable and
            editor-friendly. Whether I&apos;m designing animated interfaces or
            debugging sync logic, I approach every challenge with clarity and
            curiosity.
          </p>
          <p>
            Alongside client and personal work, I&apos;m an{" "}
            <span className="text-fg">instructor at JCC</span>, where I
            teach frontend development and mentor students through real-world
            projects. My goal: full-stack products that are beautiful, robust
            and future-proof.
          </p>
        </motion.div>

        <ul className="space-y-4">
          {highlights.map(({ icon: Icon, title, text }, i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 rounded-2xl border border-line bg-surface p-5 shadow-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-xl text-accent">
                <Icon />
              </span>
              <div>
                <h3 className="font-semibold text-fg">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default About;
