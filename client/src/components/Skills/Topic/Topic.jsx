import styles from "./Topic.module.css";
import { React, Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RightItem from "../../RightItem/RightItem";
import Accordion from "./AccordionListening/Accordion";
import AccordionReading from "./AccordionReading/AccordionReading";
import AccordionSpeaking from "./AccordionSpeaking/AccordionSpeaking";
import AccordionWriting from "./AccordionWriting/AccordionWriting";

const Topic = (props) => {
  console.log(props.data);
  const [data, setdata] = useState(props.data);
  const [isListening, setisListening] = useState(false);
  const [isReading, setisReading] = useState(false);
  const [isSpeaking, setisSpeaking] = useState(false);
  const [isWriting, setisWriting] = useState(false);
  const [dataIntroText, setdataIntroText] = useState([]);

  useEffect(() => {
    setdata(props.data);
    if (props.data.length) {
      setdataIntroText(props.data[0].level.topic.contentTopic.split("\n\n"));
      if (props.data[0].slug === "listening") setisListening(true);
      else if (props.data[0].slug === "reading") setisReading(true);
      else if (props.data[0].slug === "speaking") setisSpeaking(true);
      else if (props.data[0].slug === "writing") setisWriting(true);
    }
  }, [props.data]);

  if (!data.length) {
    return <div>loading</div>;
  }
  return (
    <Fragment>
      <div className={styles.conatiner}>
        <div className={styles.main}>
          <div className={styles.contentLeft}>
            <div className={styles.title}>
              <h2>{data[0]?.level.topic.nameTopic}</h2>
            </div>

            {isSpeaking ? (
              ""
            ) : (
              <div className={styles.imageFiled}>
                <img src={data[0]?.level.topic.imageTopic} alt="" />
              </div>
            )}

            <div className={styles.colorMain}>
              <div className={styles.blockColor1}></div>
              <div className={styles.blockColor2}>
                <p>
                  Are you looking for a face-to-face English course near you?
                </p>
                <button>
                  <Link
                    className={styles.textMeeting}
                    to={"/meeting"}
                    target={"_blank"}
                  >
                    Meeting
                  </Link>
                </button>
              </div>
              <div className={styles.blockColor3}></div>
            </div>

            <div className={styles.textIntro}>
              {dataIntroText.map((item, index) => (
                <p className={styles.text} key={index}>
                  {item}
                </p>
              ))}
            </div>

            {isListening ? (
              <div className={styles.sessionMutipleChoise}>
                <div className={styles.audioLoad}>
                  <audio src={data[0]?.level.topic.radio} controls />
                </div>
                <div>
                  <Accordion data={data[0]?.level.topic.tranScript} />
                </div>
              </div>
            ) : (
              ""
            )}
            {isReading ? (
              <div className={styles.sessionMutipleChoise}>
                <div>
                  <AccordionReading data={data[0]?.level.topic.readingText} />
                </div>
              </div>
            ) : (
              ""
            )}
            {isSpeaking ? (
              <div className={styles.sessionMutipleChoise}>
                <div>
                  <AccordionSpeaking data={data[0]?.level.topic.tranScript} />
                </div>
              </div>
            ) : (
              ""
            )}
            {isWriting ? (
              <div className={styles.sessionMutipleChoise}>
                <div>
                  <AccordionWriting data={data[0]?.level.topic.readingText} tips={data[0]?.level.topic.tips}/>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={styles.contentRight}>
            <RightItem />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Topic;