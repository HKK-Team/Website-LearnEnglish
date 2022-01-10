import {React, Fragment} from 'react'
import Header from '../../components/Headers/Header'
import Footer from '../../components/Footer/Footer'
import Vocabulary from '../../components/Voccabulary/Vocabulary'

const voc = () => {
    return (
        <Fragment>
            <Header/>
            <Vocabulary/>
            <Footer/>
        </Fragment>
    )
}

export default voc
