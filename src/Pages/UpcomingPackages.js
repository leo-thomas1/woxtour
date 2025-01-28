import React from "react";
import "../Styles/UpcomingPackages.css"; // Ensure this file contains your styling
import SearchTour from "../Components/Upcoming/SearchTour";

const UpcomingPackages = () => {
  return (
    <div className="upcoming-packages-page">
      {/* Hero Section */}
      <header className="ut-hero-section">
        <div className="overlay"></div>
        <div className="hero-text">
          <p className="sub-title">SEARCH TOUR</p>
          <h1 className="main-title">Travel With Us</h1>
        </div>
      </header>

      {/* SearchTour Section */}
      <section className="search-tour-section">
        <SearchTour />
      </section>
    </div>
  );
};

export default UpcomingPackages;
