import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ pic, name }) => {
  return (
    <div className="coun-service-card">
      <div>
        <img className="coun-service-card-image" src={pic} alt={name} />
      </div>
      <h3 className="coun-service-card-title">{name}</h3>
      {/* <span>{mail}</span> */}
    </div>
  )
}

export default ServiceCard;