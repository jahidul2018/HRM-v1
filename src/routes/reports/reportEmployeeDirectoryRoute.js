const express = require("express");
const router = express.Router();
const reportEmployeeDirectoryController = require("../../controllers/reports/reportEmployeeDirectoryController");
const { protect, authorize } = require("../../middlewares/authMiddleware");

router.get(
	"/employee-directory",
	protect,
	authorize(["hr", "admin"]),
	reportEmployeeDirectoryController.getEmployeeDirectoryReport
);

module.exports = router;
