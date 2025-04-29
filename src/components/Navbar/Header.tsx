import "../styles/components.css";

const Header = () => {
  return (
    <header>
      <div className="container header-content">
        <a href="/" className="logo">
          MyWebsite
        </a>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
