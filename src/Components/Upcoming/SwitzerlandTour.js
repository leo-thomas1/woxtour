import React, { useState } from "react";
import "../../Styles/Upcoming/SwitzerlandTour.css";

// Import subcomponents
import Information from "../Upcoming/Information";
import TourPlan from "../Upcoming/TourPlan";
import Location from "../Upcoming/Location";
import Gallery from "../Upcoming/Gallery";

// Import icons
import { FaInfoCircle, FaCalendarAlt, FaMapMarkerAlt, FaImages } from "react-icons/fa";

const SwitzerlandTour = () => {
  const [activeSection, setActiveSection] = useState("information");

  const renderSection = () => {
    switch (activeSection) {
      case "information":
        return <Information />;
      case "tourPlan":
        return <TourPlan />;
      case "location":
        return <Location />;
      case "gallery":
        return <Gallery />;
      default:
        return <Information />;
    }
  };

  return (
    <div className="switzerland-tour-container">
      {/* Header */}
      <div className="switzerland-header">
        <h1>EXPLORE</h1>
        <h4>Landscapes</h4>
      </div>

      {/* Navigation */}
      <div className="switzerland-sub-footer">
        <button
          className={activeSection === "information" ? "active" : ""}
          onClick={() => setActiveSection("information")}
        >
          <FaInfoCircle /> Information
        </button>
        <button
          className={activeSection === "tourPlan" ? "active" : ""}
          onClick={() => setActiveSection("tourPlan")}
        >
          <FaCalendarAlt /> Tour Plan
        </button>
        <button
          className={activeSection === "location" ? "active" : ""}
          onClick={() => setActiveSection("location")}
        >
          <FaMapMarkerAlt /> Location
        </button>
        <button
          className={activeSection === "gallery" ? "active" : ""}
          onClick={() => setActiveSection("gallery")}
        >
          <FaImages /> Gallery
        </button>
      </div>

      {/* Content Section */}
      <div className="switzerland-section-content">{renderSection()}</div>
    </div>
  );
};

export default SwitzerlandTour;
