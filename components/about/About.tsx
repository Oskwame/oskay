import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 text-white container mx-auto px-6 sm:px-8 md:px-12 lg:px-16"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Get To Know About Me
        </h2>
        <p className="text-gray-300 text-sm md:text-base lg:text-lg mx-auto max-w-4xl">
          Discover my skills, experience, and completed projects as I grow into
          a proficient developer.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12 px-4">
        {/* Experience */}
        <article className="bg-blue-200 p-6 rounded-lg shadow-md hover:bg-transparent hover:border hover:border-gray-300 transition-all duration-300 cursor-default">
          <FaAward className="text-primary text-4xl mb-4 text-black hover:text-white mx-auto" />
          <h5 className="text-lg font-semibold text-center mb-2 text-gray-800 hover:text-white">
            Experience
          </h5>
          <small className="text-gray-600 text-center block">
            12 Months Working
          </small>
        </article>

        {/* Clients */}
        <article className="bg-blue-200 p-6 rounded-lg shadow-md hover:bg-transparent hover:border hover:border-gray-300 transition-all duration-300 cursor-default">
          <FiUsers className="text-primary text-4xl mb-4 text-black hover:text-white mx-auto" />
          <h5 className="text-lg font-semibold text-center mb-2 text-gray-800 hover:text-white">
            Clients
          </h5>
          <small className="text-gray-600 text-center block">3+ Clients</small>
        </article>

        {/* Projects */}
        <article className="bg-blue-200 p-6 rounded-lg shadow-md hover:bg-transparent hover:border hover:border-gray-300 transition-all duration-300 cursor-default">
          <VscFolderLibrary className="text-primary text-4xl mb-4 text-black hover:text-white mx-auto" />
          <h5 className="text-lg font-semibold text-center mb-2 text-gray-800 hover:text-white">
            Projects
          </h5>
          <small className="text-gray-600 text-center block">
            10+ Completed
          </small>
        </article>
      </div>

      {/* Description */}
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed text-center">
          I am a final year computer science student seeking an opportunity as a
          Front End Developer. Eager to transition into a Full Stack Developer
          role, I am equipped with additional expertise in Next.js, Supabase,
          and PostgreSQL. I am actively seeking a challenging position in a
          dynamic and collaborative environment, where I can leverage my
          comprehensive skill set to contribute to end-to-end development
          projects. My goal is to further enhance my capabilities as a Front End
          Developer, gain valuable experience, and deliver top-tier performance.
        </p>
      </div>
    </section>
  );
};

export default About;
