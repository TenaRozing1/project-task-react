import React from "react";
import "./input-component.styles.scss";

const InputComponent = ({ className, type, placeholder, value, onChange, id, required }) => (
  <input
    className={`input-component ${className}`}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    id={id}
    required={required}
  />
);

export default InputComponent;
