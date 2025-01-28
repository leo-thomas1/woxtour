import React from "react";
import "../../Styles/Aboutus/Trend.css"; // Ensure this file is created
import boxImage from "../../images/AboutUs/boxx.png";
import signImage from "../../images/AboutUs/sign.png";

const Trend = () => {
  // Progress values for each circle
  const stats = [
    { label: "VACATIONS", percent: 78, color: "#5394fd" },
    { label: "HONEYMOON", percent: 55, color: "#ff69b4" },
    { label: "MUSICAL EVENTS", percent: 30, color: "#800080" },
  ];

  return (
    <div className="trend-container">
      <div className="trend-left">
        <div className="image-box">
          <img src={signImage} alt="Signature" className="signature-image" />
        </div>
      </div>
      <div className="trend-right">
        <h4 className="trend-label">TREND</h4>
        <h2 className="trend-title">Our Popular Tour Plans</h2>
        <p className="trend-description">
          Et labore harum non nobis ipsum eum molestias mollitia et corporis
          praesentium a laudantium. Et labore harum non nobis ipsum eum
          molestias mollitia et corporis praesentium a laudantium.
        </p>
        <div className="trend-stats">
          {stats.map((stat, index) => {
            const radius = 115; // Radius of the circle
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (stat.percent / 100) * circumference;

            return (
              <div key={index} className="trend-stat">
                <svg width="250" height="250" viewBox="0 0 250 250">
                  <circle
                    className="bg"
                    cx="125"
                    cy="125"
                    r={radius}
                    fill="none"
                    stroke="#ddd"
                    strokeWidth="20"
                  ></circle>
                  <circle
                    className=  "fg"
                    cx="125"
                    cy="125"
                    r={radius}
                    fill="none"
                    stroke={stat.color}
                    strokeWidth="20"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform="rotate(-90 125 125)"
                  ></circle>
                  <text
                    x="125"
                    y="135"
                    textAnchor="middle"
                    fontSize="24"
                    fontWeight="bold"
                    fill="#333"
                  >
                    {stat.percent}%
                  </text>
                </svg>
                <p className="stat-label">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="trend-left">
        <div className="image-box2">
          <img src={boxImage} alt="Trend Box" className="main-image" />
        </div>
      </div>
    </div>
  );
};

export default Trend;


