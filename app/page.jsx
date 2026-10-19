import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Experience from "@/components/home/Experience";
import Ugaris from "@/components/home/Ugaris";
import Homelab from "@/components/home/Homelab";
import Projects from "@/components/home/Projects";
import Writing from "@/components/home/Writing";
import Life from "@/components/home/Life";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Ugaris />
      <Homelab />
      <Projects />
      <Writing />
      <Life />
    </>
  );
}
