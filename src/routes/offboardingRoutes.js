const express = require("express");
const router = express.Router();
const offboardingController = require("../controllers/offboardingController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["hr", "admin"]),
	offboardingController.createOffboardingRecord
); // Create offboarding record
router.get(
	"/employee/:employeeId",
	protect,
	authorize(["hr", "manager", "admin"]),
	offboardingController.getOffboardingByEmployee
); // Get offboarding by employee
router.patch(
	"/:offboardingId/tasks/:taskId",
	protect,
	authorize(["hr", "admin"]),
	offboardingController.updateOffboardingTaskStatus
); // Update offboarding task

module.exports = router;
