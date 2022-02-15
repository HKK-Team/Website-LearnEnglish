import React, { Fragment,useContext,useState,useEffect } from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Headers/Header";
import { GlobalState } from "../../../GlobalState";
import { useLocation } from "react-router-dom";
import VocabularyLesson from "../../../components/Voccabulary/VocabularySkills/VocabularyLesson/VocabularyLesson";

export default function VoccabularyLesson() {
  const state = useContext(GlobalState);
  const [data, setdata] = useState([]);
  const location = useLocation();
  const [vocData] = state.vocabularyApi.vocData;

  useEffect(() => {
    let str = "";
    let temp = "";
    let array = [];
    for (let i = location.pathname.length - 1; i >= 0; i--) {
      if (location.pathname[i] === "/") break;
      str += location.pathname[i];
    }
    temp = str.split("").reverse().join("");
    for (let i = 0; i < vocData.length; i++) {
      if (vocData[i].level.topic.slug === temp) {
        array.push(vocData[i]);
      }
    }
    setdata(array);
  }, [location.pathname, vocData]);
  return (
    <Fragment>
      <Header />
      <VocabularyLesson data={data} />
      <Footer />
    </Fragment>
  );
}
