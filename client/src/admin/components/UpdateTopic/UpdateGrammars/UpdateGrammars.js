import React, { useState } from "react";
import styles from "../UpdateTopic.module.css";

const UpdateGrammars = () => {
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

  return (
    <div>
      <form>
        {/* section level skill */}
        <div className={styles.typeInput}>
          <label>Content Level Skills</label>
          <textarea
            spellCheck="false"
            className={styles.typeInputValues}
            placeholder="Please type content..."
          />
        </div>
        <div className={styles.typeInput}>
          <label>Images Level Skills</label>
          <input
            type="file"
            id="file"
            spellCheck="false"
            className={styles.typeInputValues}
            placeholder="Please type content..."
          />
        </div>

        <div className={styles.typeInputDouple}>
          <div className={styles.left}>
            <label>Name Level</label>
            <input
              className={styles.typeInputValuesDp1}
              placeholder="Please type content..."
            />
          </div>

          <div className={styles.right}>
            <label>Slug Level</label>
            <input
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
            spellCheck="false"
            className={styles.typeInputValues}
            placeholder="Please type content..."
          />
        </div>
        <div className={styles.typeInput}>
          <label>Images Topic</label>
          <input
            type="file"
            id="file"
            spellCheck="false"
            className={styles.typeInputValues}
            placeholder="Please type content..."
          />
        </div>

        <div className={styles.typeInput}>
          <label>Grammars Explantion Introduction</label>
          <input
            spellCheck="false"
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
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Explantion Element 1A</label>
              <input
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Example Element 1A</label>
              <textarea
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>

            <div className={styles.typeInput}>
              <label>Title Element 1B</label>
              <input
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Explantion Element 1B</label>
              <input
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Example Element 1B</label>
              <textarea
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>

            <div className={styles.typeInput}>
              <label>Title Element 1C</label>
              <input
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Explantion Element 1C</label>
              <input
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Example Element 1C</label>
              <textarea
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
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Explantion Element 2A</label>
              <input
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Example Element 2A</label>
              <textarea
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>

            <div className={styles.typeInput}>
              <label>Title Element 2B</label>
              <input
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Explantion Element 2B</label>
              <input
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Example Element 2B</label>
              <textarea
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>

            <div className={styles.typeInput}>
              <label>Title Element 2C</label>
              <input
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Explantion Element 2C</label>
              <input
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Example Element 2C</label>
              <textarea
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
              className={styles.typeInputValuesDp1}
              placeholder="Please type content..."
            />
          </div>

          <div className={styles.right}>
            <label>Slug Topic</label>
            <input
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
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Task Name</label>
              <input
                spellCheck="false"
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
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Task Name</label>
              <input
                spellCheck="false"
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
      </form>
    </div>
  );
};

export default UpdateGrammars;
