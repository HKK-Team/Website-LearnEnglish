import { Fragment, React, useContext, useState, useEffect } from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Headers/Header";
import DetailTopic from "../../../components/Skills/DetailTopic/DetailTopic";
import { GlobalState } from "../../../GlobalState";
import { useLocation } from "react-router-dom";
import { formatData } from "./utils";

const DetailLevelReading = () => {
  const state = useContext(GlobalState);
  const [data, setdata] = useState([]);
  const location = useLocation();
  const [dataReading] = state.readingApi.dataReading;

  useEffect(() => {
    setdata(formatData(location.pathname, dataReading));
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
