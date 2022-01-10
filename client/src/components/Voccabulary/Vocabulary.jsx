import React from 'react'
import styles from './Vocabulary.module.css'
import RightItem from "../RightItem/RightItem";

const Vocabulary = () => {
    return (
        <div className={styles.containMain}>
            <div className={styles.content}>
            <div className={styles.contentLeft}>
                <p>Do you need to learn new words to understand and express yourself clearly in English?</p>
                <p>
                In this section you will find activities to help you learn the meaning, pronunciation and spelling of new words.<br/>
                Learning vocabulary will help you improve your language level and communicate in English confidently and<br/>
                effectively. The pages are organised by topic and include interactive exercises to help you learn and remember<br/>
                the new words.
                </p>
                <div className={styles.listItem}>
                    <h1>Choose your level to practise your vocabulary</h1>
                </div>
            </div>
            <div className={styles.contentRight}>
                <RightItem/>
            </div>
            </div>
        </div>
    )
}

export default Vocabulary
