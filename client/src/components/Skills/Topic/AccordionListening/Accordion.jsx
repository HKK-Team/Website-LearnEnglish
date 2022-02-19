import { React, useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import styles from "./Accordion.module.css";
import Task1 from "./Task/Task1";
import Task2 from "./Task/Task2";
import Task3 from "./Task/Task3";
import Translates from "../Translates/Translates";

export default function Accordions(props) {
  const [dataTranslates, setdataTranslates] = useState([]);

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
            Transcript
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.panelText}>
          <Translates data={dataTranslates} />
          {data.map((item, index) => (
            <p key={index} onMouseUp={event}>
              <strong> {item?.substring(0, item?.indexOf(":"))}</strong>
              {item?.substring(item?.indexOf(":"))}
            </p>
          ))}
        </AccordionItemPanel>
      </AccordionItem>
      <div style={{ marginLeft: -15 }}>
        {[dataTask1].length
          ? [dataTask1].map((item, index) => <Task1 {...item} key={index} />)
          : ""}

        {dataTask2[0] === "" ? "" : <Task2 data={props} />}

        {dataTask3?.text1 === ""
          ? ""
          : [dataTask3].map((item, index) => (
              <Task3 data={props.data} key={index} />
            ))}
      </div>
    </Accordion>
  );
}
