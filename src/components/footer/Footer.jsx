import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4">
        
        <h2 
          data-aos="zoom-out"
          className="text-4xl font-black text-gray-900 tracking-tighter"
        >
          Let's Talk
        </h2>

        <div className="flex items-center justify-center gap-12 sm:gap-8">
          <a
            href="https://t.me/+KkCE0jPl_sMzOWYx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <FaTelegramPlane className="text-3xl text-black transition-transform group-hover:scale-110 group-hover:text-gray-600" />
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-black">Telegram</p>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=56973390169&text=Hola%21+Estuve+mirando+su+portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <IoLogoWhatsapp className="text-3xl text-black transition-transform group-hover:scale-110 group-hover:text-gray-600" />
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-black">WhatsApp</p>
          </a>

          <a
            href="https://www.instagram.com/arieldelfresno/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <RiInstagramFill className="text-3xl text-black transition-transform group-hover:scale-110 group-hover:text-gray-600" />
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-black">Instagram</p>
          </a>
        </div>

        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-4">
          © {new Date().getFullYear()} | All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;