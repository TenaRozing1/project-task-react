import React from "react";

const SelectComponent = ({ jobTitles, selectedPosition, onPositionChange }) => (
  <select onChange={onPositionChange} value={selectedPosition}>
    <option value="">All Positions</option>
    {jobTitles.map((jobTitle, index) => (
      <option key={index} value={jobTitle}>
        {jobTitle}
      </option>
    ))}
  </select>
);

export default SelectComponent;
