import { React, Fragment,useContext,useEffect,useState } from "react";
import Header from "../../components/Headers/Header";
import Footer from "../../components/Footer/Footer";
import DetailSkills from "../../components/Skills/DetailSkills/DetailSkills";
import { GlobalState } from "../../GlobalState";

const DetailSkill = () => {
  const state = useContext(GlobalState);

  return (
    <Fragment>
      <Header />
      <DetailSkills data={state.skillApi.dataListening} />
      <Footer />
    </Fragment>
  );
};

export default DetailSkill;
