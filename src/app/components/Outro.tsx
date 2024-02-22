import React from "react";
import Contact from "./Contact";

function Outro() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center md:py-40 py-32 md:px-0 px-8 md:mx-auto md:max-w-130 gap-20"
    >
      <h2 className="text-center md:text-2xl text-heading4">Thanks for checking out my portfolio</h2>
      <p className="text-center md:text-body1">
        Feel free to reach out to me on any of the platforms below!
        <br />
        I&apos;d love to hear from you ;)
      </p>
      <Contact />
    </section>
  );
}

export default Outro;
