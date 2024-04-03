import React from "react";
import "./HomeFeatures.css";
import { homeCardData } from "./homeCardData";
import dotConnect from '/Images/Home/features/dot.svg';

const HomeFeatures = () => {
  const handleDots = (ind) => {
    if(ind == homeCardData.length-1) {
      return 'no-dot';
    }
    else if(ind%2 == 0) {
      return 'dot-rev';
    }
    return '';
  }

  const handleCorner = (ind) => {
    if(ind == homeCardData.length-1) {
      return 'end-curve';
    }
    else if(ind == 0) {
      return 'start-curve';
    }
    return '';
  }

  return (
    <div className="home-features">
      <h2>Why GitaVerse</h2>
      <div className="">
        {homeCardData.map((card, index) => (
          <div key={index}>
            <div className={`home-feature-section ${handleCorner(index)}`}>
              <div
                className={`home-feature-container ${
                  index % 2 == 0 ? "rev" : ""
                }`}
              >
                {index % 2 != 0 && (
                  <div className="home-feature-image">
                    <img src={card.illustration} alt={card.title} />
                  </div>
                )}
                <div className="home-feature-text">
                  <div className="home-feature-heading">
                    <h5>{card.title}</h5>
                  </div>
                  <p>{card.details}</p>
                </div>
                {index % 2 == 0 && (
                  <div className="home-feature-image">
                    <img src={card.illustration} alt={card.title} />
                  </div>
                )}
              </div>
            </div>
            <img src={dotConnect} alt="dot" className={`home-dot ${handleDots(index)}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFeatures;
