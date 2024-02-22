import Image from "next/image";
import Contact from "./Contact";

function Hero() {
  return (
    <div className="wrapper bg-primary-dark md:py-40 md:px-0 py-32 px-8">
      <section className="flex md:flex-row justify-center items-center md:max-w-130 md:mx-auto flex-col md:gap-0 gap-10">
        <div>
          <div className="text-white mb-8">
            <h1 className="md:text-heading1 text-heading3 font-light">
              Hello, I&apos;m <span className="md:text-heading1 font-semibold">Rena</span>.
            </h1>
            <p className="md:text-xl">
              Full Stack Developer based in Vancouver, Canada. <br />
              Skilled in JavaScript, React, Node.js, HTML5, CSS3.
            </p>
          </div>
          <Contact darkMode={true} />
        </div>
        <div>
          <Image
            src="/svgs/hero-main.svg"
            width={600}
            height={600}
            alt="Illustration of Rena coding on a laptop"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
