import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Mohammed Al-Bazoon — Software Engineer",
  author: "Mohammed Al-Bazoon",
  description:
    "Software Engineer with experience in Django, React, and TypeScript, building secure web applications for healthcare research.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Github", href: "https://github.com/mohammed-albazoon" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://mohammed-albazoon-portfolio.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Mohammed Al-Bazoon",
    specialty: "Software Engineer",
    summary:
      "Software engineer with a background in web development, computer vision, and data analysis. I build secure, reliable applications with Python/Django and React/TypeScript.",
    email: "swadimohammed203@gmail.com",
  },
  experience: [
    {
      company: "Apoth Development, Inc.",
      position: "Software Engineer (Remote)",
      startDate: "Jun 2023",
      endDate: "Sept 2025",
      summary: [
        "Built models, views, and management commands in a Django application used by researchers at Harvard University and Mass General Brigham to manage participants' personal health information (PHI), in compliance with HIPAA and SOC-2 requirements.",
        "Supported scalable real-time data processing and synchronization using Django's ORM and asynchronous processing, with a focus on data privacy and security.",
        "Worked in an Agile team using Test-Driven Development, contributing to code reviews and CI/CD pipelines.",
        "Collaborated with the product lead and designers to turn business requirements into technical specifications.",
      ],
    },
    {
      company: "Eventcorp Services, Inc.",
      position: "Reporting & Data Analytics Intern",
      startDate: "Jun 2022",
      endDate: "Aug 2022",
      summary: [
        "Used data mining to improve the organization and customer experience of the US Open, and presented survey insights to the United States Golf Association twice a day.",
        "Ran pre- and post-event tech audits and prepared equipment for two major events in Boston and North Carolina.",
      ],
    },
    {
      company: "Media Shield",
      position: "Web Design Intern",
      startDate: "Jun 2021",
      endDate: "Aug 2021",
      summary:
        "Built and customized three websites with ClickFunnels for client marketing plans, gathering client requirements and iterating on feedback in biweekly meetings.",
    },
  ],
  projects: [
    {
      name: "Alwan Library",
      summary:
        "An Arabic RTL e-commerce mobile app for Android and iOS, built with FlutterFlow, Firebase, Firestore, and Firebase Auth.",
      linkPreview: "https://github.com/mohammed-albazoon",
      linkSource: "https://github.com/mohammed-albazoon",
      image: "/alwan-library.png",
    },
    {
      name: "Secure Task Management System",
      summary:
        "A full-stack task manager with JWT authentication, built with Angular, TypeScript, NestJS, TypeORM, and SQLite.",
      linkPreview:
        "https://github.com/mohammed-albazoon/Secure-Task-Management-System",
      linkSource:
        "https://github.com/mohammed-albazoon/Secure-Task-Management-System",
      image: "/task-manager.png",
    },
    {
      name: "Movie Search App",
      summary:
        "A movie search app built with React and TypeScript using the OMDb API.",
      linkPreview: "https://github.com/mohammed-albazoon/movie-search-app",
      linkSource: "https://github.com/mohammed-albazoon/movie-search-app",
      image: "/movie-search.png",
    },
  ],
  about: {
    description: `
      Hi, I'm Mohammed Al-Bazoon, a software engineer with a strong foundation in computer science, programming, and web development. I earned my B.S. in Computer Science with a minor in Mathematics from Methodist University.

      I've worked remotely with a Boston-based team building HIPAA and SOC-2 compliant applications for healthcare research, mainly with Python/Django and React/TypeScript. Outside of work, I build mobile apps, machine learning and computer vision projects, and games.
    `,
    image: "/alejandro-big.jpg",
  },
};
