'use client';

import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 text-white container mx-auto px-6 sm:px-8 md:px-12 lg:px-16"
    >
      {/* Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Get To Know About Me
        </h2>
        <p className="text-gray-300 text-sm md:text-base lg:text-lg mx-auto max-w-4xl">
          Discover my skills, experience, and completed projects as I grow into
          a proficient developer.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12 px-4">
      {/* Experience */}
  <motion.article 
    className="group bg-blue-200 p-6 rounded-lg shadow-md hover:bg-transparent hover:border hover:border-gray-300 transition-all duration-300 cursor-default"
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <FaAward className="text-4xl mb-4 text-black group-hover:text-white mx-auto transition-colors duration-300" />
    
    <h5 className="text-lg font-semibold text-center mb-2 text-gray-800 group-hover:text-white transition-colors duration-300">
      Experience
    </h5>
    
    <small className="text-gray-600 text-center block group-hover:text-white transition-colors duration-300">
      2 years Working
    </small>
  </motion.article>

        {/* Clients */}
        <motion.article 
          className="group bg-blue-200 p-6 rounded-lg shadow-md hover:bg-transparent hover:border hover:border-gray-300 transition-all duration-300 cursor-default"          
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <FiUsers className="text-4xl mb-4 text-black group-hover:text-white mx-auto transition-colors duration-300" />
          <h5 className="text-lg font-semibold text-center mb-2 text-gray-800 group-hover:text-white transition-colors duration-300">
            Clients
          </h5>
          <small className="text-gray-600 text-center block group-hover:text-white transition-colors duration-300">
            6+ Clients
          </small>
        </motion.article>

        {/* Projects */}
        <motion.article 
          className="group bg-blue-200 p-6 rounded-lg shadow-md hover:bg-transparent hover:border hover:border-gray-300 transition-all duration-300 cursor-default" 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <VscFolderLibrary className="text-4xl mb-4 text-black group-hover:text-white mx-auto transition-colors duration-300" />
          <h5 className="text-lg font-semibold text-center mb-2 text-gray-800 group-hover:text-white transition-colors duration-300">
            Projects
          </h5>
          <small className="text-gray-600 text-center block group-hover:text-white transition-colors duration-300">
            10+ Completed
          </small>
        </motion.article>
      </div>

      {/* Description */}
      <motion.div 
        className="max-w-5xl mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed text-center">
          I am an IT professional seeking an opportunity as a
          Front End & Full Stack Developer. I am equipped with additional expertise in Next.js, Supabase,
          and PostgreSQL. I am actively seeking a challenging position in a
          dynamic and collaborative environment, where I can leverage my
          comprehensive skill set to contribute to end-to-end development
          projects. My goal is to further enhance my capabilities as a web Developer,
          gain valuable experience, and deliver top-tier performance.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
