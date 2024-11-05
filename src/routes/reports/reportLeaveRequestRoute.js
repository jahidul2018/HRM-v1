const express = require("express");
const router = express.Router();
const reportLeaveRequestController = require("../../controllers/reports/reportLeaveRequestController");
const { protect, authorize } = require("../../middlewares/authMiddleware");

router.get(
	"/leave-requests",
	protect,
	authorize(["hr", "admin"]),
	reportLeaveRequestController.getLeaveRequestReport
);

module.exports = router;
