import React from "react";
import "./CounsellingFeatures.css";
import { counsellingData } from "../counsellingData.js";
import { Icon } from "@iconify/react";

const CounsellingFeatures = () => {
  return (
    <>
      <div className="coun-feature">
        {counsellingData.map((coun) => (
          <div className="coun-cont" key={coun.counId}>
            <div className="coun-icon">
              <Icon icon={coun.img} height={60} color="#ffffff" />
            </div>
            <div className="coun-feature-card">
              <h6>{coun.title}</h6>
              {coun.points.map((pts, index) => {
                return <li key={index}>{pts.point}</li>;
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CounsellingFeatures;
