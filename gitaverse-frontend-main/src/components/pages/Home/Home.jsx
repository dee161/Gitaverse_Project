import React from 'react'
import HomeCarousel from './home_helper/HomeCarousel/HomeCarousel';
import './Home.css';
import HomeHeading from './home_helper/HomeHeading/HomeHeading';
import HomeFeatures from './home_helper/HomeFeatures/HomeFeatures';
import HomeCourse from './home_helper/HomeCourse/HomeCourse';

const Home = () => {
  return (
    <>
      <div className="h-garb">h</div>
      <HomeCarousel />
      <HomeHeading />
      <HomeFeatures />
      <HomeCourse />
    </>
  )
}

export default Home;