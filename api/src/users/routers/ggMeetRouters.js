const express = require("express");
const router = express.Router();
const ggMeetCtrl = require("../controllers/ggMeetController");

router.post("/api/save-call-id", ggMeetCtrl.saveCallId);
router.get("/api/get-call-id/:id", ggMeetCtrl.getCallId);

module.exports = router;
