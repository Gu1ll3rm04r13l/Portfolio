import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-black sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-black block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-black font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-300 rounded-3xl py-1 px-8 font-semibold text-xl text-gray-900 ">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-purple-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-purple-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-purple-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Software Developer Intern
                </h1>
                <span className=" text-[.9rem] font-semibold text-grey-800 sm:text-base">
                  Student
                </span>
                <span className=" text-[.9rem] font-semibold text-purple-900 sm:text-base">
                  February 2022 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-grey-800">
                  Aspiring developer with proficiency in C/C++, C#, Java, HTML, CSS, Javascript, React, and MySQL.
                  Passionate about merging technology and business. Committed to daily skill enhancement for professional growth
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className="w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-300 rounded-3xl py-1 px-8 font-semibold text-xl text-gray-900">
              Education
            </legend>
            <div className="relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-purple-900"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-purple-900"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-purple-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Certified Tech Developer, The Ultimate Degree
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-900 sm:text-base">
                  From Mercado Libre and Globant, By Digital House
                </span>
                <span className=" text-[.9rem] font-semibold text-purple-900 sm:text-base">
                  February 2022 - Present
                </span>
                <p className=" text-[.9rem] text-justify text-gray-900">
                  As an undergraduate student, I have a good understanding of web development technologies such as HTML, CSS, Tailwind CSS, JavaScript, and React JS. 
                  Additionally, I'm proficient in backend technologies such as Node.js, Express.js, and MongoDB. 
                  I also have skills in C++ and problem-solving using Data structures and Algorithms.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
