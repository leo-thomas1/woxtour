import React from "react";
import "../Styles/Honeymoon.css"; // Import CSS
import mainImage from "../images/Honeymoon/main-image.png"; // Main image
import circularImage1 from "../images/Honeymoon/circular-image1.png"; // Circular images
import circularImage2 from "../images/Honeymoon/circular-image2.png";
import circularImage3 from "../images/Honeymoon/circular-image3.png";
import bottomRightImage from "../images/Honeymoon/bottom-right-image.png"; // Bottom-right image

const Honeymoon = () => {
  return (
    <div className="home-honeymoon-section">
      <div className="home-honeymoon-content">
        {/* Left Image Section */}
        <div className="home-image-container">
        <div class="home-gradient-overlay"></div>
        <img src={mainImage} alt="Romantic Couple" className="home-main-image" />
          <div className="home-circular-images">
            <img
              src={circularImage1}
              alt="Circular 1"
              className="home-circular-image1"
            />
            <img
              src={circularImage2}
              alt="Circular 2"
              className="home-circular-image2"
            />
            <img
              src={circularImage3}
              alt="Circular 3"
              className="home-circular-image3"
            />
          </div>
          <p className="home-vertical-text">Honeymoon Packages</p>
          {/* Bottom-Right Image */}
          <img
            src={bottomRightImage}
            alt="Bottom Right"
            className="home-bottom-right-image"
          />
        </div>
        {/* Right Text Section */}
        <div className="home-text-content">
          <h4>Honeymoon Specials</h4>
          <h2>Our Romantic Tropical Destinations</h2>
          <p>
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam!
          </p>
          <button className="home-view-packages-btn">View Packages</button>
        </div>
      </div>
    </div>
  );
};

export default Honeymoon;
