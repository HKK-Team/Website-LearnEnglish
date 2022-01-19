import { Fragment, React, useContext, useState, useEffect } from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Headers/Header";
import DetailTopic from "../../../components/Skills/DetailTopic/DetailTopic";
import { GlobalState } from "../../../GlobalState";
import { useLocation } from "react-router-dom";

const DetailLevelWriting = () => {
  const state = useContext(GlobalState);
  const [data, setdata] = useState([]);
  const location = useLocation();
  const [dataWriting] = state.writingApi.dataWriting;

  useEffect(() => {
    let str = "";
    let temp = "";
    let array = [];
    for (let i = location.pathname.length - 1; i >= 0; i--) {
      if (location.pathname[i] === "/") break;
      str += location.pathname[i];
    }
    temp = str.split("").reverse().join("");
    for (let i = 0; i < dataWriting.length; i++) {
      if (dataWriting[i].level.slugLevel === temp) {
        array.push(dataWriting[i]);
      }
    }
    setdata(array);
  }, [location.pathname, dataWriting]);
  return (
    <Fragment>
      <Header />
      <DetailTopic data={data}/>
      <Footer />
    </Fragment>
  );
};

export default DetailLevelWriting;
