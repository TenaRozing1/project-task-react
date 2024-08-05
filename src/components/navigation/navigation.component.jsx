import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.scss";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img src="/robot-logo.png" alt="Robot logo" className="logo-image" />
      </Link>
      <ul className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add-employee">Add Employee</Link>
        </li>
      </ul>
      <div className="navbar-hamburger" onClick={toggleMobileMenu}>
        <div className="hamburger-icon"></div>
      </div>
    </nav>
  );
};

export default Navbar;
