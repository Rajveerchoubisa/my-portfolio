import { Content } from "../constant/content.js";
import { BsFillPersonLinesFill } from "react-icons/bs";
import profilePic from "../assets/rajveer.png";
import { IoCloseSharp } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Home = () => {
  const [showCertificate, setShowCertificate] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./Rajveer_Choubisa_Resume.pdf";
    link.setAttribute("download", "Rajveer_Choubisa_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleCertificate = () => {
    setShowCertificate(!showCertificate);
  };

  return (
    <div name="Home" id="Home" className="z-[-10] pt-24 pb-4 lg:mb-35 px-4 lg:px-10">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="w-full lg:ml-[55px] lg:w-1/2 flex flex-col items-center lg:items-start">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-5 text-4xl lg:text-5xl md:text-4xl font-semibold tracking-tight mt-10 lg:mt-16 text-center lg:text-left"
          >
            <span className="text-white  text-[40px] lg:text-[52px]">Hi There!</span>
          </motion.h1>

          <motion.h2
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="pb-4 text-[#a9aaff] text-[35px] md:text-4xl lg:text-5xl font-bold tracking-tight text-center lg:text-left"
          >
            <span className="text-white">I'M</span> RAJVEER CHOUBISA
          </motion.h2>

          <motion.span
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="pb-2 text-white bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-300 bg-clip-text text-4xl tracking-tight text-transparent text-center lg:text-left"
          >
            <span className="text-[#bf8eff] text-3xl md:text-4xl lg:text-[40px] font-[500]">SOFTWARE DEVELOPER</span>
          </motion.span>

          <motion.p
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-5 font-light tracking-tighter text-lg lg:text-2xl text-center lg:text-left"
          >
            {Content}
          </motion.p>

          <div className="intro z-20">
            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
              <button
                onClick={handleDownload}
                className="group text-[17px] font-bold text-white w-fit lg:w-auto px-4 py-1 flex items-center justify-center rounded-md transition-all duration-500 transform hover:scale-105 bg-gradient-to-r from-[#1f323f] via-[#4888a8] to-[#16222A] text-center uppercase shadow-lg hover:bg-right hover:text-white"
              >
                Resume
                <BsFillPersonLinesFill size={20} className="ml-2 group-hover:scale-110 duration-300" />
              </button>

              <button
                onClick={toggleCertificate}
                className="group   text-[17px] font-bold text-white w-fit lg:w-auto px-4 py-1 flex items-center justify-center rounded-md btn-grad transition-all duration-500 transform hover:scale-105 bg-gradient-to-r from-[#161b2a] via-[#4a88a1] to-[#16222A] text-center uppercase shadow-lg hover:bg-right hover:text-white"
              >
                Certificates
              </button>
            </div>

            <AnimatePresence>
              {showCertificate && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="relative bg-gray-400 p-6 rounded-md shadow-md w-11/12 max-w-md max-h-[60vh] overflow-y-auto"
                  >
                    <motion.button
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      onClick={toggleCertificate}
                      className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                    >
                      <IoCloseSharp size={24} />
                    </motion.button>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Certificates</h3>
                    {/* Certificates content here */}
                    <div className="relative bg-black p-2 rounded-md shadow-md w-full">
                    <p className="text-white p-1 font-semibold">
                      React - The Complete Guide (incl.Next.js,Redux)
                    </p>

                    <a
                      href="https://www.udemy.com/certificate/UC-c3dd8abf-b132-4217-822a-a428c36700e8/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-blue-400 ml-1 underline hover:text-blue-700 "
                    >
                      View Certificate
                    </a>
                    </div>
                    <div className="relative mt-4 bg-black p-2 rounded-md shadow-md w-full">
                    <p className="text-white p-1 font-semibold">
                      Complete SQL(incl. PostgreSQL)
                    </p>
                    <a
                      href="https://simpli-web.app.link/e/fyt2Kiq2jMb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-blue-400 ml-1 underline hover:text-blue-700 "
                    >
                      View Certificate
                    </a>
                    </div>
                    <div className="relative mt-4 bg-black p-2 rounded-md shadow-md w-full">
                    <p className="text-white p-1 font-semibold">
                    Complete Git
                    </p>
                    <a
                      href="https://simpli-web.app.link/e/JTDopHRolMb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-blue-400 ml-1 underline hover:text-blue-700 "
                    >
                      View Certificate
                    </a>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="w-full mt-5 lg:w-1/2 flex justify-center lg:justify-start relative lg:p-8">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic}
            alt="profile picture"
            className="rounded-full mt-5 w-[360px] h-[360px] md:w-[480px] md:h-[480px] lg:w-[500px] lg:h-[500px]  object-cover -translate-x-5" // Adjusts image position slightly to the left
          />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-10 text-center text-gray-300">
        <p className="text-sm">&copy; 2024 Rajveer Choubisa. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
