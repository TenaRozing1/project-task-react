import React, { useEffect, useState } from "react";
import axios from "axios";
import CardList from "../employees/employees.component";

const Home = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("/paganini/api/job-interview/employees")
      .then((response) => {
        setEmployees(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching the employees!", error);
      });
  }, []);

  return (
    <div>
      <h1>Employees</h1>
      <CardList employees={employees} />
    </div>
  );
};

export default Home;
