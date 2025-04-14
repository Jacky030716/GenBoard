const express = require("express");
const router = express.Router();
const traineeProgressController = require("../controllers/trainee_progress_controller")

module.exports = router;

router.get("/:uid", traineeProgressController.getProgress);
router.put("/:uid", traineeProgressController.updateProgress)