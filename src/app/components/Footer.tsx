import React from "react";

function Footer() {
  return (
    <div className="wrapper bg-primary-dark text-white py-16 md:px-0 px-4">
      <footer className="flex justify-between items-center md:max-w-screen-lg md:mx-auto">
        <p >© Rena Sakata 2024</p>
        <nav>
          <ul className="flex md:flex-row md:gap-10 flex-col gap-5 items-end">
            <li className="hover:underline">
              <a href="/">Home</a>
            </li>
            <li className="hover:underline">
              <a href="#about">About</a>
            </li>
            <li className="hover:underline">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:underline">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
