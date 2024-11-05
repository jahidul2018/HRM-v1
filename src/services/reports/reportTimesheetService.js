const Timesheet = require("../../models/timesheetModel");

exports.getTimesheetData = async (employeeId, startDate, endDate) => {
	const filter = {
		date: {
			$gte: new Date(startDate),
			$lte: new Date(endDate),
		},
	};
	if (employeeId) {
		filter.employee = employeeId;
	}
	return await Timesheet.find(filter)
		.populate("employee", "name department designation")
		.select("employee project hoursLogged date");
};
