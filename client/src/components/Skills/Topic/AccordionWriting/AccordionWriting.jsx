import { React, useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import styles from "../AccordionListening/Accordion.module.css";
import Task1 from "../AccordionListening/Task/Task1";
import Translates from "../Translates/Translates";
import style from "./AccordionWriting.module.css";

export default function AccordionWriting(props) {
  const [dataTranslates, setdataTranslates] = useState([]);

  const [data, setdata] = useState(props.data.topic.readingText.split("\n\n"));
  const [datatips, setdatatips] = useState(props.data.topic.tips.split("\n"));
  const [dataTask, setdataTask] = useState(props.data.topic.task[0].task1);

  useEffect(() => {
    setdata(props.data.topic.readingText.split("\n\n"));
    setdatatips(props.data.topic.tips.split("\n"));
    setdataTask(props.data.topic.task[0].task1);
  }, [props]);

  const event = async () => {
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
      <AccordionItem className={styles.item} style={{ marginLeft: -15 }}>
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

      <div className={style.tips}>
        <h2>Tips</h2>
        {datatips.map((item, index) => (
          <p key={index}>
            {index + 1}. {item}
          </p>
        ))}
      </div>
      <div style={{ marginLeft: -15 }}>
        {[dataTask].map((item, index) => (
          <Task1 {...item} key={index} />
        ))}
      </div>
    </Accordion>
  );
}
