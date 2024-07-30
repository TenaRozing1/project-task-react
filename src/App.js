import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/navigation.component";
import Home from "./components/homepage/homepage.component";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/add-employee" element={<AddEmployee />} />  */} 
      </Routes>
    </>
  );
};

export default App;
