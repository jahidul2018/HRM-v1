const Attendance = require("../../models/attendanceModel");

exports.getMonthlyAttendanceSummary = async (month, year) => {
	return await Attendance.aggregate([
		{
			$match: {
				date: {
					$gte: new Date(`${year}-${month}-01`),
					$lte: new Date(`${year}-${month}-31`),
				},
			},
		},
		{
			$group: {
				_id: "$employee",
				totalDays: { $sum: 1 },
				presentDays: {
					$sum: { $cond: [{ $eq: ["$status", "Present"] }, 1, 0] },
				},
				absentDays: { $sum: { $cond: [{ $eq: ["$status", "Absent"] }, 1, 0] } },
			},
		},
	]);
};
