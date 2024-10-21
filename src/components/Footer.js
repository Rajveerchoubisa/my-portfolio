import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";

const Footer = () => {
  const [isLinksVisible, setLinksVisible] = useState(false);

  const links = [
    {
      id: 1,
      child: <FaLinkedin size={30} className="text-blue-500" />,
      href: "https://www.linkedin.com/in/rajveer-choubisa-65b982249/",
    },
    {
      id: 2,
      child: <FaGithub size={30} className="text-gray-400" />,
      href: "https://github.com/Rajveerchoubisa",
    },
    {
      id: 3,
      child: <BsTwitterX size={30} className="text-gray-100" />,
      href: "https://x.com/RajveerChoubisa",
    },
    {
      id: 4,
      child: (
        <FaInstagram
          size={30}
          className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-lg"
        />
      ),
      href:
        "https://www.instagram.com/rv_ranveer__?igsh=ZnYzMDdkcHR6a2pu&utm_source=qr",
    },
    {
      id: 5,
      child: <HiOutlineMail size={30} className="text-red-400" />,
      href: "mailto:ranveer0596@gmail.com",
    },
  ];

  return (
    <footer className="bg-gray-900 relative z-10 w-full text-white p-4">
      <div className="flex justify-between items-center">
        <div className="relative">
          {/* Button only visible on mobile */}
          <button
            className="p-2  text-white rounded md:hidden"
            onClick={() => setLinksVisible(!isLinksVisible)}
          >
            {isLinksVisible ? <MdKeyboardArrowDown size={20}/> : <MdKeyboardArrowUp  size={20} /> }
          </button>
          {isLinksVisible && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute left-0  bottom-full bg-gray-800 p-4 rounded shadow-lg  mb-4"
            >
              <ul className="flex flex-col space-y-2">
                {links.map(({ id, child, href }) => (
                  <li key={id} className="flex justify-center items-center">
                    <a href={href} className="text-white">
                      {child}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
        <div className="hidden md:flex flex-1 justify-center space-x-4">
          {/* Links for desktop view */}
          {links.map(({ id, child, href }) => (
            <a key={id} href={href} className="text-white">
              {child}
            </a>
          ))}
        </div>
        <div className="text-center flex-1">
          &copy; {new Date().getFullYear()} Rajveer Choubisa. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
