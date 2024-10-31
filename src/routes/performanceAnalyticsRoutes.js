const express = require("express");
const router = express.Router();
const performanceAnalyticsController = require("../controllers/performanceAnalyticsController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.get(
	"/department/:departmentId",
	protect,
	authorize(["hr", "admin"]),
	performanceAnalyticsController.getDepartmentPerformanceAnalytics
); // Get department analytics
router.get(
	"/summary",
	protect,
	authorize(["hr", "admin"]),
	performanceAnalyticsController.getCompanyPerformanceSummary
); // Get company performance summary

module.exports = router;
