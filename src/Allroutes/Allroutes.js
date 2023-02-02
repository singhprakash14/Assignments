import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home" 
import Showdata from "../Components/Showdata";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Showdata />} />
    </Routes>
  );
};

export default AllRoutes;
