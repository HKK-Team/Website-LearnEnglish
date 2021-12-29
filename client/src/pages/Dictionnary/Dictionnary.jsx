import Dictionnarys from '../../components/Dictionnary/Dictionnary'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"
import React, { useEffect, useState, useContext, Fragment } from "react";
// import { GlobalState } from '../../GlobalState';

const Dictionnary = () => {
    // const state = useContext(GlobalState);
    // const [word, setWord] = state.dictionnaryApi.word
    // const [meanings, setMeanings] = state.dictionnaryApi.meanings
    // const [category, setCategory] = state.dictionnaryApi.category

    return (
            <Fragment>
                <Header/>   
                <Dictionnarys/>
                <Footer/>
            </Fragment>
    )
}

export default Dictionnary
