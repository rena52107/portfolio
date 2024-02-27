import React from "react";
import Contact from "./Contact";

function Outro() {
  return (
    <div className="wrapper md:py-40 py-32 md:px-0 px-4">
      <section
        id="contact"
        className="flex flex-col justify-center items-center md:mx-auto md:max-w-130 gap-10"
      >
        <h2 className="text-center md:text-2xl text-heading4">
          Thank you for taking the time to explore my work :)
        </h2>
        <p className="text-center">
          If you have any questions or would like to collaborate,
          <br />
          please feel free to contact me!
        </p>
        <Contact />
      </section>
    </div>
  );
}

export default Outro;
