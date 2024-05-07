// SelectField.js
import React from "react";

const SelectField = ({
  label,
  name,
  value,
  options,
  onChange,
  required,
  error,
}) => {
  return (
    <div className={`${name} ${error ? "error" : ""}`}>
      <label htmlFor={name}></label>
      <select name={name} value={value} onChange={onChange} required={required}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="error-message">Field is required</p>}
    </div>
  );
};

export default SelectField;
