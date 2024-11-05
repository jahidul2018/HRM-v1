const express = require("express");
const router = express.Router();
const reportMonthlyAttendanceController = require("../../controllers/reports/reportMonthlyAttendanceController");
const { protect, authorize } = require("../../middlewares/authMiddleware");

router.get(
	"/monthly-attendance-summary",
	protect,
	authorize(["hr", "admin"]),
	reportMonthlyAttendanceController.getMonthlyAttendanceSummaryReport
);

module.exports = router;
