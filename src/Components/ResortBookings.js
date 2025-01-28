import React from "react";
import "../Styles/ResortBookings.css"; // Import CSS file
import { FaLeaf, FaMap, FaPaperPlane,FaBuilding } from "react-icons/fa"; // Importing icons from react-icons
import { AiOutlineHeart } from "react-icons/ai"; // Icons from Ant Design
import resortImage from "../images/Resort/resort-image.png"; // Image inside the card
import airplaneImage from "../images/Resort/plane-image.png"; // Plane image
import tripToRomeImage from "../images/Resort/trip-to-rome.png"; // Circular image for "Trip to Rome"
import destinationIcon from "../images/Resort/destination-icon.png"; // Step icons
import availabilityIcon from "../images/Resort/availability-icon.png";
import letsGoIcon from "../images/Resort/letsgo-icon.png";
import bgimg from "../images/Resort/bgimg.png"; // Step icons

const ResortBookings = () => {
  return (
    <div className="resort-booking-section">
      <div className="resort-booking-content">
        {/* Left Section */}
        <div className="left-content">
          <h4>Fast & Easy</h4>
          <h2>Get Your Favourite Resort Bookings</h2>
          {/* Steps */}
          <div className="step">
            <div className="step-circle" style={{ backgroundColor: "#ffcc33" }}>
              <img src={destinationIcon} alt="Destination" className="step-icon" />
            </div>
            <div className="step-text">
              <strong>Choose Destination</strong>
              <p>Learn ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-circle" style={{ backgroundColor: "#ff6f61" }}>
              <img src={availabilityIcon} alt="Availability" className="step-icon" />
            </div>
            <div className="step-text">
              <strong>Check Availability</strong>
              <p>Learn ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-circle" style={{ backgroundColor: "#4299e1" }}>
              <img src={letsGoIcon} alt="Let's Go" className="step-icon" />
            </div>
            <div className="step-text">
              <strong>Let's Go</strong>
              <p>Learn ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-content">
        <img src={airplaneImage} alt="Airplane" className="airplane-image" />
          <div className="card">
            {/* Main Card */}
            <img src={resortImage} alt="Trip to Hawaii" className="resort-img" />
            <div className="card-content">
              <h3>Trip to Hawaii</h3>
              <p>14-29 June | by JR Martin</p>
              <div className="icons-row">
                <FaLeaf className="small-icon" />
                <FaMap className="small-icon" />
                <FaPaperPlane className="small-icon" />
              </div>
              <div className="people-interested">
                <FaBuilding className="small-icon" />
                <p>60 people are interested</p>
                <AiOutlineHeart className="heart-icon" />
                </div>
            </div>
            {/* Overlay Card */}
            <div className="overlay-card">
              <div className="overlay-image">
                <img src={tripToRomeImage} alt="Trip to Rome" />
              </div>
              <div className="overlay-content">
                <p className="overlay-status">Ongoing</p>
                <h4>Trip to rome</h4>
                <p className="overlay-progress">40% completed</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <img src={bgimg} alt="bgimg" className="bgimg" />
        </div>
      </div>
    </div>
  );
};

export default ResortBookings;
