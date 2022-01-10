import React from 'react'
import styles from './skill.module.css'
import Image1 from '../../images/RS4758_AA047774-low.jpg'
import Image2 from '../../images/RS5825_169280449-hig.jpg'
import Image3 from '../../images/RS7522_ThinkstockPhotos-622015126-hig_0.jpg'
import Image4 from '../../images/RS8016_GettyImages-646457628-hig_2.jpg'
import ListItem from '../ListItem/ListItem'
import RightItem from '../RightItem/RightItem'
import { Link } from "react-router-dom";

const Skill = () => {
  return (
    <div className={styles.containerMain}>
      <div className={styles.main}>
      <div className={styles.containLeft}>
        <p className={styles.intro}>
        Here you can find practice materials and activities to improve your English speaking, listening, reading and writing<br/>
        skills. Improving your skills will help you use English more effectively so that you can do well in your studies, get<br/>
        ahead at work and confidently communicate in English in your free time.
        </p>
        <div className={styles.elementTwo}>
          <h1>How to improve your English proficiency</h1>
          <p>To build your vocabulary and develop your English communication skills, practice and study are essential.<br/>
          Working through practice activities and regularly reviewing the new language you learn can help you accelerate<br/>
          your knowledge and understanding of English.
          </p>
        </div>

        <div className={styles.elementThrre}>
          <h1>Take a self-study course online</h1>
          <p>
          You can get unlimited access to helpful learning materials and activities when you subscribe to LearnEnglish<br/>
          Select – a flexible, online way of learning English. 
          </p>
          <ul className={styles.listItem}>
            <li>
            Study at your own pace.
            </li>
            <li>
            Access lessons whenever and wherever you want, for as long as you like.
            </li>
            <li>
            Receive exclusive new content every month.
            </li>
            <li>
            Improve your business English proficiency for new career opportunities.
            </li>
          </ul>
          <p>To fast-track your English language education, simply select a plan and subscribe today.</p>
        </div>
        <div className={styles.elementFour}>
          <h1>Choose the skill you want to practise</h1>
          <p>
          The self-study lessons in these sections are written and organised according to the levels of the Common<br/>
          European Framework of Reference for languages (CEFR). There are different types of texts, recordings and<br/>
          videos with interactive exercises and worksheets that practise the skills you need.
          </p>
          <p>
          Choose the skill you want to practise today and improve your English at your own speed, whenever it's<br/>
          convenient for you.
          </p>
        </div>
        <div className={styles.contain}>
      <div className={styles.viewRow}>
        <div className={styles.imageFile}>
          <img src={Image1} alt="" />
        </div>
        <div className={styles.textView}>
          <Link to={""}>
            <h2>Listening</h2>
          </Link>
          <p>
            Here you can find activities to practise your listening skills.
            Listening will help you to improve your understanding of the
            language and your pronunciation.
          </p>
        </div>
      </div>

      <div className={styles.viewRow}>
        <div className={styles.imageFile}>
          <img src={Image2} alt="" />
        </div>
        <div className={styles.textView}>
          <Link to={""}>
            <h2>Reading</h2>
          </Link>
          <p>
            Here you can find activities to practise your writing skills. You
            can improve your writing by understanding model texts and how
            they're structured.
          </p>
        </div>
      </div>

      <div className={styles.viewRow}>
        <div className={styles.imageFile}>
          <img src={Image3} alt="" />
        </div>
        <div className={styles.textView}>
          <Link to={""}>
            <h2>Writing</h2>
          </Link>
          <p>
            Here you can find activities to practise your listening skills.
            Listening will help you to improve your understanding of the
            language and your pronunciation.
          </p>
        </div>
      </div>

      <div className={styles.viewRow}>
        <div className={styles.imageFile}>
          <img src={Image4} alt="" />
        </div>
        <div className={styles.textView}>
          <Link to={""}>
            <h2>Speaking</h2>
          </Link>
          <p>
            Here you can find activities to practise your speaking skills. You
            can improve your speaking by noticing the language we use in
            different situations and practising useful phrases.
          </p>
        </div>
      </div>
    </div>
      </div>
      <div className={styles.containRight}>
          <RightItem/>
      </div>
      </div>
    </div>
  )
}

export default Skill
