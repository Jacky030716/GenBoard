const express = require("express");
const router = express.Router();
const userTraineeController = require("../controllers/user_trainee_controller");

module.exports = router;

router.get("/:uid", userTraineeController.findById);
router.get("/department/:department", userTraineeController.findByDepartment);