const attendanceService = require("../services/attendanceService");
const asyncHandler = require("express-async-handler");
const notificationService = require("../services/notificationService");

exports.checkIn = asyncHandler(async (req, res) => {
	const attendanceData = {
		employee: req.user._id,
		checkInTime: new Date(),
		date: new Date().setHours(0, 0, 0, 0), // Reset time for same-day record
	};
	const attendance = await attendanceService.markCheckIn(attendanceData);
	res.status(201).json(attendance);
});

exports.checkOut = asyncHandler(async (req, res) => {
	const checkOutTime = new Date();
	const attendance = await attendanceService.markCheckOut(
		req.params.attendanceId,
		checkOutTime
	);
	res.status(200).json(attendance);
});

exports.getEmployeeAttendanceRecords = asyncHandler(async (req, res) => {
	const attendanceRecords = await attendanceService.getAttendanceByEmployee(
		req.user._id
	);
	res.status(200).json(attendanceRecords);
});

// Daily Attendance Report
exports.dailyReport = asyncHandler(async (req, res) => {
	const date = req.query.date || new Date();
	const report = await attendanceService.getDailyReport(date);
	res.status(200).json(report);
});

// Monthly Attendance Report
exports.monthlyReport = asyncHandler(async (req, res) => {
	const { year, month } = req.query;
	if (!year || !month)
		return res.status(400).json({ message: "Year and month are required" });

	const report = await attendanceService.getMonthlyReport(
		Number(year),
		Number(month)
	);
	res.status(200).json(report);
});

// Yearly Attendance Report
exports.yearlyReport = asyncHandler(async (req, res) => {
	const { year } = req.query;
	if (!year) return res.status(400).json({ message: "Year is required" });

	const report = await attendanceService.getYearlyReport(Number(year));
	res.status(200).json(report);
});

// notification

const checkAttendance = async (employeeId) => {
	const attendanceIssues = await checkForAttendanceIssues(employeeId); // Define attendance check logic
	if (attendanceIssues) {
		await notificationService.createNotification({
			recipient: employeeId,
			message:
				"You have attendance irregularities. Please review your attendance records.",
			type: "attendance",
		});
	}
};
