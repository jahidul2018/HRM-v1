const Leave = require("../../models/leaveModel");

exports.getLeaveUtilizationData = async () => {
	return await Leave.find({})
		.populate("employee", "name department designation")
		.select("employee leaveType balance used remaining");
};
