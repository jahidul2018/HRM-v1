const Payroll = require("../../models/payrollModel");

exports.getPayrollSummaryData = async (month, year) => {
	return await Payroll.find({ month, year })
		.populate("employee", "name department designation")
		.select("employee baseSalary bonuses deductions netPay month year");
};
