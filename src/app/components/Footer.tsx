import React from "react";

function Footer() {
  return (
    <div className="wrapper bg-primary-dark text-white">
      <footer className="flex justify-between">
        <p>© Rena Sakata 2024</p>
        <nav>
          <ul className="flex flex-row gap-10">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#works">Works</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
