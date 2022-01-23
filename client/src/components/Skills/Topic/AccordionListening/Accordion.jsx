import { React, useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import styles from "./Accordion.module.css";
import Task1 from "./Task/Task1";
import Task2 from "./Task/Task2";
import Task3 from "./Task/Task3";

export default function Accordions(props) {
  const [data, setdata] = useState(props.data.topic.tranScript.split("\n\n"));
  const [dataTask1, setdataTask1] = useState(props.data.topic.task[0].task1);
  const [dataTask2, setdataTask2] = useState(
    Object.values(props.data.topic.task[1].task2)
  );
  const [dataTask3, setdataTask3] = useState(props.data.topic.task[2].task3);

  useEffect(() => {
    setdata(props.data.topic.tranScript.split("\n\n"));
    setdataTask1(props.data.topic.task[0].task1);
    setdataTask2(Object.values(props.data.topic.task[1].task2));
    setdataTask3(props.data.topic.task[2].task3);
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
          {data.map((item, index) => (
            <p key={index}>
              <strong> {item?.substring(0, item?.indexOf(":") - 1)}</strong>
              {item?.substring(item?.indexOf(":"))}
            </p>
          ))}
        </AccordionItemPanel>
      </AccordionItem>

      {dataTask1.length ? <Task1 data={props} /> : " "}
      {dataTask2.length ? <Task2 data={props} /> : ""}
      {dataTask3.length ? <Task3 data={props} /> : ""}
    </Accordion>
  );
}
