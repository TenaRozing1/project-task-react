import React, { useEffect, useState } from "react";
import axios from "axios";

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
      <h1>hello</h1>
      <h1>Employees</h1>
      <div className="employee-cards">
        {employees.map((employee) => (
          <div key={employee.id} className="employee-card">
            <h2>{employee.firstName}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
