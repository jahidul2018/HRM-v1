const express = require("express");
const router = express.Router();
const onboardingController = require("../controllers/onboardingController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["hr", "admin"]),
	onboardingController.createOnboardingRecord
); // Create onboarding record
router.get(
	"/employee/:employeeId",
	protect,
	authorize(["hr", "manager", "admin"]),
	onboardingController.getOnboardingByEmployee
); // Get onboarding by employee
router.patch(
	"/:onboardingId/tasks/:taskId",
	protect,
	authorize(["hr", "admin"]),
	onboardingController.updateOnboardingTaskStatus
); // Update onboarding task

module.exports = router;
