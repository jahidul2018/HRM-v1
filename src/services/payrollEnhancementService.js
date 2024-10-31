const Payroll = require("../models/payrollModel");

// Tax configuration (simple percentage-based for example)
const TAX_RATE = 0.1; // 10% tax rate

exports.calculatePayroll = async (employeeId, baseSalary, overtimeHours) => {
	// Calculate taxes
	const grossSalary = baseSalary + overtimeHours * (baseSalary / 160); // Assuming 160 working hours per month
	const tax = grossSalary * TAX_RATE;
	const netSalary = grossSalary - tax;

	const payroll = new Payroll({
		employee: employeeId,
		grossSalary,
		tax,
		netSalary,
		generatedAt: new Date(),
	});

	return await payroll.save();
};
