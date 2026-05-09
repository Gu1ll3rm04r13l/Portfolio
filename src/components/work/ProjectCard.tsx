"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";

interface Project {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
  demo: string | null;
  demoLabel?: string;
  github: string;
  image: string;
  inDevelopment?: boolean;
  isDemo?: boolean;
}

export default function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  const [imgError, setImgError] = useState(false);
  const MAX_TECH = 4;
  const techVisible = project.tech.slice(0, MAX_TECH);
  const techExtra = project.tech.length - MAX_TECH;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      className="group relative flex flex-col rounded-2xl glass glass-hover border border-white/5 hover:border-violet-400/30 transition-all duration-300 overflow-hidden"
    >
      {/* Stacked layers */}
      <div className="relative pt-6 px-6">
        <div className="relative aspect-[16/10]">
          {/* Back layer */}
          <div
            className="absolute inset-0 rounded-xl bg-zinc-800/40 border border-white/5"
            style={{ transform: "translate(-10px, -10px) rotate(-2deg)", opacity: 0.35 }}
            aria-hidden
          />
          {/* Mid layer */}
          <div
            className="absolute inset-0 rounded-xl bg-zinc-800/60 border border-white/5"
            style={{ transform: "translate(-5px, -5px) rotate(-1deg)", opacity: 0.6 }}
            aria-hidden
          />
          {/* Front image */}
          <div className="relative h-full w-full rounded-xl overflow-hidden border border-white/10 bg-zinc-900">
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, #1a0533 0%, #0d0d1a 50%, #0a0a0f 100%)",
              }}
            >
              <span className="text-6xl font-black text-white/5 select-none">
                {project.number}
              </span>
            </div>
            {!imgError && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                onError={() => setImgError(true)}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                unoptimized={project.image.endsWith(".svg")}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-bold text-zinc-100 truncate">
                {project.title}
              </h3>
              {project.inDevelopment && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <span className="w-1 h-1 rounded-full bg-amber-400 animate-pulse" />
                  En desarrollo
                </span>
              )}
              {project.isDemo && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20">
                  Demo
                </span>
              )}
            </div>
            <p className="text-violet-400/90 text-xs mt-0.5 truncate">
              {project.subtitle}
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-600 shrink-0">
            {project.number}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {techVisible.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20"
            >
              {t}
            </span>
          ))}
          {techExtra > 0 && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/5 text-zinc-400 border border-white/10">
              +{techExtra}
            </span>
          )}
        </div>

        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
          {project.problem}
        </p>

        <div className="flex items-center justify-between pt-3 mt-1 border-t border-white/5">
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-violet-300 transition-colors"
            >
              <FiExternalLink size={13} />
              {project.demoLabel ?? "Ver proyecto"}
            </a>
          ) : (
            <span />
          )}
          <button
            onClick={() => onOpen(project)}
            className="flex items-center gap-1 text-xs font-medium text-violet-400 hover:text-violet-300 transition-colors"
          >
            Detalles
            <FiArrowUpRight size={13} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
