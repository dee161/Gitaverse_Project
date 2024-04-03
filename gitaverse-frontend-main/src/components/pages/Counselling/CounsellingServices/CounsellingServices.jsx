import React, { useState } from 'react'
import ServiceCard from './ServiceCard'
import { servicesData } from '../counsellingData.js'
import './CounsellingServices.css';

const CounsellingServices = () => {
  const [boxes, setBoxes] = useState(false);

  const handleBox = () => {
    setBoxes(!boxes);
  };

  return (
    <div className="coun-service-container">
      <h4>Counselling Services</h4>
      <div className="card-container-coun-service">
        {servicesData.map((inst, index) => (
          <div key={index}>
            {index < 3 ? (
              <ServiceCard
                pic={inst.img}
                name={inst.title}
                // description={inst.profession}
              />
            ) : (
              <>
                {boxes === true ? (
                  <ServiceCard
                    pic={inst.img}
                    name={inst.title}
                    // description={inst.profession}
                  />
                ) : (
                  <></>
                )}
              </>
            )}
          </div>
        ))}
      </div>
      {/* <div className="inst-show-btn">
        <button onClick={handleBox}>
          <h5>{boxes === true ? "show less" : "show more"}</h5>
        </button>
      </div> */}
    </div>
  )
}

export default CounsellingServices