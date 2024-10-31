const employeeService = require("../services/employeeService");
const asyncHandler = require("express-async-handler");
const complianceService = require("../services/complianceService");

exports.createEmployee = asyncHandler(async (req, res) => {
	const employee = await employeeService.createEmployee(req.body);
	res.status(201).json(employee);
});

exports.getEmployee = asyncHandler(async (req, res) => {
	const employee = await employeeService.getEmployee(req.params.employeeId);
	res.status(200).json(employee);
});

exports.updateEmployee = asyncHandler(async (req, res) => {
	const employee = await employeeService.updateEmployee(
		req.params.employeeId,
		req.body
	);
	res.status(200).json(employee);
});

exports.deleteEmployee = asyncHandler(async (req, res) => {
	await employeeService.deleteEmployee(req.params.employeeId);
	res.status(200).json({ message: "Employee deleted" });
});

exports.updateSalary = asyncHandler(async (req, res) => {
	const employee = await employeeService.updateSalary(
		req.params.employeeId,
		req.body.salary
	);
	res.status(200).json(employee);
});

exports.updateLeaveBalance = asyncHandler(async (req, res) => {
	const employee = await employeeService.updateLeaveBalance(
		req.params.employeeId,
		req.body.leaveDays
	);
	res.status(200).json(employee);
});

exports.addDocument = asyncHandler(async (req, res) => {
	const employee = await employeeService.addDocument(
		req.params.employeeId,
		req.body
	);
	res.status(200).json(employee);
});

const updateEmployeeDetails = async (employeeId, updateData) => {
	const updatedEmployee = await Employee.findByIdAndUpdate(
		employeeId,
		updateData,
		{ new: true }
	);

	// Create an audit log
	await complianceService.createComplianceRecord({
		employee: employeeId,
		type: "audit",
		description: "Updated employee details",
		auditDetails: {
			action: "Update",
			details: `Employee details updated for ID ${employeeId}`,
		},
	});

	return updatedEmployee;
};

exports.getEmergencyContact = asyncHandler(async (req, res) => {
	const emergencyContact = await employeeService.getEmergencyContact(
		req.user._id
	);
	res.status(200).json(emergencyContact);
});
