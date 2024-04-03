import React, { useState, useEffect } from "react";
import "./UserAuth.css";
import logo from "/Images/logo.png";
import arrowRight from "/Images/SignIn/arrow-right.svg";
// import axios from "axios";
import Register from "./Register";
import SignIn from "./SignIn";

const UserAuth = ({ isOpen, onClose }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  useEffect(() => {
    // Add an event listener to close the popup when clicking outside of popup-content
    const closeOnOutsideClick = (e) => {
      if (isOpen && e.target.className === "login-popup open") {
        onClose();
      }
    };

    window.addEventListener("click", closeOnOutsideClick);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("click", closeOnOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`login-popup ${isOpen ? "open" : ""}`}>
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="signin-head">
          <h5>Register</h5>
          {/* {isSignIn ? (
            <h5>Register</h5>
            ) : (
            <h5>SignIn</h5>
          )} */}
          <img src={logo} alt="logo" className="reg-logo" />
        </div>
        {isSignIn ? (
          <>
            <Register onClose={onClose} />
          </>
        ) : (
          <>
            {/* <SignIn onClose={onClose} /> */}
          </>
        )}
        {/* <span className="toggle-signin">
          Already have an account?{" "}
          {isSignIn ? (
            <button className="auth-toggle-button" onClick={toggleSignIn}>SignIn <img src={arrowRight} alt="" /></button>
          ) : (
            <button className="auth-toggle-button" onClick={toggleSignIn}>Register <img src={arrowRight} alt="" /></button>
          )}
        </span> */}
      </div>
    </div>
  );
};

export default UserAuth;
