import "@coreui/coreui/dist/css/coreui.min.css";
import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "/Images/Home/carousels/carousel1.png",
    route: "/courses/course1",
  },
  {
    image: "/Images/Home/carousels/carousel2.jpg",
    route: "/courses/course2",
  },
  {
    image: "/Images/Home/carousels/E-Gurukul.png",
    route: "/courses/e-gurukul",
  }
];

const HomeCarousel = () => {
  return (
    <CCarousel controls indicators>
      {slides.map((slide, index) => (
        <CCarouselItem key={index}>
          <Link to={slide.route}>
            <CImage className="d-block w-100" src={slide.image} alt="slide 1" />
          </Link>
        </CCarouselItem>
      ))}
    </CCarousel>
  );
};

export default HomeCarousel;
