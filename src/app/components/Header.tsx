"use client";

import { useEffect, useState } from "react";
import NavBar from "./NavBar";

function Header() {
  const [displayProperty, setDisplayProperty] = useState("hidden");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setDisplayProperty("block");
      } else {
        setDisplayProperty("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`wrapper md:bg-primary-dark md:text-white md:px-16 md:py-10 md:relative sticky top-0 z-10 bg-white/75 text-bg-dark md:block ${displayProperty}`}
    >
      <header className={`flex flex-row justify-between md:max-w-1040 md:mx-auto`}>
        <a href="/">Logo</a>
        <NavBar />
      </header>
    </div>
  );
}

export default Header;
