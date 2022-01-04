import { Fragment } from "react";
import CheckGrByText from "./CheckGrammarByText/CheckGrByText";
import CheckGrByImage from "./CheckGrammarByImage/CheckGrByImage";

const Home = () => {
  return (
    <Fragment>
      <CheckGrByText/>
      <CheckGrByImage/>
    </Fragment>
  );
};

export default Home;
