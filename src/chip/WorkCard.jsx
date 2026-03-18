import React from "react";
import { data } from "../data/data";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

const WorkCard = () => {
  // Verificación de seguridad
  if (!data || data.length === 0) return null;

  const reversedData = [...data].reverse();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 w-full max-w-5xl mx-auto px-4">
      {reversedData.map((item) => (
        <div
          key={item.id}
          className="group relative bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-500 hover:shadow-2xl"
        >
          {/* Contenedor de Imagen con Aspect Ratio fijo */}
          <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
            <img
              src={item.img}
              alt={item.title}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay con Blur y Contenido */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center">
              <p className="text-white text-sm font-medium leading-relaxed mb-6">
                {item.desc || "Proyecto desarrollado con tecnologías modernas enfocado en la escalabilidad y buenas prácticas."}
              </p>
              <div className="flex gap-5">
                <a
                  href={item.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-transform hover:-translate-y-1 shadow-lg"
                  title="Repositorio GitHub"
                >
                  <AiOutlineGithub size={24} />
                </a>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-transform hover:-translate-y-1 shadow-lg"
                    title="Demo en Vivo"
                  >
                    <FiExternalLink size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Información Inferior */}
          <div className="p-5 bg-white flex justify-between items-center">
            <h4 className="text-lg font-bold text-gray-900 tracking-tight">
              {item.title}
            </h4>
            <span className="text-[10px] font-black bg-gray-100 text-gray-500 px-2 py-1 rounded uppercase tracking-tighter">
              Featured Project
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkCard;