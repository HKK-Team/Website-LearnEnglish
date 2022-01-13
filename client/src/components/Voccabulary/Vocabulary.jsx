import { React, Fragment } from "react";
import styles from "./Vocabulary.module.css";
import RightItem from "../RightItem/RightItem";
import LevelRightItem from "../RightItem/LevelRightItem/LevelRightItem";
import ListItem from '../ListItem/ListItem'

const Vocabulary = () => {
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
              <ListItem/>
            </div>
          </div>
          <div className={styles.contentRight}>
            <LevelRightItem
              level1={"Beginner to pre-intermediate"}
              level2={"Intermediate to upper intermediate"}
              level3={"English grammar reference"}
              level4={"Business magazine"}
            />
            <RightItem />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Vocabulary;
