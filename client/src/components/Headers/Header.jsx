import { Fragment, React, useState, useEffect } from "react";
import styles from "./Header.module.css";
import Navbar from "./Navbar/Navbar";
import Login from "../Login/Login";
import { Link } from "react-router-dom";
import TwoItems from "./TwoItemsLogin&Regis/MenuLoginRegis";
import IntroByHome from "./IntroByHome/IntroByHome";
import IntroByDictionnary from "./IntroByDictionnary/IntroByDictionnary";

const Header = () => {
  const url = `${window.location.origin}${window.location.pathname}`;
  const isHome = url === "http://localhost:3000/" ? true : false;

  return (
    <Fragment>
      <div className={styles.main}>
        <Navbar />
        <div className={styles.content}>
          {isHome ? <TwoItems /> : ""}
          {isHome ? <IntroByHome /> : <IntroByDictionnary />}
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
