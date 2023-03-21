import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import text from "../assets/data";
import logo from "../images/NATASHASVOICE.png";

import "../styles/nav_bar_styles.css";

const NavBar = () => {
  return (
    <div className="tv__navbar">
      <div className="tv__navbar-links">
        <div className="tv__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="tv__navbar-links_container">
          <Link to="/" className="link">
            <p>Home</p>
          </Link>
          <Link to="/story" className="link">
            <p>Story</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

/*<ul className="menu-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/story">Story</Link>
          </li>
        </ul> */
