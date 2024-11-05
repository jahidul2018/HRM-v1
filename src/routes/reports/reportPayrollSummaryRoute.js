const express = require("express");
const router = express.Router();
const reportPayrollSummaryController = require("../../controllers/reports/reportPayrollSummaryController");
const { protect, authorize } = require("../../middlewares/authMiddleware");

router.get(
	"/payroll-summary",
	protect,
	authorize(["hr", "admin"]),
	reportPayrollSummaryController.getPayrollSummaryReport
);

module.exports = router;
