const Attendance = require("../models/attendanceModel");
const mongoose = require("mongoose");

exports.markCheckIn = async (attendanceData) => {
	const attendance = new Attendance(attendanceData);
	return await attendance.save();
};

exports.markCheckOut = async (attendanceId, checkOutTime) => {
	const attendance = await Attendance.findById(attendanceId);
	if (!attendance) throw new Error("Attendance record not found");

	attendance.checkOutTime = checkOutTime;

	// Calculate working hours (in hours)
	const hoursWorked =
		(checkOutTime - attendance.checkInTime) / (1000 * 60 * 60);
	attendance.workingHours = hoursWorked;
	attendance.status = hoursWorked < 4 ? "Half Day" : "Present";

	return await attendance.save();
};

exports.getAttendanceByEmployee = async (employeeId) => {
	return await Attendance.find({ employee: employeeId });
};

// Daily Attendance Report
exports.getDailyReport = async (date) => {
	const startOfDay = new Date(date).setHours(0, 0, 0, 0);
	const endOfDay = new Date(date).setHours(23, 59, 59, 999);

	return await Attendance.find({ date: { $gte: startOfDay, $lte: endOfDay } })
		.populate("employee", "name email position")
		.exec();
};

// Monthly Attendance Report
exports.getMonthlyReport = async (year, month) => {
	return await Attendance.aggregate([
		{
			$match: {
				date: {
					$gte: new Date(year, month - 1, 1),
					$lt: new Date(year, month, 1),
				},
			},
		},
		{
			$group: {
				_id: "$employee",
				daysPresent: {
					$sum: { $cond: [{ $eq: ["$status", "Present"] }, 1, 0] },
				},
				daysHalfDay: {
					$sum: { $cond: [{ $eq: ["$status", "Half Day"] }, 1, 0] },
				},
				totalWorkingHours: { $sum: "$workingHours" },
			},
		},
		{
			$lookup: {
				from: "employees",
				localField: "_id",
				foreignField: "_id",
				as: "employeeDetails",
			},
		},
		{
			$unwind: "$employeeDetails",
		},
		{
			$project: {
				_id: 0,
				employee: "$employeeDetails.name",
				email: "$employeeDetails.email",
				position: "$employeeDetails.position",
				daysPresent: 1,
				daysHalfDay: 1,
				totalWorkingHours: 1,
			},
		},
	]);
};

// Yearly Attendance Report
exports.getYearlyReport = async (year) => {
	return await Attendance.aggregate([
		{
			$match: {
				date: {
					$gte: new Date(year, 0, 1),
					$lt: new Date(year + 1, 0, 1),
				},
			},
		},
		{
			$group: {
				_id: "$employee",
				daysPresent: {
					$sum: { $cond: [{ $eq: ["$status", "Present"] }, 1, 0] },
				},
				daysHalfDay: {
					$sum: { $cond: [{ $eq: ["$status", "Half Day"] }, 1, 0] },
				},
				totalWorkingHours: { $sum: "$workingHours" },
			},
		},
		{
			$lookup: {
				from: "employees",
				localField: "_id",
				foreignField: "_id",
				as: "employeeDetails",
			},
		},
		{
			$unwind: "$employeeDetails",
		},
		{
			$project: {
				_id: 0,
				employee: "$employeeDetails.name",
				email: "$employeeDetails.email",
				position: "$employeeDetails.position",
				daysPresent: 1,
				daysHalfDay: 1,
				totalWorkingHours: 1,
			},
		},
	]);
};

// get Monthly Attendance Summery
exports.getMonthlyAttendanceSummary = async (employeeId, year, month) => {
	const attendanceRecords = await Attendance.find({
		employee: employeeId,
		date: {
			$gte: new Date(year, month - 1, 1),
			$lt: new Date(year, month, 1),
		},
	});

	let daysPresent = 0;
	let halfDays = 0;
	let totalWorkingHours = 0;

	attendanceRecords.forEach((record) => {
		if (record.status === "Present") daysPresent++;
		if (record.status === "Half Day") halfDays++;
		totalWorkingHours += record.workingHours;
	});

	return {
		daysPresent,
		halfDays,
		totalWorkingHours,
	};
};

// Other attendance functions
