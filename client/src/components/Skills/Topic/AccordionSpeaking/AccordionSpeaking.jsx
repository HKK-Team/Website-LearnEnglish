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
import Translate from "../../../Translates/Translate";
import { GlobalState } from "../../../../GlobalState";
import { useContext } from "react";

export default function Accordions(props) {
  const state = useContext(GlobalState);
  const [stateTranslate] = state.listeningApi.stateTranslate;
  const [dataTranslate] = state.listeningApi.dataTranslate;
  const [dataTranslates, setdataTranslates] = useState([]);

  useEffect(() => {
    if (dataTranslate.length) {
      setdataTranslates(dataTranslate);
    }
  }, [dataTranslate]);
  const [data, setdata] = useState(props.data.topic.tranScript.split("\n\n"));
  const [dataTask, setdataTask] = useState(props.data.topic.task[0].task1);

  useEffect(() => {
    setdata(props.data.topic.tranScript.split("\n\n"));
  }, [props.data]);

  return (
    <Accordion allowZeroExpanded className={styles.accordion}>
      <AccordionItem className={styles.item}>
        <AccordionItemHeading className={styles.headerTranscript}>
          <AccordionItemButton className={styles.transcript}>
            Transcript
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.panelText}>
          <Translate data={props.data.topic.tranScript} />
          {stateTranslate
            ? [dataTranslates].map((item, index) => <p key={index}>{item}</p>)
            : data.map((item, index) => (
                <p key={index}>
                  <strong> {item?.substring(0, item?.indexOf(":") - 1)}</strong>
                  {item?.substring(item?.indexOf(":"))}
                </p>
              ))}
        </AccordionItemPanel>
      </AccordionItem>
      {[dataTask].map((item, index) => (
        <Task1 {...item} key={index} />
      ))}
    </Accordion>
  );
}
