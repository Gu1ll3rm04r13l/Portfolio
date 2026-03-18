"use client";

import { motion } from "framer-motion";
import { education, certifications } from "@/data";
import { HiAcademicCap, HiBadgeCheck } from "react-icons/hi";

export default function Resume() {
  return (
    <section id="educacion" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">
            Trayectoria
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
            Educación & Certificaciones
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <HiAcademicCap className="text-violet-400" size={20} />
              <span className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Formación
              </span>
            </div>

            {education.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass glass-hover rounded-2xl p-5"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-semibold text-zinc-100">{item.title}</h3>
                    <p className="text-violet-400 text-sm">{item.institution}</p>
                  </div>
                  <span className="text-xs text-zinc-500 whitespace-nowrap mt-1">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed mb-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-xs bg-white/5 text-zinc-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <HiBadgeCheck className="text-violet-400" size={20} />
              <span className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                Certificaciones
              </span>
            </div>

            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass glass-hover rounded-2xl p-5 flex items-start gap-4"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: cert.color + "22", border: `1px solid ${cert.color}44` }}
                >
                  <HiBadgeCheck style={{ color: cert.color }} size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-100 text-sm leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-violet-400 text-sm mt-0.5">{cert.issuer}</p>
                  <p className="text-zinc-600 text-xs mt-1">{cert.id}</p>
                </div>
              </motion.div>
            ))}

            {/* Open to work card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-2xl p-5 border border-violet-500/20 bg-violet-500/5"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                <span className="text-sm font-medium text-violet-400">
                  Disponible para trabajar
                </span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Busco mi primer rol en desarrollo de software. Listo para sumar
                en equipos que valoren calidad y aprendizaje continuo.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
