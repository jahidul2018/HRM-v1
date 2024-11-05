const Attendance = require("../../models/attendanceModel");

exports.getDailyAttendanceData = async (date) => {
	const attendanceData = await Attendance.find({ date: new Date(date) })
		.populate("employee", "name department designation")
		.select("employee status checkInTime checkOutTime");

	return attendanceData;
};
