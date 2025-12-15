import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useEffect, useState } from "react";

const roles = [
  "Frontend Developer",
  "Backend Developer (Strapi & SQL)",
  "Full-Stack Architect in Progress",
  "Instructor at JCC",
  "Productivity & Microsoft Office Enthusiast",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[url('/blue-background.png')] bg-cover bg-center text-white">
      <nav
        className={`fixed top-0 left-0 w-full z-50 shadow-md transition-colors duration-500 ${
          scrolled ? "bg-blue-600 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center py-4 md:py-5 max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Mamudou
            </span>{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Saho
            </span>
          </h1>

          <ul className="hidden md:flex gap-6 text-sm font-medium uppercase">
            {[
              { id: "about", label: "About Me" },
              { id: "services", label: "Services" },
              { id: "projects", label: "Portfolio" },
              { id: "techstack", label: "Tech Stack" },
              { id: "contact", label: "Contact Me" },
            ].map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-yellow-300 transition">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-blue-700 px-6 py-6 space-y-5 text-center uppercase font-semibold"
          >
            {[
              { id: "about", label: "About Me" },
              { id: "services", label: "Services" },
              { id: "projects", label: "Portfolio" },
              { id: "techstack", label: "Tech Stack" },
              { id: "contact", label: "Contact Me" },
            ].map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-yellow-300 transition"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-16 pt-28 sm:pt-32 pb-20 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            Crafting Web Experiences & Teaching Code
          </h2>

          <p className="text-lg sm:text-xl mb-4 text-blue-400 font-semibold">
            {roles[currentRole]}
          </p>

          <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed max-w-xl mx-auto md:mx-0">
            Building responsive UIs, exploring backend with Strapi and SQL,
            managing databases, and mentoring future developers at JCC.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#services"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-white font-medium shadow-md transition-transform hover:scale-105"
            >
              Get Started →
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-md font-medium shadow-md transition-transform hover:scale-105"
            >
              <FiMail className="text-xl" />
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 flex justify-center relative"
        >
          <motion.img
            src="/images.png"
            alt="Decorative blob background"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2 
              opacity-70 w-[180px] sm:w-[240px] lg:w-[400px]"
          />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative z-10"
          >
            <div className="absolute inset-0 rounded-full blur-2xl bg-blue-500 opacity-30 scale-110" />

            <img
              src="/mamudou1.png"
              alt="Mamudou Saho portrait"
              className="relative rounded-full object-cover shadow-2xl 
                w-44 h-44 sm:w-56 sm:h-56 lg:w-90 lg:h-90"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
