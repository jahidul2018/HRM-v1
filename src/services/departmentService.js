const Department = require("../models/departmentModel");

exports.createDepartment = async (departmentData) => {
	const department = new Department(departmentData);
	return await department.save();
};

exports.getDepartments = async () => {
	return await Department.find();
};
