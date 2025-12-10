import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";
import {
  MdGridView,
  MdTouchApp,
  MdWidgets,
  MdPhoneAndroid,
  MdCampaign,
  MdWeb,
  MdStarRate,
  MdMobileFriendly,
  MdSearch,
  MdPerson,
} from "react-icons/md";

const Projects = () => {
  const projectList = [
    {
      title: "Product List UI",
      description:
        "A responsive product listing interface built with React, Tailwind CSS, and Vite.",
      tech: [
        { name: "React", icon: <FaReact className="text-cyan-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "Vite", icon: <SiVite className="text-purple-500" /> },
      ],
      features: [
        {
          name: "Responsive Grid",
          icon: <MdGridView className="text-gray-600" />,
        },
        {
          name: "Hover Effects",
          icon: <MdTouchApp className="text-gray-600" />,
        },
        {
          name: "Reusable Components",
          icon: <MdWidgets className="text-gray-600" />,
        },
      ],
      link: "https://jcc-product-list-card.vercel.app/",
      image: "/desktop-design-empty.jpg",
    },
    {
      title: "Browser Extension Landing Page",
      description: "A fully responsive landing page for a browser extension.",
      tech: [
        { name: "React", icon: <FaReact className="text-cyan-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "Vite", icon: <SiVite className="text-purple-500" /> },
      ],
      features: [
        {
          name: "Mobile-First Design",
          icon: <MdPhoneAndroid className="text-gray-600" />,
        },
        {
          name: "Call-to-Action Sections",
          icon: <MdCampaign className="text-gray-600" />,
        },
        { name: "Modern Layout", icon: <MdWeb className="text-gray-600" /> },
      ],
      link: "https://browser-extension-three.vercel.app/",
      image: "/desktop-design-light.jpg",
    },
    {
      title: "Interactive Rating Card",
      description:
        "A fully responsive interactive rating component built with React, Tailwind CSS, and Vite.",
      tech: [
        { name: "React", icon: <FaReact className="text-cyan-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "Vite", icon: <SiVite className="text-purple-500" /> },
      ],
      features: [
        {
          name: "Interactive Rating System",
          icon: <MdStarRate className="text-gray-600" />,
        },
        {
          name: "Responsive Design",
          icon: <MdMobileFriendly className="text-gray-600" />,
        },
        {
          name: "Reusable Components",
          icon: <MdWidgets className="text-gray-600" />,
        },
      ],
      link: "https://interactive-rating-card-one.vercel.app/",
      image: "/interactive-card.png",
    },
    {
      title: "GitHub User Finder",
      description:
        "A fully responsive GitHub user search app built with React, Tailwind CSS, and Vite. It fetches data from the GitHub API and displays user profiles with repositories.",
      tech: [
        { name: "React", icon: <FaReact className="text-cyan-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "Vite", icon: <SiVite className="text-purple-500" /> },
      ],
      features: [
        {
          name: "Search GitHub Users",
          icon: <MdSearch className="text-gray-600" />,
        },
        {
          name: "Profile & Repo Display",
          icon: <MdPerson className="text-gray-600" />,
        },
        {
          name: "Responsive Design",
          icon: <MdMobileFriendly className="text-gray-600" />,
        },
      ],
      link: "https://github-user-finder-orcin.vercel.app/",
      image: "/github-user-finder.png",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectList.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img
                src={proj.image}
                alt={`${proj.title} preview`}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-700 mb-4">{proj.description}</p>

              <div className="text-sm text-gray-600 mb-4">
                <div className="mb-2 font-semibold">🔧 Tech:</div>
                <ul className="flex flex-wrap gap-4 mb-4">
                  {proj.tech.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      {item.icon}
                      {item.name}
                    </li>
                  ))}
                </ul>
                <div className="mb-2 font-semibold">📦 Features:</div>
                <ul className="flex flex-wrap gap-4">
                  {proj.features.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      {item.icon}
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-300 shadow-md"
              >
                <FiExternalLink className="text-lg" />
                Live Demo
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
