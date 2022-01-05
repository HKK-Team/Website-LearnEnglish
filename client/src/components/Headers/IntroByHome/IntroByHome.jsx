import React from "react";
import styles from "../Header.module.css";
import { Link } from "react-router-dom";

const IntroByHome = () => {
  return (
    <div>
      <h1>
        English Online & <br />
        <span>Grammar</span> <br /> Skills
      </h1>
      <p className={styles.par}>
        Are you ready to move beyond standard grammar correctors that <br />
        miss even basic grammar and spelling errors? Grammarly’s <br />
        online grammar checker scans your text for all types of mistakes.
      </p>
      <button className={styles.cn}>
        <Link to={""}>Get Started</Link>
      </button>
    </div>
  );
};

export default IntroByHome;
