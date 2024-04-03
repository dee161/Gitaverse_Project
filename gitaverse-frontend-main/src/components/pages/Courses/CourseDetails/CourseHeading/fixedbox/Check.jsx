import React from "react";
import check from '/Images/Courses/logos/outcomes/check.svg';

const Check = ({ pt }) => {
  return (
    <div className="outcome-points">
      <img src={check} alt="check" />
      <p>{pt}</p>
    </div>
  );
};

export default Check;
