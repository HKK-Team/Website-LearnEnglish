import { Fragment, React, useContext, useState, useEffect } from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Headers/Header";
import TopicGrammar from "../../../components/Grammar/Topic/TopicGrammar";
import { GlobalState } from "../../../GlobalState";
import { useLocation } from "react-router-dom";

const Topic = () => {
  const state = useContext(GlobalState);
  const [data, setdata] = useState([]);
  const location = useLocation();
  const [dataGrammar] = state.grammarApi.dataGrammar;

  useEffect(() => {
    let str = "";
    let temp = "";
    let array = [];
    for (let i = location.pathname.length - 1; i >= 0; i--) {
      if (location.pathname[i] === "/") break;
      str += location.pathname[i];
    }
    temp = str.split("").reverse().join("");
    for (let i = 0; i < dataGrammar.length; i++) {
      if (dataGrammar[i].level.slugLevel === temp) {
        array.push(dataGrammar[i]);
      }
    }
    setdata(array);
  }, [location.pathname, dataGrammar]);


  return (
    <Fragment>
      <Header />
      <TopicGrammar data={data} />
      <Footer />
    </Fragment>
  );
};

export default Topic;
