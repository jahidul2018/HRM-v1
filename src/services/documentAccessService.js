const Employee = require("../models/employeeModel");

exports.getEmployeeDocuments = async (employeeId) => {
	const employee = await Employee.findById(employeeId).select("documents");
	return employee ? employee.documents : [];
};
