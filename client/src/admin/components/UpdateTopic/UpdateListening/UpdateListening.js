import React, { useContext, useState } from "react";
import styles from "../UpdateTopic.module.css";
import axios from "axios";
import { GlobalState } from "../../../../GlobalState";

const UpdateListening = () => {
  const state = useContext(GlobalState);
  const [dataListening] = state.listeningApi.dataListening;

  const [stateTask1, setstateTask1] = useState(false);
  const [stateTask2, setstateTask2] = useState(false);
  const [stateTask3, setstateTask3] = useState(false);

  const onChangeTask = (e) => {
    let temp = e.target.value;
    if (temp === "task1") {
      setstateTask1(true);
    } else if (temp === "task2") {
      setstateTask2(true);
    } else if (temp === "task3") {
      setstateTask3(true);
    } else {
      setstateTask1(false);
      setstateTask2(false);
      setstateTask3(false);
    }
  };

  const [listeningTopic, setlisteningTopic] = useState({
    contentType: dataListening[0].contentType,
    imageType: "",
    type: dataListening[0].type,
    slug: dataListening[0].slug,
    dateCreate: new Date(),
    nameLevel: dataListening[0].level.nameLevel,
    slugLevel: dataListening[0].level.slugLevel,
    contentLevel: dataListening[0].level.contentLevel,
    images: "",
    topicCode: "",
    nameTopic: "",
    slugTopic: "",
    contentTopic: "",
    imageTopic: "",
    radio: "",
    tranScript: "",
    dataTask1: "",
    taskName1: "",
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    text5: "",
    text6: "",
    task3text1: "",
    task3text2: "",
    task3text3: "",
    task3text4: "",
    task3text5: "",
    task3text6: ""
  });

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];

      if (!file) alert("File not exist.");

      if (file.size > 1024 * 1024)
        // 1mb
        alert("Size too large!");

      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        alert("File format is incorrect.");

      let formData = new FormData();
      formData.append("file", file);

      const res = await axios.post("/admin/upload", formData, {
        headers: { "content-type": "multipart/form-data" },
      });
      setlisteningTopic({ ...listeningTopic, imageType: res.data.image });
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const handleUpload1 = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];

      if (!file) alert("File not exist.");

      if (file.size > 1024 * 1024)
        // 1mb
        alert("Size too large!");

      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        alert("File format is incorrect.");

      let formData = new FormData();
      formData.append("file", file);

      const res = await axios.post("/admin/upload", formData, {
        headers: { "content-type": "multipart/form-data" },
      });
      setlisteningTopic({ ...listeningTopic, images: res.data.image });
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const handleUpload2 = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];

      if (!file) alert("File not exist.");

      if (file.size > 1024 * 1024)
        // 1mb
        alert("Size too large!");

      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        alert("File format is incorrect.");

      let formData = new FormData();
      formData.append("file", file);

      const res = await axios.post("/admin/upload", formData, {
        headers: { "content-type": "multipart/form-data" },
      });
      setlisteningTopic({ ...listeningTopic, imageTopic: res.data.image });
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setlisteningTopic({ ...listeningTopic, [name]: value });
  };
  const NewTopicSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/admin/createTopicListening", {
        ...listeningTopic,
      });
      alert("Update Successfully!");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 2000);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  if (!dataListening.length) {
    return <div></div>;
  }
  return (
    <div>
      <form onSubmit={NewTopicSubmit}>
        {/* section skill */}
        <div className={styles.typeInput}>
          <label>Content Skills</label>
          <textarea
            style={{ height: 150 }}
            value={listeningTopic.contentType}
            name="contentType"
            onChange={onChangeInput}
            spellCheck="false"
            className={styles.typeInputValues}
            placeholder="Please type content..."
          />
        </div>
        <div className={styles.typeInput}>
          <label>Images Skills</label>
          <input
            type="file"
            id="file"
            // name="images"
            // value={listeningTopic.images}
            onChange={handleUpload}
            spellCheck="false"
            className={styles.typeInputValues}
            placeholder="Please type content..."
          />
        </div>

        <div className={styles.typeInputDouple}>
          <div className={styles.left}>
            <label>Type Skills</label>
            <input
              value={listeningTopic.type}
              name="type"
              onChange={onChangeInput}
              className={styles.typeInputValuesDp1}
              placeholder="Please type content..."
            />
          </div>

          <div className={styles.right}>
            <label>Slug Skills</label>
            <input
              value={listeningTopic.slug}
              onChange={onChangeInput}
              name="slug"
              className={styles.typeInputValuesDp2}
              placeholder="Please type content..."
            />
          </div>
        </div>
        {/* section skill */}

        {/* section level skill */}
        <div className={styles.typeInput}>
          <label>Content Level Skills</label>
          <textarea
            value={listeningTopic.contentLevel}
            name="contentLevel"
            onChange={onChangeInput}
            spellCheck="false"
            className={styles.typeInputValues}
            placeholder="Please type content..."
          />
        </div>
        <div className={styles.typeInput}>
          <label>Images Level Skills</label>
          <input
            onChange={handleUpload1}
            type="file"
            id="file"
            className={styles.typeInputValues}
            placeholder="Please type content..."
          />
        </div>

        <div className={styles.typeInputDouple}>
          <div className={styles.left}>
            <label>Level Type Skills</label>
            <input
              value={listeningTopic.nameLevel}
              name="nameLevel"
              onChange={onChangeInput}
              className={styles.typeInputValuesDp1}
              placeholder="Please type content..."
            />
          </div>

          <div className={styles.right}>
            <label>Level Slug Skills</label>
            <input
              value={listeningTopic.slugLevel}
              name="slugLevel"
              onChange={onChangeInput}
              className={styles.typeInputValuesDp2}
              placeholder="Please type content..."
            />
          </div>
        </div>
        {/* section level skill */}

        {/* section topic skill */}
        <div className={styles.typeInput}>
          <label>Content Topic</label>
          <textarea
            onChange={onChangeInput}
            name="contentTopic"
            spellCheck="false"
            className={styles.typeInputValues}
            placeholder="Please type content..."
          />
        </div>
        <div className={styles.typeInput}>
          <label>Images Topic</label>
          <input
            onChange={handleUpload2}
            type="file"
            id="file"
            className={styles.typeInputValues}
            placeholder="Please type content..."
          />
        </div>

        <div className={styles.typeInput}>
          <label>Radio Topic</label>
          <input
            onChange={onChangeInput}
            spellCheck="false"
            name="radio"
            className={styles.typeInputValues}
            placeholder="Please type content..."
          />
        </div>

        <div className={styles.typeInput}>
          <label>Transcript Topic</label>
          <textarea
            onChange={onChangeInput}
            spellCheck="false"
            name="tranScript"
            className={styles.typeInputValues}
            placeholder="Please type content..."
          />
        </div>

        <div className={styles.typeInput}>
          <label>Topic Code</label>
          <input
            onChange={onChangeInput}
            spellCheck="false"
            name="topicCode"
            className={styles.typeInputValues}
            placeholder="Please type content..."
          />
        </div>

        <div className={styles.typeInputDouple}>
          <div className={styles.left}>
            <label>Name Topic</label>
            <input
              onChange={onChangeInput}
              name="nameTopic"
              spellCheck="false"
              value={listeningTopic.nameTopic}
              className={styles.typeInputValuesDp1}
              placeholder="Please type content..."
            />
          </div>

          <div className={styles.right}>
            <label>Slug Topic</label>
            <input
              onChange={onChangeInput}
              name="slugTopic"
              spellCheck="false"
              value={listeningTopic.slugTopic}
              className={styles.typeInputValuesDp2}
              placeholder="Please type content..."
            />
          </div>
        </div>

        {/* section topic skill */}

        {/* task in topic */}
        <div>
          <select
            style={{ marginLeft: 178, marginTop: 10, width: 400 }}
            name="select"
            className={styles.selectOption}
            onChange={onChangeTask}
          >
            <option value="">Options: </option>
            <option value="task1">Update: Task1</option>
            <option value="task2">Update: Task2</option>
            <option value="task3">Update: Task3</option>
          </select>
        </div>
        {/* task1 in topic */}
        {stateTask1 ? (
          <div>
            <div className={styles.typeInput}>
              <label>Data Task1</label>
              <input
                spellCheck="false"
                name="dataTask1"
                onChange={onChangeInput}
                value={listeningTopic.dataTask1}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Task Name</label>
              <input
                spellCheck="false"
                name="taskName1"
                onChange={onChangeInput}
                value={listeningTopic.taskName1}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
          </div>
        ) : (
          ""
        )}

        {/* task1 in topic */}

        {/* task2 in topic */}
        {stateTask2 ? (
          <div>
            <div className={styles.typeInput}>
              <label>Data Text1 Task2</label>
              <input
                spellCheck="false"
                name="text1"
                value={listeningTopic.text1}
                onChange={onChangeInput}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Data Text2 Task2</label>
              <input
                spellCheck="false"
                name="text2"
                value={listeningTopic.text2}
                onChange={onChangeInput}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Data Text3 Task2</label>
              <input
                spellCheck="false"
                name="text3"
                value={listeningTopic.text3}
                onChange={onChangeInput}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Data Text4 Task2</label>
              <input
                spellCheck="false"
                name="text4"
                value={listeningTopic.text4}
                onChange={onChangeInput}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Data Text5 Task2</label>
              <input
                spellCheck="false"
                name="text5"
                value={listeningTopic.text5}
                onChange={onChangeInput}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Data Text6 Task2</label>
              <input
                spellCheck="false"
                name="text6"
                value={listeningTopic.text6}
                onChange={onChangeInput}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
          </div>
        ) : (
          ""
        )}

        {/* task2 in topic */}

        {/* task3 in topic */}
        {stateTask3 ? (
          <div>
            <div className={styles.typeInput}>
              <label>Data Text1 Task3</label>
              <input
                spellCheck="false"
                name="task3text1"
                value={listeningTopic.task3text1}
                onChange={onChangeInput}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Data Text2 Task3</label>
              <input
                spellCheck="false"
                name="task3text2"
                value={listeningTopic.task3text2}
                onChange={onChangeInput}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Data Text3 Task3</label>
              <input
                spellCheck="false"
                name="task3text3"
                value={listeningTopic.task3text3}
                onChange={onChangeInput}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Data Text4 Task3</label>
              <input
                spellCheck="false"
                name="task3text4"
                value={listeningTopic.task3text4}
                onChange={onChangeInput}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Data Text5 Task3</label>
              <input
                spellCheck="false"
                name="task3text5"
                value={listeningTopic.task3text5}
                onChange={onChangeInput}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Data Text6 Task3</label>
              <input
                spellCheck="false"
                name="task3text6"
                value={listeningTopic.task3text6}
                onChange={onChangeInput}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
          </div>
        ) : (
          // <div>
          //   <div className={styles.typeInput}>
          //     <label>Data Task3</label>
          //     <input
          //       spellCheck="false"
          //       name="dataTask3"
          //       value={listeningTopic.dataTask3}
          //       onChange={onChangeInput}
          //       className={styles.typeInputValues}
          //       placeholder="Please type content..."
          //     />
          //   </div>
          //   <div className={styles.typeInput}>
          //     <label>Task Name</label>
          //     <input
          //       spellCheck="false"
          //       name="taskName3"
          //       value={listeningTopic.taskName3}
          //       onChange={onChangeInput}
          //       className={styles.typeInputValues}
          //       placeholder="Please type content..."
          //     />
          //   </div>
          // </div>
          ""
        )}

        {/* task3 in topic */}
        {/* task in topic */}
        <button className={styles.addProductButton}>Create</button>
      </form>
    </div>
  );
};

export default UpdateListening;
