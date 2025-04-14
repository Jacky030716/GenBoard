const express = require("express");
const router = express.Router();
const meetingController = require("../controllers/meeting_controller");

module.exports = router;

router.post("/", meetingController.createMeeting);
router.get("/host/:uid", meetingController.getHostMeeting);
router.get("/participant/:uid", meetingController.getParticipantMeeting);
