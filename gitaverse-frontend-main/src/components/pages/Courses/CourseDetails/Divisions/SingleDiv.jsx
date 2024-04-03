import { useState } from "react";
import React from "react";
import "./SingleDiv.css";
import dot from "/Images/Courses/logos/division/dot.svg";
import meet from "/Images/Courses/logos/division/meet.svg";
import reading from "/Images/Courses/logos/division/reading.svg";
import quiz from "/Images/Courses/logos/outcomes/quiz.svg";

const SingleDiv = ({ ind, title, details }) => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div className="module-wrapper">
      <div className="single-module">
        <div>
          <h5>{title}</h5>
          <div className="module-duration">
            <span>week {ind}</span>
            <img src={dot} alt="" />
            <span>module {ind}</span>
            <img src={dot} alt="" />
            <span>90 minutes to complete</span>
          </div>
        </div>
        <button onClick={handleClick}>
          <svg
            className={isActive ? "active-icon" : ""}
            viewBox="0 0 320 512"
            width="100"
            title="angle-down"
          >
            <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
          </svg>
        </button>
      </div>
      <div
        className={isActive ? "module-details active-mod" : "module-details"}
      >
        {details}
        <p>What's Included</p>
        <div className="module-detail-wrapper">
          <section>
            <img src={meet} alt="" />
            <span>Live Sessions</span>
          </section>
          <section>
            <img src={reading} alt="" />
            <span>Reading</span>
          </section>
          <section>
            <img src={quiz} alt="" />
            <span>quiz</span>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SingleDiv;
