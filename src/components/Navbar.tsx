import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <header>
      <div className="header-content">
        <a href="/" className="logo">
          <img
            src="https://placehold.co/32x32/0099ff/ffffff?text=J"
            alt="Logo"
            className="logo-icon"
          />
          <span>Joshua Ham</span>
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

export default Navbar;
