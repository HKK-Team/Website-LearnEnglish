import React from "react";
import styles from "./Register.module.css";
import { MdDriveFileRenameOutline, MdPassword } from "react-icons/md";

const Register = () => {
  return (
    <div className={styles.containerRegister}>
      <section className={styles.register}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.registerWrapper}>
              <div id="login" className={styles.userBox}>
                <h1 className={styles.accountTitle}>Đăng ký</h1>
                <form action="/Register" id={styles.customerRegister}>
                  <div className={`${styles.lastName}${styles.input}`}>
                    <label htmlFor="" className={styles.iconField}>
                      <MdDriveFileRenameOutline />
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className={styles.text}
                      placeholder="Họ"
                      size="32"
                    />
                  </div>
                  <div className={`${styles.firstName}${styles.input}`}>
                    <label htmlFor="" className={styles.iconField}>
                      <MdDriveFileRenameOutline />
                    </label>
                    <input
                      type="text"
                      id="fisrt_name"
                      className={styles.text}
                      placeholder="Tên"
                      size="32"
                    />
                  </div>
                  <div className={`${styles.email}${styles.input}`}>
                    <label htmlFor="" className={styles.iconField}>
                      <MdDriveFileRenameOutline />
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
                      <MdDriveFileRenameOutline />
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
                  <input
                    type="submit"
                    value="Đăng ký"
                    className={styles.btnSignin}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
