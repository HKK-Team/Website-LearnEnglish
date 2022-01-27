import axios from "axios";
import { React, useContext, useState } from "react";
import { GlobalState } from "../../GlobalState";
import styles from "./Translate.module.css";

const Translate = (props) => {
  const [data] = useState(props.data.split("\n\n"));
  const state = useContext(GlobalState);
  const [stateTranslate, setstateTranslate] = state.listeningApi.stateTranslate;
  const [dataTranslate, setdataTranslate] = state.listeningApi.dataTranslate;

  const translatedata = async (str) => {
    let temp = "";
    const params = new URLSearchParams();
    params.append("q", str);
    params.append("source", "en");
    params.append("target", "vi");
    params.append("api_key", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    await axios
      .post("https://libretranslate.de/translate", params, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log(res.data)
        temp = res.data.translatedText;
      });
    return temp;
  };

  const eventTranslate = async () => {
    let tempstr = "";
    for (let i = 0; i < data.length; i++) {
      let array = "";
      if (data[i].includes(":")) {
        array = data[i].substring(data[i].indexOf(":") + 2);
      } else {
        array = data[i];
      }
      if (i === data.length - 1) {
        tempstr += await translatedata(array);
        break;
      }
      tempstr += (await translatedata(array)) + "break";
    }
    setstateTranslate(true);
    setdataTranslate(tempstr);
  };

  const eventTranslateEng = () => {
    setstateTranslate(false);
    setdataTranslate([]);
  };

  return (
    <div className={styles.blockButton}>
      <button onClick={(e) => eventTranslate()}>VietNamese</button>
      <button onClick={(e) => eventTranslateEng()}>English</button>
    </div>
  );
};

export default Translate;
