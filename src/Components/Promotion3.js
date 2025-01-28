import React from "react";
import "../Styles/Promotion3.css"; // Import the corresponding CSS
import decorImage from "../images/promotions/decor.png"; // Bottom-left decorative image
import userImage from "../images/promotions/user.jpg"; // User testimonial image
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import React Icons for arrows


const Promotion3 = () => {
  return (
    <div className="promotion3-section">
      {/* Background Decor Element */}
      <img src={decorImage} alt="Decor" className="promotion3-decor" />

      {/* Content Area */}
      <div className="promotion3-content">
        <p className="promotion3-label">PROMOTION</p>
        <h2 className="promotion3-heading">
          See What Our Clients Say<br /> About Us
        </h2>
        <div className="promotion3-testimonial">
          <img src={userImage} alt="User" className="testimonial-user" />
          <blockquote className="testimonial-quote">
            <p>
              "Voluptas dolor et illo aut eligendi ullam non laudantium magnam
              et recusandae molestiae iste unde aut voluptate quaerat. Ut sunt
              praesentium quas possimus impedit vel doloremque obcaecati qui
              ullam consectetur et ipsam omnis."
            </p>
            <cite>Christina Benson - Designer</cite>
          </blockquote>
        </div>
        <div className="testimonial-arrows">
          <button className="arrow left-arrow">
            <FaArrowLeft />
          </button>
          <button className="arrow right-arrow">
            <FaArrowRight />
          </button>
        </div>
        <hr style={{width:"10%",border:"2px solid orange"}}></hr>
      </div>
    </div>
  );
};

export default Promotion3;
