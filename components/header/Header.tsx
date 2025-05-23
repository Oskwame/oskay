"use client";

import React from "react";
import Image from "next/image";
import {ReactTyped} from "react-typed";

function Header() {
  return (
    <header className="container relative pt-12 lg:h-[50vh] lg:w-[60rem] lg:left-[5%] flex flex-col lg:flex-row items-center justify-center max-w-[70rem]">
      <div className="flex flex-col items-center text-center lg:text-left lg:items-start lg:mr-10 md:mr-[10%]">
        {/* Typing animation for introduction */}
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-mono">
          <ReactTyped
            strings={["Hello Everyone", "Welcome to My Portfolio"]}
            typeSpeed={40}
            backSpeed={30}
            showCursor={false}
          />
        </h1>

        {/* Typing animation for name */}
        <h2 className="text-2xl sm:text-6xl md:text-5xl mt-4 font-mono font-bold text-blue-300">
          <ReactTyped
            strings={["I'm Os_kay"]}
            typeSpeed={70}
            backSpeed={30}
            showCursor={false} 
          />
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl mt-2 font-light">
          <ReactTyped
            strings={["Frontend / Fullstack Developer"]}
            typeSpeed={70}
            showCursor={false} // Removes blinking cursor
          />
        </p>

        <a
          href="#contact"
          className="mt-4 inline-block bg-gradient-to-r from-blue-400 to-blue-300 text-gray-100 py-2 px-6 rounded-md hover:bg-blue-500 transition-colors duration-300"
        >
          Let's Talk
        </a>
      </div>

      <div className="md:mr-[10%] lg:mr-0 lg:ml-[10%] animate-drop-in-bounce">
      <div className="w-60 h-60 lg:w-72 lg:h-72 rounded-full bg-white border-2 border-blue-400 overflow-hidden mt-8 lg:mt-0 animate-glow-border">          <Image
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dnrygejqn/image/upload/v1747974871/photo_2025-05-22_16-33-28_uqmxmg.jpg"
            alt="Profile image"
            width={288}
            height={288}
            priority
          />
        </div>
      </div>
    </header>
  );
}

export default Header;


