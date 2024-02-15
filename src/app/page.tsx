import Image from "next/image";
import About from "./components/About";
import Works from "./components/Works";
import Outro from "./components/Outro";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Works />
      <Outro />
    </main>
  );
}
