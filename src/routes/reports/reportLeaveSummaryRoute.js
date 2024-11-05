const express = require("express");
const router = express.Router();
const reportLeaveSummaryController = require("../../controllers/reports/reportLeaveSummaryController");
const { protect, authorize } = require("../../middlewares/authMiddleware");

router.get(
	"/leave-summary",
	protect,
	authorize(["hr", "admin"]),
	reportLeaveSummaryController.getLeaveSummaryReport
);

module.exports = router;
