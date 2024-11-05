const Employee = require("../../models/employeeModel");

exports.getEmployeeProfileData = async (employeeId) => {
	return await Employee.findById(employeeId)
		.populate("department", "name")
		.populate("designation", "title")
		.populate("trainingProfile")
		.select(
			"name email phone address department designation jobHistory certifications"
		);
};
