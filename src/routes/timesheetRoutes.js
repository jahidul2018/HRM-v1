const express = require("express");
const router = express.Router();
const timesheetController = require("../controllers/timesheetController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["employee"]),
	timesheetController.logWorkHours
); // Log work hours
router.get(
	"/project/:projectId",
	protect,
	authorize(["manager", "admin"]),
	timesheetController.getTimesheetsByProject
); // View timesheets by project
router.get(
	"/employee",
	protect,
	authorize(["employee"]),
	timesheetController.getTimesheetsByEmployee
); // View employee's timesheets

module.exports = router;
