import { React, useContext, useEffect, useState } from "react";
import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FaFlag, FaSync } from "react-icons/fa";
import { GlobalState } from "../../../../../GlobalState";
import Pagination from "../../../../Pagination/Pagination";
import styles from "../Accordion.module.css";

const Task1 = (props) => {
  //pagination listening task1
  const state = useContext(GlobalState);
  const [currentPageListening] = state.listeningApi.currentPageListening;
  const [postsPerPageListening] = state.listeningApi.postsPerPageListening;
  const [currentPost, setcurrentPost] = useState([]);
  //set up data by task
  const [dataTask1] = useState(props.data.data.topic.task[0].task1);

  useEffect(() => {
    // Get current posts listening task1
    const indexofLastPost = currentPageListening * postsPerPageListening;
    const indexofFirstPost = indexofLastPost - postsPerPageListening;
    setcurrentPost(dataTask1.slice(indexofFirstPost, indexofLastPost));
  }, [currentPageListening]);
  //event dataTask1
  const eventGetdata = (e) => {
    console.log(e);
  };
  return (
    <div>
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
                {props.data.data.nameLevel.substring(
                  props.data.data.nameLevel.indexOf(" ")
                )}
                : {props.data.data.topic.nameTopic} – 1
              </p>
              <p className={styles.subtitle}>Choose the correct answer.</p>
              <p className={styles.remaining}>
                {props.data.data.topic.task[0].task1.length} items remaining
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
                        <label
                          className={styles.checkBoxMutiple}
                          onClick={(e) => eventGetdata(e)}
                          key={indexs}
                        >
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
    </div>
  );
};

export default Task1;
