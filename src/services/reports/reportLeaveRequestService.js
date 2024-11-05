const LeaveRequest = require("../../models/leaveRequestModel");

exports.getLeaveRequestData = async (status) => {
	const filter = status ? { status } : {};
	return await LeaveRequest.find(filter)
		.populate("employee", "name department designation")
		.select("employee leaveType startDate endDate status reason");
};
