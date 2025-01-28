import React from "react";
import "../Styles/Partners.css";

// Import all images
import emiratesLogo from "../images/partners/emirates.png";
import trivagoLogo from "../images/partners/trivago.png";
import airbnbLogo from "../images/partners/airbnb.png";
import turkishLogo from "../images/partners/turkish-airlines.png";
import swissLogo from "../images/partners/swiss.png";

const Partners = () => {
  return (
    <div className="partners">
      <div className="partner-logos">
        <img src={emiratesLogo} alt="Fly Emirates" />
        <img src={trivagoLogo} alt="Trivago" />
        <img src={airbnbLogo} alt="Airbnb" />
        <img src={turkishLogo} alt="Turkish Airlines" />
        <img src={swissLogo} alt="Swiss" />
      </div>
    </div>
  );
};

export default Partners;
