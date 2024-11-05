const express = require("express");
const router = express.Router();
const reportDailyAttendanceController = require("../../controllers/reports/reportDailyAttendanceController");
const { protect, authorize } = require("../../middlewares/authMiddleware");

router.get(
	"/daily-attendance",
	protect,
	authorize(["hr", "admin"]),
	reportDailyAttendanceController.getDailyAttendanceReport
);

module.exports = router;
