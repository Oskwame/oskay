'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Kasa Hospital',
    description: 'A hospital website integrated with a patient appointment booking system',
    link: 'https://example.com',
    image: 'https://res.cloudinary.com/dnrygejqn/image/upload/v1745932350/Screenshot_30_rrmndq.png',
  },
  {
    title: 'Student Project Management System',
    description: 'A platform that houses student projects based on their faculty for easy access to ideas and docs.',
    link: 'https://example.com',
    image: 'https://res.cloudinary.com/dnrygejqn/image/upload/v1745932397/photo_2025-04-29_01-12-07_lk9k9p.jpg',
  },
  {
    title: 'Apoointmemnt booking Admin dashboard',
    description: 'A dashboard for managing services, appointments and patient data for Kasa hospital',
    link: 'https://example.com',
    image: 'https://res.cloudinary.com/dnrygejqn/image/upload/v1745939946/Screenshot_31_corvpp.png',
  },
  {
    title: 'Infite Tech Solutions',
    description: 'UX design and develolpment for a tech solution company with website still uder construction',
    link: 'https://example.com',
    image: 'https://res.cloudinary.com/dnrygejqn/image/upload/v1745940869/Screenshot_33_cvr7ol.png',
  },
];

const swipeThreshold = 100;

const Projects: React.FC = () => {
  const [mobileCurrent, setMobileCurrent] = useState(0);
  const [desktopCurrent, setDesktopCurrent] = useState(0);

  const handleSwipe = (offset: number) => {
    if (offset < -swipeThreshold && mobileCurrent < projects.length - 1) {
      setMobileCurrent(mobileCurrent + 1);
    } else if (offset > swipeThreshold && mobileCurrent > 0) {
      setMobileCurrent(mobileCurrent - 1);
    }
  };

  const handleDesktopSwipe = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && desktopCurrent > 0) {
      setDesktopCurrent(desktopCurrent - 1);
    } else if (direction === 'next' && desktopCurrent < projects.length - 3) {
      setDesktopCurrent(desktopCurrent + 1);
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-10 max-w-9xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Recent Projects</h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          Browse a selection of my personal and collaborative projects showcasing my skills and creativity.
        </p>
      </div>
{/* MOBILE SWIPE CAROUSEL */}
<div className="sm:hidden px-4">
  <AnimatePresence initial={false}>
    <motion.div
      key={mobileCurrent}
      className="bg-[#f5f5f5] rounded-lg shadow-lg overflow-hidden text-black"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4,delay:0.1 }}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(e, { offset }) => handleSwipe(offset.x)}
    >
      <div className="bg-[#f5f5f5] rounded-lg shadow-lg overflow-hidden text-black">
        <img
          src={projects[mobileCurrent].image}
          alt={projects[mobileCurrent].title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold">{projects[mobileCurrent].title}</h3>
          <p className="text-gray-700 mb-4">{projects[mobileCurrent].description}</p>
          <a
            href={projects[mobileCurrent].link}
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

  {/* Dot Indicators BELOW the card */}
  <div className="flex justify-center mt-6 space-x-2">
    {projects.map((_, i) => (
      <button
        key={i}
        onClick={() => setMobileCurrent(i)}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          i === mobileCurrent ? 'bg-blue-500 scale-110' : 'bg-gray-400'
        }`}
      />
    ))}
  </div>
</div>



      {/* DESKTOP VIEW */}
      <div className="hidden sm:block mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(desktopCurrent, desktopCurrent + 3).map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#f5f5f5] rounded-lg shadow-lg overflow-hidden text-black"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
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

        {/* DESKTOP Dot Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: projects.length - 2 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setDesktopCurrent(i)}
              className={`w-3 h-3 rounded-full ${
                i === desktopCurrent ? 'bg-blue-500' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* DESKTOP Nav Buttons Underneath */}
        <div className="flex justify-center gap-8 mt-6">
          <button
            onClick={() => handleDesktopSwipe('prev')}
            disabled={desktopCurrent === 0}
            className="flex items-center gap-2 text-blue-600 disabled:opacity-30"
          >
            <FaArrowLeft /> Prev
          </button>
          <button
            onClick={() => handleDesktopSwipe('next')}
            disabled={desktopCurrent >= projects.length - 3}
            className="flex items-center gap-2 text-blue-600 disabled:opacity-30"
          >
            Next <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
