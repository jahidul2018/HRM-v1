const express = require("express");
const router = express.Router();
const reportOvertimeController = require("../../controllers/reports/reportOvertimeController");
const { protect, authorize } = require("../../middlewares/authMiddleware");

router.get(
	"/overtime",
	protect,
	authorize(["hr", "admin"]),
	reportOvertimeController.getOvertimeReport
);

module.exports = router;
