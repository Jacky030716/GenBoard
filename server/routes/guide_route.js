const express = require("express");
const router = express.Router();
const guideController = require("../controllers/guide_controller");

module.exports = router;

router.get("/", guideController.getGuide);
router.get("/:guide_id", guideController.getGuideStep);
