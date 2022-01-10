import { useState } from "react";
import styles from "./CheckGrammarByText.module.css";
import Image1 from "../../images/grammar_check.jpg";
import Image2 from "../../images/misused_words.jpg";
import Image3 from "../../images/punctuation_check.jpg";
import Image4 from "../../images/spelling_check.jpg";

const CheckGrammarByText = () => {
  const [valueInput, setvalueInput] = useState("");
  const [data, setData] = useState("");
  const [errordata, seterrordata] = useState([]);
  const [correct, setcorrect] = useState([]);
  const checkData = data.data !== undefined ? true : false;

  //assistant grammar
  if(checkData){
    
  }
  console.log(valueInput);
  console.log(data.data);

  const eventGetData = (e) => {
    setvalueInput(e.target.value);
  };
  const eventSubmit = async () => {
    const response = await fetch("/api1/gramformer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(valueInput),
    });

    fetch("/api1/gramformer")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };
  return (
    <div className={styles.containChecking}>
      <div className={styles.content}>
        <h1 className={styles.title}>Grammar Check</h1>
        <div className={styles.subtitle}>
          Check your English text for grammar, spelling, and punctuation
          <br />
          errors with Grammarly’s free grammar checker.
        </div>
      </div>
      <div className={styles.checkBlock}>
        <div className={styles.column1}>
          <div className={styles.items}>
            <img className={styles.image1} src={Image1} alt="" />
            <br />
            <span className={styles.imageTitle}>
              Grammatical <br />
              Errors
            </span>
          </div>
          <div className={styles.items}>
            <img className={styles.image1} src={Image4} alt="" />
            <br />
            <span className={styles.imageTitle}>
              Spelling <br />
              Errors
            </span>
          </div>
        </div>

        <div className={styles.blockText}>
          {checkData ? (
            <textarea
              className={styles.textAr}
              spellCheck="false"
              placeholder="Start writing here..."
              value={data.data}
              onChange={eventGetData}
            />
          ) : (
            <textarea
              className={styles.textAr}
              spellCheck="false"
              placeholder="Start writing here..."
              onChange={eventGetData}
            />
          )}
          <button className={styles.btnCheck} onClick={eventSubmit}>
            <span>Check your text</span>
          </button>
        </div>

        <div className={styles.column2}>
          <div className={styles.items}>
            <img className={styles.image1} src={Image3} alt="" />
            <br />
            <span className={styles.imageTitle}>
              Incorrect <br />
              Punctuation
            </span>
          </div>
          <div className={styles.items}>
            <img className={styles.image1} src={Image2} alt="" />
            <br />
            <span className={styles.imageTitle}>
              Misused <br />
              Words
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckGrammarByText;
