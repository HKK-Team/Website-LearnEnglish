import { React } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
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
            <Link className={styles.linkPage} to={"/"}>
              Home
            </Link>
          </li>
          <li className={styles.items}>
            <Link className={styles.linkPage} to={"/skill"}>
              Skills
            </Link>
          </li>
          <li className={styles.items}>
            <Link className={styles.linkPage} to={"/grammar"}>
              Grammar
            </Link>
          </li>
          <li className={styles.items}>
            <Link className={styles.linkPage} to={"/voccabulary"}>
              Vocabulary
            </Link>
          </li>
          <li className={styles.items}>
            <Link className={styles.linkPage} to={"/dictionnary"}>
              Dictionnary
            </Link>
          </li>
          <li className={styles.items}>
            <Link className={styles.linkPage} to={"/meeting"} target="_blank">
              Meeting
            </Link>
          </li>
          <li className={styles.items}>
            <Link className={styles.linkPage} to={"/booking"}>
              BookMeeting
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
        <Link to={"/search"}>
          <button className={styles.btn}>Search</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
