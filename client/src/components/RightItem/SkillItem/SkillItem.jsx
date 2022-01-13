import { React, useState } from "react";
import styles from "./SkillItem.module.css";
import { Link } from "react-router-dom";

const SkillItem = () => {
  const [dataMenu, setdataMenu] = useState(1);
  const handleChange = (e) => {
    setdataMenu(parseInt(e))
  };
  const list = (
    <div>
      <li>
        <Link to={""} className={styles.item}>
          Beginner A1
        </Link>
      </li>
      <li>
        <Link to={""} className={styles.item}>
          Pre-intermediate A2
        </Link>
      </li>
      <li>
        <Link to={""} className={styles.item}>
          Intermediate B1
        </Link>
      </li>
      <li>
        <Link to={""} className={styles.item}>
          Upper intermediate B2
        </Link>
      </li>
      <li>
        <Link to={""} className={styles.item}>
          Advanced C1
        </Link>
      </li>
    </div>
  );
  return (
    <div className={styles.containList}>
      <ul className={styles.items}>
        <p onClick={(e) => handleChange(e.target.title)} title="1">
          Listening
        </p>
        {dataMenu === 1 ? list : ""}
      </ul>
      <ul className={styles.items}>
        <p onClick={(e) => handleChange(e.target.title)} title="2">
          Reading
        </p>
        {dataMenu === 2 ? list : ""}
      </ul>
      <ul className={styles.items}>
        <p onClick={(e) => handleChange(e.target.title)} title="3">
          Writing
        </p>
        {dataMenu === 3 ? list : ""}
      </ul>
      <ul className={styles.items}>
        <p onClick={(e) => handleChange(e.target.title)} title="4">
          Speaking
        </p>
        {dataMenu === 4 ? list : ""}
      </ul>
    </div>
  );
};

export default SkillItem;
