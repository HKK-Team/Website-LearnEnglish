import { Fragment, React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LevelRightItem from "../../RightItem/LevelRightItem/LevelRightItem";
import RightItem from "../../RightItem/RightItem";
import styles from "../../Voccabulary/VocabularySkills/VocabularySkills.module.css";
import LessonCard from "../../LessonCard/LessonCard";
import style from '../../Skills/DetailSkills/DetailSkills.module.css'

const TopicGrammar = (props) => {
  const [data, setdata] = useState(props.data);
  const [datalevel, setdatalevel] = useState([]);

  useEffect(() => {
    setdata(props.data);
    if (props.data.length) {
      setdatalevel(props.data[0].level.contentLevel.split("\n\n"));
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
            <div className={styles.heading}>
              <p className={styles.depthLink}>
                <Link to="/grammar">Grammar</Link>

                <span> {">"} </span>
                <span>{data[0]?.level?.slugLevel}</span>
              </p>
              <div className={styles.line}></div>
              <h1
                style={{ color: "#23085A", margin: "30px 0 0 0", fontSize: 36 }}
              >
                {data[0]?.level.nameLevel}
              </h1>
            </div>
            <img
              src={data[0]?.level.images}
              alt="s"
              style={{ width: "100%" }}
            />
            <div className={styles.contactBox}>
              {datalevel.map((item, index) => (
                <p className={styles.text} key={index} style={{fontSize:18}}>
                  {item}
                </p>
              ))}
            </div>

            <div className={style.colorMain} style={{marginLeft:1}}>
              <div className={style.blockColor1}></div>
              <div className={style.blockColor2}>
                <p>
                  Are you looking for a face-to-face English course near you?
                </p>
                <button>
                  <Link
                    className={style.textMeeting}
                    to={"/meeting"}
                    target={"_blank"}
                  >
                    Meeting
                  </Link>
                </button>
              </div>
              <div className={style.blockColor3}></div>
            </div>

            <h2
              style={{ color: "#23085A", margin: "30px 0 0 0", fontSize: 36 }}
            >
              Choose a vocabulary lesson
            </h2>

            <div className={styles.containerLesson}>
              {[data[0].level.topic].map((item, index) => (
                <LessonCard _id={index} {...item} />
              ))}
            </div>

            {/* <div className={styles.heading}>
              <p className={styles.depthLink}>
                <Link to="/grammar">Grammar</Link>
                <span> {">"} </span>
                <span>{props?.level?.slugLevel}</span>
              </p>
              <div className={styles.line}></div>
              <h1
                style={{ color: "#23085A", margin: "30px 0 0 0", fontSize: 36 }}
              >
                {props?.level?.nameLevel}
              </h1>
            </div>

            <div className={styles.title}>
              <h2>{data[0]?.level.nameLevel}</h2>
            </div>
            <div className={styles.imageFiled}>
              <img src={data[0]?.level.images} alt="" />
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
              <h2>Choose a grammar lesson</h2>
            </div>

            <div className={styles.contain}>
              {data.map((item) => (
                <div className={styles.viewRow} key={item._id}>
                  <div className={styles.imageFile}>
                    <img src={item?.level?.topic?.imageTopic} alt="" />
                  </div>
                  <div className={styles.textView}>
                    <Link to={item?.level?.topic?.slug}>
                      <h2>{item?.level?.topic?.nameTopic}</h2>
                    </Link>
                    <p>
                      {item?.level?.topic?.contentTopic.substring(
                        0,
                        item?.level?.topic?.contentTopic.indexOf(".") + 1
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
          <div className="col l-3 m-12 c-12" style={{ marginTop: 193 }}>
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

export default TopicGrammar;
