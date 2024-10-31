const express = require("express");
const router = express.Router();
const leaveRequestController = require("../controllers/leaveRequestController");
const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
	"/",
	protect,
	authorize(["employee"]),
	leaveRequestController.createLeaveRequest
); // Create leave request
router.get(
	"/",
	protect,
	authorize(["employee"]),
	leaveRequestController.getLeaveRequestsByEmployee
); // Get leave requests for employee

module.exports = router;
