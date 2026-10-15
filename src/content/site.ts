// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Mamudou Saho",
  firstName: "Mamudou",
  headline: "Developer & Instructor",
  role: "Full-Stack Developer & Instructor",
  shortBio:
    "Full-stack developer and frontend instructor based in Lamin, The Gambia, building fast, accessible web apps.",
  location: "Lamin, The Gambia",
  email: "sahomamudou2003@gmail.com",
  photo: "/mamudou1.png",
  // Drop a PDF in /public and set e.g. "/mamudou-saho-cv.pdf" to show a résumé button
  resume: null as string | null,
};

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
] as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/sahomamudou", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mamudou-saho-662389280",
    icon: "linkedin",
  },
  { label: "X", href: "https://x.com/mamudoudaho2003", icon: "x" },
] as const;

// Hero numbers. Replace with your own as you grow, e.g. { value: "50+", label: "Students taught" }
export const stats = [
  { value: "4+", label: "Live projects" },
  { value: "15+", label: "Technologies" },
  { value: "JCC", label: "Frontend instructor" },
];

export type Service = {
  title: string;
  icon: "monitor" | "server" | "classes" | "mentor";
  summary: string;
  description: string;
  tags: string[];
  // Optional example shown when the card is open
  example?: { title: string; image: string; href: string };
};

export const services: Service[] = [
  {
    title: "Frontend Development",
    icon: "monitor",
    summary: "Responsive, accessible interfaces",
    description:
      "I build fast, responsive interfaces with React, Next.js and Tailwind CSS: clean component architecture, accessible markup and smooth interactions that work on every screen size.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    example: {
      title: "GitHub User Finder",
      image: "/github-user-finder.png",
      href: "https://github-user-finder-orcin.vercel.app/",
    },
  },
  {
    title: "Backend & APIs",
    icon: "server",
    summary: "Content models, APIs and databases",
    description:
      "I design content models and REST APIs with Strapi and Node.js, and structure relational data with SQL so your product is easy to manage and ready to grow.",
    tags: ["Strapi", "Node.js", "REST APIs", "SQL / MySQL"],
  },
  {
    title: "Private Coding Classes",
    icon: "classes",
    summary: "One-to-one and small-group lessons",
    description:
      "Personal lessons in HTML, CSS, JavaScript and React, tailored to your level and goals. We learn by building real projects together, from your first web page to a deployed app.",
    tags: ["Beginners welcome", "HTML & CSS", "JavaScript", "React"],
  },
  {
    title: "Teaching & Mentorship",
    icon: "mentor",
    summary: "Frontend instructor at JCC",
    description:
      "As a frontend development instructor at JCC, I guide students through modern web development with hands-on projects, code reviews and mentoring.",
    tags: ["Curriculum", "Code reviews", "Mentoring"],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  repo?: string;
  tech: string[];
};

// The first project is featured as the large showcase card
export const projects: Project[] = [
  {
    title: "GitHub User Finder",
    category: "Web App",
    description:
      "Search any GitHub user and browse their profile and public repositories, with data fetched live from the GitHub REST API.",
    image: "/github-user-finder.png",
    href: "https://github-user-finder-orcin.vercel.app/",
    tech: ["React", "GitHub API", "Tailwind CSS"],
  },
  {
    title: "Product List & Cart",
    category: "E-commerce UI",
    description:
      "A responsive product listing with add-to-cart, quantity controls and an order summary.",
    image: "/desktop-design-empty.jpg",
    href: "https://jcc-product-list-card.vercel.app/",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Browser Extension Landing Page",
    category: "Landing Page",
    description: "A mobile-first, fully responsive marketing page with clear calls to action.",
    image: "/desktop-design-light.jpg",
    href: "https://browser-extension-three.vercel.app/",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Interactive Rating Card",
    category: "UI Component",
    description: "An interactive rating component with a thank-you confirmation state.",
    image: "/interactive-card.png",
    href: "https://interactive-rating-card-one.vercel.app/",
    tech: ["React", "Tailwind CSS"],
  },
];

export type Testimonial = {
  name: string;
  role: string; // e.g. "Student, JCC" or "Private class student"
  quote: string;
  avatar?: string; // optional photo in /public, e.g. "/testimonials/awa.jpg"
};

// Add real testimonials here. Until then the section invites students to share one.
// Example:
// { name: "Awa Jallow", role: "Student, JCC", quote: "Mamudou explains things so clearly..." },
export const testimonials: Testimonial[] = [];

export const process = [
  {
    title: "Discover",
    icon: "search",
    text: "We talk through your goals, audience and requirements so I understand exactly what success looks like.",
  },
  {
    title: "Plan",
    icon: "plan",
    text: "I map out pages, components and data, and agree on scope and timeline before writing code.",
  },
  {
    title: "Build",
    icon: "build",
    text: "I develop in small, reviewable steps with clean, maintainable code and regular progress updates.",
  },
  {
    title: "Test",
    icon: "test",
    text: "I check responsiveness, accessibility and performance across devices and browsers.",
  },
  {
    title: "Deliver",
    icon: "deliver",
    text: "I deploy, hand over clear documentation and stay available for support and improvements.",
  },
] as const;

export const contact = {
  formEndpoint: "https://formspree.io/f/xjkneerw",
};
