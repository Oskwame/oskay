"use client";

import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineTool, AiOutlineBook, AiOutlineMessage } from "react-icons/ai";

const Nav: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>("#");

  return (
    <nav className="lg:bg-gradient-to-r from-blue-700 to-blue-600 sm:bg-blue-700 sm:bg-opacity-30 xs:fixed sm:fixed xs:bottom-0 bg-opacity-30 w-max px-[1.7rem] py-[0.7rem] z-10 fixed left-1/2 -translate-x-1/2 bottom-[1rem] gap-3 rounded-[2.7rem] backdrop-blur-xl flex">
      <a
        href="#"
        className={`p-3 rounded-full flex text-white text-[2rem] ${
          activeNav === "#" ? "bg-black text-black" : ""
        }`}
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={`p-3 rounded-full flex text-white text-[1.8rem] ${
          activeNav === "#about" ? "bg-black text-black text-[2rem]" : ""
        }`}
        onClick={() => setActiveNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#service"
        className={`p-3 rounded-full flex text-white text-[1.8rem] ${
          activeNav === "#service" ? "bg-black text-black text-[2rem]" : ""
        }`}
        onClick={() => setActiveNav("#service")}
      >
        <AiOutlineTool />
      </a>
      <a
        href="#experience"
        className={`p-3 rounded-full flex text-white text-[1.8rem] ${
          activeNav === "#experience" ? "bg-black text-[2rem]" : ""
        }`}
        onClick={() => setActiveNav("#experience")}
      >
        <AiOutlineBook />
      </a>
      <a
        href="#contact"
        className={`p-3 rounded-full flex text-white text-[1.8rem] ${
          activeNav === "#contact" ? "bg-black text-[2rem]" : ""
        }`}
        onClick={() => setActiveNav("#contact")}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
