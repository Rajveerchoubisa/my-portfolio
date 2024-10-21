import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const links = [
    { id: 1, name: 'Home', link: '/', icon: <FaHome /> },
    { id: 2, name: 'About', link: '/about', icon: <FaUser /> },
    { id: 3, name: 'Projects', link: '/projects', icon: <FaCode /> },
    { id: 4, name: 'Contact', link: '/contact', icon: <FaEnvelope /> },
  ];

  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setTimeout(() => {
      setNav(false); // Close the navbar
    }, 300); // Match this delay with the exit animation duration
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[27px] lg:text-[31px] md:text-[29px] ml-8 lg:ml-[72px] font-bold">RV.</div>
        <div className="hidden md:flex space-x-10">
          {links.map(({ id, name, link, icon }) => (
            <div className="relative group" key={id}>
              <Link 
                to={link} 
                onClick={() => handleLinkClick(link)}
                className={`flex items-center text-white transition duration-300 ${activeLink === link ? 'text-red-500' : 'hover:text-red-500'}`}
              >
                <span className='text-[22px]'>{icon}</span>
                <span className="lg:text-[22px] ml-2">{name}</span>
              </Link>
              <span className={`absolute left-0 right-0 h-[2px] bg-red-500 transition-all duration-300 scale-x-0 group-hover:scale-x-100`} />
            </div>
          ))}
        </div>

        <motion.div 
          onClick={() => setNav(!nav)} 
          className="md:hidden ml-auto mr-8 cursor-pointer"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {nav ? (
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 180 }}
              exit={{ opacity: 0, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaTimes size={27} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -180 }}
              transition={{ duration: 0.3 }}
            >
              <FaBars size={27} />
            </motion.div>
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {nav && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }} // Adjust duration for exit animation
            className="flex flex-col justify-center items-center absolute top-14 right-0 z-10 h-fit min-w-full rounded-2xl bg-gray-900 text-gray-200"
          >
            {links.map(({ id, link, name, icon }) => (
              <li 
                key={id} 
                className="bg-transparent shadow-sm shadow-gray-600 rounded-sm w-full text-center cursor-pointer m-1 capitalize py-2 text-2xl"
              >
                <Link 
                  onClick={() => handleLinkClick(link)} 
                  to={link}
                  className={`${activeLink === link ? 'text-red-500' : 'text-gray-300'} flex items-center justify-center`}
                >
                  {icon}
                  <span className="ml-2 text-[23px]">{name}</span>
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
