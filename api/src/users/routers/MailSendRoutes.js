const router = require("express").Router();
const sendmailCtrl = require("../MailService/MailserviceController");

router.route("/sendmail").put(sendmailCtrl.sendMailNoteMeeting);


module.exports = router;