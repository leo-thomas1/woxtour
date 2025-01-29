
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
          <li>
            <Link to="/">Home</Link> {/* Home Link */}
          </li>
          <li>
            <Link to="/about">About</Link> {/* About Page Link */}
          </li>
          <li
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Use Link if Services navigates within the app, else provide a valid external URL */}
            <Link to="/services">Services</Link>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/services/honeymoon">Honeymoon Packages</Link>
                </li>
                <li>
                  <Link to="/services/tours">Tours Packages</Link>
                </li>
                <li>
                  <Link to="/services/events">Musical Events</Link>
                </li>
                <li>
                  {/* Use button for actions like opening a modal */}
                  <button onClick={openModal} className="dropdown-button">
                    Build Package
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/upcoming-packages">Upcoming Packages</Link>
          </li>
        </ul>
        <button className="get-in-touch">Get in Touch</button>
      </nav>
      <BuildPackageModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Navbar;
