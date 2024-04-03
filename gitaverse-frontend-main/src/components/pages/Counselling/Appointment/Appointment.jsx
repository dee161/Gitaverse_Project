import React, { useState, useEffect } from "react";
import "./Appointment.css";
import logo from "/Images/logo.png";
import axios from "axios";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    // email: "",
    pinCode: "",
  });

  const [error, setError] = useState({
    nameError: "",
    phoneNumberError: "",
    // emailError: "",
    pinCodeError: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:5000/postAppointment",
        formData
      );
      console.log("Data sent to the server:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }

    alert("Appointment Booked Successfully!");

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
