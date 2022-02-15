import React, { Fragment, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Headers/Header";
import VocabularySkills from "../../components/Voccabulary/VocabularySkills/VocabularySkills";
import { GlobalState } from "../../GlobalState";
import { formatData } from "../Skills/DetailTopic/utils";

export default function VocBTPI() {
  const state = useContext(GlobalState);
  const location = useLocation();
  const [data, setdata] = useState([]);
  const [dataLevelVoc] = state.vocabularyApi.vocData;

  useEffect(() => {
    setdata(formatData(location.pathname, dataLevelVoc));
  }, [location.pathname, dataLevelVoc]);

  return (
    <Fragment>
      <Header />
      <VocabularySkills data={data} />
      <Footer />
    </Fragment>
  );
}
