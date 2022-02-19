import { React, useState } from "react";
import styles from "./Register.module.css";
import { MdDriveFileRenameOutline } from "react-icons/md";
import axios from "axios";

const Register = () => {
  // create error message
  const errMessage = document.getElementById("messErr");
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    confirm_password: "",
    password: "",
    address: "",
    nationality: "",
    phonenumber: "",
  });
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const registerSubmit = async (e) => {
    const errorMessage = document.getElementById("Register_messErr__FlEYT");
    e.preventDefault();
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!regex.test(user.password))
      return (errorMessage.innerText = `Mật khẩu phải chứa ít nhất một chữ số [0-9].
        Mật khẩu phải chứa ít nhất một ký tự Latinh viết thường [a-z].
        Mật khẩu phải chứa ít nhất một ký tự Latinh viết hoa [A-Z].
        Mật khẩu phải có độ dài ít nhất 6 ký tự và tối đa 20 ký tự.`);
    else if (user.password !== user.confirm_password) {
      return (errorMessage.innerText = `Xác nhận mật khẩu không chính xác. Vui lòng kiểm tra lại`);
    } else {
      try {
        await axios.post("/user/register", { ...user });
        alert("Created User Succesfully!");
        window.location.href = "/Login";
      } catch (err) {
        alert(err.response.data.msg);
      }
    }
  };
  return (
    <div className={styles.containerRegister}>
      <section className={styles.register}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.registerWrapper}>
              <div id="login" className={styles.userBox}>
                <h1 className={styles.accountTitle}>Register</h1>
                <span id={styles.messErr}></span>
                <form
                  action="/Register"
                  id={styles.customerRegister}
                  name="form-Register"
                  onSubmit={registerSubmit}
                >
                  <div className={`${styles.input}`}>
                    <label htmlFor="" className={styles.iconField}>
                      <MdDriveFileRenameOutline />
                    </label>
                    <input
                      className={styles.text}
                      type="text"
                      id="last_name"
                      name="firstname"
                      placeholder="First Name..."
                      size="32"
                      required
                      value={user.firstname}
                      onChange={onChangeInput}
                    />
                  </div>
                  <div className={`${styles.input}`}>
                    <label htmlFor="" className={styles.iconField}>
                      <MdDriveFileRenameOutline />
                    </label>
                    <input
                      className={styles.text}
                      type="text"
                      id="fisrt_name"
                      name="lastname"
                      placeholder="Last Name..."
                      size="32"
                      required
                      value={user.lastname}
                      onChange={onChangeInput}
                    />
                  </div>
                  <div className={`${styles.input}`}>
                    <label htmlFor="" className={styles.iconField}>
                      <MdDriveFileRenameOutline />
                    </label>
                    <input
                      type="email"
                      id="email-user"
                      className={styles.text}
                      name="email"
                      placeholder="Email..."
                      size="32"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      value={user.email}
                      onChange={onChangeInput}
                    />
                  </div>
                  <div className={`${styles.input}`}>
                    <label htmlFor="" className={styles.iconField}>
                      <MdDriveFileRenameOutline />
                    </label>
                    <input
                      className={styles.text}
                      type="password"
                      id="password-user"
                      name="password"
                      placeholder="PassWord..."
                      size="32"
                      required
                      autoComplete="on"
                      value={user.password}
                      onChange={onChangeInput}
                    />
                  </div>
                  <div className={`${styles.input}`}>
                    <label htmlFor="" className={styles.iconField}>
                      <MdDriveFileRenameOutline />
                    </label>
                    <input
                      className={styles.text}
                      type="password"
                      id="password-user"
                      name="confirm_password"
                      placeholder="Confirm PassWord ..."
                      size="32"
                      required
                      pattern="((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]){6,20})"
                      autoComplete="on"
                      value={user.confirm_password}
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
                    value="Register"
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
