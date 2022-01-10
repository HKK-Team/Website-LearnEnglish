import { React, Fragment } from "react";
import Header from "../../components/Headers/Header";
import Footer from "../../components/Footer/Footer";
import Listenings from "../../components/Skills/Listening/Listening";

const Listening = () => {
  return (
    <Fragment>
      <Header />
      <Listenings />
      <Footer />
    </Fragment>
  );
};

export default Listening;
