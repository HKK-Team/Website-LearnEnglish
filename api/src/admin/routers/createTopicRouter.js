const router = require("express").Router();
const createTopicCtrl = require("../controllers/createTopicController");

router.route("/createTopicListening").post(createTopicCtrl.createTopicListening);
router.route("/createTopicReading").post(createTopicCtrl.createTopicReading);
router.route("/createTopicWriting").post(createTopicCtrl.createTopicWriting);
router.route("/createTopicSpeaking").post(createTopicCtrl.createTopicSpeaking);


module.exports = router;
