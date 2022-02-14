const router = require("express").Router();
const createTopicCtrl = require("../controllers/createTopicController");

router.route("/createTopicListening").post(createTopicCtrl.createTopicListening);

module.exports = router;
