import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "/Images/logo.png";
import "./Header.css";
import UserAuth from "../SignIn/UserAuth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const openLoginPopup = () => {
    setIsLoginOpen(true);
  };

  const closeLoginPopup = () => {
    setIsLoginOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="/" className="logo">
        <img src={logo} alt="GitaVerse Logo" />
        <h2>GitaVerse</h2>
      </a>
      <div className="sections">
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <NavLink
            className={(navData) =>
              navData.isActive ? "active-header links" : "links"
            }
            to="/"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? "active-header links" : "links"
            }
            to="/about"
            onClick={toggleMenu}
          >
            About Us
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? "active-header links" : "links"
            }
            to="/courses"
            onClick={toggleMenu}
          >
            Courses
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? "active-header links" : "links"
            }
            to="/counseling"
            onClick={toggleMenu}
          >
            Counseling
          </NavLink>
        </nav>
        <div>
          <button className="register-button" onClick={openLoginPopup}>Register</button>
          <UserAuth isOpen={isLoginOpen} onClose={closeLoginPopup} />
        </div>
      </div>
      <div
        className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default Header;
