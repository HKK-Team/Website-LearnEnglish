import { Fragment, React, useEffect, useState } from "react";
import { Accordion } from "react-accessible-accordion";
import { Link } from "react-router-dom";
import LevelRightItem from "../../RightItem/LevelRightItem/LevelRightItem";
import RightItem from "../../RightItem/RightItem";
import TaskLession from "../../TaskLesson/TaskLesson";
import styles from "./DetailTopic.module.css";

const DetailTopic = (props) => {
  const [data, setdata] = useState(props.data);
  const [datalevel, setdatalevel] = useState([]);
  const [dataexample, setdataexample] = useState([]);
  const [dataexplan, setdataexplan] = useState([]);
  const [Grammarexplanation, setGrammarexplanation] = useState([]);
  const [dataTask, setdataTask] = useState([]);
  console.log(data[0]?.level?.topic?.slug);

  useEffect(() => {
    setdata(props.data);
    if (props.data.length) {
      setdataTask(props.data[0].level.topic.task);
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

  if (!data.length) {
    return <div>loading</div>;
  }

  return (
    <Fragment>
      <div className="grid wide">
        <div className="row">
          <div className="col l-9 m-12 c-12">
            <div className={styles.title}>
              <div className={styles.heading}>
                <p className={styles.depthLink}>
                  <Link to="/grammar">Grammar</Link>
                  <span> {">"} </span>
                  <span>{data[0]?.level?.slugLevel}</span>
                  <span> {">"} </span>
                  <span>{data[0]?.level?.topic?.slug}</span>
                </p>
                <div className={styles.line}></div>
                <h1
                  style={{
                    color: "#23085A",
                    margin: "30px 0 0 0",
                    fontSize: 36,
                  }}
                >
                  {props?.level?.nameLevel}
                </h1>
              </div>

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
                <div style={{ marginLeft: 15 }}>
                  {dataexample.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>

              <p>Try this exercise to test your grammar.</p>
            </div>

            <div className={styles.accordion}>
              <Accordion allowZeroExpanded style={{ marginLeft: 1 }}>
                {dataTask.map((items, index) =>
                  index === 0 ? <TaskLession {...items} key={index}/> : ""
                )}
              </Accordion>
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
                        <div style={{ marginLeft: 15 }}>
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
              <p className={styles.text}>
                Do this exercise to test your grammar again.
              </p>
              <div>
                <Accordion allowZeroExpanded style={{ marginLeft: 1 }}>
                  {dataTask.map((items, index) =>
                    index === 1 ? <TaskLession {...items} key={index}/> : ""
                  )}
                </Accordion>
              </div>
            </div>
          </div>
          <div className="col l-3 m-12 c-12" style={{ marginTop: 185 }}>
            <LevelRightItem
              level1={"Beginner to pre-intermediate"}
              level2={"Intermediate to upper intermediate"}
              level3={"English grammar reference"}
              sluglevel1={"beginner-to-pre-intermediate"}
              sluglevel2={"intermediate-to-upper-intermediate"}
              sluglevel3={"english-grammar-reference"}
            />
            <RightItem />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailTopic;
