import React from "react";
import counImg from "/Images/Counselling/counselling.jpg";
import "./Counselling.css";
import CounsellingFeatures from "./CounsellingFeatures/CounsellingFeatures";
import CounsellingServices from "./CounsellingServices/CounsellingServices";
import Counsellors from "./Counsellors/Counsellors";
import Appointment from "./Appointment/Appointment";

const Counselling = () => {
  return (
    <>
      <a href="#appointment" className="counselling-heading">
        <img className="counselling-img" src={counImg} alt="counselling" />
        <h1>Book An Appointment</h1>
      </a>
      <CounsellingFeatures />
      <CounsellingServices />
      <Counsellors />
      <Appointment />
    </>
  );
};

export default Counselling;
