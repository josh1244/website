import React from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.includes(path);
  };

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
              <a href="/" className={isActive("/") ? "active" : ""}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" className={isActive("/about") ? "active" : ""}>
                About
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className={isActive("/projects") ? "active" : ""}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={isActive("/contact") ? "active" : ""}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
