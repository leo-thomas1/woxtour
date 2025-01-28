import React from "react";
import "../Styles/Hero.css";
import person1 from "../images/person1.png";
import person2 from "../images/person2.png";
import person3 from "../images/person3.png";
import person4 from "../images/person4.png";
import person5 from "../images/person5.png";
import person6 from "../images/person6.png";
import vectorImage from "../images/Category/Vector 1.png"; // Import the vector


const Hero = () => {
  return (
    <div className="home-hero">
      <div className="home-content">
        <img src={vectorImage} alt="Decorative Vector" className="home-vector-image" />
        <h1>No matter where <br />you’re going to, we’ll<br /> take you there</h1>
        {/* Search Form */}
        <div className="home-search-form">
          <input type="text" placeholder="Where to?" />
          <select>
            <option>Travel Type</option>
            <option>Adventure</option>
            <option>Relaxation</option>
          </select>
          <select>
            <option>Duration</option>
            <option>1-3 Days</option>
            <option>4-7 Days</option>
            <option>8+ Days</option>
          </select>
          <button className="submit">Submit</button>
        </div>
        {/* Footer */}
        <div className="home-footer">
          <div className="icons">
            <div className="icon-circle">
              <img src={person1} alt="Person 1" />
            </div>
            <div className="icon-circle">
              <img src={person2} alt="Person 2" />
            </div>
            <div className="icon-circle">
              <img src={person3} alt="Person 3" />
            </div>
            <div className="icon-circle">
              <img src={person4} alt="Person 4" />
            </div>
            <div className="icon-circle">
              <img src={person5} alt="Person 5" />
            </div>
            <div className="icon-circle">
              <img src={person6} alt="Person 6" />
            </div>
            <div className="icon-circle additional-icon">+</div>
            <p>2,500 people booked Tomorrowland Events in the last 24 hours</p>

          </div>
        </div>
      </div>
      {/* Add Circle Container */}
      <div className="home-circle-container">
        <div className="home-large-circle"></div>
        <div className="home-small-circle">
          <span className="home-scroll-text">Scroll</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
