const departmentService = require("../services/departmentService");
const asyncHandler = require("express-async-handler");

exports.createDepartment = asyncHandler(async (req, res) => {
	const department = await departmentService.createDepartment(req.body);
	res.status(201).json(department);
});

exports.getDepartments = asyncHandler(async (req, res) => {
	const departments = await departmentService.getDepartments();
	res.status(200).json(departments);
});
