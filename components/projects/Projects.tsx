'use client';

import React from 'react';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'A brief description of project 1.',
    link: 'https://example.com',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Project 2',
    description: 'A brief description of project 2.',
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

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-900 text-white px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">My Projects</h2>
        <p className="text-gray-400 mt-2">Swipe on mobile to explore my projects</p>
      </div>

      {/* MOBILE CAROUSEL */}
      <Tab.Group>
        <div className="sm:hidden">
          <Tab.Panels className="relative h-[450px] overflow-hidden">
            {projects.map((project, idx) => (
              <Tab.Panel key={idx}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View Project →
                    </a>
                  </div>
                </motion.div>
              </Tab.Panel>
            ))}
          </Tab.Panels>

          {/* Mobile Indicators */}
          <Tab.List className="flex justify-center space-x-2 mt-4">
            {projects.map((_, idx) => (
              <Tab key={idx} className={({ selected }) =>
                `w-3 h-3 rounded-full ${selected ? 'bg-blue-500' : 'bg-gray-500'}`
              } />
            ))}
          </Tab.List>
        </div>
      </Tab.Group>

      {/* DESKTOP GRID */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
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
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
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
