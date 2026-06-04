// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  bootstrap,
  expressjs,
  linux,
  nginx,
  nextjs,
  mysql,
  java,
  python,
  facebook,
  instagram,
  
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "education",
    title: "Education",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "skills",
    title: "Skills",
    link: null,
  },
  {
    id: "projects",
    title: "Projects",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  
] as const;

// Services
export const SERVICES = [
  {
    title: "Full Stack Development",
    icon: web,
  },
  {
    title: "Web Application Development",
    icon: mobile,
  },
  {
    title: "API & Backend Development",
    icon: backend,
  },
  {
    title: "Cloud Deployment",
    icon: web,
  },
  
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  
   {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  
  
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Nginx",
    icon: nginx,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Software Developer",
    company_name: "Ikontel Solutions Pvt Ltd",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "Developing scalable web applications using the MERN Stack, Python, and MySQL to deliver secure and high-performance digital solutions.",
      "Designing and integrating robust APIs, business logic, and database systems to ensure seamless application functionality.",
      "Managing application deployments on Linux VPS servers, including server configuration, SSL setup, and production maintenance.",
      "Working closely with designers, project managers, and developers to transform business requirements into user-focused products.",
    ],
  },
  
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "HRMS",
    description:
      "An HRMS solution designed to simplify workforce management by automating employee onboarding, attendance, leave requests, payroll operations, and administrative processes within a centralized system.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/sanidhyy/disney-clone",
    live_site_link: "https://clonedisneyplus.web.app",
  },
  {
    name: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution designed to simplify online shopping with product management, secure payments, order tracking, and an intuitive user experience across all devices.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/sanidhyy/fitness-app",
    live_site_link: "https://fitness-gym-react.netlify.app",
  },
  {
    name: "BSP Project Solutions",
    description:
      "A solar energy management platform that simplifies customer engagement, project monitoring, service coordination, and business operations while improving efficiency and accessibility.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/sanidhyy/bsp-project",
    live_site_link: "",
  },
   {
    name: "Advenza Tours & Travel",
    description:
      "A scalable travel solutions platform built to connect travelers with curated tour packages, seamless booking services, and personalized travel experiences. The platform simplifies trip planning, destination discovery, and customer engagement through an intuitive and user-friendly digital interface.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "VPS",
        color: "orange-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Modern Solar 2.0",
    description:
      "A modern solar solutions platform that enables customers to explore renewable energy services, submit inquiries, and manage solar projects through an intuitive digital experience.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "",
    live_site_link: "",
  },
  
] as const;

export const SOCIALS = [
   {
    name: "Facebook",
    icon: facebook,
    link: "https://www.facebook.com/sarojkumar.bapun.1/",
  },
  {
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/_im_saroj_/",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/sarojkumarmallik/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/SarojKumarMallik/",
  },
] as const;
