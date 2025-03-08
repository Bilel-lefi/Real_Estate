import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  return (
    <motion.div
    initial={{opacity:0 , y:-200}}
    transition={{duration:1.5}}
    whileInView={{opacity:1 , y:0}}
    viewport={{once:true}}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden "
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready To Make a Move ? Let's Build Your Future Together
      </p>
      <form className="max-w-6xl mx-auto text-gray-600 rounded">
        <div className="flex flex-col items-center">
          <div className="w-full py-6 md:w-1/2 text-left">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full py-3 md:w-1/2 text-left">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="Email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="w-full  md:w-1/2 text-left">
            Message
            <textarea
              name="Message"
              placeholder="Message"
              className="w-full border-gray-300 rounded py-3 px-4 mt-2 resize-none border"
              required
            ></textarea>
          </div>
        </div>
        <button className="bg-blue-600 text-white py-2 px-12 rounded my-10">Send Message</button>
      </form>
    </motion.div>
  );
};

export default Contact;
