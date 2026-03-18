"use client";

import { motion } from "framer-motion";
import { skills } from "@/data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.05, ease: "easeOut" },
  }),
};

export default function Skills() {
  const featured = skills.filter((s) => s.featured);
  const rest = skills.filter((s) => !s.featured);

  return (
    <section id="skills" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">
            Tecnologías
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
            Stack & Skills
          </h2>
        </motion.div>

        {/* Featured — bento large */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
          {featured.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, borderColor: skill.color + "55" }}
                className="glass glass-hover rounded-2xl p-6 flex flex-col items-center justify-center gap-3 cursor-default group"
                style={{ minHeight: "120px" }}
              >
                <Icon
                  size={36}
                  style={{ color: skill.color }}
                  className="transition-transform group-hover:scale-110 duration-200"
                />
                <span className="text-sm font-medium text-zinc-300">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Rest — smaller grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {rest.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                custom={i + featured.length}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, borderColor: skill.color + "55" }}
                className="glass glass-hover rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-default group"
              >
                <Icon
                  size={24}
                  style={{ color: skill.color }}
                  className="transition-transform group-hover:scale-110 duration-200"
                />
                <span className="text-xs font-medium text-zinc-400">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
