import React from "react";
import "../../Styles/Aboutus/International.css";

import im1 from "../../images/AboutUs/im1.png";
import im2 from "../../images/AboutUs/im2.png";
import im3 from "../../images/AboutUs/im3.jpg";
import im4 from "../../images/AboutUs/im4.png";
import im5 from "../../images/AboutUs/im5.png";
import im6 from "../../images/AboutUs/im6.png";
import im7 from "../../images/AboutUs/im7.webp";
import im8 from "../../images/AboutUs/im8.jpg";
import im9 from "../../images/AboutUs/im9.png";
import im10 from "../../images/AboutUs/im10.jpg";
import im11 from "../../images/AboutUs/im11.jpg";

const International = () => {
  const packages = [
    { image: im1, title: "Barcelona", price: "$840", className: "im1" },
    { image: im2, title: "Switzerland", price: "$840", className: "im2" },
    { image: im3, title: "Rio de Janeiro", price: "$840", className: "im3" },
    { image: im4, title: "Barcelona", price: "$840", className: "im4" },
    { image: im5, title: "Tomorrow Land", price: "$840", className: "im5" },
    { image: im6, title: "Los Angeles", price: "$840", className: "im6" },
    { image: im7, title: "India", price: "$840", className: "im7" },
    { image: im8, title: "Barcelona", price: "$840", className: "im8" },
    { image: im9, title: "Maldives", price: "$840", className: "im9" },
    { image: im10, title: "Barcelona", price: "$840", className: "im10" },
    { image: im11, title: "Pakistan", price: "$840", className: "im11" },
  ];

  return (
    <div className="international-container">
      <h2 className="section-title">Our International Packages</h2>
      <div className="image-grid">
        {packages.map((pkg, index) => (
          <div key={index} className={`grid-item ${pkg.className}`}>
            <img src={pkg.image} alt={pkg.title} />
            <div className="overlay">
              <div className="package-title">{pkg.title}</div>
              <div className="package-price">{pkg.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default International;
