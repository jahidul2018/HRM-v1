const Employee = require("../models/employeeModel");

exports.getEmployeeProfile = async (employeeId) => {
	return await Employee.findById(employeeId);
};

exports.updateEmployeeProfile = async (employeeId, updateData) => {
	return await Employee.findByIdAndUpdate(employeeId, updateData, {
		new: true,
	});
};
