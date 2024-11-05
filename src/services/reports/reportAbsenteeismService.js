const Attendance = require("../../models/attendanceModel");

exports.getAbsenteeismData = async (startDate, endDate) => {
	return await Attendance.aggregate([
		{
			$match: {
				date: { $gte: new Date(startDate), $lte: new Date(endDate) },
				status: "Absent",
			},
		},
		{
			$group: {
				_id: "$employee",
				totalAbsences: { $sum: 1 },
			},
		},
		{
			$sort: { totalAbsences: -1 },
		},
	]);
};
