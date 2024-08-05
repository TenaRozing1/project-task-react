import React from "react";
import CustomSelect from "../custom-select/custom-select.component";

const SelectComponent = ({ jobTitles, selectedPosition, onPositionChange }) => (
  <CustomSelect
    options={jobTitles}
    value={selectedPosition}
    onChange={onPositionChange}
    defaultOption="All Positions"
  />
);

export default SelectComponent;
