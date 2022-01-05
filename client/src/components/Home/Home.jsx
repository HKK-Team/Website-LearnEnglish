import { Fragment } from "react";
import CheckGrByText from "./CheckGrammarByText/CheckGrByText";
import CheckGrByImage from "./CheckGrammarByImage/CheckGrByImage";
import Header from "../../components/Headers/Header";
import Footer from "../../components/Footer/Footer"

const Home = () => {
  return (
    <Fragment>
      <Header/>
      <Footer/>
      {/* <CheckGrByText/>
      <CheckGrByImage/> */}
    </Fragment>
  );
};

export default Home;
