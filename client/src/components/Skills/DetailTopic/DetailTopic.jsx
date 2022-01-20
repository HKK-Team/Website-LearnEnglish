import { React, Fragment, useState, useEffect } from "react";
import styles from "../DetailSkills/DetailSkills.module.css";
import { Link } from "react-router-dom";
import SkillItem from "../../RightItem/SkillItem/SkillItem";
import RightItem from "../../RightItem/RightItem";

const DetailTopic = (props) => {
  const [data, setdata] = useState(props.data);
  const [datalevel,setdatalevel] = useState([]);

  useEffect(() => {
    setdata(props.data);
    if(props.data.length){
      setdatalevel(props.data[0].level.contentLevel.split('\n\n'))
    }
  }, [props.data]);

  if (!data.length) {
    return <div>loading</div>;
  }
  return (
    <Fragment>
      <div className={styles.conatiner}>
        <div className={styles.main}>
          <div className={styles.contentLeft}>
            <div className={styles.title}>
              <h2>{data[0]?.level.nameLevel}</h2>
            </div>
            <div className={styles.imageFiled}>
              <img src={data[0]?.level.images} alt="" />
            </div>
            <div className={styles.colorMain}>
              <div className={styles.blockColor1}></div>
              <div className={styles.blockColor2}>
                <p>
                  Are you looking for a face-to-face English course near you?
                </p>
                <button>
                  <Link
                    className={styles.textMeeting}
                    to={"/meeting"}
                    target={"_blank"}
                  >
                    Meeting
                  </Link>
                </button>
              </div>
              <div className={styles.blockColor3}></div>
            </div>

            <div className={styles.textIntro}>
              {datalevel.map((item,index) =>(
                <p className={styles.text} key={index}>{item}</p>

              ))}
              <h2>Choose a {(data[0]?.type).toLowerCase()} lesson</h2>
            </div>

            <div className={styles.contain}>
              {data.map((item) => (
                <div className={styles.viewRow} key={item._id}>
                  <div className={styles.imageFile}>
                    <img src={item?.level?.topic?.imageTopic} alt="" />
                  </div>
                  <div className={styles.textView}>
                    <Link to={item?.level?.topic?.slugTopic}>
                      <h2>{item?.level?.topic?.nameTopic}</h2>
                    </Link>
                    <p>
                      {item?.level?.topic?.contentTopic.substring(
                        0,
                        item?.level?.topic?.contentTopic.indexOf(".") + 1
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.contentRight}>
            <SkillItem />
            <RightItem />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailTopic;
