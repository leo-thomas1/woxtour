import React from "react";
import "../Styles/Promotion2.css"; // Create a corresponding CSS file
import natureImage from "../images/promotions/nature.jpg"; // Replace with the actual path of the Nature image
import cityImage from "../images/promotions/city.jpg"; // Replace with the actual path of the City image

const Promotion2 = () => {
  return (
    <div className="promotion2-section">
      <div className="promotion2-card nature-card">
        <img src={natureImage} alt="Explore Nature" className="promotion2-image nature-image" />
        <div className="promotion2-content">
          <p className="promotion2-label">PROMOTION</p>
          <h2>Explore Nature</h2>
          <button className="promotion2-button">View Packages</button>
        </div>
      </div>
      <div className="promotion2-card city-card">
        <img src={cityImage} alt="Explore Cities" className="promotion2-image city-image" />
        <div className="promotion2-content">
          <p className="promotion2-label">PROMOTION</p>
          <h2>Explore Cities</h2>
          <button className="promotion2-button">View Packages</button>
        </div>
      </div>
    </div>
  );
};

export default Promotion2;
