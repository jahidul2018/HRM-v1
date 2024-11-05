const express = require("express");
const router = express.Router();
const reportTimesheetController = require("../../controllers/reports/reportTimesheetController");
const { protect, authorize } = require("../../middlewares/authMiddleware");

router.get(
	"/timesheet",
	protect,
	authorize(["hr", "admin"]),
	reportTimesheetController.getTimesheetReport
);

module.exports = router;
