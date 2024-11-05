const express = require("express");
const router = express.Router();
const reportEmployeeProfileController = require("../../controllers/reports/reportEmployeeProfileController");
const { protect, authorize } = require("../../middlewares/authMiddleware");

router.get(
	"/employee-profile/:employeeId",
	protect,
	authorize(["hr", "admin"]),
	reportEmployeeProfileController.getEmployeeProfileReport
);

module.exports = router;
