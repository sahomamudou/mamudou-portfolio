import { motion } from "framer-motion";

const About = () => (
  <motion.section
    id="about"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-white text-gray-800"
  >
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
        About Me
      </h2>

      <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
        I'm a frontend developer with a passion for clean UI, animation, and
        responsive design now expanding into backend architecture with Strapi,
        TypeScript, and scalable content modeling. I love building systems that
        are modular, maintainable, and editor-friendly. Whether it's designing
        animated interfaces or debugging sync logic, I approach every challenge
        with clarity and curiosity.
      </p>

      <p className="text-base sm:text-lg md:text-xl leading-relaxed mt-4 max-w-3xl mx-auto">
        My goal is to master both frontend and backend development to build
        full-stack solutions that are beautiful, powerful, and future-proof. I'm
        currently learning backend architecture, API design, and content
        modeling and documenting my journey along the way.
      </p>
    </div>
  </motion.section>
);

export default About;
