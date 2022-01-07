import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./MenuLoginRegis.module.css";
import { GlobalState } from "../../../GlobalState";
import { GoogleLogout } from "react-google-login";

const MenuLoginRegis = () => {
  const state = useContext(GlobalState);
  const [dataLoginMedia, setdataLoginMedia] = state.userApi.dataLoginMedia;
  const depen = JSON.parse(sessionStorage.getItem("isLoginMedia"));

  useEffect(() => {
    setdataLoginMedia(depen);
  }, [depen]);

  const eventLogoutGG = () => {
    sessionStorage.setItem(
      "isLoginMedia",
      JSON.stringify({
        isLogin: false,
        objectLogin: "",
      })
    );
  };

  const eventMove = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.containerLogin}>
      <ul className={styles.items}>
        <li className={styles.item}>
          {dataLoginMedia.isLogin ? (
            <Link className={styles.twoItems} to={""}>
              Hi {dataLoginMedia.objectLogin.givenName}!
            </Link>
          ) : (
            <Link className={styles.twoItems} to={"Login"} onClick={eventMove}>
              Login
            </Link>
          )}
        </li>
        <li className={styles.item}>
          {dataLoginMedia.isLogin ? (
            <GoogleLogout
              clientId="850036939989-k16t0uqdlltb5irem720kbmnq0s1desm.apps.googleusercontent.com"
              onLogoutSuccess={eventLogoutGG}
              render={(renderProps) => (
                <p
                  className={styles.btnOutGG}
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Log Out
                </p>
              )}
            ></GoogleLogout>
          ) : (
            <Link className={styles.twoItems} to={"/Register"}>
              Register
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default MenuLoginRegis;
