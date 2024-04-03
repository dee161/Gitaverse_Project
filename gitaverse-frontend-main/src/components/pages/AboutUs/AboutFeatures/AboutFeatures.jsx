import React, { useState } from "react";
import "./AboutFeatures.css";
import { aboutData } from "./aboutData";

const AboutFeatures = () => {

  return (
    <div className="about-feature-container">
      <h5>What Sets Us Apart</h5>
      <hr />
      <div className="about-feature">
        {aboutData.map((card) => (
          <div className="about-feature-card">
            <img src={card.aboutImg} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutFeatures;
