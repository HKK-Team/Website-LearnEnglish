import { React, Fragment, useState, useEffect } from "react";
import styles from "./DetailSkills.module.css";
import { Link } from "react-router-dom";
import SkillItem from "../../RightItem/SkillItem/SkillItem";
import RightItem from "../../RightItem/RightItem";

const DetailSkills = (props) => {
  const [data, setdata] = useState(props.data);
  const [dataContentType,setdataContentType] = useState([])

  useEffect(() => {
    setdata(props.data);
    if(props.data[0].length !== 0){
      setdataContentType(props.data[0][0].contentType.split('\n\n'))
    }
  }, [props.data]);

  if (!data[0].length) {
    return <div>loading</div>;
  }

  return (
    <Fragment>
      <div className={styles.conatiner}>
        <div className={styles.main}>
          <div className={styles.contentLeft}>
            <div className={styles.title}>
              <h2>{data[0][0]?.type}</h2>
            </div>
            <div className={styles.imageFiled}>
              <img src={data[0][0]?.imageType} alt="" />
            </div>
            <div className={styles.colorMain}>
              <div className={styles.blockColor1}></div>
              <div className={styles.blockColor2}>
                <p>
                  Are you looking for a face-to-face English course near you?
                </p>
                <button>
                  <Link className={styles.textMeeting} to={"/meeting"} target={"_blank"}>Meeting</Link>
                </button>
              </div>
              <div className={styles.blockColor3}></div>
            </div>

            <div className={styles.textIntro}>
              {dataContentType.map((item,index) =>(
                <p className={styles.text} key={index}>{item}</p>
              ))}
              <h2>Choose your level to practise your {(data[0][0]?.type).toLowerCase()}</h2>
            </div>

            <div className={styles.contain}>
              {data[0].slice(0,5).map((item) => (
                <div className={styles.viewRow} key={item._id}>
                  <div className={styles.imageFile}>
                    <img src={item.level.images} alt="" />
                  </div>
                  <div className={styles.textView}>
                    <Link to={item.level.slugLevel}>
                      <h2>{item.level.nameLevel}</h2>
                    </Link>
                    <p>
                      {item.level.contentLevel.substring(
                        0,
                        item.level.contentLevel.indexOf(".") + 1
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

export default DetailSkills;
