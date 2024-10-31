const LeaveRequest = require("../models/leaveRequestModel");

exports.createLeaveRequest = async (leaveData) => {
	const leaveRequest = new LeaveRequest(leaveData);
	return await leaveRequest.save();
};

exports.getLeaveRequestsByEmployee = async (employeeId) => {
	return await LeaveRequest.find({ employee: employeeId });
};

exports.updateLeaveRequestStatus = async (leaveRequestId, status) => {
	return await LeaveRequest.findByIdAndUpdate(
		leaveRequestId,
		{ status },
		{ new: true }
	);
};
