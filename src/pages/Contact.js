import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="w-full  p-4 bg-gradient-to-b from-gray-800 to-gray-900 text-white"
    >
      <div className="flex flex-col  p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 text-center">
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="mt-[150px]  lg:mt-[100px] text-transparent bg-clip-text bg-gradient-to-r from-[#fbfdfe] via-[#faeaff] to-[#9231dc] text-4xl font-bold"
          >
            Contact Me 
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="py-4 text-lg max-w-md mx-auto"
          >
            I’d love to hear from you! <br/>Fill out the form below to <span className="text-[#86f3ff]">get in touch.</span>
          </motion.p>
        </div>

        <div className="flex  justify-center items-center">
          <form
            action="https://getform.io/f/bkkgnljb"
            method="POST"
            className="flex flex-col w-full h-full md:w-1/2 bg-white  lg:rounded-lg  text-gray-800 rounded-lg shadow-lg p-8"
          >
            <motion.input
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 border-b-2 rounded-md  border-gray-300 focus:border-blue-500 focus:outline-none mb-4"
            />
            <motion.input
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 border-b-2 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none mb-4"
            />
            <motion.textarea
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              className="p-3 border-b-2 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none mb-4"
            ></motion.textarea>

            <button className="z-10 mb-7 lg:mb-7 mt-2  bg-gradient-to-r  from-[#222239] to-[#0f3460] text-white font-bold py-2 px-4 rounded hover:scale-105 transition-transform duration-300 shadow-lg">
              Let's Talk  <span className="">😊</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
