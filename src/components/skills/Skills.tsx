"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data";
import Marquee from "./Marquee";

const alsoFamiliarWith = ["Java", "Selenium", "MongoDB", "C++"];

export default function Skills() {
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

        <div className="flex flex-col gap-10">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
            >
              <Marquee
                label={cat.label}
                direction={cat.direction}
                speed={cat.speed}
                items={cat.items}
              />
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-neutral-600 mt-12">
          Also familiar with: {alsoFamiliarWith.join(", ")}
        </p>
      </div>
    </section>
  );
}
