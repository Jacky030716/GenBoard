const express = require("express");
const router = express.Router();
const onboardingController = require("../controllers/onboarding_controller");

module.exports = router;

router.get(
  "/summarize/:department",
  onboardingController.getDepartmentOnboarding
);
router.get("/:uid", onboardingController.getOnboarding);
