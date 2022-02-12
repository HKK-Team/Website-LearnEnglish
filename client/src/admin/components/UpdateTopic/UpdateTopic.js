import React, { useState } from "react";
import HeaderSideBar from "../HeaderSideBar/HeaderSideBar";
import SideBar from "../SideBar/SideBar";
import styles from "./UpdateTopic.module.css";
import UpdateListening from "./UpdateListening/UpdateListening";
import UpdateReading from "./UpdateReading/UpdateReading";
import UpdateSpeaking from "./UpdateSpeaking/UpdateSpeaking";
import UpdateWriting from "./UpdateWriting/UpdateWriting";
import UpdateGrammars from "./UpdateGrammars/UpdateGrammars";
import UpdateVocabulary from "./UpdateVocabulary/UpdateVocabulary";

const UpdateTopic = () => {
  const [stateSkillsOption, setstateSkillsOption] = useState(false);
  const [stateGrammar, setstateGrammar] = useState(false);
  const [stateVoc, setstateVoc] = useState(false);

  const [stateUpdateListening, setstateUpdateListening] = useState(false);
  const [stateUpdateSpeaking, setstateUpdateSpeaking] = useState(false);
  const [stateUpdateReading, setstateUpdateReading] = useState(false);
  const [stateUpdateWriting, setstateUpdateWriting] = useState(false);

  const onchangeInput = (e) => {
    if (e.target.value === "skill") {
      setstateSkillsOption(true);
      setstateGrammar(false);
      setstateVoc(false);
    } else if (e.target.value === "grammar") {
      setstateGrammar(true);
      setstateSkillsOption(false);
      setstateVoc(false);
    } else if (e.target.value === "vocabulary") {
      setstateVoc(true);
      setstateSkillsOption(false);
      setstateGrammar(false);
    }
  };
  const onInput = (e) => {
    if (e.target.value === "listening") {
      setstateUpdateListening(true);
      setstateUpdateReading(false);
      setstateUpdateSpeaking(false);
      setstateUpdateWriting(false);
    } else if (e.target.value === "reading") {
      setstateUpdateListening(false);
      setstateUpdateReading(true);
      setstateUpdateSpeaking(false);
      setstateUpdateWriting(false);
    } else if (e.target.value === "speaking") {
      setstateUpdateListening(false);
      setstateUpdateReading(false);
      setstateUpdateSpeaking(true);
      setstateUpdateWriting(false);
    } else if (e.target.value === "writing") {
      setstateUpdateListening(false);
      setstateUpdateReading(false);
      setstateUpdateSpeaking(false);
      setstateUpdateWriting(true);
    } else {
      setstateUpdateListening(false);
      setstateUpdateReading(false);
      setstateUpdateSpeaking(false);
      setstateUpdateWriting(false);
    }
  };
  return (
    <div className={styles.home}>
      <div className={styles.leftContent}>
        <SideBar />
      </div>
      <div className={styles.rightContent}>
        <HeaderSideBar />

        <div className={styles.blockUpdate}>
          <div>
            <select
              name="select"
              className={styles.selectOption}
              onChange={onchangeInput}
            >
              <option value="">Options: </option>
              <option value="skill">Update: Skills</option>
              <option value="grammar">Update: Grammars</option>
              <option value="vocabulary">Update: Vocabulary</option>
            </select>
          </div>
          {stateSkillsOption ? (
            <div className={styles.selectSkills}>
              <select
                name="select"
                className={styles.selectOption}
                onChange={onInput}
              >
                <option value="">Options: </option>
                <option value="listening">Update: Listening</option>
                <option value="reading">Update: Reading</option>
                <option value="speaking">Update: Speaking</option>
                <option value="writing">Update: Writing</option>
              </select>
            </div>
          ) : (
            ""
          )}
          {stateUpdateListening ? <UpdateListening /> : ""}
          {stateUpdateReading ? <UpdateReading /> : ""}
          {stateUpdateSpeaking ? <UpdateSpeaking /> : ""}
          {stateUpdateWriting ? <UpdateWriting /> : ""}
          {stateGrammar ? <UpdateGrammars /> : ""}
          {stateVoc ? <UpdateVocabulary /> : ""}
        </div>
      </div>
    </div>
  );
};

export default UpdateTopic;
