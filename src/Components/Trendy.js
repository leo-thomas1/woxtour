import React from "react";
import "../Styles/Trendy.css"; // Import the corresponding CSS
import { FaCalendarAlt, FaUsers } from "react-icons/fa"; // React icons for calendar and people

// Replace with actual paths of images
import switzerlandImage from "../images/trendy/switzerland.png";
import amazonImage from "../images/trendy/amazon.jpg";
import gizaImage from "../images/trendy/giza.jpg";

// Replace with actual paths of flag images
import switzerlandFlag from "../images/trendy/switzerland-flag.png";
import brazilFlag from "../images/trendy/brazil-flag.png";
import egyptFlag from "../images/trendy/egypt-flag.png";

const Trendy = () => {
  return (
    <div className="trendy-section">
      <p className="trendy-label">TRENDY</p>
      <h2 className="trendy-heading">Our Trending Tour <br></br>Packages</h2>
      <div className="trendy-cards">
        {/* Switzerland Card */}
        <div className="trendy-card">
          <div className="trendy-card-image">
            <img src={switzerlandImage} alt="Switzerland" />
            <div className="trendy-flag">
              <img src={switzerlandFlag} alt="Switzerland Flag" />
            </div>
          </div>
          <div className="trendy-card-content">
            <div className="trendy-card-icons">
              <span><FaCalendarAlt /> 8 Days</span>
              <span><FaUsers /> 25 People Going</span>
            </div>
            <h3>Switzerland</h3>
            <p className="trendy-card-location">Europe</p>
            <div className="trendy-card-pricing">
              <span className="trendy-discounted-price">1,000 $</span>
              <span className="trendy-original-price">1,200 $</span>
              <span className="trendy-rating">★★★★★</span>
            </div>
            <p className="trendy-card-description">
              Nam exercitationem commodi et ducimus quia in dolore animi et
              molestiae amet id quod eligendi.
            </p>
            <button className="trendy-card-button">Explore Now</button>
          </div>
        </div>

        {/* Amazon Card */}
        <div className="trendy-card">
          <div className="trendy-card-image">
            <img src={amazonImage} alt="Amazon" />
            <div className="trendy-flag">
              <img src={brazilFlag} alt="Brazil Flag" />
            </div>
          </div>
          <div className="trendy-card-content">
            <div className="trendy-card-icons">
              <span><FaCalendarAlt /> 8 Days</span>
              <span><FaUsers /> 30 People Going</span>
            </div>
            <h3>Amazon</h3>
            <p className="trendy-card-location">Brazil</p>
            <div className="trendy-card-pricing">
              <span className="trendy-discounted-price">1,223 $</span>
              <span className="trendy-original-price">1,200 $</span>
              <span className="trendy-rating">★★★★★</span>
            </div>
            <p className="trendy-card-description">
              Nam exercitationem commodi et ducimus quia in dolore animi et
              molestiae amet id quod eligendi.
            </p>
            <button className="trendy-card-button">Explore Now</button>
          </div>
        </div>

        {/* Giza Card */}
        <div className="trendy-card">
          <div className="trendy-card-image">
            <img src={gizaImage} alt="Giza" />
            <div className="trendy-flag">
              <img src={egyptFlag} alt="Egypt Flag" />
            </div>
          </div>
          <div className="trendy-card-content">
            <div className="trendy-card-icons">
              <span><FaCalendarAlt /> 8 Days</span>
              <span><FaUsers /> 155 People Going</span>
            </div>
            <h3>Giza</h3>
            <p className="trendy-card-location">Egypt</p>
            <div className="trendy-card-pricing">
              <span className="trendy-discounted-price">1,200 $</span>
              <span className="trendy-original-price">1,200 $</span>
              <span className="trendy-rating">★★★★★</span>
            </div>
            <p className="trendy-card-description">
              Nam exercitationem commodi et ducimus quia in dolore animi et
              molestiae amet id quod eligendi.
            </p>
            <button className="trendy-card-button">Explore Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trendy;
