const express = require("express");
const router = express.Router();

const resultController = require("../controllers/result_controller");

module.exports = router;

router.get("/:uid", resultController.getResultById);
router.post("/", resultController.createResult);
router.put("/", resultController.updateResult);
