import { Fragment, React, useContext, useState, useEffect } from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Headers/Header";
import DetailTopic from "../../../components/Skills/DetailTopic/DetailTopic";
import { GlobalState } from "../../../GlobalState";
import { useLocation } from "react-router-dom";
import { formatData } from "./utils";

const DetailLevelListen = () => {
  const state = useContext(GlobalState);
  const [data, setdata] = useState([]);
  const location = useLocation();
  const [dataLevelListen] = state.listeningApi.dataListening;

  useEffect(() => {
    setdata(formatData(location.pathname, dataLevelListen));
  }, [location.pathname, dataLevelListen]);

  return (
    <Fragment>
      <Header />
      <DetailTopic data={data} />
      <Footer />
    </Fragment>
  );
};

export default DetailLevelListen;
