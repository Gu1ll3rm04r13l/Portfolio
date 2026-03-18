import React from "react";
import { IoLogoHtml5, IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import { SiJavascript, SiTailwindcss, SiMongodb, SiCplusplus, SiTypescript, SiMysql } from "react-icons/si";
import { FaReact, FaDocker, FaJava } from "react-icons/fa";


const SkillCard = ({ icon, name, colorClass }) => (
  <div 
    data-aos="zoom-in"
    className="flex flex-col items-center justify-center p-6 bg-white shadow-sm rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 group"
  >
    <div className={`text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 ${colorClass}`}>
      {icon}
    </div>
    <span className="text-sm font-semibold text-gray-700 tracking-wide uppercase">
      {name}
    </span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container m-auto px-4">
        
        {/* Encabezado Seccion */}
        <div data-aos="fade-up" className="relative mb-12 flex flex-col items-center">
          <h3 className="text-4xl font-black text-gray-900 mb-2">
            My Skills
          </h3>
          <div className="h-1 w-20 bg-black rounded-full"></div>
          <p className="mt-4 text-gray-600 font-medium text-center max-w-lg">
            Stack tecnológico enfocado en el desarrollo de software robusto y aseguramiento de calidad.
          </p>
        </div>

        {/* Grilla Unificada de Skills - Centrada y Responsiva */}
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-5xl">
            
            {/* Frontend */}
            <SkillCard icon={<IoLogoHtml5 />} name="HTML5" colorClass="text-orange-500" />
            <SkillCard icon={<IoLogoCss3 />} name="CSS3" colorClass="text-blue-500" />
            <SkillCard icon={<SiJavascript />} name="JavaScript" colorClass="text-yellow-400" />
            <SkillCard icon={<SiTypescript />} name="TypeScript" colorClass="text-blue-600" />
            <SkillCard icon={<FaReact />} name="React" colorClass="text-cyan-400" />
            <SkillCard icon={<SiTailwindcss />} name="Tailwind" colorClass="text-teal-400" />

            {/* Backend & DB */}
            <SkillCard icon={<IoLogoNodejs />} name="Node.js" colorClass="text-green-500" />
            <SkillCard icon={<FaJava />} name="Java" colorClass="text-red-600" />
            <SkillCard icon={<SiCplusplus />} name="C++" colorClass="text-blue-700" />
            <SkillCard icon={<SiMongodb />} name="MongoDB" colorClass="text-green-600" />
            <SkillCard icon={<SiMysql />} name="MySQL" colorClass="text-blue-800" />
            <SkillCard icon={<FaDocker />} name="Docker" colorClass="text-blue-500" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;