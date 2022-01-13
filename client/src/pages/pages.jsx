import {Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Dictionnary from "../pages/Dictionnary/Dictionnary";
import HomeGGMeet from "../pages/HomeGGMeet/GGMeet";
import CallPage from "../pages/CallPage/CallPageGGMeet"
import Login from "./Login/Login";
import Register from "./Register/Register";
import NotFound from '../utils/not_found/NotFound'
import Grammars from "./Grammar/Grammars";
import Skill from './Skills/skill'
import Voccabulary from './Voccabulary/voc'
import DetailSkills from "./Skills/DetailSkills"
 
import React from "react";

const pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dictionnary" element={<Dictionnary />} />
      <Route path="/grammar" element={<Grammars/>}/>
      <Route path="/skill" element={<Skill/>}/>
      <Route path="/skill/:id" element={<DetailSkills/>}/>
      <Route path="/voccabulary" element={<Voccabulary/>}/>
      <Route path="/meeting/:id" element={<CallPage />} />
      <Route path="/meeting" element={<HomeGGMeet />} />
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
    </Routes>
  );
};

export default pages;
