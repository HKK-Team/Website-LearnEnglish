import React from "react";
import { Link } from "react-router-dom";
import styles from "./LessonCard.module.css";
export default function LessonCard(props) {
  return (
    <div
      className={styles.viewRow}
      key={props._id}
      style={{ margin: "40px 0 0 0" }}
    >
      <div className={styles.imageFile}>
        <img src={props?.imageTopic || props?.level?.images} alt="" />
      </div>
      <div className={styles.textView}>
        <Link to={props?.slug || props?.level?.slugLevel || " "}>
          <h2>{props?.nameTopic || props?.level?.nameLevel}</h2>
        </Link>
        <p>
          {props?.contentTopic?.substring(0, props?.contentTopic.indexOf(".") + 1) ||
            props?.level?.contentLevel.substring(
              0,
              props?.level?.contentLevel.indexOf(".") + 1
            )}
        </p>
      </div>
    </div>
  );
}
