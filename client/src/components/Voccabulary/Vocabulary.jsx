import { React, Fragment, useState, useEffect } from "react";
import styles from "./Vocabulary.module.css";
import RightItem from "../RightItem/RightItem";
import LevelRightItem from "../RightItem/LevelRightItem/LevelRightItem";
import ListItem from "../ListItem/ListItem";
import { Link } from "react-router-dom";

const Vocabulary = (props) => {
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
              Do you need to learn new words to understand and express yourself
              clearly in English?
            </p>
            <p>
              In this section you will find activities to help you learn the
              meaning, pronunciation and spelling of new words.
              <br />
              Learning vocabulary will help you improve your language level and
              communicate in English confidently and
              <br />
              effectively. The pages are organised by topic and include
              interactive exercises to help you learn and remember
              <br />
              the new words.
            </p>
            <div className={styles.listItem}>
              <h1>Choose your level to practise your vocabulary</h1>
              <div className={styles.contain}>
                {data[0].map((item) => (
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
          </div>
          <div className={styles.contentRight}>
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

export default Vocabulary;
