import Image from "next/image";
import Nav from "@/components/nav/Nav";
import Header from "@/components/header/Header";
import Socials from "@/components/header/Socials";
import About from "@/components/about/About";

export default function Home() {
  return (
   <>
   <Nav/>
   <Header/>
   <Socials/>
   <About/>
   </>
  );
}
