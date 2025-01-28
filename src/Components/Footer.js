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
          <p>Travel helps companies<br></br> manage payments easily.</p>
          <div className="footer-icons">
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Column 2: Company Links */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Column 3: Destinations */}
        <div className="footer-column">
          <h4>Destinations</h4>
          <ul>
            <li>Maldives</li>
            <li>Los Angeles</li>
            <li>Las Vegas</li>
            <li>Toronto</li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="footer-column">
          <h4>Join Our Newsletter</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
          <p className="newsletter-note">
            * Will send you weekly updates for your better tour packages.
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
