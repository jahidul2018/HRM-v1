const Employee = require("../models/employeeModel");

exports.createEmployee = async (employeeData) => {
	const employee = new Employee(employeeData);
	return await employee.save();
};

exports.getEmployee = async (employeeId) => {
	return await Employee.findById(employeeId).populate("department team");
};

exports.updateEmployee = async (employeeId, updateData) => {
	return await Employee.findByIdAndUpdate(employeeId, updateData, {
		new: true,
	});
};

exports.deleteEmployee = async (employeeId) => {
	return await Employee.findByIdAndDelete(employeeId);
};

exports.updateSalary = async (employeeId, newSalary) => {
	return await Employee.findByIdAndUpdate(
		employeeId,
		{ salary: newSalary },
		{ new: true }
	);
};

exports.updateLeaveBalance = async (employeeId, leaveDays) => {
	const employee = await Employee.findById(employeeId);
	employee.leaveBalance += leaveDays;
	return await employee.save();
};

exports.addDocument = async (employeeId, document) => {
	const employee = await Employee.findById(employeeId);
	employee.documents.push(document);
	return await employee.save();
};

exports.getEmergencyContact = async (employeeId) => {
	const employee = await Employee.findById(employeeId).select(
		"emergencyContact safetyProtocols"
	);
	return employee;
};
