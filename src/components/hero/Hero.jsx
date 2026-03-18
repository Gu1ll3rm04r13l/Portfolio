import React from "react";

const Hero = () => {
  return (
    <section id="home" className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div data-aos="fade-up" className="max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Guillermo Ariel del Fresno
          </h2>
          <p className="text-xl md:text-2xl font-bold text-gray-600 mb-8 uppercase tracking-widest">
            Software Developer & QA Automation
          </p>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            Profesional con capacidad analítica enfocado en la construcción de software de alta calidad 
            y la automatización de procesos. Mi background como desarrollador potencia mi visión como QA.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-all">
              Contacto
            </a>
            <a href="#work" className="border-2 border-black text-black px-8 py-3 rounded-lg font-bold hover:bg-black hover:text-white transition-all">
              Proyectos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;