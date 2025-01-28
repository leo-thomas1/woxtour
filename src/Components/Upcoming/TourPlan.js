import React from "react";
import "../../Styles/Upcoming/TourPlan.css";
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaTicketAlt, FaCommentDots } from "react-icons/fa";
import planeImage from "../../images/Upcomigp/Plane_Phone.jpg";

const TourPlan = () => {
  const tourPlans = [
    {
      day: 1,
      title: "Day 1: Departure",
      description: "Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et Voluptates Officia Sed Molestiae Sint Et Voluptas Quos.",
      inclusions: ["5 Star Accommodation", "Breakfast","5 Star Accommodation",""],
    },
    {
      day: 2,
      title: "Day 2: Visiting Zurich, Geneva And Zermatt",
      description: "Donec Quam Felis, Ultricies Nec, Pellentesque Eu, Pretium Quis, Sem. Nulla Consequat Massa Quis Enim.",
      inclusions: ["5 Star Accommodation", "Breakfast"],
    },
    {
      day: 3,
      title: "Day 3: Rest",
      description: "Donec Quam Felis, Ultricies Nec, Pellentesque Eu, Pretium Quis, Sem. Nulla Consequat Massa Quis Enim.",
      inclusions: ["5 Star Accommodation", "Breakfast"],
    },
    {
      day: 4,
      title: "Day 4: Historical Tour",
      description: "Donec Quam Felis, Ultricies Nec, Pellentesque Eu, Pretium Quis, Sem. Nulla Consequat Massa Quis Enim.",
      inclusions: ["5 Star Accommodation", "Breakfast"],
    },
    {
      day: 5,
      title: "Day 5: Return",
      description: "Donec Quam Felis, Ultricies Nec, Pellentesque Eu, Pretium Quis, Sem. Nulla Consequat Massa Quis Enim.",
      inclusions: [],
    },
  ];

  return (
    <div className="tour-plan-container">
      {/* Left Section: Tour Plan */}
      <div className="tour-plan-left">
        <h2 className="tour-plan-title">Tour Plan</h2>
        <div className="tour-plan-timeline">
          {tourPlans.map((plan, index) => (
            <div key={index} className="tour-plan-item">
              <div className="tour-plan-day">
                <span>{plan.day < 10 ? `0${plan.day}` : plan.day}</span>
              </div>
              <div className="tour-plan-content">
                <h3>{plan.title}</h3>
                <p>{plan.description}</p>
                <ul>
                  {plan.inclusions.map((inclusion, idx) => (
                    <li key={idx}>{inclusion}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
            <div className="tour-plan-right">
              <h3>Book This Tour</h3>
              <form className="tour-plan-form">
                <div className="tour-plan-input-container">
                  <FaUser className="tour-plan-icon" />
                  <input type="text" placeholder="Name" />
                </div>
                <div className="tour-plan-input-container">
                  <FaEnvelope className="tour-plan-icon" />
                  <input type="email" placeholder="Email" />
                </div>
                <div className="tour-plan-input-container">
                  <FaEnvelope className="tour-plan-icon" />
                  <input type="email" placeholder="Confirm Email" />
                </div>
                <div className="tour-plan-input-container">
                  <FaPhone className="tour-plan-icon" />
                  <input type="tel" placeholder="Phone" />
                </div>
                <div className="tour-plan-input-container">
                  <FaCalendarAlt className="tour-plan-icon" />
                  <input type="date" />
                </div>
                <div className="tour-plan-input-container">
                  <FaTicketAlt className="tour-plan-icon" />
                  <input type="number" placeholder="Number of tickets" />
                </div>
                <div className="tour-plan-input-container">
                  <FaCommentDots className="tour-plan-icon" />
                  <textarea placeholder="Message"></textarea>
                </div>
                <button type="button" className="tour-plan-check-btn">
                  Check Availability
                </button>
                <button type="submit" className="tour-plan-book-btn">
                  Book Now
                </button>
              </form>
            </div>

      

      {/* Plane Image */}
      <div className="tour-plan-plane-image">
        <img src={planeImage} alt="Plane" />
      </div>
    </div>
  );
};

export default TourPlan;
