import { Fragment, React, useEffect, useState } from "react";
import LessonCard from "../LessonCard/LessonCard";
import LevelRightItem from "../RightItem/LevelRightItem/LevelRightItem";
import RightItem from "../RightItem/RightItem";
import styles from "./Grammar.module.css";

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
      <div className="grid wide" style={{ marginTop: 60 }}>
        <div className="row">
          <div className="col l-9 m-12 c-12">
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
            <h1 style={{color:"#23085a"}}>Choose a grammar section</h1>
            <div className={styles.contain}>
              {data[0].slice(0, 2).map((item) => (
                <LessonCard {...item} />
              ))}
            </div>
          </div>

          <div className="col l-3 m-12 c-12">
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

export default Grammar;
