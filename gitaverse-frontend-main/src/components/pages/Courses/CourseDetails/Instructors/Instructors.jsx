import React, { useState } from "react";
import "./Instructors.css";
import InstCard from "./InstCard";
import { instData } from "./instData";

const Instructors = () => {
  const [boxes, setBoxes] = useState(false);

  const handleBox = () => {
    setBoxes(!boxes);
  };

  return (
    <div className="inst-container">
      <h5>Instructors</h5>
      <hr />
      <div className="card-container-inst">
        {instData.map((inst, index) => (
          <div className="" key={index}>
            {index < 3 ? (
              <InstCard
                pic={inst.instImg}
                name={inst.name}
                description={inst.profession}
                mail={inst.email}
              />
            ) : (
              <>
                {boxes === true ? (
                  <InstCard
                    pic={inst.instImg}
                    name={inst.name}
                    description={inst.profession}
                    mail={inst.email}
                  />
                ) : (
                  <></>
                )}
              </>
            )}
          </div>
        ))}
      </div>
      <div className="inst-show-btn">
        <button onClick={handleBox}>
          <h5>{boxes === true ? "show less" : "show more"}</h5>
        </button>
      </div>
    </div>
  );
};

export default Instructors;
