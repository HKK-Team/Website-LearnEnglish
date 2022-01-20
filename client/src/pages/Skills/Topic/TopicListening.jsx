import { Fragment, React, useContext, useState, useEffect } from "react";
import Topics from "../../../components/Skills/Topic/Topic";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Headers/Header";
import { GlobalState } from "../../../GlobalState";
import { useLocation } from "react-router-dom";
import { formatData } from "./utilsTopic";

const Topic = () => {
  const state = useContext(GlobalState);
  const [data, setdata] = useState([]);
  const location = useLocation();
  const [dataLevelListen] = state.listeningApi.dataListening;

  useEffect(() => {
    setdata(formatData(location.pathname,dataLevelListen));
  }, [location.pathname, dataLevelListen]);
  return (
    <Fragment>
      <Header />
      <Topics data={data} />
      <Footer />
    </Fragment>
  );
};

export default Topic;
