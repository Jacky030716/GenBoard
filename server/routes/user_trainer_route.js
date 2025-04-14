const express = require("express");
const router = express.Router();
const userTrainerController = require("../controllers/user_trainer_controller");

module.exports = router;

router.get("/:uid", userTrainerController.findById);