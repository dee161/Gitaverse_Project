import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link from React Router
import "./Footer.css";
import insta from "/Images/Footer/insta.svg";
import mail from "/Images/Footer/mail-outline.svg";
import phone from "/Images/Footer/phone.svg";
import logo from "/Images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="about-footer">
        <img src={logo} alt="logo" />
        
      </div> */}
      <div className="footer__contact">
        <h2>Contact Us</h2>
        <p>
          <img src={mail} alt="" />
          gitaverse77@gmail.com
        </p>
        <p>
          <img src={phone} alt="" />
          7412879735
        </p>
      </div>
      <div className="footer__courses">
        <h2>Our Courses</h2>
        <ul>
          <li>
            <Link to="/courses/course1">Understanding God from Science</Link>
          </li>
          <li>
            <Link to="/courses/course2">Introduction to Bhagavad Gita</Link>
          </li>
          {/* Add more courses as needed */}
        </ul>
      </div>
      <div className="footer__social">
        <Link to="https://www.instagram.com/thegitaverse/?igshid=NTc4MTIwNjQ2YQ%3D%3D">
          <img src={insta} alt="insta" />
        </Link>
        <p>Instagram</p>
      </div>
    </footer>
  );
};

export default Footer;
