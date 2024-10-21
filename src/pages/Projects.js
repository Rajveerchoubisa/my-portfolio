import { PROJECTS } from "../constant/content.js";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="Project" className="pb-4 pt-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-white/90 text-center  text-3xl lg:text-5xl md:text-4xl font-bold my-5 lg:mt-10 md:mt-10"
      >
        <span className="text-[#7fb5f8]">MY</span> RECENT <span className="text-[#bc70ff]">WORKS</span> 
          <br/>
        <span className="text-[15px] lg:text-[20px] md:text-[17px] font-semibold">Here are few project I've worked on recently. </span>
      </motion.h2>
      
      
      <div className="flex  flex-wrap justify-center">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-lg shadow-md   shadow-gray-800 m-4 p-6 w-full sm:w-80 transition-transform transform opacity-90 hover:scale-105 duration-200"
          >
            <img
              src={project.image}
              alt={project.title}
              className="mb-4 rounded-md object-cover hover:scale-105 duration-200  h-40 w-full"
            />
            <h6 className="mb-2 text-xl font-semibold text-[#ca99ec]">{project.title}</h6>
            <p className="mb-4 text-base text-neutral-100">{project.description}</p>
            {project.Source && (
              <a
                href={project.Source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4  px-4 py-2 text-sm font-semibold text-white bg-gray-900 shadow-sm hover:bg-gray-600  duration-300 ease-in-out shadow-blue-800 rounded-full transition"
              >
                <FaGithub size={17} className="inline-block mr-1 mt-[-2px]"/> Github
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
