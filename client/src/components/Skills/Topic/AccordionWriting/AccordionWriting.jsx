import { React, useEffect, useState, useContext } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import styles from "../AccordionListening/Accordion.module.css";
import Task1 from "../AccordionListening/Task/Task1";
import style from "./AccordionWriting.module.css";
import { GlobalState } from "../../../../GlobalState";
import Translate from "../../../Translates/Translate";

export default function AccordionWriting(props) {
  const state = useContext(GlobalState);
  const [stateTranslate] = state.listeningApi.stateTranslate;
  const [dataTranslate] = state.listeningApi.dataTranslate;
  const [dataTranslates, setdataTranslates] = useState([]);

  useEffect(() => {
    if (dataTranslate.length) {
      setdataTranslates(dataTranslate);
    }
  }, [dataTranslate]);

  const [data, setdata] = useState(props.data.topic.readingText.split("\n\n"));
  const [datatips, setdatatips] = useState(props.data.topic.tips.split("\n"));
  const [dataTask, setdataTask] = useState(props.data.topic.task[0].task1);

  useEffect(() => {
    setdata(props.data.topic.readingText.split("\n\n"));
    setdatatips(props.data.topic.tips.split("\n"));
    setdataTask(props.data.topic.task[0].task1);
  }, [props]);

  return (
    <Accordion allowZeroExpanded className={styles.accordion}>
      <AccordionItem className={styles.item} style={{ marginLeft: -10 }}>
        <AccordionItemHeading className={styles.headerTranscript}>
          <AccordionItemButton className={styles.transcript}>
            Reading Text
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.panelText}>
          <Translate data={props.data.topic.readingText} />
          {stateTranslate
            ? [dataTranslates].map((item, index) => <p key={index}>{item}</p>)
            : data.map((item, index) => <p key={index}>{item}</p>)}
        </AccordionItemPanel>
      </AccordionItem>

      <div className={style.tips}>
        <h2>Tips</h2>
        {datatips.map((item, index) => (
          <p key={index}>
            {index + 1}. {item}
          </p>
        ))}
      </div>
      <div style={{ marginLeft: -10 }}>
        {[dataTask].map((item, index) => (
          <Task1 {...item} key={index} />
        ))}
      </div>
    </Accordion>
  );
}
