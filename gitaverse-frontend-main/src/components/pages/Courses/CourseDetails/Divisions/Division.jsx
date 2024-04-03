import React from 'react'
import './Division.css';
import DivAccordion from './DivAccordion';
import { useParams } from 'react-router-dom';
import { courseData } from '../../helper_components/course_section/courseData';

const Division = () => {
  const { courseId } = useParams();

  const id = courseData.findIndex((course) => {
    return course.courseId === courseId;
  });

  return (
    <div className="module-container">
      <h5>Modules</h5>
      <hr />
      <div className="module-head">
        <h3>There are 6 modules in this course</h3>
        <p>{courseData[id].description}</p>
      </div>
      <DivAccordion />
    </div>
  )
}

export default Division;