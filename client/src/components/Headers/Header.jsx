import { Fragment, React, useState, useEffect,useContext } from "react";
import { useParams} from "react-router-dom";
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
  var str = '/';
  for(let i = 1;i < url.length;i++){
    if(url[i] === '/')break;
    str += url[i]
  }
  const isHome = str === "/" ? true : false;
  const isSkill = str === "/skill" ? true : false;
  const isGrammar = str === "/grammar" ? true : false;
  const isVoccabulary = str === "/voccabulary" ? true : false;
  const isDictionnary = str === "/dictionnary" ? true : false;
  const isLogin = str === "/Login" ? true : false;
  const isRegister = str === "/Register" ? true : false;



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
