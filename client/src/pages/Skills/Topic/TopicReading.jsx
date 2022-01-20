import { Fragment, React, useContext, useState, useEffect } from "react";
import Topics from "../../../components/Skills/Topic/Topic";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Headers/Header";
import { GlobalState } from "../../../GlobalState";
import { useLocation } from "react-router-dom";
import { formatData } from "./utilsTopic";

const TopicReading = () => {
  const state = useContext(GlobalState);
  const [data, setdata] = useState([]);
  const location = useLocation();
  const [dataReading] = state.readingApi.dataReading;

  useEffect(() => {
    setdata(formatData(location.pathname,dataReading));
  }, [location.pathname, dataReading]);
  return (
    <Fragment>
      <Header />
      <Topics data={data} />
      <Footer />
    </Fragment>
  );
};

export default TopicReading;
