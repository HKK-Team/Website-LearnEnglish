import { Fragment, React, useContext, useState, useEffect } from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Headers/Header";
import DetailTopic from "../../../components/Skills/DetailTopic/DetailTopic";
import { GlobalState } from "../../../GlobalState";
import { useLocation } from "react-router-dom";

const DetailLevelReading = () => {
  const state = useContext(GlobalState);
  const [data, setdata] = useState([]);
  const location = useLocation();
  const [dataReading] = state.readingApi.dataReading;

  useEffect(() => {
    let str = "";
    let temp = "";
    let array = [];
    for (let i = location.pathname.length - 1; i >= 0; i--) {
      if (location.pathname[i] === "/") break;
      str += location.pathname[i];
    }
    temp = str.split("").reverse().join("");
    for (let i = 0; i < dataReading.length; i++) {
      if (dataReading[i].level.slugLevel === temp) {
        array.push(dataReading[i]);
      }
    }
    setdata(array);
  }, [location.pathname, dataReading]);
  return (
    <Fragment>
      <Header />
      <DetailTopic data={data}/>
      <Footer />
    </Fragment>
  );
};

export default DetailLevelReading;
