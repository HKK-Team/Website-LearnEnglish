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
import {
  FaFlag,
  FaSync,
  FaAngleLeft,
  FaAngleRight,
  FaHandPointDown,
} from "react-icons/fa";

export default function Accordions(props) {
  const [data, setdata] = useState(props.data.split("\n\n"));
  const [item, setitem] = useState({
    items: ["Cake", "Donut", "Apple", "Pizza"],
  });
  const [draggedItem, setdraggedItem] = useState(0);
  const [draggedIdx, setdraggedIdx] = useState(0);

  useEffect(() => {
    setdata(props.data.split("\n\n"));
  }, [props.data]);

  const onDragStart = (e, index) => {
    setdraggedItem(item.items[index]);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  const onDragOver = (index) => {
    const draggedOverItem = item.items[index];
    if (draggedItem === draggedOverItem) {
      return;
    }
    let items = item.items.filter((item) => item !== draggedItem);
    items.splice(index, 0, draggedItem);
    setitem({ items });
  };

  const onDragEnd = () => {
    setdraggedIdx(null);
  };

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

      <AccordionItem className={styles.item}>
        <AccordionItemHeading className={styles.headerTranscript}>
          <AccordionItemButton className={styles.transcript}>
            Task1
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.panelTextForm}>
          <div className={styles.form}>
            <div>
              <p className={styles.textTitle}>
                Listening A1: A voicemail message – 1
              </p>
              <p className={styles.subtitle}>Choose the correct answer.</p>
              <p className={styles.remaining}>4 items remaining</p>
            </div>

            <div className={styles.checkBox}>
              <p className={styles.question}>John works at Old Time Toys.</p>

              <label className={styles.container}>
                <input type="radio" checked="checked" name="radio" />
                <span className={styles.checkmark}></span>
                Yes
              </label>

              <label className={styles.container}>
                <input type="radio" name="radio" />
                <span className={styles.checkmark}></span>
                No
              </label>

              <div className={styles.buttonCheck}>
                <button className={styles.buttonFis}>
                  <FaFlag /> Finish
                </button>
                <button className={styles.buttonTry}>
                  <FaSync /> Try again
                </button>
              </div>

              <div className={styles.pagination}>
                <ul className={styles.items}>
                  <li className={styles.item}>1</li>
                  <li className={styles.item}>2</li>
                  <li className={styles.item}>3</li>
                  <li className={styles.item}>4</li>
                </ul>
              </div>

              <div className={styles.buttonMove}>
                <button className={styles.buttonPrev}>
                  <FaAngleLeft />
                </button>
                <button className={styles.buttonNext}>
                  <FaAngleRight />
                </button>
              </div>
            </div>
          </div>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem className={styles.item}>
        <AccordionItemHeading className={styles.headerTranscript}>
          <AccordionItemButton className={styles.transcript}>
            Task2
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.panelTextForm}>
          <div className={styles.form}>
            <div>
              <p className={styles.textTitle}>
                Listening A1: A request from your boss – 2
              </p>
              <p className={styles.subtitle}>Choose the correct answer.</p>
              <p className={styles.remaining}>4 items remaining</p>
            </div>

            <div className={styles.checkBox}>
              <div className={styles.elements}>
                <div className={styles.items}>
                  <ul className={styles.item}>
                    {item.items.map((item, index) => (
                      <li key={index} onDragOver={() => onDragOver(index)}>
                        <div
                          className={styles.drag}
                          draggable
                          onDragStart={(e) => onDragStart(e, index)}
                          onDragEnd={onDragEnd}
                        >
                          {item}
                        </div>
                        <FaHandPointDown className={styles.icon} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.buttonCheck}>
                <button className={styles.buttonFis}>
                  <FaFlag /> Finish
                </button>
                <button className={styles.buttonTry}>
                  <FaSync /> Try again
                </button>
              </div>
            </div>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
