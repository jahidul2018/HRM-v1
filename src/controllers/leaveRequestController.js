const leaveRequestService = require("../services/leaveRequestService");
const asyncHandler = require("express-async-handler");

exports.createLeaveRequest = asyncHandler(async (req, res) => {
	const leaveData = { ...req.body, employee: req.user._id };
	const leaveRequest = await leaveRequestService.createLeaveRequest(leaveData);
	res.status(201).json(leaveRequest);
});

exports.getLeaveRequestsByEmployee = asyncHandler(async (req, res) => {
	const leaveRequests = await leaveRequestService.getLeaveRequestsByEmployee(
		req.user._id
	);
	res.status(200).json(leaveRequests);
});
