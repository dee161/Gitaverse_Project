import "./DivAccordion.css";
import SingleDiv from "./SingleDiv";
import { useParams } from "react-router-dom";
import { courseData } from "../../helper_components/course_section/courseData";

const DivAccordion = () => {
  const { courseId } = useParams();

  const id = courseData.findIndex((course) => {
    return course.courseId === courseId;
  });

  return (
    <div className="module-details-container" id="course-modules">
      <div className="div-accordion">
        <section className="div-acc">
          {courseData[id].modules.map((module, index) => (
            <SingleDiv
              key={index}
              ind={index}
              title={module.title}
              details={module.details}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default DivAccordion;
