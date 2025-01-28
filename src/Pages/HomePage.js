import React from "react";
import Hero from "../Components/Hero";
import Partners from "../Components/Partners"; // Import the Partners component
import "../Styles/HomePage.css"; // Import the CSS file
import backgroundImage from "../images/homebgtop.jpg"; // Import the image
import Category from "../Components/Category"; // Import the Category component
import Honeymoon from "../Components/Honeymoon";
import ResortBookings from "../Components/ResortBookings";
import stachu from "../images/stachu.png"; // Step icons
import underlineImage from "../images/Underline.png"; // Import the underline image
import Promotion from "../Components/Promotion";
import Promotion2 from "../Components/Promotion2";
import Trendy from "../Components/Trendy";
import Promotion3 from "../Components/Promotion3";


const HomePage = () => {
  return (
    <div className="homepage">
      {/* Background Image and Overlay */}
      <div
        className="background-container"
        style={{
          backgroundImage: `url(${backgroundImage})`, // Set the background image dynamically

        }}
        
      >
         <div className="overlay"></div>
        <Hero />
      </div>
      <Partners />
      <Category />
      <Honeymoon />
      <ResortBookings />
      <div className="statue-section">
        <div className="statue-content">
          <h1>Let’s Make Your<br></br> Next Holiday Amazing</h1>
          <img src={underlineImage} alt="Underline" className="underline-image" />

        </div>
        <div
          className="statue-image"
          style={{
            backgroundImage: `url(${stachu})`, // Dynamic background image
          }}
        ></div>
        </div>
        <section className="promotion-section-wrapper">
          <Promotion />
          <Promotion2 />
        </section>
        <Trendy/>
        <Promotion3 />



    </div>
  );
};

export default HomePage;
