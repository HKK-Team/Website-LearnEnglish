import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"
import React, { Fragment} from "react";
import HomePage from "../../components/Home/Home"


export default function Home() {
    return (
        <Fragment>
            <Header/> 
            <HomePage/>
            <Footer/>  
        </Fragment>
    )
}
