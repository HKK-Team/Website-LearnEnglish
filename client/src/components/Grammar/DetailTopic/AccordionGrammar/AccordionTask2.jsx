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
import { FaFlag,FaSync,FaAngleLeft,FaAngleRight } from "react-icons/fa";

export default function Accordions(props) {
  // const [data, setdata] = useState(props.data.split("\n\n"));

  // useEffect(() => {
  //   setdata(props.data.split("\n\n"));
  // }, [props.data]);

  return (
    <Accordion allowZeroExpanded className={styles.accordion}>
     
      <AccordionItem className={styles.item}>
        <AccordionItemHeading className={styles.headerTranscript}>
          <AccordionItemButton className={styles.transcript}>
            Grammar Test 2
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
                <button className={styles.buttonFis}><FaFlag/> Finish</button>
                <button className={styles.buttonTry}><FaSync/> Try again</button>
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
                <button className={styles.buttonPrev}><FaAngleLeft/></button>
                <button className={styles.buttonNext}><FaAngleRight/></button>
              </div>

            </div>
          </div>
        </AccordionItemPanel>
      </AccordionItem>

    </Accordion>
  );
}
