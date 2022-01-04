import { useState } from "react";
import styles from "./CheckGrByText.module.css";

const CheckGrByText = () => {
  const [valueInput, setvalueInput] = useState("");
  const [data, setData] = useState("");

  const eventGetData = (e) => {
    setvalueInput(e.target.value);
  };
  const eventSubmit = async () => {
    const response = await fetch("http://localhost:8000/gramformer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(valueInput),
    });

    fetch("http://localhost:8000/gramformer")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };
  return (
    <div>
      <div className={styles.homePage}>
        <div className={styles.leftContent}>
          <input
            className={styles.inputContent}
            placeholder="Hãy nhập vào text...!"
            spellcheck="value"
            onChange={(e) => eventGetData(e)}
          />
          <button className={styles.btn} onClick={eventSubmit} type="submit">
            Submit
          </button>
        </div>
        <div className={styles.rightContent}>
          <input className={styles.textAre} type="textarea" value={data.data} />
        </div>
      </div>
    </div>
  );
};

export default CheckGrByText;
