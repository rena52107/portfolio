function Header() {
  return (
    <header className="flex flex-row justify-between">
      <a href="/">Logo</a>
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
    </header>
  );
}

export default Header;
