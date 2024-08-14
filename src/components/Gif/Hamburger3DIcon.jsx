// Hamburger3DIcon.js

import React from "react";

const Hamburger3DIcon = ({ isOpen }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`hamburger-icon ${isOpen ? "open" : ""}`}
  >
    <rect x="4" y="6" width="16" height="2" rx="1" fill="#fff" />
    <rect x="4" y="11" width="16" height="2" rx="1" fill="#fff" />
    <rect x="4" y="16" width="16" height="2" rx="1" fill="#fff" />
  </svg>
);

export default Hamburger3DIcon;
