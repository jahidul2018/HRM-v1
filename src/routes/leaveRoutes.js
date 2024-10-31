const express = require("express");
const router = express.Router();
const leaveController = require("../controllers/leaveController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["view_self"]),
	leaveController.applyForLeave
); // Apply for leave
router.get(
	"/",
	protect,
	authorize(["view_self"]),
	leaveController.getEmployeeLeaveApplications
); // View own leave applications
router.patch(
	"/:leaveId/status",
	protect,
	authorize(["manage_leave"]),
	leaveController.updateLeaveStatus
); // Update leave status

module.exports = router;
