import { React, useContext, useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { FaFlag, FaHandPointDown, FaSync } from "react-icons/fa";
import { GlobalState } from "../../../../GlobalState";
import Pagination from "../../../Pagination/Pagination";
import styles from "./Accordion.module.css";

export default function Accordions(props) {
  //pagination listening task1
  const state = useContext(GlobalState);
  const [currentPageListening] = state.listeningApi.currentPageListening;
  const [postsPerPageListening] = state.listeningApi.postsPerPageListening;
  const [currentPost, setcurrentPost] = useState([]);

  const [data, setdata] = useState(props.data.topic.tranScript.split("\n\n"));
  const [dataTask1, setdataTask1] = useState(props.data.topic.task[0].task1);
  const [dataTask2, setdataTask2] = useState(
    Object.values(props.data.topic.task[1].task2)
  );
  const [dataTask3, setdataTask3] = useState(props.data.topic.task[2].task3);
  const [selectedOptions, setselectedOptions] = useState({});

  //set up for task2
  const [draggedItem, setdraggedItem] = useState(0);
  const [draggedIdx, setdraggedIdx] = useState(0);

  useEffect(() => {
    setdata(props.data.topic.tranScript.split("\n\n"));
    setdataTask1(props.data.topic.task[0].task1);
    setdataTask2(Object.values(props.data.topic.task[1].task2));
    setdataTask3(props.data.topic.task[2].task3);
  }, [props.data]);

  useEffect(() => {
    // Get current posts listening task1
    const indexofLastPost = currentPageListening * postsPerPageListening;
    const indexofFirstPost = indexofLastPost - postsPerPageListening;
    setcurrentPost(dataTask1.slice(indexofFirstPost, indexofLastPost));
  }, [currentPageListening]);

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

      {dataTask1 ? (
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
                  Listening{" "}
                  {props.data.nameLevel.substring(
                    props.data.nameLevel.indexOf(" ")
                  )}
                  : {props.data.topic.nameTopic} – 1
                </p>
                <p className={styles.subtitle}>Choose the correct answer.</p>
                <p className={styles.remaining}>
                  {props.data.topic.task[0].task1.length} items remaining
                </p>
              </div>

              <div className={styles.checkBox}>
                {currentPost.map((item, index) => (
                  <div key={index}>
                    <p className={styles.question}>{item.question}</p>
                    {Object.entries(item)
                      .slice(1, 5)
                      .map((items, indexs) =>
                        items[1] ? (
                          <label className={styles.checkBoxMutiple}>
                            <input type="radio" name="radio" />
                            <span className={styles.checkmark}></span>
                            {items[1]}
                          </label>
                        ) : (
                          ""
                        )
                      )}
                  </div>
                ))}

                <div className={styles.buttonCheck}>
                  <button className={styles.buttonFis}>
                    <FaFlag /> Finish
                  </button>
                  <button className={styles.buttonTry}>
                    <FaSync /> Try again
                  </button>
                </div>

                <Pagination data={dataTask1} />
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      ) : (
        " "
      )}

      {dataTask2 ? (
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
                  Listening{" "}
                  {props.data.nameLevel.substring(
                    props.data.nameLevel.indexOf(" ")
                  )}
                  : {props.data.topic.nameTopic} – 1
                </p>
                <p className={styles.subtitle}>Choose the correct answer.</p>
                <p className={styles.remaining}>
                  {props.data.topic.task[0].task1.length} items remaining
                </p>
              </div>

              <div className={styles.checkBox}>
                <div className={styles.items}>
                  <ul className={styles.item}>
                    {dataTask2.map((item, index) => (
                      <li key={index} onDragOver={() => onDragOver(index)}>
                        <div
                          className={styles.drag}
                          draggable
                          onDragStart={(e) => onDragStart(e, index)}
                          onDragEnd={onDragEnd}
                        >
                          {item.substring(0,item.indexOf('-'))}
                          <FaHandPointDown className={styles.icon} />
                        </div>
                      </li>
                    ))}
                  </ul>
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
      ) : (
        ""
      )}
      {dataTask3 ? (
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
                  {props.data.nameLevel.substring(
                    props.data.nameLevel.indexOf(" ")
                  )}
                  : {props.data.topic.nameTopic} – 1
                </p>
                <p className={styles.subtitle}>
                  Match the verbs and nouns from the interview.
                </p>
                <p className={styles.remaining}>
                  {Object.keys(props.data.topic.task[2].task3[1]).length} items
                  remaining
                </p>
              </div>

              <div className={styles.checkBox}>
                <div className={styles.itemSelection}>
                  <ul>
                    {Object.entries(dataTask3[0]).map((item, index) => (
                      <li key={index}>
                        <div>
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
                        <div className={styles.addSelection}></div>
                      </div>
                    </div>
                  ))}
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
      ) : (
        ""
      )}
    </Accordion>
  );
}
