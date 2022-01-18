import { Fragment, React, useContext } from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Headers/Header";
import DetailTopic from "../../../components/Skills/DetailTopic/DetailTopic";
import { GlobalState } from "../../../GlobalState";

const DetailLevelListen = () => {
  const state = useContext(GlobalState);
  console.log(state.listeningApi.dataListening);
  return (
    <Fragment>
      <Header />
      <DetailTopic />
      <Footer />
    </Fragment>
  );
};

export default DetailLevelListen;
