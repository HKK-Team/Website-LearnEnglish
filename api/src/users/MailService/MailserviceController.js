const nodemailer = require("nodemailer");
class MailService {
  #codeOTP; // lưu trữ mã otp
  #mailManage = "hkkteamsp@gmail.com"; // Mail quản lý
  #passWordManage = "khanhvlcm12"; // password quản lý
  #isResetOtp = false; // Mã otp đã được gửi chưa

  // tạo mail quản lý
  addMailManage(user = "hkkteamsp@gmail.com", password = "khanhvlcm12") {
    this.#mailManage = user;
    this.#passWordManage = password;
  }

  // gửi mail cảnh báo học vụ
  sendMailNoteMeeting = async (req, res) => {
    try {
      if (req.body.email === null || req.body.email === undefined) {
        res.status(400).json("Email null");
      }

      let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: this.#mailManage,
          pass: this.#passWordManage,
        },
      });
      let mailOptions = {
        from: this.#mailManage,
        to: req.body.email,
        subject: "Notice about your meeting!",
        html: `<div>
        <h1>Dear ${req.body.nameStudent},</h1>
        <h3>You have a meeting with lecturer ${req.body.nameLecture}.</h3>
        <h4>Hello ${req.body.nameStudent}! You have a meeting about skill ${req.body.skill}. In this skill you will learn at ${req.body.nameSkill}. Name topic is ${req.body.nameTopic}!</h4>
        <h4>Start day is: ${req.body.dayCreate}!</h4>
        <h4>Start hour is: ${req.body.hourCreate}!</h4>
        <h4>Link meeting is: ${req.body.linkMeeting}</h4>
        <h3>Message : ${req.body.message}.</h3>
        <h2>Thanks You!</h2>
        </div>`,
      };
      transporter.sendMail(mailOptions);
      res.status(201).json("Send email successfully");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}
module.exports = new MailService();
