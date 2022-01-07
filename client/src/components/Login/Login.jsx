import { React, useState, useContext } from "react";
import styles from "./Login.module.css";
import Face from "../../images/fb-btn.png";
import Google from "../../images/google-btn.png";
import { MdMarkEmailUnread, MdPassword } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GlobalState } from "../../GlobalState";

const Login = () => {
  const state = useContext(GlobalState);
  const [dataLoginMedia, setdataLoginMedia] = state.userApi.dataLoginMedia;

  //login with google
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

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/login", { ...user });
      localStorage.setItem("firstLogin", true);
      alert("Login Successfully!");
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className={styles.containLogin}>
      <section className={styles.login}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.registerWrapper}>
              <div id="login" className={styles.userBox}>
                <h1 className={styles.accountTitle}>Log In</h1>
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
                      value={user.email}
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
                      value={user.password}
                      onChange={onChangeInput}
                    />
                    {/* Mật khẩu phải chứa ít nhất một chữ số [0-9].
                    Mật khẩu phải chứa ít nhất một ký tự Latinh viết thường [a-z].
                    Mật khẩu phải chứa ít nhất một ký tự Latinh viết hoa [A-Z].
                    Mật khẩu phải chứa ít nhất một ký tự đặc biệt như! @ # & ().
                    Mật khẩu phải có độ dài ít nhất 6 ký tự và tối đa 20 ký tự. */}
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
                    <a href="#">Forgot PassWord</a>
                  </div>
                </form>
                <div className={styles.blockButtonFace}>
                  <div className={styles.buttonFaceLogin}>
                    <FacebookLogin
                      appId="443208307507410"
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
                  {/* <div className={styles.buttonLogoutFace}>
                    <button
                      className={styles.btnOutFb}
                      onClick={(e) => {
                        e.preventDefault();
                        window.FB.logout();
                      }}
                    >
                      Logout
                    </button>
                  </div> */}
                </div>

                <div className={styles.blockBtngg}>
                  <div className={styles.btnLoginGoogle}>
                    <GoogleLogin
                      clientId="850036939989-k16t0uqdlltb5irem720kbmnq0s1desm.apps.googleusercontent.com"
                      buttonText="Login Using Google"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                      isSignedIn={true}
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
                  {/* <div className={styles.btnLogoutGoogle}>
                    <GoogleLogout
                      clientId="850036939989-k16t0uqdlltb5irem720kbmnq0s1desm.apps.googleusercontent.com"
                      buttonText="Logout"
                      onLogoutSuccess={logout}
                      render={(renderProps) => (
                        <button
                          className={styles.btnOutGG}
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                        >
                          Logout
                        </button>
                      )}
                    ></GoogleLogout>
                  </div> */}
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
