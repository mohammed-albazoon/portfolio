import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Mohammed Al-Bazoon — Software Engineer & Mobile App Developer",
  author: "Mohammed Al-Bazoon",
  description:
    "Software Engineer specializing in web and mobile application development, full-stack systems, computer vision, and machine learning.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/mohammed-al-bazoon-6a28501a1" },
    { text: "Github", href: "https://github.com/mohammed-albazoon" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://mohammed-albazoon-portfolio.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Mohammed Al-Bazoon",
    specialty: "Software Engineer & Mobile App Developer",
    summary:
      "Highly motivated software engineer with experience in full-stack web development, cross-platform mobile app development, computer vision, and data analysis. I build secure, scalable applications with Django, React/TypeScript, NestJS, and Flutter.",
    email: "swadimohammed203@gmail.com",
  },
  experience: [
    {
      company: "Apoth Development, Inc.",
      position: "Software Engineer (Remote)",
      startDate: "Jun 2023",
      endDate: "Sept 2025",
      summary: [
        "Built models, views, and management commands in a Django application used by researchers at Harvard University and Mass General Brigham to manage participants' personal health information (PHI), ensuring compliance with HIPAA and SOC-2 standards.",
        "Supported scalable real-time data processing and synchronization using Django's ORM and asynchronous processing, with a strict focus on data privacy and security.",
        "Worked in an Agile environment using Test-Driven Development (TDD), actively contributing to code reviews and CI/CD pipelines to maintain high code quality.",
        "Collaborated with product leads and UI designers to translate complex business requirements into clear technical specifications.",
      ],
    },
    {
      company: "Eventcorp Services, Inc.",
      position: "Reporting & Data Analytics Intern",
      startDate: "Jun 2022",
      endDate: "Aug 2022",
      summary: [
        "Enhanced customer experience and operations for the US Open by conducting data mining using Digivey software.",
        "Delivered data-driven insights twice daily to the United States Golf Association (USGA) leadership.",
        "Conducted pre- and post-event technical audits and managed hardware/equipment setups for major events in Boston, MA, and North Carolina.",
      ],
    },
    {
      company: "Media Shield",
      position: "Web Design Intern",
      startDate: "Jun 2021",
      endDate: "Aug 2021",
      summary:
        "Designed and customized three high-performing marketing websites using ClickFunnels, engaging directly with clients to gather requirements, design features, and iterate based on biweekly feedback.",
    },
  ],
  projects: [
    {
      name: "Alwan Library — Arabic RTL E-Commerce Mobile App",
      summary:
        "A cross-platform mobile application (Android & iOS) designed with an Arabic RTL interface. Built using FlutterFlow, Flutter/Dart, Firebase Auth, Firestore, and Storage.",
      linkPreview: "https://github.com/mohammed-albazoon",
      linkSource: "https://github.com/mohammed-albazoon",
      image: "/alwan-library.png",
    },
    {
      name: "Secure Task Management System",
      summary:
        "A full-stack task management application featuring secure JWT authentication and role management. Built with Angular, TypeScript, NestJS, TypeORM, and SQLite.",
      linkPreview:
        "https://github.com/mohammed-albazoon/Secure-Task-Management-System",
      linkSource:
        "https://github.com/mohammed-albazoon/Secure-Task-Management-System",
      image: "/task-manager.png",
    },
    {
      name: "Movie Search App",
      summary:
        "A modern web application built with React, TypeScript, and HTML/CSS, integrated with the OMDb API for searching and exploring movies in real time.",
      linkPreview: "https://github.com/mohammed-albazoon/movie-search-app",
      linkSource: "https://github.com/mohammed-albazoon/movie-search-app",
      image: "/movie-search.png",
    },
  ],
  about: {
    description: `
      Hi, I'm Mohammed Al-Bazoon, a Software Engineer with a solid foundation in computer science and mathematics from Methodist University (B.S. in Computer Science, Minor in Mathematics).

      I specialize in full-stack web development and mobile application development. My professional experience includes developing HIPAA- and SOC-2-compliant backend systems in Python/Django for healthcare researchers at Harvard University and Mass General Brigham. 

      Beyond web and backend development, I build cross-platform mobile apps using Flutter/Dart, machine learning models (scikit-learn / Snap ML), computer vision solutions (TensorFlow), and interactive applications in C# and Python.
    `,
    image: "/alejandro-big.jpg",
  },
};
