const express = require("express");
const router = express.Router();

module.exports = router;

const userAuthRoute = require("./user_auth_route")
const userTrainerRoute = require("./user_trainer_route");
const userTraineeRoute = require("./user_trainee_route")

const onboardingRoute = require("./onboarding_route");
const feedbackRoute = require("./feedback_route");
const meetingRoute = require("./meeting_route");

const traineeProgressRoute = require("./trainee_progress_route")

const codeQuestionRoute = require("./code_question_route")
const quizRoute = require("./quiz_route");
const guideRoute = require("./guide_route");


router.use('/userAuth', userAuthRoute)
router.use('/userTrainer', userTrainerRoute)
router.use('/userTrainee', userTraineeRoute)

router.use('/onboarding', onboardingRoute)
router.use('/feedback', feedbackRoute)
router.use('/meeting', meetingRoute)

router.use("/traineeProgress", traineeProgressRoute)

router.use('/codeQuestion', codeQuestionRoute)
router.use('/quiz', quizRoute)
router.use('/guide', guideRoute)