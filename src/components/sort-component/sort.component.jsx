import React from "react";

const SortComponent = ({ sortField, onSortChange }) => (
  <select onChange={onSortChange} value={sortField}>
    <option value="">Sort By</option>
    <option value="firstName">First Name</option>
    <option value="lastName">Last Name</option>
    <option value="jobTitle">Position</option>
  </select>
);

export default SortComponent;
