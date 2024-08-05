import React from "react";
import CustomSelect from "../custom-select/custom-select.component";

const SortComponent = ({ sortField, onSortChange }) => (
  <CustomSelect
    options={["firstName", "lastName", "jobTitle"]}
    value={sortField}
    onChange={onSortChange}
    defaultOption="Sort By"
  />
);

export default SortComponent;
