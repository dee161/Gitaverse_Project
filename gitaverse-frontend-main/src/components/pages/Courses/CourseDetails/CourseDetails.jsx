import React from "react";
import { useParams } from "react-router-dom";
import "./CourseDetails.css";
import FixedBox from "./CourseHeading/fixedbox/FixedBox";
import RelativeBox from "./CourseHeading/relativebox/RelativeBox";
import { courseData } from "../helper_components/course_section/courseData";
import Instructors from "./Instructors/Instructors";
import Division from "./Divisions/Division";
import Testimonials from "./Testimonials/Testimonials";
import ScrollToTop from "../../../utilities/ScrollToTop/ScrollToTop";

const CourseDetails = () => {
  const { courseId } = useParams();

  const id = courseData.findIndex((course) => {
    return course.courseId === courseId;
  });

  return (
    <>
      <ScrollToTop/>
      <div className="garb">h</div>
      <div className="main-comp">
        <div className="margin-comp">
          <div className="flex-comp">
            <FixedBox title={courseData[id].title} />
            <RelativeBox />
          </div>
        </div>
      </div>
      <Instructors />
      <Division />
      <Testimonials />
    </>
  );
};

export default CourseDetails;
