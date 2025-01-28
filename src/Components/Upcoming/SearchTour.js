import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Upcoming/SearchTour.css"; // Correct path
import planePhone from "../../images/Upcomigp/Plane_Phone.jpg";
import shellImg from "../../images/Upcomigp/Shellimg.png";
import switzerland from "../../images/Upcomigp/Switzerland.png";
import berlin from "../../images/Upcomigp/Berlin.png";
import maldives from "../../images/Upcomigp/Maldives.png";
import torronto from "../../images/Upcomigp/Torronto.png";
import baku from "../../images/Upcomigp/Baku.png";
import chinese from "../../images/Upcomigp/Chinese.png";
import { FaCalendarAlt, FaSortAmountUp, FaSortAmountDown, FaFont } from "react-icons/fa";
import { FaStar } from "react-icons/fa"; // Import the star icon from react-icons

const SearchTour = () => {
  const navigate = useNavigate();

  const handleCardClick = (destination) => {
    if (destination === "Switzerland") {
      navigate("/SwitzerlandTour");
    }
    // You can add more routes for other destinations here, if needed.
  };

  return (
    <div className="search-tour-container">
      {/* Main Tour Box */}
      <div className="tour-box">
        {/* Filter Section */}
        <div className="filter-container">
          <ul className="filter-options">
            <li>
              <FaCalendarAlt /> Date
            </li>
            <li>
              <FaSortAmountUp /> Price Low To High
            </li>
            <li>
              <FaSortAmountDown /> Price High To Low
            </li>
            <li>
              <FaFont /> Name (A-Z)
            </li>
          </ul>
        </div>

        {/* Tour Cards */}
        <div className="content">
          <div className="tour-list">
            {[
              { image: switzerland, name: "Switzerland" },
              { image: berlin, name: "Berlin" },
              { image: maldives, name: "Maldives" },
              { image: torronto, name: "Torronto" },
              { image: baku, name: "Baku" },
              { image: chinese, name: "Chinese" },
            ].map((tour, index) => (
              <div
                className="tour-card"
                key={index}
                onClick={() => handleCardClick(tour.name)} // Navigate on click
              >
                <img src={tour.image} alt="Destination" />
                <div className="card-footer">
                  <div className="card-footer-item">
                    <i className="icon-calendar"></i> 12, September 2022
                  </div>
                  <div className="card-footer-item">
                    <i className="icon-people"></i> 120+ People
                  </div>
                </div>
                <div className="card-content">
                  <h3>{tour.name}</h3>
                  <p>
                    Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias
                    Et.
                  </p>
                  <div className="price-rating">
                    <span className="price">1,100 $</span>
                    <span className="rating">
                      <FaStar className="rating-icon" /> 5.0
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Panel */}
          <aside className="right-panel">
            <h3>Plan Your Trip</h3>
            <form>
              <input type="text" placeholder="Search Tour" />
              <input type="text" placeholder="Where To?" />
              <input type="date" />
              <div className="price-filter">
                <label>Filter By Price</label>
                <input type="range" min="12" max="3600" />
                <p>Price: $12 - $3600</p>
              </div>
              <button type="submit">Book Now</button>
            </form>
          </aside>
          <img src={planePhone} alt="Travel Icon" className="travel-image" />
        </div>
      </div>

      {/* Shell Image */}
      <img src={shellImg} alt="Shell Icon" className="shell-image" />
      <div className="pagination-simple">
        <span className="pagination-arrow">&#x276E;</span>
        <span className="pagination-page active">1</span>
        <span className="pagination-page">2</span>
        <span className="pagination-page">3</span>
        <span className="pagination-page">4</span>
        <span className="pagination-arrow">&#x276F;</span>
      </div>
    </div>
  );
};

export default SearchTour;
