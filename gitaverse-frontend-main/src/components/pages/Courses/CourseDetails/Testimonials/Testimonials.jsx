import React, { useState } from "react";
import "./Testimonials.css"; // Create a CSS file for styling
import { testimonialData } from "./testimonialData";
import prev from '/Images/Courses/logos/testimonials/arrow-back.svg';
import next from '/Images/Courses/logos/testimonials/arrow-forward.svg';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonialData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonialData.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="testimonial-container">
      <h5>Testimonials</h5>
      <hr />
      <div className="testimonial-carousel">
        <button className="carousel-button prev" onClick={prevSlide}>
          <img src={prev} alt="prev" />
        </button>

        <div className="testimonial-section">
          <div className="content-container-testimonial">
            <div className="image-container-testimonial">
              <img src={testimonialData[currentSlide].testImg} alt={testimonialData[currentSlide].testImg} />
              <h6>{testimonialData[currentSlide].author}</h6>
            </div>
            <div className="text-container-testimonial">
              <p>{testimonialData[currentSlide].text}</p>
            </div>
          </div>
        </div>

        <button className="carousel-button next" onClick={nextSlide}>
          <img src={next} alt="next" />
        </button>
        
      </div>
    </div>
  );
};

export default Testimonials;
