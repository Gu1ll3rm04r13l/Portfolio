"use client";

import { motion } from "framer-motion";
import { services } from "@/data";

export default function Services() {
  return (
    <section id="servicios" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">
            Qué ofrezco
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
            Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="glass glass-hover rounded-2xl p-6 flex flex-col gap-4"
            >
              <h3 className="text-lg font-semibold text-zinc-100">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed flex-1">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {service.stack.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
