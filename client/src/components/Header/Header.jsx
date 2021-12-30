import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>LearnEnglish</h1>
        <ul className={styles.navlink}>
          <li className={styles.active}>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"#"}>Skills</Link>
            {/* <div className="sub-menu">
            <ul>
              <li>
                <a href="#"></a>Listening
              </li>
              <li>
                <a href="#"></a>Reading
              </li>
              <li>
                <a href="#"></a>Writing
              </li>
              <li>
                <a href="#"></a>Speaking
              </li>
            </ul>
            </div> */}
          </li>
          <li>
            <Link to={"#"}>Grammar</Link>
            {/* <div className="sub-menu">
            <ul>
              <li>
                <a href="#"></a>Beginner to pre-intermediate
              </li>
              <li>
                <a href="#"></a>Intermediate to upper intermediate
              </li>
              <li>
                <a href="#"></a>English grammar reference
              </li>
            </ul>
            </div> */}
          </li>
          <li>
            <Link to={"#"}>Vocabulary</Link>
            {/* <div className="sub-menu">
            <ul>
              <li>
                <a href="#"></a>Beginner to pre-intermediate
              </li>
              <li>
                <a href="#"></a>Intermediate to upper intermediate
              </li>
            </ul>
            </div> */}
          </li>
          <li>
          <Link to={"/dictionnary"}>Dictionnary</Link>
          </li>
          <li>
          <Link to={"/meeting"}target="_blank">Meeting</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
