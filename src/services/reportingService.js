const Employee = require("../models/employeeModel");
const Payroll = require("../models/payrollModel");
const Attendance = require("../models/attendanceModel");

exports.getEmployeeDemographics = async () => {
	return await Employee.aggregate([
		{ $group: { _id: "$department", count: { $sum: 1 } } },
	]);
};

exports.calculateTurnoverRate = async (startDate, endDate) => {
	const hiredCount = await Employee.countDocuments({
		hireDate: { $gte: startDate, $lte: endDate },
	});
	const terminatedCount = await Employee.countDocuments({
		terminationDate: { $gte: startDate, $lte: endDate },
	});
	const totalEmployees = await Employee.countDocuments();

	return {
		hired: hiredCount,
		terminated: terminatedCount,
		turnoverRate: (terminatedCount / totalEmployees) * 100,
	};
};

// payroll
exports.generatePayrollSummary = async () => {
	return await Payroll.aggregate([
		{
			$group: {
				_id: "$employee",
				totalGrossSalary: { $sum: "$grossSalary" },
				totalTax: { $sum: "$tax" },
				totalNetSalary: { $sum: "$netSalary" },
			},
		},
	]);
};

// attending
exports.getAttendanceAnalytics = async () => {
	const analytics = await Attendance.aggregate([
		{
			$group: {
				_id: "$employee",
				totalAttendanceDays: { $sum: 1 },
				totalWorkingHours: { $sum: "$workingHours" },
				averageWorkingHours: { $avg: "$workingHours" },
			},
		},
	]);
	return analytics;
};

exports.getDashboardMetrics = async () => {
	const demographics = await this.getEmployeeDemographics();
	const turnoverRate = await this.calculateTurnoverRate(
		new Date("2024-01-01"),
		new Date("2024-12-31")
	);
	const payrollSummary = await this.generatePayrollSummary();
	const attendanceAnalytics = await this.getAttendanceAnalytics();

	return {
		demographics,
		turnoverRate,
		payrollSummary,
		attendanceAnalytics,
	};
};
