import React, { useState, useEffect } from "react";
import "./Appointment.css";
import logo from "/Images/logo.png";
import axios from "axios";
import { validateName, validatePhoneNumber,validatePinCode } from "../../../utilities/SignIn/Helpers/RegisterValidation";
const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    // email: "",
    pinCode: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phoneNumber: "",
    // emailError: "",
    pinCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let fieldError = "";
    switch (name) {
      case "name":
        fieldError = validateName(value);
        break;
      case "phoneNumber":
        fieldError = validatePhoneNumber(value);
        break;
    
      case "pinCode":
        fieldError = validatePinCode(value);
        break;
      
      default:
        break;
    }

    console.log(errors);

    setErrors({ ...errors, [name]: fieldError });



    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      alert("Please fix the validation errors before submitting.");
    } else {
    try {
      const response = await axios.post(
        //http://localhost:5000/
        "https://gitaverse-project-monish-hsvq.vercel.app/postAppointment",
        formData
      );
      console.log("Data sent to the server:", response.data);
      alert("Appointment Booked Successfully!");
      setFormData({
        name: "",
        phoneNumber: "",
        pinCode: "",
        
      });
    } catch (error) {
      console.error("Error sending data:", error);
    }
  }
    

    setFormData({
      name: "",
      phoneNumber: "",
      // email: "",
      pinCode: "",
    });

    console.log("Form data:", formData);
  };

  return (
    <div className={`appointment-container`} id="appointment">
      <div className="appointment-content">
        {/* <img src={logo} alt="logo" className="reg-logo" /> */}
        <h4>Book an Appointment</h4>
        <p>Your journey to healing begins with this appointment. We're here to support you every step of the way.</p>
        <form onSubmit={handleSubmit}>
          <div className="name">
            <label htmlFor="name" />
            <input
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              pattern="[A-Za-z ]+"
              required
            />
            {errors.name != "" && <p className="error-message">{errors.name}</p>}
          </div>
          <div className="phone">
            <label htmlFor="phoneNumber" />
            <input
              placeholder="Phone Number"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              pattern="[0-9]{10}"
              required
            />
            {errors.phoneNumber != "" && (
        <p className="error-message">{errors.phoneNumber}</p>
      )}
          </div>
          {/* <div className="mail">
            <label htmlFor="email" />
            <input
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              // required
            />
          </div> */}
          <div className="pin-code">
            <label htmlFor="pinCode" />
            <input
              placeholder="Pin Code"
              type="text"
              id="pinCode"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              pattern="[0-9]{6}"
              required
            />
            <p className="error-message">{errors.pinCode}</p>
          </div>
          <div className="appointment-button">
            <button type="submit">Book an Appointment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
