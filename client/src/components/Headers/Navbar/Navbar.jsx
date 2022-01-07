import {  React,useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [isHome, setisHome] = useState(true)
  // const eventisHome = () =>{
  //   setisHome(true)
  // }
  return (
    <div className={styles.navbar}>
      <div className={styles.icon}>
        <h2 className={styles.logo}>
          Learn
          <br />
          <span className={styles.textTilte}>English</span>
        </h2>
      </div>
      <div className={styles.menu}>
        <ul className={styles.listMenuItem}>
          <li className={styles.items}>
              <Link className={styles.linkPage} to={"/"}>Home</Link>
          </li>
          <li className={styles.items}>
              <Link className={styles.linkPage} to={"/skill"}>Skills</Link>
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
          <li className={styles.items}>
              <Link className={styles.linkPage} to={"/grammar"}>Grammar</Link>
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
          <li className={styles.items}>
              <Link className={styles.linkPage} to={"/voccabulary"}>Vocabulary</Link>
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
          <li className={styles.items}>
            <Link className={styles.linkPage} to={"/dictionnary"}>Dictionnary</Link>
          </li>
          <li className={styles.items}>
            <Link className={styles.linkPage} to={"/meeting"} target="_blank">
              Meeting
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.search}>
        <input
          className={styles.srch}
          type="search"
          name=""
          placeholder="Type to text..."
        />
        <a>
        <Link to={"#"}>
          <button className={styles.btn}>Search</button>
        </Link>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
