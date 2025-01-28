import React from "react";
import "../Styles/Category.css";
import guidedtours from "../images/Category/guided-tours.png";
import bestflights from "../images/Category/best-flights.png";
import religioustours from "../images/Category/religious-tours.png";
import medicalinsurance from "../images/Category/medical-insurance.png";

const Category = () => {
  return (
    <div className="home-category-section">
      <h3 className="home-category-label">Category</h3>
      <h2 className="home-category-title">We Offer Best Services</h2>
      <div className="home-category-cards">
        {/* Card 1: Guided Tours */}
        <div className="home-category-card">
          <img src={guidedtours} alt="Guided Tours" />
          <h4>Guided Tours</h4>
          <p>Sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
        </div>
        {/* Card 2: Best Flights Options */}
        <div className="home-category-card-container">
          <div className="home-orange-rectangle"></div>
          <div className="home-category-card highlighted">
            <img src={bestflights} alt="Best Flights Options" />
            <h4>Best Flights Options</h4>
            <p>Sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
          </div>
        </div>
        {/* Card 3: Religious Tours */}
        <div className="home-category-card">
          <img src={religioustours} alt="Religious Tours" />
          <h4>Religious Tours</h4>
          <p>Sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
        </div>
        {/* Card 4: Medical Insurance */}
        <div className="home-category-card">
          <img src={medicalinsurance} alt="Medical Insurance" />
          <h4>Medical Insurance</h4>
          <p>Sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
