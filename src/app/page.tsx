import Image from "next/image";
import About from "./components/About";
import Works from "./components/Works";
import Outro from "./components/Outro";

export default function Home() {
  return (
    <main>
      <About />
      <Works />
      <Outro />
    </main>
  );
}
