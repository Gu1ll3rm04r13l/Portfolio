import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiHtml5, SiNodedotjs, SiSupabase, SiPostgresql, SiMysql,
  SiGit, SiDocker, SiVercel, SiLinux, SiClaude, SiAnthropic,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FiZap, FiServer, FiDatabase, FiShare2, FiEye } from "react-icons/fi";
import type { IconType } from "react-icons";

export type SkillItem = {
  name: string;
  icon: IconType;
  color: string;
};

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Educación", href: "#educacion" },
  { label: "Services", href: "#servicios" },
  { label: "Skills", href: "#skills" },
  { label: "Contacto", href: "#contacto" },
];

export const skillCategories: {
  label: string;
  direction: "left" | "right";
  speed: number;
  items: SkillItem[];
}[] = [
  {
    label: "Frontend",
    direction: "left",
    speed: 30,
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    ],
  },
  {
    label: "Backend & Database",
    direction: "right",
    speed: 36,
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { name: "Neon", icon: FiDatabase, color: "#00E5B0" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "REST APIs", icon: FiServer, color: "#a1a1aa" },
    ],
  },
  {
    label: "Automation & AI",
    direction: "left",
    speed: 27,
    items: [
      { name: "n8n", icon: FiZap, color: "#EA4B71" },
      { name: "Claude Code", icon: SiClaude, color: "#D97757" },
      { name: "Anthropic API", icon: SiAnthropic, color: "#D97757" },
      { name: "Claude Vision", icon: FiEye, color: "#a78bfa" },
      { name: "Groq API", icon: FiZap, color: "#f97316" },
      { name: "MCP", icon: FiShare2, color: "#71717a" },
    ],
  },
  {
    label: "DevOps & Tools",
    direction: "right",
    speed: 40,
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Hostinger VPS", icon: FiServer, color: "#e67e22" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ],
  },
];

export const services = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "Aplicaciones web completas con foco en performance y experiencia de usuario. Desde landing pages hasta dashboards con datos en vivo.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Neon"],
  },
  {
    id: 2,
    title: "AI Automation",
    description:
      "Workflows automatizados para PYMEs. Integro LLMs y APIs para reducir tareas repetitivas y escalar operaciones sin sumar headcount.",
    stack: ["n8n", "Anthropic API", "Groq API", "Claude Code"],
  },
  {
    id: 3,
    title: "Conversational Agents",
    description:
      "Agentes de atención al cliente para WhatsApp e Instagram. Respuestas 24/7, integración con CRM y handoff a humano cuando hace falta.",
    stack: ["Meta Cloud API", "ManyChat", "n8n"],
  },
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
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Blizzard API", "Warcraft Logs", "Raider.io"],
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
  {
    id: 3,
    number: "03",
    title: "Rental-Log",
    subtitle: "Sistema de Automatización — Gestión de Alquiler",
    problem:
      "La gestión manual de un departamento en alquiler implica tareas repetitivas todos los meses: recibir facturas de servicios (luz, gas, agua), reenviarlas a la inquilina, esperar el comprobante de pago, y registrar todo en una planilla. Es propenso a errores y consume tiempo.",
    solution:
      "Dos workflows en n8n orquestan Gmail, Claude API y Google Sheets para automatizar el ciclo completo. El primer workflow detecta facturas entrantes de EDEA, Camuzzi y Obras Sanitarias, extrae los datos con Claude (proveedor, monto, vencimiento, período), las registra como PENDIENTE en Sheets y reenvía un email HTML a la inquilina con el resumen. El segundo workflow detecta comprobantes de pago entrantes, los lee con Claude Vision (PDF o imagen), matchea con la factura correspondiente y actualiza el estado a PAGADO con todos los datos del pago.",
    result:
      "Sistema en desarrollo activo. Elimina la gestión manual mensual de facturas y pagos. Arquitectura modular con workflows versionados y prompts separados por responsabilidad.",
    tech: ["n8n", "Claude API", "Claude Vision", "Gmail API", "Google Sheets", "OAuth2"],
    demo: "https://github.com/Gu1ll3rm04r13l/catamarca#readme",
    demoLabel: "Ver README",
    github: "https://github.com/Gu1ll3rm04r13l/catamarca",
    image: "/projects/rental-log.svg",
    inDevelopment: true,
  },
  {
    id: 4,
    number: "04",
    title: "DelFresno Automations",
    subtitle: "Showcase de Automatizaciones — Casos con n8n + IA",
    problem:
      "Las PYMEs pierden horas en tareas repetitivas (facturación, atención, seguimiento) y no tienen tiempo ni equipo interno para automatizarlas.",
    solution:
      "Construí un sitio que documenta casos reales de automatización end-to-end con n8n, Claude API y APIs de mensajería. Cada caso muestra el flujo, el stack y el resultado concreto para el negocio.",
    result:
      "Plataforma deployada que funciona como portfolio comercial vivo de servicios de automation. Punto de entrada para consultas B2B y lead magnet para clientes nuevos.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    demo: "https://delfresno-automations.vercel.app",
    github: "https://github.com/Gu1ll3rm04r13l/delfresno-automations",
    image: "/projects/delfresno-automations.png",
  },
  {
    id: 5,
    number: "05",
    title: "DentalAI — Sarah",
    subtitle: "DEMO · Recepcionista Virtual con IA para Clínicas Dentales",
    problem:
      "Las clínicas dentales pierden leads fuera de horario y consumen tiempo del equipo respondiendo consultas frecuentes (turnos, precios, tratamientos) por WhatsApp y web.",
    solution:
      "Sarah es una recepcionista virtual con IA que agenda turnos, responde consultas y atiende pacientes 24/7 en español rioplatense. Construida con Next.js 14 + Groq (llama-3.3-70b-versatile) usando function calling para encadenar tools (verificar disponibilidad → agendar). Panel admin con chat en vivo, historial, gestión de turnos y configuración editable de la clínica. Estado persistido con Zustand + localStorage y archivos JSON con escritura atómica en backend.",
    result:
      "Demo navegable en producción con persona configurable, lista para mostrar la propuesta a clínicas reales. Base reusable para implementaciones a medida con datos de cada consultorio.",
    tech: ["Next.js 14", "TypeScript", "Groq SDK", "llama-3.3-70b", "Zustand", "shadcn/ui", "Tailwind CSS", "Zod", "Framer Motion"],
    demo: "https://dental-ai-pi.vercel.app/panel/chat",
    github: "https://github.com/Gu1ll3rm04r13l/DentalAI",
    image: "/projects/dental-ai.png",
    isDemo: true,
  },
];

export const academicProjects = [
  {
    id: 1,
    number: "A1",
    title: "Proyecto Integrador",
    description:
      "Proyecto integrador de la carrera Certified Tech Developer con arquitectura full-stack y trabajo colaborativo.",
    tech: ["React", "Node.js", "Java", "MySQL"],
    github: "https://github.com/Gu1ll3rm04r13l/Proyecto-Integrador",
  },
  {
    id: 2,
    number: "A2",
    title: "Final Frontend 3",
    description:
      "Proyecto final del módulo Frontend 3 en Digital House. Aplicación React con manejo de estado y consumo de APIs.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Gu1ll3rm04r13l/FinalFrontEnd3",
  },
  {
    id: 3,
    number: "A3",
    title: "ToDo App",
    description:
      "Aplicación de gestión de tareas construida a partir de template inicial, demostrando componentes funcionales y estado en React.",
    tech: ["React", "JavaScript"],
    github: "https://github.com/Gu1ll3rm04r13l/ToDo-App-template-inicial",
  },
  {
    id: 4,
    number: "A4",
    title: "Final Frontend 1",
    description:
      "Proyecto final del primer módulo de Frontend, cubriendo HTML semántico, CSS y JavaScript vanilla.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Gu1ll3rm04r13l/FinalFront1",
  },
];

export const education = [
  {
    title: "Certified Tech Developer",
    institution: "Digital House",
    period: "Feb 2022 — Dic 2023",
    description:
      "Full-stack certified. Frontend y Backend services, IT & Agile tools. Actividades con MercadoLibre y Globant.",
    tags: ["React", "Node.js", "Java", "MySQL", "MongoDB", "Agile"],
    image: "/certifications/DIploma CTD - Guillermo Ariel del Fresno.png",
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
    title: "Certified Tech Developer",
    issuer: "Digital House",
    id: "Diploma de finalización",
    color: "#8b5cf6",
    image: "/certifications/DIploma CTD - Guillermo Ariel del Fresno.png",
  },
  {
    title: "EF SET English Certificate — C1 Advanced",
    issuer: "EF SET",
    id: "68/100 · cert.efset.org/eDp7zg",
    color: "#8b5cf6",
    image: "/certifications/EF SET Certificate.png",
  },
  {
    title: "Scrum Foundation Professional Certificate",
    issuer: "CertiProf",
    id: "SFPC #90425039",
    color: "#8b5cf6",
    image: "/certifications/CertiProf.png",
  },
  {
    title: "Desarrollo de Software con Inteligencia Artificial",
    issuer: "BIG school",
    id: "",
    color: "#8b5cf6",
    image: "/certifications/Desarrollo con IA.png",
  },
  {
    title: "Ciberseguridad y Hacking Ético",
    issuer: "BIG school",
    id: "6 horas · 10/04/2026",
    color: "#8b5cf6",
    image: "/certifications/hacking_etico.png",
  },
];

export const social = {
  github: "https://github.com/Gu1ll3rm04r13l",
  linkedin: "https://www.linkedin.com/in/guillermo-ariel-del-fresno/",
  whatsapp: "https://wa.me/5492235799301",
};
