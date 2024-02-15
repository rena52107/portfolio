import Image from "next/image";
import Contact from "./Contact";

function Hero() {
  return (
    <section className="flex flex-row">
      <div>
        <div>
          <h1>Hello, I&apos;m Rena.</h1>
          <p className="text-bg-dark">
            Full Stack Developer based in Vancouver, Canada. <br />
            Skilled in JavaScript, React, Node.js, HTML5, CSS3.
          </p>
        </div>
        <Contact />
      </div>
      <div>
        <Image
          src="/assets/svgs/hero-main.svg"
          width={400}
          height={400}
          alt="Illustration of Rena coding on a laptop"
        />
      </div>
    </section>
  );
}

export default Hero;
