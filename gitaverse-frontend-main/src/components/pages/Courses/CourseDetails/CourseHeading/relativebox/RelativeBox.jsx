import React from "react";
import "./RelativeBox.css";
// import {anck}
import { courseData } from "../../../helper_components/course_section/courseData";
import { useParams } from "react-router-dom";

const RelativeBox = () => {
  const { courseId } = useParams();

  const id = courseData.findIndex((course) => {
    return course.courseId === courseId;
  });

  return (
    <div className="rel-comp">
      <div className="sticky-comp">
        <div className="details-container">
          <div className="top-level">
            <h3>Course</h3>
            <h6>Gain insights about the course</h6>
          </div>
          <hr />
          <div className="mid-level">
            <h4>{courseData[id].level}</h4>
            <p>{courseData[id].prerequisite}</p>

            {/* <h4>15 Hours (approximately)</h4> */}

            <h4 style={{ paddingTop: "16px" }}>Live Sessions</h4>
            <p>Instructor - Participants interaction</p>
          </div>
          <hr />
          <div className="bottom-level">
            <a href="#course-modules">
              <h6>View Modules</h6>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelativeBox;
