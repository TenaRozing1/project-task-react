import React, { useEffect, useState } from "react";
import axios from "axios";
import CardList from "../employees/employees.component";
import SearchBox from "../search-box/search-box.component";
import SelectComponent from "../select-component/select.component";
import SortComponent from "../sort-component/sort.component";
import Pagination from "../pagination.component/pagination.component";
import "./homepage.styles.scss";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [jobTitles, setJobTitles] = useState([]);
  const [sortField, setSortField] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(5);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("hr-HR", options);
  };

  useEffect(() => {
    axios
      .get("/paganini/api/job-interview/employees")
      .then((response) => {
        const employeesData = response.data.data.map((employee) => ({
          ...employee,
          dateOfBirth: formatDate(employee.dateOfBirth),
        }));
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

    setFilteredEmployees(sortedEmployees);
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

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="home-container">
      <h1 data-aos="fade-up" className="home-title">
        EMPLOYEES LIST
      </h1>
      <div data-aos="fade-down" className="filters-container">
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search employees"
          className="search-box"
        />
        <SelectComponent
          jobTitles={jobTitles}
          selectedPosition={selectedPosition}
          onPositionChange={onPositionChange}
        />
        <SortComponent sortField={sortField} onSortChange={onSortChange} />
      </div>
      <div data-aos="fade-up">
        <CardList employees={currentEmployees} />
      </div>
      <Pagination
        employeesPerPage={employeesPerPage}
        totalEmployees={filteredEmployees.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Home;
