// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Mamudou Saho",
  role: "Full-Stack Developer & Instructor",
  tagline:
    "I build accessible, well-engineered web products, and teach the next generation of developers to do the same.",
  location: "Lamin, The Gambia",
  email: "sahomamudou2003@gmail.com",
  avatar: "/avatar.png",
  // Drop a PDF in /public and set e.g. "/mamudou-saho-cv.pdf" to show a résumé link
  resume: null as string | null,
};

export const socials = [
  { label: "GitHub", href: "https://github.com/sahomamudou", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mamudou-saho-662389280",
    icon: "linkedin",
  },
  { label: "X", href: "https://x.com/mamudoudaho2003", icon: "x" },
] as const;

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export type Experience = {
  period: string;
  title: string;
  org: string;
  href?: string;
  description: string;
  tech: string[];
};

// TODO: replace "Current" with real dates, e.g. "2024 — Present"
export const experience: Experience[] = [
  {
    period: "Current",
    title: "Frontend Development Instructor",
    org: "JCC",
    description:
      "Teach HTML, CSS, JavaScript and React to aspiring developers. Design the curriculum around real-world projects, review student code and mentor learners from first page to deployed app.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git"],
  },
  {
    period: "Ongoing",
    title: "Independent Developer",
    org: "Personal & practice projects",
    description:
      "Build and ship responsive web apps end to end, from component architecture and API integration to deployment. Currently deepening backend skills with Strapi, TypeScript, SQL and content modelling.",
    tech: ["React", "Next.js", "TypeScript", "Strapi", "SQL", "Vercel"],
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
  repo?: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    title: "GitHub User Finder",
    description:
      "Search any GitHub user and browse their profile and public repositories, with data fetched live from the GitHub REST API.",
    image: "/github-user-finder.png",
    href: "https://github-user-finder-orcin.vercel.app/",
    tech: ["React", "GitHub API", "Tailwind CSS", "Vite"],
  },
  {
    title: "Product List & Cart",
    description:
      "A responsive product listing with add-to-cart, quantity controls and an order summary, built from reusable components.",
    image: "/desktop-design-empty.jpg",
    href: "https://jcc-product-list-card.vercel.app/",
    tech: ["React", "Tailwind CSS", "Vite"],
  },
  {
    title: "Browser Extension Landing Page",
    description:
      "A mobile-first, fully responsive marketing page for a browser extension with clear calls to action.",
    image: "/desktop-design-light.jpg",
    href: "https://browser-extension-three.vercel.app/",
    tech: ["React", "Tailwind CSS", "Vite"],
  },
  {
    title: "Interactive Rating Card",
    description:
      "An interactive rating component with selectable scores and a thank-you confirmation state.",
    image: "/interactive-card.png",
    href: "https://interactive-rating-card-one.vercel.app/",
    tech: ["React", "Tailwind CSS", "Vite"],
  },
];

export const skills = [
  {
    group: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  { group: "Backend", items: ["Node.js", "Strapi", "REST APIs", "SQL / MySQL"] },
  { group: "Tools", items: ["Git & GitHub", "Vite", "Vercel", "Microsoft Office"] },
];

export const contact = {
  formEndpoint: "https://formspree.io/f/xjkneerw",
};
