const Timesheet = require("../../models/timesheetModel");

exports.getOvertimeData = async (month, year) => {
	return await Timesheet.aggregate([
		{
			$match: {
				month,
				year,
				isOvertime: true,
			},
		},
		{
			$group: {
				_id: "$employee",
				totalOvertimeHours: { $sum: "$hoursLogged" },
			},
		},
	]);
};
