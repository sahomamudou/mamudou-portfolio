// All portfolio content lives here. Edit this file to update the site.
// Items marked "EDIT" are placeholders or assumptions for you to confirm.

export const profile = {
  name: "Mamudou Saho",
  firstName: "Mamudou",
  domainLabel: "mamudou.dev",
  role: "Full-Stack Developer & Instructor",
  intro:
    "I'm Mamudou. I design and build fast, accessible web apps with React, Next.js and Strapi, and I teach frontend development at JCC and in private classes.",
  location: "Lamin, The Gambia",
  timeZone: "Africa/Banjul",
  email: "sahomamudou2003@gmail.com",
  photo: "/portrait.png", // head-and-shoulders cut-out (520×520)
  // Drop a PDF in /public and set e.g. "/mamudou-saho-cv.pdf" to show a résumé button
  resume: null as string | null,
};

export const nav = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "classes", label: "Classes" },
  { id: "work", label: "Work" },
  { id: "testimonials", label: "Testimonials" },
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

// Hero numbers. `count` animates up to the value; leave it out for text values.
// EDIT: add real numbers as you grow, e.g. { count: 50, suffix: "+", label: "Students taught" }
export const stats = [
  { count: 4, suffix: "+", label: "Live projects" },
  { count: 15, suffix: "+", label: "Technologies" },
  { text: "JCC", label: "Frontend instructor" },
] as const;

export const stack = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML & CSS"],
  backend: ["Node.js", "Strapi", "REST APIs", "SQL / MySQL"],
  tools: ["Git & GitHub", "Vite", "Vercel"],
};

export const services = [
  {
    title: "Web Apps & Websites",
    icon: "monitor",
    text: "Responsive, accessible interfaces built with React, Next.js and Tailwind CSS, from landing pages to full web apps.",
    points: ["Next.js & React", "Responsive on every device", "Fast & SEO-friendly"],
  },
  {
    title: "Backend & APIs",
    icon: "server",
    text: "Content models, REST APIs and admin dashboards with Strapi and Node.js, backed by well-structured SQL databases.",
    points: ["Strapi CMS", "REST APIs", "SQL data modelling"],
  },
  {
    title: "Teaching & Mentorship",
    icon: "mentor",
    text: "Frontend development instructor at JCC, guiding students through hands-on projects, code reviews and mentoring.",
    points: ["Project-based learning", "Code reviews", "Career guidance"],
  },
] as const;

// EDIT: adjust formats and tracks to match exactly what you offer
export const classes = {
  intro:
    "Learn to build real websites and apps with a patient, practical teacher. Lessons are tailored to your level, and we learn by building projects together.",
  formats: [
    {
      title: "One-to-one lessons",
      text: "Personal sessions focused entirely on your goals and pace. Ideal for beginners or anyone stuck on a specific topic.",
    },
    {
      title: "Small-group classes",
      text: "Learn alongside a few other students, work on shared projects and keep each other motivated.",
    },
  ],
  tracks: [
    { title: "Web foundations", text: "HTML, CSS and responsive layouts" },
    { title: "JavaScript essentials", text: "Logic, the DOM and working with APIs" },
    { title: "React & modern frontend", text: "Components, state and Tailwind CSS" },
    { title: "Build & deploy", text: "Ship a real project with Git and Vercel" },
  ],
};

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  repo?: string;
  tech: string[];
};

// The first project is featured as the large card
export const projects: Project[] = [
  {
    title: "GitHub User Finder",
    category: "Web App",
    description:
      "Search any GitHub user and browse their profile and public repositories, with data fetched live from the GitHub REST API.",
    image: "/github-user-finder.png",
    href: "https://github-user-finder-orcin.vercel.app/",
    tech: ["React", "GitHub API", "Tailwind CSS", "Vite"],
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

// EDIT: replace "Current" / "Ongoing" with real dates, e.g. "2024 — Present"
export const experience = [
  {
    period: "Current",
    title: "Frontend Development Instructor",
    org: "JCC",
    text: "Teach HTML, CSS, JavaScript and React. Design lessons around real-world projects, review student code and mentor learners from first page to deployed app.",
  },
  {
    period: "Ongoing",
    title: "Private Coding Tutor",
    org: "Independent",
    text: "One-to-one and small-group lessons for beginners and developers levelling up their frontend skills.",
  },
  {
    period: "Ongoing",
    title: "Full-Stack Developer",
    org: "Independent projects",
    text: "Build and deploy responsive web apps end to end, and deepen backend skills with Strapi, TypeScript and SQL.",
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

// EDIT: adjust answers to match how you work
export const faq = [
  {
    q: "What kind of projects do you take on?",
    a: "Websites, landing pages and web apps built with React and Next.js, plus backends and content management with Strapi and SQL. If you're not sure whether your idea fits, just ask.",
  },
  {
    q: "How much does a project cost?",
    a: "It depends on the scope. Send me a short description of what you need through the contact form and I'll reply with a clear estimate.",
  },
  {
    q: "Who are your private classes for?",
    a: "Complete beginners who want to start coding, and learners who already know the basics and want to get confident with JavaScript and React.",
  },
  {
    q: "How do I book a class?",
    a: "Use the contact form and choose “Private coding classes”. Tell me your level and goals, and we'll agree on a schedule that works for you.",
  },
  {
    q: "What do I need to start learning?",
    a: "A computer and an internet connection. I'll help you set up everything else, including your code editor and tools.",
  },
];

export const contact = {
  formEndpoint: "https://formspree.io/f/xjkneerw",
};
