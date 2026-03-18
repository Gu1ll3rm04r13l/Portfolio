import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiNodedotjs, SiMongodb, SiMysql, SiDocker, SiHtml5,
  SiSelenium, SiGit, SiCplusplus,
} from "react-icons/si";
import { FaJava, FaCss3Alt } from "react-icons/fa";

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Educación", href: "#educacion" },
  { label: "Contacto", href: "#contacto" },
];

export const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB", featured: true },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", featured: true },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", featured: true },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", featured: true },
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "Selenium", icon: SiSelenium, color: "#43B02A" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
];

export const projects = [
  {
    id: 1,
    number: "01",
    title: "TBS Guild",
    subtitle: "Guild Management Platform — World of Warcraft",
    problem:
      "Una guild de raiding Mythic necesitaba un centro de comando para gestionar su roster, rastrear progreso y reclutar jugadores — todo en tiempo real.",
    solution:
      "Desarrollé una aplicación full-stack en Next.js integrando 4 APIs externas: Blizzard, Warcraft Logs, Raider.io y WoW Render Services. Dashboard con datos en vivo, sistema de postulaciones y rankings de servidor.",
    result:
      "Plataforma activa usada por la guild. Tracking en vivo de jefes, historial de kills y portal de reclutamiento con evaluación en 48hs. Ranking #7 en servidor Ragnaros US.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Blizzard API", "Warcraft Logs", "Raider.io"],
    demo: "https://tbs-guild.vercel.app",
    github: "https://github.com/Gu1ll3rm04r13l/tbs-guild",
    image: "/projects/tbs-guild.png",
  },
  {
    id: 2,
    number: "02",
    title: "Mítico",
    subtitle: "Sitio Web — Pizza & Cocktail Bar",
    problem:
      "Un establecimiento local de pizzas artesanales y cócteles necesitaba presencia digital para mostrar su marca y conectar con clientes.",
    solution:
      "Diseñé y desarrollé una landing page responsive con identidad de marca, showcase del menú y datos de contacto integrados.",
    result:
      "Sitio en producción para un negocio real en Miramar, Argentina. Activo y en uso por el establecimiento.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    demo: "https://mitico-theta.vercel.app",
    github: "https://github.com/Gu1ll3rm04r13l/Mitico",
    image: "/projects/mitico.png",
  },
];

export const education = [
  {
    title: "Certified Tech Developer",
    institution: "Digital House",
    period: "Feb 2022 — Dic 2024",
    description:
      "Full-stack certified. Frontend y Backend services, IT & Agile tools. Actividades con MercadoLibre y Globant.",
    tags: ["React", "Node.js", "Java", "MySQL", "MongoDB", "Agile"],
  },
  {
    title: "Tecnicatura en Análisis de Sistemas",
    institution: "Instituto Hilet",
    period: "Mar 2017 — Dic 2019",
    description:
      "Bases de análisis de sistemas, algoritmos y estructuras de datos.",
    tags: ["Análisis de Sistemas", "MySQL", "Algoritmos"],
  },
];

export const certifications = [
  {
    title: "Scrum Foundation Professional Certificate",
    issuer: "CertiProf",
    id: "SFPC #90425039",
    color: "#8b5cf6",
  },
];

export const social = {
  github: "https://github.com/Gu1ll3rm04r13l",
  linkedin: "https://www.linkedin.com/in/guillermo-ariel-del-fresno/",
  whatsapp: "https://wa.me/5492235799301",
};
