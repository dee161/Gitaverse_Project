import React, { useState } from "react";
import "./CourseCard.css";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ cid, imageSrc, title, details }) => {
  // const { courseId } = useParams();
  const navigate = useNavigate();

  const handleButtonClick = () => navigate(`/courses/${cid}`)

  return (
    <div className="rounded-section">
      <div className="content-container-section">
        <div className="image-container-section">
          <img src={imageSrc} alt={title} />
        </div>
        <div className="text-container-section">
          <div className="section-heading">
            <h1>{title}</h1>
          </div>
          <p>{details}</p>

            <div className="button-container-section">
              <button className="explore-button" onClick={handleButtonClick}>Explore</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
