// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use Link for navigation
import styles from "../styles/navbar.module.css";
import logo from "../assets/logo.png"; // Updated path

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <ul className={`${styles.navLinks} ${isNavOpen ? styles.active : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/gif">Gif</Link>
          </li>
          <li>
            <Link to="/video/all">Video</Link> {/* Link updated */}
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button className={styles.navToggle} onClick={toggleNav}>
          <span className={styles.toggleIcon}></span>
          <span className={styles.toggleIcon}></span>
          <span className={styles.toggleIcon}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
