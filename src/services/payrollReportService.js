const Payroll = require("../models/payrollModel");

exports.generatePayrollReport = async () => {
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
