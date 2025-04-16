const express = require("express");
const router = express.Router();
const monthController = require("../controllers/month_controller");

module.exports = router;

router.get("/month1", monthController.getMonth1);
router.get("/month2", monthController.getMonth2);
router.get("/month3", monthController.getMonth3);