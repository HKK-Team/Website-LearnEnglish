import React, { Fragment } from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Headers/Header";
import VocabularyLesson from "../../../components/Voccabulary/VocabularySkills/VocabularyLesson/VocabularyLesson";

export default function VoccabularyLesson(props) {
  return (
    <Fragment>
      <Header />
      <VocabularyLesson {...props.data} />
      <Footer />
    </Fragment>
  );
}
