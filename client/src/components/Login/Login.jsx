import React from "react";
import styles from "./Login.module.css";
import Face from '../../images/fb-btn.png'
import Google from '../../images/google-btn.png'
import { MdMarkEmailUnread,MdPassword } from "react-icons/md";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.containLogin}>
      <section className={styles.login}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.registerWrapper}>
            <div id="login" className={styles.userBox}>
              <h1 className={styles.accountTitle}>Đăng nhập</h1>
              <form action="/Login" id={styles.customerRegister}>
                <div className={`${styles.email}${styles.input}`}>
                  <label htmlFor="" className={styles.iconField}>
                    <MdMarkEmailUnread/>
                  </label>
                  <input
                    type="email"
                    id="email-user"
                    className={styles.text}
                    placeholder="Email"
                    size="32"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  />
                </div>
                <div className={`${styles.password}${styles.input}`}>
                  <label htmlFor="" className={styles.iconField}>
                    <MdPassword/>
                  </label>
                  <input
                    type="password"
                    id="password-user"
                    className={styles.text}
                    placeholder="Mật khẩu"
                    size="32"
                    pattern="((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})"
                  />
                  {/* Mật khẩu phải chứa ít nhất một chữ số [0-9].
                    Mật khẩu phải chứa ít nhất một ký tự Latinh viết thường [a-z].
                    Mật khẩu phải chứa ít nhất một ký tự Latinh viết hoa [A-Z].
                    Mật khẩu phải chứa ít nhất một ký tự đặc biệt như! @ # & ().
                    Mật khẩu phải có độ dài ít nhất 6 ký tự và tối đa 20 ký tự. */}
                </div>
                <input type="submit" value="Đăng nhập" className={styles.btnSignin} />
                <div className={styles.reqPass}>
                  <Link to={"/Register"}>Chưa có tài khoản? Đăng ký</Link>
                </div>
                <div className={styles.reqPass}>
                  <a href="#">Quên mật khẩu</a>
                </div>
              </form>
              <div id={styles.btnFacebookLogin} className={styles.faceBtn}>
                <img src={Face} alt="facebook" />{" "}
                <span>Đăng nhập bằng facebook</span>
              </div>
              <div id={styles.btnGoogleLogin} className={styles.googleBtn}>
                <img src={Google} alt="facebook" />{" "}
                <span>Đăng nhập bằng google</span>
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
