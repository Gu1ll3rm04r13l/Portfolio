import React from "react";

const Resume = () => {
  return (
    <div id="resume" className="container m-auto mt-16 px-4 bg-white">
      <div data-aos="fade-up" className="relative mb-5 flex flex-col items-center">
        <h3 className="text-4xl font-black text-gray-900 mb-2">Resume</h3>
        <div className="h-1 w-20 bg-black rounded-full"></div>
      </div>

      <div data-aos="fade-up" className="flex justify-center mb-10">
        <p className="text-gray-600 font-medium text-center max-w-lg">
          Here are my experiences and qualifications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div data-aos="fade-right">
          <fieldset className="border-2 border-gray-100 rounded-2xl p-8 bg-white shadow-sm">
            <legend className="bg-black text-white px-6 py-1 rounded-full font-bold text-lg">
              Experience
            </legend>
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold text-gray-900">Software Developer Intern</h1>
              <span className="font-bold text-gray-500 uppercase tracking-wider text-sm">Student</span>
              <span className="text-gray-400 font-bold">February 2022 - Present</span>
              <p className="text-gray-600 leading-relaxed text-justify">
                Aspiring developer with proficiency in C/C++, C#, Java, HTML, CSS, Javascript, React, and MySQL.
              </p>
            </div>
          </fieldset>
        </div>

        <div data-aos="fade-left">
          <fieldset className="border-2 border-gray-100 rounded-2xl p-8 bg-white shadow-sm">
            <legend className="bg-black text-white px-6 py-1 rounded-full font-bold text-lg">
              Education
            </legend>
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold text-gray-900">Certified Tech Developer</h1>
              <span className="font-bold text-gray-500 uppercase tracking-wider text-sm">Digital House</span>
              <span className="text-gray-400 font-bold">February 2022 - Present</span>
              <p className="text-gray-600 leading-relaxed text-justify">
                Undergraduate student with understanding of web development technologies such as HTML, CSS, JavaScript, and React JS.
              </p>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;