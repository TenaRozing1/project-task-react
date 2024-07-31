import React, { useEffect, useState } from "react";
import axios from "axios";
import CardList from "../employees/employees.component";
import SearchBox from "../search-box/search-box.component";
import SelectComponent from "../select-component/select.component";
import SortComponent from "../sort-component/sort.component";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [jobTitles, setJobTitles] = useState([]);
  const [sortField, setSortField] = useState("");
  

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

    const sortedEmployees = newFilteredEmployees.sort((a, b) => {
      if (!sortField) return 0;
      if (a[sortField] < b[sortField]) return -1;
      if (a[sortField] > b[sortField]) return 1;
      return 0;
    });

    setFilteredEmployees(newFilteredEmployees);
  }, [employees, searchField, selectedPosition, sortField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const onPositionChange = (event) => {
    const position = event.target.value;
    setSelectedPosition(position);
  };

  const onSortChange = (event) => {
    const sortFieldString = event.target.value;
    setSortField(sortFieldString);
  };

  return (
    <div>
      <h1>Employees</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search employees"
        className=""
      />
      <SelectComponent
        jobTitles={jobTitles}
        selectedPosition={selectedPosition}
        onPositionChange={onPositionChange}
      />
      <SortComponent sortField={sortField} onSortChange={onSortChange} />
      <CardList employees={filteredEmployees} />
    </div>
  );
};

export default Home;
