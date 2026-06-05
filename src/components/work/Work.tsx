"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { projects, academicProjects } from "@/data";
import ProjectCarousel from "./ProjectCarousel";
import ProjectModal from "./ProjectModal";
import AcademicProjectCard from "./AcademicProjectCard";

type Project = (typeof projects)[number];

export default function Work() {
  const [showAcademic, setShowAcademic] = useState(false);
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="proyectos" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">
            Trabajo
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
            Proyectos
          </h2>
        </motion.div>

        {/* Projects coverflow */}
        <ProjectCarousel onOpen={(p) => setActive(p as Project)} />

        <ProjectModal project={active} onClose={() => setActive(null)} />

        {/* Academic CTA */}
        <div className="flex justify-center mt-20">
          <button
            onClick={() => setShowAcademic((v) => !v)}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-violet-500/30 text-violet-400/70 hover:text-violet-300 hover:border-violet-400/50 hover:bg-violet-500/5 transition-all text-sm"
            aria-expanded={showAcademic}
          >
            <span>Proyectos académicos</span>
            <motion.span
              animate={{ rotate: showAcademic ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="text-violet-500/60 group-hover:text-violet-400 transition-colors"
            >
              <FiChevronDown size={15} />
            </motion.span>
          </button>
        </div>

        {/* Academic section — animated expand */}
        <AnimatePresence>
          {showAcademic && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden relative"
            >
              {/* Scanner line */}
              <motion.div
                initial={{ top: 48, opacity: 1 }}
                animate={{ top: "100%", opacity: 0 }}
                transition={{ duration: 1.1, ease: "easeInOut", delay: 0.05 }}
                className="absolute inset-x-0 h-px pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #a78bfa, #8b5cf6, #a78bfa, transparent)",
                  boxShadow: "0 0 12px 2px rgb(139 92 246 / 0.55)",
                }}
              />

              <div className="pt-12">
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
                  className="mb-8"
                >
                  <p className="text-zinc-600 text-xs font-medium tracking-widest uppercase mb-1">
                    Digital House · CTD
                  </p>
                  <h3 className="text-xl font-semibold text-zinc-300">
                    Proyectos Académicos
                  </h3>
                  <p className="text-zinc-500 text-sm mt-1">
                    Trabajos prácticos y proyectos finales realizados durante la
                    carrera Certified Tech Developer.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4">
                  {academicProjects.map((project, i) => (
                    <AcademicProjectCard
                      key={project.id}
                      project={project}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
