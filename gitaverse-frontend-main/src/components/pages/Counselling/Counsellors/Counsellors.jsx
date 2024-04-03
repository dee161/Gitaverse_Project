import React from "react";
import { instData } from "../../Courses/CourseDetails/Instructors/instData";
import "./Counsellors.css";

const Counsellors = () => {
  return (
    <div className="about-team-container counsellor-container">
      <h4>Our Counsellors</h4>
      <div className="about-team-content">
        {instData.map((inst, index) => (
          <div className="about-team-card" key={index}>
            <img src={inst.instImg} alt={inst.name} />
            <h3>{inst.name}</h3>
            <p>{inst.profession}</p>
            {/* <span>{inst.email}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counsellors;
