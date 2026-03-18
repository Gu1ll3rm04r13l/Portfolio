"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiChevronDown } from "react-icons/fi";

interface Project {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
  demo: string;
  github: string;
  image: string;
}

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`grid md:grid-cols-2 gap-8 items-center ${
        !isEven ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}
      <div className="relative rounded-2xl overflow-hidden aspect-video glass border border-white/5 group">
        {/* Gradient placeholder */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, #1a0533 0%, #0d0d1a 50%, #0a0a0f 100%)`,
          }}
        >
          <span className="text-7xl font-black text-white/5 select-none">
            {project.number}
          </span>
        </div>
        {/* Real image on top when available */}
        {!imgError && (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {/* Overlay with links on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600 text-white text-sm font-medium hover:bg-violet-500 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <FiExternalLink size={14} />
            Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <FiGithub size={14} />
            GitHub
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        <div>
          <span className="text-6xl font-black text-white/5 leading-none select-none">
            {project.number}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 -mt-3">
            {project.title}
          </h3>
          <p className="text-violet-400 text-sm mt-1">{project.subtitle}</p>
        </div>

        {/* Storytelling accordion */}
        <div className="glass rounded-xl overflow-hidden">
          <div className="grid grid-cols-3 text-xs font-medium text-zinc-500 border-b border-white/5">
            {["Problema", "Solución", "Resultado"].map((label) => (
              <span key={label} className="px-3 py-2 text-center">
                {label}
              </span>
            ))}
          </div>

          <div
            className={`px-4 py-3 text-sm text-zinc-300 leading-relaxed overflow-hidden transition-all duration-300 ${
              expanded ? "max-h-96" : "max-h-20"
            }`}
          >
            <p>
              <span className="text-violet-400 font-medium">Problema: </span>
              {project.problem}
            </p>
            <p className="mt-2">
              <span className="text-violet-400 font-medium">Solución: </span>
              {project.solution}
            </p>
            <p className="mt-2">
              <span className="text-violet-400 font-medium">Resultado: </span>
              {project.result}
            </p>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-center py-2 text-zinc-500 hover:text-zinc-300 border-t border-white/5 transition-colors"
            aria-label={expanded ? "Colapsar" : "Expandir"}
          >
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiChevronDown size={16} />
            </motion.span>
          </button>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-300 hover:text-violet-400 transition-colors"
          >
            <FiExternalLink size={15} />
            Ver demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-300 hover:text-violet-400 transition-colors"
          >
            <FiGithub size={15} />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
