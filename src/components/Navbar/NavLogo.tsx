// NavLogo
// The interactive logo component that handles navigation and scroll behavior.

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";

interface NavLogoProps {
  isAtTop: boolean;
  scrollToTop: () => void;
}

const NavLogo: React.FC<NavLogoProps> = ({ isAtTop, scrollToTop }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Handle logo click
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default link behavior

    if (isAtTop) {
      // If at the top of the page and not home, go back to the previous page
      if (window.history.length > 1 && location.pathname !== "/") {
        navigate(-1);
      }
    } else {
      // If not at the top, scroll to top of the page
      scrollToTop();
    }
  };

  return (
    <a href="#" className="logo" onClick={handleLogoClick}>
      <Logo size={32} />
      <span>Joshua Ham</span>
    </a>
  );
};

export default NavLogo;
