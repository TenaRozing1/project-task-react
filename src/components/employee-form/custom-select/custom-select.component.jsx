import React from "react";
import "./custom-select.styles.scss";

const CustomSelect = ({ options, value, onChange, defaultOption }) => (
  <select className="custom-select" onChange={onChange} value={value}>
    <option value="">{defaultOption}</option>
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default CustomSelect;
