const express = require("express");
const router = express.Router();
const userAuthController = require("../controllers/user_auth_controller");

module.exports = router;

router.post("/login", userAuthController.loginUser);
router.get("/:email", userAuthController.getUserByEmail);
