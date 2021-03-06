import axios from "axios";
import { React, useContext, useState } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import { MdMarkEmailUnread, MdPassword } from "react-icons/md";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import styles from "./Login.module.css";
import {
  showErrMsg,
  showSuccessMsg,
} from "../../utils/notification/notification";

const Login = () => {
  const state = useContext(GlobalState);
  const [isLogged, setIsLogged] = state.userApi.isLogged;
  const [dataLoginMedia, setdataLoginMedia] = state.userApi.dataLoginMedia;

  const [users, setUsers] = useState({
    email: "",
    password: "",
    err: "",
    success: "",
  });
  const { email, password, err, success } = users;

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value, err: "", success: "" });
  };
  const responseGoogle = (response) => {
    sessionStorage.setItem(
      "isLoginMedia",
      JSON.stringify({
        isLogin: true,
        objectLogin: response.profileObj,
      })
    );
    setdataLoginMedia(JSON.parse(sessionStorage.getItem("isLoginMedia")));
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  //login with facebook
  const responseFacebook = (response) => {
    const setting = {
      id: response.id,
      email: response.email,
      givenName: response.name,
      image: response.picture.data.url,
    };
    sessionStorage.setItem(
      "isLoginMedia",
      JSON.stringify({
        isLogin: true,
        objectLogin: setting,
      })
    );
    setdataLoginMedia(JSON.parse(sessionStorage.getItem("isLoginMedia")));
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  // //login with google
  // const responseGoogle = async (response) => {
  //   try {
  //     const res = await axios.post("/user/google_login", {
  //       tokenId: response.tokenId,
  //     });
  //     setUsers({ ...users, error: "", success: res.data.msg });
  //     localStorage.setItem("firstLogin", true);
  //     setIsLogged(true);
  //     setTimeout(() => {
  //       window.location.href = "/";
  //     }, 2000);
  //   } catch (err) {
  //     err.response.data.msg &&
  //       setUsers({ ...users, err: err.response.data.msg, success: "" });
  //   }
  // };

  // //login with facebook
  // const responseFacebook = async (response) => {
  //   try {
  //     const { accessToken, userID } = response;
  //     const res = await axios.post("/user/facebook_login", {
  //       accessToken,
  //       userID,
  //     });

  //     setUsers({ ...users, error: "", success: res.data.msg });
  //     localStorage.setItem("firstLogin", true);
  //     setIsLogged(true);
  //     setTimeout(() => {
  //       window.location.href = "/";
  //     }, 2000);
  //   } catch (err) {
  //     err.response.data.msg &&
  //       setUsers({ ...users, err: err.response.data.msg, success: "" });
  //   }
  // };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/login", {
        ...users,
        withCredentials: true,
      });
      setUsers({ ...users, error: "", success: res.data.msg });
      localStorage.setItem("firstLogin", true);
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (err) {
      err.response.data.msg &&
        setUsers({ ...users, err: err.response.data.msg, success: "" });
    }
  };

  return (
    <div className="grid wide">
      <section className="row">
        <div className="col l-o-4  m-o-3 c-o-2 ">
          <div className={styles.registerWrapper}>
            <div id="login" className={styles.userBox}>
              <h1 className={styles.accountTitle}>Log In</h1>
              {err && showErrMsg(err)}
              {success && showSuccessMsg(success)}
              <form
                action="/Login"
                id={styles.customerRegister}
                onSubmit={loginSubmit}
              >
                <div className={`${styles.input}`}>
                  <label htmlFor="" className={styles.iconField}>
                    <MdMarkEmailUnread />
                  </label>
                  <input
                    className={styles.text}
                    type="email"
                    id="email-user"
                    name="email"
                    placeholder="Email"
                    size="32"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    autoComplete="on"
                    value={users.email}
                    onChange={onChangeInput}
                  />
                </div>
                <div className={`${styles.input}`}>
                  <label htmlFor="" className={styles.iconField}>
                    <MdPassword />
                  </label>
                  <input
                    className={styles.text}
                    type="password"
                    id="password-user"
                    name="password"
                    placeholder="PassWord"
                    size="32"
                    required
                    pattern="((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]){6,20})"
                    autoComplete="on"
                    value={users.password}
                    onChange={onChangeInput}
                  />
                  {/* M???t kh???u ph???i ch???a ??t nh???t m???t ch??? s??? [0-9].
                    M???t kh???u ph???i ch???a ??t nh???t m???t k?? t??? Latinh vi???t th?????ng [a-z].
                    M???t kh???u ph???i ch???a ??t nh???t m???t k?? t??? Latinh vi???t hoa [A-Z].
                    M???t kh???u ph???i ch???a ??t nh???t m???t k?? t??? ?????c bi???t nh??! @ # & ().
                    M???t kh???u ph???i c?? ????? d??i ??t nh???t 6 k?? t??? v?? t???i ??a 20 k?? t???. */}
                </div>
                <input
                  type="submit"
                  value="Log In"
                  className={styles.btnSignin}
                />
                <div className={styles.reqPass}>
                  <Link to={"/Register"}>Don't Have Account? Register</Link>
                </div>
                <div className={styles.reqPass}>
                  <Link to="#">Forgot PassWord</Link>
                </div>
              </form>
              <div className={styles.blockButtonFace}>
                <div className={styles.buttonFaceLogin}>
                  <FacebookLogin
                    appId="443208307507410"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        className={styles.btnLogFb}
                      >
                        Login Using Facebook
                      </button>
                    )}
                  />
                </div>
              </div>

              <div className={styles.blockBtngg}>
                <div className={styles.btnLoginGoogle}>
                  <GoogleLogin
                    clientId="1075154152235-2396lbcus8vqbge4ib6jl44k6bdqljpi.apps.googleusercontent.com"
                    buttonText="Login Using Google"
                    onSuccess={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    render={(renderProps) => (
                      <button
                        className={styles.btnLogGG}
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        Login Using Google+
                      </button>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
