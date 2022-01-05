import React from 'react'
import { Link } from "react-router-dom";
import styles from "./MenuLoginRegis.module.css";

const MenuLoginRegis = () => {
    return (
        <div className={styles.containerLogin}>
            <ul className={styles.items}>
              <li className={styles.item}>
                <Link className={styles.twoItems} to={"Login"}>Login</Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.twoItems} to={"Register"}>Register</Link>
              </li>
            </ul>
          </div>
    )
}

export default MenuLoginRegis
