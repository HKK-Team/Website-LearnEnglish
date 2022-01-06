import { Fragment } from "react";
import CheckGrByText from "../CheckGrammarByText/CheckGrammarByText";
import CheckGrByImage from "./CheckGrammarByImage/CheckGrByImage";
import Header from "../../components/Headers/Header";
import Footer from "../../components/Footer/Footer"

const Home = () => {
  return (
    <Fragment>
      <Header/>
       <CheckGrByText/>
      <Footer/>
      {/* <CheckGrByImage/>  */}
    </Fragment>
  );
};

export default Home;
