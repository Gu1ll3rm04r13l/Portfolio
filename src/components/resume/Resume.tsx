"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { education, certifications } from "@/data";
import { HiAcademicCap, HiBadgeCheck } from "react-icons/hi";

type Cert = (typeof certifications)[number];

export default function Resume() {
  const [activeCert, setActiveCert] = useState<Cert | null>(null);

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
                onClick={() => cert.image && setActiveCert(cert)}
                className={`glass rounded-2xl p-5 flex items-start gap-4 ${
                  cert.image
                    ? "cursor-pointer hover:border-violet-500/30 transition-all duration-200"
                    : "glass-hover"
                }`}
                style={
                  cert.image
                    ? { borderColor: "rgba(139,92,246,0.15)" }
                    : undefined
                }
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: cert.color + "22", border: `1px solid ${cert.color}44` }}
                >
                  <HiBadgeCheck style={{ color: cert.color }} size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-zinc-100 text-sm leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-violet-400 text-sm mt-0.5">{cert.issuer}</p>
                  {cert.id && (
                    <p className="text-zinc-600 text-xs mt-1">{cert.id}</p>
                  )}
                  {cert.image && (
                    <p className="text-violet-500/60 text-xs mt-2 flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-violet-500/60 inline-block" />
                      Click para ver certificado
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>

      {/* Certificate image overlay */}
      <AnimatePresence>
        {activeCert && activeCert.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-6"
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full"
            >
              {/* X button */}
              <button
                onClick={() => setActiveCert(null)}
                className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-zinc-900 border border-violet-500/30 text-zinc-400 hover:text-zinc-100 hover:border-violet-400/60 flex items-center justify-center transition-all duration-200 text-sm font-medium"
                aria-label="Cerrar"
              >
                ✕
              </button>
              <div
                className="rounded-2xl overflow-hidden border border-violet-500/30"
                style={{ boxShadow: "0 0 40px rgba(139,92,246,0.25), 0 25px 50px rgba(0,0,0,0.5)" }}
              >
                <Image
                  src={activeCert.image}
                  alt={activeCert.title}
                  width={800}
                  height={600}
                  className="w-full h-auto block"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <p className="text-center text-zinc-400 text-sm mt-3">
                {activeCert.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
