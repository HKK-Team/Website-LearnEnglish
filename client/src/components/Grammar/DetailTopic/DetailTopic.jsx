import styles from "./DetailTopic.module.css";
import { React, Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SkillItem from "../../RightItem/SkillItem/SkillItem";
import RightItem from "../../RightItem/RightItem";
import Accordions from "./AccordionGrammar/AccordionTask1";
import Accordions1 from "./AccordionGrammar/AccordionTask2";

const DetailTopic = (props) => {
  const [data, setdata] = useState(props.data);
  const [datalevel, setdatalevel] = useState([]);
  const [dataexample, setdataexample] = useState([]);
  const [dataexplan, setdataexplan] = useState([]);
  const [Grammarexplanation, setGrammarexplanation] = useState([]);

  useEffect(() => {
    setdata(props.data);
    if (props.data.length) {
      let temp = props.data[0].level.topic.contentTopic;
      let array = [];
      let explan = props.data[0].level.topic.grammarExplanation;
      setdatalevel(temp.substring(0, temp.indexOf(".")).split("\n\n"));
      setdataexample(temp.substring(temp.indexOf(".") + 3).split("\n"));
      setdataexplan(
        props.data[0].level.topic.grammarExplanation.intro.split("\n")
      );
      for (let element in explan) {
        array.push(explan[element]);
      }
      setGrammarexplanation(array);
    }
  }, [props.data]);

  console.log(Grammarexplanation);

  if (!data.length) {
    return <div>loading</div>;
  }

  return (
    <Fragment>
      <div className={styles.conatiner}>
        <div className={styles.main}>
          <div className={styles.contentLeft}>
            <div className={styles.title}>
              <h2>{data[0]?.level.topic.nameTopic}</h2>
            </div>
            <div className={styles.imageFiled}>
              <img src={data[0]?.level.topic.imageTopic} alt="" />
            </div>
            <div className={styles.colorMain}>
              <div className={styles.blockColor1}></div>
              <div className={styles.blockColor2}>
                <p>
                  Are you looking for a face-to-face English course near you?
                </p>
                <button>
                  <Link
                    className={styles.textMeeting}
                    to={"/meeting"}
                    target={"_blank"}
                  >
                    Meeting
                  </Link>
                </button>
              </div>
              <div className={styles.blockColor3}></div>
            </div>

            <div className={styles.textIntro}>
              {datalevel.map((item, index) => (
                <p className={styles.text} key={index}>
                  {item}
                </p>
              ))}

              <div className={styles.textExample}>
                <div className={styles.line}></div>
                <div>
                  {dataexample.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>

              <p>Try this exercise to test your grammar.</p>
            </div>

            <div className={styles.accordion}>
              <Accordions />
              <p className={styles.text}>Read the explanation to learn more.</p>
            </div>

            <div className={styles.grammarExplan}>
              <h2>Grammar explanation</h2>
              <div>
                {dataexplan.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              {Grammarexplanation.slice(1).map((item, index) => (
                <div className={styles.element} key={index}>
                  <h2>{item[0].title}</h2>

                  {item.map((item1, index1) => (
                    <div key={index1}>
                      <p>{item1.explanation}</p>

                      <div className={styles.textExample}>
                        <div className={styles.line}></div>
                        <div>
                          {item1.example
                            .split("\n")
                            .map((item2, index2) =>
                              item2 ? <p key={index2}>{item2}</p> : ""
                            )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className={styles.accordion1}>
              <p className={styles.text}>Do this exercise to test your grammar again.</p>
              <div>
                  <Accordions1/>
              </div>
            </div>

          </div>
          <div className={styles.contentRight}>
            <SkillItem />
            <RightItem />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailTopic;
