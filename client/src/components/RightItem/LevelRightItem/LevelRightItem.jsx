import React from "react";
import styles from "./LevelRightItem.module.css";
import { Link } from "react-router-dom";

const LevelRightItem = (props) => {
  return (
    <div className={styles.containList}>
      <ul className={styles.items}>
        <li>
          <Link to={""} className={styles.textLink}>
            {props.level1}
          </Link>
        </li>
        <li>
          <Link to={""} className={styles.textLink}>
            {props.level2}
          </Link>
        </li>
        <li>
          <Link to={""} className={styles.textLink}>
            {props.level3}
          </Link>
        </li>
        {!props.level4 ? (
          ""
        ) : (
          <li>
            <Link to={""} className={styles.textLink}>
              {props.level4}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default LevelRightItem;
