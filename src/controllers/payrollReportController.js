const payrollReportService = require("../services/payrollReportService");
const asyncHandler = require("express-async-handler");

exports.getPayrollReport = asyncHandler(async (req, res) => {
	const report = await payrollReportService.generatePayrollReport();
	res.status(200).json(report);
});
