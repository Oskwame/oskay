import Image from "next/image";
import Nav from "@/components/nav/Nav";
import Header from "@/components/header/Header";
import Socials from "@/components/header/Socials";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Services from "@/components/services/Services";
import Contact from "@/components/contact/Contact";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
   <>
   <Nav/>
   <Header/>
   <Socials/>
   <About/>
   <Skills/>
   <Services/>
   <Projects/>
   <Contact/>
   </>
  );
}
