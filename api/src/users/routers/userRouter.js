const router = require("express").Router();
const userCtrl = require("../controllers/userController");
const auth = require("../middlewares/auth");

router.route("/login").post(userCtrl.login);
router.route("/register").post(userCtrl.register);
router.get("/refresh_token", userCtrl.refreshToken);
router.route("/logout").get(userCtrl.logout);
router.route("/infor").get(auth, userCtrl.getUser);
// router.route("/editUser").post(userCtrl.editUser);
// router.route("/editPassword").post(userCtrl.editPassword);
module.exports = router;
