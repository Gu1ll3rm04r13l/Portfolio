"use client";

import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiSend, FiCheckCircle, FiGithub, FiLinkedin } from "react-icons/fi";
import { social } from "@/data";
import { BsWhatsapp } from "react-icons/bs";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    setError(null);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setSent(true);
      formRef.current.reset();
      setTimeout(() => setSent(false), 4000);
    } catch {
      setError("No se pudo enviar el mensaje. Intentá por WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" className="section-padding px-6">
      <div className="max-w-4xl mx-auto">

        {/* Disponible para trabajar — banner centrado */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-10"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-violet-500/25 bg-violet-500/8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse flex-shrink-0" />
            <span className="text-sm font-medium text-violet-300">
              Disponible para trabajar
            </span>
            <span className="text-zinc-500 text-sm">·</span>
            <span className="text-sm text-zinc-400">
              Abierto a oportunidades en desarrollo de software
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">
            Hablemos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
            Contacto
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Trabajo en desarrollo web con experiencia en proyectos reales,
                incluyendo freelance. Si tenés una posición open o querés hablar
                sobre un proyecto, escribime.
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-400 hover:text-violet-400 transition-colors group"
                >
                  <span className="w-9 h-9 rounded-xl glass flex items-center justify-center group-hover:border-violet-500/30 transition-colors">
                    <FiGithub size={17} />
                  </span>
                  <span className="text-sm">Gu1ll3rm04r13l</span>
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-400 hover:text-violet-400 transition-colors group"
                >
                  <span className="w-9 h-9 rounded-xl glass flex items-center justify-center group-hover:border-violet-500/30 transition-colors">
                    <FiLinkedin size={17} />
                  </span>
                  <span className="text-sm">guillermo-ariel-del-fresno</span>
                </a>
                <a
                  href={social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-400 hover:text-violet-400 transition-colors group"
                >
                  <span className="w-9 h-9 rounded-xl glass flex items-center justify-center group-hover:border-violet-500/30 transition-colors">
                    <BsWhatsapp size={17} />
                  </span>
                  <span className="text-sm">+54 9 223 579 9301</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-zinc-400 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="reply_to"
                  required
                  placeholder="tu@email.com"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-violet-500/50 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-zinc-400 font-medium">
                  Nombre
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Tu nombre"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-violet-500/50 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-zinc-400 font-medium">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Contame sobre la oportunidad..."
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-violet-500/50 transition-colors resize-none"
                />
              </div>

              {error && (
                <p className="text-red-400 text-xs">{error}</p>
              )}

              <button
                type="submit"
                disabled={sending || sent}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium text-sm transition-all"
              >
                {sent ? (
                  <>
                    <FiCheckCircle size={16} />
                    Enviado
                  </>
                ) : sending ? (
                  "Enviando..."
                ) : (
                  <>
                    <FiSend size={16} />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
