import React, { useContext, useState } from "react";
import styles from "../UpdateTopic.module.css";
import axios from "axios";
import { GlobalState } from "../../../../GlobalState";

const UpdateGrammars = () => {
  const state = useContext(GlobalState);
  const [dataGrammar] = state.grammarApi.dataGrammar;

  const [stateTask1, setstateTask1] = useState(false);
  const [stateTask2, setstateTask2] = useState(false);

  const [element1, setelement1] = useState(false);
  const [element2, setelement2] = useState(false);
  const [element3, setelement3] = useState(false);
  const [element4, setelement4] = useState(false);
  const [element5, setelement5] = useState(false);

  const onChangeTask = (e) => {
    let temp = e.target.value;
    if (temp === "task1") {
      setstateTask1(true);
    } else if (temp === "task2") {
      setstateTask2(true);
    } else {
      setstateTask1(false);
      setstateTask2(false);
    }
  };
  const onChangeElement = (e) => {
    let temp = e.target.value;
    if (temp === "element1") {
      setelement1(true);
    } else if (temp === "element2") {
      setelement2(true);
    } else if (temp === "element3") {
      setelement3(true);
    } else if (temp === "element4") {
      setelement4(true);
    } else if (temp === "element5") {
      setelement5(true);
    }
  };

  const [grammarTopic, setgrammarTopic] = useState({
    type: dataGrammar[0].type,
    dateCreate: new Date(),
    nameLevel: dataGrammar[0].level.nameLevel,
    slugLevel: dataGrammar[0].level.slugLevel,
    contentLevel: dataGrammar[0].level.contentLevel,
    images: "",
    topicCode: "",
    nameTopic: "",
    slug: "",
    contentTopic: "",
    imageTopic: "",
    intro: "",
    title1A: "",
    explanation1A: "",
    example1A: "",
    title1B: "",
    explanation1B: "",
    example1B: "",
    title1C: "",
    explanation1C: "",
    example1C: "",
    title2A: "",
    explanation2A: "",
    example2A: "",
    title2B: "",
    explanation2B: "",
    example2B: "",
    title2C: "",
    explanation2C: "",
    example2C: "",
    title3A: "",
    explanation3A: "",
    example3A: "",
    title3B: "",
    explanation3B: "",
    example3B: "",
    title3C: "",
    explanation3C: "",
    example3C: "",
    title4A: "",
    explanation4A: "",
    example4A: "",
    title4B: "",
    explanation4B: "",
    example4B: "",
    title4C: "",
    explanation4C: "",
    example4C: "",
    title5A: "",
    explanation5A: "",
    example5A: "",
    title5B: "",
    explanation5B: "",
    example5B: "",
    title5C: "",
    explanatio5C: "",
    example5C: "",
    dataTask1: "",
    taskName1: "",
    dataTask2: "",
    taskName2: "",
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
      setgrammarTopic({ ...grammarTopic, images: res.data.image });
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
      setgrammarTopic({ ...grammarTopic, imageTopic: res.data.image });
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setgrammarTopic({ ...grammarTopic, [name]: value });
  };
  const NewTopicSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/admin/createTopicGrammar", {
        ...grammarTopic,
      });
      alert("Update Successfully!");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 2000);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div>
      <form onSubmit={NewTopicSubmit}>
        {/* section level skill */}
        <div className={styles.typeInput}>
          <label>Content Level Skills</label>
          <textarea
            value={grammarTopic.contentLevel}
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
            onChange={handleUpload}
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
              value={grammarTopic.nameLevel}
              name="nameLevel"
              onChange={onChangeInput}
              className={styles.typeInputValuesDp1}
              placeholder="Please type content..."
            />
          </div>

          <div className={styles.right}>
            <label>Level Slug Skills</label>
            <input
              value={grammarTopic.slugLevel}
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
            onChange={handleUpload1}
            type="file"
            id="file"
            spellCheck="false"
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

        <div className={styles.typeInput}>
          <label>Grammars Explantion Introduction</label>
          <input
            onChange={onChangeInput}
            spellCheck="false"
            name="intro"
            className={styles.typeInputValues}
            placeholder="Please type content..."
          />
        </div>

        <div>
          <select
            style={{ marginLeft: 178, marginTop: 10, width: 400 }}
            name="select"
            className={styles.selectOption}
            onChange={onChangeElement}
          >
            <option value="">Options: </option>
            <option value="element1">Update: Element1</option>
            <option value="element2">Update: Element2</option>
            <option value="element3">Update: Element3</option>
            <option value="element4">Update: Element4</option>
            <option value="element5">Update: Element5</option>
          </select>
        </div>
        {element1 ? (
          <div>
            <div className={styles.typeInput}>
              <label>Title Element 1A</label>
              <input
                spellCheck="false"
                name="title1A"
                onChange={onChangeInput}
                value={grammarTopic.title1A}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Explantion Element 1A</label>
              <input
                spellCheck="false"
                name="explanation1A"
                onChange={onChangeInput}
                value={grammarTopic.explanation1A}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Example Element 1A</label>
              <textarea
                name="example1A"
                onChange={onChangeInput}
                value={grammarTopic.example1A}
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>

            <div className={styles.typeInput}>
              <label>Title Element 1B</label>
              <input
                spellCheck="false"
                name="title1B"
                onChange={onChangeInput}
                value={grammarTopic.title1B}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Explantion Element 1B</label>
              <input
                spellCheck="false"
                name="explanation1B"
                onChange={onChangeInput}
                value={grammarTopic.explanation1B}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Example Element 1B</label>
              <textarea
                name="example1B"
                onChange={onChangeInput}
                value={grammarTopic.example1B}
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>

            <div className={styles.typeInput}>
              <label>Title Element 1C</label>
              <input
                spellCheck="false"
                name="title1C"
                onChange={onChangeInput}
                value={grammarTopic.title1C}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Explantion Element 1C</label>
              <input
                spellCheck="false"
                name="explanation1C"
                onChange={onChangeInput}
                value={grammarTopic.explanation1C}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Example Element 1C</label>
              <textarea
                name="example1C"
                onChange={onChangeInput}
                value={grammarTopic.example1C}
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
          </div>
        ) : (
          ""
        )}

        {element2 ? (
          <div>
            <div className={styles.typeInput}>
              <label>Title Element 2A</label>
              <input
                spellCheck="false"
                name="title2A"
                onChange={onChangeInput}
                value={grammarTopic.title2A}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Explantion Element 2A</label>
              <input
                spellCheck="false"
                name="explanation2A"
                onChange={onChangeInput}
                value={grammarTopic.explanation2A}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Example Element 2A</label>
              <textarea
                name="example2A"
                onChange={onChangeInput}
                value={grammarTopic.example2A}
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>

            <div className={styles.typeInput}>
              <label>Title Element 2B</label>
              <input
                spellCheck="false"
                name="title2B"
                onChange={onChangeInput}
                value={grammarTopic.title2B}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Explantion Element 2B</label>
              <input
                spellCheck="false"
                name="explanation2B"
                onChange={onChangeInput}
                value={grammarTopic.explanation2B}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Example Element 2B</label>
              <textarea
                name="example2B"
                onChange={onChangeInput}
                value={grammarTopic.example2B}
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>

            <div className={styles.typeInput}>
              <label>Title Element 2C</label>
              <input
                spellCheck="false"
                name="title2C"
                onChange={onChangeInput}
                value={grammarTopic.title2C}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Explantion Element 2C</label>
              <input
                spellCheck="false"
                name="explanation2C"
                onChange={onChangeInput}
                value={grammarTopic.explanation2C}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Example Element 2C</label>
              <textarea
                name="example2C"
                onChange={onChangeInput}
                value={grammarTopic.example2C}
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
          </div>
        ) : (
          ""
        )}

        {element3 ? (
          <div>
            <div className={styles.typeInput}>
              <label>Title Element 3A</label>
              <input
                spellCheck="false"
                name="title3A"
                onChange={onChangeInput}
                value={grammarTopic.title3A}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Explantion Element 3A</label>
              <input
                spellCheck="false"
                name="explanation3A"
                onChange={onChangeInput}
                value={grammarTopic.explanation3A}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Example Element 3A</label>
              <textarea
                name="example3A"
                onChange={onChangeInput}
                value={grammarTopic.example3A}
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>

            <div className={styles.typeInput}>
              <label>Title Element 3B</label>
              <input
                spellCheck="false"
                name="title3B"
                onChange={onChangeInput}
                value={grammarTopic.title3B}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Explantion Element 3B</label>
              <input
                spellCheck="false"
                name="explanation3B"
                onChange={onChangeInput}
                value={grammarTopic.explanation3B}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Example Element 3B</label>
              <textarea
                name="example3B"
                onChange={onChangeInput}
                value={grammarTopic.example3B}
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>

            <div className={styles.typeInput}>
              <label>Title Element 3C</label>
              <input
                spellCheck="false"
                name="title3C"
                onChange={onChangeInput}
                value={grammarTopic.title3C}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Explantion Element 3C</label>
              <input
                spellCheck="false"
                name="explanation3C"
                onChange={onChangeInput}
                value={grammarTopic.explanation3C}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Example Element 3C</label>
              <textarea
                name="example3C"
                onChange={onChangeInput}
                value={grammarTopic.example3C}
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
          </div>
        ) : (
          ""
        )}

        {element4 ? (
          <div>
            <div className={styles.typeInput}>
              <label>Title Element 4A</label>
              <input
                spellCheck="false"
                name="title4A"
                onChange={onChangeInput}
                value={grammarTopic.title4A}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Explantion Element 4A</label>
              <input
                spellCheck="false"
                name="explanation4A"
                onChange={onChangeInput}
                value={grammarTopic.explanation4A}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Example Element 4A</label>
              <textarea
                name="example4A"
                onChange={onChangeInput}
                value={grammarTopic.example4A}
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>

            <div className={styles.typeInput}>
              <label>Title Element 4B</label>
              <input
                spellCheck="false"
                name="title4B"
                onChange={onChangeInput}
                value={grammarTopic.title4B}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Explantion Element 4B</label>
              <input
                spellCheck="false"
                name="explanation4B"
                onChange={onChangeInput}
                value={grammarTopic.explanation4B}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Example Element 4B</label>
              <textarea
                name="example4B"
                onChange={onChangeInput}
                value={grammarTopic.example4B}
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>

            <div className={styles.typeInput}>
              <label>Title Element 4C</label>
              <input
                spellCheck="false"
                name="title4C"
                onChange={onChangeInput}
                value={grammarTopic.title4C}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Explantion Element 4C</label>
              <input
                spellCheck="false"
                name="explanation4C"
                onChange={onChangeInput}
                value={grammarTopic.explanation4C}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Example Element 4C</label>
              <textarea
                name="example4C"
                onChange={onChangeInput}
                value={grammarTopic.example4C}
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
          </div>
        ) : (
          ""
        )}

        {element5 ? (
          <div>
            <div className={styles.typeInput}>
              <label>Title Element 5A</label>
              <input
                spellCheck="false"
                name="title5A"
                onChange={onChangeInput}
                value={grammarTopic.title5A}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Explantion Element 5A</label>
              <input
                spellCheck="false"
                name="explanation5A"
                onChange={onChangeInput}
                value={grammarTopic.explanation5A}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Example Element 5A</label>
              <textarea
                name="example5A"
                onChange={onChangeInput}
                value={grammarTopic.example5A}
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>

            <div className={styles.typeInput}>
              <label>Title Element 5B</label>
              <input
                spellCheck="false"
                name="title5B"
                onChange={onChangeInput}
                value={grammarTopic.title5B}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Explantion Element 5B</label>
              <input
                spellCheck="false"
                name="explanation5B"
                onChange={onChangeInput}
                value={grammarTopic.explanation5B}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Example Element 5B</label>
              <textarea
                name="example5B"
                onChange={onChangeInput}
                value={grammarTopic.example5B}
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>

            <div className={styles.typeInput}>
              <label>Title Element 5C</label>
              <input
                spellCheck="false"
                name="title5C"
                onChange={onChangeInput}
                value={grammarTopic.title5C}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Explantion Element 5C</label>
              <input
                spellCheck="false"
                name="explanation5C"
                onChange={onChangeInput}
                value={grammarTopic.explanation5C}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Example Element 5C</label>
              <textarea
                name="example5C"
                onChange={onChangeInput}
                value={grammarTopic.example5C}
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
          </div>
        ) : (
          ""
        )}

        <div className={styles.typeInputDouple}>
          <div className={styles.left}>
            <label>Name Topic</label>
            <input
              onChange={onChangeInput}
              name="nameTopic"
              spellCheck="false"
              value={grammarTopic.nameTopic}
              className={styles.typeInputValuesDp1}
              placeholder="Please type content..."
            />
          </div>

          <div className={styles.right}>
            <label>Slug Topic</label>
            <input
              onChange={onChangeInput}
              name="slug"
              spellCheck="false"
              value={grammarTopic.slug}
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
                value={grammarTopic.dataTask1}
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
                value={grammarTopic.taskName1}
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
              <label>Data Task2</label>
              <input
                spellCheck="false"
                name="dataTask2"
                onChange={onChangeInput}
                value={grammarTopic.dataTask2}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Task Name</label>
              <input
                spellCheck="false"
                name="taskName2"
                onChange={onChangeInput}
                value={grammarTopic.taskName2}
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
          </div>
        ) : (
          ""
        )}

        {/* task2 in topic */}

        {/* task in topic */}
        <button className={styles.addProductButton}>Create</button>
      </form>
    </div>
  );
};

export default UpdateGrammars;
