const express = require("express");
const router = express.Router();
const recognitionController = require("../controllers/recognitionController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["employee", "manager", "hr"]),
	recognitionController.createRecognition
); // Give recognition
router.get(
	"/employee/:employeeId",
	protect,
	authorize(["employee", "manager", "hr", "admin"]),
	recognitionController.getRecognitionsByEmployee
); // View recognitions

module.exports = router;
