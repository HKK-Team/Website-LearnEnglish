import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./MenuLoginRegis.module.css";
import { GlobalState } from "../../../GlobalState";
import { GoogleLogout } from "react-google-login";
import axios from "axios";

const MenuLoginRegis = () => {
  const state = useContext(GlobalState);
  const [dataLoginMedia, setdataLoginMedia] = state.userApi.dataLoginMedia;
  const [isLogged, setIsLogged] = state.userApi.isLogged;
  const [user, setuser] = state.userApi.user;

  // login using google api
  useEffect(() => {
    if (sessionStorage.getItem("isLoginMedia") === null) {
      setdataLoginMedia({ isLogin: false });
    } else
      setdataLoginMedia(JSON.parse(sessionStorage.getItem("isLoginMedia")));
  }, []);
  useEffect(() => {
    sessionStorage.setItem("isLoginMedia", JSON.stringify(dataLoginMedia));
  }, [dataLoginMedia]);

  //event logout by google facebook
  const eventLogoutGG = () => {
    setdataLoginMedia({
      isLogin: false,
    });
  };
  //event logout by system
  const eventLogOutStm = async () => {
    await axios.get("http://localhost:5000/user/logout");

    localStorage.removeItem("firstLogin");

    window.location.href = "/";
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
          ) : isLogged ? (
            <Link className={styles.twoItems} to={""}>
              Hi {user.lastname}!
            </Link>
          ) : (
            <Link className={styles.twoItems} to={"/Login"} onClick={eventMove}>
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
          ) : isLogged ? (
            <Link className={styles.twoItems} to={""} onClick={eventLogOutStm}>
              Log Out
            </Link>
          ) : (
            <Link
              className={styles.twoItems}
              to={"/Register"}
              onClick={eventMove}
            >
              Register
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default MenuLoginRegis;
