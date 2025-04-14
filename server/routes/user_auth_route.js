const express = require("express");
const router = express.Router();
const userAuthController = require("../controllers/user_auth_controller");

module.exports = router;

router.get("/:email", userAuthController.getUserByEmail);