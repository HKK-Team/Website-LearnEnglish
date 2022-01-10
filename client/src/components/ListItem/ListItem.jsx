import React from "react";
import styles from "./ListItem.module.css";
import Image1 from "../../images/11.jpg";
import Image2 from "../../images/RS5825_169280449-hig.jpg";
import Image3 from "../../images/RS7522_ThinkstockPhotos-622015126-hig_0.jpg";
import Image4 from "../../images/RS8016_GettyImages-646457628-hig_2.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ListItem = () => {
  // const navigate = useNavigate()
  // const eventLink = (e) => {
  //   navigate(e)
  // };
  return (
    <div className={styles.contain}>
      <div className={styles.viewRow}>
        <div className={styles.imageFile}>
          <img src={Image1} alt="" />
        </div>
        <div className={styles.textView}>
          <Link to={""}>
            <h2>Listening</h2>
          </Link>
          <p>
            Here you can find activities to practise your listening skills.
            Listening will help you to improve your understanding of the
            language and your pronunciation.
          </p>
        </div>
      </div>

      <div className={styles.viewRow}>
        <div className={styles.imageFile}>
          <img src={Image2} alt="" />
        </div>
        <div className={styles.textView}>
          <Link to={""}>
            <h2>Reading</h2>
          </Link>
          <p>
            Here you can find activities to practise your writing skills. You
            can improve your writing by understanding model texts and how
            they're structured.
          </p>
        </div>
      </div>

      <div className={styles.viewRow}>
        <div className={styles.imageFile}>
          <img src={Image3} alt="" />
        </div>
        <div className={styles.textView}>
          <Link to={""}>
            <h2>Writing</h2>
          </Link>
          <p>
            Here you can find activities to practise your listening skills.
            Listening will help you to improve your understanding of the
            language and your pronunciation.
          </p>
        </div>
      </div>

      <div className={styles.viewRow}>
        <div className={styles.imageFile}>
          <img src={Image4} alt="" />
        </div>
        <div className={styles.textView}>
          <Link to={""}>
            <h2>Speaking</h2>
          </Link>
          <p>
            Here you can find activities to practise your speaking skills. You
            can improve your speaking by noticing the language we use in
            different situations and practising useful phrases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
