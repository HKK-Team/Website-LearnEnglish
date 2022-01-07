import { Fragment, React, useState, useEffect,useContext } from "react";
import styles from "./Header.module.css";
import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";
import TwoItems from "./TwoItemsLogin&Regis/MenuLoginRegis";
import IntroByHome from "./IntroByHome/IntroByHome";
import IntroByDictionnary from "./IntroByDictionnary/IntroByDictionnary";
import IntroByGrammar from "./IntroByGrammar/IntroByGrammar";
import IntroByVoc from "./IntroByVocbulary/IntroByVocbulary";
import IntroBySkill from "./IntroBySkills/IntroBySkills";
import { GlobalState } from "../../GlobalState";

const Header = () => {
  const url = `${window.location.pathname}`;
  const isHome = url === "/" ? true : false;
  const isSkill = url === "/skill" ? true : false;
  const isGrammar = url === "/grammar" ? true : false;
  const isVoccabulary = url === "/voccabulary" ? true : false;
  const isDictionnary = url === "/dictionnary" ? true : false;
  const isLogin = url === "/Login" ? true : false;
  const isRegister = url === "/Register" ? true : false;



  return (
    <Fragment>
      <div className={styles.main}>
        <Navbar />
        <div className={styles.content}>
          {isHome ? <TwoItems /> : ""}
          {isHome || isLogin || isRegister ? <IntroByHome /> : ""}
          {isSkill ? <IntroBySkill /> : ""}
          {isGrammar ? <IntroByGrammar /> : ""}
          {isVoccabulary ? <IntroByVoc /> : ""}
          {isDictionnary ? <IntroByDictionnary /> : ""}
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
