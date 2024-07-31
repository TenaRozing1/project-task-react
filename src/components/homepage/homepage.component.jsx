import React, { useEffect, useState } from "react";
import axios from "axios";
import CardList from "../employees/employees.component";
import SearchBox from "../search-box/search-box.component";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [jobTitles, setJobTitles] = useState([]);

  useEffect(() => {
    axios
      .get("/paganini/api/job-interview/employees")
      .then((response) => {
        const employeesData = response.data.data;
        setEmployees(employeesData);
        setFilteredEmployees(employeesData);

        const uniqueJobTitles = [
          ...new Set(employeesData.map((employee) => employee.jobTitle)),
        ];
        setJobTitles(uniqueJobTitles);
        console.log(uniqueJobTitles)
      })
      .catch((error) => {
        console.error("Error fetching the employees!", error);
      });
  }, []);

  useEffect(() => {
    const newFilteredEmployees = employees.filter((employee) => {
      const matchesSearch =
        employee.firstName.toLowerCase().includes(searchField) ||
        employee.lastName.toLowerCase().includes(searchField);
      const matchesPosition = selectedPosition
        ? employee.jobTitle === selectedPosition
        : true;
      return matchesSearch && matchesPosition;
    });
    setFilteredEmployees(newFilteredEmployees);
  }, [employees, searchField, selectedPosition]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const onPositionChange = (event) => {
    const position = event.target.value;
    setSelectedPosition(position);
  };

  return (
    <div>
      <h1>Employees</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search employees"
        className=""
      />
      <select onChange={onPositionChange} value={selectedPosition}>
        <option value="">All Positions</option>
        {jobTitles.map((jobTitle, index) => (
          <option key={index} value={jobTitle}>
            {jobTitle}
          </option>
        ))}
      </select>
      <CardList employees={filteredEmployees} />
    </div>
  );
};

export default Home;
