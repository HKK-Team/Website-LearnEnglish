import React, { useContext, useEffect } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import {
  FaChartArea,
  FaChartBar,
  FaChartLine,
  FaUserPlus,
} from "react-icons/fa";
import HeaderSideBar from "../HeaderSideBar/HeaderSideBar";
import styles from "./RightContent.module.css";
import { GlobalState } from "../../../GlobalState";
import { useState } from "react";

const RightContent = () => {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const state = useContext(GlobalState);
  const [dataUser] = state.userTotalApi.dataUser;
  const [grammar] = state.grammarApi.dataGrammar;
  const [vocabulary] = state.vocabularyApi.vocData;

  const [dataListening] = state.listeningApi.dataListening;
  const [dataReading] = state.readingApi.dataReading;
  const [dataSpeaking] = state.speakingApi.dataSpeaking;
  const [dataWriting] = state.writingApi.dataWriting;
  const [totalSkill, settotalSkill] = useState(0);
  const [dataWidget, setdataWidget] = useState([]);

  useEffect(() => {
    let sum =
      dataListening.length +
      dataReading.length +
      dataSpeaking.length +
      dataWriting.length;
    let array = [];
    array.push(...dataListening);
    array.push(...dataReading);
    array.push(...dataSpeaking);
    array.push(...dataWriting);
    array.push(...grammar);
    array.push(...vocabulary);

    array.sort(function (a, b) {
      return new Date(b.dateCreate) - new Date(a.dateCreate);
    });

    setdataWidget(array);
    settotalSkill(sum);
  }, [
    dataListening,
    dataReading,
    dataSpeaking,
    dataWriting,
    grammar,
    vocabulary,
  ]);

  if (!dataUser.length) {
    return <div></div>;
  }

  return (
    <div>
      <HeaderSideBar />
      <div className={styles.widgetMain}>
        <div className={styles.widget}>
          <div
            className={styles.widgetMini}
            style={{ backgroundColor: "#30344c" }}
          >
            <FaUserPlus />
          </div>
          <div className={styles.information}>
            <span>Followers</span>
            <h2>+{dataUser.length}</h2>
          </div>
          <div className={styles.line}></div>
          <div className={styles.textInfor}>
            <span>Just updated</span>
          </div>
        </div>

        <div className={styles.widget}>
          <div
            className={styles.widgetMini}
            style={{ backgroundColor: "#44a0f0" }}
          >
            <FaChartArea />
          </div>
          <div className={styles.information}>
            <span>Skills</span>
            <h2>+{totalSkill}</h2>
          </div>
          <div className={styles.line}></div>
          <div className={styles.textInfor}>
            <span>Just updated</span>
          </div>
        </div>

        <div className={styles.widget}>
          <div
            className={styles.widgetMini}
            style={{ backgroundColor: "#60b464" }}
          >
            <FaChartBar />
          </div>
          <div className={styles.information}>
            <span>Grammars</span>
            <h2>+{grammar.length}</h2>
          </div>
          <div className={styles.line}></div>
          <div className={styles.textInfor}>
            <span>Just updated</span>
          </div>
        </div>

        <div className={styles.widget}>
          <div
            className={styles.widgetMini}
            style={{ backgroundColor: "#f03c74" }}
          >
            <FaChartLine />
          </div>
          <div className={styles.information}>
            <span>Vocabulary</span>
            <h2>+{vocabulary.length}</h2>
          </div>
          <div className={styles.line}></div>
          <div className={styles.textInfor}>
            <span>Just updated</span>

            {/* <span>
              <strong style={{ color: "#68bc64" }}>+3%</strong> than last month
            </span> */}
          </div>
        </div>
      </div>

      <div className={styles.widgetTopic}>
        {dataWidget.slice(0, 3).map((item, index) => (
          <div className={styles.widgetTopicMini} key={index}>
            <div className={styles.widgetMini}>
              <img src={item.level.topic.imageTopic} alt="" />
            </div>
            <div className={styles.information}>
              <h4>{item.level.topic.nameTopic}</h4>
              <span>{item.type}</span>
            </div>
            <div className={styles.line}></div>
            <div className={styles.textInfor}>
              <span>
                <AiOutlineClockCircle />{" "}
                 {new Date(item.dateCreate).toLocaleDateString("en-US",options)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.widgetTopicSecond}>
      {dataWidget.slice(3, 6).map((item, index) => (
          <div className={styles.widgetTopicMini} key={index}>
            <div className={styles.widgetMini}>
              <img src={item.level.topic.imageTopic} alt="" />
            </div>
            <div className={styles.information}>
              <h4>{item.level.topic.nameTopic}</h4>
              <span>{item.type}</span>
            </div>
            <div className={styles.line}></div>
            <div className={styles.textInfor}>
              <span>
                <AiOutlineClockCircle />{" "}
                 {new Date(item.dateCreate).toLocaleDateString("en-US",options)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightContent;
