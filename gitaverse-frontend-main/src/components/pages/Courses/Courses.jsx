import React from "react";
import courses from "/Images/Courses/course-cover.png";
import "./Courses.css";
import Card from "./helper_components/features/Card";
import CourseSection from "./helper_components/course_section/CourseSection";
import ScrollToTop from "../../utilities/ScrollToTop/ScrollToTop";
// import FAQ from "./helper_components/course_faq/FAQ";

const Courses = () => {
  return (
    <>
      <ScrollToTop />
      <img src={courses} alt="courses_poster" className="poster" />
      <Card />
      <CourseSection />
      {/* <FAQ /> */}
    </>
  );
};

export default Courses;