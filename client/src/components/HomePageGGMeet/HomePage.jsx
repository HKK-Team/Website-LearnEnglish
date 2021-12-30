import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import shortid from "shortid";
import styles from "./HomePage.module.scss";
import HeaderHomeGGMeet from "../UIGGMeet/HeaderHomeGGMeet/HeaderHomeGGMeet";

const HomePage = () => {
  const navigate = useNavigate();

  const startCall = (navigate) => {
    const uid = shortid.generate();
    navigate(`/${uid}#init`);
  };

  return (
    <div className={styles.home}>
      <HeaderHomeGGMeet />
      <div className={styles.body}>
        <div className={styles.leftSide}>
          <div className={styles.content}>
            <h2>Premium video meetings. Now free for everyone.</h2>
            <p>
              We re-engineered the service we built for secure business
              meetings, Google Meet, to make it free and available for all.
            </p>
            <div className={styles.actionBtn}>
              <button className={`${styles.btn} ${styles.green}`} onClick={startCall}>
                <FontAwesomeIcon className={styles.iconBlock} icon={faVideo} />
                New Meeting
              </button>
              <div className={styles.inputBlock}>
                <div className={styles.inputSection}>
                  <FontAwesomeIcon className={styles.iconBlock} icon={faKeyboard} />
                  <input placeholder="Enter a code or link" />
                </div>
                <button className={styles.btn}>Join</button>
              </div>
            </div>
          </div>
          <div className={styles.helpText}>
            <a href="">Learn more</a> about Google Meet
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.content}>
            <img src="https://www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
