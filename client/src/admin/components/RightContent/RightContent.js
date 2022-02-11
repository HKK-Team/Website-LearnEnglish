import React from "react";
import styles from "./RightContent.module.css";
import { FaHome, FaUserCircle, FaUserPlus,FaSignal } from "react-icons/fa";
import { AiFillSetting, AiTwotoneBell } from "react-icons/ai";

const RightContent = () => {
  return (
    <div>
      <div className={styles.headerRight}>
        <div className={styles.leftItem}>
          <div>
            <FaHome /> <span>/ Dashboard</span>
          </div>
          <h3>Dashboard</h3>
        </div>
        <div className={styles.rightItem}>
          <div>
            <input placeholder="Search here" />
          </div>
          <div className={styles.iconRightItem}>
            <span>
              <FaUserCircle style={{ fontSize: 22 }} />
            </span>
            <span>
              <AiFillSetting />
            </span>
            <span>
              <AiTwotoneBell />
            </span>
          </div>
        </div>
      </div>

      <div className={styles.widgetMain}>
        <div className={styles.widget}>
          <div className={styles.widgetMini}>
            <FaUserPlus />
          </div>
          <div className={styles.information}>
            <span>Followers</span>
            <h2>+91</h2>
          </div>
          <div className={styles.line}></div>
          <div className={styles.textInfor}>
            <span>Just updated</span>
          </div>
        </div>

        <div className={styles.widget}>
          <div className={styles.widgetMini}>
            <FaUserPlus />
          </div>
          <div className={styles.information}>
            <span>Followers</span>
            <h2>+91</h2>
          </div>
          <div className={styles.line}></div>
          <div className={styles.textInfor}>
            <span>Just updated</span>
          </div>
        </div>

        <div className={styles.widget}>
          <div className={styles.widgetMini}>
            <FaUserPlus />
          </div>
          <div className={styles.information}>
            <span>Followers</span>
            <h2>+91</h2>
          </div>
          <div className={styles.line}></div>
          <div className={styles.textInfor}>
            <span>Just updated</span>
          </div>
        </div>

        <div className={styles.widget}>
          <div className={styles.widgetMini}>
            <FaSignal />
          </div>
          <div className={styles.information}>
            <span>Followers</span>
            <h2>+91</h2>
          </div>
          <div className={styles.line}></div>
          <div className={styles.textInfor}>
            <span><strong style={{color:"#68bc64"}}>+3%</strong> than last month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContent;
