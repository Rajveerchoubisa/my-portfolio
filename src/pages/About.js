import { motion } from "framer-motion";
import generatedImage from "../assets/dele.png";
import { AboutMe, Me } from "../constant/content.js";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiGit } from "react-icons/di";
import { SiFirebase, SiMysql } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

const About = () => {
  return (
    <div name="About" className="py-[55px]  relative">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white z-10 mt-[30px] font-semibold text-center text-3xl lg:text-4xl lg:mt-10 p-5 m-5">
          KNOW WHO <span className="text-[#7e68ff]"> I'M </span>
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap">
        {/* Left Content */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex m-4 justify-center lg:justify-end">
            <p className="max-w-xl mx-auto text-[15px] font-semibold lg:text-[23px] lg:text-left">
              I'm{" "}
              <span className="text-[#6d99ff] lg:text-[23px] font-bold text-[16px]">
                Rajveer Choubisa
              </span>
              {AboutMe}
              <br />
              <br />
              {Me}
            </p>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="m-4 flex items-center justify-center lg:justify-start">
            <img
              className="rounded-2xl w-[80%] max-w-[450px] shadow-lg"
              src={generatedImage}
              alt="Table and Laptop"
            />
          </div>
        </motion.div>
      </div>

      {/* Skillset Section */}
      <div className="mt-10 ">
        <h2 className="text-white text-center lg:text-4xl text-2xl font-semibold">
          SKILL<span className="text-[#b16df9]">SET</span>
        </h2>
        <div className="flex flex-wrap justify-center mt-8">
          <div className="flex flex-col items-center w-1/2 sm:w-1/3 lg:w-[15%] mb-8">
            <DiReact
              className="text-[#f9fafb] p-5 border-2 border-[#b8c9ff] scale-105 transition duration-200 
          hover:scale-110 hover:border-[#b78cfc] 
          hover:shadow-lg hover:shadow-[#9ee2ff] text-9xl"
            />
          </div>
          <div className="flex flex-col items-center w-1/2 sm:w-1/3 lg:w-[15%] mb-8">
            <SiFirebase
              className="text-[#f9fafb] p-5 border-2 border-[#b8c9ff] scale-105 transition duration-200 
          hover:scale-110 hover:border-[#b78cfc] 
          hover:shadow-lg hover:shadow-[#9ee2ff] text-9xl"
            />
          </div>
          <div className="flex flex-col items-center w-1/2 sm:w-1/3 lg:w-[15%] mb-8">
            <DiGit
              className="text-[#f9fafb] p-5 border-2 border-[#b8c9ff] scale-105 transition duration-200 
          hover:scale-110 hover:border-[#b78cfc] 
          hover:shadow-lg hover:shadow-[#9ee2ff] text-9xl"
            />
          </div>
          <div className="flex flex-col items-center w-1/2 sm:w-1/3 lg:w-[15%] mb-8">
            <DiJavascript1
              className="text-[#f9fafb] p-5 border-2 border-[#b8c9ff] scale-105 transition duration-200 
          hover:scale-110 hover:border-[#b78cfc] 
          hover:shadow-lg hover:shadow-[#9ee2ff] text-9xl"
            />
          </div>
          <div className="flex flex-col items-center  w-1/2 sm:w-1/3 lg:w-[15%] mb-8">
            <CgCPlusPlus
              className="text-[#f9fafb] p-5 border-2 border-[#b8c9ff] scale-105 transition duration-200 
          hover:scale-110 hover:border-[#b78cfc] 
          hover:shadow-lg hover:shadow-[#9ee2ff] text-9xl"
            />
          </div>

          <div className="flex flex-col items-center w-1/2 sm:w-1/3 lg:w-[25.1%] mb-4">
            <SiMysql
              className="text-[#f9fafb] p-5 border-2 border-[#b8c9ff] scale-105 transition duration-200 
          hover:scale-110 hover:border-[#b78cfc] 
          hover:shadow-lg hover:shadow-[#9ee2ff] text-9xl"
            />
          </div>
          <div className="flex flex-col items-center w-1/2 sm:w-1/3 lg:w-[5%] mb-4">
            <SiTypescript
              className="text-white  p-5 border-2 border-[#b8c9ff] scale-105 transition duration-200 
          hover:scale-110 hover:border-[#b78cfc] 
          hover:shadow-lg hover:shadow-[#9ee2ff] text-9xl"
            />
          </div>
          <div className="flex flex-col items-center w-1/2 sm:w-1/3 lg:w-[25%] mb-4">
            <FaNodeJs
              className="text-white  p-5 border-2 border-[#b8c9ff] scale-105 transition duration-200 
          hover:scale-110 hover:border-[#b78cfc] 
          hover:shadow-lg hover:shadow-[#9ee2ff] text-9xl"
            />
          </div>
        </div>
      </div>

      <div className="items-center  mt-8 justify-center">
        <h1 className="uppercase text-2xl text-center  text-white font-semibold lg:text-4xl">
          <span className="text-[#c77dfb]">Tools</span>  I Use
        </h1>
        <div className="flex flex-wrap justify-center mt-8">
          <div className="flex flex-col items-center w-1/2 sm:w-1/3 lg:w-[15%] mb-4">
            <VscVscode
              className="text-[#f9fafb] p-5 border-2 border-[#b8c9ff] scale-105 transition duration-200 
          hover:scale-110 hover:border-[#b78cfc] 
          hover:shadow-lg hover:shadow-[#9ee2ff] text-9xl"
            />
          </div>
          <div className="flex flex-col items-center w-1/2 sm:w-1/3 lg:w-[15%] mb-4">
            <SiPostman
              className="text-[#f9fafb] p-5 border-2 border-[#b8c9ff] scale-105 transition duration-200 
          hover:scale-110 hover:border-[#b78cfc] 
          hover:shadow-lg hover:shadow-[#9ee2ff] text-9xl"
            />
          </div>
          <div className="flex flex-col items-center w-1/2 sm:w-1/3 lg:w-[15%] mb-4">
            <FaGithub
              className="text-[#f9fafb] p-5 border-2 border-[#b8c9ff] scale-105 transition duration-200 
          hover:scale-110 hover:border-[#b78cfc] 
          hover:shadow-lg hover:shadow-[#9ee2ff] text-9xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
