const express = require("express");
const router = express.Router();
const payrollReportController = require("../controllers/payrollReportController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.get(
	"/",
	protect,
	authorize(["hr", "admin"]),
	payrollReportController.getPayrollReport
); // View payroll report

module.exports = router;
