import React from "react";
import "../css/about.css";
import ImageWithContainer from "../components/Products/ImageWithContainer";
("../components/Products/ImageWithContainer.jsx");

const About = () => {
  return (
    <div>
      <div className="quienes-somos">
        <h2>Quiénes somos</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Feugiat dignissim eu iaculis
          mauris maecenas felis. Id eget est tellus bibendum sit dolor vitae
          mauris. Velit elementum accumsan est etiam semper suspendisse.Lorem
          ipsum dolor sit amet consectetur. Feugiat dignissim eu iaculis mauris
          maecenas felis. Id eget est tellus bibendum sit dolor vitae mauris.
          Velit elementum accumsan est etiam semper suspendisse.
        </p>
      </div>
      <div>
        <ImageWithContainer />
      </div>
    </div>
  );
};

export default About;
