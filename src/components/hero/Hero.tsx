"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { social } from "@/data";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const roles = [
  "Full Stack Developer",
  "QA Automation",
  "React & Node.js",
  "Certified Tech Developer",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      3000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px] animate-glow" />
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-violet-800/10 blur-[80px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div variants={item} className="mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-violet-500/30 text-violet-400 bg-violet-500/5">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Open to work · Miramar, Argentina
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-4xl xs:text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          <span className="text-zinc-100">Guillermo Ariel</span>
          <br />
          <span className="text-gradient">del Fresno</span>
        </motion.h1>

        <motion.div variants={item} className="h-10 mb-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="text-lg xs:text-xl md:text-2xl font-medium text-violet-400"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p
          variants={item}
          className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          Construyo aplicaciones web completas con foco en calidad, rendimiento
          y experiencia de usuario. CTD certificado — Digital House.
        </motion.p>

        <motion.div variants={item} className="flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={() =>
              document
                .querySelector("#proyectos")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all hover:shadow-lg hover:shadow-violet-500/25 active:scale-95"
          >
            Ver proyectos
          </button>
          <button
            onClick={() =>
              document
                .querySelector("#contacto")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 rounded-full border border-white/10 text-zinc-300 hover:border-white/20 hover:text-white transition-all active:scale-95"
          >
            Contacto
          </button>
        </motion.div>

        <motion.div variants={item} className="flex items-center justify-center gap-5 mt-10">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            <FiGithub size={20} />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href={social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            <BsWhatsapp size={20} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-zinc-600 tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}
