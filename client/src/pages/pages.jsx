import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import LoginAdmin from "../admin/components/loginAdmin/loginAdmin";
import { GlobalState } from "../GlobalState";
import CallPage from "../pages/CallPage/CallPageGGMeet";
import Dictionnary from "../pages/Dictionnary/Dictionnary";
import Home from "../pages/Home/Home";
import HomeGGMeet from "../pages/HomeGGMeet/GGMeet";
import DetailSkillListening from "../pages/Skills/DetailSkill/DetailSkillListening";
import DetailSkillReading from "../pages/Skills/DetailSkill/DetailSkillReading";
import DetailSkillSpeaking from "../pages/Skills/DetailSkill/DetailSkillSpeaking";
import DetailSkillWriting from "../pages/Skills/DetailSkill/DetailSkillWriting";
import DetailLevelListen from "../pages/Skills/DetailTopic/DetailLevelListen";
import DetailLevelReading from "../pages/Skills/DetailTopic/DetailLevelReading";
import DetailLevelSpeaking from "../pages/Skills/DetailTopic/DetailLevelSpeaking";
import DetailLevelWriting from "../pages/Skills/DetailTopic/DetailLevelWriting";
import NotFound from "../utils/not_found/NotFound";
import DetailTopic from "./Grammar/DetailTopic/DetailTopic";
import Grammars from "./Grammar/Grammars";
import TopicGrammar from "./Grammar/Topic/Topic";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Skill from "./Skills/skill";
import TopicListening from "./Skills/Topic/TopicListening";
import TopicReading from "./Skills/Topic/TopicReading";
import TopicSpeaking from "./Skills/Topic/TopicSpeaking";
import TopicWriting from "./Skills/Topic/TopicWriting";
import Voccabulary from "./Voccabulary/voc";
import VocBTPI from "./Voccabulary/VocBTPI";
import VoccabularyLesson from "./Voccabulary/VoccabularyLesson/VoccabularyLesson";
import VocGames from "./Voccabulary/VocGames";
import VocITUI from "./Voccabulary/VocITUI";

const Pages = () => {
  const state = useContext(GlobalState);
  const [isLogin] = state.userApi.isLogged;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dictionnary" element={<Dictionnary />} />
      <Route path="/grammar" element={<Grammars />} />
      <Route path="/voccabulary" element={<Voccabulary />} />
      <Route path="/skill" element={<Skill />} />

      {/* detail level skill */}
      <Route path="/skill/listening" element={<DetailSkillListening />} />
      <Route path="/skill/reading" element={<DetailSkillReading />} />
      <Route path="/skill/speaking" element={<DetailSkillSpeaking />} />
      <Route path="/skill/writing" element={<DetailSkillWriting />} />
      {/* detail level skill */}

      {/* detail topic by level */}
      <Route path="/skill/listening/:id" element={<DetailLevelListen />} />
      <Route path="/skill/reading/:id" element={<DetailLevelReading />} />
      <Route path="/skill/speaking/:id" element={<DetailLevelSpeaking />} />
      <Route path="/skill/writing/:id" element={<DetailLevelWriting />} />
      {/* detail topic by level */}

      {/* detail listening topic */}
      <Route
        path="/skill/listening/beginnera1/:id"
        element={<TopicListening />}
      />
      <Route
        path="/skill/listening/pre-intermediate-a2/:id"
        element={<TopicListening />}
      />
      <Route
        path="/skill/listening/Intermediate-B1/:id"
        element={<TopicListening />}
      />
      <Route
        path="/skill/listening/Upper-intermediate-B2/:id"
        element={<TopicListening />}
      />
      <Route
        path="/skill/listening/Advanced-C1/:id"
        element={<TopicListening />}
      />
      {/* detail listening topic */}

      {/* detail reading topic */}
      <Route path="/skill/reading/beginnera1/:id" element={<TopicReading />} />
      <Route
        path="/skill/reading/pre-intermediate-a2/:id"
        element={<TopicReading />}
      />
      <Route
        path="/skill/reading/Intermediate-B1/:id"
        element={<TopicReading />}
      />
      <Route
        path="/skill/reading/Upper-intermediate-B2/:id"
        element={<TopicReading />}
      />
      <Route path="/skill/reading/Advanced-C1/:id" element={<TopicReading />} />
      {/* detail reading topic */}

      {/* detail speaking topic */}
      <Route
        path="/skill/speaking/beginnera1/:id"
        element={<TopicSpeaking />}
      />
      <Route
        path="/skill/speaking/pre-intermediate-a2/:id"
        element={<TopicSpeaking />}
      />
      <Route
        path="/skill/speaking/Intermediate-B1/:id"
        element={<TopicSpeaking />}
      />
      <Route
        path="/skill/speaking/Upper-intermediate-B2/:id"
        element={<TopicSpeaking />}
      />
      <Route
        path="/skill/speaking/Advanced-C1/:id"
        element={<TopicSpeaking />}
      />
      {/* detail speaking topic */}

      {/* detail writing topic */}
      <Route path="/skill/writing/beginnera1/:id" element={<TopicWriting />} />
      <Route
        path="/skill/writing/pre-intermediate-a2/:id"
        element={<TopicWriting />}
      />
      <Route
        path="/skill/writing/Intermediate-B1/:id"
        element={<TopicWriting />}
      />
      <Route
        path="/skill/writing/Upper-intermediate-B2/:id"
        element={<TopicWriting />}
      />
      <Route path="/skill/writing/Advanced-C1/:id" element={<TopicWriting />} />
      {/* detail writing topic */}

      {/* detail level grammar */}
      <Route path="/grammar/:id" element={<TopicGrammar />} />
      {/* detail level grammar */}

      {/* detail level grammar */}
      <Route
        path="/grammar/beginner-to-pre-intermediate/:id"
        element={<DetailTopic />}
      />
      <Route
        path="/grammar/Intermediate-to-upper-intermediate/:id"
        element={<DetailTopic />}
      />
      {/* detail level grammar */}

      {/* detail level voccabulary */}
      <Route
        path="/voccabulary/beginner-to-pre-intermediate/"
        element={<VocBTPI />}
      />
      <Route
        path="/voccabulary/beginner-to-pre-intermediate/Accessories"
        element={<VoccabularyLesson data={state.vocabularyApi.vocData[0][0]} />}
      />
      <Route
        path="/voccabulary/Intermediate-to-upper-intermediate/"
        element={<VocITUI />}
      />
      <Route
        path="/voccabulary/Intermediate-to-upper-intermediate/AirTravel"
        element={<VoccabularyLesson data={state.vocabularyApi.vocData[0][1]} />}
      />
      <Route path="/voccabulary/Vocabulary-games/" element={<VocGames />} />
      <Route
        path="/voccabulary/Vocabulary-games/Sushi-Spell"
        element={<VoccabularyLesson data={state.vocabularyApi.vocData[0][2]} />}
      />
      {/* detail level voccabulary */}

      <Route path="/meeting/:id" element={<CallPage />} />
      <Route path="/meeting" element={<HomeGGMeet />} />
      <Route path="/Login" element={isLogin ? <NotFound /> : <Login />} />
      <Route path="/Register" element={isLogin ? <NotFound /> : <Register />} />

      {/* admin page */}
      <Route path="/admin" element={<LoginAdmin />} />
      {/* admin page */}
    </Routes>
  );
};

export default Pages;
