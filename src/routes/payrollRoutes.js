const express = require("express");
const router = express.Router();
const payrollController = require("../controllers/payrollController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/calculate",
	protect,
	authorize(["manage_salary"]),
	payrollController.calculateMonthlyPayroll
);
router.get(
	"/",
	protect,
	authorize(["view_self", "manage_salary"]),
	payrollController.getEmployeePayrollRecords
);
router.patch(
	"/:payrollId/status",
	protect,
	authorize(["manage_salary"]),
	payrollController.updatePayrollStatus
);

module.exports = router;
