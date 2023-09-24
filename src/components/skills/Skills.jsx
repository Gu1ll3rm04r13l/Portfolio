import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";


import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import { GrCode } from "react-icons/gr";
import { FaReact, FaDocker } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills ">
      <div className="container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-black sm:text-2xl">
            My Skills
          </h3>

          <span className="h-[1.1px] right-0 absolute w-[90%] bg-black block"></span>
        </div>

        {/* content*/}
        <div className="flex md:flex-col ">

          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-black font-medium w-[100%]"
            >
              Here are my skills.
            </p>

            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={90} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={70} />
                <ProgressBar
                  logo={<SiJavascript />}
                  name={"Javascript"}
                  value={85}
                />
                <ProgressBar logo={<FaReact />} name={"React Js"} value={90} />
                <ProgressBar
                  logo={<SiTailwindcss />}
                  name={"Tailwind CSS"}
                  value={55}
                />
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<IoLogoNodejs />}
                black={"white"}
                white={"black"}
                skill={"Node Js"}
              />
              <SkillBox
                logo={<SiMongodb />}
                black={"white"}
                white={"black"}
                skill={"MongoDB"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<FaDocker />}
                black={"black"}
                white={"white"}
                skill={"Docker"}
              />
              <SkillBox
                className=""
                logo={
                  <GrCode />
                }
                black={"black"}
                white={"white"}
                skill={"C++"}
              />

            </div>
          </div>
        </div>
        <div className="flex ml-44">
          <img
            src="https://img.icons8.com/fluency/48/html-5.png"
            width="48"
            height="48"
            alt="html-5"
            className="mr-2"
          />
          <img
            src="https://img.icons8.com/fluency/48/000000/css3.png"
            align="center"
            height="50"
            width="50"
            className="mr-2"
          />
          <img
            src="https://img.icons8.com/fluency/48/javascript.png"
            width="48"
            height="48"
            alt="javascript"
            className="mr-2"
          />
          <img
            src="https://img.icons8.com/plasticine/50/null/react.png"
            align="center"
            height="50"
            width="50"
            className="mr-2"
          />
          <img
            src="https://img.icons8.com/color/50/null/tailwindcss.png"
            align="center"
            height="50"
            width="50"
            className="mr-2"
          />
          <img
            src="https://img.icons8.com/color/48/null/nodejs.png"
            align="center"
            height="50"
            width="50"
          />
          <img
            src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"
            align="center"
            height="50"
            width="50"
          />
          <img
            src="https://img.icons8.com/color/48/null/c-plus-plus-logo.png"
            align="center"
            height="50"
            width="50"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
