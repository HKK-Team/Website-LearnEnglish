import React, { useEffect } from "react";
import { useState } from "react";
import { Accordion } from "react-accessible-accordion";
import { Link } from "react-router-dom";
import LevelRightItem from "../../../RightItem/LevelRightItem/LevelRightItem";
import RightItem from "../../../RightItem/RightItem";
import TaskLesson from "../../../TaskLesson/TaskLesson";

import styles from "./../VocabularySkills.module.css";
import style from "./VocabularyLesson.module.css";
export default function VocabularyLesson(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props?.level?.topic?.task);
  }, [props?.level?.topic?.task]);

  if (!data) return <div>loading...</div>;
  return (
    <div className="grid wide">
      <div className="row">
        <div className="col l-8 m-12 c-12">
          <div className={styles.heading}>
            <p className={styles.depthLink}>
              <Link to="/voccabulary">Vocabulary</Link>
              <span> {">"} </span>
              <span>{props?.level?.nameLevel}</span>
              <span> {">"} </span>
              <span>{props?.level?.topic?.slug}</span>
            </p>
            <div className={styles.line}></div>
            <h1
              style={{ color: "#23085A", margin: "30px 0 0 0", fontSize: 36 }}
            >
              {props?.level?.topic?.nameTopic}
            </h1>
          </div>
          <div className={styles.contactBox}>
            <p>{props?.level?.topic?.contentTopic}</p>
          </div>
          <div className={style.taskContainer}>
            <div
              dangerouslySetInnerHTML={{ __html: data[0]?.data }}
              name="firstTask"
            ></div>
            <div name="task" style={{ marginTop: 10 }}>
              <Accordion allowZeroExpanded>
                {data.map((item, index) =>
                  index > 0 ? <TaskLesson {...item} /> : ""
                )}
              </Accordion>
            </div>
          </div>
        </div>
        <div className="col l-3 m-12 c-12" style={{ marginTop: 230 }}>
          <LevelRightItem
            level1={"Beginner to pre-intermediate"}
            level2={"Intermediate to upper intermediate"}
            level3={"English grammar reference"}
            sluglevel1={"beginner-to-pre-intermediate"}
            sluglevel2={"intermediate-to-upper-intermediate"}
            sluglevel3={"english-grammar-reference"}
          />
          <RightItem />
        </div>
      </div>
    </div>
  );
}
