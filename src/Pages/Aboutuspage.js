import React from "react";
import "../Styles/Aboutus/AboutUsPage.css"; // Updated path to match the correct file location
import Promotion from "../Components/Abou_Compo/Promotion";
import { FaPlay } from "react-icons/fa"; // Import the play icon
import Trend from "../Components/Abou_Compo/Trend";
import International from "../Components/Abou_Compo/International";
import Promotion3 from "../Components/Promotion3";





const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      {/* Navbar */}

      {/* Hero Section */}
      <div className="about-hero-section">
        <div className="hero-content">
          <h1 className="hero-title">READ</h1>
          <h2 className="hero-subtitle">About Us</h2>
        </div>
      </div>
      <Promotion/>
      <div className="about-hero-centre-section">
        <div className="centre-content">
          <h1>Wanderlust</h1>
          <button className="play-button">
            <FaPlay className="play-icon" />
          </button>
        </div>
      </div>
      <Trend/>
      <International/>
      <Promotion3/>

    </div>
  );
};

export default AboutUsPage;
