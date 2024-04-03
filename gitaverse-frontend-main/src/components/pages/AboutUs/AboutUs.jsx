import React from "react";
import "./AboutUs.css";
import aboutImg from "/Images/AboutUs/about-cover.png";
import AboutHead from "./AboutHead/AboutHead";
import AboutFeatures from "./AboutFeatures/AboutFeatures";
import AboutTeam from "./AboutTeam/AboutTeam";

const AboutUs = () => {
  return (
    <>
      <div className="about-img">
        <img src={aboutImg} alt="about_us" />
      </div>
      <AboutHead />
      <AboutFeatures />
      <AboutTeam />
    </>
  );
};

export default AboutUs;
