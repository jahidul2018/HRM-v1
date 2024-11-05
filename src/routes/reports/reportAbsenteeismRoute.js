const express = require("express");
const router = express.Router();
const reportAbsenteeismController = require("../../controllers/reports/reportAbsenteeismController");
const { protect, authorize } = require("../../middlewares/authMiddleware");

router.get(
	"/absenteeism",
	protect,
	authorize(["hr", "admin"]),
	reportAbsenteeismController.getAbsenteeismReport
);

module.exports = router;
