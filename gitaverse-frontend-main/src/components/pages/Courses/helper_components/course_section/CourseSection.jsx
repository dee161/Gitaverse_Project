import React from "react";
import { courseData } from "./courseData";
import CourseCard from "./CourseCard";
import "./CourseSection.css";

import egurukul from "/Images/Home/carousels/E-Gurukul.png";
import { useNavigate } from "react-router-dom";

const CourseSection = () => {
  const navigate = useNavigate();

  return (
    <div className="course-section">
      <div className="head-courses">
        <h1 className="heading-courses">Courses</h1>
      </div>

      <div>
        {courseData.map((course) => (
          <CourseCard
            key={course.courseId}
            cid={course.courseId}
            imageSrc={course.imageSrc}
            title={course.title}
            details={course.details}
          />
        ))}

        <div className="rounded-section">
          <div className="content-container-section">
            <div className="image-container-section">
              <img src={egurukul} alt="E-Gurukul" />
            </div>
            <div className="text-container-section">
              <div className="section-heading">
                <h1>E-Gurukul</h1>
              </div>
              <p>E Gurukul for Kids is an educational concept inspired by the Bhagavad Gita, aiming to teach children essential life lessons and values from this ancient scripture. It uses interactive and age-appropriate methods, focusing on moral development, yoga, and meditation, while also promoting cultural awareness and parental involvement. This platform fosters holistic growth in children, respecting diverse beliefs.</p>

              <div className="button-container-section">
                <button className="explore-button" onClick={() => navigate(`/courses/e-gurukul`)}>
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
