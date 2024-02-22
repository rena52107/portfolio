"use client";
import { useState } from "react";
import GithubIcon from "../../../public/svgs/github.svg";
import LinkedInIcon from "../../../public/svgs/linkedin.svg";
import MediumIcon from "../../../public/svgs/medium.svg";
import MailIcon from "../../../public/svgs/mail.svg";
import DocIcon from "../../../public/svgs/description.svg";
import CloseIcon from "../../../public/svgs/close.svg";
import MenuIcon from "../../../public/svgs/menu.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navitems = [
    { title: "Home", link: "/" },
    { title: "About", link: "#about" },
    { title: "Works", link: "#works" },
    { title: "Contact", link: "#contact" },
  ];

  return (
    <nav className="relative">
      {/* Desktop navigation menu */}
      <ul className="hidden md:flex md:gap-10 space-x-4">
        {navitems.map((item) => (
          <li key={item.title} className="text-xl hover:underline">
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile navigation menu */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <MenuIcon width={60} height={60} />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col justify-center items-center gap-2 bg-white text-bg-dark absolute -right-6 top-0 z-10 h-[600px] w-[300px] p-10  shadow-md">
          <div className="md:hidden">
            <button className="absolute right-1 top-1" onClick={toggleMenu}>
              <CloseIcon width={60} height={60} />
            </button>
          </div>
          <ul className="flex flex-col justify-center items-center my-10 gap-8">
            {navitems.map((item) => (
              <li key={item.title}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
          {/* Contact icons */}
          <ul className="flex flex-row flex-wrap justify-center items-center gap-2">
            <li>
              <a
                href="https://github.com/rena52107"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="See GitHub Profile"
              >
                <GithubIcon width={36} height={36} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/renasakata/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Rena on LinkedIn"
              >
                <LinkedInIcon width={36} height={36} />
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@rena52107/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read Rena's Medium Blog"
              >
                <MediumIcon width={36} height={36} />
              </a>
            </li>
            <li>
              <a
                href="mailto:rena.sakata.cn@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email Rena"
              >
                <MailIcon width={36} height={36} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rena52107"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume"
              >
                <DocIcon width={36} height={36} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
