import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FiBookOpen, FiDatabase, FiMonitor, FiServer } from "react-icons/fi";
import {
  SiCss3,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { PiMicrosoftExcelLogo } from "react-icons/pi";

export const profile = {
  name: "Mamudou Saho",
  title: "Full-Stack Developer & Instructor",
  location: "Lamin, The Gambia",
  email: "sahomamudou2003@gmail.com",
  phone: "+220 589 5636",
  phoneHref: "+2205895636",
  photo: "/mamudou1.png",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "techstack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

export const roles = [
  "Frontend Developer",
  "Backend Developer · Strapi & SQL",
  "Instructor at JCC",
];

export const socials = [
  { label: "GitHub", href: "https://github.com/sahomamudou", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mamudou-saho-662389280",
    icon: FaLinkedin,
  },
  { label: "X (Twitter)", href: "https://x.com/mamudoudaho2003", icon: FaXTwitter },
  { label: "Instagram", href: "https://www.instagram.com/mamudousaho84", icon: FaInstagram },
  { label: "Facebook", href: "https://www.facebook.com/share/1Z9oWjMSAw/", icon: FaFacebook },
];

export const services = [
  {
    title: "Frontend Development",
    gradient: "from-violet-500 to-fuchsia-500",
    description:
      "Fast, accessible, responsive interfaces with React, Tailwind CSS and purposeful motion.",
    icon: FiMonitor,
  },
  {
    title: "Backend & APIs",
    gradient: "from-sky-500 to-cyan-400",
    description:
      "Content models, REST APIs, authentication and admin workflows built with Strapi and Node.js.",
    icon: FiServer,
  },
  {
    title: "Database Design",
    gradient: "from-emerald-500 to-teal-400",
    description:
      "Relational schemas, efficient SQL queries and well-structured data that scales with the product.",
    icon: FiDatabase,
  },
  {
    title: "Teaching & Mentorship",
    gradient: "from-amber-500 to-orange-500",
    description:
      "Teaching frontend development at JCC and guiding students through real-world projects.",
    icon: FiBookOpen,
  },
];

const reactViteTailwind = ["React", "Tailwind CSS", "Vite"];

export const projects = [
  {
    title: "GitHub User Finder",
    description:
      "Search any GitHub user and browse their profile and repositories, powered by the GitHub REST API.",
    tech: [...reactViteTailwind, "GitHub API"],
    link: "https://github-user-finder-orcin.vercel.app/",
    image: "/github-user-finder.png",
  },
  {
    title: "Product List UI",
    description:
      "A responsive product listing with cart interactions, hover states and reusable components.",
    tech: reactViteTailwind,
    link: "https://jcc-product-list-card.vercel.app/",
    image: "/desktop-design-empty.jpg",
  },
  {
    title: "Browser Extension Landing Page",
    description:
      "A mobile-first marketing page for a browser extension with clear call-to-action sections.",
    tech: reactViteTailwind,
    link: "https://browser-extension-three.vercel.app/",
    image: "/desktop-design-light.jpg",
  },
  {
    title: "Interactive Rating Card",
    description:
      "An accessible rating component with selectable states and a thank-you confirmation view.",
    tech: reactViteTailwind,
    link: "https://interactive-rating-card-one.vercel.app/",
    image: "/interactive-card.png",
  },
];

export const techGroups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#2B7FD6" },
      { name: "JavaScript", icon: SiJavascript, color: "#E8C900" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#1BB4DB" },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#0EA5E9" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Strapi", icon: SiStrapi, color: "#8E75FF" },
      { name: "SQL / MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub },
      { name: "Vite", icon: SiVite, color: "#9467FF" },
      { name: "Microsoft Office", icon: PiMicrosoftExcelLogo, color: "#21A366" },
    ],
  },
];
