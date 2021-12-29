import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <h1 className="logo">LearnEnglish</h1>
        <ul className="nav-link">
          <li className="active">
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <a href="#"></a>Skills
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
            <a href="#"></a>Grammar
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
            <a href="#"></a>Vocabulary
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
