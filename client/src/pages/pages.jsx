import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Dictionnary from "../pages/Dictionnary/Dictionnary";
import HomeGGMeet from "../pages/HomeGGMeet/GGMeet";
import CallPage from "../pages/CallPage/CallPageGGMeet";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Grammars from "./Grammar/Grammars";
import Skill from "./Skills/skill";
import Voccabulary from "./Voccabulary/voc";
import DetailSkillListening from "../pages/Skills/DetailSkill/DetailSkillListening";
import DetailSkillReading from "../pages/Skills/DetailSkill/DetailSkillReading";
import DetailSkillSpeaking from "../pages/Skills/DetailSkill/DetailSkillSpeaking";
import DetailSkillWriting from "../pages/Skills/DetailSkill/DetailSkillWriting";
import DetailLevelListen from "../pages/Skills/DetailTopic/DetailLevelListen";
import DetailLevelReading from '../pages/Skills/DetailTopic/DetailLevelReading'
import DetailLevelSpeaking from '../pages/Skills/DetailTopic/DetailLevelSpeaking'
import DetailLevelWriting from '../pages/Skills/DetailTopic/DetailLevelWriting'

import React from "react";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dictionnary" element={<Dictionnary />} />
      <Route path="/grammar" element={<Grammars />} />
      <Route path="/voccabulary" element={<Voccabulary />} />
      <Route path="/skill" element={<Skill />} />
      
      {/* detail level skill */}
      <Route  path="/skill/listening" element={<DetailSkillListening />} />
      <Route  path="/skill/reading" element={<DetailSkillReading />} />
      <Route  path="/skill/speaking" element={<DetailSkillSpeaking />} />
      <Route  path="/skill/writing" element={<DetailSkillWriting />} />
      {/* detail level skill */}

      {/* detail topic by level */}
      <Route path="/skill/listening/:id" element={<DetailLevelListen />} />
      <Route path="/skill/reading/:id" element={<DetailLevelReading />} />
      <Route path="/skill/speaking/:id" element={<DetailLevelSpeaking />} />
      <Route path="/skill/writing/:id" element={<DetailLevelWriting />} />
      {/* detail topic by level */}

      <Route path="/meeting/:id" element={<CallPage />} />
      <Route path="/meeting" element={<HomeGGMeet />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
};

export default Pages;
