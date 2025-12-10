import { motion } from "framer-motion";
import {
  FiMonitor,
  FiServer,
  FiDatabase,
  FiBookOpen,
  FiBriefcase,
} from "react-icons/fi";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building fast, responsive, and modern user interfaces using React, Tailwind CSS, and animations.",
    icon: <FiMonitor />,
  },
  {
    title: "Backend Development (Strapi)",
    description:
      "Creating APIs, content models, authentication, and scalable backend systems with Strapi.",
    icon: <FiServer />,
  },
  {
    title: "Database Management (SQL)",
    description:
      "Designing and managing relational databases, writing queries, and structuring data efficiently with SQL (phpMyAdmin).",
    icon: <FiDatabase />,
  },
  {
    title: "Instructor & Mentorship",
    description:
      "Teaching frontend development and guiding students through real-world coding projects.",
    icon: <FiBookOpen />,
  },
  {
    title: "Microsoft Office Expertise",
    description:
      "Professional use of Microsoft Word, Excel, and PowerPoint for documentation, reports, and presentations.",
    icon: <FiBriefcase />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20  bg-[url('/prism.png')] px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          My Services
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-blue-600 text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
