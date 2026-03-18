import React from "react";
import WorkCard from "../../chip/WorkCard";

const Work = () => {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="container m-auto px-4">
        
        {/* Encabezado */}
        <div data-aos="fade-up" className="relative mb-12 flex flex-col items-center">
          <h3 className="text-4xl font-black text-gray-900 mb-2">
            Proyectos
          </h3>
          <div className="h-1 w-20 bg-black rounded-full"></div>
          <p className="mt-4 text-gray-600 font-medium text-center">
            Una selección de mis trabajos más recientes en desarrollo y testing.
          </p>
        </div>

        {/* Contenedor del Grid (Manejado dentro de WorkCard) */}
        <div className="flex justify-center">
          <WorkCard />
        </div>

      </div>
    </section>
  );
};

export default Work;