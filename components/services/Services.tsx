"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Web Designing",
    description:
      "Creating responsive and visually appealing websites. We focus on aesthetics, user experience, and modern design principles.",
  },
  {
    id: 2,
    title: "Front End Development",
    description:
      "Building interactive and dynamic user interfaces using modern technologies like React and Vue for seamless user experiences. using modern frameworks like tailwind to provide comprehensive styles ",
  },
  {
    id: 3,
    title: "Full Stack Development",
    description:
      "End-to-end development of web applications, including backend services like RESTful APIs and database management. creating easy and seamless web applications with next.js",
  },
  {
    id: 4,
    title: "Hardware Repairs",
    description:
      "Repairing and maintaining hardware devices for optimal performance. We diagnose and resolve issues effectively.",
  },
  {
    id: 5,
    title: "Management Systems",
    description:
      "Designing and implementing robust management systems to streamline operations and improve productivity.",
  },
  {
    id: 6,
    title: "Social Media and Content Creation",
    description:
      "Crafting engaging content and managing social media platforms to enhance brand visibility and engagement.Get your business know on platforms like X and Instagram with a trend team",
      
  },
];

const Service = () => {
  return (
    <section
      id="service"
      className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-10"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-4xl font-bold mb-10 font-serif text-gray-200"
      >
        My Services
      </motion.div>

      {/* Service Cards */}
      <motion.div
        className="grid grid-cols-1 xs: md:grid-cols-2 lg:grid-cols-3 gap-8 py-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ staggerChildren: 0.2, duration: 0.5 }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="group relative w-full p-6 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-600 shadow-md hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* ID */}
            <div className="text-right font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
              {service.id}
            </div>

            {/* Title */}
            <h3 className="mt-2 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-100">
              {service.title}
            </h3>

            {/* Short Description */}
            <p className="mt-2 text-gray-300">
              {service.description.split(".")[0]}.
            </p>

            {/* Hover Overlay */}
            <div className="absolute inset-0 p-6 rounded-lg bg-gray-900 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-gray-100 text-center text-sm md:text-base">
                {service.description}
              </p>
              <br/>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Service;
