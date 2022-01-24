import React from "react";
import { Link } from "react-router-dom";
import styles from "./../Grammar/Grammar.module.css";
export default function LessonCard(props) {
  return (
    <div
      className={styles.viewRow}
      key={props._id}
      style={{ margin: "40px 0 0 0" }}
    >
      <div className={styles.imageFile}>
        <img src={props?.imageTopic} alt="" />
      </div>
      <div className={styles.textView}>
        <Link to={props?.slug || " "}>
          <h2>{props?.nameTopic}</h2>
        </Link>
        <p>{props?.contentTopic}</p>
      </div>
    </div>
  );
}
