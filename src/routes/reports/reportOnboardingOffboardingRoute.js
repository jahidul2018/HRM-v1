const express = require("express");
const router = express.Router();
const reportOnboardingOffboardingController = require("../../controllers/reports/reportOnboardingOffboardingController");
const { protect, authorize } = require("../../middlewares/authMiddleware");

router.get(
	"/onboarding-offboarding",
	protect,
	authorize(["hr", "admin"]),
	reportOnboardingOffboardingController.getOnboardingOffboardingReport
);

module.exports = router;
