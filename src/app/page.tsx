import Image from "next/image";
import About from "./components/About";
import Projects from "./components/Projects";
import Outro from "./components/Outro";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Outro />
    </main>
  );
}
