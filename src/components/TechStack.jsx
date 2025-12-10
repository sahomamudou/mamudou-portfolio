import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaFileAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiStrapi,
  SiNextdotjs,
} from "react-icons/si";

const techs = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500 text-4xl" />,
    description: "The standard markup language for building web pages.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500 text-4xl" />,
    description: "Styles your HTML with layout, colors, and animations.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-teal-400 text-4xl" />,
    description: "A utility-first CSS framework for rapid UI development.",
    link: "https://tailwindcss.com/",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400 text-4xl" />,
    description: "The programming language of the web.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-400 text-4xl" />,
    description: "A JavaScript library for building user interfaces.",
    link: "https://react.dev/",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600 text-4xl" />,
    description: "JavaScript with static typing for better scalability.",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Strapi",
    icon: <SiStrapi className="text-purple-600 text-4xl" />,
    description: "A headless CMS for building flexible backend APIs.",
    link: "https://strapi.io/",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-600 text-4xl" />,
    description: "JavaScript runtime for building backend services.",
    link: "https://nodejs.org/",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black text-4xl" />,
    description: "A React framework for building fast web apps.",
    link: "https://nextjs.org/",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-red-500 text-4xl" />,
    description: "Version control system for tracking code changes.",
    link: "https://git-scm.com/",
  },
  {
    name: "SQL",
    icon: <FaDatabase className="text-blue-500 text-4xl" />,
    description:
      "Structured Query Language for managing and querying relational databases, often used with phpMyAdmin.",
    link: "https://www.w3schools.com/sql/",
  },
  {
    name: "Microsoft Office",
    icon: <FaFileAlt className="text-green-600 text-4xl" />,
    description:
      "A suite of productivity software including Word, Excel, and PowerPoint.",
    link: "https://www.microsoft.com/en-us/microsoft-365",
  },
];

const TechStack = () => (
  <section className="py-20 px-6 bg-white text-gray-800">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {techs.map((tech, i) => (
          <motion.a
            id="techstack"
            key={tech.name}
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition cursor-pointer group"
          >
            <div className="mb-2">{tech.icon}</div>
            <h3 className="text-base font-semibold mb-1 group-hover:underline">
              {tech.name}
            </h3>
            <p className="text-sm text-gray-600 text-center">
              {tech.description}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
