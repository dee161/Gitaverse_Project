import React from 'react';
import './InstCard.css';

const InstCard = ({ pic, name, description, mail }) => {
  return (
    <div className="inst-card">
      <div>
        <img className="inst-card-image" src={pic} alt={name} />
      </div>
      <h3 className="inst-card-title">{name}</h3>
      <p className="inst-card-description">{description}</p>
      {/* <span>{mail}</span> */}
    </div>
  )
}

export default InstCard;