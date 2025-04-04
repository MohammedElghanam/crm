import About from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Prestataire from "@/components/prestataire";
import Project from "@/components/project";
import Statistique from "@/components/statistique";
import Testemonial from "@/components/testemonial";
import Image from "next/image";

export default function Home() {
  return (
    <>
            
            <Navbar />
            <Hero />
            <Statistique />
            <Project />
            <About />
            <Testemonial />
            <Prestataire />
            <Footer />
     

   
    </>
  );
}
