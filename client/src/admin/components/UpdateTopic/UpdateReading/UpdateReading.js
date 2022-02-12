import React, { useState } from "react";
import styles from "../UpdateTopic.module.css";

const UpdateReading = () => {
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
  return (
    <div>
      <form>
        {/* section skill */}
        <div className={styles.typeInput}>
          <label>Content Skills</label>
          <textarea
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
            spellCheck="false"
            className={styles.typeInputValues}
            placeholder="Please type content..."
          />
        </div>

        <div className={styles.typeInputDouple}>
          <div className={styles.left}>
            <label>Type Skills</label>
            <input
              className={styles.typeInputValuesDp1}
              placeholder="Please type content..."
            />
          </div>

          <div className={styles.right}>
            <label>Slug Skills</label>
            <input
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
            <label>Level Type Skills</label>
            <input
              className={styles.typeInputValuesDp1}
              placeholder="Please type content..."
            />
          </div>

          <div className={styles.right}>
            <label>Level Slug Skills</label>
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
          <input
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
          <label>Text Reading</label>
          <textarea
            spellCheck="false"
            className={styles.typeInputValues}
            placeholder="Please type content..."
          />
        </div>

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
              <label>Data Text1 Task2</label>
              <input
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Data Text2 Task2</label>
              <input
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Data Text3 Task2</label>
              <input
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Data Text4 Task2</label>
              <input
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Data Text5 Task2</label>
              <input
                spellCheck="false"
                className={styles.typeInputValues}
                placeholder="Please type content..."
              />
            </div>
            <div className={styles.typeInput}>
              <label>Data Text6 Task2</label>
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

        {/* task3 in topic */}
        {stateTask3 ? (
          <div>
            <div className={styles.typeInput}>
              <label>Data Task3</label>
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

        {/* task3 in topic */}
        {/* task in topic */}
      </form>
    </div>
  );
};

export default UpdateReading;
