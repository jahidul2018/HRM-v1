const express = require("express");
const router = express.Router();
const reportingController = require("../controllers/reportingController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.get(
	"/demographics",
	protect,
	authorize(["hr", "admin"]),
	reportingController.getEmployeeDemographics
); // Employee demographics
router.get(
	"/turnover-rate",
	protect,
	authorize(["hr", "admin"]),
	reportingController.getTurnoverRate
); // Turnover rate

// payroll
router.get(
	"/payroll-summary",
	protect,
	authorize(["hr", "admin"]),
	reportingController.getPayrollSummary
); // Payroll summary

// Attendance analytics

router.get(
	"/attendance-analytics",
	protect,
	authorize(["hr", "admin"]),
	reportingController.getAttendanceAnalytics
); // Attendance analytics

router.get(
	"/dashboard",
	protect,
	authorize(["hr", "admin"]),
	reportingController.getDashboardMetrics
); // Dashboard metrics

module.exports = router;
