"use client";

import Link from "next/link";
import { AiOutlineWhatsApp, AiOutlineGithub, AiOutlineX, AiOutlineLinkedin } from "react-icons/ai";

const Socials: React.FC = () => {
  return (
    <div className="flex flex-row lg:flex-col lg:fixed lg:top-3 lg:left-2 items-center lg:gap-5 xs:gap-3 justify-center xs:px-2 xs:my-2 sm:justify-center md:flex-row   ">
      <Link
        href="https://x.com/os_kayy"
        aria-label="Visit my X profile"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <AiOutlineX
          className="text-3xl xs:text-4xl group-hover:text-blue-400 group-hover:scale-125 transition-transform duration-300"
          aria-hidden="true"
        />
      </Link>
      <Link
        href="http://wa.me/0549896135"
        aria-label="Chat with me on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <AiOutlineWhatsApp
          className="text-3xl xs:text-4xl group-hover:text-green-500 group-hover:scale-125 transition-transform duration-300"
          aria-hidden="true"
        />
      </Link>
      <Link
        href="https://github.com/Oskwame"
        aria-label="Check out my GitHub"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <AiOutlineGithub
          className="text-3xl xs:text-4xl group-hover:text-purple-400 group-hover:scale-125 transition-transform duration-300"
          aria-hidden="true"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/os-kay-506bb4250/"
        aria-label="Visit my LinkedIn profile"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <AiOutlineLinkedin
          className="text-3xl xs:text-4xl group-hover:text-blue-700 group-hover:scale-125 transition-transform duration-300"
          aria-hidden="true"
        />
      </Link>
    </div>
  );
};

export default Socials;
