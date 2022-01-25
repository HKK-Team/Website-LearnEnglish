import { React, useState } from "react";
import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FaFlag, FaHandPointDown, FaSync, FaThList } from "react-icons/fa";
import styles from "../Accordion.module.css";

const Task3 = (props) => {
  const [dataTask3] = useState(props.data.data.topic.task[2].task3);
  const [showAnswer, setshowAnswer] = useState(false);

  const eventFinish = () => {
    setshowAnswer(true);
  };
  const eventTry = () => {};
  const eventShowAnswer = () => {};

  const drop = (e) => {
    e.preventDefault();

    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);
    card.style.display = "block";

    e.target.appendChild(card);
    // e.preventDefault();
    // var data = e.dataTransfer.getData("text");
    // e.target.appendChild(document.getElementById(data));
  };
  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragStart = (e) => {
    // e.dataTransfer.setData("text", e.target.id);
    const target = e.target;

    e.dataTransfer.setData("card_id", target.id);

    // setTimeout(() => {
    //   e.target.style.display = "none";
    // }, 0);
  };

  return (
    <div>
      <AccordionItem className={styles.item}>
        <AccordionItemHeading className={styles.headerTranscript}>
          <AccordionItemButton className={styles.transcript}>
            Task3
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.panelTextForm}>
          <div className={styles.form}>
            <div>
              <p className={styles.textTitle}>
                Listening{" "}
                {props.data.data.nameLevel.substring(
                  props.data.data.nameLevel.indexOf(" ")
                )}
                : {props.data.data.topic.nameTopic} – 1
              </p>
              <p className={styles.subtitle}>
                Match the verbs and nouns from the interview.
              </p>
              <p className={styles.remaining}>
                {Object.keys(props.data.data.topic.task[2].task3[1]).length}{" "}
                items remaining
              </p>
            </div>

            <div className={styles.checkBox}>
              <div className={styles.itemSelection}>
                <ul>
                  {Object.entries(dataTask3[0]).map((item, index) => (
                    <li
                      key={index}
                      onDrop={(e) => drop(e)}
                      onDragOver={(e) => dragOver(e)}
                      onDragStart={(e) => dragStart(e)}
                    >
                      <div
                        id="dragtarget"
                        draggable="true"
                        onDragStart={(e) => dragStart(e)}
                      >
                        {item[1].substring(0, item[1].indexOf("-"))}{" "}
                        <FaHandPointDown className={styles.iconSelection} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.blockContent}>
                {Object.entries(dataTask3[1]).map((item, index) => (
                  <div className={styles.content} key={index}>
                    <div className={styles.contentLeft}>
                      <p>{item[1]}</p>
                    </div>
                    <div className={styles.contentRight}>
                      <div
                        className={styles.addSelection}
                        onDrop={(e) => drop(e)}
                        onDragOver={(e) => dragOver(e)}
                      ></div>
                    </div>
                  </div>
                ))}
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

export default Task3;
