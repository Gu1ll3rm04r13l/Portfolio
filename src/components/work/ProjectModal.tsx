"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink, FiGithub } from "react-icons/fi";

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

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass rounded-2xl border border-violet-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-zinc-900/80 hover:bg-violet-500/20 border border-white/10 hover:border-violet-400/40 flex items-center justify-center text-zinc-400 hover:text-violet-300 transition-colors"
            >
              <FiX size={18} />
            </button>

            <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl border-b border-white/5">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                unoptimized={project.image.endsWith(".svg")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 text-xs font-mono text-violet-400/80 tracking-widest">
                {project.number}
              </span>
            </div>

            <div className="p-6 md:p-8 flex flex-col gap-5">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-zinc-100">
                    {project.title}
                  </h3>
                  {project.inDevelopment && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      En desarrollo
                    </span>
                  )}
                  {project.isDemo && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                      Demo
                    </span>
                  )}
                </div>
                <p className="text-violet-400 text-sm mt-1">{project.subtitle}</p>
              </div>

              <div className="flex flex-col gap-4 text-sm text-zinc-300 leading-relaxed">
                <p>
                  <span className="text-violet-400 font-semibold">Problema · </span>
                  {project.problem}
                </p>
                <p>
                  <span className="text-violet-400 font-semibold">Solución · </span>
                  {project.solution}
                </p>
                <p>
                  <span className="text-violet-400 font-semibold">Resultado · </span>
                  {project.result}
                </p>
              </div>

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

              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600 text-white text-sm font-medium hover:bg-violet-500 transition-colors"
                  >
                    <FiExternalLink size={14} />
                    {project.demoLabel ?? "Ver demo"}
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-zinc-300 text-sm font-medium hover:bg-white/10 hover:text-white border border-white/10 transition-colors"
                >
                  <FiGithub size={14} />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
