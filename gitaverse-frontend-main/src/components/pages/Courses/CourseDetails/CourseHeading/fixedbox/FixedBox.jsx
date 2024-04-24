import React, { useState } from "react";
import "./FixedBox.css";
import Check from "./Check";
import certificate from "/Images/Courses/logos/outcomes/certificate-light.svg";
import quiz from "/Images/Courses/logos/outcomes/quiz.svg";
import communication from "/Images/Courses/logos/outcomes/communication.svg";
import Enroll from "./Enroll";
import { courseData } from "../../../helper_components/course_section/courseData";
import { useParams } from "react-router-dom";
import UserAuth from "../../../../../utilities/SignIn/UserAuth";
const FixedBox = ({ title }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const { courseId } = useParams();

  const id = courseData.findIndex((course) => {
    return course.courseId === courseId;
  });

  const openLoginPopup = () => {
    setIsLoginOpen(true);
  };

  const closeLoginPopup = () => {
    setIsLoginOpen(false);
  };

  return (
    <div className="fixed-comp">
      <div className="comp">
        <div className="comp1-1"></div>
        <section className="comp1-section">
          <h1 className="section-header">{title}</h1>
          <h4>
            This Course is the part of <u>GitaVerse Certification</u>
          </h4>
          <h5>
            Instructor: <u>GitaVerse Team</u>
          </h5>
          <button className="enroll-button" onClick={openLoginPopup}>
            <h3>Enroll Now</h3>
          </button>
          <Enroll isOpen={isLoginOpen} onClose={closeLoginPopup} course={title} />
          <UserAuth isOpen={isLoginOpen} onClose={closeLoginPopup} />
          <p>500 already enrolled</p>
        </section>
      </div>
      <div>
        <div className="comp2-2"></div>
        <section className="outcome-section">
          <h5>Outcomes</h5>
          <hr />
          <h3>Build the Basics of your Spirituality</h3>
          <span>
            This course is part of the <u>GitaVerse Certification</u>.
          </span>
          <span>
            When you enroll in this course, you'll also be enrolled in this
            Professional Certificate.
          </span>
          <h4>What you'll learn</h4>
          {courseData[id].outcomes.map((outcome, index) => (
            <Check pt={outcome.point} key={index} />
          ))}
          <h4>Details to know</h4>
          <div className="to-know">
            <div className="to-know-container">
              <img src={certificate} alt="certificate" />
              <p>Sharable Certificate</p>
            </div>
            <div className="to-know-container">
              <img src={communication} alt="communication" />
              <p>English, Hindi</p>
            </div>
            <div className="to-know-container">
              <img src={quiz} alt="quiz" />
              <p>Quizzes and Assignments</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FixedBox;
