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
import style from "./AccordionWriting.module.css";

export default function AccordionWriting(props) {
  const [dataTranslates, setdataTranslates] = useState([]);
  const [valueInput, setvalueInput] = useState("");
  const [dataCorrect, setdataCorrect] = useState("");
  const [checkData, setcheckData] = useState(false);

  const [data, setdata] = useState(props.data.topic.readingText.split("\n\n"));
  const [datatips, setdatatips] = useState(props.data.topic.tips.split("\n"));
  const [dataTask, setdataTask] = useState(props.data.topic.task[0].task1);

  useEffect(() => {
    dataCorrect.data !== undefined ? setcheckData(true) : setcheckData(false);
  }, [dataCorrect]);

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
  const eventGetData = (e) => {
    setvalueInput(e.target.value);
    setdataCorrect(e.target.value);
  };
  const eventSubmit = async () => {
    await fetch("/api1/gramformer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(valueInput),
    });

    await fetch("/api1/gramformer")
      .then((res) => res.json())
      .then((datas) => setdataCorrect(datas));
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
      <AccordionItem className={styles.item} style={{ marginLeft: -15 }}>
        <AccordionItemHeading className={styles.headerTranscript}>
          <AccordionItemButton className={styles.transcript}>
            Writing Text
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.panelText}>
          <div className={style.blockText}>
            {checkData ? (
              <textarea
                className={style.textAr}
                spellCheck="false"
                value={dataCorrect.data}
                onChange={eventGetData}
              />
            ) : (
              <textarea
                className={style.textAr}
                spellCheck="false"
                onChange={eventGetData}
              />
            )}
            <button className={style.btnCheck} onClick={eventSubmit}>
              <span>Check your text</span>
            </button>
          </div>
        </AccordionItemPanel>
      </AccordionItem>

      <div style={{ marginLeft: -15 }}>
        {[dataTask].map((item, index) => (
          <Task1 {...item} key={index} />
        ))}
      </div>
    </Accordion>
  );
}
