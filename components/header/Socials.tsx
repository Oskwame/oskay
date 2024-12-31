"use client";

import Link from "next/link";
import { AiOutlineWhatsApp, AiOutlineGithub, AiOutlineX, AiOutlineLinkedin } from "react-icons/ai";

const Socials: React.FC = () => {
  return (
    <div className="lg:fixed top-3 left-2 flex lg:flex-col gap-4 items-center mb-10 xs:justify-center xs:px-2 xs:my-2 sm:justify-center">
      <Link href="https://x.com/os_kayy" aria-label="X">
        <AiOutlineX className="text-4xl hover:text-blue-400 hover:scale-125 transition-transform duration-300" />
      </Link>
      <Link href="http://wa.me/0549896135" aria-label="WhatsApp">
        <AiOutlineWhatsApp className="text-4xl hover:text-green-500 hover:scale-125 transition-transform duration-300" />
      </Link>
      <Link href="https://github.com/Oskwame" aria-label="Github">
        <AiOutlineGithub className="text-4xl hover:text-purple-400 hover:scale-125 transition-transform duration-300" />
      </Link>
      <Link href="https://www.linkedin.com/in/os-kay-506bb4250/" aria-label="LinkedIn">
        <AiOutlineLinkedin className="text-4xl hover:text-blue-700 hover:scale-125 transition-transform duration-300" />
      </Link>
    </div>
  );
};

export default Socials;
