import { React, useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import styles from "./AccordionWriting.module.css";
import { FaFlag, FaSync, FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function AccordionWriting(props) {
  const [data, setdata] = useState(props.data.split("\n\n"));
  const [datatips, setdatatips] = useState(props.tips.split("\n"));

  useEffect(() => {
    setdata(props.data.split("\n\n"));
    setdatatips(props.tips.split("\n"));
  }, [props]);


  return (
    <Accordion allowZeroExpanded className={styles.accordion}>
      <AccordionItem className={styles.item}>
        <AccordionItemHeading className={styles.headerTranscript}>
          <AccordionItemButton className={styles.transcript}>
            Reading Text
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.panelText}>
          {data.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </AccordionItemPanel>
      </AccordionItem>

      <div className={styles.tips}>
            <h2>Tips</h2>
            {datatips.map((item,index) =>(
              <p key={index}>{index+1}. {item}</p>
            ))}
      </div>
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
                Speaking A1: Checking understanding – 1
              </p>
              <p className={styles.subtitle}>
                Are the sentences true or false?
              </p>
              <p className={styles.remaining}>6 items remaining</p>
            </div>

            <div className={styles.checkBox}>

              <div className={styles.itemChoise}>
                  <p className={styles.question}>1.Bob wants the hammer.</p>

                  <label className={styles.container}>
                    <input type="radio" name="radio" />
                    <span className={styles.checkmark}></span>
                    True
                  </label>

                  <label className={styles.container}>
                    <input type="radio" name="radio" />
                    <span className={styles.checkmark}></span>
                    False
                  </label>
              </div>

              <div className={styles.itemChoise}>
                  <p className={styles.question}>2.Paul is ill.</p>

                  <label className={styles.container}>
                    <input type="radio"name="radio" />
                    <span className={styles.checkmark}></span>
                    True
                  </label>

                  <label className={styles.container}>
                    <input type="radio" name="radio" />
                    <span className={styles.checkmark}></span>
                    False
                  </label>
              </div>

              <div className={styles.itemChoise}>
                  <p className={styles.question}>2.Paul is ill.</p>

                  <label className={styles.container}>
                    <input type="radio"name="radio" />
                    <span className={styles.checkmark}></span>
                    True
                  </label>

                  <label className={styles.container}>
                    <input type="radio" name="radio" />
                    <span className={styles.checkmark}></span>
                    False
                  </label>
              </div>

              <div className={styles.itemChoise}>
                  <p className={styles.question}>2.Paul is ill.</p>

                  <label className={styles.container}>
                    <input type="radio"name="radio" />
                    <span className={styles.checkmark}></span>
                    True
                  </label>

                  <label className={styles.container}>
                    <input type="radio" name="radio" />
                    <span className={styles.checkmark}></span>
                    False
                  </label>
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
