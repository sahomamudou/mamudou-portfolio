// All portfolio content lives here. Edit this file to update the site.
// Items marked "EDIT" are placeholders or assumptions for you to confirm.

export const profile = {
  name: "Mamudou Saho",
  firstName: "Mamudou",
  domainLabel: "mamudou.dev",
  role: "Full-Stack Developer & Instructor",
  intro:
    "I'm Mamudou, a full-time developer and instructor at Jasseh Code Camp (JCC). I build business management systems for local entrepreneurs with React, Next.js and Strapi, and I teach the next generation of developers.",
  languages: ["English", "Mandinka", "Wolof"],
  location: "Lamin, The Gambia",
  timeZone: "Africa/Banjul",
  email: "sahomamudou2003@gmail.com",
  photo: "/photos/hero.jpg", // main portrait (560×616)
  headshot: "/photos/headshot.jpg", // round avatar (450×450)
  teachingPhoto: "/photos/teaching.jpg", // "in action" shot (567×423)
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
// Add more as you grow, e.g. { count: 50, suffix: "+", label: "Students taught" }
export type Stat = { label: string } & ({ count: number; suffix?: string } | { text: string });

export const stats: Stat[] = [
  { count: 1, suffix: "+", label: "Years teaching at JCC" },
  { count: 4, suffix: "+", label: "Live projects" },
  { count: 10, suffix: "+", label: "Technologies" },
];

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
    text: "Developer and instructor at Jasseh Code Camp: tutorials, one-on-one mentorship and project guidance that bridge classroom learning and real industry work.",
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

// From the CV. Newest first.
export const experience = [
  {
    period: "2026 — Now",
    title: "Developer & Instructor",
    org: "Jasseh Code Camp",
    text: "Moved into a full-time role after completing my internship. I build and maintain business management systems for local boutique entrepreneurs, mentor students and lead projects that combine modern frontend frameworks with backend solutions.",
  },
  {
    period: "2025 — 2026",
    title: "CMS Developer (Extended Internship)",
    org: "Jasseh Code Camp",
    text: "Internship extended for strong performance. Worked on the JCC software development team across frontend and backend projects, and provided technical support for Boutique, one of JCC's flagship products.",
  },
  {
    period: "2025",
    title: "Teaching Assistant Intern",
    org: "Jasseh Code Camp",
    text: "Ran tutorials and one-on-one mentorship for JCC Academy students and helped with student projects, assignments and academy operations, while finishing my own Frontend Web Development course.",
  },
];

export const education = [
  {
    org: "Jasseh Code Camp",
    title: "Technical training",
    items: [
      "Frontend Web Development, Parts 1 & 2",
      "Introduction to Computer Science",
      "Introduction to Technology & Programming",
    ],
  },
  {
    org: "Quest Institute of Technology",
    title: "Diploma in Database Administration",
    note: "Graduated with distinction",
  },
];

export type Testimonial = {
  name: string;
  role: string; // e.g. "Student, JCC" or "Private class student"
  quote: string;
  avatar?: string; // optional photo in /public, e.g. "/testimonials/awa.jpg"
  featured?: boolean; // shown large at the top
};

// Quotes from JCC students, published at https://www.jassehcodecamp.com/#testimonials
// (CS Prep: Bridge to Computer Science cohort, thanking the JCC teaching team I'm part of).
export const testimonialsSource = {
  label: "jassehcodecamp.com",
  href: "https://www.jassehcodecamp.com/#testimonials",
};

const csPrep = "Student, JCC";

export const testimonials: Testimonial[] = [
  {
    name: "Iastou Joof",
    role: csPrep,
    quote:
      "I want to express my sincere appreciation to the whole JCC team, especially Mr Jasseh, Ansu, Adama, Buba, and Mamudou. I really appreciate your efforts, patience, dedication, and encouragement. It was a great experience, and I've learned a lot. Y'all made learning skills easier.",
    featured: true,
  },
  {
    name: "Fatoumatta Sanyang",
    role: csPrep,
    quote:
      "I want to appreciate and thank JCC from the bottom of my heart. You've been a guide, motivators, and a constant source of encouragement. Your patience and kindness gave me confidence to keep trying even when things felt difficult. Because of JCC, I've grown not just in knowledge, but as a person.",
  },
  {
    name: "Ayoub Phatty",
    role: csPrep,
    quote:
      "I want to say a big thank you to the entire JCC team for making this camp such a great experience. Even though I couldn't attend regularly because of school, I've still been learning a lot on my own, from Python to MySQL, even building my own timetable app. This camp gave me the motivation to keep going.",
  },
  {
    name: "Naffie Cham",
    role: csPrep,
    quote:
      "I wanted to express my heartfelt gratitude for your guidance and support throughout the program. Your expertise, patience, and enthusiasm have made a significant impact on my learning journey. I'm truly grateful for the knowledge and skills I have gathered, all thanks to JCC.",
  },
  {
    name: "Marvelous",
    role: csPrep,
    quote:
      "Throughout the learning period, JCC was full of learning, kindness, and encouragement. You made tech feel exciting and possible, and I've used what I learned in my school projects. I've grown in confidence and skills, and I'm proud to carry those lessons forward.",
  },
  {
    name: "Iastou Jallow",
    role: csPrep,
    quote:
      "I want to sincerely thank the entire JCC team for everything they have done for me. From the knowledge I gained to the values I learned, I am truly grateful. Thank you for your patience, guidance, and support. This place will always be part of my journey.",
  },
];

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
