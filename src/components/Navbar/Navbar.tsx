// Navbar Component

// Imports
import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  // Check location to highlight active link
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.includes(path);
  };

  // Define the naviagation links
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header>
      <div className="header-content">
        {/* Logo and Name */}
        <Link to="/" className="logo">
          <img
            src="https://placehold.co/32x32/0099ff/ffffff?text=J"
            alt="Logo"
            className="logo-icon"
          />
          <span>Joshua Ham</span>
        </Link>

        {/* Nav links */}
        <nav>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={isActive(link.to) ? "active" : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
