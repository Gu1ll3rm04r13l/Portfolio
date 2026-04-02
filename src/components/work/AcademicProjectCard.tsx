"use client";

import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

interface AcademicProject {
  id: number;
  number: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
}

const gradients = [
  "from-violet-900/40 to-zinc-900/60",
  "from-indigo-900/40 to-zinc-900/60",
  "from-purple-900/40 to-zinc-900/60",
  "from-blue-900/40 to-zinc-900/60",
];

export default function AcademicProjectCard({
  project,
  index,
}: {
  project: AcademicProject;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36, scale: 0.92, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.55,
        delay: 0.3 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="glass glass-hover rounded-2xl overflow-hidden flex flex-col"
    >
      {/* Gradient header */}
      <div
        className={`h-24 bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center relative`}
      >
        <span className="text-5xl font-black text-white/10 select-none">
          {project.number}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-semibold text-zinc-100 text-base leading-snug">
          {project.title}
        </h3>

        <p className="text-xs text-zinc-500 leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-full text-xs font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-1 border-t border-white/5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-violet-400 transition-colors"
          >
            <FiGithub size={13} />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
