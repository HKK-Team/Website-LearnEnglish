import { React, useState } from "react";
import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { AiOutlineClose } from "react-icons/ai";
import { FaFlag, FaHandPointDown, FaSync, FaThList } from "react-icons/fa";
import styles from "../Accordion.module.css";
import { RandomFuntion } from "../RandomFuntion";

const Task2 = (props) => {
  const [dataTask2, setdataTask2] = useState(
    Object.values(props.data.data.topic.task[1].task2)
  );
  //set up for task2
  const [draggedItem, setdraggedItem] = useState(0);
  const [draggedIdx, setdraggedIdx] = useState(0);
  //dialog task2
  const [dialog, setdialog] = useState(false);
  const [answerCorrect, setanswerCorrect] = useState(0);
  const [showAnswer, setshowAnswer] = useState(false);
  const [colorAnswertask2, setcolorAnswertask2] = useState([]);
  const [colorTask2, setcolorTask2] = useState(false);

  //drag and drop items on task2
  const onDragStart = (e, index) => {
    setdraggedItem(dataTask2[index]);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };
  //drag and drop items on task2
  const onDragOver = (index) => {
    const draggedOverItem = dataTask2[index];
    if (draggedItem === draggedOverItem) {
      return;
    }
    let items = dataTask2.filter((item) => item !== draggedItem);
    items.splice(index, 0, draggedItem);
    setdataTask2(items);
  };
  //drag and drop items on task2
  const onDragEnd = () => {
    setdraggedIdx(null);
  };
  const eventFinish = () => {
    setshowAnswer(true);
    setdialog(true);
    let count = 0;
    let key = [];
    for (let i = 0; i < dataTask2.length; i++) {
      const temp = parseInt(
        dataTask2[i].substring(dataTask2[i].indexOf("-") + 1)
      );
      if (temp === parseInt(i + 1)) {
        count++;
        key.push(i);
      }
    }
    setanswerCorrect(count);
    setcolorAnswertask2(key);
  };
  const eventTry = () => {
    setdataTask2(
      RandomFuntion(Object.values(props.data.data.topic.task[1].task2))
    );
    setdialog(false);
    setshowAnswer(false);
    setcolorAnswertask2([]);
    setcolorTask2(false);
  };
  const eventShowAnswer = () => {
    setcolorTask2(true);
    setdialog(false);
    let array = [];
    for (let i = 0; i < dataTask2.length; i++) {
      const temp = parseInt(
        dataTask2[i].substring(dataTask2[i].indexOf("-") + 1)
      );
      array[temp] = dataTask2[i];
    }
    setdataTask2(array);
  };
  return (
    <div>
      <AccordionItem className={styles.item}>
        <AccordionItemHeading className={styles.headerTranscript}>
          <AccordionItemButton className={styles.transcript}>
            Task2
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.panelTextForm}>
          <div className={styles.form}>
            {dialog ? (
              <div className={styles.dialogForm}>
                <p className={styles.text}>Feedback</p>
                <span className={styles.iconClose}>
                  <AiOutlineClose onClick={() => setdialog(false)} />
                </span>
                <p className={styles.total}>
                  Total score is {answerCorrect} out of {dataTask2.length} (
                  {((answerCorrect / dataTask2.length) * 100).toFixed(0)}%)
                </p>
              </div>
            ) : (
              ""
            )}

            <div>
              <p className={styles.textTitle}>
                Listening{" "}
                {props.data.data.nameLevel.substring(
                  props.data.data.nameLevel.indexOf(" ")
                )}
                : {props.data.data.topic.nameTopic} – 1
              </p>
              <p className={styles.subtitle}>Choose the correct answer.</p>
              <p className={styles.remaining}>
                {dataTask2.length} items remaining
              </p>
            </div>

            <div className={styles.checkBox}>
              <div className={styles.items}>
                <ul className={styles.item}>
                  {dataTask2.map((item, index) => (
                    <li
                      key={index}
                      onDragOver={() => onDragOver(index)}
                      style={{
                        backgroundColor: colorTask2
                          ? "#70cce4"
                          : colorAnswertask2.includes(index)
                          ? "#b8ecbc"
                          : "#dedae6",
                        //   :"#ffccc4"
                      }}
                    >
                      <div
                        className={styles.drag}
                        draggable
                        onDragStart={(e) => onDragStart(e, index)}
                        onDragEnd={onDragEnd}
                      >
                        {item.substring(0, item.indexOf("-"))}
                        <FaHandPointDown className={styles.icon} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.buttonCheck}>
                {showAnswer ? (
                  <button
                    className={styles.buttonFis}
                    onClick={eventShowAnswer}
                  >
                    <FaThList /> Show answers
                  </button>
                ) : (
                  <button className={styles.buttonFis} onClick={eventFinish}>
                    <FaFlag /> Finish
                  </button>
                )}

                <button className={styles.buttonTry} onClick={eventTry}>
                  <FaSync /> Try again
                </button>
              </div>
            </div>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    </div>
  );
};

export default Task2;
