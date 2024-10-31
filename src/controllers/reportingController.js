const reportingService = require("../services/reportingService");
const asyncHandler = require("express-async-handler");

exports.getEmployeeDemographics = asyncHandler(async (req, res) => {
	const demographics = await reportingService.getEmployeeDemographics();
	res.status(200).json(demographics);
});

exports.getTurnoverRate = asyncHandler(async (req, res) => {
	const { startDate, endDate } = req.query;
	const turnoverRate = await reportingService.calculateTurnoverRate(
		new Date(startDate),
		new Date(endDate)
	);
	res.status(200).json(turnoverRate);
});

exports.getPayrollSummary = asyncHandler(async (req, res) => {
	const payrollSummary = await reportingService.generatePayrollSummary();
	res.status(200).json(payrollSummary);
});

exports.getAttendanceAnalytics = asyncHandler(async (req, res) => {
	const attendanceAnalytics = await reportingService.getAttendanceAnalytics();
	res.status(200).json(attendanceAnalytics);
});

exports.getDashboardMetrics = asyncHandler(async (req, res) => {
	const metrics = await reportingService.getDashboardMetrics();
	res.status(200).json(metrics);
});
