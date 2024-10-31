const Leave = require("../models/leaveModel");

exports.createLeaveApplication = async (leaveData) => {
	const leave = new Leave(leaveData);
	return await leave.save();
};

exports.getLeaveApplicationsByEmployee = async (employeeId) => {
	return await Leave.find({ employee: employeeId });
};

exports.updateLeaveStatus = async (leaveId, status) => {
	return await Leave.findByIdAndUpdate(leaveId, { status }, { new: true });
};
