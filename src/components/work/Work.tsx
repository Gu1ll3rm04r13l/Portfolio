"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { projects, academicProjects } from "@/data";
import ProjectCard from "./ProjectCard";
import AcademicProjectCard from "./AcademicProjectCard";

export default function Work() {
  const [showAcademic, setShowAcademic] = useState(false);

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

        {/* Featured projects */}
        <div className="flex flex-col gap-24">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-12">
                <div className="mb-8">
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
                </div>

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
