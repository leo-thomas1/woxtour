import React from "react";
import "../Styles/BuildPackageModal.css";
import { FaChevronDown } from "react-icons/fa";

const BuildPackageModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">Build Your Own Package</h2>
        <form className="build-package-form">
          {/* Destination Inputs */}
          <div className="form-group floating-label">
            <input type="text" id="destination1" placeholder=" " />
            <label htmlFor="destination1">Enter destination (country, region or city)</label>
          </div>
          <div className="form-group floating-label">
            <input type="text" id="destination2" placeholder=" " />
            <label htmlFor="destination2">Enter destination (country, region or city)</label>
          </div>
          <button type="button" className="add-destination">
            + Add destination
          </button>

          {/* Date Range and Guests */}
          <div className="date-guests-container">
            <div className="date-range">
              <span className="date-label">Date Range</span>
              <div className="date-inputs">
                <span className="start-date">Start Date</span>
                <span className="date-arrow">→</span>
                <span className="end-date">End Date</span>
              </div>
            </div>
            <div className="guests">
              <span className="guests-label">Guests</span>
              <div className="guest-dropdown">
                <span className="guest-value">2 adults</span>
                <FaChevronDown className="dropdown-icon" />
              </div>
            </div>
          </div>

          {/* Activity Preferences */}
          <div className="form-group">
            <label className="checkbox-label">Activities preferences (optional)</label>
            <div className="checkbox-grid">
              {[
                "Culture",
                "Outdoors",
                "Relaxing",
                "Wildlife",
                "Romantic",
                "Religious",
                "Hiking",
                "Musical",
                "Shopping",
                "Business",
                "Museums",
                "Party",
                "Traditions",
                "Walks",
                "Fishing",
                "Cruise",
                "Guide",
                "Healthcare",
                "Accommodation",
              ].map((activity) => (
                <div key={activity}>
                  <input type="checkbox" id={activity} />
                  <label htmlFor={activity}>{activity}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="build-button">
            Build Package
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuildPackageModal;
