const payrollService = require("../services/payrollService");
const asyncHandler = require("express-async-handler");

exports.calculateMonthlyPayroll = asyncHandler(async (req, res) => {
	const {
		employeeId,
		year,
		month,
		baseSalary,
		overtimeRatePerHour,
		extraDayRate,
	} = req.body;

	const payrollData = {
		baseSalary,
		overtimeRatePerHour,
		extraDayRate,
	};

	const payrollRecord = await payrollService.calculateMonthlyPayroll(
		employeeId,
		year,
		month,
		payrollData
	);
	res.status(201).json(payrollRecord);
});

exports.getEmployeePayrollRecords = asyncHandler(async (req, res) => {
	const payrollRecords = await payrollService.getEmployeePayroll(req.user._id);
	res.status(200).json(payrollRecords);
});

exports.updatePayrollStatus = asyncHandler(async (req, res) => {
	const payroll = await payrollService.updatePayrollStatus(
		req.params.payrollId,
		req.body.status
	);
	res.status(200).json(payroll);
});
