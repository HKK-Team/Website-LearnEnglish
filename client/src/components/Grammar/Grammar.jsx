import { React, Fragment,useState,useEffect } from "react";
import styles from "./Grammar.module.css";
import RightItem from "../RightItem/RightItem";
import LevelRightItem from "../RightItem/LevelRightItem/LevelRightItem";
import Image1 from "../../images/11.jpg";
import { Link } from "react-router-dom";

const Grammar = (props) => {
  const [data, setdata] = useState(props.data);

  useEffect(() => {
    setdata(props.data);
  }, [props.data]);

  if (!data[0].length) {
    return <div>loading</div>;
  }
  return (
    <Fragment>
      <div className={styles.containMain}>
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <p>
              Practise your English grammar with clear grammar explanations and
              practice exercises to test your understanding. All learners,
              whatever their level, have questions and doubts about grammar as
              they're learning English and this guide helps to explain the verb
              tenses and grammar rules in a clear and simple way.
            </p>
            <p>
              Choose your level, from beginner to advanced, and start learning
              today by reading the explanations and doing the exercises. By
              revising and practising your grammar you will increase your
              confidence in English and improve your language level.
            </p>
            <p>
              Decide which area of grammar you need help with today and choose a
              grammar point to work on. When you do the interactive exercises,
              you can see how well you've done.
            </p>
            <p>
              Practising little and often is the best way to improve your
              grammar, so come back tomorrow to choose another grammar point to
              work on. Good luck!
            </p>
            <h1>Choose a section</h1>
            <div className={styles.contain}>
              {data[0].map(item =>(
              <div className={styles.viewRow} key={item._id}>
                <div className={styles.imageFile}>
                  <img src={item.level.images} alt="" />
                </div>
                <div className={styles.textView}>
                  <Link to={item.level.slugLevel}>
                    <h2>{item.level.nameLevel}</h2>
                  </Link>
                  <p>
                    Here you can find activities to practise your listening
                    skills. Listening will help you to improve your
                    understanding of the language and your pronunciation.
                  </p>
                </div>
              </div>
              ))}
            </div>
          </div>

          <div className={styles.contentRight}>
            <LevelRightItem
              level1={"Beginner to pre-intermediate"}
              level2={"Intermediate to upper intermediate"}
              level3={"English grammar reference"}
            />
            <RightItem />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Grammar;
