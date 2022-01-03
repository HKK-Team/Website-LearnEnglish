import Dictionnarys from '../../components/Dictionnary/Dictionnary'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"
import React, {Fragment } from "react";

const Dictionnary = () => {

    return (
            <Fragment>
                <Header/>   
                <Dictionnarys/>
                <Footer/>
            </Fragment>
    )
}

export default Dictionnary
