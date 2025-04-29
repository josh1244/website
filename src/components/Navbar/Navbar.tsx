import React from "react";
import { useLocation, Link } from "react-router-dom";
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
        <Link to="/" className="logo">
          <img
            src="https://placehold.co/32x32/0099ff/ffffff?text=J"
            alt="Logo"
            className="logo-icon"
          />
          <span>Joshua Ham</span>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/" className={isActive("/") ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive("/about") ? "active" : ""}>
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={isActive("/projects") ? "active" : ""}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={isActive("/contact") ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
