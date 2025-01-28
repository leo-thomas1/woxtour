import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../Styles/Navbar.css";
import arrowImage from "../images/Category/Arrow 05.png"; // Import the arrow image
import BuildPackageModal from "./BuildPackageModal";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <div className="logo">Travel</div>
          <img src={arrowImage} alt="Arrow" className="arrow1" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li> {/* Home Link */}
          <li><Link to="/about">About</Link></li> {/* About Page Link */}
          <li
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#Services">Services</a>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li><a href="#Honeymoon">Honeymoon Packages</a></li>
                <li><a href="#Tours">Tours Packages</a></li>
                <li><a href="#Events">Musical Events</a></li>
                <li><a onClick={openModal} className="dropdown-button">Build Package</a></li>
              </ul>
            )}
          </li>
          <li><Link to="/UpcomingPackages">Upcoming Packages</Link></li>
        </ul>
        <button className="get-in-touch">Get in Touch</button>
      </nav>
      <BuildPackageModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Navbar;
