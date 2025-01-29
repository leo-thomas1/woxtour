import React from "react";
import "../Styles/Footer.css"; // Import the CSS file
import footerImage from "../images/footer.jpg"; // Replace with your actual image path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import arrowImage from "../images/Category/Arrow 05.png"; // Import the arrow image

import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom"; // Import Link for internal navigation

const Footer = () => {
  return (
    <div className="footer-section">
      {/* Footer Content */}
      <div className="footer-content">
        {/* Column 1: Branding */}
        <div className="footer-column branding-column">
          <h3 className="footer-title">
            Travel
            <img src={arrowImage} alt="Arrow Decoration" className="arrow-image" />
          </h3>
          <p>
            Travel helps companies
            <br />
            manage payments easily.
          </p>
          <div className="footer-icons">
            <a
              href="https://www.linkedin.com/in/yourprofile"
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.facebook.com/yourpage"
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Column 2: Company Links */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Destinations */}
        <div className="footer-column">
          <h4>Destinations</h4>
          <ul>
            <li>
              <Link to="/destinations/maldives">Maldives</Link>
            </li>
            <li>
              <Link to="/destinations/los-angeles">Los Angeles</Link>
            </li>
            <li>
              <Link to="/destinations/las-vegas">Las Vegas</Link>
            </li>
            <li>
              <Link to="/destinations/toronto">Toronto</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="footer-column">
          <h4>Join Our Newsletter</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
          <p className="newsletter-note">
            * We will send you weekly updates for better tour packages.
          </p>
        </div>
      </div>

      {/* Decorative Image */}
      <div className="footer-image-container">
        <img src={footerImage} alt="Mountain Decoration" className="footer-image" />
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Copyright © Xpro 2022. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
