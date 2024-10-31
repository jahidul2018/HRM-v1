const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["create_employee"]),
	employeeController.createEmployee
);
router.get(
	"/:employeeId",
	protect,
	authorize(["view_self", "view_department"]),
	employeeController.getEmployee
);
router.put(
	"/:employeeId",
	protect,
	authorize(["update_employee", "update_self"]),
	employeeController.updateEmployee
);
router.delete(
	"/:employeeId",
	protect,
	authorize(["delete_employee"]),
	employeeController.deleteEmployee
);
router.patch(
	"/:employeeId/salary",
	protect,
	authorize(["manage_salary"]),
	employeeController.updateSalary
);
router.patch(
	"/:employeeId/leave",
	protect,
	authorize(["manage_leave"]),
	employeeController.updateLeaveBalance
);
router.patch(
	"/:employeeId/document",
	protect,
	authorize(["update_employee", "update_self"]),
	employeeController.addDocument
);

router.get(
	"/emergency-contact",
	protect,
	authorize(["employee", "manager", "hr"]),
	employeeController.getEmergencyContact
);

module.exports = router;
