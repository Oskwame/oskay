"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaNodeJs, FaStar } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { RiTailwindCssLine, RiReactjsLine, RiNextjsLine, RiSupabaseLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { CiStar } from "react-icons/ci";

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="container mx-auto px-4 sm:px-6 md:px-8 py-6">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-8 font-serif text-[whitesmoke]">
        My Experience & Acquired Skills
      </h2>

      <div className="grid lg:grid-cols-2 gap-6 md:gap-10">
        {/* Frontend Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-300 to-gray-200 p-4 sm:p-6 md:p-8 rounded-2xl shadow-md hover:bg-transparent hover:border hover:border-gray-300 transition-all duration-300"
        >
          <h3 className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">
            Frontend Development
          </h3>
          <div className="grid gap-4 sm:gap-5">
            <SkillItem icon={<FaHtml5 className="text-4xl sm:text-5xl text-red-500" />} stars={5} level="Experienced" />
            <SkillItem icon={<FaCss3 className="text-4xl sm:text-5xl text-blue-600" />} stars={5} level="Experienced" />
            <SkillItem icon={<AiOutlineJavaScript className="text-4xl sm:text-5xl text-yellow-300" />} stars={4} level="Experienced" />
            <SkillItem icon={<RiTailwindCssLine className="text-4xl sm:text-5xl text-blue-400" />} stars={4} level="Intermediate" />
            <SkillItem icon={<RiReactjsLine className="text-4xl sm:text-5xl text-blue-500" />} stars={4} level="Intermediate" />
          </div>
        </motion.div>

        {/* Backend Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-300 to-gray-200 p-4 sm:p-6 md:p-8 rounded-2xl shadow-md hover:bg-transparent hover:border hover:border-gray-300 transition-all duration-300"
        >
          <h3 className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">
            Backend Development
          </h3>
          <div className="grid gap-4 sm:gap-5">
            <SkillItem icon={<FaNodeJs className="text-4xl sm:text-5xl text-green-500" />} stars={2} level="Beginner" />
            <SkillItem icon={<RiNextjsLine className="text-4xl sm:text-5xl text-gray-900" />} stars={3} level="Intermediate" />
            <SkillItem icon={<RiSupabaseLine className="text-4xl sm:text-5xl text-green-600" />} stars={5} level="Experienced" />
            <SkillItem icon={<BiLogoPostgresql className="text-4xl sm:text-5xl text-blue-500" />} stars={2} level="Beginner" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface SkillItemProps {
  icon: ReactNode;
  stars: number;
  level: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, stars, level }) => {
  return (
    <motion.div
      className="flex items-center gap-3 sm:gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      {icon}
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) =>
          index < stars ? (
            <FaStar key={index} className="text-yellow-500 text-xl sm:text-2xl" />
          ) : (
            <CiStar key={index} className="text-yellow-500 text-xl sm:text-2xl" />
          )
        )}
      </div>
      <p className="text-gray-600 text-xs sm:text-sm md:text-base">{level}</p>
    </motion.div>
  );
};

export default SkillsSection;
