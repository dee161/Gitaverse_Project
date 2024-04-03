import React from "react";
import aboutHead from "/Images/AboutUs/about-us-main.avif";
import "./AboutHead.css";

const AboutHead = () => {
  return (
    <div className="about-head-container">
      <h2>Science + Scripture</h2>
      <span>Science beyond matter</span>
      <hr />
      <div className="about-head-content">
        <p>
          GitaVerse is a group of IIT graduates who have come together with a
          single goal in mind, to deeply engage the young people of today's
          generation with the profound wisdom of the Bhagavad Gita. Our core
          belief is that spirituality and science aligns harmoniously, paving
          the way for a comprehensive grasp of the enigmas that life presents.
        </p>
        <img src={aboutHead} alt="" />
      </div>
    </div>
  );
};

export default AboutHead;
