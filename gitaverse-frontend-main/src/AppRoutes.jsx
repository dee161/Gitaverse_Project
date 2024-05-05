import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/utilities/Header'; // Import your Header component
import Home from './components/pages/Home'; // Import your Home component
import AboutUs from './components/pages/AboutUs'; // Import your AboutUs component
import Courses from './components/pages/Courses'; // Import your Courses component
import Counselling from './components/pages/Counselling'; // Import your Counselling component
import CourseDetails from './components/pages/Courses/CourseDetails/CourseDetails';
import Footer from './components/utilities/Footer/Footer';
import EGurukul from './components/pages/Courses/E_Gurukul/EGurukul';
// import Blog from './components/pages/'; // Import your Blog component

const AppRoutes = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/e-gurukul" element={<EGurukul />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        
        <Route path="/Counselling" element={<Counselling />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

const NotFound = () => {
  return <h1>Page Not Found</h1>;
};

export default AppRoutes;
