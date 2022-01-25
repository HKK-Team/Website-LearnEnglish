import React, { Fragment, useContext } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Headers/Header";
import VocabularySkills from "../../components/Voccabulary/VocabularySkills/VocabularySkills";
import { GlobalState } from "../../GlobalState";

export default function VocBTPI() {
  const state = useContext(GlobalState);
  console.log(state);
  return (
    <Fragment>
      <Header />
      <VocabularySkills
        {...state.vocabularyApi.vocData[0][0]}
      />
      <Footer />
    </Fragment>
  );
}