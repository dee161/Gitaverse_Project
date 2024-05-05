import React, { useState } from "react";
import "./HomeCourse.css";
import { courseData } from "../../../Courses/helper_components/course_section/courseData";
import { Link, useNavigate } from "react-router-dom";
import egurukul from "/Images/Home/carousels/E-Gurukul.png";

const HomeCourse = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => navigate(`/courses`);

  return (
    <div className="home-course-container">
      <h2>Courses</h2>
      <div className="home-course">
        {courseData.map((card, index) => (
          <Link to={card.route} key={index}>
            <div className="home-course-card">
              <img src={card.imageSrc} alt={card.title} />
              <h3>{card.title}</h3>
            </div>
          </Link>
        ))}
        <Link to="/courses/e-gurukul">
          <div className="home-course-card">
            <img src={egurukul} alt="E-Gurukul" />
            <h3>E-Gurukul (Coming Soon)</h3>
          </div>
        </Link>
      </div>
      <div className="button-home-course">
        <button onClick={handleButtonClick}>All Courses</button>
      </div>
    </div>
  );
};

export default HomeCourse;
