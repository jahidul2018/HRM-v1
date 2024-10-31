const Timesheet = require("../models/timesheetModel");

exports.logWorkHours = async (timesheetData) => {
	const timesheet = new Timesheet(timesheetData);
	return await timesheet.save();
};

exports.getTimesheetsByProject = async (projectId) => {
	return await Timesheet.find({ project: projectId }).populate(
		"employee",
		"name"
	);
};

exports.getTimesheetsByEmployee = async (employeeId) => {
	return await Timesheet.find({ employee: employeeId }).populate(
		"project",
		"name"
	);
};
