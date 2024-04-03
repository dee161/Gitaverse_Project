import "./AboutTeam.css";
import { instData } from "../../Courses/CourseDetails/Instructors/instData";

const AboutTeam = () => {
  return (
    <div className="about-team-container">
      <h5>Our Team</h5>
      <hr />
      <div className="about-team-content">
        {instData.map((inst) => (
          <div className="about-team-card">
            <img src={inst.instImg} alt={inst.name} />
            <h3>{inst.name}</h3>
            <p>{inst.profession}</p>
            {/* <span>{inst.email}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
