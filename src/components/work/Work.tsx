"use client";

import { motion } from "framer-motion";
import { projects } from "@/data";
import ProjectCard from "./ProjectCard";

export default function Work() {
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

        <div className="flex flex-col gap-24">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
