import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LessonCard from "../../LessonCard/LessonCard";
import LevelRightItem from "../../RightItem/LevelRightItem/LevelRightItem";
import RightItem from "../../RightItem/RightItem";
import styles from "./VocabularySkills.module.css";

export default function VocabularySkills(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let array = [];
    if (props.data.length) {
      for (let i = 0; i < props.data.length; i++) {
        array.push(props.data[i].level.topic);
      }
    }
    setData(array);
  }, [props.data]);


  if (!data) return <div></div>;
  return (
    <div className="grid wide">
      <div className="row">
        <div className="col l-9 m-12 c-12">
          <div className={styles.heading}>
            <p className={styles.depthLink}>
              <Link to="/voccabulary">Vocabulary</Link>
              <span> {">"} </span>
              <span>{props.data[0]?.level?.nameLevel}</span>
            </p>
            <div className={styles.line}></div>
            <h1
              style={{ color: "#23085A", margin: "30px 0 0 0", fontSize: 36 }}
            >
              {props.data[0]?.level?.nameLevel}
            </h1>
          </div>
          <img
            src={props.data[0]?.level?.images}
            alt="s"
            style={{ width: "100%" }}
          />
          <div className={styles.contactBox}>
            {props.data[0]?.level?.contentLevel
              .split("\n\n")
              .map((item, index) => (
                <p key={index} style={{ fontSize: 18 }}>
                  {item}
                </p>
              ))}
          </div>

          <h2 style={{ color: "#23085A", margin: "30px 0 0 0", fontSize: 36 }}>
            Choose a vocabulary lesson
          </h2>

          <div className={styles.containerLesson}>
            {data.map((item, index) => (
              <LessonCard key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="col l-3 m-12 c-12" style={{ marginTop: 193 }}>
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
