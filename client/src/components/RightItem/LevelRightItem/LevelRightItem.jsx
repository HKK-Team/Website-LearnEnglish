import React from "react";
import styles from "./LevelRightItem.module.css";
import { Link } from "react-router-dom";

const LevelRightItem = ({ level1, level2, level3, level4 }) => {
  return (
    <div className={styles.containList}>
      <ul className={styles.items}>
        <li>
          <Link to={""} className={styles.textLink}>
            {level1}
          </Link>
        </li>
        <li>
          <Link to={""} className={styles.textLink}>
            {level2}
          </Link>
        </li>
        <li>
          <Link to={""} className={styles.textLink}>
            {level3}
          </Link>
        </li>
        <li>
          <Link to={""} className={styles.textLink}>
            {level4}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LevelRightItem;
