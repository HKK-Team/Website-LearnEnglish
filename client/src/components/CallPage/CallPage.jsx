import React from 'react'
import CallPageFooter from "../UIGGMeet/CallPageFooter/CallPageFooter"
import CallPageHeader from "../UIGGMeet/CallPageHeader/CallPageHeader"
import MeetingInfo from "../UIGGMeet/MeetingInfo/MeetingInfo"
import Messenger from "../UIGGMeet/Messenger/Messenger"
import styles from "./CallPage.module.scss"

const CallPage = () => {
    return (
        <div className={styles.callpageContainer}>
            <video className={styles.videoContainer} src="" controls></video>
            <CallPageHeader/>
            <CallPageFooter/>
            <MeetingInfo/>
            <Messenger/>
        </div>
    )
}

export default CallPage
