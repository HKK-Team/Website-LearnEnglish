import {
  Fragment,
  React,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import RightItem from "../RightItem/RightItem";
import styles from "./BookingMeeting.module.css";
import Image from "../../images/1.jpg";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import axios from "axios";
import PaypalButton from "./PaypalButton";

const BookingMeeting = () => {
  const state = useContext(GlobalState);
  const [user] = state.userApi.user;
  const [grammar] = state.grammarApi.dataGrammar;
  const [vocabulary] = state.vocabularyApi.vocData;
  const [dataListening] = state.listeningApi.dataListening;
  const [dataReading] = state.readingApi.dataReading;
  const [dataSpeaking] = state.speakingApi.dataSpeaking;
  const [dataWriting] = state.writingApi.dataWriting;

  const [changeState, setchangeState] = useState(true);
  const [dataBooking, setdataBooking] = useState([]);
  const [score, setsocre] = useState(1);
  const [dataBookRoom, setdataBookRoom] = useState({});
  const [dataTotal, setdataTotal] = useState(1);
  const [createmeeting, setcreatemeeting] = useState({
    email: user.email,
    nameLectures: user?.firstname + " " + user?.lastname,
    nameSkills: "",
    levelSkill: "",
    nameTopic: "",
    dayCreate: "",
    hourCreate: "",
    message: "Have a good study session !",
    costTopic: "",
  });
  useEffect(() => {
    let array = [];
    array.push(...dataListening);
    array.push(...dataReading);
    array.push(...dataSpeaking);
    array.push(...dataWriting);
    array.push(...grammar);
    array.push(...vocabulary);
    setdataTotal(array);
  }, [
    dataListening,
    dataReading,
    dataSpeaking,
    dataWriting,
    grammar,
    vocabulary,
  ]);
  // console.log(dataTotal);

  useEffect(() => {
    const databookApi = async () => {
      const data = await axios.get("http://localhost:5000/api/getbookmeeting");
      setdataBooking(data.data);
    };
    databookApi();
  }, []);

  useEffect(() => {
    if (user.position === "lecturers") setchangeState(true);
    else setchangeState(false);
  }, [user]);

  useEffect(() => {
    var grouped = dataBooking.reduce(function (obj, product) {
      obj[product.nameLectures] = obj[product.nameLectures] || [];
      obj[product.nameLectures].push({
        nameSkills: product.nameSkills,
        levelSkill: product.levelSkill,
        nameTopic: product.nameTopic,
        dayCreate: product.dayCreate,
        hourCreate: product.hourCreate,
        costTopic: product.costTopic,
      });
      return obj;
    }, {});

    var groups = Object.keys(grouped).map(function (key) {
      return { product: key, nameLectures: grouped[key] };
    });
    console.log(groups);
    setdataBookRoom(groups);
    // const result = Array.from(new Set(dataBooking.map(s => s.nameLectures)))
    // .map(lab => {
    //   return {
    //     nameLectures: lab,
    //     data: dataBooking.filter(s => s.nameLectures === lab).map(edition => edition.data)
    //   }
    // })
    //   console.log(result);
  }, [dataBooking]);

  const eventChange = () => {
    setchangeState(false);
  };
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setcreatemeeting({ ...createmeeting, [name]: value });
  };
  const NewTopicSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/bookingmeeting", {
        ...createmeeting,
      });
      alert("Create Successfully!");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const tranSuccess = async (payment) => {
    console.log(payment);
    const { paymentID } = payment;
    await axios.post("http://localhost:5000/api/payment", {
      paymentID,
      // email,
      // nameLectures,
      // nameSkills,
      // levelSkill,
      // nameTopic,
      // dayCreate,
      // hourCreate,
      // costTopic,
      score,
    });
  };
  const onchangInput = (e) => {
    setsocre(e.target.value);
  };
  return (
    <Fragment>
      <div className="grid wide" style={{ marginTop: 60 }}>
        <div className="row">
          <div className="col l-9 m-12 c-12">
            <div className={styles.container}>
              {changeState ? (
                <div className={styles.block}>
                  <div className={styles.left}>
                    <h3>Create a Meeting</h3>
                    <form onSubmit={NewTopicSubmit}>
                      <div>
                        <select
                          style={{ marginLeft: 200, width: 200 }}
                          name="nameSkills"
                          className={styles.selectOption}
                          value={createmeeting.nameSkills}
                          onChange={onChangeInput}
                        >
                          <option value="">Options: </option>
                          <option value="listening">Update: Listening</option>
                          <option value="reading">Update: Reading</option>
                          <option value="speaking">Update: Speaking</option>
                          <option value="writing">Update: Writing</option>
                        </select>

                        <select
                          style={{ marginLeft: 5, width: 200 }}
                          name="levelSkill"
                          className={styles.selectOption}
                          value={createmeeting.levelSkill}
                          onChange={onChangeInput}
                        >
                          <option value="">Options: </option>
                          <option value="Beginner A1">
                            Update: Beginner A1
                          </option>
                          <option value="Pre-intermediate A2">
                            Update: Pre-intermediate A2
                          </option>
                          <option value="Intermediate B1">
                            Update: Intermediate B1
                          </option>
                          <option value="Upper intermediate B2">
                            Update: Upper intermediate B2
                          </option>
                          <option value="Advanced C1">
                            Update: Advanced C1
                          </option>
                        </select>
                      </div>

                      <div className={styles.typeInput}>
                        <input
                          name="nameTopic"
                          value={createmeeting.nameTopic}
                          onChange={onChangeInput}
                          spellCheck="false"
                          className={styles.typeInputValues}
                          placeholder="Please type name content..."
                        />
                      </div>
                      <div className={styles.typeInput}>
                        <input
                          name="dayCreate"
                          value={createmeeting.dayCreate}
                          onChange={onChangeInput}
                          type="date"
                          id="datechoise"
                          spellCheck="false"
                          className={styles.typeInputValues}
                        />
                      </div>

                      <div className={styles.typeInput}>
                        <input
                          name="hourCreate"
                          value={createmeeting.hourCreate}
                          onChange={onChangeInput}
                          type="time"
                          id="timechoise"
                          spellCheck="false"
                          className={styles.typeInputValues}
                        />
                      </div>
                      <div className={styles.typeInput}>
                        <textarea
                          style={{ height: 150 }}
                          name="message"
                          value={createmeeting.message}
                          onChange={onChangeInput}
                          spellCheck="false"
                          className={styles.typeInputValues}
                          placeholder="Please type message..."
                        />
                      </div>
                      <div className={styles.typeInput}>
                        <input
                          name="costTopic"
                          value={createmeeting.costTopic}
                          onChange={onChangeInput}
                          spellCheck="false"
                          className={styles.typeInputValues}
                          placeholder="Please type cost..."
                        />
                      </div>
                      <button
                        style={{ marginTop: 30 }}
                        className={styles.addProductButton}
                      >
                        Create a Meeting
                      </button>
                    </form>
                    <div>
                      <button
                        style={{ marginTop: 5, marginBottom: 20 }}
                        className={styles.addProductButton}
                        onClick={eventChange}
                      >
                        View Schedule
                      </button>
                    </div>
                  </div>
                  <div className={styles.right}>
                    <div>
                      <img src={user?.avatar} alt="" />
                    </div>
                    <div className={styles.blockInfor}>
                      <p>Gmail: {user?.email}</p>
                      <p>
                        Name: {user?.firstname} {user?.lastname}
                      </p>
                      <p>Score:</p>
                      <p>Total:</p>
                    </div>
                  </div>
                </div>
              ) : (
                dataBookRoom.map((item, index) => (
                  <div className={styles.schedule} key={index}>
                    <h3>{item?.product}</h3>
                    {item.nameLectures.map((items, indexs) => (
                      <div className={styles.containImage} key={indexs}>
                        <img src={Image} alt="" />
                        <div className={styles.BoxText}>
                          <div>
                            <Link to={""} className={styles.text}>
                              {items?.nameTopic}
                            </Link>
                          </div>
                          <p>
                            {items?.nameSkills?.substring(0, 1).toUpperCase()}
                            {items?.nameSkills?.substring(1)}
                          </p>
                          <p>{items?.levelSkill}</p>
                          <p>Date: {items?.dayCreate}</p>
                          <p>Hour: {items?.hourCreate}</p>
                          <p>Cost: {items?.costTopic}$</p>
                          {user?.position === "lecturers" ? (
                            ""
                          ) : (
                            <div>
                              <label>Score:</label>
                              <input
                                onChange={onchangInput}
                                style={{ marginLeft: 10 }}
                                type="number"
                                min="1"
                                max="10"
                              />
                            </div>
                          )}
                        </div>

                        {user?.position === "lecturers" ? (
                          ""
                        ) : (
                          <div>
                            <div className={styles.payment}>
                              <PaypalButton
                                total={parseInt(items?.costTopic)}
                                tranSuccess={tranSuccess}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* <div className="col l-3 m-12 c-12">
            <RightItem />
          </div> */}
        </div>
      </div>
    </Fragment>
  );
};

export default BookingMeeting;
