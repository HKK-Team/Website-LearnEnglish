import axios from "axios";
import { Fragment, React, useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import styles from "./BookingMeeting.module.css";
import PaypalButton from "./PaypalButton";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const BookingMeeting = () => {
  const state = useContext(GlobalState);
  const [user] = state.userApi.user;
  const [dataUser] = state.userTotalApi.dataUser;
  const [grammar] = state.grammarApi.dataGrammar;
  const [vocabulary] = state.vocabularyApi.vocData;
  const [dataListening] = state.listeningApi.dataListening;
  const [dataReading] = state.readingApi.dataReading;
  const [dataSpeaking] = state.speakingApi.dataSpeaking;
  const [dataWriting] = state.writingApi.dataWriting;

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);
  const [changeState, setchangeState] = useState(true);
  const [dataBooking, setdataBooking] = useState([]);
  const [dataBookRoom, setdataBookRoom] = useState({});
  const [dataTotal, setdataTotal] = useState([]);
  const [scoreMeeting, setscoreMeeting] = useState(0);
  const [totalRateting, settotalRateting] = useState([]);
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
    emailStudent: "",
    linkMeeting: "",
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

  useEffect(() => {
    const databookApi = async () => {
      const data = await axios.get("http://localhost:5000/api/getbookmeeting");
      setdataBooking(data.data);
    };
    databookApi();
    const dataScoreApi = async () => {
      const data = await axios.get("http://localhost:5000/api/getpayment");
      settotalRateting(data.data.filter((it) => it.email === user.email));
    };
    dataScoreApi();
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
        id: product._id,
        email:product.email
      });
      return obj;
    }, {});

    var groups = Object.keys(grouped).map(function (key) {
      return { product: key, nameLectures: grouped[key] };
    });
    setdataBookRoom(groups);
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
      let nameTemp = dataUser.filter(
        (it) => it.email === createmeeting.emailStudent
      );
      const objSendMail = {
        nameLecture: createmeeting.nameLectures,
        nameStudent: `${nameTemp[0].firstname} ${nameTemp[0].lastname}`,
        email: createmeeting.emailStudent,
        skill: createmeeting.nameSkills,
        nameSkill: createmeeting.levelSkill,
        nameTopic: createmeeting.nameTopic,
        dayCreate: createmeeting.dayCreate,
        hourCreate: createmeeting.hourCreate,
        message: createmeeting.message,
        Cost: createmeeting.costTopic,
        linkMeeting: createmeeting.linkMeeting,
      };
      await axios.put("http://localhost:5000/mail/sendmail", {
        ...objSendMail,
      });

      alert("Create Successfully!");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const tranSuccess = async (payment) => {
    const { paymentID } = payment;
    const temp = dataBookRoom[0]?.nameLectures.filter(
      (tp) => tp.dayCreate >= new Date().toISOString().split("T")[0]
    );
    const obj = {
      email: temp[0]?.email,
      nameLectures: dataBookRoom[0]?.product,
      nameSkills: temp[0]?.nameSkills,
      levelSkill: temp[0]?.levelSkill,
      nameTopic: temp[0]?.nameTopic,
      dayCreate: temp[0]?.dayCreate,
      hourCreate: temp[0]?.hourCreate,
      costTopic: temp[0]?.costTopic,
    };
    await axios.post("http://localhost:5000/api/payment", {
      paymentID,
      email: obj.email,
      nameLectures: obj.nameLectures,
      nameSkills: obj.nameSkills,
      levelSkill: obj.levelSkill,
      nameTopic: obj.nameTopic,
      dayCreate: obj.dayCreate,
      hourCreate: obj.hourCreate,
      costTopic: obj.costTopic,
      scoreMeeting: scoreMeeting,
    });
    setdataBookRoom([]);
    alert("Successfully!");
  };

  const handleClick = (value) => {
    setCurrentValue(value);
    setscoreMeeting(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
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
                          name="emailStudent"
                          value={createmeeting.emailStudent}
                          onChange={onChangeInput}
                          spellCheck="false"
                          className={styles.typeInputValues}
                          placeholder="Please type name email student..."
                        />
                      </div>
                      <div className={styles.typeInput}>
                        <input
                          name="linkMeeting"
                          value={createmeeting.linkMeeting}
                          onChange={onChangeInput}
                          spellCheck="false"
                          className={styles.typeInputValues}
                          placeholder="Please type link meeting..."
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
                      <p>
                        Total:{" "}
                        {totalRateting.reduce(function (
                          accumulator,
                          currentValue
                        ) {
                          return accumulator + parseInt(currentValue.costTopic);
                        },
                        0)}
                        $
                      </p>
                      <div style={styles.stars}>
                        <span>Vote:</span>{" "}
                        {[0, 0, 0, 0, 0].map((_, index) => (
                          <FaStar
                            key={index}
                            size={24}
                            color={
                              Math.ceil(
                                totalRateting.reduce(function (
                                  accumulator,
                                  currentValue
                                ) {
                                  return (
                                    accumulator +
                                    parseInt(currentValue.scoreMeeting)
                                  );
                                },
                                0) / 5
                              ) > index
                                ? colors.orange
                                : colors.grey
                            }
                            style={{
                              marginRight: 10,
                              cursor: "pointer",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                dataBookRoom.map((item, index) => (
                  <div className={styles.schedule} key={index}>
                    <h3>{item?.product}</h3>
                    {item.nameLectures
                      .filter(
                        (tp) =>
                          tp.dayCreate >=
                          new Date().toISOString().split("T")[0]
                      )
                      .map((items, indexs) => (
                        <div className={styles.containImage} key={indexs}>
                          <img
                            src={
                              dataTotal.filter(
                                (it) =>
                                  it?.level.topic.nameTopic === items?.nameTopic
                              )[0]?.level.topic.imageTopic
                            }
                            alt=""
                          />
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
                              <div style={styles.stars}>
                                {stars.map((_, index) => (
                                  <FaStar
                                    key={index}
                                    size={24}
                                    onClick={() => handleClick(index + 1)}
                                    onMouseOver={() =>
                                      handleMouseOver(index + 1)
                                    }
                                    onMouseLeave={handleMouseLeave}
                                    color={
                                      (hoverValue || currentValue) > index
                                        ? colors.orange
                                        : colors.grey
                                    }
                                    style={{
                                      marginRight: 10,
                                      cursor: "pointer",
                                    }}
                                  />
                                ))}
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
