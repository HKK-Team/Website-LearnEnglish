import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaSignal, FaUserPlus } from "react-icons/fa";
import styles from "./RightContent.module.css";
import HeaderSideBar from '../HeaderSideBar/HeaderSideBar'

const RightContent = () => {
  return (
    <div>
      <HeaderSideBar/>
      <div className={styles.widgetMain}>
        <div className={styles.widget}>
          <div
            className={styles.widgetMini}
            style={{ backgroundColor: "#30344c" }}
          >
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
          <div
            className={styles.widgetMini}
            style={{ backgroundColor: "#44a0f0" }}
          >
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
          <div
            className={styles.widgetMini}
            style={{ backgroundColor: "#60b464" }}
          >
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
          <div
            className={styles.widgetMini}
            style={{ backgroundColor: "#f03c74" }}
          >
            <FaSignal />
          </div>
          <div className={styles.information}>
            <span>Followers</span>
            <h2>+91</h2>
          </div>
          <div className={styles.line}></div>
          <div className={styles.textInfor}>
            <span>
              <strong style={{ color: "#68bc64" }}>+3%</strong> than last month
            </span>
          </div>
        </div>
      </div>

      <div className={styles.widgetTopic}>
        <div className={styles.widgetTopicMini}>
          <div className={styles.widgetMini}>
            <img
              src={
                "https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/430x261_4/public/2021-09/GettyImages-1072206958_0.jpg?itok=qJTgFre7"
              }
              alt=""
            />
          </div>
          <div className={styles.information}>
            <h4>Website Views</h4>
            <span>Last Campaign Performance</span>
          </div>
          <div className={styles.line}></div>
          <div className={styles.textInfor}>
            <span>
              <AiOutlineClockCircle /> campaign sent 2 days ago
            </span>
          </div>
        </div>

        <div className={styles.widgetTopicMini}>
          <div className={styles.widgetMini}>
            <img
              src={
                "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
              }
              alt=""
            />
          </div>
          <div className={styles.information}>
            <h4>Website Views</h4>
            <span>Last Campaign Performance</span>
          </div>
          <div className={styles.line}></div>
          <div className={styles.textInfor}>
            <span>
              <AiOutlineClockCircle /> campaign sent 2 days ago
            </span>
          </div>
        </div>

        <div className={styles.widgetTopicMini}>
          <div className={styles.widgetMini}>
            <img
              src={
                "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
              }
              alt=""
            />
          </div>
          <div className={styles.information}>
            <h4>Website Views</h4>
            <span>Last Campaign Performance</span>
          </div>
          <div className={styles.line}></div>
          <div className={styles.textInfor}>
            <span>
              <AiOutlineClockCircle /> campaign sent 2 days ago
            </span>
          </div>
        </div>
      </div>

      <div className={styles.widgetTopicSecond}>
        <div className={styles.widgetTopicMini}>
          <div className={styles.widgetMini}>
            <img
              src={
                "https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/430x261_4/public/2021-09/GettyImages-1072206958_0.jpg?itok=qJTgFre7"
              }
              alt=""
            />
          </div>
          <div className={styles.information}>
            <h4>Website Views</h4>
            <span>Last Campaign Performance</span>
          </div>
          <div className={styles.line}></div>
          <div className={styles.textInfor}>
            <span>
              <AiOutlineClockCircle /> campaign sent 2 days ago
            </span>
          </div>
        </div>

        <div className={styles.widgetTopicMini}>
          <div className={styles.widgetMini}>
            <img
              src={
                "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
              }
              alt=""
            />
          </div>
          <div className={styles.information}>
            <h4>Website Views</h4>
            <span>Last Campaign Performance</span>
          </div>
          <div className={styles.line}></div>
          <div className={styles.textInfor}>
            <span>
              <AiOutlineClockCircle /> campaign sent 2 days ago
            </span>
          </div>
        </div>

        <div className={styles.widgetTopicMini}>
          <div className={styles.widgetMini}>
            <img
              src={
                "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
              }
              alt=""
            />
          </div>
          <div className={styles.information}>
            <h4>Website Views</h4>
            <span>Last Campaign Performance</span>
          </div>
          <div className={styles.line}></div>
          <div className={styles.textInfor}>
            <span>
              <AiOutlineClockCircle /> campaign sent 2 days ago
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContent;
