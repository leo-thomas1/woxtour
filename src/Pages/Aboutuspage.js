import React, { useState } from "react";
import "../Styles/Aboutus/AboutUsPage.css";
import Promotion from "../Components/Abou_Compo/Promotion";
import { FaPlay } from "react-icons/fa"; // Play Icon
import Trend from "../Components/Abou_Compo/Trend";
import International from "../Components/Abou_Compo/International";
import Promotion3 from "../Components/Promotion3";


const AboutUsPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <div className="about-hero-section">
        <div className="hero-content">
          <h1 className="hero-title">READ</h1>
          <h2 className="hero-subtitle">About Us</h2>
        </div>
      </div>

      <Promotion />

      {/* Centre Section with Video Play Button */}
      <div className="about-hero-centre-section">
        {!isPlaying ? (
          // Show Image and Play Button Initially
          <div className="centre-content">
            <h1>Wanderlust</h1>
            <button className="play-button" onClick={playVideo}>
              <FaPlay className="play-icon" />
            </button>
          </div>
        ) : (
          // Replace Image with Video when Playing
          <video className="video-container" autoPlay controls width="100%">
            <source src="/Tour.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <Trend />
      <International />
      <Promotion3/>
    </div>
  );
};

export default AboutUsPage;
