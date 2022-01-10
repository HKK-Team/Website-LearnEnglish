import React from 'react'
import styles from './Listening.module.css'
import Image1 from '../../../images/11.jpg'

const Listening = () => {
    return (
        <div className={styles.conatiner}>
            <div className={styles.title}>
                <h2>Listening</h2>
            </div>
            <div className={styles.imageFiled}>
                <img src={Image1} alt=''/>
            </div>
            <div className={styles.blockMeeting}>
                <div className={styles.colorMain}></div>
                <div className={styles.blockColor1}></div>
                <div className={styles.blockColor2}></div>
                <div className={styles.blockColor3}></div>
                <div className={styles.blockColor4}></div>
            </div>
            <div className={styles.textIntro}>

            </div>
        </div>
    )
}

export default Listening
