import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import InputField from "./Helpers/InputField";
import SelectField from "./Helpers/SelectField";
import {
  validateAge,
  validateConfirmPassword,
  validateCourse,
  validateCurrentStatus,
  validateEmail,
  validateGender,
  validateName,
  validatePassword,
  validatePhoneNumber,
  validatePinCode,
  validateReferralSource,
} from "./Helpers/RegisterValidation";

const Register = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    gender: "",
    password: "",
    cpassword: "",
    age: "",
    pinCode: "",
    currentStatus: "",
    referralSource: "",
    course: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    cpassword: "",
    gender: "",
    age: "",
    pinCode: "",
    currentStatus: "",
    referralSource: "",
    course: "",
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
      case "email":
        fieldError = validateEmail(value);
        break;
      case "password":
        fieldError = validatePassword(value);
        break;
      case "cpassword":
        fieldError = validateConfirmPassword(value, formData.password);
        break;
      case "age":
        fieldError = validateAge(value);
        break;
      case "pinCode":
        fieldError = validatePinCode(value);
        break;
      case "currentStatus":
        fieldError = validateCurrentStatus(value);
        break;
      case "referralSource":
        fieldError = validateReferralSource(value);
        break;
      case "course":
        fieldError = validateCourse(value);
        break;
      case "gender":
        fieldError = validateGender(value);
        break;
      default:
        break;
    }

    console.log(errors);

    setErrors({ ...errors, [name]: fieldError });

    // Update the form data
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
          "http://localhost:5000/postRegister",
          formData
        );
        console.log("Data sent to the server:", response.data);
        alert("Form Submitted Successfully!");
        onClose();
        setFormData({
          name: "",
          phoneNumber: "",
          email: "",
          password: "",
          cpassword: "",
          gender: "",
          age: "",
          pinCode: "",
          currentStatus: "",
          referralSource: "",
          course: "",
        });
      } catch (error) {
        console.error("Error sending data:", error);
      }
    }

    console.log("Form data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        required
      />
      {errors.name != "" && <p className="error-message">{errors.name}</p>}

      <InputField
        label="Phone Number"
        name="phoneNumber"
        type="tel"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />
      {errors.phoneNumber != "" && (
        <p className="error-message">{errors.phoneNumber}</p>
      )}

      <InputField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <p className="error-message">{errors.password}</p>

      <InputField
        label="Confirm Password"
        name="cpassword"
        type="password"
        value={formData.cpassword}
        onChange={handleChange}
        required
      />
      <p className="error-message">{errors.cpassword}</p>

      <InputField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <p className="error-message">{errors.email}</p>

      <SelectField
        label="Courses"
        name="course"
        value={formData.course}
        options={[
          { label: "Course", value: "" },
          { label: "Understanding God from Science", value: "student" },
          { label: "Introduction to Bhagavad Gita", value: "profession" },
        ]}
        onChange={handleChange}
        required
      />
      <p className="error-message">{errors.course}</p>

      <SelectField
        label="Where You Heard of Us"
        name="referralSource"
        value={formData.referralSource}
        options={[
          { label: "Where You Heard of Us", value: "" },
          { label: "Friend", value: "Friend" },
          { label: "Instagram", value: "Instagram" },
          { label: "Website", value: "website" },
          { label: "YouTube", value: "YouTube" },
          { label: "Others", value: "Others" },
        ]}
        onChange={handleChange}
        required
      />
      <p className="error-message">{errors.referralSource}</p>

      <div className="gender-desig">
        <SelectField
          label="Designation"
          name="currentStatus"
          value={formData.currentStatus}
          options={[
            { label: "Designation", value: "" },
            { label: "Student", value: "student" },
            { label: "Job", value: "profession" },
          ]}
          onChange={handleChange}
          required
        />
        <p className="error-message">{errors.currentStatus}</p>

        <SelectField
          label="Gender"
          name="gender"
          value={formData.gender}
          options={[
            { label: "Gender", value: "" },
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Prefer not to say", value: "prefer not to say" },
          ]}
          onChange={handleChange}
          required
        />
        <p className="error-message">{errors.gender}</p>
      </div>

      <div className="age-pin">
        <InputField
          label="Pin Code"
          name="pinCode"
          type="number"
          value={formData.pinCode}
          onChange={handleChange}
          required
        />
        <p className="error-message">{errors.pinCode}</p>

        <InputField
          label="Age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <p className="error-message">{errors.age}</p>
      </div>
      <button className="signup-button" type="submit">
        Register
      </button>
    </form>
  );
};

export default Register;
