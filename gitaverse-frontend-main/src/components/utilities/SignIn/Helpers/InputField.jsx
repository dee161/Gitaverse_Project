// InputField.js
import React from "react";

const InputField = ({ label, name, type, value, onChange, required, error }) => {
  return (
    <div className={`${name} ${error ? 'error' : ''}`}>
      <label htmlFor={name}></label>
      <input
        placeholder={label}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
      {error && <p className="error-message">Field is required</p>}
    </div>
  );
};

export default InputField;
