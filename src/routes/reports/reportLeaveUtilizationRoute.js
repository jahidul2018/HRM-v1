const express = require("express");
const router = express.Router();
const reportLeaveUtilizationController = require("../../controllers/reports/reportLeaveUtilizationController");
const { protect, authorize } = require("../../middlewares/authMiddleware");

router.get(
	"/leave-utilization",
	protect,
	authorize(["hr", "admin"]),
	reportLeaveUtilizationController.getLeaveUtilizationReport
);

module.exports = router;
