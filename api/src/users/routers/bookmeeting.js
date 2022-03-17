const router = require("express").Router();
const bookCtrl = require("../controllers/bookMeetingController");

router.route("/bookingmeeting").post(bookCtrl.saveData);
router.route("/getbookmeeting").get(bookCtrl.getData);


module.exports = router;