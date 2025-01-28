import React from "react";
import "../../Styles/Upcoming/Information.css"; // Correct path for CSS

// Import gallery images and the plane-phone image
import fromgal1 from "../../images/Upcomigp/fromgal1.png";
import fromgal2 from "../../images/Upcomigp/fromgal2.png";
import fromgal3 from "../../images/Upcomigp/fromgal3.png";
import fromgal4 from "../../images/Upcomigp/fromgal4.png";
import fromgal5 from "../../images/Upcomigp/fromgal5.png";
import fromgal6 from "../../images/Upcomigp/fromgal6.png";
import planePhone from "../../images/Upcomigp/Plane_Phone.jpg";

// Import React Icons
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaTicketAlt, FaCommentDots, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Information = () => {
  return (
    <div className="swifinfo-container">
      {/* Left Section */}
      <div className="swifinfo-left">
        <h2 className="swifinfo-title">Switzerland</h2>
        <p className="swifinfo-price">
          <span className="swifinfo-amount">1,000 $</span> / Per Couple
        </p>
        <p className="swifinfo-rating">
          <span>⭐⭐⭐⭐⭐</span> <span className="swifinfo-reviews">(2.3k review)</span>
        </p>
        <p className="swifinfo-description">
        Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At praesentium voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis aut provident aliquam. Aut aspernatur consequuntur eum quaerat distinctio ut inventore aliquid et quasi alias ut rerum suscipit et nihil deleniti. Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At praesentium voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis aut provident aliquam. Aut aspernatur consequuntur eum quaerat distinctio ut inventore aliquid et quasi alias ut rerum suscipit et nihil deleniti.
        </p>
        <div className="swifinfo-details">
          <p><strong>Destination</strong> <span>:Zurich, Switzerland</span></p>
          <p><strong>Departure</strong> <span>:Main Square, New City</span></p>
          <p><strong>Departure Time</strong> <span>:Approximately 08:10 AM</span></p>
          <p><strong>Return Tim </strong> <span>:Approximately 07:20 PM</span></p>
          <p><strong>Dress Code</strong> <span>:Casual, comfortable and light</span></p>
        </div>
        <div className="swifinfo-inclusions">
          <h4>Not Included</h4>
          <ul className="swifinfo-list">
            <li><FaTimesCircle className="swifinfo-icon-cross" /> Gallery Ticket</li>
            <li><FaTimesCircle className="swifinfo-icon-cross" /> Lunch</li>
          </ul>
          <h4>Included</h4>
          <ul className="swifinfo-list">
            <li><FaCheckCircle className="swifinfo-icon-tick" /> 5 Star Accommodations</li>
            <li><FaCheckCircle className="swifinfo-icon-tick" /> Breakfast</li>
            <li><FaCheckCircle className="swifinfo-icon-tick" /> Airport Transfer</li>
            <li><FaCheckCircle className="swifinfo-icon-tick" /> Personal Guide</li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="swifinfo-right">
        <h3>Book This Tour</h3>
        <form className="swifinfo-form">
          <div className="swifinfo-input-container">
            <FaUser className="swifinfo-icon" />
            <input type="text" placeholder="Name" />
          </div>
          <div className="swifinfo-input-container">
            <FaEnvelope className="swifinfo-icon" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="swifinfo-input-container">
            <FaEnvelope className="swifinfo-icon" />
            <input type="email" placeholder="Confirm Email" />
          </div>
          <div className="swifinfo-input-container">
            <FaPhone className="swifinfo-icon" />
            <input type="tel" placeholder="Phone" />
          </div>
          <div className="swifinfo-input-container">
            <FaCalendarAlt className="swifinfo-icon" />
            <input type="date" />
          </div>
          <div className="swifinfo-input-container">
            <FaTicketAlt className="swifinfo-icon" />
            <input type="number" placeholder="Number of tickets" />
          </div>
          <div className="swifinfo-input-container">
            <FaCommentDots className="swifinfo-icon" />
            <textarea placeholder="Message"></textarea>
          </div>
          <button type="button" className="swifinfo-check-btn">
            Check Availability
          </button>
          <button type="submit" className="swifinfo-book-btn">
            Book Now
          </button>
        </form>
      </div>

      {/* Gallery Section */}
      <div className="swifinfo-gallery">
        <h3>From our gallery</h3>
        <p>
          Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto
          aut magni nesciunt? Quo quidem neque iste expedita est dolor.
        </p>
        <div className="swifinfo-gallery-images">
          {[fromgal1, fromgal2, fromgal3, fromgal4, fromgal5, fromgal6].map(
            (image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                className="swifinfo-gallery-image"
              />
            )
          )}
        </div>
      </div>

      {/* Plane Section */}
      <div className="swifinfo-plane">
        <img src={planePhone} alt="Plane and Phone" className="swifinfo-plane-image" />
      </div>
    </div>
  );
};

export default Information;
