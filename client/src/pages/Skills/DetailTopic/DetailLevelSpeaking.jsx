import { Fragment, React, useContext, useState, useEffect } from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Headers/Header";
import DetailTopic from "../../../components/Skills/DetailTopic/DetailTopic";
import { GlobalState } from "../../../GlobalState";
import { formatData } from "./utils";
import { useLocation } from "react-router-dom";

const DetailLevelSpeaking = () => {
  const state = useContext(GlobalState);
  const [data, setdata] = useState([]);
  const location = useLocation();
  const [dataSpeaking] = state.speakingApi.dataSpeaking;

  useEffect(() => {
    setdata(formatData(location.pathname, dataSpeaking));
  }, [location.pathname, dataSpeaking]);

  return (
    <Fragment>
      <Header />
      <DetailTopic data={data}/>
      <Footer />
    </Fragment>
  );
};

export default DetailLevelSpeaking;
