"use client";

import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="container relative pt-12 lg:h-[50hv] lg:w-[60rem] lg:left-[5%] flex flex-col lg:flex-row items-center justify-center sm:w-[70rem]">
      <div className="flex flex-col items-center text-center lg:text-left lg:items-start lg:mr-10 md:mr-[10%]">
        <p className="text-4xl sm:text-5xl md:text-6xl font-mono">Hello Everyone</p>
        <p className="text-5xl sm:text-6xl md:text-7xl mt-4 font-mono font-bold text-blue-200">
          I'm Os_kay
        </p>
        <p className="text-lg sm:text-xl md:text-2xl mt-2 font-light">Frontend Developer</p>
        <a
          href="#contact"
          className="mt-4 inline-block bg-gradient-to-r from-blue-400 to-blue-200 text-gray-200 py-2 px-6 rounded-md hover:bg-blue-500 transition-colors duration-300"
        >
          Let's Talk
        </a>
      </div>
      <div className="  md:mr-[10%] lg:mr-0 lg:ml-[10%]">
      <div className="w-60 h-60 lg:w-72 lg:h-72 rounded-full bg-white border-blue-400 overflow-hidden mt-8 lg:mt-0 ">
        <Image
          className="w-full h-full object-cover "
          src="https://res.cloudinary.com/dnrygejqn/image/upload/v1735751434/Profile_yotgme.png"
          alt="Profile image"
          width={288}
          height={288}
          priority
        />
      </div>
      </div>
    </header>
  );
};

export default Header;
