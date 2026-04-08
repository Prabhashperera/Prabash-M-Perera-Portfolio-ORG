// ============================================================
// Portfolio Data — Prabash
// ============================================================

export const personal = {
  name: "Prabash M Perera",
  alias: "Bhashz",
  tagline: "Software Engineer",
  subtitle: "Software Engineering",
  // GEMINI API KEY for ChatBot (Temporary frontend exposure for local development)
  geminiKey: "AIzaSyAayAxFEIZ-izyd5FKUiaLWxmYEGwvRk_Y",
  bio: "I am Prabash Malshika Perera, a Software Engineer dedicated to architecting high-performance, Scalable solutions and premium digital experiences. I specialize in bridging complex technical requirements, offering scalable full-stack development that exceeds expectations and delivers high-impact results.",
  bio2: "As the sole developer and architect behind this platform, I have meticulously engineered every interaction—from the fluid animations and high-end UI design to the underlying software architecture. This project represents the intersection of my technical expertise and my deep-rooted passion for showcasing my unmatched beauty to the world through a premium, immersive digital experience.",
  email: "prabashmperera01@gmail.com",
  website: "prabashmperera.me",
  location: "Prabash, Sri Lanka",
  links: {
    github: "https://github.com/Prabhashperera",
    linkedin: "www.linkedin.com/in/prabash-m-perera-org",
    facebook: "",
    instagram: "",
    telegram: "",
  },
};

export const stats = [
  { label: "Total Projects", value: "4+", icon: "code", description: "Innovative web solutions crafted" },
  { label: "Certificates", value: "5", icon: "award", description: "Professional skills validated" },
  { label: "Years of Experience", value: "2+", icon: "globe", description: "Continuous learning journey" },
];

export const skills = ["React", "JavaScript", "Java", "Spring Boot", "Express.js", "SQL"];

export const techStack = [
  {
    category: "Front-End (Client-Side)",
    techs: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Vite", icon: "https://vitejs.dev/logo.svg" },
    ]
  },
  {
    category: "Back-End (Server-Side)",
    techs: [
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Node JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ]
  },
  {
    category: "Database Layer",
    techs: [
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ]
  },
  {
    category: "Creative & Prototyping Tools",
    techs: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
      { name: "Antigravity", icon: "/Images/Antigravity.jpg" },
      { name: "Claude", icon: "/Images/Claude.svg" },
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "BuildMe - Habit Builder",
    description: "A full-stack habit-building application designed to help users track daily routines, build consistency, and stay motivated with progress analytics.",
    extendedDescription: "BuildMe is a modern habit tracking platform that allows users to create, manage, and monitor their daily habits. It includes features like streak tracking, progress visualization, and user authentication. The system is designed with a clean UI and scalable backend, focusing on real-world productivity improvement.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    image: "/Assests/Habit.jpg",
    liveUrl: "https://build-me-habit-builder-fe.vercel.app/login",
    detailUrl: "https://github.com/Prabhashperera/BUILD-ME-Habit-Builder-BE",
    status: "Developing",
    color: "#0066FF",
  },
  {
    id: 2,
    title: "FindCare - Lost Pet Finder",
    description: "A full-stack web application that helps users report, search, and recover lost pets through a centralized platform.",
    extendedDescription: "FindCare is designed to solve the real-world problem of lost pets by connecting pet owners and finders. Users can post lost or found pet details, search listings, and potentially integrate location-based services. Built using the MERN stack, the system focuses on usability, real-time updates, and community-driven recovery efforts.",
    tags: ["React", "Java", "SQL", "Spring Boot"],
    image: "/Assests/Pet.jpg",
    liveUrl: "https://github.com/Prabhashperera/Find-Care-Full-Stack-App-Spring-Boot",
    detailUrl: "https://github.com/Prabhashperera/Find-Care-Full-Stack-App-Spring-Boot",
    status: "Developing",
    color: "#10B981",
  },
  {
    id: 3,
    title: "Automated Green House Management System",
    description: "An IoT-based smart agriculture system designed to monitor and control greenhouse environmental conditions automatically.",
    extendedDescription: "This system uses sensors and APIs to monitor temperature, humidity, and soil conditions in real time. It allows automation of irrigation and climate control, improving efficiency and crop yield. The backend is designed with microservices architecture, making it scalable and production-ready.",
    tags: ["Java", "Spring Boot", "IoT", "Microservices"],
    image: "/Images/WeatherMap.png",
    liveUrl: "https://github.com/Prabhashperera/Automated-Greenhouse-Management-System",
    detailUrl: "https://github.com/Prabhashperera/Automated-Greenhouse-Management-System",
    status: "Developing",
    color: "#0EA5E9",
  },
  {
    id: 4,
    title: "Project - ZEIDOT",
    description: "A desktop-based food donation management system that connects hotels with charities to reduce food waste.",
    extendedDescription: "ZEIDOT is a JavaFX-based standalone application developed using OOP, MVC, and layered architecture. It helps hotels manage leftover food by tracking quantities, categorizing items, and coordinating donations to elderly and children's homes. The system includes database integration and focuses on solving a real social problem.",
    tags: ["Java", "JavaFX", "MySQL", "OOP"],
    image: "/public/Assests/ZEIDOT.jpg",
    liveUrl: "#",
    detailUrl: "#",
    status: "Completed",
    color: "#6366F1",
  },
];

export const certificates = [
  { title: "Certified React Js Developer", issuer: "DP IT CAMPUS", year: "2026" },
  { title: "Google UX Design Professional Certificate", issuer: "Google", year: "2026" },
  { title: "Certified Javascript Developer", issuer: "Scrmiba", year: "2026" },
  { title: "Introduction to Docker Containerization", issuer: "Kodeku", year: "2026" },
  { title: "Back-End Developer Professional Certificate", issuer: "Coursera", year: "2026" },
];

export const academic = {
  degree: "BSc (Hons) in Computer Science",
  major: "Major in Software Engineering",
  institution: "Institute of Software Engineering - IJSE",
  period: "2024 — Present",
  timeline: [
    {
      id: "01",
      year: "First SEM",
      title: "The Foundations",
      focus: "Logic & Structural Web",
      concepts: ["OOP", "Data Structures", "Algorithms"],
      stack: ["Java", "HTML5", "CSS3"],
      project: "Personal Portfolio v1 — A minimalist introduction to web presence.",
      icon: "code"
    },
    {
      id: "02",
      year: "Second SEM",
      title: "The Systems",
      focus: "Data Architecture & Networking",
      concepts: ["SQL", "Systems Integration", "Network Protocols"],
      stack: ["Advanced Java", "MySQL", "Cisco"],
      project: "A curated tourism platform showcasing local destinations with a clean, aesthetic UI.",
      icon: "database"
    },
    {
      id: "03",
      year: "Third SEM",
      title: "The Modern Stack",
      focus: "Full-Stack & Quality Assurance",
      concepts: ["SQA", "API Design", "Component Architecture"],
      stack: ["React", "Node.js", "Express", "MongoDB"],
      project: "Banana Leaf Disease Detection — An AI-driven application designed to identify agricultural threats through image analysis.",
      status: "In Progress",
      icon: "layers"
    },
    {
      id: "04",
      year: "Current Focus",
      title: "Current Focus",
      status: "Building & Researching",
      deepDives: ["Advanced React Patterns", "Backend Scalability", "UI/UX Minimalism"],
      goal: "Bridging academic theory with industry-grade software deployment.",
      icon: "activity"
    }
  ]
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Academic", href: "#academic" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];
