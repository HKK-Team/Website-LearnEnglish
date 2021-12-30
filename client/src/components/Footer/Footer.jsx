import React from "react";
import styles from "./Footer.module.css"
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer class={styles.footer}>
        <div class={styles.container}>
          <div class={styles.row}>
          <div class={styles.footerCol}>
              <h4>Grammar</h4>
              <ul>
                <li>
                  <a href="#">Beginner to pre-intermediate</a>
                </li>
                <li>
                  <a href="#">Intermediate to upper intermediate</a>
                </li>
                <li>
                  <a href="#">English grammar reference</a>
                </li>
                <li>
                  <a href="#">Personal online tutoring</a>
                </li>
              </ul>
            </div>
            <div class={styles.footerCol}>
              <h4>Skills</h4>
              <ul>
                <li>
                  <a href="#">Reading With Topic</a>
                </li>
                <li>
                  <a href="#">Writing With Topic</a>
                </li>
                <li>
                  <a href="#">Listening With Video</a>
                </li>
                <li>
                  <a href="#">Speaking With Video</a>
                </li>
              </ul>
            </div>
            <div class={styles.footerCol}>
              <h4>Vocabulary</h4>
              <ul>
              <li>
                  <a href="#">Beginner to pre-intermediate</a>
                </li>
                <li>
                  <a href="#">Intermediate to upper intermediate</a>
                </li>
                <li>
                  <a href="#">English grammar reference</a>
                </li>
                <li>
                  <a href="#">Personal online tutoring</a>
                </li>
              </ul>
            </div>
            <div class={styles.footerCol}>
              <h4>Follow Us</h4>
              <div class={styles.socialLinks}>
                <a href="#">
                  <i class="fab fa-facebook-f"><FaFacebook /></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"><FaYoutube/></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"><FaTwitch/></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"><FaTwitter/></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
