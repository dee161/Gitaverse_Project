import React from "react";
import "./HomeHeading.css";
import homeImg from "/Images/Home/home-head.jpg";

const HomeHeading = () => {
  return (
    <div className="home-head-container">
      <h2>GitaVerse</h2>
      <span>Teaching Bhagavad Gita Scientifically</span>
      <hr />
      <div className="home-head-content">
        <img src={homeImg} alt="" />
        <div className="">
          <p>
          The Bhagavad Gita offers timeless wisdom transcending cultural and religious boundaries, providing transformation and guidance for all aspects of life. Whether seeking spiritual insight, moral direction, or practical advice, the Gita offers profound teachings, leading individuals toward a purposeful, ethical, and self-discovery-oriented life. GitaVerse, founded by a group of IITians, aims to present the Gita's teachings in a way that resonates with today's youth, emphasizing the compatibility of spirituality and science for a deeper understanding of life's enigmas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeHeading;
