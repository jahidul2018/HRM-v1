const express = require("express");
const router = express.Router();
const safetyController = require("../controllers/safetyController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["hr", "admin"]),
	safetyController.recordSafetyTraining
); // Record safety training
router.get(
	"/employee/:employeeId",
	protect,
	authorize(["employee", "hr", "admin"]),
	safetyController.getEmployeeTrainingHistory
); // View employee training
router.get(
	"/expiring",
	protect,
	authorize(["hr", "admin"]),
	safetyController.getExpiringTrainings
); // View expiring trainings

module.exports = router;
