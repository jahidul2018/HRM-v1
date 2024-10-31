const express = require("express");
const router = express.Router();
const attendanceController = require("../controllers/attendanceController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/check-in",
	protect,
	authorize(["view_self"]),
	attendanceController.checkIn
); // Check-in route
router.patch(
	"/:attendanceId/check-out",
	protect,
	authorize(["view_self"]),
	attendanceController.checkOut
); // Check-out route
router.get(
	"/",
	protect,
	authorize(["view_self"]),
	attendanceController.getEmployeeAttendanceRecords
); // View attendance records

// Report routes
router.get(
	"/report/daily",
	protect,
	authorize(["manage_attendance", "view_self"]),
	attendanceController.dailyReport
);
router.get(
	"/report/monthly",
	protect,
	authorize(["manage_attendance"]),
	attendanceController.monthlyReport
);
router.get(
	"/report/yearly",
	protect,
	authorize(["manage_attendance"]),
	attendanceController.yearlyReport
);

module.exports = router;
