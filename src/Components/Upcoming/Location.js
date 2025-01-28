import React from "react";
import "../../Styles/Upcoming/Location.css";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaTicketAlt,
  FaCommentDots,
} from "react-icons/fa";
import mapImage from "../../images/Upcomigp/map.png";
import planeImage from "../../images/Upcomigp/Plane_Phone.jpg";
import treeImage from "../../images/Upcomigp/Leaf.png";

const Location = () => {
  return (
    <div className="location-container">
      {/* Left Section: Location Plan */}
      <div className="location-left">
        <h2 className="location-title">Tour Plan</h2>
        <div className="location-content">
          <p>
          Qui tempore voluptate qui quia commodi rem praesentium alias et voluptates officia sed molestiae sint et voluptas quos. Qui harum repudiandae galisum dolorem Hic deleniti officiis est sapiente explicabo non eaque corporis aut voluptatum iusto At facere enim id voluptas reprehenderit. Ut voluptas laudantium
          </p>
          <img src={mapImage} alt="Map" className="location-map" />
          <p>
          Sit quasi soluta non temporibus voluptas non necessitatibus tempore sit deleniti praesentium aut velit nostrum ut itaque atque ad expedita veniam. Hic deleniti officiis est sapiente explicabo non eaque corporis aut voluptatum iusto At facere enim id voluptas reprehenderit. Ut voluptas laudantium et molestias voluptatem ex doloremque omnis est ipsum nihil.

          </p>
          <p>
          Quo facere eveniet 33 sint rerum est internos impedit sed dignissimos quia. Et rerum deleniti et voluptates saepe qui labore quisquam non accusantium temporibus. Quo velit numquam hic excepturi sequi sed dicta doloribus! In quos possimus quo quibusdam aliquid est culpa porro sed molestiae libero At blanditiis minima a reiciendis fugiat.

          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="location-right">
        <h3>Book This Tour</h3>
        <p>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>
        <form className="location-form">
          <div className="location-input-container">
            <FaUser className="location-icon" />
            <input type="text" placeholder="Name" />
          </div>
          <div className="location-input-container">
            <FaEnvelope className="location-icon" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="location-input-container">
            <FaEnvelope className="location-icon" />
            <input type="email" placeholder="Confirm Email" />
          </div>
          <div className="location-input-container">
            <FaPhone className="location-icon" />
            <input type="tel" placeholder="Phone" />
          </div>
          <div className="location-input-container">
            <FaCalendarAlt className="location-icon" />
            <input type="date" />
          </div>
          <div className="location-input-container">
            <FaTicketAlt className="location-icon" />
            <input type="number" placeholder="Number of tickets" />
          </div>
          <div className="location-input-container">
            <FaCommentDots className="location-icon" />
            <textarea placeholder="Message"></textarea>
          </div>
          <button type="button" className="location-check-btn">
            Check Availability
          </button>
          <button type="submit" className="location-book-btn">
            Book Now
          </button>
        </form>
      </div>

      {/* Decorative Section */}
      <div className="location-decorative">
        <img src={treeImage} alt="Decorative Tree" className="location-tree" />
        <img src={planeImage} alt="Plane" className="location-plane-image" />
      </div>
    </div>
  );
};

export default Location;
