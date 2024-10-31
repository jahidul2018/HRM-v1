const express = require("express");
const router = express.Router();
const complianceController = require("../controllers/complianceController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["hr", "admin"]),
	complianceController.createComplianceRecord
); // Create compliance record
router.get(
	"/employee/:employeeId",
	protect,
	authorize(["hr", "admin", "employee"]),
	complianceController.getEmployeeComplianceRecords
); // Get compliance records for an employee
router.patch(
	"/:complianceId/acknowledge",
	protect,
	authorize(["employee"]),
	complianceController.acknowledgePolicy
); // Acknowledge a policy
router.patch(
	"/:complianceId/resolve",
	protect,
	authorize(["hr", "admin"]),
	complianceController.resolveIncident
); // Resolve an incident

module.exports = router;
