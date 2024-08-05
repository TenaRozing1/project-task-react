import React, { useState } from "react";
import InputComponent from "../input-component/input.component";
import ButtonComponent from "../button-component/button.component";
import "./employee-form.styles.scss";

const AddEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && dateOfBirth && position) {
      console.log({
        firstName,
        lastName,
        dateOfBirth,
        position,
      });
      setFirstName("");
      setLastName("");
      setDateOfBirth("");
      setPosition("");
    } else {
      console.error("All fields are required!");
    }
  };

  return (
    <div className="page-container">
      <div data-aos="fade-up" className="add-employee-container">
        <h1>Add New Employee</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <InputComponent
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <InputComponent
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <InputComponent
              type="date"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="position">Position:</label>
            <InputComponent
              type="text"
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
          </div>
          <ButtonComponent type="submit" text="Submit" disabled={false} />
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
