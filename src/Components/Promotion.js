import React from "react";
import "../Styles/Promotion.css"; // Create a corresponding CSS file
import eiffelTower from "../images/promotions/eiffelTower.png";
import bigBen from "../images/promotions/bigBen.png";
import colosseum from "../images/promotions/colosseum.png";
import venice from "../images/promotions/venice.png";
import barcelona from "../images/promotions/barcelona.png";

const Promotion = () => {
  return (
    <div className="home-promotion-section">
      <div className="home-promotion-content">
        <p className="home-promotion-label">PROMOTION</p>
        <h1>We Provide You Best <br/>Europe Sightseeing Tours</h1>
        <p className="home-promotion-description">
        Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!
        </p>
        <button className ="home-view-packages-button">View Packages</button>
      </div>

      <div className="home-pro-main-image">
        <img src={eiffelTower} alt="Eiffel Tower" />
        <p className="home-pro-vertical-text">Breath Taking Views</p>
      </div>

      <div className="home-pro-promotion-images">
        <div className="home-image-cards">
          <div className="home-image-card">
            <img src={bigBen} alt="Big Ben" />
            <span className="home-price-tag">$700</span>
          </div>
          <div className="home-image-card">
            <img src={venice} alt="Venice" />
            <span className="home-price-tag">$700</span>
          </div>
          <div className="home-image-card">
            <img src={colosseum} alt="Colosseum" />
            <span className="home-price-tag">$500</span>
          </div>
          <div className="home-image-card">
            <img src={barcelona} alt="Barcelona" />
            <span className="home-price-tag">$400</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
