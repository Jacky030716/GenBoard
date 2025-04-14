const express = require("express");
const router = express.Router();

module.exports = router;

const meetingRoute = require("./meeting_route");

const codeQuestionRoute = require("./code_question_route")
const quizRoute = require("./quiz_route");

router.use('/meeting', meetingRoute)
router.use('/codeQuestion', codeQuestionRoute)
router.use('/quiz', quizRoute)