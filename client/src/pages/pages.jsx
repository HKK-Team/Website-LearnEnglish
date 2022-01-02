import {Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Dictionnary from "../pages/Dictionnary/Dictionnary";
import HomeGGMeet from "../pages/HomeGGMeet/GGMeet";
import CallPage from "../pages/CallPage/CallPageGGMeet"

import React from "react";

const pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dictionnary" element={<Dictionnary />} />
      <Route path="/meeting/:id" element={<CallPage />} />
      <Route path="/meeting" element={<HomeGGMeet />} />
    </Routes>
  );
};

export default pages;
