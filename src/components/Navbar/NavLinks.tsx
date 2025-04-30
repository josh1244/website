// NavLinks
// Takes an array of navigation links and renders them as a list of links

import React from "react";
import { useLocation, Link } from "react-router-dom";

interface NavLinkItem {
  to: string;
  label: string;
}

interface NavLinksProps {
  links: NavLinkItem[];
}

const NavLinks: React.FC<NavLinksProps> = ({ links }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.includes(path);
  };

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className={isActive(link.to) ? "active" : ""}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
