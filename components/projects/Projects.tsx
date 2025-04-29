'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Kasa Hospital',
    description: 'A hospital website integrated with a patient appointment booking system ',
    link: 'https://example.com',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Student Project MAnagement System',
    description: 'A Platform that houses student project based on the faculty to enable easy access to project ideas and documentations  .',
    link: 'https://example.com',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Project 3',
    description: 'A brief description of project 3.',
    link: 'https://example.com',
    image: 'https://via.placeholder.com/300',
  },
];

const swipeConfidenceThreshold = 100;

const Projects: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const handleSwipe = (offset: number) => {
    if (offset < -swipeConfidenceThreshold && current < projects.length - 1) {
      setCurrent(current + 1);
    } else if (offset > swipeConfidenceThreshold && current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <section
      id="projects"
      className="py-20 text-white px-4 sm:px-6 lg:px-10 max-w-10xl mx-auto"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">My Projects</h2>
        <p className="text-gray-300 mt-2">
          Swipe on mobile or explore in grid view on desktop
        </p>
      </div>

      {/* MOBILE SWIPE CAROUSEL */}
      <div className="sm:hidden relative h-[470px] overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            className="absolute w-full px-4"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, { offset }) => handleSwipe(offset.x)}
          >
            <div className="bg-[#f5f5f5] rounded-lg shadow-lg overflow-hidden text-black">
              <img
                src={projects[current].image}
                alt={projects[current].title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{projects[current].title}</h3>
                <p className="text-gray-700 mb-4">{projects[current].description}</p>
                <a
                  href={projects[current].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === current ? 'bg-blue-400' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#f5f5f5] rounded-lg shadow-lg overflow-hidden text-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
