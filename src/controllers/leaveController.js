const leaveService = require("../services/leaveService");
const asyncHandler = require("express-async-handler");

exports.applyForLeave = asyncHandler(async (req, res) => {
	const leave = await leaveService.createLeaveApplication({
		...req.body,
		employee: req.user._id,
	});
	res.status(201).json(leave);
});

exports.getEmployeeLeaveApplications = asyncHandler(async (req, res) => {
	const leaves = await leaveService.getLeaveApplicationsByEmployee(
		req.user._id
	);
	res.status(200).json(leaves);
});

exports.updateLeaveStatus = asyncHandler(async (req, res) => {
	const leave = await leaveService.updateLeaveStatus(
		req.params.leaveId,
		req.body.status
	);
	res.status(200).json(leave);
});
