const Payroll = require("../models/payrollModel");
const attendanceService = require("./attendanceService");
const Employee = require("../models/employeeModel");
const Designation = require("../models/designationModel");
const payrollIntegration = require("../integrations/payrollIntegration");

const Payroll = require("../models/payrollModel");
const Attendance = require("../models/attendanceModel");
const Expense = require("../models/expenseModel");

exports.calculateSalary = async (payrollData) => {
	const {
		baseSalary,
		overtimeHours,
		extraDays,
		overtimeRatePerHour,
		extraDayRate,
	} = payrollData;

	const overtimePay = overtimeHours * overtimeRatePerHour;
	const extraDayPay = extraDays * extraDayRate;
	const finalSalary = baseSalary + overtimePay + extraDayPay;

	return { ...payrollData, finalSalary };
};

exports.createPayrollRecord = async (payrollData) => {
	const payroll = new Payroll(payrollData);
	return await payroll.save();
};

exports.calculateMonthlyPayrollWithoutDesignationModel = async (
	employeeId,
	year,
	month,
	payrollData
) => {
	// Get the attendance summary for the employee for the specified month
	const attendanceSummary = await attendanceService.getMonthlyAttendanceSummary(
		employeeId,
		year,
		month
	);

	const { daysPresent, halfDays, totalWorkingHours } = attendanceSummary;
	const { baseSalary, overtimeRatePerHour, extraDayRate } = payrollData;

	// Calculate the daily rate (assuming 22 working days in a month)
	const dailyRate = baseSalary / 22;

	// Calculate salary based on attendance
	const presentSalary = daysPresent * dailyRate;
	const halfDaySalary = halfDays * dailyRate * 0.5;

	// Calculate overtime and extra day pay
	const overtimePay = totalWorkingHours * overtimeRatePerHour;
	const extraDayPay = daysPresent > 22 ? (daysPresent - 22) * extraDayRate : 0;

	// Final monthly salary calculation
	const finalSalary = presentSalary + halfDaySalary + overtimePay + extraDayPay;

	// Save the payroll record
	const payrollRecord = new Payroll({
		employee: employeeId,
		baseSalary,
		month,
		year,
		overtimeHours: totalWorkingHours,
		extraDays: daysPresent > 22 ? daysPresent - 22 : 0,
		overtimeRatePerHour,
		extraDayRate,
		finalSalary,
	});

	return await payrollRecord.save();
};

exports.calculateMonthlyPayroll = async (employeeId, year, month) => {
	// Retrieve employee and designation data
	const employee = await Employee.findById(employeeId).populate("designation");
	if (!employee || !employee.designation)
		throw new Error("Employee or designation not found");

	const designation = employee.designation;
	const attendanceSummary = await attendanceService.getMonthlyAttendanceSummary(
		employeeId,
		year,
		month
	);

	const { daysPresent, halfDays, totalWorkingHours } = attendanceSummary;

	// Calculate based on designation details
	const dailyRate = designation.baseSalary / 22;
	const providentFund =
		designation.baseSalary * (designation.providentFundRate / 100);
	const monthlyBonus = designation.baseSalary * (designation.bonusRate / 100);
	const overtimePay = totalWorkingHours * designation.overtimeRatePerHour;
	const extraDayPay = daysPresent > 22 ? (daysPresent - 22) * dailyRate : 0;
	const festiveBonus = designation.festiveBonus;

	// Calculate present and half day salary
	const presentSalary = daysPresent * dailyRate;
	const halfDaySalary = halfDays * dailyRate * 0.5;

	// Final monthly salary calculation
	const finalSalary =
		presentSalary +
		halfDaySalary +
		overtimePay +
		extraDayPay +
		monthlyBonus +
		festiveBonus -
		providentFund;

	// Save payroll record
	const payrollRecord = new Payroll({
		employee: employeeId,
		baseSalary: designation.baseSalary,
		month,
		year,
		overtimeHours: totalWorkingHours,
		extraDays: daysPresent > 22 ? daysPresent - 22 : 0,
		overtimeRatePerHour: designation.overtimeRatePerHour,
		extraDayRate: dailyRate,
		providentFund,
		bonus: monthlyBonus,
		festiveBonus,
		finalSalary,
	});

	return await payrollRecord.save();
};

exports.getEmployeePayroll = async (employeeId) => {
	return await Payroll.find({ employee: employeeId });
};

exports.updatePayrollStatus = async (payrollId, status) => {
	return await Payroll.findByIdAndUpdate(payrollId, { status }, { new: true });
};

exports.generateAndProcessPayroll = async (employeeId, baseSalary, tax) => {
	const netSalary = baseSalary - tax;
	const payrollData = { baseSalary, tax, netSalary };
	await payrollIntegration.processPayroll(employeeId, payrollData);
};

exports.calculatePayroll = async (employeeId, month) => {
	const attendance = await Attendance.find({ employee: employeeId, month });
	const baseSalary = await getBaseSalary(employeeId);
	const overtimeHours = calculateOvertime(attendance);
	const expenseReimbursements = await Expense.find({
		employee: employeeId,
		month,
		status: "Approved",
	});
	const tax = baseSalary * 0.1;

	const payrollData = {
		grossSalary: baseSalary + overtimeHours * hourlyRate,
		reimbursements: sumExpenses(expenseReimbursements),
		tax,
		netSalary: grossSalary + reimbursements - tax,
	};
	return await Payroll.create({ employee: employeeId, ...payrollData });
};
