import { React, useState } from "react";
import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { AiOutlineClose } from "react-icons/ai";
import { FaFlag, FaSync, FaThList } from "react-icons/fa";
import styles from "../Accordion.module.css";

var arrayChoise = [];
export default function Task3(props) {
  const [showAnswer, setshowAnswer] = useState(false);
  const [dialog, setdialog] = useState(false);
  const [dataTask3, setdataTask3] = useState(
    Object.values(props.data.topic.task[2].task3)
  );
  const [radioValue, setRadioValue] = useState(arrayChoise);
  const [numberCorrect, setnumberCorrect] = useState(0);
  const [colorTask3, setcolorTask3] = useState(false);

  const eventFinish = () => {
    let data = [];

    let sum = 0;
    radioValue.sort(function (a, b) {
      return parseInt(a[0]) - parseInt(b[0]);
    });
    for (let i = 0; i < radioValue.length; i++) {
      if (i === radioValue.length - 1) {
        data.push(radioValue[i]);
        break;
      }
      if (radioValue[i][0] !== radioValue[i + 1][0]) {
        data.push(radioValue[i]);
      }
    }

    for (let i = 0; i < dataTask3.length; i++) {
      const temp = parseInt(
        dataTask3[i].substring(dataTask3[i].indexOf("-") + 1)
      );
      for (let j = 0; j < data.length; j++) {
        if (i === parseInt(data[j][0]) && temp === parseInt(data[j][1])) {
          sum++;
        }
      }
    }

    setnumberCorrect(sum);
    setdialog(true);
    setshowAnswer(true);
  };
  const eventTry = () => {
    setdialog(false);
    setshowAnswer(false);
    window.location.reload();
  };
  const eventShowAnswer = () => {
    setdialog(false);
    setcolorTask3(true);
  };
  const onChange = (e) => {
    let temp = e.target.value.split("-");
    arrayChoise.push(temp);
  };

  return (
    <AccordionItem className={styles.item}>
      <AccordionItemHeading className={styles.headerTranscript}>
        <AccordionItemButton className={styles.transcript}>
          Task 3
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
                Total score is {numberCorrect} out of {dataTask3.length} (
                {((numberCorrect / dataTask3.length) * 100).toFixed(0)}%)
              </p>
            </div>
          ) : (
            ""
          )}

          <div>
            <p className={styles.textTitle}>
              {props.data.nameLevel}: {props.data.topic.nameTopic}
            </p>
            <p className={styles.subtitle}>Are the sentences true or false?</p>
            <p className={styles.remaining}>
              {dataTask3.length} items remaining
            </p>
          </div>

          <div className={styles.blockMutipleChoise}>
            {dataTask3.map((item, index) =>
              item !== "" ? (
                <div key={index}>
                  <div className={styles.ItemChoise} style={{ width: 530 }}>
                    <p className={styles.textTranform}>
                      {item.substring(0, item.indexOf("-"))}
                    </p>
                  </div>

                  <div className={styles.ItemChoise}>
                    <form>
                      <div
                        className={styles.boolItem}
                        style={{
                          backgroundColor: colorTask3
                            ? parseInt(
                                item.substring(item.indexOf("-") + 1)
                              ) === 1
                              ? "#70cce4"
                              : "#fff"
                            : "#fff",
                        }}
                      >
                        <input
                          type="radio"
                          name="radio"
                          value={`${index}-1`}
                          onChange={onChange}
                        />
                        <span>True</span>
                      </div>
                      <div
                        className={styles.boolItem}
                        style={{
                          backgroundColor: colorTask3
                            ? parseInt(
                                item.substring(item.indexOf("-") + 1)
                              ) === 0
                              ? "#70cce4"
                              : "#fff"
                            : "#fff",
                        }}
                      >
                        <input
                          type="radio"
                          name="radio"
                          value={`${index}-0`}
                          onChange={onChange}
                        />
                        <span>False</span>
                      </div>
                    </form>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>

          <div className={styles.checkBox}>
            <div className={styles.buttonCheck}>
              {showAnswer ? (
                <button className={styles.buttonFis} onClick={eventShowAnswer}>
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
  );
}
