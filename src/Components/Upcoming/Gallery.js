import React from "react";
import "../../Styles/Upcoming/Gallery.css";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaTicketAlt,
  FaCommentDots,
} from "react-icons/fa";

// Import images
import leafImage from "../../images/Upcomigp/Leaf.png";
import planeImage from "../../images/Upcomigp/Plane_Phone.jpg";
import dinnerImage from "../../images/Upcomigp/friends Dinner.png";
import mountainTopImage from "../../images/Upcomigp/mountaintop.jpg";
import groupFriendsImage from "../../images/Upcomigp/groupfriends.png";
import mountainSeaImage from "../../images/Upcomigp/mountainsea.jpg";
import sunsetImage from "../../images/Upcomigp/sunset.jpg";
import ladySeaImage from "../../images/Upcomigp/ladysea.jpg";
import mountainImage from "../../images/Upcomigp/mountain.jpg";

const images = [
  { src: mountainImage, alt: "Mountain", className: "gallery-item" },
  { src: ladySeaImage, alt: "Lady at Sea", className: "gallery-item large" },
  { src: sunsetImage, alt: "Sunset", className: "gallery-item" },
  { src: mountainSeaImage, alt: "Mountain Sea", className: "gallery-item" },
  { src: groupFriendsImage, alt: "Group of Friends", className: "gallery-item" },
  { src: mountainTopImage, alt: "Mountain Top", className: "gallery-item" },
  { src: dinnerImage, alt: "Friends Dinner", className: "gallery-item large" },
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      {/* Gallery Section */}
      <div className="gallery-left">
        <div className="gallery-grid">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={image.className}
              style={image.style || {}} // Apply individual styles if provided
            />
          ))}
        </div>
        <div className="gallery-pagination">
          <span>‹</span>
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>›</span>
        </div>
      </div>

      {/* Right Booking Section */}
      <div className="gallery-right">
        <h3>Book This Tour</h3>
        
        <p> Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>
        <form className="gallery-form">
          <div className="gallery-input-container">
            <FaUser className="gallery-icon" />
            <input type="text" placeholder="Name" />
          </div>
          <div className="gallery-input-container">
            <FaEnvelope className="gallery-icon" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="gallery-input-container">
            <FaEnvelope className="gallery-icon" />
            <input type="email" placeholder="Confirm Email" />
          </div>
          <div className="gallery-input-container">
            <FaPhone className="gallery-icon" />
            <input type="tel" placeholder="Phone" />
          </div>
          <div className="gallery-input-container">
            <FaCalendarAlt className="gallery-icon" />
            <input type="date" />
          </div>
          <div className="gallery-input-container">
            <FaTicketAlt className="gallery-icon" />
            <input type="number" placeholder="Number of tickets" />
          </div>
          <div className="gallery-input-container">
            <FaCommentDots className="gallery-icon" />
            <textarea placeholder="Message"></textarea>
          </div>
          <button type="button" className="gallery-check-btn">
            Check Availability
          </button>
          <button type="submit" className="gallery-book-btn">
            Book Now
          </button>
        </form>
      </div>

      {/* Decorative Section */}
      <div className="gallery-decorative">
        <img src={leafImage} alt="Leaf" className="gallery-leaf" />
        <img src={planeImage} alt="Plane" className="gallery-plane" />
      </div>
    </div>
  );
};

export default Gallery;
