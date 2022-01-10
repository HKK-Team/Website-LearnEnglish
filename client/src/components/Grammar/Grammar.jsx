import React from "react";
import styles from "./Grammar.module.css";
import RightItem from "../RightItem/RightItem";

const Grammar = () => {
  return (
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
            grammar point to work on. When you do the interactive exercises, you
            can see how well you've done.
          </p>
          <p>
            Practising little and often is the best way to improve your grammar,
            so come back tomorrow to choose another grammar point to work on.
            Good luck!
          </p>
        </div>

        <div className={styles.contentRight}>
          <RightItem />
        </div>
      </div>
    </div>
  );
};

export default Grammar;
