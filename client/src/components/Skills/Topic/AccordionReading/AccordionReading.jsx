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
import Translates from "../Translates/Translates";

export default function AccordionReading(props) {
  const [dataTranslates, setdataTranslates] = useState([]);

  const [data, setdata] = useState(props.data.topic.readingText.split("\n\n"));
  const [dataTask, setdataTask] = useState(props.data.topic.task[0].task1);

  useEffect(() => {
    setdata(props.data.topic.readingText.split("\n\n"));
    setdataTask(props.data.topic.task[0].task1);
  }, [props.data]);

  const event = async (e) => {
    let array = [];
    let temp = document.getSelection().toString();
    temp.trim();
    array.push(temp);

    if (temp !== "") {
      await fetch("/api1/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(temp),
      });

      await fetch("/api1/translate")
        .then((res) => res.json())
        .then((datas) => {
          array.push(datas);
        });
      setdataTranslates(array);
    }
  };

  return (
    <Accordion allowZeroExpanded className={styles.accordion}>
      <AccordionItem className={styles.item}>
        <AccordionItemHeading className={styles.headerTranscript}>
          <AccordionItemButton className={styles.transcript}>
            Reading Text
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.panelText}>
          <Translates data={dataTranslates} />
          {data.map((item, index) => (
            <p key={index} onMouseUp={event}>
              {item}
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
