import { React, useEffect, useState } from "react";
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
import { GlobalState } from "../../../../GlobalState";
import { useContext } from "react";
import Translate from "../../../Translates/Translate";

export default function AccordionReading(props) {
  const state = useContext(GlobalState);
  const [stateTranslate] = state.listeningApi.stateTranslate;
  const [dataTranslate] = state.listeningApi.dataTranslate;
  const [dataTranslates, setdataTranslates] = useState([]);

  useEffect(() => {
    if (dataTranslate.length) {
      setdataTranslates(dataTranslate.split("break"));
    }
  }, [dataTranslate]);

  const [data, setdata] = useState(props.data.topic.readingText.split("\n\n"));
  const [dataTask, setdataTask] = useState(props.data.topic.task[0].task1);

  useEffect(() => {
    setdata(props.data.topic.readingText.split("\n\n"));
    setdataTask(props.data.topic.task[0].task1);
  }, [props.data]);

  return (
    <Accordion allowZeroExpanded className={styles.accordion}>
      <AccordionItem className={styles.item}>
        <AccordionItemHeading className={styles.headerTranscript}>
          <AccordionItemButton className={styles.transcript}>
            Reading Text
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.panelText}>
          <Translate data={props.data.topic.readingText} />
          {stateTranslate
            ? dataTranslates.map((item, index) => <p key={index}>{item}</p>)
            : data.map((item, index) => <p key={index}>{item}</p>)}
        </AccordionItemPanel>
      </AccordionItem>

      {[dataTask].map((item, index) => (
        <Task1 {...item} key={index} />
      ))}
    </Accordion>
  );
}
