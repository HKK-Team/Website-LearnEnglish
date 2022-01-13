import { React, Fragment, useContext, useState, useEffect } from "react";
import styles from "./DetailSkills.module.css";
import { Link } from "react-router-dom";
import SkillItem from "../../RightItem/SkillItem/SkillItem";
import RightItem from "../../RightItem/RightItem";
import { GlobalState } from "../../../GlobalState";
import { useParams } from "react-router-dom";

const Listening = () => {
  const params = useParams();
  const state = useContext(GlobalState);
  const [dataListening] = state.listeningApi.dataListening;
  const [dataSpeaking] = state.speakingApi.dataSpeaking;
  const [dataReading] = state.readingApi.dataReading;
  const [dataWriting] = state.writingApi.dataWriting;
  var dataSkill = [];

    if (params.id === "listening") {
      dataSkill = dataListening;
    } else if (params.id === "speaking") {
      dataSkill = dataSpeaking;
    } else if (params.id === "reading") {
      dataSkill = dataReading;
    } else {
      dataSkill = dataWriting;
    }

  console.log(dataSkill[0]._id);

  return (
    <Fragment>
      <div className={styles.conatiner}>
        <div className={styles.main}>
          <div className={styles.contentLeft}>
            <div className={styles.title}>
              <h2>abc</h2>
            </div>
            <div className={styles.imageFiled}>
              <img src={""} alt="" />
            </div>
            <div className={styles.blockMeeting}>
              <div className={styles.colorMain}></div>
              <div className={styles.blockColor1}></div>
              <div className={styles.blockColor2}></div>
              <div className={styles.blockColor3}></div>
              <div className={styles.blockColor4}></div>
            </div>
            <div className={styles.textIntro}>
              <p className={styles.text}>listen</p>
              <h2>Choose your level to practise your listening</h2>
            </div>

            <div className={styles.contain}>
              {/* {detail.map((item) => (
                <div className={styles.viewRow} key={item._id}>
                  <div className={styles.imageFile}>
                    <img src={item.level.images} alt="" />
                  </div>
                  <div className={styles.textView}>
                    <Link to={item.level.slugLevel}>
                      <h2>{item.level.nameLevel}</h2>
                    </Link>
                    <p>
                      Listening practice to help you understand familiar words
                      and basic phrases when people speak slowly and clearly.
                      Situations include meeting people, shopping and
                      conversations at work.
                    </p>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
          <div className={styles.contentRight}>
            <SkillItem />
            <RightItem />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Listening;
