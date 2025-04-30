// Navbar Component

// Imports
import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";

const Navbar: React.FC = () => {
  // Check location to highlight active link
  const location = useLocation();
  const [isAtTop, setIsAtTop] = useState(true);
  const headerRef = useRef<HTMLElement>(null);

  // Track scroll position to determine if user is at the top of the page
  useEffect(() => {
    const checkScrollPosition = () => {
      setIsAtTop(window.scrollY < 10); // Consider "top" to be the first few pixels
    };

    // Check initial position
    checkScrollPosition();

    // Add scroll listener
    window.addEventListener("scroll", checkScrollPosition);

    // Clean up
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  // Apply bounce animation when page changes
  useEffect(() => {
    if (headerRef.current) {
      // Remove animation class if it exists
      headerRef.current.classList.remove("bounce");

      // Force a reflow to restart the animation
      void headerRef.current.offsetWidth;

      // Add the animation class
      headerRef.current.classList.add("bounce");

      // Remove the class after animation completes
      const timer = setTimeout(() => {
        if (headerRef.current) {
          headerRef.current.classList.remove("bounce");
        }
      }, 400); // Match the new animation duration of 0.4s in CSS

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  // Scroll to top when the route changes or when triggered manually
  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Define the navigation links
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header ref={headerRef}>
      <div className="header-content">
        {/* Logo and Name */}
        <NavLogo isAtTop={isAtTop} scrollToTop={scrollToTop} />

        {/* Nav links */}
        <NavLinks links={navLinks} />
      </div>
    </header>
  );
};

export default Navbar;
