"use client";

import { social } from "@/data";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-zinc-600">
          © {year} Guillermo Ariel del Fresno — Built with Next.js & Tailwind
        </p>

        <div className="flex items-center gap-5">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-600 hover:text-zinc-300 transition-colors"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-600 hover:text-zinc-300 transition-colors"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-zinc-600 hover:text-zinc-300 transition-colors"
          >
            <BsWhatsapp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
