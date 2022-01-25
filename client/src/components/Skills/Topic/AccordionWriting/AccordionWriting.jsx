import { React, useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { FaFlag, FaSync } from "react-icons/fa";
import styles from "../AccordionListening/Accordion.module.css";
import style from "./AccordionWriting.module.css";
import Task1 from "../AccordionListening/Task/Task1";

export default function AccordionWriting(props) {
  const [data, setdata] = useState(props.data.topic.readingText.split("\n\n"));
  const [datatips, setdatatips] = useState(props.data.topic.tips.split("\n"));
  const [dataTask, setdataTask] = useState(props.data.topic.task[0].task1);

  useEffect(() => {
    setdata(props.data.topic.readingText.split("\n\n"));
    setdatatips(props.data.topic.tips.split("\n"));
    setdataTask(props.data.topic.task[0].task1);
  }, [props]);

  console.log(dataTask);

  return (
    <Accordion allowZeroExpanded className={styles.accordion}>
      <AccordionItem className={styles.item}>
        <AccordionItemHeading className={styles.headerTranscript}>
          <AccordionItemButton className={styles.transcript}>
            Reading Text
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.panelText}>
          {data.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
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
      {[dataTask].map((item) => (
        <Task1 {...item}/>
      ))}
    </Accordion>
  );
}
