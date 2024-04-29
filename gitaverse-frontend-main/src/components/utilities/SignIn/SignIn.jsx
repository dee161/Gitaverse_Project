import React, { useState } from "react";
import axios from "axios";
import "./SignIn.css";

const SignIn = ({ onClose }) => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
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
        "https://gitaverse-project-monish-hsvq.vercel.app/postRegister",
        formData
      );
      console.log("Data sent to the server:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }

    alert("Form Submitted Successfully!");

    onClose();

    setFormData({
      phoneNumber: "",
      password: "",
    });

    console.log("Form data:", formData);
  };

  return (
    <>
      <form className="sin-container" onSubmit={handleSubmit}>
        <div className="phone-sin">
          <label htmlFor="phoneNumber" />
          <input
            placeholder="Phone Number"
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            pattern="[6-9][0-9]{9}"
            required
          />
        </div>
        <div className="password-sin">
          <label htmlFor="password" />
          <input
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="sin-button" type="submit">
          SignIn
        </button>
      </form>
      <div>
        <button className="forgot-button">Forgot Password</button>
      </div>
    </>
  );
};

export default SignIn;
