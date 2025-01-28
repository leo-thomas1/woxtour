import React from "react";
import "../../Styles/Aboutus/Promotion.css"; // Correct path to Promotion.css
import brushBackground from "../../images/AboutUs/Bg.png"; // Correct path to Bg.png
import promotionImage from "../../images/AboutUs/img.jpg"; // Correct path to img.jpg

const Promotion = () => {
  return (
    <div className="promotion-container">
      <div className="promotion-content">
        <h4 className="promotion-label">PROMOTION</h4>
        <h1 className="promotion-title">We Provide You Best Europe Sightseeing Tours</h1>
        <p className="promotion-description">
          Et labore harum non nobis ipsum eum molestias mollitia et corporis
          praesentium a laudantium internos. Non quis eius quo eligendi corrupti
          et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus
          illum aut optio quibusdam!
        </p>
        <button className="view-packages-button">View Packages</button>
      </div>
      <div className="promotion-image-container">
        <div className="circle-container">
          <img src={brushBackground} alt="Brush Background" className="brush-background" />
          <div className="outer-dashed-circle"></div>
          <div className="inner-dashed-circle"></div>
          <img src={promotionImage} alt="Europe Sightseeing" className="promotion-image" />
        </div>
      </div>
    </div>
  );
};

export default Promotion;
